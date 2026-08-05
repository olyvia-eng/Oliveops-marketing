import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { NextRequest, NextResponse } from "next/server";
import { createBetaWaitlistItem, validateBetaWaitlistInput } from "@/lib/betaWaitlist";
import { sendBetaWaitlistNotification, sendBetaWaitlistConfirmation } from "@/lib/sendBetaWaitlistEmail";

const tableName = process.env.BETA_WAITLIST_TABLE_NAME || "OliveOps-betawaitlist";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-2",
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
    ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        ...(process.env.AWS_SESSION_TOKEN ? { sessionToken: process.env.AWS_SESSION_TOKEN } : {}),
      }
    : undefined,
});

const docClient = DynamoDBDocumentClient.from(client);

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const validation = validateBetaWaitlistInput(payload);

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: "Please complete the required fields.", errors: validation.errors },
        { status: 400 }
      );
    }

    const item = createBetaWaitlistItem(payload);

    const existing = await docClient.send(
      new ScanCommand({
        TableName: tableName,
        FilterExpression: "email = :email",
        ExpressionAttributeValues: { ":email": item.email },
        ProjectionExpression: "email",
      })
    );

    if ((existing.Items?.length ?? 0) > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already on the beta waitlist.",
          errors: { email: "This email is already on the beta waitlist." },
        },
        { status: 409 }
      );
    }

    // 1. Write the waitlist record. Emails are sent only if this succeeds.
    await docClient.send(new PutCommand({ TableName: tableName, Item: item }));

    // 2. Send internal admin notification. Failure does not affect the response.
    sendBetaWaitlistNotification({ ...item }).catch((err) =>
      console.error("Admin notification failed (non-fatal)", err)
    );

    // 3. Send confirmation email to the applicant.
    const confirmation = await sendBetaWaitlistConfirmation({
      name: item.name,
      email: item.email,
    });

    // 4. Record whether the confirmation was sent. Failure here is non-fatal.
    if (confirmation.success) {
      const sentAt = new Date().toISOString();
      docClient
        .send(
          new UpdateCommand({
            TableName: tableName,
            Key: { id: item.id },
            UpdateExpression:
              "SET confirmationSent = :sent, confirmationSentAt = :sentAt",
            ExpressionAttributeValues: {
              ":sent": true,
              ":sentAt": sentAt,
            },
          })
        )
        .catch((err) =>
          console.error("Failed to update confirmationSent in DynamoDB (non-fatal)", err)
        );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for joining the OliveOps beta. We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Beta waitlist submission failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "We could not save your submission right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}


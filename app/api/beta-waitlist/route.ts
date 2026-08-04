import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { NextRequest, NextResponse } from "next/server";
import { createBetaWaitlistItem, validateBetaWaitlistInput } from "@/lib/betaWaitlist";
import { sendBetaWaitlistNotification } from "@/lib/sendBetaWaitlistEmail";

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

    const normalized = createBetaWaitlistItem(payload);

    const existing = await docClient.send(
      new ScanCommand({
        TableName: tableName,
        FilterExpression: "email = :email",
        ExpressionAttributeValues: {
          ":email": normalized.email,
        },
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

    await docClient.send(
      new PutCommand({
        TableName: tableName,
        Item: normalized,
      })
    );

    await sendBetaWaitlistNotification({
      ...normalized,
      createdAt: normalized.createdAt,
    });

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

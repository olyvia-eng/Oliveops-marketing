import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-2",
  credentials: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
    ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        ...(process.env.AWS_SESSION_TOKEN ? { sessionToken: process.env.AWS_SESSION_TOKEN } : {}),
      }
    : undefined,
});

export interface BetaWaitlistEmailPayload {
  name: string;
  companyName: string;
  email: string;
  phone?: string;
  contractorType?: string;
  employeeCount?: string;
  currentSoftware?: string;
  painPoint?: string;
  createdAt?: string;
}

export async function sendBetaWaitlistNotification(payload: BetaWaitlistEmailPayload) {
  const toAddress = process.env.BETA_WAITLIST_NOTIFICATION_EMAIL || "olivia@landcorexcavating.ca";
  const fromAddress = process.env.BETA_WAITLIST_FROM_EMAIL;

  if (!fromAddress) {
    return { success: false, error: "Missing BETA_WAITLIST_FROM_EMAIL" };
  }

  const subject = `New OliveOps beta request from ${payload.name || "a new lead"}`;
  const bodyText = [
    `Name: ${payload.name || "N/A"}`,
    `Company: ${payload.companyName || "N/A"}`,
    `Email: ${payload.email || "N/A"}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Contractor Type: ${payload.contractorType || "N/A"}`,
    `Employee Count: ${payload.employeeCount || "N/A"}`,
    `Current Software: ${payload.currentSoftware || "N/A"}`,
    `Pain Point: ${payload.painPoint || "N/A"}`,
    `Submitted: ${payload.createdAt || "N/A"}`,
  ].join("\n");

  const command = new SendEmailCommand({
    Source: fromAddress,
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: bodyText,
        },
      },
    },
  });

  try {
    await sesClient.send(command);
    return { success: true };
  } catch (error) {
    console.error("Failed to send beta waitlist notification email", error);
    return { success: false, error };
  }
}

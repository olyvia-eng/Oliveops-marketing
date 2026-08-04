import { Resend } from "resend";

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
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.BETA_WAITLIST_NOTIFICATION_EMAIL || "olyvia@landcorexcavating.ca";
  const fromAddress = process.env.BETA_WAITLIST_FROM_EMAIL || "OliveOps <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set — skipping email notification");
    return { success: false, error: "Missing RESEND_API_KEY" };
  }

  const resend = new Resend(apiKey);

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

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New OliveOps beta request from ${payload.name || "a new lead"}`,
      text: bodyText,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send beta waitlist notification email", error);
    return { success: false, error };
  }
}

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

// Sends an internal admin notification when a new signup arrives.
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

// Sends a branded confirmation email to the person who just joined the waitlist.
// Returns { success: true } on delivery, { success: false } on any failure.
// Callers must not reject the signup if this function fails.
export async function sendBetaWaitlistConfirmation(payload: { name: string; email: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = "OliveOps <support@oliveops.ca>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set — skipping confirmation email");
    return { success: false, error: "Missing RESEND_API_KEY" };
  }

  const resend = new Resend(apiKey);

  // Greeting uses first name if available, otherwise falls back to a generic greeting
  const firstName = payload.name.split(" ")[0] || "there";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to the OliveOps Beta Waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f8fafc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0f172a;border-radius:12px 12px 0 0;padding:32px 40px;text-align:left;">
              <span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                <span style="color:#6b8e23;">&#9632;</span> OliveOps
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;border-radius:0 0 12px 12px;">
              <p style="margin:0 0 20px 0;font-size:16px;color:#0f172a;line-height:1.5;">
                Hi ${firstName},
              </p>
              <p style="margin:0 0 20px 0;font-size:16px;color:#475569;line-height:1.6;">
                Thanks for joining the OliveOps beta waitlist.
              </p>
              <p style="margin:0 0 20px 0;font-size:16px;color:#475569;line-height:1.6;">
                We&rsquo;re building OliveOps to simplify the day-to-day operations of contractors&mdash;from CRM and
                estimating to scheduling, job management, employee management, time tracking, and reporting.
              </p>
              <p style="margin:0 0 20px 0;font-size:16px;color:#475569;line-height:1.6;">
                We&rsquo;re inviting businesses in small groups so we can gather feedback and continue improving the platform.
                You&rsquo;ll be among the first to know when beta access becomes available.
              </p>
              <p style="margin:0 0 32px 0;font-size:16px;color:#475569;line-height:1.6;">
                In the meantime, you can follow our progress at
                <a href="https://oliveops.ca" style="color:#6b8e23;text-decoration:underline;">oliveops.ca</a>.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px 0;" />

              <p style="margin:0 0 4px 0;font-size:16px;color:#0f172a;line-height:1.5;">Thanks again,</p>
              <p style="margin:0 0 2px 0;font-size:16px;font-weight:700;color:#0f172a;line-height:1.5;">Olyvia Field</p>
              <p style="margin:0;font-size:14px;color:#6b8e23;line-height:1.5;">Founder, OliveOps</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
                OliveOps &mdash; The operating system for contractors.
                <br />
                You received this email because you signed up at
                <a href="https://oliveops.ca" style="color:#94a3b8;">oliveops.ca</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `Hi ${firstName},

Thanks for joining the OliveOps beta waitlist.

We're building OliveOps to simplify the day-to-day operations of contractors—from CRM and estimating to scheduling, job management, employee management, time tracking, and reporting.

We're inviting businesses in small groups so we can gather feedback and continue improving the platform. You'll be among the first to know when beta access becomes available.

In the meantime, you can follow our progress at https://oliveops.ca.

Thanks again,

Olyvia Field
Founder, OliveOps

---
OliveOps — The operating system for contractors.
You received this email because you signed up at oliveops.ca.`;

  try {
    await resend.emails.send({
      from: fromAddress,
      to: payload.email,
      subject: "Welcome to the OliveOps Beta Waitlist",
      html,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send beta waitlist confirmation email", error);
    return { success: false, error };
  }
}

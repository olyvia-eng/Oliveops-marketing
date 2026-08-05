/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Cookie Policy — OliveOps",
  description: "Information about cookies and similar technologies used on OliveOps.",
  openGraph: {
    title: "Cookie Policy — OliveOps",
    description: "Information about cookies and similar technologies used on OliveOps.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "What Are Cookies?", level: 2 as const },
  { id: "types", label: "Types of Cookies and Technologies", level: 2 as const },
  { id: "authentication", label: "Authentication Cookies", level: 3 as const },
  { id: "preference", label: "Preference Cookies", level: 3 as const },
  { id: "analytics", label: "Analytics and Performance Cookies", level: 3 as const },
  { id: "storage", label: "Local and Session Storage", level: 3 as const },
  { id: "third-party", label: "Third-Party Technologies", level: 2 as const },
  { id: "consent", label: "Cookie Consent", level: 2 as const },
  { id: "browser-controls", label: "Browser Controls and Opt-Out", level: 2 as const },
  { id: "gpc", label: "Global Privacy Control", level: 2 as const },
  { id: "changes", label: "Changes to This Policy", level: 2 as const },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How OliveOps uses cookies and similar tracking technologies"
      estimatedReadTime="5 min read"
      tableOfContents={tableOfContents}
      currentPage="cookies"
    >
      <LegalSection level={2} id="introduction" title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device (computer, tablet, or mobile phone) that contain information about your
          browsing activity. Cookies help websites remember your preferences and provide a better user experience.
        </p>
        <p>
          This Cookie Policy explains what cookies and similar technologies OliveOps uses, why we use them, and how you can manage
          them.
        </p>
      </LegalSection>

      <LegalSection level={2} id="types" title="2. Types of Cookies and Technologies">
        <p>
          OliveOps uses the following categories of cookies and similar technologies:
        </p>

        <LegalSection level={3} id="authentication" title="2.1 Authentication Cookies">
          <p>
            <strong>Purpose:</strong> Essential for authenticating your identity and maintaining your login session.
          </p>
          <p>
            <strong>Examples:</strong> Session tokens, authentication credentials, user identifiers.
          </p>
          <p>
            <strong>Duration:</strong> Session-based (expire when you close your browser) or persistent for "remember me" functionality.
          </p>
          <p>
            <strong>User choice:</strong> These cookies are required for OliveOps to function and cannot be disabled.
          </p>
        </LegalSection>

        <LegalSection level={3} id="preference" title="2.2 Preference Cookies">
          <p>
            <strong>Purpose:</strong> Remember your preferences and settings, such as language, theme (light/dark mode), UI preferences.
          </p>
          <p>
            <strong>Examples:</strong> Theme preference, layout settings, time zone, notification preferences.
          </p>
          <p>
            <strong>Duration:</strong> Persistent, typically stored for 1-2 years.
          </p>
          <p>
            <strong>User choice:</strong> You may disable preference cookies, but some customizations will not be saved.
          </p>
        </LegalSection>

        <LegalSection level={3} id="analytics" title="2.3 Analytics and Performance Cookies">
          <p>
            <strong>Purpose:</strong> Help us understand how OliveOps is used, including which features are popular, where users click,
            and how long they spend on pages. This helps us improve the service.
          </p>
          <p>
            <strong>Current status:</strong> OliveOps does not currently use third-party analytics services like Google Analytics.
            However, we may implement analytics in the future to better understand user behavior and improve the platform.
          </p>
          <p>
            <strong>User choice:</strong> If we implement analytics cookies, you will be able to opt out through your account settings
            or browser controls.
          </p>
        </LegalSection>

        <LegalSection level={3} id="storage" title="2.4 Local and Session Storage">
          <p>
            <strong>Purpose:</strong> Store application state, cache data, and improve performance.
          </p>
          <p>
            <strong>Examples:</strong> Cached UI components, unsaved form data, temporary user preferences.
          </p>
          <p>
            <strong>Duration:</strong> Session-based or persistent depending on the purpose.
          </p>
          <p>
            <strong>Functionality:</strong> Similar to cookies but typically larger and not transmitted to servers with every request.
          </p>
        </LegalSection>
      </LegalSection>

      <LegalSection level={2} id="third-party" title="3. Third-Party Technologies">
        <p>
          OliveOps may integrate with third-party services that use their own cookies and tracking technologies:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Email service providers:</strong> May use cookies for email tracking or authentication
          </li>
          <li>
            <strong>Payment processors:</strong> May use cookies for secure payment processing
          </li>
          <li>
            <strong>Hosting and CDN services:</strong> Vercel and AWS services may use cookies for security and performance
          </li>
          <li>
            <strong>Future integrations:</strong> Third-party accounting or business tools may use their own cookies
          </li>
        </ul>
        <p>
          We are not responsible for the cookie practices of third-party services. Please refer to their privacy policies for
          information about their cookie usage.
        </p>
      </LegalSection>

      <LegalSection level={2} id="consent" title="4. Cookie Consent">
        <p>
          <strong>Essential cookies:</strong> Authentication and essential operational cookies are necessary for OliveOps to function
          and do not require consent.
        </p>
        <p>
          <strong>Non-essential cookies:</strong> For preference, analytics, and marketing cookies, we obtain your consent where
          required by law before storing them on your device.
        </p>
        <p>
          You can update your cookie preferences at any time through your account settings or by contacting {legalConfig.legalEmail}.
        </p>
      </LegalSection>

      <LegalSection level={2} id="browser-controls" title="5. Browser Controls and Opt-Out">
        <p>
          Most browsers allow you to control cookies through settings:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Delete cookies:</strong> Clear cookies stored on your device</li>
          <li><strong>Block new cookies:</strong> Prevent websites from setting new cookies</li>
          <li><strong>Third-party cookies:</strong> Block cookies from third-party services</li>
          <li><strong>Private browsing:</strong> Browse without storing cookies (for that session)</li>
        </ul>
        <p>
          <strong>Note:</strong> If you disable essential cookies, OliveOps may not function properly. You may not be able to log in
          or use certain features.
        </p>
      </LegalSection>

      <LegalSection level={2} id="gpc" title="6. Global Privacy Control">
        <p>
          If your browser or device supports the Global Privacy Control (GPC) signal, OliveOps will recognize and honor your privacy
          preference to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="changes" title="7. Changes to This Policy">
        <p>
          We may update this Cookie Policy to reflect changes in our practices or technologies. We will notify you of material changes
          by updating the effective date and posting the revised policy on this page.
        </p>
      </LegalSection>

      <div className="mt-12 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
        <p className="text-sm text-[#475569] dark:text-[#CBD5E1]">
          <strong>Need more information?</strong> For questions about our cookie practices or to request a detailed list of cookies used
          by OliveOps, please contact {legalConfig.legalEmail}.
        </p>
      </div>
    </LegalPage>
  );
}

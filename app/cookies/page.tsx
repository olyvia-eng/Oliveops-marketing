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
  { id: "scope", label: "Scope of This Policy", level: 2 as const },
  { id: "essential", label: "Essential Technologies", level: 2 as const },
  { id: "application", label: "OliveOps Application", level: 2 as const },
  { id: "analytics", label: "Analytics and Performance", level: 2 as const },
  { id: "advertising", label: "Advertising and Marketing", level: 2 as const },
  { id: "future", label: "Optional and Future Technologies", level: 2 as const },
  { id: "browser-controls", label: "Browser Controls", level: 2 as const },
  { id: "changes", label: "Changes to This Policy", level: 2 as const },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How OliveOps uses cookies and similar technologies"
      estimatedReadTime="5 min read"
      tableOfContents={tableOfContents}
      currentPage="cookies"
      contactEmail={legalConfig.privacyEmail}
    >
      <LegalSection level={2} id="introduction" title="1. What Are Cookies?">
        <p>
          Cookies are small text files placed on your device by a website. They are used to remember information between
          page loads and sessions. Similar technologies include local storage, session storage, and browser cache.
        </p>
        <p>
          This Cookie Policy explains what technologies OliveOps uses, why, and how you can manage them.
        </p>
      </LegalSection>

      <LegalSection level={2} id="scope" title="2. Scope of This Policy">
        <p>
          OliveOps operates two distinct environments:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Marketing website (oliveops.ca):</strong> Public pages including this website, the beta waitlist, pricing, and
            contact form. Limited cookies and storage are used here.
          </li>
          <li>
            <strong>OliveOps application (app.oliveops.ca):</strong> The authenticated contractor operations platform. This environment
            may use additional cookies and browser storage to deliver application features. Authentication, session management, and
            application preferences are handled in the application environment.
          </li>
        </ul>
        <p>
          This policy covers both environments. Where a practice applies only to one environment, this is noted.
        </p>
      </LegalSection>

      <LegalSection level={2} id="essential" title="3. Essential Technologies">
        <p>
          The following technologies are necessary for the website and application to function. They do not require consent.
        </p>
        <ul className="space-y-4 list-none">
          <li>
            <strong>Hosting and security (Vercel, AWS):</strong> Our hosting and infrastructure providers may set cookies or
            collect request logs for security, rate limiting, and content delivery purposes. These are governed by their own privacy
            policies.
          </li>
          <li>
            <strong>Form submissions:</strong> When you submit a form (such as the beta waitlist or contact form), your browser
            sends the form data to our servers. No tracking cookies are set by these forms.
          </li>
          <li>
            <strong>Application session management (application only):</strong> When you sign in to the OliveOps application,
            session cookies or tokens are used to maintain your authenticated session. These are essential for the application to
            function and cannot be disabled while signed in.
          </li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="application" title="4. OliveOps Application">
        <p>
          Within the OliveOps application (app.oliveops.ca), browser storage technologies may be used to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Maintain your authenticated session</li>
          <li>Remember interface preferences such as display settings</li>
          <li>Cache data to reduce loading times</li>
          <li>Store unsaved form drafts temporarily</li>
        </ul>
        <p>
          These technologies are required for the application to function. You can clear them at any time using your browser settings,
          though doing so will sign you out and reset any saved preferences.
        </p>
      </LegalSection>

      <LegalSection level={2} id="analytics" title="5. Analytics and Performance">
        <p>
          <strong>Current status:</strong> OliveOps does not currently use third-party analytics cookies or tracking services
          (such as Google Analytics) on the marketing website or application.
        </p>
        <p>
          If analytics are added in the future, this policy will be updated and, where required by law, your consent will be
          requested before analytics cookies are set.
        </p>
      </LegalSection>

      <LegalSection level={2} id="advertising" title="6. Advertising and Marketing Cookies">
        <p>
          OliveOps does not currently use advertising cookies, cross-site behavioural advertising, or third-party marketing
          trackers on the marketing website or application.
        </p>
        <p>
          If this changes in the future, this policy will be updated and consent will be obtained where required by law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="future" title="7. Optional and Future Technologies">
        <p>
          OliveOps may in the future integrate services such as analytics providers, payment processors, or third-party tools that
          use their own cookies or tracking technologies. Any such integration will be disclosed in an updated version of this policy.
        </p>
        <p>
          You will be notified of material changes before they take effect.
        </p>
      </LegalSection>

      <LegalSection level={2} id="browser-controls" title="8. Browser Controls">
        <p>
          You can manage cookies and browser storage using your browser settings:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Delete cookies:</strong> Clear all cookies stored on your device</li>
          <li><strong>Block cookies:</strong> Prevent websites from setting new cookies</li>
          <li><strong>Private browsing:</strong> Browse without storing cookies for that session</li>
          <li><strong>Clear local storage:</strong> Remove cached data stored by web applications</li>
        </ul>
        <p>
          Blocking or deleting essential cookies may prevent the OliveOps application from functioning correctly and will sign
          you out of your account.
        </p>
        <p>
          For guidance on managing cookies in your browser, refer to your browser's help documentation.
        </p>
      </LegalSection>

      <LegalSection level={2} id="changes" title="9. Changes to This Policy">
        <p>
          We may update this Cookie Policy to reflect changes in our practices or applicable law. Material changes will be
          communicated by updating the effective date on this page and, where appropriate, through a notice in the application
          or by email.
        </p>
        <p>
          Please review this policy periodically.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

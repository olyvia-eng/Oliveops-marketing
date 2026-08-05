/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy — OliveOps",
  description: "Guidelines for reporting security vulnerabilities in OliveOps, including safe-harbour protections.",
  openGraph: {
    title: "Responsible Disclosure Policy — OliveOps",
    description: "Guidelines for reporting security vulnerabilities in OliveOps, including safe-harbour protections.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction", level: 2 as const },
  { id: "scope", label: "Scope", level: 2 as const },
  { id: "good-faith", label: "Good-Faith Research", level: 2 as const },
  { id: "allowed-testing", label: "Allowed Testing Activities", level: 2 as const },
  { id: "prohibited-testing", label: "Prohibited Testing Activities", level: 2 as const },
  { id: "no-social-engineering", label: "No Social Engineering", level: 2 as const },
  { id: "no-dos", label: "No Denial-of-Service Testing", level: 2 as const },
  { id: "no-privacy-violations", label: "No Privacy Violations", level: 2 as const },
  { id: "reporting", label: "How to Report Vulnerabilities", level: 2 as const },
  { id: "reporting-details", label: "What to Include in Your Report", level: 2 as const },
  { id: "response", label: "Our Response Process", level: 2 as const },
  { id: "response-times", label: "Response Timeframes", level: 2 as const },
  { id: "coordinated-disclosure", label: "Coordinated Disclosure", level: 2 as const },
  { id: "safe-harbour", label: "Safe Harbour Provisions", level: 2 as const },
  { id: "recognition", label: "Researcher Recognition", level: 2 as const },
  { id: "out-of-scope", label: "Out-of-Scope Findings", level: 2 as const },
];

export default function ResponsibleDisclosurePage() {
  return (
    <LegalPage
      title="Responsible Disclosure Policy"
      description="Guidelines for reporting security vulnerabilities in OliveOps"
      estimatedReadTime="4 min read"
      tableOfContents={tableOfContents}
      currentPage="responsible-disclosure"
    >
      <LegalSection level={2} id="introduction" title="1. Introduction">
        <p>
          OliveOps is committed to security and welcomes contributions from security researchers who follow responsible disclosure
          practices. This policy outlines how to report security vulnerabilities in OliveOps in a manner that helps us address issues
          quickly while protecting other users.
        </p>
        <p>
          We appreciate good-faith efforts to discover and report security vulnerabilities. Researchers who follow this policy will be
          treated fairly and may receive recognition for their contributions.
        </p>
      </LegalSection>

      <LegalSection level={2} id="scope" title="2. Scope">
        <p>
          This policy applies to security vulnerabilities in:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>The OliveOps web application</li>
          <li>The OliveOps API</li>
          <li>OliveOps infrastructure and services</li>
          <li>Other OliveOps-owned systems and services</li>
        </ul>
        <p>
          This policy does not apply to third-party services, infrastructure, or code that OliveOps uses but does not own or operate
          (e.g., Vercel, AWS, open-source dependencies).
        </p>
      </LegalSection>

      <LegalSection level={2} id="good-faith" title="3. Good-Faith Research">
        <p>
          For the purposes of this policy, good-faith research means:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Testing for vulnerabilities in a manner designed to discover, not exploit or harm</li>
          <li>Avoiding privacy violations and unauthorized access</li>
          <li>Not disrupting or degrading the availability or performance of the service for other users</li>
          <li>Not accessing data belonging to other users or organizations</li>
          <li>Promptly reporting vulnerabilities through proper channels</li>
          <li>Avoiding public disclosure until OliveOps has had an opportunity to remediate</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="allowed-testing" title="4. Allowed Testing Activities">
        <p>
          You may conduct the following security research activities:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Manual code review and analysis</li>
          <li>Testing with your own user account to discover vulnerabilities that could affect your data</li>
          <li>Fuzz testing and input validation testing against OliveOps services</li>
          <li>Testing for common vulnerability classes (SQL injection, XSS, CSRF, etc.)</li>
          <li>Testing for authentication and authorization bypasses</li>
          <li>Testing for data exposure or privacy issues</li>
          <li>Testing for insecure cryptographic practices</li>
          <li>Analysis of published security documentation and advisories</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="prohibited-testing" title="5. Prohibited Testing Activities">
        <p>
          The following activities are <strong>not</strong> permitted without prior written authorization:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Accessing accounts or data that do not belong to you</li>
          <li>Modifying or deleting data (except your own test data)</li>
          <li>Accessing OliveOps' internal systems or infrastructure</li>
          <li>Accessing or monitoring other users' communications</li>
          <li>Using automated tools or scripts that could harm performance</li>
          <li>Attempting to exploit vulnerabilities for personal gain</li>
          <li>Accessing systems after discovering a vulnerability (report instead)</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="no-social-engineering" title="6. No Social Engineering">
        <p>
          Social engineering (attempting to trick employees into revealing sensitive information or performing actions) is not
          permitted under this policy.
        </p>
      </LegalSection>

      <LegalSection level={2} id="no-dos" title="7. No Denial-of-Service Testing">
        <p>
          Testing that results in denial-of-service (making the service unavailable to legitimate users) is prohibited. This includes:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Distributed denial-of-service (DDoS) attacks</li>
          <li>Volumetric attacks designed to consume bandwidth or resources</li>
          <li>Exhaustion attacks that overload servers or databases</li>
        </ul>
        <p>
          If you believe you have discovered a DoS vulnerability, report it immediately without triggering the vulnerability.
        </p>
      </LegalSection>

      <LegalSection level={2} id="no-privacy-violations" title="8. No Privacy Violations">
        <p>
          Do not:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Access or view data belonging to other users or organizations</li>
          <li>Extract or copy sensitive personal or business information</li>
          <li>Violate user privacy or confidentiality</li>
          <li>Access health, financial, or other sensitive personal information</li>
        </ul>
        <p>
          If you discover a privacy vulnerability that affects other users' data, report it immediately without accessing additional
          data.
        </p>
      </LegalSection>

      <LegalSection level={2} id="reporting" title="9. How to Report Vulnerabilities">
        <p>
          Please report security vulnerabilities directly to {legalConfig.securityEmail}.
        </p>
        <p>
          <strong>Do not:</strong>
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Publicly disclose the vulnerability before OliveOps has had an opportunity to remediate</li>
          <li>Post vulnerabilities on public issue trackers or social media</li>
          <li>Share vulnerability details with third parties without authorization</li>
          <li>Report vulnerabilities through support channels (use the security email above)</li>
        </ul>
        <p>
          Use PGP encryption for sensitive reports if available.
        </p>
      </LegalSection>

      <LegalSection level={2} id="reporting-details" title="10. What to Include in Your Report">
        <p>
          Provide the following information in your vulnerability report:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>A clear description of the vulnerability</li>
          <li>The type of vulnerability (e.g., SQL injection, authentication bypass)</li>
          <li>The affected system, component, or endpoint</li>
          <li>Steps to reproduce the vulnerability</li>
          <li>The potential impact or severity of the vulnerability</li>
          <li>Any proof-of-concept code or screenshots (without compromising other users' data)</li>
          <li>Your contact information and public PGP key (if available)</li>
          <li>The date you discovered the vulnerability</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="response" title="11. Our Response Process">
        <p>
          Upon receiving a vulnerability report, OliveOps will:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Acknowledge receipt of your report</li>
          <li>Investigate the vulnerability and assess its severity</li>
          <li>Develop and test a fix</li>
          <li>Deploy the fix to production</li>
          <li>Notify you when the vulnerability has been remediated</li>
          <li>Provide updates on our progress (if appropriate)</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="response-times" title="12. Response Timeframes">
        <p>
          <strong>OliveOps does not guarantee specific response or remediation timeframes.</strong> Response times may vary depending on:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>The severity and complexity of the vulnerability</li>
          <li>The availability of OliveOps engineers and security team members</li>
          <li>The need for additional investigation or testing</li>
          <li>The need to coordinate with third-party service providers</li>
        </ul>
        <p>
          High-severity vulnerabilities will receive priority attention. We will make good-faith efforts to remediate vulnerabilities
          in a reasonable timeframe.
        </p>
      </LegalSection>

      <LegalSection level={2} id="coordinated-disclosure" title="13. Coordinated Disclosure">
        <p>
          Once OliveOps has remediated a vulnerability, we may publish information about the issue, including:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>A description of the vulnerability</li>
          <li>The date it was discovered and fixed</li>
          <li>Information about the impact and remediation</li>
          <li>Attribution to the researcher (if desired)</li>
        </ul>
        <p>
          We will coordinate the timing and content of public disclosure with you to ensure adequate time for your own disclosure or
          publication if desired.
        </p>
      </LegalSection>

      <LegalSection level={2} id="safe-harbour" title="14. Safe Harbour Provisions">
        <p>
          OliveOps recognizes that good-faith security research is valuable and necessary. Provided you comply with this policy, OliveOps
          will not take legal action against you for:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Unauthorized access to OliveOps systems (only to the extent necessary to discover vulnerabilities)</li>
          <li>Violation of the Computer Fraud and Abuse Act (CFAA) or similar laws (to the extent permitted by law)</li>
          <li>Terms of Service violations resulting from good-faith security research</li>
          <li>Disclosure of vulnerability information in accordance with this policy</li>
        </ul>
        <p>
          <strong>Important:</strong> This safe-harbour language is subject to applicable law and does not override prohibitions against
          illegal activity. If you engage in illegal activity (e.g., theft, fraud, unauthorized access beyond what is necessary for
          research), OliveOps reserves all rights and remedies.
        </p>
      </LegalSection>

      <LegalSection level={2} id="recognition" title="15. Researcher Recognition">
        <p>
          OliveOps may publicly recognize security researchers who responsibly disclose vulnerabilities. Recognition may include:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Inclusion in a "Hall of Fame" or credits list on our website</li>
          <li>Attribution in security advisories</li>
          <li>Public acknowledgment of your contribution</li>
        </ul>
        <p>
          You may request anonymity or decline recognition. OliveOps will respect your preference.
        </p>
      </LegalSection>

      <LegalSection level={2} id="out-of-scope" title="16. Out-of-Scope Findings">
        <p>
          The following are generally <strong>out of scope</strong> for this policy and do not require a vulnerability report:
        </p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Vulnerabilities in third-party services or libraries (report to the third-party provider)</li>
          <li>Vulnerabilities in outdated or deprecated components</li>
          <li>Missing security headers (unless they pose a significant risk)</li>
          <li>Information disclosure that does not pose a security risk</li>
          <li>Features working as designed (not bugs or vulnerabilities)</li>
          <li>Social engineering or phishing vulnerabilities</li>
          <li>Staff directory information or public organizational details</li>
        </ul>
        <p>
          If you are unsure whether a finding is in scope, please contact {legalConfig.securityEmail} for clarification.
        </p>
      </LegalSection>

      <div className="mt-12 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
        <h3 className="mb-4 font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Report a vulnerability</h3>
        <p className="text-sm text-[#475569] dark:text-[#CBD5E1]">
          Please send vulnerability reports to: <a href={`mailto:${legalConfig.securityEmail}`} className="font-semibold text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            {legalConfig.securityEmail}
          </a>
        </p>
      </div>
    </LegalPage>
  );
}

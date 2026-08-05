/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — OliveOps",
  description: "Rules and guidelines for acceptable use of OliveOps, including prohibited activities and enforcement.",
  openGraph: {
    title: "Acceptable Use Policy — OliveOps",
    description: "Rules and guidelines for acceptable use of OliveOps, including prohibited activities and enforcement.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction", level: 2 as const },
  { id: "prohibited", label: "Prohibited Activities", level: 2 as const },
  { id: "illegal", label: "Illegal and Unlawful Activity", level: 3 as const },
  { id: "unauthorized-access", label: "Unauthorized Access and Security", level: 3 as const },
  { id: "malware", label: "Malware and Harmful Code", level: 3 as const },
  { id: "security-testing", label: "Unauthorized Security Testing", level: 3 as const },
  { id: "abuse", label: "Abuse and Harassment", level: 3 as const },
  { id: "privacy", label: "Privacy Violations", level: 3 as const },
  { id: "intellectual-property", label: "Intellectual Property Infringement", level: 3 as const },
  { id: "spam", label: "Spam and Phishing", level: 3 as const },
  { id: "scraping", label: "Scraping and Data Extraction", level: 3 as const },
  { id: "disruption", label: "Service Disruption", level: 3 as const },
  { id: "credentials", label: "Credential Sharing and Account Abuse", level: 3 as const },
  { id: "limits", label: "Circumventing Usage Limits", level: 3 as const },
  { id: "high-risk", label: "High-Risk Uses", level: 3 as const },
  { id: "regulated-content", label: "Uploading Regulated or Unlawful Content", level: 3 as const },
  { id: "employee-monitoring", label: "Misuse of Employee Monitoring Features", level: 3 as const },
  { id: "ai-features", label: "Misuse of AI Features", level: 3 as const },
  { id: "enforcement", label: "Enforcement and Reporting", level: 2 as const },
  { id: "consequences", label: "Consequences of Violation", level: 3 as const },
  { id: "reporting", label: "Reporting Violations", level: 3 as const },
  { id: "remediation", label: "Remediation and Appeal", level: 3 as const },
];

export default function AUPPage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      description="Rules governing lawful and ethical use of OliveOps"
      estimatedReadTime="6 min read"
      tableOfContents={tableOfContents}
      currentPage="aup"
      contactEmail={legalConfig.legalEmail}
    >
      <LegalSection level={2} id="introduction" title="1. Introduction">
        <p>
          This Acceptable Use Policy ("Policy") outlines the rules and guidelines for acceptable use of OliveOps. By using OliveOps, you
          agree to comply with this Policy and all applicable laws and regulations.
        </p>
        <p>
          OliveOps is provided for lawful business purposes only. We reserve the right to enforce this Policy by suspending or
          terminating accounts that violate these rules.
        </p>
      </LegalSection>

      <LegalSection level={2} id="prohibited" title="2. Prohibited Activities">
        <p>
          You agree not to use OliveOps for any of the following prohibited activities:
        </p>

        <LegalSection level={3} id="illegal" title="2.1 Illegal and Unlawful Activity">
          <p>
            Any activity that violates applicable federal, provincial, territorial, or local laws and regulations, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Fraud, forgery, or embezzlement</li>
            <li>Money laundering or terrorist financing</li>
            <li>Drug trafficking or possession of controlled substances</li>
            <li>Human trafficking or exploitation</li>
            <li>Theft or receiving stolen property</li>
            <li>Any other criminal activity</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="unauthorized-access" title="2.2 Unauthorized Access and Security">
          <p>
            Attempting to gain unauthorized access to OliveOps, other accounts, or systems, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Hacking or breaking into systems</li>
            <li>Using other users' login credentials</li>
            <li>Intercepting communications</li>
            <li>Bypassing authentication or security measures</li>
            <li>Accessing accounts without authorization</li>
            <li>Sharing login credentials with unauthorized parties</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="malware" title="2.3 Malware and Harmful Code">
          <p>
            Uploading, transmitting, or distributing malware, viruses, worms, trojans, ransomware, or any code or content designed to
            harm, disrupt, or compromise systems or data.
          </p>
        </LegalSection>

        <LegalSection level={3} id="security-testing" title="2.4 Unauthorized Security Testing">
          <p>
            Conducting penetration testing, vulnerability assessments, or security testing against OliveOps infrastructure or services
            without prior written permission. See our <a href="/responsible-disclosure" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              Responsible Disclosure policy
            </a>{" "}
            for information on authorized security research.
          </p>
        </LegalSection>

        <LegalSection level={3} id="abuse" title="2.5 Abuse and Harassment">
          <p>
            Harassing, threatening, abusing, defaming, or targeting any individual or group, including through:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Hate speech or discrimination</li>
            <li>Bullying or threatening behavior</li>
            <li>Sexual harassment</li>
            <li>Doxxing or revealing private information</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="privacy" title="2.6 Privacy Violations">
          <p>
            Collecting, processing, or storing personal information in violation of privacy laws or without appropriate consent, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Violating PIPEDA, GDPR, or other privacy regulations</li>
            <li>Processing employee or customer data without consent or lawful basis</li>
            <li>Storing data in violation of applicable law</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="intellectual-property" title="2.7 Intellectual Property Infringement">
          <p>
            Uploading or using content that infringes copyrights, trademarks, patents, or other intellectual property rights, or
            circumventing copy protection mechanisms.
          </p>
        </LegalSection>

        <LegalSection level={3} id="spam" title="2.8 Spam and Phishing">
          <p>
            Sending unsolicited bulk email (spam) or phishing messages designed to deceive recipients or steal credentials.
          </p>
        </LegalSection>

        <LegalSection level={3} id="scraping" title="2.9 Scraping and Data Extraction">
          <p>
            Automatically scraping, crawling, or extracting large amounts of data from OliveOps without authorization, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Using bots or scripts to extract data</li>
            <li>Reverse engineering the platform</li>
            <li>Decompiling or disassembling code</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="disruption" title="2.10 Service Disruption">
          <p>
            Activities that disrupt, damage, or impair the availability, integrity, or functionality of OliveOps, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Denial-of-service (DoS) attacks</li>
            <li>Distributed denial-of-service (DDoS) attacks</li>
            <li>Introducing defects or vulnerabilities</li>
            <li>Consuming excessive resources</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="credentials" title="2.11 Credential Sharing and Account Abuse">
          <p>
            Sharing login credentials with unauthorized users or allowing others to use your account in violation of the Terms of Service.
          </p>
        </LegalSection>

        <LegalSection level={3} id="limits" title="2.12 Circumventing Usage Limits">
          <p>
            Attempting to circumvent subscription limits, usage restrictions, or other safeguards through technical means or deception.
          </p>
        </LegalSection>

        <LegalSection level={3} id="high-risk" title="2.13 High-Risk Uses">
          <p>
            Using OliveOps in contexts involving high-risk or critical operations without appropriate safeguards, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Aviation, transportation, or hazardous operations</li>
            <li>Medical or healthcare decision-making</li>
            <li>Financial or critical infrastructure operations</li>
            <li>Nuclear power or weapons systems</li>
          </ul>
          <p>
            If your use involves high-risk operations, you are responsible for implementing appropriate redundancy, testing, and safety
            measures.
          </p>
        </LegalSection>

        <LegalSection level={3} id="regulated-content" title="2.14 Uploading Regulated or Unlawful Content">
          <p>
            Uploading, storing, or transmitting content that is unlawful or violates regulations, including:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Child sexual abuse material (CSAM)</li>
            <li>Export-controlled items or information</li>
            <li>Sanctions-evading materials</li>
            <li>Counterfeit goods or materials</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="employee-monitoring" title="2.15 Misuse of Employee Monitoring Features">
          <p>
            If you use OliveOps for employee time tracking, location monitoring, or activity tracking, you must:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Obtain proper consent from employees before implementing monitoring</li>
            <li>Comply with employment laws and employee privacy rights</li>
            <li>Provide employees notice of monitoring practices</li>
            <li>Use monitoring data only for legitimate business purposes</li>
            <li>Not use monitoring data to discriminate or harass employees</li>
          </ul>
          <p>
            OliveOps is not responsible for ensuring your compliance with employment monitoring laws. Consult with employment counsel to
            ensure lawful implementation.
          </p>
        </LegalSection>

        <LegalSection level={3} id="ai-features" title="2.16 Misuse of AI Features">
          <p>
            If you use AI-powered features within OliveOps, you must not:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Use AI outputs for discriminatory purposes</li>
            <li>Rely on AI for critical decisions without human review</li>
            <li>Use AI to generate misleading or fraudulent content</li>
            <li>Use AI in violation of applicable law or regulations</li>
          </ul>
        </LegalSection>
      </LegalSection>

      <LegalSection level={2} id="enforcement" title="3. Enforcement and Reporting">
        <LegalSection level={3} id="consequences" title="3.1 Consequences of Violation">
          <p>
            If OliveOps determines that you have violated this Policy, OliveOps may take the following actions:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li><strong>Warning:</strong> Written notice of the violation and requirement to cease the activity</li>
            <li><strong>Suspension:</strong> Temporary loss of access to OliveOps or specific features</li>
            <li><strong>Termination:</strong> Permanent termination of your account and access to the Service</li>
            <li><strong>Legal action:</strong> Cooperation with law enforcement or civil litigation</li>
            <li><strong>Recovery of damages:</strong> Seeking reimbursement for costs related to the violation</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="reporting" title="3.2 Reporting Violations">
          <p>
            If you become aware of a violation of this Policy, please report it to {legalConfig.legalEmail} with:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>A description of the violation</li>
            <li>Evidence or documentation supporting your report</li>
            <li>Account information or user identifiers involved</li>
            <li>When the violation occurred</li>
          </ul>
        </LegalSection>

        <LegalSection level={3} id="remediation" title="3.3 Remediation and Appeal">
          <p>
            If your account is suspended or terminated:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>You will receive written notice explaining the violation</li>
            <li>You may have an opportunity to appeal the decision to {legalConfig.legalEmail}</li>
            <li>OliveOps will provide a reasonable opportunity to remedy the violation where appropriate</li>
            <li>You may be able to export your data during a grace period after termination</li>
          </ul>
          <p>
            OliveOps reserves the right to immediately terminate accounts for serious violations or repeated violations, with no
            opportunity for remediation.
          </p>
        </LegalSection>
      </LegalSection>
    </LegalPage>
  );
}

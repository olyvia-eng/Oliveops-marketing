/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Privacy Policy — OliveOps",
  description: "Learn how OliveOps collects, uses, and protects your personal and business data.",
  openGraph: {
    title: "Privacy Policy — OliveOps",
    description: "Learn how OliveOps collects, uses, and protects your personal and business data.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction and Scope", level: 2 as const },
  { id: "definitions", label: "Definitions", level: 2 as const },
  { id: "information-collection", label: "Information Collection", level: 2 as const },
  { id: "account-authentication", label: "Account and Authentication", level: 3 as const },
  { id: "business-information", label: "Business and Organization Data", level: 3 as const },
  { id: "billing-transaction", label: "Billing and Transaction Information", level: 3 as const },
  { id: "crm-records", label: "CRM and Customer Records", level: 3 as const },
  { id: "property-job-site", label: "Property and Job-Site Information", level: 3 as const },
  { id: "financial-records", label: "Estimates, Invoices, and Financial Records", level: 3 as const },
  { id: "employee-data", label: "Employee and Workforce Information", level: 3 as const },
  { id: "time-tracking", label: "Time Entries, Schedules, and Attendance", level: 3 as const },
  { id: "documents-attachments", label: "Documents, Photos, and Attachments", level: 3 as const },
  { id: "technical-data", label: "Technical and Usage Information", level: 3 as const },
  { id: "cookies", label: "Cookies and Analytics", level: 3 as const },
  { id: "location-data", label: "Location and GPS Information", level: 3 as const },
  { id: "ai-features", label: "AI-Assisted Features", level: 3 as const },
  { id: "use-of-information", label: "Use of Information", level: 2 as const },
  { id: "legal-basis", label: "Legal Bases for Processing (GDPR)", level: 2 as const },
  { id: "service-providers", label: "Service Providers and Subprocessors", level: 2 as const },
  { id: "data-transfers", label: "International Data Transfers", level: 2 as const },
  { id: "retention", label: "Data Retention", level: 2 as const },
  { id: "deletion", label: "Account Deletion and Data Removal", level: 2 as const },
  { id: "security", label: "Security Safeguards", level: 2 as const },
  { id: "privacy-rights", label: "Your Privacy Rights", level: 2 as const },
  { id: "marketing", label: "Marketing Communications", level: 2 as const },
  { id: "children", label: "Children's Privacy", level: 2 as const },
  { id: "changes", label: "Changes to This Policy", level: 2 as const },
  { id: "contact", label: "Contact Information", level: 2 as const },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How OliveOps collects, uses, processes, and protects your information"
      estimatedReadTime="12 min read"
      tableOfContents={tableOfContents}
      currentPage="privacy"
      contactEmail={legalConfig.privacyEmail}
    >
      <LegalSection level={2} id="introduction" title="1. Introduction and Scope">
        <p>
          This Privacy Policy describes how {legalConfig.companyLegalName} ("we," "us," "our," or "<strong>OliveOps</strong>")
          collects, uses, discloses, and otherwise processes personal information and business data in connection with our
          cloud-based contractor operations platform, including the web application and related services (collectively, the "<strong>Service</strong>").
        </p>
        <p>
          This policy applies to anyone who uses OliveOps, including organization administrators, team members, business partners,
          and visitors to our website.
        </p>
        <p>
          <strong>Important:</strong> OliveOps processes information on behalf of organizations (contractors, trade professionals,
          and service businesses) that use our platform. In many cases, the organization is responsible for deciding what
          information to collect and how to use it. We act as a service provider processing data according to our customers'
          instructions.
        </p>
      </LegalSection>

      <LegalSection level={2} id="definitions" title="2. Definitions">
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Personal Information:</strong> Information that identifies or can identify an individual, including name, email, phone, postal address, and IP address.</li>
          <li><strong>Business Information:</strong> Information about an organization, business operations, customers, properties, jobs, and financial transactions.</li>
          <li><strong>Customer Data:</strong> Any personal information or business information submitted to OliveOps by our customers or their users.</li>
          <li><strong>Service Providers:</strong> Third-party companies that process data on our behalf under contract.</li>
          <li><strong>Subprocessors:</strong> Third-party services used by OliveOps or our service providers to process customer data.</li>
          <li><strong>Processing:</strong> Any operation performed on information, including collection, storage, use, analysis, transmission, and deletion.</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="information-collection" title="3. Information Collection">
        <p>We collect information in the following categories:</p>

        <LegalSection level={3} id="account-authentication" title="3.1 Account and Authentication Information">
          <p>
            When you create an OliveOps account or sign in, we collect your name, email address, password hash, phone number
            (optional), organization name, role, and authentication method. We may also collect login history, device information,
            and IP addresses for security purposes.
          </p>
        </LegalSection>

        <LegalSection level={3} id="business-information" title="3.2 Business and Organization Data">
          <p>
            You may provide information about your business, including company name, legal entity details, industry, location,
            business structure, employee count, billing address, tax identification, and other organizational details.
          </p>
        </LegalSection>

        <LegalSection level={3} id="billing-transaction" title="3.3 Billing and Transaction Information">
          <p>
            To process subscriptions and billing, we collect billing name, address, payment method information (processed by our
            payment partners, not stored directly by OliveOps), transaction history, subscription plan, usage data, and invoice
            records. Payment processing is handled by third-party payment providers; we do not store full credit card details.
          </p>
        </LegalSection>

        <LegalSection level={3} id="crm-records" title="3.4 CRM and Customer Records">
          <p>
            OliveOps stores CRM data that you input, including customer names, contact details, communication history, notes,
            tags, and relationship information. You control what customer information is collected and stored in your account.
          </p>
        </LegalSection>

        <LegalSection level={3} id="property-job-site" title="3.5 Property and Job-Site Information">
          <p>
            You may create records for properties and job sites, including address, property type, owner/tenant information,
            site notes, photos, and historical service records. Where enabled, location data may be associated with properties.
          </p>
        </LegalSection>

        <LegalSection level={3} id="financial-records" title="3.6 Estimates, Invoices, and Financial Records">
          <p>
            The platform allows you to create and manage estimates, proposals, invoices, and financial records. This information
            is stored in your account and may include line items, pricing, customer financial information, and payment status.
          </p>
        </LegalSection>

        <LegalSection level={3} id="employee-data" title="3.7 Employee and Workforce Information">
          <p>
            To manage team members, we collect employee names, email addresses, phone numbers, role/permissions, employment status,
            certifications (where applicable), and team assignments. Organization administrators are responsible for collecting
            appropriate consent from employees for the data they upload to OliveOps.
          </p>
        </LegalSection>

        <LegalSection level={3} id="time-tracking" title="3.8 Time Entries, Schedules, and Attendance">
          <p>
            When using time tracking, scheduling, and crew management features, we store work hours, start/end times, job assignments,
            attendance records, and related metadata. Where applicable, location data may be associated with time entries.
          </p>
        </LegalSection>

        <LegalSection level={3} id="documents-attachments" title="3.9 Documents, Photos, and Attachments">
          <p>
            You may upload documents, photos, forms, and attachments to OliveOps, including before/after photos, project documentation,
            contracts, permits, and communication records. We store and retrieve these files on your behalf.
          </p>
        </LegalSection>

        <LegalSection level={3} id="technical-data" title="3.10 Technical and Usage Information">
          <p>
            We automatically collect technical information including IP address, browser type, device type, operating system,
            pages visited, time spent, features used, errors encountered, and referrer information. This helps us improve the
            service and diagnose issues.
          </p>
        </LegalSection>

        <LegalSection level={3} id="cookies" title="3.11 Cookies and Analytics">
          <p>
            We use cookies and similar technologies for authentication, user preferences, and analytics. See our Cookie Policy
            for detailed information about cookies used.
          </p>
          <p>
            Note: We do not currently use third-party analytics services like Google Analytics, but we may use them in the future
            to understand user behavior and improve the platform.
          </p>
        </LegalSection>

        <LegalSection level={3} id="location-data" title="3.12 Location and GPS Information">
          <p>
            Where enabled in the mobile application, OliveOps may collect precise GPS location data to support location-based features
            such as crew tracking and job-site check-ins. Location collection is only active where explicitly enabled by users or
            administrators.
          </p>
        </LegalSection>

        <LegalSection level={3} id="ai-features" title="3.13 AI-Assisted Features">
          <p>
            Where enabled, OliveOps may use artificial intelligence to assist with tasks such as estimate generation, text suggestions,
            or data classification. AI features process only the data you provide and are subject to our AI terms in the Terms of Service.
          </p>
        </LegalSection>
      </LegalSection>

      <LegalSection level={2} id="use-of-information" title="4. Use of Information">
        <p>We use information for the following purposes:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Providing and maintaining the Service</li>
          <li>Processing subscriptions and billing</li>
          <li>Authenticating users and managing accounts</li>
          <li>Enabling communication between users and customers</li>
          <li>Improving the Service and user experience</li>
          <li>Diagnosing and fixing technical issues</li>
          <li>Complying with legal obligations</li>
          <li>Preventing fraud and unauthorized access</li>
          <li>Aggregating and analyzing usage patterns (in de-identified form)</li>
          <li>Sending service-related announcements and updates</li>
          <li>Responding to support requests</li>
          <li>Where applicable, sending marketing communications (with your consent)</li>
        </ul>
        <p>
          We do not use personal information for purposes beyond what is described in this policy without obtaining your consent.
        </p>
      </LegalSection>

      <LegalSection level={2} id="legal-basis" title="5. Legal Bases for Processing (GDPR)">
        <p>
          Under GDPR and similar privacy laws, we process personal information on the following legal bases:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Performance of Contract:</strong> Processing necessary to provide the Service you've requested</li>
          <li><strong>Legitimate Interests:</strong> Processing for security, fraud prevention, and service improvement</li>
          <li><strong>Legal Obligation:</strong> Compliance with applicable laws and regulations</li>
          <li><strong>Consent:</strong> Where you have explicitly consented (e.g., marketing communications)</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="service-providers" title="6. Service Providers and Subprocessors">
        <p>
          OliveOps uses the following third-party service providers to process data on our behalf:
        </p>
        <ul className="space-y-3 list-disc list-inside">
          <li>
            <strong>Vercel:</strong> Hosting and deployment platform for the web application
          </li>
          <li>
            <strong>AWS (Amazon Web Services):</strong> Cloud infrastructure including DynamoDB for database storage and related services
          </li>
          <li>
            <strong>Resend:</strong> Transactional email service for notifications and communications
          </li>
        </ul>
        <p>
          Future integrations may include accounting software (e.g., QuickBooks), payment processors (e.g., Stripe), and other business
          tools. Where we add new subprocessors, we will update this policy and may notify existing customers of significant changes.
        </p>
        <p>
          See our <a href="/subprocessors" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">Subprocessors page</a> for
          a complete and current registry of service providers.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-transfers" title="7. International Data Transfers">
        <p>
          OliveOps operates servers in the United States (specifically in the us-east-2 AWS region). If you access OliveOps from
          outside the United States, your information is transferred to and processed in the United States.
        </p>
        <p>
          By using OliveOps, you consent to the transfer of your information to the United States. OliveOps complies with applicable
          international data transfer mechanisms, including Standard Contractual Clauses and adequacy decisions under privacy laws
          such as GDPR and Canadian PIPEDA.
        </p>
      </LegalSection>

      <LegalSection level={2} id="retention" title="8. Data Retention">
        <p>
          We retain personal information and customer data for as long as your account is active or as necessary to provide the Service.
        </p>
        <p>
          <strong>Specific retention periods:</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Account information: Retained while account is active; deleted upon account termination</li>
          <li>Customer and business data: Retained while the account is active; retained for a reasonable administrative period following cancellation to allow data export or recovery where offered</li>
          <li>Billing and transaction records: Retained for as long as reasonably necessary to comply with tax, accounting, and legal obligations</li>
          <li>Log and security data: Retained for as long as reasonably necessary for security analysis, incident investigation, and legal compliance</li>
        </ul>
        <p>
          After retention periods expire, information is deleted or anonymized. Certain information may be retained if required by law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="deletion" title="9. Account Deletion and Data Removal">
        <p>
          You may request deletion of your account and associated data at any time. Upon account deletion:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Your account login credentials are immediately disabled</li>
          <li>Customer data may be retained for a grace period to allow recovery or export</li>
          <li>Billing records are retained as required for tax and legal compliance</li>
          <li>Technical logs may be retained for security purposes</li>
        </ul>
        <p>
          To request account deletion, contact {legalConfig.legalEmail}.
        </p>
        <p>
          <strong>Backups and residual copies:</strong> OliveOps may retain backup copies of deleted data for disaster recovery and
          business continuity purposes, which may take time to fully purge. We are not obligated to delete data in backup systems if
          such deletion is technically infeasible or would violate applicable law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="security" title="10. Security Safeguards">
        <p>
          We implement security measures designed to protect personal information from unauthorized access, disclosure, alteration,
          and destruction. These include encryption in transit (HTTPS/TLS), secure authentication, role-based access controls, and
          regular security reviews.
        </p>
        <p>
          However, <strong>no system is completely secure</strong>. We cannot guarantee absolute security of information transmitted
          over the internet or stored digitally. See our <a href="/security" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">Security page</a> for
          more information about our security practices.
        </p>
      </LegalSection>

      <LegalSection level={2} id="privacy-rights" title="11. Your Privacy Rights">
        <p>
          <strong>Under PIPEDA (Canada's federal privacy law):</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>You have the right to access personal information we hold about you</li>
          <li>You may request correction of inaccurate or incomplete information</li>
          <li>You may withdraw consent to processing at any time</li>
          <li>You have the right to request our privacy practices and complaint procedures</li>
        </ul>
        <p>
          <strong>Under GDPR (if applicable):</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Right of access to your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten") in certain circumstances</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Rights related to automated decision-making and profiling</li>
        </ul>
        <p>
          To exercise any of these rights, contact {legalConfig.legalEmail} with specific details of your request.
        </p>
      </LegalSection>

      <LegalSection level={2} id="marketing" title="12. Marketing Communications">
        <p>
          We may send you service-related notifications, updates, and announcements. We will not send marketing emails without
          your consent. You may opt out of marketing communications at any time by following the unsubscribe link in our emails
          or by contacting {legalConfig.legalEmail}.
        </p>
      </LegalSection>

      <LegalSection level={2} id="children" title="13. Children's Privacy">
        <p>
          OliveOps is not intended for children under 13, and we do not knowingly collect information from children under 13.
          If we become aware that we have collected information from a child under 13, we will delete such information promptly.
          Parents or guardians who believe we have collected information from a child should contact {legalConfig.legalEmail}.
        </p>
      </LegalSection>

      <LegalSection level={2} id="changes" title="14. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements,
          or other factors. We will notify you of material changes by email or by prominent notice on our website. Your continued use
          of OliveOps following notice of changes constitutes your acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection level={2} id="contact" title="15. Contact Information">
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us:
        </p>
        <div className="bg-[#F8FAFC] p-4 rounded-lg dark:bg-[#111827]">
          <p className="text-sm">
            <strong>Privacy Contact:</strong>
            <br />
            {legalConfig.legalEmail}
            <br />
            <br />
            <strong>Mailing Address:</strong>
            <br />
            {legalConfig.mailingAddress}
            <br />
            <br />
            <strong>Jurisdiction:</strong>
            <br />
            {legalConfig.governingProvince}, {legalConfig.governingCountry}
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}

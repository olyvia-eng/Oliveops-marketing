/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Data Processing Addendum — OliveOps",
  description: "The Data Processing Addendum (DPA) governing OliveOps' role as a service provider and processor of customer data.",
  openGraph: {
    title: "Data Processing Addendum — OliveOps",
    description: "The Data Processing Addendum (DPA) governing OliveOps' role as a service provider and processor of customer data.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction and Acceptance", level: 2 as const },
  { id: "definitions", label: "Definitions", level: 2 as const },
  { id: "roles", label: "Roles and Responsibilities", level: 2 as const },
  { id: "processing-scope", label: "Processing Scope and Instructions", level: 2 as const },
  { id: "security", label: "Security Measures", level: 2 as const },
  { id: "subprocessors", label: "Subprocessors", level: 2 as const },
  { id: "data-subjects", label: "Data Subject Rights", level: 2 as const },
  { id: "incident-response", label: "Security Incidents", level: 2 as const },
  { id: "international-transfers", label: "International Data Transfers", level: 2 as const },
  { id: "deletion", label: "Return and Deletion", level: 2 as const },
  { id: "canadian-privacy", label: "Canadian Privacy Law (PIPEDA)", level: 2 as const },
  { id: "gdpr", label: "GDPR Provisions", level: 2 as const },
  { id: "audit", label: "Audits and Information Rights", level: 2 as const },
  { id: "contact", label: "Contact Information", level: 2 as const },
];

export default function DPAPage() {
  return (
    <LegalPage
      title="Data Processing Addendum"
      description="Addendum governing data processing, roles, security, and compliance"
      estimatedReadTime="14 min read"
      tableOfContents={tableOfContents}
      currentPage="dpa"
      contactEmail={legalConfig.legalEmail}
    >
      <LegalSection level={2} id="introduction" title="1. Introduction and Acceptance">
        <p>
          This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of the OliveOps Terms of Service. It becomes effective
          when a Customer accepts those Terms and OliveOps processes Personal Information on the Customer&rsquo;s behalf.
          Viewing this page alone does not create a separate agreement.
        </p>
        <p>
          In this DPA, {legalConfig.companyLegalName} (&ldquo;OliveOps&rdquo;) acts as the Processor or service provider;
          the Customer acts as the Controller or responsible organization for the Personal Data it submits to the Service.
        </p>
      </LegalSection>

      <LegalSection level={2} id="definitions" title="2. Definitions">
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person</li>
          <li><strong>Processing:</strong> Any operation performed on Personal Data, including collection, storage, use, transmission, and deletion</li>
          <li><strong>Controller:</strong> The Customer or organization that determines the purposes and means of processing</li>
          <li><strong>Processor:</strong> OliveOps, which processes data on behalf of the Controller</li>
          <li><strong>Subprocessor:</strong> A third-party service provider authorized to process data on behalf of OliveOps</li>
          <li><strong>Data Subject:</strong> The individual to whom Personal Data relates</li>
          <li><strong>Security Incident:</strong> Unauthorized access to, disclosure of, or loss of Personal Data</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="roles" title="3. Roles and Responsibilities">
        <p>
          <strong>Customer's Role as Controller:</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Determines what Personal Data to collect and how it will be processed</li>
          <li>Ensures lawful basis for processing exists (consent, contract, legal obligation, legitimate interest, etc.)</li>
          <li>Obtains necessary consents from Data Subjects (especially employees, customers, or contractors)</li>
          <li>Complies with privacy and data protection laws applicable in their jurisdiction</li>
          <li>Responds to Data Subject requests for access, correction, or deletion</li>
        </ul>
        <p>
          <strong>OliveOps' Role as Processor:</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Processes Personal Data only in accordance with Customer's instructions</li>
          <li>Implements appropriate security safeguards</li>
          <li>Maintains records of processing activities</li>
          <li>Assists Customer in responding to Data Subject requests</li>
          <li>Notifies Customer of security incidents without undue delay, as required by applicable law</li>
          <li>Deletes or returns Personal Data in accordance with the applicable agreement, legal obligations, technical limitations, and normal backup retention processes</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="processing-scope" title="4. Processing Scope and Instructions">
        <p>
          OliveOps processes Personal Data on behalf of Customer only to provide the OliveOps Service as described in the Terms of Service.
          Permitted processing includes:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Storage of Customer Data in our databases</li>
          <li>Transmission of data between Customer's devices and our servers</li>
          <li>Analysis and reporting on Customer Data</li>
          <li>Technical support and platform maintenance</li>
          <li>Security monitoring and fraud prevention</li>
          <li>Aggregation and de-identification for service improvement</li>
        </ul>
        <p>
          OliveOps will not process Personal Data for purposes other than those specified above without prior written approval from Customer.
        </p>
      </LegalSection>

      <LegalSection level={2} id="security" title="5. Security Measures">
        <p>
          OliveOps implements the following technical and organizational security measures:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Encryption of data in transit (TLS/HTTPS)</li>
          <li>Access controls for stored data, where supported by the applicable infrastructure provider</li>
          <li>Role-based access control (RBAC)</li>
          <li>User authentication and session management</li>
          <li>Regular security updates and vulnerability management</li>
          <li>Audit logging and monitoring</li>
          <li>Employee confidentiality obligations</li>
          <li>Incident response procedures</li>
        </ul>
        <p>
          Additional security details are available in our <a href="/security" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            Security page
          </a>.
        </p>
      </LegalSection>

      <LegalSection level={2} id="subprocessors" title="6. Subprocessors">
        <p>
          OliveOps uses third-party subprocessors to process Personal Data on our behalf. Customer consents to the use of subprocessors
          as listed on our <a href="/subprocessors" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            Subprocessors page
          </a>.
        </p>
        <p>
          <strong>Current Subprocessors:</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Vercel:</strong> Hosting and deployment</li>
          <li><strong>AWS (Amazon Web Services):</strong> Database and cloud infrastructure</li>
          <li><strong>Resend:</strong> Email communications</li>
        </ul>
        <p>
          <strong>Changes to Subprocessors:</strong> OliveOps may add or replace subprocessors as necessary to provide the Service.
          Where practical, we will provide notice of material changes. Customers who object to a new subprocessor may contact us at {legalConfig.legalEmail} to discuss the concern. Resolution will depend on the applicable agreement and circumstances.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-subjects" title="7. Data Subject Rights">
        <p>
          OliveOps will assist Customer in fulfilling Data Subject requests for:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Right of access:</strong> To obtain copies of Personal Data held</li>
          <li><strong>Right to rectification:</strong> To correct inaccurate or incomplete data</li>
          <li><strong>Right to erasure:</strong> To delete Personal Data (where legally permitted)</li>
          <li><strong>Right to restrict processing:</strong> To limit how data is used</li>
          <li><strong>Right to data portability:</strong> To receive data in a structured, portable format</li>
          <li><strong>Right to object:</strong> To object to certain processing activities</li>
        </ul>
        <p>
          Customer remains responsible for responding to Data Subject requests and ensuring lawful compliance. OliveOps will provide
          reasonable assistance in response to requests, subject to operational feasibility.
        </p>
      </LegalSection>

      <LegalSection level={2} id="incident-response" title="8. Security Incidents">
        <p>
          If OliveOps becomes aware of a security breach or unauthorized access to Personal Data, we will:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Investigate the incident</li>
          <li>Document the scope and impact</li>
          <li>Notify Customer without undue delay (as required by law)</li>
          <li>Take steps to remediate the issue and prevent recurrence</li>
          <li>Preserve evidence for legal proceedings if necessary</li>
        </ul>
        <p>
          OliveOps will notify the primary account administrator at the email address on file. Customer is responsible for notifying
          affected Data Subjects as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="international-transfers" title="9. International Data Transfers">
        <p>
          Customer acknowledges that OliveOps processes Personal Data in the United States (specifically in the us-east-2 AWS region).
          By using OliveOps, Customer consents to the transfer of Personal Data to the United States.
        </p>
        <p>
          OliveOps complies with applicable mechanisms for international data transfers, including:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Standard Contractual Clauses (SCCs) or other transfer mechanisms under GDPR, where applicable</li>
          <li>Adequacy determinations where applicable</li>
          <li>Compliance with PIPEDA and Canadian privacy law</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="deletion" title="10. Return and Deletion">
        <p>
          Upon termination of the subscription or a written request by Customer, OliveOps will delete or return Customer Data
          in accordance with the applicable agreement, legal obligations, technical limitations, and normal backup retention
          processes. Specifically, OliveOps will:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Cease active processing of Personal Data</li>
          <li>Provide Customer a reasonable opportunity to export Personal Data where export is supported</li>
          <li>Remove Personal Data from production systems in accordance with normal deletion cycles</li>
          <li>Allow backup copies to persist until overwritten under normal retention cycles</li>
        </ul>
        <p>
          Certain financial, billing, security, and legal records may be retained longer where required or reasonably necessary.
          OliveOps will confirm deletion upon written request where feasible.
        </p>
      </LegalSection>

      <LegalSection level={2} id="canadian-privacy" title="11. Canadian Privacy Law (PIPEDA)">
        <p>
          Under the Personal Information Protection and Electronic Documents Act (PIPEDA) and similar Canadian privacy laws:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Customer remains the organization responsible for the collection and use of Personal Information</li>
          <li>OliveOps acts as a service provider on behalf of Customer</li>
          <li>OliveOps will not disclose Personal Information to third parties except as necessary to provide the Service</li>
          <li>OliveOps will implement security safeguards appropriate to the sensitivity of the information</li>
          <li>OliveOps will comply with Data Subject requests facilitated by Customer</li>
          <li>OliveOps will notify Customer of Privacy Commissioner complaints or inquiries related to Customer's Personal Information</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="gdpr" title="12. GDPR Provisions">
        <p>
          To the extent GDPR applies to the processing of Personal Data, the following additional provisions apply:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Customer is the "Controller" and OliveOps is the "Processor"</li>
          <li>This DPA constitutes an adequate written contract under GDPR Article 28</li>
          <li>OliveOps will process Personal Data only on documented instructions from Customer</li>
          <li>OliveOps will ensure that persons authorized to process Personal Data are subject to confidentiality obligations</li>
          <li>OliveOps will implement Technical and Organizational Measures (TOMs) as described in this DPA</li>
          <li>OliveOps will not engage subprocessors without prior specific or general written authorization from Customer</li>
          <li>OliveOps will assist Customer in fulfilling GDPR rights (access, rectification, erasure, etc.)</li>
          <li>OliveOps will assist Customer in complying with GDPR obligations (data protection impact assessments, privacy notices, etc.)</li>
          <li>OliveOps will delete or return Personal Data in accordance with the applicable agreement, legal obligations, and normal backup retention processes</li>
          <li>OliveOps will make available to Customer all information necessary to demonstrate compliance with GDPR Article 28</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="audit" title="13. Audits and Information Rights">
        <p>
          Customer has the right to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Request information about OliveOps' security practices and compliance measures</li>
          <li>Audit OliveOps' compliance with this DPA (with reasonable notice and during business hours)</li>
          <li>Request reports or documentation related to security incidents or data handling</li>
          <li>Receive copies of OliveOps' privacy policies and subprocessor agreements</li>
        </ul>
        <p>
          OliveOps will provide reasonable cooperation with audits and information requests, subject to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Reasonable notice (minimum 14 days)</li>
          <li>Reasonable scheduling to avoid operational disruption</li>
          <li>Confidentiality obligations for sensitive information</li>
          <li>Reimbursement of excessive audit costs if audits occur more than annually</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="contact" title="14. Contact Information">
        <p>
          For questions about this DPA, security practices, or data processing inquiries, contact:
        </p>
        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#111827]">
          <p className="text-sm">
            <strong>Privacy and Legal Contact:</strong>
            <br />
            <a href={`mailto:${legalConfig.legalEmail}`} className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              {legalConfig.legalEmail}
            </a>
            {legalConfig.mailingAddress && (
              <>
                <br /><br />
                <strong>Mailing Address:</strong>
                <br />
                {legalConfig.mailingAddress}
              </>
            )}
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}

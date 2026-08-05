/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Security — OliveOps",
  description: "OliveOps security practices, infrastructure, and safeguards for protecting your data.",
  openGraph: {
    title: "Security — OliveOps",
    description: "OliveOps security practices, infrastructure, and safeguards for protecting your data.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Security Philosophy", level: 2 as const },
  { id: "shared-responsibility", label: "Shared Responsibility Model", level: 2 as const },
  { id: "account-security", label: "Account Security", level: 2 as const },
  { id: "access-control", label: "Role-Based Access Control", level: 2 as const },
  { id: "authentication", label: "Authentication and Session Management", level: 2 as const },
  { id: "infrastructure", label: "Infrastructure and Hosting", level: 2 as const },
  { id: "data-transmission", label: "Data Transmission", level: 2 as const },
  { id: "storage", label: "Data Storage Safeguards", level: 2 as const },
  { id: "logging", label: "Logging and Monitoring", level: 2 as const },
  { id: "development", label: "Secure Development Practices", level: 2 as const },
  { id: "dependencies", label: "Dependency Management", level: 2 as const },
  { id: "incident-response", label: "Incident Response", level: 2 as const },
  { id: "employee-access", label: "Employee and Administrator Access", level: 2 as const },
  { id: "customer-responsibility", label: "Customer Security Responsibilities", level: 2 as const },
  { id: "responsible-disclosure", label: "Reporting Security Issues", level: 2 as const },
  { id: "certifications", label: "Certifications and Compliance", level: 2 as const },
  { id: "limitations", label: "Security Limitations", level: 2 as const },
];

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      description="Transparency about OliveOps' security architecture and safeguards"
      estimatedReadTime="8 min read"
      tableOfContents={tableOfContents}
      currentPage="security"
    >
      <LegalSection level={2} id="introduction" title="1. Security Philosophy">
        <p>
          At OliveOps, security is a fundamental priority. We design and operate our platform with the goal of protecting your
          business data, customer information, and employee records from unauthorized access, disclosure, and misuse.
        </p>
        <p>
          This page describes our current security practices and infrastructure. We are committed to continuous improvement and
          will update this documentation as our security practices evolve.
        </p>
      </LegalSection>

      <LegalSection level={2} id="shared-responsibility" title="2. Shared Responsibility Model">
        <p>
          Security is a shared responsibility between OliveOps and our customers:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>OliveOps is responsible for:</strong> Platform security, infrastructure hardening, data encryption, secure
            development, incident response, and monitoring
          </li>
          <li>
            <strong>Customers are responsible for:</strong> Account access management, strong passwords, two-factor authentication,
            employee access control, data classification, and compliance with their own legal obligations
          </li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="account-security" title="3. Account Security">
        <p>
          OliveOps provides the following account security features:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Unique login credentials:</strong> Each user must have a unique username and password</li>
          <li><strong>Password requirements:</strong> We enforce minimum password complexity standards</li>
          <li><strong>Session management:</strong> Login sessions expire after a period of inactivity</li>
          <li><strong>Login tracking:</strong> We log and monitor authentication attempts for suspicious activity</li>
          <li><strong>Account recovery:</strong> Secure password reset procedures are available</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="access-control" title="4. Role-Based Access Control">
        <p>
          OliveOps implements role-based access control (RBAC) to restrict access to data and features based on user roles and
          permissions. Administrators can assign different roles to team members with corresponding access levels.
        </p>
        <p>
          Administrators are responsible for properly configuring permissions and removing access for users who no longer should
          have it.
        </p>
      </LegalSection>

      <LegalSection level={2} id="authentication" title="5. Authentication and Session Management">
        <p>
          <strong>Authentication:</strong> OliveOps uses secure authentication mechanisms to verify user identity. Passwords are
          hashed using industry-standard algorithms and are never stored in plaintext.
        </p>
        <p>
          <strong>Sessions:</strong> User sessions are managed securely with authentication tokens. Sessions are subject to timeout
          periods to minimize the risk of unauthorized access.
        </p>
        <p>
          <strong>Multi-factor authentication (MFA):</strong> Where enabled, OliveOps may support MFA to provide an additional layer
          of security.
        </p>
      </LegalSection>

      <LegalSection level={2} id="infrastructure" title="6. Infrastructure and Hosting">
        <p>
          OliveOps is hosted on cloud infrastructure provided by industry-leading providers:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Vercel:</strong> Application hosting and content delivery
          </li>
          <li>
            <strong>AWS (Amazon Web Services):</strong> Database, storage, and related cloud services in the us-east-2 region
          </li>
        </ul>
        <p>
          These providers maintain their own security practices, compliance certifications, and incident response procedures. Please
          refer to their security documentation for details about their infrastructure safeguards.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-transmission" title="7. Data Transmission">
        <p>
          <strong>Encryption in transit:</strong> All data transmitted between your browser or device and OliveOps servers is
          encrypted using TLS (Transport Layer Security) protocol (HTTPS). This protects data from interception during transmission.
        </p>
        <p>
          <strong>API connections:</strong> API integrations with third-party services use secure, encrypted connections.
        </p>
      </LegalSection>

      <LegalSection level={2} id="storage" title="8. Data Storage Safeguards">
        <p>
          <strong>Data storage:</strong> Customer data is stored in AWS DynamoDB, which is a managed database service that provides
          physical security, access controls, and data redundancy.
        </p>
        <p>
          <strong>Encryption at rest:</strong> We employ encryption and access controls to protect stored data. Details about
          encryption implementation should be verified with our support team and applicable infrastructure documentation.
        </p>
        <p>
          <strong>Data redundancy:</strong> AWS provides data redundancy and failover mechanisms to protect against data loss.
        </p>
      </LegalSection>

      <LegalSection level={2} id="logging" title="9. Logging and Monitoring">
        <p>
          OliveOps maintains audit logs of system activity to detect and investigate security events. Logs include:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>User authentication and login attempts</li>
          <li>Data access and modifications</li>
          <li>Administrative actions</li>
          <li>System errors and exceptions</li>
        </ul>
        <p>
          We monitor these logs for suspicious patterns and potential security incidents.
        </p>
      </LegalSection>

      <LegalSection level={2} id="development" title="10. Secure Development Practices">
        <p>
          OliveOps follows secure software development practices, including:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Code review processes</li>
          <li>Security testing and quality assurance</li>
          <li>Input validation and output encoding to prevent injection attacks</li>
          <li>Secure error handling</li>
          <li>Least privilege access for development environments</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="dependencies" title="11. Dependency Management">
        <p>
          OliveOps is built using open-source and third-party libraries. We monitor these dependencies for known vulnerabilities and
          apply security updates regularly.
        </p>
      </LegalSection>

      <LegalSection level={2} id="incident-response" title="12. Incident Response">
        <p>
          In the event of a security incident:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>We will investigate the incident and assess the scope of any data exposure</li>
          <li>We will work to remediate the issue and prevent recurrence</li>
          <li>We will notify affected customers as required by applicable law</li>
          <li>We maintain an incident response plan and regularly review it</li>
        </ul>
        <p>
          To report a security vulnerability or suspected incident, please contact {legalConfig.securityEmail} or see our{" "}
          <a href="/responsible-disclosure" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            Responsible Disclosure policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection level={2} id="employee-access" title="13. Employee and Administrator Access">
        <p>
          OliveOps employees who require access to customer data for support or maintenance purposes are subject to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Confidentiality agreements</li>
          <li>Background checks</li>
          <li>Principle of least privilege access (access only to data necessary for their role)</li>
          <li>Audit logging of all access</li>
          <li>Regular security training</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="customer-responsibility" title="14. Customer Security Responsibilities">
        <p>
          To maintain security, customers should:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Use strong, unique passwords and change them regularly</li>
          <li>Enable multi-factor authentication where available</li>
          <li>Protect login credentials and do not share them</li>
          <li>Regularly review user access and remove users who no longer need access</li>
          <li>Monitor account activity and report suspicious behavior immediately</li>
          <li>Comply with your own security policies and data classification standards</li>
          <li>Implement appropriate business processes to protect sensitive customer data</li>
          <li>Ensure employees understand and follow your organization's security practices</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="responsible-disclosure" title="15. Reporting Security Issues">
        <p>
          If you discover a security vulnerability in OliveOps, please report it responsibly to {legalConfig.securityEmail}. Do not
          publicly disclose the vulnerability until we have had an opportunity to assess and remediate it.
        </p>
        <p>
          See our <a href="/responsible-disclosure" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            Responsible Disclosure policy
          </a>{" "}
          for detailed reporting guidelines and safe-harbour protections.
        </p>
      </LegalSection>

      <LegalSection level={2} id="certifications" title="16. Certifications and Compliance">
        <p>
          <strong>Important:</strong> We do not claim specific security certifications such as SOC 2, ISO 27001, HIPAA compliance, or
          similar unless independently verified and documented.
        </p>
        <p>
          We are committed to compliance with applicable privacy laws including Canadian PIPEDA and GDPR where applicable.
        </p>
        <p>
          For information about specific compliance requirements or certifications, please contact {legalConfig.legalEmail}.
        </p>
      </LegalSection>

      <LegalSection level={2} id="limitations" title="17. Security Limitations">
        <p>
          <strong>No system is completely secure.</strong> Despite our best efforts, security risks cannot be entirely eliminated:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Vulnerabilities may be discovered in software, dependencies, or infrastructure</li>
          <li>Human error or insider threats may occur</li>
          <li>Zero-day vulnerabilities may be exploited before we are aware of them</li>
          <li>Network or communication channels may be compromised</li>
          <li>Data breaches may occur despite security precautions</li>
        </ul>
        <p>
          We implement security controls to minimize risk, but we cannot guarantee that unauthorized access, data loss, or
          unauthorized disclosure will not occur. You accept these risks by using OliveOps.
        </p>
        <p>
          For guidance on your organization's compliance obligations and risk management, consult with qualified security and legal
          professionals.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

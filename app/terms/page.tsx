/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Terms of Service — OliveOps",
  description: "The legal agreement governing your use of OliveOps, including eligibility, responsibilities, and limitations.",
  openGraph: {
    title: "Terms of Service — OliveOps",
    description: "The legal agreement governing your use of OliveOps, including eligibility, responsibilities, and limitations.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction and Acceptance", level: 2 as const },
  { id: "definitions", label: "Definitions", level: 2 as const },
  { id: "eligibility", label: "Eligibility", level: 2 as const },
  { id: "business-use", label: "Business-Use Requirement", level: 2 as const },
  { id: "accounts", label: "Accounts and Authorized Users", level: 2 as const },
  { id: "admin", label: "Organization Administrators", level: 2 as const },
  { id: "responsibilities", label: "Customer Responsibilities", level: 2 as const },
  { id: "acceptable-use", label: "Acceptable Use", level: 2 as const },
  { id: "service-description", label: "Service Description", level: 2 as const },
  { id: "feature-changes", label: "Feature Changes and Discontinuation", level: 2 as const },
  { id: "beta-features", label: "Beta, Preview, and Experimental Features", level: 2 as const },
  { id: "subscription", label: "Subscription Plans and Billing", level: 2 as const },
  { id: "trials", label: "Free Trials", level: 2 as const },
  { id: "billing", label: "Billing and Taxes", level: 2 as const },
  { id: "renewal", label: "Automatic Renewal", level: 2 as const },
  { id: "cancellation", label: "Cancellation", level: 2 as const },
  { id: "refunds", label: "Refund Policy", level: 2 as const },
  { id: "data-ownership", label: "Customer Data Ownership", level: 2 as const },
  { id: "data-license", label: "License to Process Customer Data", level: 2 as const },
  { id: "data-export", label: "Data Exports", level: 2 as const },
  { id: "data-retention", label: "Data Retention After Termination", level: 2 as const },
  { id: "aggregated-data", label: "Aggregated and De-Identified Data", level: 2 as const },
  { id: "feedback", label: "Feedback", level: 2 as const },
  { id: "intellectual-property", label: "Intellectual Property", level: 2 as const },
  { id: "third-party", label: "Third-Party Services and Integrations", level: 2 as const },
  { id: "support", label: "Support", level: 2 as const },
  { id: "maintenance", label: "Maintenance and Availability", level: 2 as const },
  { id: "backups", label: "Backups", level: 2 as const },
  { id: "security", label: "Security", level: 2 as const },
  { id: "warranties", label: "Warranty Disclaimers", level: 2 as const },
  { id: "professional-advice", label: "No Professional Advice", level: 2 as const },
  { id: "estimates-disclaimer", label: "Estimates and Calculations Disclaimer", level: 2 as const },
  { id: "employment-disclaimer", label: "Employment and Payroll Disclaimer", level: 2 as const },
  { id: "monitoring-consent", label: "Employee Monitoring and Consent", level: 2 as const },
  { id: "limitation", label: "Limitation of Liability", level: 2 as const },
  { id: "indemnification", label: "Indemnification", level: 2 as const },
  { id: "suspension", label: "Suspension of Service", level: 2 as const },
  { id: "termination", label: "Termination", level: 2 as const },
  { id: "effect-termination", label: "Effect of Termination", level: 2 as const },
  { id: "governing-law", label: "Governing Law and Venue", level: 2 as const },
  { id: "changes", label: "Changes to These Terms", level: 2 as const },
  { id: "contact", label: "Contact Information", level: 2 as const },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Legal agreement governing your use of OliveOps"
      estimatedReadTime="15 min read"
      tableOfContents={tableOfContents}
      currentPage="terms"
      contactEmail={legalConfig.legalEmail}
    >
      <LegalSection level={2} id="introduction" title="1. Introduction and Acceptance">
        <p>
          These Terms of Service ("Terms") constitute a legal agreement between you and {legalConfig.companyLegalName}
          ("OliveOps," "we," "us," "our") governing your access to and use of the OliveOps platform, services, and website
          (collectively, the "Service").
        </p>
        <p>
          <strong>By accessing or using OliveOps, you acknowledge that you have read, understood, and agree to be bound by these
          Terms.</strong> If you do not agree to these Terms, do not use the Service.
        </p>
      </LegalSection>

      <LegalSection level={2} id="definitions" title="2. Definitions">
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Account:</strong> Your unique login credentials and profile on OliveOps</li>
          <li><strong>Customer Data:</strong> Any information, documents, or content you upload or input into OliveOps</li>
          <li><strong>Organization:</strong> The business or entity for which you are using OliveOps</li>
          <li><strong>Administrator:</strong> A user with full access and control over an Organization's account settings</li>
          <li><strong>User:</strong> Any person authorized by the Organization to access OliveOps</li>
          <li><strong>Service:</strong> The OliveOps platform, all features, functionality, documentation, and support</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="eligibility" title="3. Eligibility">
        <p>
          To use OliveOps, you must be:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>At least 18 years old (or the age of majority in your jurisdiction)</li>
          <li>Legally capable of entering into binding agreements</li>
          <li>Acting on behalf of an Organization with authority to accept these Terms</li>
          <li>Not prohibited by law from using the Service</li>
          <li>Not in violation of any sanctions, export controls, or restricted-party lists</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="business-use" title="4. Business-Use Requirement">
        <p>
          OliveOps is designed exclusively for business and professional use by contractors, trade professionals, and service
          businesses. You agree to use OliveOps only for lawful business purposes. Personal, consumer, or non-business use is
          prohibited without prior written consent from OliveOps.
        </p>
      </LegalSection>

      <LegalSection level={2} id="accounts" title="5. Accounts and Authorized Users">
        <p>
          You are responsible for maintaining the confidentiality of your account login credentials. You agree to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Provide accurate and current information during registration</li>
          <li>Notify OliveOps immediately of unauthorized access or security breaches</li>
          <li>Accept responsibility for all activity under your account credentials</li>
          <li>Ensure that only authorized individuals access your account</li>
        </ul>
        <p>
          You may not share login credentials or grant access to users not authorized by your Organization. Each user must have
          their own unique login credentials.
        </p>
      </LegalSection>

      <LegalSection level={2} id="admin" title="6. Organization Administrators">
        <p>
          Organization Administrators have full control over the account, including inviting users, managing permissions, accessing
          data, and configuring settings. Administrators are responsible for ensuring that:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>All users are properly authorized and have signed appropriate agreements</li>
          <li>Confidential business and customer data is protected</li>
          <li>Employee and customer data is processed lawfully and with appropriate consent</li>
          <li>All users comply with applicable laws and this Agreement</li>
          <li>Access permissions are properly managed and revoked when users leave</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="responsibilities" title="7. Customer Responsibilities">
        <p>
          You are solely responsible for:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>The accuracy, legality, and appropriateness of Customer Data</li>
          <li>Obtaining all necessary consents and permissions for data you upload (especially employee or customer personal data)</li>
          <li>Complying with applicable laws, regulations, and industry standards in your jurisdiction</li>
          <li>Ensuring your use of OliveOps does not violate third-party rights or infringe intellectual property</li>
          <li>Maintaining compliance with privacy laws, employment laws, and data protection regulations</li>
          <li>Implementing appropriate business processes and legal agreements with your employees, customers, and partners</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="acceptable-use" title="8. Acceptable Use">
        <p>
          You agree not to use OliveOps for any unlawful or prohibited purpose, including:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Any activity that violates applicable laws or regulations</li>
          <li>Unauthorized access, hacking, or attempts to circumvent security</li>
          <li>Uploading malware, viruses, or harmful code</li>
          <li>Reverse engineering, decompiling, or attempting to derive the source code</li>
          <li>Scraping, crawling, or automated extraction of data</li>
          <li>Harassing, threatening, abusing, or defaming others</li>
          <li>Infringement of intellectual property rights</li>
          <li>Spam, phishing, or fraudulent activity</li>
          <li>Service disruption or denial-of-service attacks</li>
          <li>Circumventing usage limits or restrictions</li>
          <li>Uploading unlawful, regulated, or prohibited content</li>
          <li>Violating the privacy or rights of others</li>
        </ul>
        <p>
          OliveOps reserves the right to investigate and take action against violations, including account suspension or termination.
        </p>
      </LegalSection>

      <LegalSection level={2} id="service-description" title="9. Service Description">
        <p>
          OliveOps provides a cloud-based platform for contractor operations, including CRM, estimating, job management, scheduling,
          time tracking, budgeting, and reporting features. The Service is provided "as-is" and may be accessed via web browsers and
          mobile applications.
        </p>
        <p>
          <strong>Not a professional service:</strong> OliveOps does not provide accounting, legal, tax, financial, or employment
          advice. You are responsible for consulting with qualified professionals to ensure compliance with tax obligations, employment
          laws, payroll regulations, and business requirements.
        </p>
      </LegalSection>

      <LegalSection level={2} id="feature-changes" title="10. Feature Changes and Discontinuation">
        <p>
          OliveOps may add, modify, deprecate, or discontinue features, functionality, or parts of the Service at any time. Where
          practical, we will provide notice of significant changes. However, we are not obligated to maintain specific features
          indefinitely.
        </p>
      </LegalSection>

      <LegalSection level={2} id="beta-features" title="11. Beta, Preview, and Experimental Features">
        <p>
          Features labeled as "beta," "preview," "experimental," or similar designations are not production-ready and may change
          or be discontinued without notice. Use of beta features is entirely at your discretion and risk. OliveOps provides no
          warranty regarding beta features and may collect additional data or feedback from beta feature usage.
        </p>
      </LegalSection>

      <LegalSection level={2} id="subscription" title="12. Subscription Plans and Billing">
        <p>
          OliveOps operates on a subscription basis. Pricing and plan details are available on our Pricing page. Subscription plans
          may include different features, storage limits, user counts, or usage allowances. Your plan determines your access level.
        </p>
      </LegalSection>

      <LegalSection level={2} id="trials" title="13. Free Trials">
        <p>
          OliveOps may offer free trial periods. Trials are provided at no cost and with limited functionality or time restrictions.
          At the end of a trial period, your account may be automatically suspended unless you upgrade to a paid plan.
        </p>
      </LegalSection>

      <LegalSection level={2} id="billing" title="14. Billing and Taxes">
        <p>
          You agree to pay all subscription fees in accordance with your selected plan. Fees are exclusive of taxes unless otherwise
          stated. You are responsible for all applicable sales tax, value-added tax (VAT), goods and services tax (GST), and similar
          taxes based on your location. OliveOps will charge applicable taxes as required by law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="renewal" title="15. Automatic Renewal">
        <p>
          Unless cancelled, your subscription will automatically renew at the end of each billing period at the then-current rate.
          You acknowledge and agree to this automatic renewal. You may cancel automatic renewal at any time through your account settings.
        </p>
      </LegalSection>

      <LegalSection level={2} id="cancellation" title="16. Cancellation">
        <p>
          You may cancel your subscription at any time through your account settings or by contacting {legalConfig.legalEmail}.
          Cancellation takes effect at the end of your current billing period. You will continue to have access to OliveOps until the
          end of your billing period.
        </p>
      </LegalSection>

      <LegalSection level={2} id="refunds" title="17. Refund Policy">
        <p>
          Subscription fees are non-refundable except where required by applicable law. If you cancel mid-billing-period, you will not
          receive a pro-rata refund for unused time. If you believe a billing error has occurred, contact us immediately at{" "}
          {legalConfig.legalEmail}.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-ownership" title="18. Customer Data Ownership">
        <p>
          You retain all ownership rights to Customer Data. You grant OliveOps a worldwide, non-exclusive, royalty-free license to
          use, store, process, transmit, and display Customer Data solely for the purpose of providing the Service to you.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-license" title="19. License to Process Customer Data">
        <p>
          By uploading Customer Data to OliveOps, you grant us the right to process that data according to our Privacy Policy and
          your instructions. This includes storing data on our servers, creating backups, processing the data to deliver features,
          and analyzing data in aggregated or de-identified form to improve the Service.
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-export" title="20. Data Exports">
        <p>
          You may export or download your Customer Data at any time while your account is active. Upon account termination, you may
          request a data export within a specific grace period (see Privacy Policy for details).
        </p>
      </LegalSection>

      <LegalSection level={2} id="data-retention" title="21. Data Retention After Termination">
        <p>
          After your subscription ends or account is closed:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Your access to Customer Data terminates immediately</li>
          <li>Customer Data may be retained for a grace period to allow export or recovery</li>
          <li>After the grace period, Customer Data will be deleted or anonymized</li>
          <li>Backup copies may persist for disaster recovery but will eventually be purged</li>
          <li>Aggregated or de-identified data derived from Customer Data may be retained indefinitely</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="aggregated-data" title="22. Aggregated and De-Identified Data">
        <p>
          OliveOps may collect, analyze, and use aggregated or de-identified data about usage patterns, feature adoption, performance,
          and trends. This aggregated data does not identify you or your Organization and may be used for analytics, benchmarking,
          service improvement, and marketing purposes.
        </p>
      </LegalSection>

      <LegalSection level={2} id="feedback" title="23. Feedback">
        <p>
          Any feedback, suggestions, or ideas you provide about OliveOps may be used by OliveOps at our sole discretion without
          obligation or compensation to you.
        </p>
      </LegalSection>

      <LegalSection level={2} id="intellectual-property" title="24. Intellectual Property">
        <p>
          OliveOps retains all rights, title, and interest in the Service, including software, documentation, design, features,
          functionality, and intellectual property. You are granted a limited, non-exclusive, non-transferable license to use the
          Service in accordance with these Terms. All other rights are reserved.
        </p>
      </LegalSection>

      <LegalSection level={2} id="third-party" title="25. Third-Party Services and Integrations">
        <p>
          OliveOps may integrate with third-party services and platforms. These integrations are subject to the terms of service of
          those third parties. OliveOps is not responsible for third-party services, their availability, security, or compliance.
        </p>
        <p>
          <strong>Planned integrations:</strong> We intend to support integrations with services such as QuickBooks, payment processors,
          and other business tools. These integrations are subject to change and will be governed by additional terms and the third
          party's terms of service.
        </p>
      </LegalSection>

      <LegalSection level={2} id="support" title="26. Support">
        <p>
          OliveOps provides support through email and in-app channels during business hours. Support availability and response times
          vary by subscription plan. Critical issues will be prioritized, but OliveOps does not guarantee specific response times.
        </p>
      </LegalSection>

      <LegalSection level={2} id="maintenance" title="27. Maintenance and Availability">
        <p>
          OliveOps is provided on an as-available basis. We perform regular maintenance, which may result in temporary unavailability.
          We do not guarantee specific uptime percentages or availability. Planned maintenance will be communicated when practical.
          Emergency maintenance may occur without notice.
        </p>
      </LegalSection>

      <LegalSection level={2} id="backups" title="28. Backups">
        <p>
          OliveOps maintains backups for disaster recovery and business continuity. However, backups are not guaranteed, and OliveOps
          is not responsible for data loss. We recommend that you maintain your own independent backups of critical Customer Data.
        </p>
      </LegalSection>

      <LegalSection level={2} id="security" title="29. Security">
        <p>
          OliveOps implements reasonable security measures to protect Customer Data. However, we cannot guarantee absolute security.
          You are responsible for securing your login credentials and for implementing appropriate security practices with your
          Organization. See our <a href="/security" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">Security page</a> for details.
        </p>
      </LegalSection>

      <LegalSection level={2} id="warranties" title="30. Warranty Disclaimers">
        <p>
          <strong>OLIVEOPS IS PROVIDED "AS-IS" AND "AS-AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</strong>
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OLIVEOPS DISCLAIMS ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.
        </p>
        <p>
          OLIVEOPS MAKES NO WARRANTY THAT:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>The Service will meet your requirements or expectations</li>
          <li>The Service will be uninterrupted, error-free, or secure</li>
          <li>Defects will be corrected</li>
          <li>Results obtained from the Service will be accurate or reliable</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="professional-advice" title="31. No Professional Advice">
        <p>
          OliveOps provides business operations software only. <strong>OliveOps does not provide accounting, tax, legal, employment,
          financial, or professional advice.</strong> Any information, calculations, or suggestions provided by OliveOps are for
          informational purposes only and do not constitute professional advice.
        </p>
        <p>
          You are solely responsible for consulting with qualified professionals (accountants, tax advisors, employment lawyers, etc.)
          to ensure compliance with all applicable laws and regulations.
        </p>
      </LegalSection>

      <LegalSection level={2} id="estimates-disclaimer" title="32. Estimates and Calculations Disclaimer">
        <p>
          Estimates, calculations, budgets, and financial projections generated by OliveOps are based on data you provide and are
          for informational purposes only. These calculations may contain errors. <strong>OliveOps is not responsible for inaccuracies
          or for any decisions made based on these estimates.</strong> You are responsible for verifying all estimates and calculations
          independently.
        </p>
      </LegalSection>

      <LegalSection level={2} id="employment-disclaimer" title="33. Employment and Payroll Disclaimer">
        <p>
          OliveOps may provide time tracking, scheduling, or crew management features, but does not serve as a payroll, HR, or
          employment system. <strong>OliveOps is not responsible for calculating wages, withholdings, taxes, benefits, or compliance
          with employment law.</strong>
        </p>
        <p>
          You must use a qualified payroll provider and consult with employment law professionals to ensure compliance with:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Minimum wage and overtime regulations</li>
          <li>Tax withholding and remittance requirements</li>
          <li>Workers' compensation requirements</li>
          <li>Employment standards and labor laws</li>
          <li>Benefits and deduction obligations</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="monitoring-consent" title="34. Employee Monitoring and Consent">
        <p>
          If you use OliveOps to monitor employees (including time tracking, location, or activity monitoring), you are solely
          responsible for:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Obtaining appropriate consent from employees</li>
          <li>Complying with employee privacy rights and monitoring laws</li>
          <li>Providing employees notice of monitoring practices</li>
          <li>Ensuring monitoring is reasonable and lawful in your jurisdiction</li>
        </ul>
        <p>
          OliveOps is not responsible for ensuring your monitoring practices comply with applicable law. Consult with legal counsel to
          ensure compliance with employee privacy and workplace monitoring regulations.
        </p>
      </LegalSection>

      <LegalSection level={2} id="limitation" title="35. Limitation of Liability">
        <p>
          <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OLIVEOPS SHALL NOT BE LIABLE FOR:</strong>
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Indirect, incidental, special, consequential, or punitive damages</li>
          <li>Loss of revenue, profit, data, or business opportunity</li>
          <li>Costs of substitute goods or services</li>
          <li>Any damages arising from unavailability, errors, or defects</li>
          <li>Data loss or corruption</li>
          <li>Unauthorized access or breaches (except where OliveOps is grossly negligent)</li>
        </ul>
        <p>
          <strong>LIABILITY CAP:</strong> OliveOps' total liability to you for any claim arising from or related to these Terms or
          your use of the Service shall not exceed the total amount you paid OliveOps in the 12 months preceding the claim (or if you
          paid nothing, then $100 CAD).
        </p>
        <p>
          Some jurisdictions do not allow limitation of liability. If applicable law prohibits these limitations, OliveOps' liability
          will be limited to the extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection level={2} id="indemnification" title="36. Indemnification">
        <p>
          You agree to indemnify and hold harmless OliveOps, its officers, directors, employees, and agents from any claims, damages,
          losses, and expenses (including attorney fees) arising from or related to:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Your violation of these Terms</li>
          <li>Your use of the Service in violation of applicable law</li>
          <li>Customer Data you provide, including claims that it infringes third-party rights</li>
          <li>Your violation of third-party intellectual property rights</li>
          <li>Your violation of privacy, employment, or other applicable laws</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="suspension" title="37. Suspension of Service">
        <p>
          OliveOps may immediately suspend your access to the Service without liability if:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>You violate these Terms</li>
          <li>Your use poses a security risk</li>
          <li>Your account is subject to government or court order</li>
          <li>You engage in illegal activity</li>
          <li>You violate acceptable use policies</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="termination" title="38. Termination">
        <p>
          <strong>Termination by you:</strong> You may terminate your subscription and close your account at any time through account settings
          or by contacting {legalConfig.legalEmail}.
        </p>
        <p>
          <strong>Termination by OliveOps:</strong> OliveOps may terminate your access to the Service at any time, with or without cause,
          upon written notice to the email address associated with your account.
        </p>
      </LegalSection>

      <LegalSection level={2} id="effect-termination" title="39. Effect of Termination">
        <p>
          Upon termination:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Your right to use the Service immediately ceases</li>
          <li>All licenses granted to you terminate</li>
          <li>You must stop using OliveOps</li>
          <li>You may request a data export within the grace period</li>
          <li>Outstanding payment obligations remain due</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="governing-law" title="40. Governing Law and Venue">
        <p>
          These Terms are governed by the laws of the Province of {legalConfig.governingProvince} and the applicable federal laws of
          Canada, without regard to conflict of law principles.
        </p>
        <p>
          Both parties consent to the exclusive jurisdiction of the courts of {legalConfig.governingProvince} and waive any objection to
          venue or inconvenient forum.
        </p>
      </LegalSection>

      <LegalSection level={2} id="changes" title="41. Changes to These Terms">
        <p>
          OliveOps may update these Terms at any time. Changes will be effective immediately or upon notice. Material changes will be
          communicated to you via email. Your continued use of OliveOps following notice of changes constitutes your acceptance of the
          updated Terms.
        </p>
      </LegalSection>

      <LegalSection level={2} id="contact" title="42. Contact Information">
        <p>
          If you have questions about these Terms or need to provide notice, please contact:
        </p>
        <div className="bg-[#F8FAFC] p-4 rounded-lg dark:bg-[#111827]">
          <p className="text-sm">
            <strong>Legal Contact:</strong>
            <br />
            {legalConfig.legalEmail}
            <br />
            <br />
            <strong>Mailing Address:</strong>
            <br />
            {legalConfig.mailingAddress}
          </p>
        </div>
      </LegalSection>
    </LegalPage>
  );
}

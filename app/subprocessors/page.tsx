import { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Subprocessors — OliveOps",
  description: "Transparent registry of third-party service providers that process customer data on behalf of OliveOps.",
  openGraph: {
    title: "Subprocessors — OliveOps",
    description: "Transparent registry of third-party service providers that process customer data on behalf of OliveOps.",
  },
};

const tableOfContents = [
  { id: "introduction", label: "Introduction", level: 2 as const },
  { id: "active", label: "Active Subprocessors", level: 2 as const },
  { id: "planned", label: "Planned Integrations", level: 2 as const },
  { id: "changes", label: "Changes to Subprocessors", level: 2 as const },
  { id: "approval", label: "Objecting to Subprocessor Changes", level: 2 as const },
];

export default function SubprocessorsPage() {
  return (
    <LegalPage
      title="Subprocessors"
      description="Transparent registry of service providers that process customer data"
      estimatedReadTime="3 min read"
      tableOfContents={tableOfContents}
      currentPage="subprocessors"
      contactEmail={legalConfig.legalEmail}
    >
      <LegalSection level={2} id="introduction" title="1. Introduction">
        <p>
          This page provides a transparent registry of third-party service providers (&ldquo;Subprocessors&rdquo;) that OliveOps
          engages to process customer data on your behalf.
        </p>
        <p>
          OliveOps works to ensure that service providers handle data appropriately, and reviews provider terms and privacy
          practices as part of its vendor assessment process.
        </p>
      </LegalSection>

      <LegalSection level={2} id="active" title="2. Active Subprocessors">
        <p>
          The following service providers are currently processing customer data on behalf of OliveOps:
        </p>

        <div className="space-y-6">
          {/* Vercel */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Provider Name</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Vercel Inc.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Purpose</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Application hosting, deployment, and content delivery</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Data Categories</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Application data, logs, usage data</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Processing Location</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">United States (multiple regions)</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-2">Privacy Policy</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
                    https://vercel.com/legal/privacy
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Provider Name</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Amazon Web Services, Inc. (AWS)</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Purpose</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Database, data storage, cloud infrastructure</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Data Categories</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Customer data, business records, user information</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Processing Location</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">us-east-2 (Ohio, United States)</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-2">Privacy Policy</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
                    https://aws.amazon.com/privacy/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Resend */}
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Provider Name</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Resend</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Purpose</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Transactional email delivery</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Data Categories</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">Email addresses, email content, notification data</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Processing Location</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">United States</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-2">Privacy Policy</h4>
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
                    https://resend.com/privacy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-[#64748B] dark:text-[#94A3B8]">
          <strong>Last updated:</strong> {legalConfig.lastUpdated}
        </p>
      </LegalSection>

      <LegalSection level={2} id="planned" title="3. Planned Integrations">
        <p>
          The following integrations are planned for future versions of OliveOps. These are not yet active but may be added:
        </p>

        <div className="space-y-4 mt-4">
          {/* Stripe */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Provider</h4>
                <p className="text-amber-900 dark:text-amber-100">Stripe (planned payment processor)</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Purpose</h4>
                <p className="text-amber-900 dark:text-amber-100">Payment processing and billing</p>
              </div>
            </div>
          </div>

          {/* QuickBooks */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Provider</h4>
                <p className="text-amber-900 dark:text-amber-100">Intuit QuickBooks (planned accounting integration)</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Purpose</h4>
                <p className="text-amber-900 dark:text-amber-100">Accounting and financial data synchronization</p>
              </div>
            </div>
          </div>

          {/* Mobile distribution — not a subprocessor; classified as future distribution channel */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Platform</h4>
                <p className="text-amber-900 dark:text-amber-100">Apple App Store and Google Play</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Classification</h4>
                <p className="text-amber-900 dark:text-amber-100">
                  Mobile application distribution platforms that may be used in the future. These platforms are not currently
                  active and do not process OliveOps customer data on our behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LegalSection>

      <LegalSection level={2} id="changes" title="4. Changes to Subprocessors">
        <p>
          OliveOps may add, remove, or change Subprocessors as necessary to provide and improve the Service. OliveOps will:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>Maintain an up-to-date list of subprocessors on this page</li>
          <li>Notify customers of material changes where practical</li>
          <li>Review subprocessor data practices as part of its vendor assessment process</li>
        </ul>
      </LegalSection>

      <LegalSection level={2} id="approval" title="5. Objecting to Subprocessor Changes">
        <p>
          If you have concerns about a specific subprocessor or a proposed change, please contact us at{" "}
          <a href={`mailto:${legalConfig.legalEmail}`} className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
            {legalConfig.legalEmail}
          </a>.
          Where required by applicable law or a customer agreement, OliveOps will provide notice of material new subprocessors and
          address reasonable objections in accordance with the terms of the applicable agreement.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

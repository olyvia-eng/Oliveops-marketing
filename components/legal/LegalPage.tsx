// Shared wrapper for all legal pages.
// Uses <div> not <main> — the root layout already provides the <main> landmark.

import Link from "next/link";
import { ReactNode } from "react";
import { LegalHeader } from "./LegalHeader";
import { LegalSidebar } from "./LegalSidebar";
import { LegalNotice } from "./LegalNotice";
import { legalConfig, legalDocuments } from "@/lib/legal-config";
import { getRelatedPages } from "@/lib/legal-navigation";

interface LegalPageProps {
  title: string;
  description?: string;
  estimatedReadTime: string;
  tableOfContents: Array<{ id: string; label: string; level: 1 | 2 | 3 }>;
  currentPage: string;
  /** Route-specific contact email; defaults to legalConfig.legalEmail */
  contactEmail?: string;
  children: ReactNode;
}

export function LegalPage({
  title,
  description,
  estimatedReadTime,
  tableOfContents,
  currentPage,
  contactEmail,
  children,
}: LegalPageProps) {
  const relatedPages = getRelatedPages(currentPage);
  const docMeta =
    legalDocuments[currentPage as keyof typeof legalDocuments] ?? {
      version: "1.0",
      effectiveDate: legalConfig.effectiveDate,
      lastUpdated: legalConfig.lastUpdated,
    };
  const email = contactEmail || legalConfig.legalEmail;

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-16 dark:bg-[#0F172A]">
      <div className="border-b border-[#E2E8F0] dark:border-[#334155]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <LegalHeader
            title={title}
            description={description}
            effectiveDate={docMeta.effectiveDate}
            lastUpdated={docMeta.lastUpdated}
            estimatedReadTime={estimatedReadTime}
            version={docMeta.version}
          />
        </div>
      </div>

      {/* Dev-only legal review notice; hidden in production */}
      <LegalNotice />

      {/* Content grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-10">
          {/* Main content */}
          <div className="lg:col-span-7">
            <article className="prose prose-sm max-w-none dark:prose-invert">
              {children}
            </article>

            {/* Contact section */}
            <div className="mt-16 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-8 dark:border-[#334155] dark:bg-[#111827]">
              <h3 className="mb-4 text-lg font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                Questions about this policy?
              </h3>
              <p className="mb-4 text-[#475569] dark:text-[#CBD5E1]">
                Contact us with any concerns or questions about this policy.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-[#6B8E23] hover:underline dark:text-[#84A83D]"
                  >
                    {email}
                  </a>
                </p>
                {legalConfig.mailingAddress && (
                  <p className="text-[#475569] dark:text-[#CBD5E1]">
                    <span className="font-semibold">Address:</span>
                    <br />
                    {legalConfig.mailingAddress}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <LegalSidebar
            tableOfContents={tableOfContents}
            relatedPages={relatedPages}
            currentPage={currentPage}
          />
        </div>
      </div>

      {/* Footer navigation */}
      <div className="border-t border-[#E2E8F0] dark:border-[#334155]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[#64748B] dark:text-[#94A3B8]">
            <Link href="/privacy" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              Privacy Policy
            </Link>
            {" • "}
            <Link href="/terms" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              Terms of Service
            </Link>
            {" • "}
            <Link href="/security" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              Security
            </Link>
            {" • "}
            <Link href="/cookies" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              Cookies
            </Link>
            {" • "}
            <Link href="/dpa" className="text-[#6B8E23] hover:underline dark:text-[#84A83D]">
              DPA
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


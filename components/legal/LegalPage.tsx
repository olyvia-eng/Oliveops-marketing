/**
 * Main wrapper component for legal pages
 * Provides consistent layout, header, sidebar, and footer
 */

import Link from "next/link";
import { ReactNode } from "react";
import { LegalHeader } from "./LegalHeader";
import { LegalSidebar } from "./LegalSidebar";
import { LegalNotice } from "./LegalNotice";
import { legalConfig } from "@/lib/legal-config";
import { getRelatedPages } from "@/lib/legal-navigation";

interface LegalPageProps {
  title: string;
  description?: string;
  estimatedReadTime: string;
  tableOfContents: Array<{ id: string; label: string; level: 1 | 2 | 3 }>;
  currentPage: string;
  children: ReactNode;
}

export function LegalPage({
  title,
  description,
  estimatedReadTime,
  tableOfContents,
  currentPage,
  children,
}: LegalPageProps) {
  const relatedPages = getRelatedPages(currentPage);

  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-16 dark:bg-[#0F172A]">
      {/* Header with navbar height offset */}
      <div className="border-b border-[#E2E8F0] dark:border-[#334155]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <LegalHeader
            title={title}
            description={description}
            effectiveDate={legalConfig.effectiveDate}
            lastUpdated={legalConfig.lastUpdated}
            estimatedReadTime={estimatedReadTime}
            version="1.0"
          />
        </div>
      </div>

      {/* Legal review notice */}
      <div className="border-b border-[#E2E8F0] dark:border-[#334155]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <LegalNotice />
        </div>
      </div>

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
                If you have concerns or questions about this policy, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${legalConfig.legalEmail}`}
                    className="text-[#6B8E23] hover:underline dark:text-[#84A83D]"
                  >
                    {legalConfig.legalEmail}
                  </a>
                </p>
                <p className="text-[#475569] dark:text-[#CBD5E1]">
                  <span className="font-semibold">Address:</span>
                  <br />
                  {legalConfig.mailingAddress}
                </p>
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
    </main>
  );
}

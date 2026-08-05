/**
 * Sticky sidebar for table of contents and related legal pages
 * Desktop sticky navigation that collapses on mobile
 */

import Link from "next/link";
import { LegalPageMetadata } from "@/lib/legal-navigation";

interface LegalSidebarProps {
  tableOfContents: Array<{ id: string; label: string; level: 1 | 2 | 3 }>;
  relatedPages: LegalPageMetadata[];
  currentPage: string;
}

export function LegalSidebar({ tableOfContents, relatedPages, currentPage }: LegalSidebarProps) {
  const mainTocItems = tableOfContents.filter((item) => item.level <= 2);

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24 space-y-8">
        {/* Table of Contents */}
        <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
          <h3 className="mb-4 font-semibold text-[#0F172A] dark:text-[#F8FAFC]">On this page</h3>
          <nav className="space-y-2 text-sm">
            {mainTocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-1 transition-colors ${
                  item.level === 2
                    ? "pl-4 text-[#64748B] hover:text-[#6B8E23] dark:text-[#94A3B8] dark:hover:text-[#84A83D]"
                    : "text-[#475569] hover:text-[#6B8E23] dark:text-[#CBD5E1] dark:hover:text-[#84A83D]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 dark:border-[#334155] dark:bg-[#111827]">
            <h3 className="mb-4 font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Related</h3>
            <nav className="space-y-2 text-sm">
              {relatedPages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.path}
                  className={`block py-1 transition-colors ${
                    currentPage === page.slug
                      ? "font-semibold text-[#6B8E23] dark:text-[#84A83D]"
                      : "text-[#475569] hover:text-[#6B8E23] dark:text-[#CBD5E1] dark:hover:text-[#84A83D]"
                  }`}
                >
                  {page.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
}

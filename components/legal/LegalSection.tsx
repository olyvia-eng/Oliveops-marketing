/**
 * Semantic section component for legal document content
 * Ensures consistent heading levels and styling
 */

import { ReactNode } from "react";

interface LegalSectionProps {
  level: 2 | 3 | 4;
  id: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({ level, id, title, children }: LegalSectionProps) {
  const headingClasses = "font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-4";
  const sectionClasses = "mb-8 scroll-mt-24";

  let HeadingTag: "h2" | "h3" | "h4" = "h2";
  let headingSize = "text-2xl";

  if (level === 3) {
    HeadingTag = "h3";
    headingSize = "text-xl";
  } else if (level === 4) {
    HeadingTag = "h4";
    headingSize = "text-lg";
  }

  return (
    <section className={sectionClasses}>
      <HeadingTag id={id} className={`${headingClasses} ${headingSize}`}>
        {title}
      </HeadingTag>
      <div className="prose prose-sm max-w-none dark:prose-invert text-[#475569] dark:text-[#CBD5E1] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

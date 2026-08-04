import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtext,
  centered = true,
  children,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#6B8E23] dark:text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight mb-4">
        {headline}
      </h2>
      {subtext && (
        <p className="text-[#64748B] dark:text-[#CBD5E1] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
      {children}
    </div>
  );
}

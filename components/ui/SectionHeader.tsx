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
        <p className="text-olive-600 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
        {headline}
      </h2>
      {subtext && (
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
      {children}
    </div>
  );
}

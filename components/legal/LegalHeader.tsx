/**
 * Header for legal pages with title, metadata, and effective/updated dates
 */

interface LegalHeaderProps {
  title: string;
  description?: string;
  effectiveDate: string;
  lastUpdated: string;
  estimatedReadTime: string;
  version?: string;
}

export function LegalHeader({
  title,
  description,
  effectiveDate,
  lastUpdated,
  estimatedReadTime,
  version,
}: LegalHeaderProps) {
  return (
    <div className="mb-12 border-b border-[#E2E8F0] pb-8 dark:border-[#334155]">
      <h1 className="mb-2 text-4xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">{title}</h1>

      {description && <p className="mb-6 text-lg text-[#475569] dark:text-[#CBD5E1]">{description}</p>}

      <div className="flex flex-wrap gap-6 text-sm text-[#64748B] dark:text-[#94A3B8]">
        <div>
          <span className="font-semibold">Effective Date:</span>
          <br />
          {effectiveDate}
        </div>
        <div>
          <span className="font-semibold">Last Updated:</span>
          <br />
          {lastUpdated}
        </div>
        <div>
          <span className="font-semibold">Estimated Read Time:</span>
          <br />
          {estimatedReadTime}
        </div>
        {version && (
          <div>
            <span className="font-semibold">Version:</span>
            <br />
            {version}
          </div>
        )}
      </div>
    </div>
  );
}

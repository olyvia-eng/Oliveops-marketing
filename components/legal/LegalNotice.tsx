/**
 * Legal notice banner for documents requiring legal counsel review
 * This is a server component
 */

export function LegalNotice() {
  return (
    <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
      <p className="text-sm text-amber-900 dark:text-amber-100">
        <span className="font-semibold">Legal Review Notice:</span> All legal content on this site has been prepared for informational purposes. Prior to commercial launch, all documents must be reviewed and approved by qualified Canadian legal counsel to ensure compliance with applicable federal and provincial privacy, contract, and business law.
      </p>
    </div>
  );
}

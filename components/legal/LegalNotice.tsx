// DEV-ONLY: Reminds developers that legal counsel review is required.
// Renders nothing in production — customers never see this.

export function LegalNotice() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
      <p className="text-sm text-amber-900 dark:text-amber-100">
        <span className="font-semibold">DEV — Legal Review Required:</span>{" "}
        These documents have not been reviewed by qualified Canadian legal counsel. This notice does not appear in production.
      </p>
    </div>
  );
}

// Legal configuration for OliveOps.
// Set NEXT_PUBLIC_* environment variables to override defaults.
// See .env.example for the full list.
// LEGAL REVIEW REQUIRED before commercial launch — see LEGAL_IMPLEMENTATION_NOTES.md

export const legalConfig = {
  // Use env var or fall back to the product name (not a registered legal entity name)
  companyLegalName:
    process.env.NEXT_PUBLIC_LEGAL_COMPANY_NAME || "OliveOps",

  productName: "OliveOps",
  websiteUrl: "https://oliveops.ca",

  // support@oliveops.ca confirmed in app/contact/page.tsx
  privacyEmail:
    process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "support@oliveops.ca",
  legalEmail:
    process.env.NEXT_PUBLIC_LEGAL_EMAIL || "support@oliveops.ca",
  securityEmail:
    process.env.NEXT_PUBLIC_SECURITY_EMAIL || "support@oliveops.ca",

  // Leave empty to suppress the address row on legal pages
  mailingAddress:
    process.env.NEXT_PUBLIC_BUSINESS_MAILING_ADDRESS || "",

  governingProvince: "Ontario",
  governingCountry: "Canada",

  // Global fallback dates — overridden per-document in legalDocuments below
  effectiveDate: "August 5, 2026",
  lastUpdated: "August 5, 2026",
};

// Per-document versioning — update the relevant entry when a document is revised
export const legalDocuments = {
  privacy:               { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  terms:                 { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  security:              { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  cookies:               { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  dpa:                   { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  aup:                   { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  "responsible-disclosure": { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
  subprocessors:         { version: "1.0", effectiveDate: "August 5, 2026", lastUpdated: "August 5, 2026" },
} as const;

// Infrastructure confirmed in THIS repository only.
// The full OliveOps SaaS application may use additional services not present here.
export const verifiedInfrastructure = {
  vercel: true,      // Confirmed — next.config.ts and README
  awsDynamoDB: true, // Confirmed — app/api/beta-waitlist/route.ts
  resend: true,      // Confirmed — lib/sendBetaWaitlistEmail.ts
  awsSES: false,     // Package present but not actively invoked in this repo
  stripe: false,
  analytics: false,
  googleAnalytics: false,
};

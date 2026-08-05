/**
 * Legal configuration for OliveOps
 * IMPORTANT: All placeholder values marked with REPLACE_WITH_ must be reviewed and updated
 * by qualified Canadian legal counsel before commercial launch.
 */

export const legalConfig = {
  // Company details
  companyLegalName: "REPLACE_WITH_LEGAL_COMPANY_NAME",
  productName: "OliveOps",
  websiteUrl: "https://oliveops.ca",

  // Contact information
  privacyEmail: "REPLACE_WITH_PRIVACY_EMAIL@oliveops.ca",
  legalEmail: "REPLACE_WITH_LEGAL_EMAIL@oliveops.ca",
  securityEmail: "REPLACE_WITH_SECURITY_EMAIL@oliveops.ca",

  // Mailing address
  mailingAddress: "REPLACE_WITH_BUSINESS_MAILING_ADDRESS",
  governingProvince: "Ontario",
  governingCountry: "Canada",

  // Document versions
  effectiveDate: "August 5, 2026",
  lastUpdated: "August 5, 2026",

  // Infrastructure and services (verified in codebase)
  infrastructure: {
    hosting: "Vercel",
    database: "AWS DynamoDB",
    emailService: "Resend",
    region: "us-east-2",
  },

  // Future/unverified services (handled with careful language)
  futureIntegrations: {
    payments: "Stripe (planned)",
    accounting: "QuickBooks (planned)",
    mobile: "iOS and Android apps (planned)",
  },
};

/**
 * Confirmation of verified infrastructure components
 * These have been found in the codebase and are actively used
 */
export const verifiedInfrastructure = {
  vercel: true, // Deployment platform mentioned in docs
  awsDynamoDB: true, // Used for beta waitlist storage
  awsSES: true, // Package installed but not actively used in code
  resend: true, // Used for email notifications
  nextAuth: false, // Not present in codebase
  stripe: false, // Not present in codebase
  analytics: false, // No Google Analytics or similar found
  googleAnalytics: false,
  firebase: false,
};

/**
 * Unverified or assumed services (to be documented)
 * These should be verified during legal review
 */
export const assumedServices = {
  cloudStorage: "AWS S3 (assumed for future file uploads)",
  logging: "Assumed CloudWatch or similar (not verified)",
  cdn: "Vercel edge network (likely via hosting platform)",
};

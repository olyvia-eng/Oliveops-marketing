/**
 * Legal page navigation, metadata, and table of contents definitions
 */

export interface LegalPageMetadata {
  slug: string;
  title: string;
  description: string;
  path: string;
  estimatedReadTime: string;
}

export interface TableOfContentsItem {
  id: string;
  label: string;
  level: 1 | 2 | 3;
}

export const legalPages: Record<string, LegalPageMetadata> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "Learn how OliveOps collects, uses, processes, and protects your personal and business information under Canadian privacy law and GDPR principles.",
    path: "/privacy",
    estimatedReadTime: "12 min read",
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    description:
      "The legal agreement governing your use of OliveOps, including eligibility, account responsibilities, subscription terms, acceptable use, and limitation of liability.",
    path: "/terms",
    estimatedReadTime: "15 min read",
  },
  security: {
    slug: "security",
    title: "Security",
    description:
      "Transparency about OliveOps' security architecture, safeguards, infrastructure, incident response, and shared responsibilities for protecting your data.",
    path: "/security",
    estimatedReadTime: "8 min read",
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "Detailed information about cookies and similar technologies used on OliveOps, including authentication, preferences, and analytics cookies.",
    path: "/cookies",
    estimatedReadTime: "5 min read",
  },
  dpa: {
    slug: "dpa",
    title: "Data Processing Addendum",
    description:
      "A Data Processing Addendum (DPA) that governs how OliveOps processes personal data as a service provider, including GDPR provisions and subprocessor details.",
    path: "/dpa",
    estimatedReadTime: "14 min read",
  },
  aup: {
    slug: "aup",
    title: "Acceptable Use Policy",
    description:
      "Rules and prohibited activities for using OliveOps, including guidance on lawful use, prohibited content, and enforcement measures.",
    path: "/aup",
    estimatedReadTime: "6 min read",
  },
  responsibleDisclosure: {
    slug: "responsible-disclosure",
    title: "Responsible Disclosure",
    description:
      "Guidelines for reporting security vulnerabilities responsibly, including safe-harbour protections for good-faith security researchers.",
    path: "/responsible-disclosure",
    estimatedReadTime: "4 min read",
  },
  subprocessors: {
    slug: "subprocessors",
    title: "Subprocessors",
    description:
      "A transparent registry of third-party service providers authorized to process customer data on behalf of OliveOps.",
    path: "/subprocessors",
    estimatedReadTime: "3 min read",
  },
};

/**
 * Get all legal page links for navigation
 */
export function getAllLegalPages(): LegalPageMetadata[] {
  return Object.values(legalPages);
}

/**
 * Get related pages for cross-linking
 */
export function getRelatedPages(currentSlug: string): LegalPageMetadata[] {
  const related: Record<string, string[]> = {
    privacy: ["terms", "cookies", "dpa"],
    terms: ["privacy", "aup"],
    security: ["privacy", "dpa"],
    cookies: ["privacy"],
    dpa: ["privacy", "terms", "subprocessors"],
    aup: ["terms"],
    "responsible-disclosure": ["security"],
    subprocessors: ["dpa", "privacy"],
  };

  const relatedSlugs = related[currentSlug] || [];
  return relatedSlugs.map((slug) => legalPages[slug]).filter(Boolean);
}

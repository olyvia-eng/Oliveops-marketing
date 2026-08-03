import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Features — OliveOps",
  description: "Explore everything OliveOps does to help contractors manage their business.",
};

const featureGroups = [
  {
    title: "CRM & Customer Management",
    icon: "👤",
    description:
      "Keep your entire customer database organized with contact details, communication history, notes, and relationship context — all searchable and linked to their properties and jobs.",
    highlights: [
      "Full contact profiles with history",
      "Email and communication tracking",
      "Customer tags and segmentation",
      "Linked to properties and jobs",
    ],
  },
  {
    title: "Property Management",
    icon: "🏡",
    description:
      "Every property your crews visit gets its own profile with site notes, access instructions, equipment on-site, service history, and location maps so your team is always prepared.",
    highlights: [
      "Property-level service history",
      "Site access notes and gate codes",
      "Equipment and system details",
      "Map integration",
    ],
  },
  {
    title: "Estimating",
    icon: "📝",
    description:
      "Build professional estimates in minutes. Use saved line items, configure markup and margins, and send directly to customers for review and approval — all without leaving OliveOps.",
    highlights: [
      "Saved line item library",
      "Configurable markup and margins",
      "Customer approval workflow",
      "Convert to job in one click",
    ],
  },
  {
    title: "Job Management",
    icon: "🚜",
    description:
      "Track every job from kickoff to completion. Assign crews, log field notes, capture before/after photos, and keep customers informed at every stage.",
    highlights: [
      "Job status tracking",
      "Field notes and photo capture",
      "Customer updates and notifications",
      "Document attachment",
    ],
  },
  {
    title: "Employee & Crew Management",
    icon: "👷",
    description:
      "Manage your full workforce. Track time on jobs, see crew locations, manage certifications, and assign workers to the right jobs based on skills and availability.",
    highlights: [
      "Time tracking per job",
      "Crew assignment and dispatch",
      "Skills and certification tracking",
      "Availability management",
    ],
  },
  {
    title: "Scheduling",
    icon: "📅",
    description:
      "See your entire operation on one calendar. Drag and drop jobs across crews, manage equipment availability, and handle the unexpected when weather or cancellations hit.",
    highlights: [
      "Drag-and-drop calendar",
      "Crew and equipment scheduling",
      "Conflict detection",
      "Mobile access for field crews",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-olive-400 font-semibold text-sm uppercase tracking-widest mb-4">Platform Features</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything your crew needs to operate
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            OliveOps brings together every tool a field service contractor needs — built to work together, not bolt-on separately.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {featureGroups.map((group, i) => (
            <div
              key={group.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-6">{group.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {group.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  {group.description}
                </p>
                <ul className="space-y-3">
                  {group.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-olive-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className={`bg-slate-50 rounded-2xl border border-slate-200 h-72 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-center">
                  <div className="text-6xl mb-3">{group.icon}</div>
                  <p className="text-slate-400 text-sm">Feature screenshot coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeader
            headline="Want to see it in action?"
            subtext="Book a personalized demo and we'll walk you through how OliveOps fits your operation."
          />
          <Button href="/contact" size="lg">
            Request a Demo
          </Button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

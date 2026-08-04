import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    icon: "🚜",
    name: "Excavation",
    description:
      "Track dig sites, manage equipment, coordinate multi-day jobs, and document every phase of excavation work.",
  },
  {
    icon: "🚿",
    name: "Septic",
    description:
      "Manage pump schedules, maintain property records with system details, and track regulatory compliance.",
  },
  {
    icon: "🌿",
    name: "Landscaping",
    description:
      "Schedule recurring maintenance, manage seasonal crews, and track property-specific service plans.",
  },
  {
    icon: "❄️",
    name: "Snow Removal",
    description:
      "Dispatch crews fast when it storms, track routes and properties, and document each service event.",
  },
  {
    icon: "🏗️",
    name: "Construction",
    description:
      "Manage multi-phase projects, subcontractors, materials, and milestones across complex job sites.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries we serve"
          headline="Built for field service contractors"
          subtext="OliveOps is purpose-built for contractors who work in the field. Whatever your trade, we've built for how you work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#6B8E23]/40 transition-shadow flex gap-4 dark:bg-[#1E293B] dark:border-[#334155] dark:hover:border-[#84A83D]/40"
            >
              <div className="text-4xl flex-shrink-0">{industry.icon}</div>
              <div>
                <h3 className="text-[#0F172A] font-semibold text-lg mb-1 dark:text-[#F8FAFC]">
                  {industry.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

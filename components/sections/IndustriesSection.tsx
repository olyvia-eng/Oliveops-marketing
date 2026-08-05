import SectionHeader from "@/components/ui/SectionHeader";
import { Shovel, Droplets, Leaf, Snowflake, HardHat } from "lucide-react";

const industries = [
  {
    icon: Shovel,
    name: "Excavation",
    description: "Track dig sites, manage equipment, coordinate multi-day jobs, and document every phase of excavation work.",
  },
  {
    icon: Droplets,
    name: "Septic",
    description: "Manage pump schedules, maintain property records with system details, and track regulatory compliance.",
  },
  {
    icon: Leaf,
    name: "Landscaping",
    description: "Schedule recurring maintenance, manage seasonal crews, and track property-specific service plans.",
  },
  {
    icon: Snowflake,
    name: "Snow Removal",
    description: "Dispatch crews fast when it storms, track routes and properties, and document each service event.",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Manage multi-phase projects, subcontractors, materials, and milestones across complex job sites.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-28 bg-[#F8FAFC] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries we serve"
          headline="Built for field service contractors"
          subtext="OliveOps is purpose-built for contractors who work in the field. Whatever your trade, we&rsquo;ve built for how you work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#6B8E23]/40 transition-all flex gap-5 dark:bg-[#1E293B] dark:border-[#334155] dark:hover:border-[#84A83D]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF4E3] flex items-center justify-center flex-shrink-0 dark:bg-[#0F172A]">
                  <Icon className="w-5 h-5 text-[#6B8E23] dark:text-[#84A83D]" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-semibold text-lg mb-1 dark:text-[#F8FAFC]">
                    {industry.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

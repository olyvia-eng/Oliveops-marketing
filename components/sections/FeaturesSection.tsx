import SectionHeader from "@/components/ui/SectionHeader";
import { Users, FileText, Briefcase, UserCheck, Calendar, DollarSign } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Keep every customer connected",
    description: "Full contact profiles, communication history, and linked properties — so you always know who you're working with and what's been done.",
  },
  {
    icon: FileText,
    title: "Build professional estimates faster",
    description: "Reuse saved line items, apply markup, and send polished estimates for digital approval — no more re-typing the same items every job.",
  },
  {
    icon: Briefcase,
    title: "Turn approved estimates into active jobs",
    description: "One click converts an accepted estimate into a job with all the details already filled in. No copy-paste, no data entry twice.",
  },
  {
    icon: UserCheck,
    title: "Track your people, not just your jobs",
    description: "See who's working where, log hours against jobs, and manage certifications — all in one place so HR and operations stay in sync.",
  },
  {
    icon: Calendar,
    title: "Schedule crews with confidence",
    description: "Drag-and-drop scheduling across crews and equipment. Handle conflicts, cancellations, and weather changes without losing track.",
  },
  {
    icon: DollarSign,
    title: "Know exactly where your money goes",
    description: "Track labour, materials, and equipment against job budgets in real time. See gross profit per job before you even send the invoice.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-[#FFFFFF] dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What OliveOps does"
          headline="Built around how contractors actually work"
          subtext="Not generic CRM software retrofitted for contractors. OliveOps was designed from the ground up for field service operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#6B8E23]/60 hover:shadow-md transition-all dark:bg-[#111827] dark:border-[#334155] dark:hover:border-[#84A83D]/50"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF4E3] flex items-center justify-center mb-5 dark:bg-[#1E293B]">
                  <Icon className="w-5 h-5 text-[#6B8E23] dark:text-[#84A83D]" />
                </div>
                <h3 className="text-[#0F172A] font-semibold text-lg mb-2 dark:text-[#F8FAFC]">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import SectionHeader from "@/components/ui/SectionHeader";
import { Table2, Puzzle, FolderOpen, ClockAlert } from "lucide-react";

const problems = [
  {
    icon: Table2,
    title: "Too many spreadsheets",
    description: "Juggling customer lists, job tracking, and estimates across spreadsheets that are always out of sync.",
  },
  {
    icon: Puzzle,
    title: "Disconnected tools",
    description: "Switching between your CRM, scheduling app, and invoicing tool every day — nothing talks to each other.",
  },
  {
    icon: FolderOpen,
    title: "Lost customer information",
    description: "Property notes and service records scattered across notebooks, emails, and fading memory.",
  },
  {
    icon: ClockAlert,
    title: "Manual estimating every time",
    description: "Re-typing the same line items job after job and manually coordinating crews wastes hours you don't have.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-28 bg-[#F8FAFC] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sound familiar?"
          headline="Running your business shouldn&rsquo;t be this hard"
          subtext="Most software is built for the wrong industry, the wrong scale, or the wrong workflow. OliveOps is different."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#6B8E23]/40 transition-all dark:bg-[#1E293B] dark:border-[#334155] dark:hover:border-[#84A83D]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-5 dark:bg-[#2D1515]">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-[#0F172A] font-semibold text-lg mb-2 dark:text-[#F8FAFC]">
                  {problem.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

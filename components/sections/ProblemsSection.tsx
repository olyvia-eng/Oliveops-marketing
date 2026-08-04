import SectionHeader from "@/components/ui/SectionHeader";

const problems = [
  {
    icon: "📊",
    title: "Too many spreadsheets",
    description:
      "Juggling customer lists, job tracking, and estimates across dozens of spreadsheets that never stay in sync.",
  },
  {
    icon: "🔧",
    title: "Disconnected tools",
    description:
      "Switching between your CRM, scheduling app, invoicing tool, and texting your crew — nothing talks to each other.",
  },
  {
    icon: "📋",
    title: "Lost customer information",
    description:
      "Customer history, property notes, and service records scattered across notebooks, emails, and memory.",
  },
  {
    icon: "⏱️",
    title: "Manual estimating & scheduling",
    description:
      "Building estimates from scratch every time and manually coordinating crews wastes hours you don't have.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sound familiar?"
          headline="Running your business shouldn't be this hard"
          subtext="Contractors deserve better tools. Most software is built for the wrong industry, the wrong scale, or the wrong workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#6B8E23]/40 transition-shadow dark:bg-[#1E293B] dark:border-[#334155] dark:hover:border-[#84A83D]/40"
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <h3 className="text-[#0F172A] font-semibold text-lg mb-2 dark:text-[#F8FAFC]">
                {problem.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

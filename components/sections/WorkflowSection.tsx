import { Users, MapPin, FileText, Briefcase, Calendar, Clock, TrendingUp, BarChart2 } from "lucide-react";

const steps = [
  { icon: Users, label: "Customer", description: "Capture contact details, history, and notes" },
  { icon: MapPin, label: "Property", description: "Link job sites with access notes and records" },
  { icon: FileText, label: "Estimate", description: "Build and send professional quotes" },
  { icon: Briefcase, label: "Approved Job", description: "Convert estimates to active jobs instantly" },
  { icon: Calendar, label: "Scheduling", description: "Assign crews and coordinate equipment" },
  { icon: Clock, label: "Labour Tracking", description: "Log hours against job budgets in real time" },
  { icon: TrendingUp, label: "Budget vs Actual", description: "See job profitability as work happens" },
  { icon: BarChart2, label: "Reporting", description: "Revenue, margin, and performance dashboards" },
];

export default function WorkflowSection() {
  return (
    <section className="py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-3">One connected platform</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-4">
            From first contact to final report
          </h2>
          <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
            Every step of your operation flows through a single connected system &mdash; nothing falls through the cracks.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid lg:grid-cols-8 gap-2 items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative flex flex-col items-center text-center group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r from-[#84A83D]/60 to-[#84A83D]/20 z-0" />
                )}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-[#1E293B] border border-[#84A83D]/40 flex items-center justify-center mb-3 shadow-lg group-hover:border-[#84A83D] group-hover:bg-[#84A83D]/10 transition-all">
                  <Icon className="w-5 h-5 text-[#84A83D]" />
                </div>
                <p className="text-[#F8FAFC] font-semibold text-xs mb-1 leading-tight">{step.label}</p>
                <p className="text-[#94A3B8] text-[11px] leading-snug">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="bg-[#1E293B] rounded-xl p-4 border border-[#334155]">
                <div className="w-9 h-9 rounded-lg bg-[#84A83D]/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#84A83D]" />
                </div>
                <p className="text-[#F8FAFC] font-semibold text-sm mb-1">{step.label}</p>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

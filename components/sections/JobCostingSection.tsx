import { Clock, Package, Wrench, TrendingUp, DollarSign, BarChart2 } from "lucide-react";

const cards = [
  { icon: Clock, label: "Labour Budget vs Actual", description: "Compare planned hours to logged hours on every job in real time." },
  { icon: Package, label: "Material Costs", description: "Track material purchases and receipts against job estimates." },
  { icon: Wrench, label: "Equipment Costs", description: "Assign equipment usage to jobs so every cost is accounted for." },
  { icon: TrendingUp, label: "Revenue Tracking", description: "See invoiced amounts and outstanding balances per job instantly." },
  { icon: DollarSign, label: "Gross Profit", description: "Know your margin on every job before you close it out." },
  { icon: BarChart2, label: "Department Budgets", description: "Set and track budgets across crews, divisions, or cost centres." },
];

export default function JobCostingSection() {
  return (
    <section className="py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-3">Job Costing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight mb-4">
            Know whether every job is making money.
          </h2>
          <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
            Most contractors find out a job lost money after the invoice is sent. OliveOps shows you profitability while the work is happening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="bg-[#1E293B] rounded-2xl p-7 border border-[#334155] hover:border-[#84A83D]/50 hover:bg-[#1E293B]/80 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#84A83D]/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#84A83D]" />
                </div>
                <h3 className="text-[#F8FAFC] font-semibold text-base mb-2">{card.label}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

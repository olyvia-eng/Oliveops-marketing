import { Cloud, RefreshCw, MapPin, Zap } from "lucide-react";

const trustCards = [
  { icon: Cloud, title: "Secure cloud storage", description: "Your data is encrypted at rest and in transit. Access it from any device, anywhere." },
  { icon: RefreshCw, title: "Automatic backups", description: "Everything is backed up continuously. You never lose a record, estimate, or job." },
  { icon: MapPin, title: "Canadian-based development", description: "OliveOps is built in Canada, by Canadians, for Canadian contractors and their workflows." },
  { icon: Zap, title: "Continuous updates", description: "We ship improvements regularly. Beta users get every update first and help shape what comes next." },
];

export default function TrustSection() {
  return (
    <section className="py-28 bg-[#F8FAFC] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-[#6B8E23] dark:text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-3">Built with real operators</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight mb-5">
              Built alongside real contractors.
            </h2>
            <p className="text-[#64748B] dark:text-[#CBD5E1] text-lg leading-relaxed mb-6">
              OliveOps isn&rsquo;t a generic CRM wrapped in contractor language. It&rsquo;s being developed alongside an Ontario excavation contractor to solve real operational problems &mdash; the kind that show up at 6 AM when a crew is waiting and the schedule is wrong.
            </p>
            <p className="text-[#64748B] dark:text-[#CBD5E1] text-lg leading-relaxed">
              Every feature exists because a contractor needed it. Every workflow was tested against real jobs. This is software built from the field up.
            </p>
          </div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm dark:bg-[#1E293B] dark:border-[#334155]">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4E3] flex items-center justify-center mb-4 dark:bg-[#0F172A]">
                    <Icon className="w-5 h-5 text-[#6B8E23] dark:text-[#84A83D]" />
                  </div>
                  <h3 className="text-[#0F172A] font-semibold text-sm mb-2 dark:text-[#F8FAFC]">{card.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

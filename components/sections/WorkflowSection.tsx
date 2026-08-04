import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  { label: "Customer", description: "Add or find your customer" },
  { label: "Property", description: "Link to job site details" },
  { label: "Estimate", description: "Build & send a quote" },
  { label: "Job", description: "Convert to active job" },
  { label: "Crew", description: "Assign & schedule crew" },
  { label: "Completion", description: "Log work, capture photos" },
  { label: "Invoice", description: "Bill & get paid" },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-[#0F172A] dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="End-to-end workflow"
          headline="From first contact to final invoice"
          subtext="OliveOps guides every job through a clear, repeatable process — so nothing gets missed and every job runs the same way."
        />

        {/* Workflow steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8E23]/20 via-[#6B8E23]/60 to-[#6B8E23]/20 dark:from-[#84A83D]/20 dark:via-[#84A83D]/60 dark:to-[#84A83D]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                {/* Step number bubble */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#FFFFFF] border-2 border-[#6B8E23] flex flex-col items-center justify-center mb-3 shadow-lg dark:bg-[#111827] dark:border-[#84A83D]">
                  <span className="text-[#6B8E23] font-bold text-lg leading-none dark:text-[#84A83D]">{step.label.charAt(0)}</span>
                  <span className="text-[#64748B] text-xs mt-0.5 dark:text-[#CBD5E1]">{index + 1}</span>
                </div>
                <h4 className="text-[#F8FAFC] font-semibold text-sm mb-1">{step.label}</h4>
                <p className="text-[#CBD5E1] text-xs leading-relaxed">{step.description}</p>

                {/* Arrow (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 z-20 text-[#6B8E23] text-lg font-bold dark:text-[#84A83D]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

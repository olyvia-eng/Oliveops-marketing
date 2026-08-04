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
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="End-to-end workflow"
          headline="From first contact to final invoice"
          subtext="OliveOps guides every job through a clear, repeatable process — so nothing gets missed and every job runs the same way."
        />

        {/* Workflow steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06B6D4]/20 via-[#06B6D4]/60 to-[#06B6D4]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                {/* Step number bubble */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-900 border-2 border-[#06B6D4] flex flex-col items-center justify-center mb-3 shadow-lg">
                  <span className="text-[#06B6D4] font-bold text-lg leading-none">{step.label.charAt(0)}</span>
                  <span className="text-slate-400 text-xs mt-0.5">{index + 1}</span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{step.label}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>

                {/* Arrow (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 z-20 text-[#06B6D4] text-lg font-bold">
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

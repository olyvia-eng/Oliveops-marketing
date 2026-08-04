import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: "👤",
    title: "CRM & Customer Management",
    description:
      "Keep every customer contact, communication history, and relationship detail organized and accessible.",
  },
  {
    icon: "🏡",
    title: "Property Management",
    description:
      "Track every property your crews service — site notes, access details, service history, and maps.",
  },
  {
    icon: "📝",
    title: "Estimating",
    description:
      "Build professional estimates fast. Reuse line items, apply markup, and send to customers for approval.",
  },
  {
    icon: "🚜",
    title: "Job Management",
    description:
      "From estimate to completion — track job status, assign crews, log field notes, and document everything.",
  },
  {
    icon: "👷",
    title: "Employee Tracking",
    description:
      "Manage your workforce, track time on jobs, and see who's working where at any moment.",
  },
  {
    icon: "📅",
    title: "Scheduling",
    description:
      "Drag-and-drop scheduling for your crews and equipment. Keep everyone on the right job at the right time.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How OliveOps helps"
          headline="Everything your operation needs, in one place"
          subtext="Stop switching between tools. OliveOps connects every part of your business so nothing falls through the cracks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#06B6D4] hover:bg-[#ecfeff] transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-[#0F172A] font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

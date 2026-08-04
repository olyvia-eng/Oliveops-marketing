import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EEF4E3] pt-32 pb-20 overflow-hidden dark:from-[#0F172A] dark:via-[#111827] dark:to-[#0F172A]">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6B8E23]/20 via-transparent to-transparent pointer-events-none dark:from-[#84A83D]/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EEF4E3] border border-[#6B8E23]/20 rounded-full px-4 py-1.5 mb-8 dark:bg-[#1E293B] dark:border-[#84A83D]/20">
            <div className="w-2 h-2 bg-[#6B8E23] rounded-full animate-pulse dark:bg-[#84A83D]" />
            <span className="text-[#6B8E23] text-sm font-medium dark:text-[#84A83D]">Now in Beta — Join Early</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6 dark:text-[#F8FAFC]">
            The Operating System{" "}
            <span className="text-[#6B8E23] dark:text-[#84A83D]">for Contractors</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#64748B] leading-relaxed mb-10 max-w-3xl mx-auto dark:text-[#CBD5E1]">
            Manage customers, properties, estimates, jobs, employees, and operations
            from one powerful platform built for contractors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
            <Button href="/beta" size="lg" variant="outline" className="border-[#6B8E23] text-[#0F172A] hover:bg-[#EEF4E3] hover:border-[#6B8E23] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B] dark:hover:border-[#84A83D]">
              Join Beta
            </Button>
          </div>

          <p className="text-[#64748B] text-sm mt-6 dark:text-[#CBD5E1]">
            No credit card required · Built for excavation, septic, landscaping & more
          </p>
        </div>

        {/* Product mockup */}
        <div className="mt-16 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden dark:bg-[#111827] dark:border-[#334155]">
              {/* Browser chrome */}
              <div className="bg-[#F8FAFC] px-4 py-3 flex items-center gap-2 border-b border-[#E2E8F0] dark:bg-[#0F172A] dark:border-[#334155]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
                <div className="flex-1 mx-4 bg-[#EEF4E3] rounded-md px-3 py-1 text-[#64748B] text-xs dark:bg-[#111827] dark:text-[#CBD5E1]">
                  app.oliveops.ca/dashboard
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 grid grid-cols-12 gap-4 min-h-[320px]">
                {/* Sidebar */}
                <div className="col-span-2 bg-[#F8FAFC] rounded-lg p-3 space-y-2 dark:bg-[#0F172A]">
                  {["Dashboard", "Customers", "Jobs", "Estimates", "Schedule", "Employees"].map((item) => (
                    <div
                      key={item}
                      className={`text-xs px-2 py-1.5 rounded ${item === "Dashboard" ? "bg-[#6B8E23] text-white" : "text-[#64748B] dark:text-[#CBD5E1]"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-10 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Active Jobs", value: "24" },
                      { label: "Open Estimates", value: "12" },
                      { label: "Customers", value: "187" },
                      { label: "Revenue MTD", value: "$84k" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#FFFFFF] rounded-lg p-3 border border-[#E2E8F0] dark:bg-[#0F172A] dark:border-[#334155]">
                        <p className="text-[#64748B] text-xs mb-1 dark:text-[#CBD5E1]">{stat.label}</p>
                        <p className="text-[#0F172A] font-bold text-lg dark:text-[#F8FAFC]">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0F172A] rounded-lg p-4">
                      <p className="text-[#64748B] text-xs font-semibold mb-3 uppercase tracking-wide dark:text-[#CBD5E1]">Recent Jobs</p>
                      <div className="space-y-2">
                        {["Septic pump - Johnson Farm", "Excavation - Riverside Rd", "Snow removal - Commercial"].map((job) => (
                          <div key={job} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#6B8E23] rounded-full flex-shrink-0 dark:bg-[#84A83D]" />
                            <span className="text-[#0F172A] text-xs truncate dark:text-[#F8FAFC]">{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#0F172A] rounded-lg p-4">
                      <p className="text-[#64748B] text-xs font-semibold mb-3 uppercase tracking-wide dark:text-[#CBD5E1]">Today&apos;s Schedule</p>
                      <div className="space-y-2">
                        {["8:00 AM - Crew A → Johnson Farm", "10:30 AM - Crew B → Riverside", "2:00 PM - Crew A → Downtown"].map((item) => (
                          <div key={item} className="text-xs text-[#64748B] py-1 border-l-2 border-[#6B8E23] pl-2 dark:text-[#CBD5E1] dark:border-[#84A83D]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#6B8E23]/20 blur-2xl rounded-full dark:bg-[#84A83D]/20" />
        </div>
      </div>
    </section>
  );
}

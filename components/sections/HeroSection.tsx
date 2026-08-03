import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-olive-600/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-olive-600/10 border border-olive-600/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-olive-500 rounded-full animate-pulse" />
            <span className="text-olive-400 text-sm font-medium">Now in Beta — Join Early</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            The Operating System{" "}
            <span className="text-olive-400">for Contractors</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Manage customers, properties, estimates, jobs, employees, and operations
            from one powerful platform built for contractors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-700 hover:border-slate-400">
              Join Beta
            </Button>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            No credit card required · Built for excavation, septic, landscaping & more
          </p>
        </div>

        {/* Product mockup */}
        <div className="mt-16 relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
                <div className="flex-1 mx-4 bg-slate-800 rounded-md px-3 py-1 text-slate-500 text-xs">
                  app.oliveops.com/dashboard
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 grid grid-cols-12 gap-4 min-h-[320px]">
                {/* Sidebar */}
                <div className="col-span-2 bg-slate-900 rounded-lg p-3 space-y-2">
                  {["Dashboard", "Customers", "Jobs", "Estimates", "Schedule", "Employees"].map((item) => (
                    <div
                      key={item}
                      className={`text-xs px-2 py-1.5 rounded ${item === "Dashboard" ? "bg-olive-600 text-white" : "text-slate-400"}`}
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
                      <div key={stat.label} className="bg-slate-900 rounded-lg p-3">
                        <p className="text-slate-500 text-xs mb-1">{stat.label}</p>
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900 rounded-lg p-4">
                      <p className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wide">Recent Jobs</p>
                      <div className="space-y-2">
                        {["Septic pump - Johnson Farm", "Excavation - Riverside Rd", "Snow removal - Commercial"].map((job) => (
                          <div key={job} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-olive-500 rounded-full flex-shrink-0" />
                            <span className="text-slate-300 text-xs truncate">{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <p className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wide">Today&apos;s Schedule</p>
                      <div className="space-y-2">
                        {["8:00 AM - Crew A → Johnson Farm", "10:30 AM - Crew B → Riverside", "2:00 PM - Crew A → Downtown"].map((item) => (
                          <div key={item} className="text-xs text-slate-400 py-1 border-l-2 border-olive-600 pl-2">
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
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-olive-600/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

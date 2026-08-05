import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EEF4E3] pt-32 pb-24 overflow-hidden dark:from-[#0F172A] dark:via-[#111827] dark:to-[#0F172A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6B8E23]/15 via-transparent to-transparent pointer-events-none dark:from-[#84A83D]/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#EEF4E3] border border-[#6B8E23]/20 rounded-full px-4 py-1.5 mb-8 dark:bg-[#1E293B] dark:border-[#84A83D]/20">
            <div className="w-2 h-2 bg-[#6B8E23] rounded-full animate-pulse dark:bg-[#84A83D]" />
            <span className="text-[#6B8E23] text-sm font-medium dark:text-[#84A83D]">Now in Private Beta &mdash; Limited Spots</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.08] tracking-tight mb-6 dark:text-[#F8FAFC]">
            Run your contracting business{" "}
            <span className="text-[#6B8E23] dark:text-[#84A83D]">without the spreadsheets.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#64748B] leading-relaxed mb-10 max-w-3xl mx-auto dark:text-[#CBD5E1]">
            OliveOps brings customers, estimates, jobs, schedules, crews, budgets, and reporting together in one connected platform built specifically for contractors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/beta" size="lg">
              Apply for Beta Access
            </Button>
            <Button href="/features" size="lg" variant="outline" className="border-[#6B8E23] text-[#0F172A] hover:bg-[#EEF4E3] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B] dark:border-[#84A83D] group">
              Explore Features
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          <p className="text-[#64748B] text-sm mt-6 dark:text-[#CBD5E1]">
            No credit card required &middot; Built for excavation, septic, landscaping &amp; more
          </p>
        </div>

        {/* Product screenshot */}
        <div className="mt-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-[#E2E8F0] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.18)] overflow-hidden dark:border-[#334155] dark:shadow-[0_32px_80px_-12px_rgba(0,0,0,0.5)]">
              <div className="bg-[#F8FAFC] px-4 py-3 flex items-center gap-2 border-b border-[#E2E8F0] dark:bg-[#0F172A] dark:border-[#334155]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-4 bg-[#EEF4E3] rounded-md px-3 py-1 text-[#64748B] text-xs dark:bg-[#111827] dark:text-[#CBD5E1]">
                  app.oliveops.ca/dashboard
                </div>
              </div>
              <img
                src="/dashboard.jpg"
                alt="OliveOps Company Dashboard"
                className="w-full block"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#6B8E23]/15 blur-3xl rounded-full dark:bg-[#84A83D]/15" />
        </div>
      </div>
    </section>
  );
}



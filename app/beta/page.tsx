import type { Metadata } from "next";
import BetaWaitlistForm from "@/components/sections/BetaWaitlistForm";

export const metadata: Metadata = {
  title: "Join the Beta Waitlist — OliveOps",
  description: "Sign up for the OliveOps beta and help shape the next generation of contractor software.",
};

export default function BetaPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EEF4E3] py-20 dark:from-[#0F172A] dark:via-[#111827] dark:to-[#0F172A]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#6B8E23] dark:text-[#84A83D]">
                Join the beta
              </p>
              <h1 className="mb-6 text-4xl font-bold text-[#0F172A] md:text-5xl dark:text-[#F8FAFC]">
                Get early access to OliveOps
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#64748B] dark:text-[#CBD5E1]">
                Be among the first contractors to experience the operating system built for modern field service businesses.
              </p>
            </div>
            <div className="rounded-2xl border border-[#6B8E23]/20 bg-[#FFFFFF] p-6 text-[#0F172A] shadow-xl backdrop-blur-sm dark:border-[#84A83D]/20 dark:bg-[#1E293B] dark:text-[#F8FAFC]">
              <h2 className="mb-3 text-xl font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Why join?</h2>
              <ul className="space-y-3 text-sm text-[#64748B] dark:text-[#CBD5E1]">
                <li>• Early access to the platform before public launch</li>
                <li>• Direct feedback opportunities with the OliveOps team</li>
                <li>• Priority onboarding and launch perks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">Beta waitlist signup</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#64748B] dark:text-[#CBD5E1]">
              Share a few details about your business and we&apos;ll reach out with next steps.
            </p>
          </div>
          <BetaWaitlistForm />
        </div>
      </section>
    </div>
  );
}

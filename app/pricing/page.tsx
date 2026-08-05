import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Beta Program — OliveOps",
  description: "Join the OliveOps Founding Contractor Beta. Free full access during private beta.",
};

const benefits = [
  "Full platform access — every feature, no limits",
  "Personal onboarding with the OliveOps team",
  "Direct influence on the product roadmap",
  "Priority support throughout beta",
  "Founding customer pricing locked in after launch",
];

const faqs = [
  {
    q: "Is OliveOps available now?",
    a: "OliveOps is in private beta. We're onboarding a limited number of contractors to test and shape the platform before public launch.",
  },
  {
    q: "What does the beta cost?",
    a: "Nothing. The beta is completely free. Founding contractors who help shape the product will receive preferential pricing when we launch publicly.",
  },
  {
    q: "Will my data be secure?",
    a: "Yes. OliveOps is built with security and data privacy as a priority. Your business data is encrypted and never shared.",
  },
  {
    q: "Can I import my existing data?",
    a: "Yes — we help you migrate your existing customer lists, property records, and job history into OliveOps during onboarding.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EEF4E3] dark:from-[#0F172A] dark:via-[#111827] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#6B8E23] dark:text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-4">Beta Program</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 dark:text-[#F8FAFC]">
            Join the founding contractor beta
          </h1>
          <p className="text-[#64748B] text-xl max-w-2xl mx-auto dark:text-[#CBD5E1]">
            Help shape the operating system for contractors. Free full access for a limited number of founding operators.
          </p>
        </div>
      </section>

      {/* Single card */}
      <section className="py-24 bg-[#FFFFFF] dark:bg-[#0F172A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-[#6B8E23] bg-[#F8FAFC] shadow-xl p-10 dark:bg-[#1E293B] dark:border-[#84A83D]">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#6B8E23] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 dark:bg-[#84A83D]">
                Private Beta
              </span>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2 dark:text-[#F8FAFC]">Founding Contractor Beta</h2>
              <p className="text-5xl font-bold text-[#6B8E23] dark:text-[#84A83D] mb-1">Free</p>
              <p className="text-[#64748B] text-sm dark:text-[#CBD5E1]">During private beta</p>
            </div>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EEF4E3] flex items-center justify-center flex-shrink-0 mt-0.5 dark:bg-[#0F172A]">
                    <Check className="w-3 h-3 text-[#6B8E23] dark:text-[#84A83D]" />
                  </div>
                  <span className="text-[#0F172A] text-sm leading-relaxed dark:text-[#F8FAFC]">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button href="/beta" className="w-full justify-center" size="lg">
              Apply for Beta Access
            </Button>

            <p className="text-center text-[#64748B] text-xs mt-4 dark:text-[#CBD5E1]">
              Limited onboarding spots available.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-10 text-center dark:text-[#F8FAFC]">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E2E8F0] dark:bg-[#1E293B] dark:border-[#334155]">
                <h3 className="font-semibold text-[#0F172A] mb-2 dark:text-[#F8FAFC]">{faq.q}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed dark:text-[#CBD5E1]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}


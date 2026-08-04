import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing — OliveOps",
  description: "Simple, transparent pricing for contractors of every size.",
};

const plans = [
  {
    name: "Starter",
    price: "Coming Soon",
    description: "Perfect for solo operators and small crews just getting organized.",
    features: [
      "Up to 5 users",
      "Customer & property management",
      "Basic estimating",
      "Job tracking",
      "Email support",
    ],
    cta: "Join Beta",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "Coming Soon",
    description: "For growing operations that need full workflow management.",
    features: [
      "Up to 25 users",
      "Everything in Starter",
      "Advanced scheduling",
      "Employee time tracking",
      "Document management",
      "Priority support",
    ],
    cta: "Request Beta",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large contractors and multi-location operations with custom needs.",
    features: [
      "Unlimited users",
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "Onboarding & training",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is OliveOps available now?",
    a: "OliveOps is currently in beta. Join the waitlist to get early access and help shape the product.",
  },
  {
    q: "Will my data be secure?",
    a: "Yes. OliveOps is built with security and data privacy as a priority. Your customer and business data is encrypted and never shared.",
  },
  {
    q: "Can I import my existing data?",
    a: "Yes — we help you migrate your existing customer lists, property records, and job history into OliveOps during onboarding.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Beta users get access to the full platform. Request beta access and we'll get you set up at no cost during the beta period.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EEF4E3] dark:from-[#0F172A] dark:via-[#111827] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#6B8E23] dark:text-[#84A83D] font-semibold text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 dark:text-[#F8FAFC]">
            Simple pricing that scales with you
          </h1>
          <p className="text-[#64748B] text-xl max-w-2xl mx-auto dark:text-[#CBD5E1]">
            We&apos;re in beta — pricing details are coming soon. Join now and lock in early access rates.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  plan.highlighted
                    ? "border-[#6B8E23] bg-[#EEF4E3] shadow-xl ring-1 ring-[#6B8E23] dark:border-[#84A83D] dark:bg-[#1E293B]"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-[#6B8E23] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full dark:bg-[#84A83D]">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">{plan.price}</p>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF4E3] flex items-center justify-center flex-shrink-0 dark:bg-[#1E293B]">
                        <svg className="w-3 h-3 text-[#6B8E23] dark:text-[#84A83D]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

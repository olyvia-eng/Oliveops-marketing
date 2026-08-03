import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Demo Request — OliveOps",
  description: "Request a demo of OliveOps or get in touch with our team.",
};

const reasons = [
  { icon: "🎯", text: "Personalized demo for your trade" },
  { icon: "⚡", text: "Get early beta access" },
  { icon: "💬", text: "Talk to someone who understands contractors" },
  { icon: "🔒", text: "No obligation, no credit card" },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-olive-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See OliveOps in action
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Book a personalized demo or join the beta. We&apos;d love to learn about your operation.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: why contact */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What to expect
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We&apos;ll set up a 30-minute call to understand your business and walk you through how OliveOps handles your specific workflow.
              </p>

              <div className="space-y-4 mb-10">
                {reasons.map((reason) => (
                  <div key={reason.text} className="flex items-center gap-4">
                    <div className="text-2xl">{reason.icon}</div>
                    <span className="text-slate-700 font-medium">{reason.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Already have questions?</h3>
                <p className="text-slate-500 text-sm mb-3">
                  Reach us directly at{" "}
                  <a href="mailto:hello@oliveops.com" className="text-olive-600 hover:underline font-medium">
                    hello@oliveops.com
                  </a>
                </p>
                <p className="text-slate-400 text-xs">We respond within 1–2 business days.</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Request a demo or join beta
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

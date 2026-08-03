"use client";

import { useState } from "react";

const industries = [
  "Excavation",
  "Septic",
  "Landscaping",
  "Snow Removal",
  "Construction",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    crewSize: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: send to API route or form service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-olive-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">You&apos;re on the list!</h3>
        <p className="text-slate-500">
          Thanks for reaching out. We&apos;ll be in touch within 1–2 business days to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            placeholder="Smith Excavating LLC"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
          >
            <option value="">Select industry</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="crewSize" className="block text-sm font-medium text-slate-700 mb-1">
            Crew size
          </label>
          <select
            id="crewSize"
            name="crewSize"
            value={form.crewSize}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
          >
            <option value="">Select crew size</option>
            <option value="1-5">1–5 employees</option>
            <option value="6-15">6–15 employees</option>
            <option value="16-50">16–50 employees</option>
            <option value="50+">50+ employees</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Tell us about your operation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent resize-none"
          placeholder="What are your biggest operational challenges? What are you hoping OliveOps can help with?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-olive-600 hover:bg-olive-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Request a Demo
      </button>

      <p className="text-slate-400 text-xs text-center">
        No spam, ever. We&apos;ll reach out within 1–2 business days.
      </p>
    </form>
  );
}

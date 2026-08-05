"use client";

import { useState } from "react";

const contractorTypes = ["Excavation", "Septic", "Landscaping", "Snow Removal", "Construction", "Other"];
const employeeOptions = ["1–5", "6–15", "16–50", "50+"];

export default function BetaWaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    contractorType: "",
    employeeCount: "",
    currentSoftware: "",
    painPoint: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/beta-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || {});
        setSubmitMessage(data.message || "Please correct the highlighted fields.");
        setIsSubmitting(false);
        return;
      }

      setSubmitSuccess(true);
      setSubmitMessage(data.message || "Thanks for joining the OliveOps beta. We\u2019ll be in touch soon.");
      setFormData({ name: "", companyName: "", email: "", phone: "", contractorType: "", employeeCount: "", currentSoftware: "", painPoint: "" });
    } catch (error) {
      console.error(error);
      setSubmitMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = "w-full rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-2.5 text-[#0F172A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#6B8E23] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#F8FAFC] text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-sm dark:border-[#334155] dark:bg-[#1E293B]">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" value={formData.name} onChange={handleChange}
            className={inputClass} placeholder="Jane Smith" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="companyName">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
            className={inputClass} placeholder="Smith Excavating Inc." />
          {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
            className={inputClass} placeholder="jane@smithexcavating.ca" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="contractorType">
            Industry <span className="text-red-500">*</span>
          </label>
          <select id="contractorType" name="contractorType" value={formData.contractorType} onChange={handleChange}
            className={inputClass}>
            <option value="">Select your trade</option>
            {contractorTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          {errors.contractorType && <p className="mt-1 text-xs text-red-600">{errors.contractorType}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="employeeCount">
            Number of Employees <span className="text-red-500">*</span>
          </label>
          <select id="employeeCount" name="employeeCount" value={formData.employeeCount} onChange={handleChange}
            className={inputClass}>
            <option value="">Select range</option>
            {employeeOptions.map((count) => <option key={count} value={count}>{count}</option>)}
          </select>
          {errors.employeeCount && <p className="mt-1 text-xs text-red-600">{errors.employeeCount}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="text-[#94A3B8] font-normal">(optional)</span>
          </label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange}
            className={inputClass} placeholder="(613) 555-0100" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="painPoint">
          Biggest Operational Challenge <span className="text-red-500">*</span>
        </label>
        <textarea id="painPoint" name="painPoint" rows={4} value={formData.painPoint} onChange={handleChange}
          className={inputClass + " resize-none"}
          placeholder="What is slowing your business down the most right now?" />
        {errors.painPoint && <p className="mt-1 text-xs text-red-600">{errors.painPoint}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="currentSoftware">
          Current Tools <span className="text-[#94A3B8] font-normal">(optional)</span>
        </label>
        <input id="currentSoftware" name="currentSoftware" value={formData.currentSoftware} onChange={handleChange}
          className={inputClass} placeholder="Spreadsheets, Jobber, ServiceTitan, etc." />
      </div>

      {submitMessage && (
        <div className={`rounded-lg border px-4 py-3 text-sm ${
          submitSuccess ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"
        }`}>
          {submitMessage}
        </div>
      )}

      <button type="submit" disabled={isSubmitting}
        className="w-full rounded-lg bg-[#6B8E23] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#5A7620] disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Submitting\u2026" : "Apply for Beta Access"}
      </button>

      <p className="text-center text-[#64748B] text-xs dark:text-[#CBD5E1]">
        No credit card required. We respond within 1–2 business days.
      </p>
    </form>
  );
}

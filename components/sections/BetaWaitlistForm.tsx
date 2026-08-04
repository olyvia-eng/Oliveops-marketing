"use client";

import { useState } from "react";

const contractorTypes = ["Excavation", "Landscaping", "Septic", "Other"];
const employeeOptions = ["1-5", "6-15", "16-50", "50+"];

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
      setSubmitMessage(data.message || "Thanks for joining the OliveOps beta. We'll be in touch soon.");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        contractorType: "",
        employeeCount: "",
        currentSoftware: "",
        painPoint: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            placeholder="Jane Smith"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            placeholder="Smith Excavating"
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="contractorType">
            Contractor Type
          </label>
          <select
            id="contractorType"
            name="contractorType"
            value={formData.contractorType}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
          >
            <option value="">Select one</option>
            {contractorTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.contractorType && <p className="mt-1 text-sm text-red-600">{errors.contractorType}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="employeeCount">
            Number of Employees
          </label>
          <select
            id="employeeCount"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
          >
            <option value="">Select one</option>
            {employeeOptions.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          {errors.employeeCount && <p className="mt-1 text-sm text-red-600">{errors.employeeCount}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="currentSoftware">
          Current Estimating Method / Software
        </label>
        <input
          id="currentSoftware"
          name="currentSoftware"
          value={formData.currentSoftware}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
          placeholder="Paper estimates, Excel, Jobber, etc."
        />
        {errors.currentSoftware && <p className="mt-1 text-sm text-red-600">{errors.currentSoftware}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="painPoint">
          Biggest Business Pain Point
        </label>
        <textarea
          id="painPoint"
          name="painPoint"
          rows={4}
          value={formData.painPoint}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
          placeholder="What is slowing your team down most right now?"
        />
        {errors.painPoint && <p className="mt-1 text-sm text-red-600">{errors.painPoint}</p>}
      </div>

      {submitMessage && (
        <div
          className={`rounded-lg border px-4 py-3 text-sm ${submitSuccess ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}
        >
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#06B6D4] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#0891b2] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Join Beta Waitlist"}
      </button>
    </form>
  );
}

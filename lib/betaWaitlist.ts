import { randomUUID } from "node:crypto";

export interface BetaWaitlistInput {
  name?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  contractorType?: string;
  employeeCount?: string;
  currentSoftware?: string;
  painPoint?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function normalizeBetaWaitlistInput(input: BetaWaitlistInput) {
  return {
    name: input.name?.trim() ?? "",
    companyName: input.companyName?.trim() ?? "",
    email: input.email?.trim().toLowerCase() ?? "",
    phone: input.phone?.trim() ?? "",
    contractorType: input.contractorType?.trim() ?? "",
    employeeCount: input.employeeCount?.trim() ?? "",
    currentSoftware: input.currentSoftware?.trim() ?? "",
    painPoint: input.painPoint?.trim() ?? "",
  };
}

export function validateBetaWaitlistInput(input: BetaWaitlistInput): ValidationResult {
  const normalized = normalizeBetaWaitlistInput(input);
  const errors: Record<string, string> = {};

  if (!normalized.name) errors.name = "Name is required.";
  if (!normalized.companyName) errors.companyName = "Company name is required.";
  if (!normalized.email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!normalized.contractorType) errors.contractorType = "Contractor type is required.";
  if (!normalized.employeeCount) errors.employeeCount = "Employee count is required.";
  if (!normalized.painPoint) errors.painPoint = "Please share your biggest pain point.";

  return { isValid: Object.keys(errors).length === 0, errors };
}

export function createBetaWaitlistItem(input: BetaWaitlistInput) {
  const normalized = normalizeBetaWaitlistInput(input);
  return {
    id: randomUUID(),
    name: normalized.name,
    companyName: normalized.companyName,
    email: normalized.email,
    phone: normalized.phone,
    contractorType: normalized.contractorType,
    employeeCount: normalized.employeeCount,
    currentSoftware: normalized.currentSoftware,
    painPoint: normalized.painPoint,
    createdAt: new Date().toISOString(),
    source: "website",
    status: "waiting",
    confirmationSent: false,
  };
}

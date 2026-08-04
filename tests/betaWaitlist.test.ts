import test from "node:test";
import assert from "node:assert/strict";
import { validateBetaWaitlistInput, normalizeBetaWaitlistInput } from "../lib/betaWaitlist";

test("validates required fields and trims values", () => {
  const result = validateBetaWaitlistInput({
    name: "  Jane Doe  ",
    companyName: "Smith Excavating",
    email: "jane@example.com",
    contractorType: "Excavation",
    employeeCount: "6-15",
    currentSoftware: "Paper estimates",
    painPoint: "Too much manual scheduling",
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});

  const normalized = normalizeBetaWaitlistInput({
    name: "  Jane Doe  ",
    companyName: "Smith Excavating",
    email: "  JANE@example.com ",
    phone: "555-1234",
    contractorType: "Excavation",
    employeeCount: "6-15",
    currentSoftware: "Paper estimates",
    painPoint: "Too much manual scheduling",
  });

  assert.equal(normalized.name, "Jane Doe");
  assert.equal(normalized.email, "jane@example.com");
});

test("rejects missing required fields", () => {
  const result = validateBetaWaitlistInput({
    name: "",
    companyName: "",
    email: "",
    contractorType: "",
    employeeCount: "",
    currentSoftware: "",
    painPoint: "",
  });

  assert.equal(result.isValid, false);
  assert.match(result.errors.name, /required/i);
  assert.match(result.errors.email, /required/i);
});

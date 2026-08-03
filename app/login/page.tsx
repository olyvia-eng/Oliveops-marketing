import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Log in — OliveOps",
};

export default function LoginPage() {
  redirect("https://app.oliveops.com");
}

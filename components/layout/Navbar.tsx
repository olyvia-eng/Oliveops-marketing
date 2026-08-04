"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Beta", href: "/beta" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:bg-[#0F172A]/95 dark:border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logonew.jpg" alt="OliveOps logo" className="w-8 h-8 object-contain mix-blend-multiply dark:mix-blend-screen" />
            <span className="text-[#0F172A] dark:text-[#F8FAFC] font-bold text-lg tracking-tight">
              OliveOps
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-[#6B8E23] dark:text-[#CBD5E1] dark:hover:text-[#84A83D] font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.oliveops.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#6B8E23] dark:text-[#CBD5E1] dark:hover:text-[#84A83D] font-medium text-sm transition-colors"
            >
              Log in
            </a>
            <Button href="/beta" size="sm">
              Request Beta
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#6B8E23] dark:text-[#CBD5E1] dark:hover:text-[#84A83D]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#E2E8F0] px-4 py-4 space-y-3 dark:bg-[#111827] dark:border-[#334155]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[#0F172A] hover:text-[#6B8E23] font-medium py-2 dark:text-[#F8FAFC] dark:hover:text-[#84A83D]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.oliveops.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#0F172A] font-medium py-2 dark:text-[#F8FAFC]"
          >
            Log in
          </a>
          <Button href="/beta" size="sm" className="w-full justify-center">
            Request Beta
          </Button>
        </div>
      )}
    </header>
  );
}

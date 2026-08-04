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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0F172A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#06B6D4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-[#0F172A] font-bold text-lg tracking-tight">
              OliveOps
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-[#06B6D4] font-medium text-sm transition-colors"
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
              className="text-slate-600 hover:text-[#06B6D4] font-medium text-sm transition-colors"
            >
              Log in
            </a>
            <Button href="/contact" size="sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-[#06B6D4]"
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
        <div className="md:hidden bg-white border-t border-[#0F172A]/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-700 hover:text-[#06B6D4] font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.oliveops.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-slate-600 font-medium py-2"
          >
            Log in
          </a>
          <Button href="/contact" size="sm" className="w-full justify-center">
            Request Demo
          </Button>
        </div>
      )}
    </header>
  );
}

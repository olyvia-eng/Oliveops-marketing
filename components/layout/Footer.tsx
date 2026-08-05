import Link from "next/link";
import { ExternalLink } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Beta Program", href: "/beta" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Log in", href: "https://app.oliveops.ca", external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Data Processing Addendum", href: "/dpa" },
    { label: "Acceptable Use Policy", href: "/aup" },
    { label: "Responsible Disclosure", href: "/responsible-disclosure" },
    { label: "Subprocessors", href: "/subprocessors" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logonew.jpg" alt="OliveOps logo" className="w-8 h-8 object-contain mix-blend-multiply dark:mix-blend-screen" />
              <span className="text-white font-bold text-lg tracking-tight">OliveOps</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              The operating system for contractors. Manage everything in one connected platform.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/oliveops" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition-colors text-xs font-bold text-[#CBD5E1]">
                in
              </a>
              <a href="https://github.com/oliveops" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm hover:text-[#84A83D] transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm hover:text-[#84A83D] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} OliveOps. All rights reserved.
          </p>
          <p className="text-sm">Built for contractors who mean business.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request Beta", href: "/beta" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Log in", href: "https://app.oliveops.ca", external: true },
  ],
  Industries: [
    { label: "Excavation", href: "/features" },
    { label: "Septic", href: "/features" },
    { label: "Landscaping", href: "/features" },
    { label: "Snow Removal", href: "/features" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1] dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#6B8E23] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">OliveOps</span>
            </Link>
            <p className="text-sm leading-relaxed">
              The operating system for contractors. Manage everything in one place.
            </p>
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
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[#84A83D] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm hover:text-[#84A83D] transition-colors"
                      >
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

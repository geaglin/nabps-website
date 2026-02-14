"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Board", href: "/board" },
  { name: "Membership", href: "/membership" },
  { name: "Resources", href: "/resources" },
  { name: "Standards", href: "/standards" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-navy" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-wide">NABPS</div>
              <div className="text-xs text-slate-300 -mt-0.5">
                National Association of Ballot Printing Standards
              </div>
            </div>
            <div className="sm:hidden">
              <div className="text-lg font-bold tracking-wide">NABPS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-gold transition-colors rounded-md hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-gold hover:bg-white/5 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

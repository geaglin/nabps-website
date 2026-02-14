import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-navy" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">NABPS</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Promoting best practices and ensuring the highest standards in
              ballot printing and Vote by Mail systems across the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About NABPS", href: "/#mission" },
                { name: "Board Members", href: "/board" },
                { name: "Membership", href: "/membership" },
                { name: "Resources", href: "/resources" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Industry Standards", href: "/standards" },
                { name: "Training Programs", href: "/resources" },
                { name: "News & Updates", href: "/news" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@nabps.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>(202) 555-0180</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Washington, D.C.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} National Association of Ballot Printing Standards. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

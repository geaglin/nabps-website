import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Have questions about NABPS, our standards, or membership? We&apos;re
              here to help. Reach out to our team and we&apos;ll get back to you
              promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="you@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Subject *
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white">
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="standards">Standards Questions</option>
                    <option value="certification">Vendor Certification</option>
                    <option value="training">Training Programs</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <p className="text-slate-600 text-sm">info@nabps.org</p>
                    <p className="text-slate-400 text-xs mt-1">
                      General inquiries and membership
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <p className="text-slate-600 text-sm">(202) 555-0180</p>
                    <p className="text-slate-400 text-xs mt-1">
                      Mon–Fri, 9:00 AM – 5:00 PM ET
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Location</h3>
                    <p className="text-slate-600 text-sm">Washington, D.C.</p>
                    <p className="text-slate-400 text-xs mt-1">
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Response Time</h3>
                    <p className="text-slate-600 text-sm">
                      Within 1–2 business days
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Urgent election matters prioritized
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                <h3 className="font-semibold text-navy mb-4">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    {
                      label: "Apply for Membership",
                      href: "/membership#apply",
                    },
                    {
                      label: "View Standards Documentation",
                      href: "/standards",
                    },
                    {
                      label: "Explore Training Programs",
                      href: "/resources",
                    },
                    {
                      label: "Meet the Board of Directors",
                      href: "/board",
                    },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gold-dark hover:text-gold transition-colors flex items-center gap-1.5"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

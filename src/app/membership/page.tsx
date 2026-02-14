import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Cpu,
  Vote,
  Printer,
} from "lucide-react";

const tiers = [
  {
    icon: Printer,
    name: "Ballot Printer",
    description:
      "For companies that print, produce, or fulfill ballots and election mail for counties and states.",
    benefits: [
      "Full voting membership",
      "Access to all NABPS standards documents",
      "Annual conference registration",
      "Industry benchmarking data",
      "Use of NABPS Certified Member seal",
      "Listing in NABPS member directory",
    ],
  },
  {
    icon: Cpu,
    name: "Tabulation & Technology",
    description:
      "For tabulation companies, election technology providers, and software firms serving the election industry.",
    benefits: [
      "Associate membership with voice",
      "Access to relevant standards",
      "Annual conference registration",
      "Cross-industry collaboration forums",
      "Technology integration guidelines",
      "Member directory listing",
    ],
  },
  {
    icon: Vote,
    name: "Election Official",
    description:
      "For county election offices, state election boards, and individual election administrators.",
    benefits: [
      "Complimentary membership",
      "Access to vendor evaluation guides",
      "Training program enrollment",
      "Best practice resource library",
      "Networking with certified vendors",
      "Annual conference access",
    ],
  },
  {
    icon: Building2,
    name: "Industry Partner",
    description:
      "For envelope manufacturers, mail service providers, and other companies supporting the election ecosystem.",
    benefits: [
      "Partner-level membership",
      "Access to partnership standards",
      "Conference and event access",
      "Co-marketing opportunities",
      "Supply chain integration support",
      "Member directory listing",
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Membership &{" "}
              <span className="text-gold">Application</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              NABPS membership is open to ballot printing companies, tabulation
              companies, election officials, and organizations that support the
              election ecosystem. Join the leading voice for ballot printing
              standards in the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Membership Categories
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Select the membership category that best fits your organization.
              Each tier is designed to provide maximum value for your role in the
              election ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-slate-50 rounded-xl border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center">
                    <tier.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  {tier.description}
                </p>
                <ul className="space-y-2.5">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-slate-50" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Apply for Membership
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-slate-600">
              Complete the form below to begin your NABPS membership application.
              Our team will review your application and respond within 5 business
              days.
            </p>
          </div>

          <form className="bg-white rounded-xl border border-slate-100 p-6 sm:p-8 space-y-6">
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
                Organization Name *
              </label>
              <input
                type="text"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="Your company or organization"
              />
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
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                placeholder="(555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Membership Category *
              </label>
              <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white">
                <option value="">Select a category</option>
                <option value="ballot-printer">Ballot Printer</option>
                <option value="tabulation-tech">
                  Tabulation &amp; Technology
                </option>
                <option value="election-official">Election Official</option>
                <option value="industry-partner">Industry Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Tell Us About Your Organization
              </label>
              <textarea
                rows={4}
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                placeholder="Briefly describe your organization and interest in NABPS membership..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting this form, you agree to our membership terms and
              privacy policy. Applications are reviewed by the NABPS Membership
              Committee.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Who is eligible for NABPS membership?",
                a: "Membership is open to ballot printing companies, tabulation companies, election officials, election technology providers, envelope manufacturers, mail service providers, and other organizations supporting the VBM ecosystem.",
              },
              {
                q: "Is there a membership fee?",
                a: "Membership fees vary by category and organization size. Election officials receive complimentary membership. Contact us for detailed pricing information.",
              },
              {
                q: "How long does the application process take?",
                a: "Applications are typically reviewed within 5 business days. The Membership Committee may request additional information or schedule a brief introductory call.",
              },
              {
                q: "Can international organizations join?",
                a: "While NABPS primarily serves the United States election ecosystem, we welcome international organizations with operations or interests in US ballot printing and VBM systems.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-slate-50 rounded-lg border border-slate-100 p-5 sm:p-6"
              >
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

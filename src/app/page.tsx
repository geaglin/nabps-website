import Link from "next/link";
import {
  Shield,
  BookOpen,
  Users,
  Scale,
  Lightbulb,
  Share2,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const objectives = [
  {
    icon: BookOpen,
    title: "Education & Training",
    description:
      "Comprehensive resources and training programs for counties and print vendors on ballot printing, mailing, and security protocols.",
  },
  {
    icon: Scale,
    title: "Industry Standards",
    description:
      "Collaborating with stakeholders to establish and disseminate best practices for ballot production and VBM processes.",
  },
  {
    icon: Share2,
    title: "Information Sharing",
    description:
      "A platform for members to share insights, challenges, and innovations related to ballot printing and election integrity.",
  },
  {
    icon: Users,
    title: "Advocacy",
    description:
      "Representing the collective interests of ballot printers with regulatory bodies, supporting secure and efficient VBM systems.",
  },
  {
    icon: Lightbulb,
    title: "Research & Development",
    description:
      "Encouraging research into new technologies and methodologies that enhance security and efficiency of ballot distribution.",
  },
];

const stats = [
  { label: "States Served", value: "50" },
  { label: "Member Organizations", value: "100+" },
  { label: "Years of Combined Experience", value: "75+" },
  { label: "Ballots Printed Annually", value: "250M+" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">
                Securing the Vote by Mail Process
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              National Association of{" "}
              <span className="text-gold">Ballot Printing Standards</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Dedicated to educating counties, election officials, and print
              vendors across the United States about the integrity and security
              of Vote by Mail systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-white section-fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-lg text-slate-600 leading-relaxed">
              NABPS is dedicated to promoting best practices, ensuring
              transparency, and upholding the highest standards in ballot
              printing and distribution to maintain public confidence in the
              electoral process. We serve as the bridge between counties,
              election officials, and the print vendors who make Vote by Mail
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {objectives.map((obj) => (
              <div
                key={obj.title}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-100 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <obj.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {obj.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NABPS */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Why NABPS Matters
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As Vote by Mail expands across the country, the integrity of
                ballot printing has never been more critical. NABPS brings
                together industry leaders to ensure that every ballot is
                printed, tracked, and delivered with the highest standards of
                accuracy and security.
              </p>
              <ul className="space-y-4">
                {[
                  "Uniform standards for ballot printing quality and security",
                  "Chain of custody protocols from print to mailbox",
                  "Vendor certification and quality assurance programs",
                  "Rapid response framework for election emergencies",
                  "Continuous improvement through data-driven insights",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8 sm:p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Trusted by Election Officials Nationwide
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our member organizations collectively print over 250 million
                ballots annually, serving counties in all 50 states. NABPS
                standards help ensure that every voter receives an accurate,
                secure ballot.
              </p>
              <Link
                href="/board"
                className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors"
              >
                Meet Our Board
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the Standard
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a ballot printing company, tabulation firm,
            election official, or election technology provider, NABPS membership
            connects you with industry leaders committed to election integrity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Apply for Membership
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

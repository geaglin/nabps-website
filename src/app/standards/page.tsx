import Link from "next/link";
import {
  FileCheck2,
  Lock,
  Printer,
  Truck,
  Eye,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const standardsAreas = [
  {
    icon: Printer,
    title: "Ballot Production Standards",
    code: "NABPS-100",
    description:
      "Requirements for ballot printing quality, including paper specifications, ink compatibility, print registration, and timing mark accuracy.",
    items: [
      "Paper weight and opacity requirements (minimum 80 lb. text or equivalent)",
      "Ink density specifications for optical scan readability",
      "Print registration tolerances (±0.01 inch)",
      "Timing mark placement and accuracy standards",
      "Duplex printing alignment requirements",
      "Ballot fold specifications and tolerances",
    ],
  },
  {
    icon: Lock,
    title: "Security & Access Control",
    code: "NABPS-200",
    description:
      "Facility and personnel security requirements to protect ballot integrity from production through delivery.",
    items: [
      "Facility access control and monitoring",
      "Personnel background screening requirements",
      "Visitor logging and escort protocols",
      "Secure waste destruction procedures",
      "Electronic security and network isolation",
      "Incident response and reporting requirements",
    ],
  },
  {
    icon: Truck,
    title: "Chain of Custody",
    code: "NABPS-300",
    description:
      "Tracking and verification protocols for ballots from initial print production through final delivery to election offices.",
    items: [
      "Production count verification procedures",
      "Packaging and sealing requirements",
      "Transportation security protocols",
      "Delivery verification and sign-off procedures",
      "Discrepancy investigation and resolution",
      "Documentation and record retention",
    ],
  },
  {
    icon: Eye,
    title: "Quality Assurance",
    code: "NABPS-400",
    description:
      "Inspection, testing, and verification processes to ensure every ballot meets production standards.",
    items: [
      "Inline print quality monitoring",
      "Sampling and statistical quality control",
      "Barcode and IMb verification",
      "Content accuracy verification processes",
      "Envelope and insert matching verification",
      "Final audit procedures before shipment",
    ],
  },
  {
    icon: FileCheck2,
    title: "Data Handling & Privacy",
    code: "NABPS-500",
    description:
      "Standards for handling voter data, ballot definitions, and election files with appropriate security and confidentiality.",
    items: [
      "Voter data encryption requirements",
      "Ballot definition file management",
      "Data retention and destruction policies",
      "Access logging and audit trails",
      "Transmission security protocols",
      "Third-party data handling agreements",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Vendor Certification",
    code: "NABPS-600",
    description:
      "The NABPS vendor certification program that verifies member organizations meet all applicable standards.",
    items: [
      "Certification application process",
      "On-site audit requirements",
      "Corrective action procedures",
      "Annual recertification requirements",
      "Certified vendor seal usage guidelines",
      "Public reporting and transparency",
    ],
  },
];

export default function StandardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Industry <span className="text-gold">Standards</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              NABPS develops and maintains comprehensive standards for ballot
              printing, security, chain of custody, and quality assurance.
              These standards are developed collaboratively with input from
              member organizations, election officials, and subject matter
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Standards Framework
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-slate-600 leading-relaxed">
              The NABPS Standards Framework is organized into six core areas,
              each designated with a series code. Together, these standards
              provide a comprehensive blueprint for secure, high-quality ballot
              production and distribution.
            </p>
          </div>

          <div className="space-y-8">
            {standardsAreas.map((area) => (
              <div
                key={area.code}
                className="bg-slate-50 rounded-xl border border-slate-100 p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy">
                        {area.title}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-gold-dark bg-gold/10 px-2 py-0.5 rounded">
                        {area.code}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  {area.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Standards Development Process
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Proposal",
                description:
                  "Members or committees propose new standards or revisions based on industry needs.",
              },
              {
                step: "02",
                title: "Drafting",
                description:
                  "Expert working groups draft the standard with input from affected stakeholders.",
              },
              {
                step: "03",
                title: "Review",
                description:
                  "Public comment period and board review ensure broad consensus and practical applicability.",
              },
              {
                step: "04",
                title: "Adoption",
                description:
                  "Final approval by the Board of Directors, followed by publication and member communication.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-100 p-6 text-center"
              >
                <div className="text-3xl font-bold text-gold mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get NABPS Certified
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Demonstrate your commitment to election integrity by achieving NABPS
            certification. Start your application today.
          </p>
          <Link
            href="/membership#apply"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Apply for Certification
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

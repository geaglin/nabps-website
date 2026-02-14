import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Video,
  Download,
  Calendar,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

const trainingPrograms = [
  {
    icon: GraduationCap,
    title: "Ballot Printing Fundamentals",
    level: "Foundation",
    description:
      "A comprehensive introduction to ballot printing standards, covering paper specifications, ink requirements, security features, and quality control checkpoints.",
    topics: [
      "Paper stock and weight requirements",
      "Ink specifications for optical scan compatibility",
      "Timing mark accuracy standards",
      "Print registration tolerances",
    ],
  },
  {
    icon: Shield,
    title: "Security & Chain of Custody",
    level: "Advanced",
    description:
      "Deep dive into ballot security protocols, from facility access controls through print production to final delivery verification at county election offices.",
    topics: [
      "Facility security requirements",
      "Personnel background checks",
      "Production tracking systems",
      "Delivery verification protocols",
    ],
  },
  {
    icon: FileText,
    title: "VBM Compliance & Regulations",
    level: "Specialized",
    description:
      "State-by-state overview of Vote by Mail regulations, compliance requirements, and how to navigate the varying standards across different jurisdictions.",
    topics: [
      "Federal election mail requirements",
      "State-specific VBM regulations",
      "ADA accessibility standards",
      "Multi-language ballot requirements",
    ],
  },
  {
    icon: Users,
    title: "County Partnership Best Practices",
    level: "Professional",
    description:
      "Learn to build strong partnerships with county election offices, from initial engagement through election day and post-election auditing.",
    topics: [
      "Vendor evaluation and selection",
      "Contract and SLA best practices",
      "Communication protocols during elections",
      "Post-election audit cooperation",
    ],
  },
];

const resources = [
  {
    icon: FileText,
    title: "NABPS Standards Guide 2024",
    type: "PDF Document",
    description:
      "The comprehensive guide to NABPS ballot printing standards, updated annually with input from member organizations and election officials.",
  },
  {
    icon: Video,
    title: "Webinar: Securing the VBM Supply Chain",
    type: "Recorded Webinar",
    description:
      "Board members discuss best practices for securing every step of the vote-by-mail supply chain, from paper procurement to final delivery.",
  },
  {
    icon: FileText,
    title: "Quality Control Checklist",
    type: "PDF Template",
    description:
      "A printable quality control checklist for ballot production facilities, covering all NABPS-recommended inspection points.",
  },
  {
    icon: FileText,
    title: "County Evaluation Toolkit",
    type: "Resource Kit",
    description:
      "Tools and templates for county election officials to evaluate and select ballot printing vendors based on NABPS standards.",
  },
  {
    icon: Video,
    title: "Training: Ballot Proofing Procedures",
    type: "Video Course",
    description:
      "Step-by-step video training on ballot proofing procedures, from initial data validation through final proof approval.",
  },
  {
    icon: FileText,
    title: "Emergency Response Framework",
    type: "PDF Document",
    description:
      "NABPS guidelines for handling emergencies during election ballot production, including reprints, natural disasters, and supply chain disruptions.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Educational{" "}
              <span className="text-gold">Resources & Training</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              NABPS provides comprehensive educational materials, training
              programs, and resource libraries to help counties, election
              officials, and print vendors maintain the highest standards in
              ballot production.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Training Programs
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Structured training programs developed by industry experts and
              reviewed by our Board of Directors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {trainingPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-slate-50 rounded-xl border border-slate-100 p-6 sm:p-8 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{program.title}</h3>
                    <span className="text-xs font-medium text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-gold shrink-0 mt-1" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Resource Library
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Access our growing library of guides, templates, webinars, and
              reference materials — available to all NABPS members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <resource.icon className="w-4 h-4 text-gold" />
                  <span>{resource.type}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark group-hover:text-gold transition-colors cursor-pointer">
                  <Download className="w-4 h-4" />
                  Download Resource
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Upcoming Events
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                date: "Mar 15, 2026",
                title: "NABPS Annual Standards Conference",
                location: "Washington, D.C.",
                description:
                  "Our flagship event bringing together ballot printers, election officials, and technology providers for two days of sessions, workshops, and networking.",
              },
              {
                date: "Apr 22, 2026",
                title: "Webinar: 2026 Election Preparedness",
                location: "Virtual",
                description:
                  "Prepare for the 2026 election cycle with guidance from NABPS board members on timelines, capacity planning, and compliance updates.",
              },
              {
                date: "Jun 10, 2026",
                title: "Regional Workshop: Midwest",
                location: "Chicago, IL",
                description:
                  "Hands-on training workshop for Midwest county election offices and their ballot printing partners.",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="flex gap-4 sm:gap-6 bg-slate-50 rounded-xl border border-slate-100 p-5 sm:p-6"
              >
                <div className="shrink-0 text-center">
                  <Calendar className="w-5 h-5 text-gold mx-auto mb-1" />
                  <div className="text-xs font-medium text-navy">
                    {event.date}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{event.title}</h3>
                  <p className="text-xs text-gold-dark font-medium mb-1">
                    {event.location}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Access All Resources
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            NABPS members get full access to our training programs, resource
            library, and exclusive events. Join today.
          </p>
          <Link
            href="/membership#apply"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Become a Member
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

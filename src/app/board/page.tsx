import { Building2, Linkedin } from "lucide-react";

const boardMembers = [
  {
    name: "Doug Sunde",
    title: "Vice President of Election Services",
    company: "SeaChange Print Innovations",
    bio: "Doug brings decades of experience in election services to the NABPS board. As VP of Election Services at SeaChange Print Innovations, he has been instrumental in developing innovative ballot printing solutions that combine cutting-edge technology with rigorous security protocols. His expertise in election logistics and ballot fulfillment has made SeaChange a trusted partner for counties across the nation.",
    focus: "Election Services Innovation & VBM Logistics",
  },
  {
    name: "Jamie Dickinson",
    title: "Vice President of Production",
    company: "Fort Orange Press",
    bio: "Jamie leads production operations at Fort Orange Press, one of the nation's premier ballot printing facilities. With extensive experience in high-volume print production and quality assurance, Jamie ensures that every ballot meets the exacting standards required for election integrity. Her leadership in production workflow optimization has set new benchmarks for the industry.",
    focus: "Production Excellence & Quality Assurance",
  },
  {
    name: "Brad Moorhouse",
    title: "Senior Operations Manager",
    company: "K&H Integrated Print Solutions",
    bio: "Brad oversees operations at K&H Integrated Print Solutions, bringing a deep understanding of integrated print workflows to the board. His expertise in managing complex, multi-step ballot production processes—from data processing to print-to-mail fulfillment—ensures that K&H consistently delivers accurate, on-time ballot packages to election offices nationwide.",
    focus: "Integrated Operations & Print-to-Mail Fulfillment",
  },
  {
    name: "Bryan Dandurand",
    title: "Chief Operating Officer",
    company: "Runbeck Election Services",
    bio: "As COO of Runbeck Election Services, Bryan brings strategic operations leadership to the NABPS board. Runbeck is a recognized leader in election technology and ballot printing, serving major counties across the United States. Bryan's focus on operational excellence, security infrastructure, and scalable production systems has helped shape modern standards for election mail processing.",
    focus: "Strategic Operations & Election Technology",
  },
];

export default function BoardPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Board of <span className="text-gold">Directors</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              NABPS is governed by a board of accomplished professionals from
              leading ballot printing organizations, each bringing unique
              expertise to advance the standards and integrity of Vote by Mail.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="space-y-12 sm:space-y-16">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Avatar / Card */}
                <div className="w-full lg:w-80 shrink-0">
                  <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                    <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-gold text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-navy">
                        {member.name}
                      </h3>
                      <p className="text-gold font-medium text-sm mt-1">
                        {member.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2 text-slate-500 text-sm">
                        <Building2 className="w-4 h-4" />
                        <span>{member.company}</span>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <span className="inline-flex items-center gap-1.5 bg-navy/5 text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                        <Linkedin className="w-3.5 h-3.5" />
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1">
                  <div className="inline-block bg-gold/10 text-gold-dark text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {member.focus}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                    {member.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Board Governance
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-slate-600 leading-relaxed mb-8">
              The NABPS Board meets quarterly to review industry developments,
              update standards, and plan educational initiatives. Board members
              serve staggered terms to ensure continuity of leadership and fresh
              perspectives. All board decisions are guided by our commitment to
              election integrity, transparency, and the advancement of ballot
              printing excellence.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Quarterly Meetings",
                  detail: "Regular governance sessions",
                },
                {
                  label: "Committee Structure",
                  detail: "Standards, Education, Membership",
                },
                {
                  label: "Annual Summit",
                  detail: "Industry-wide conference",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-lg p-5 border border-slate-100"
                >
                  <div className="font-semibold text-navy">{item.label}</div>
                  <div className="text-sm text-slate-500 mt-1">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

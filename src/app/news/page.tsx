import Link from "next/link";
import { Calendar, ArrowRight, Tag, ChevronRight } from "lucide-react";

const featuredArticle = {
  date: "February 10, 2026",
  category: "Industry Update",
  title: "NABPS Announces 2026 Standards Framework Update",
  excerpt:
    "The NABPS Board of Directors has approved a comprehensive update to the Standards Framework, incorporating new security protocols for ballot-on-demand printing, enhanced chain of custody tracking requirements, and updated quality assurance benchmarks. The 2026 update reflects input from over 60 member organizations and dozens of county election offices.",
  slug: "#",
};

const newsArticles = [
  {
    date: "January 28, 2026",
    category: "Membership",
    title: "NABPS Membership Surpasses 100 Organizations",
    excerpt:
      "NABPS welcomes its 100th member organization, marking a significant milestone in the association's growth and influence in the ballot printing industry.",
    slug: "#",
  },
  {
    date: "January 15, 2026",
    category: "Conference",
    title: "Registration Opens for 2026 Annual Standards Conference",
    excerpt:
      "Join industry leaders in Washington, D.C. on March 15, 2026 for two days of sessions, workshops, and networking focused on ballot printing excellence.",
    slug: "#",
  },
  {
    date: "December 12, 2025",
    category: "Standards",
    title: "New NABPS-500 Data Handling Standards Published",
    excerpt:
      "Updated data handling and privacy standards address emerging requirements for voter data encryption, ballot definition file management, and audit trail documentation.",
    slug: "#",
  },
  {
    date: "November 20, 2025",
    category: "Education",
    title: "NABPS Launches On-Demand Training Portal",
    excerpt:
      "Members now have access to a new online training portal featuring video courses, interactive assessments, and downloadable reference materials for ballot production teams.",
    slug: "#",
  },
  {
    date: "November 5, 2025",
    category: "Industry Update",
    title: "Post-Election Review: 2025 Municipal Elections",
    excerpt:
      "NABPS board members share insights and lessons learned from the 2025 municipal election cycle, highlighting successes in VBM processing and areas for improvement.",
    slug: "#",
  },
  {
    date: "October 18, 2025",
    category: "Advocacy",
    title: "NABPS Submits Comments on Proposed Federal VBM Guidelines",
    excerpt:
      "The association submitted detailed comments to federal regulators on proposed guidelines for vote-by-mail processing, advocating for practical, security-focused standards.",
    slug: "#",
  },
  {
    date: "September 30, 2025",
    category: "Certification",
    title: "Five New Members Achieve NABPS Vendor Certification",
    excerpt:
      "Five member organizations have completed the NABPS vendor certification process, demonstrating compliance with all NABPS-100 through NABPS-500 standards.",
    slug: "#",
  },
  {
    date: "September 8, 2025",
    category: "Events",
    title: "Regional Workshop Recap: Southeast",
    excerpt:
      "Over 40 attendees from 12 states participated in the Southeast regional workshop in Atlanta, covering ballot security, quality assurance, and county partnership best practices.",
    slug: "#",
  },
];

function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    "Industry Update": "bg-blue-50 text-blue-700",
    Membership: "bg-green-50 text-green-700",
    Conference: "bg-purple-50 text-purple-700",
    Standards: "bg-gold/10 text-gold-dark",
    Education: "bg-orange-50 text-orange-700",
    Advocacy: "bg-red-50 text-red-700",
    Certification: "bg-teal-50 text-teal-700",
    Events: "bg-indigo-50 text-indigo-700",
  };
  return map[category] || "bg-slate-100 text-slate-700";
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              News & <span className="text-gold">Updates</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Stay informed with the latest news, announcements, and updates
              from NABPS and the ballot printing industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getCategoryColor(
                  featuredArticle.category
                )}`}
              >
                {featuredArticle.category}
              </span>
              <span className="text-sm text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {featuredArticle.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              {featuredArticle.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
              {featuredArticle.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-gold-dark font-medium hover:text-gold transition-colors cursor-pointer">
              Read Full Article
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="font-semibold text-navy mb-2 group-hover:text-gold-dark transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="text-sm font-medium text-gold-dark group-hover:text-gold transition-colors cursor-pointer flex items-center gap-1">
                    Read
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-slate-300 mb-8">
              Subscribe to the NABPS newsletter for industry updates, standards
              announcements, and upcoming events delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

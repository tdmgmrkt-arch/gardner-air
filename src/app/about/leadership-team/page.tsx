import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Leadership Team | Gardner Air Commercial HVAC",
  description:
    "Meet the leadership team behind Gardner Air — decades of hands-on commercial HVAC experience guiding every service call, project, and long-term client relationship across Southern California.",
  alternates: {
    canonical: "https://gardnerair.com/about/leadership-team/",
  },
  openGraph: {
    title: "Leadership Team | Gardner Air Commercial HVAC",
    description:
      "Meet the leadership team behind Gardner Air — decades of hands-on commercial HVAC experience guiding every service call, project, and long-term client relationship across Southern California.",
    url: "https://gardnerair.com/about/leadership-team/",
  },
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
type TeamMember = {
  name: string;
  role: string;
  since: string;
  image: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Dirk Gardner",
    role: "Owner, President",
    since: "Since 2006",
    image: "/team/Dirk-300x300.webp",
    bio: "Dirk started Gardner Air in 2006 with a vision: build an HVAC company that does things the right way. With over 30 years in the industry and a background as a technician, Dirk knows this work inside and out. He's built a team that shares his belief in integrity, communication, and showing up prepared. That foundation is what Gardner Air is built on.",
  },
  {
    name: "Marci McBee",
    role: "General Manager",
    since: "Since 2010",
    image: "/team/Marci_McBee-300x300.webp",
    bio: "Marci keeps everything moving. She's been with us since 2010 and plays a key role in managing our day-to-day operations. With a focus on building a strong team and keeping customer service sharp, Marci makes sure things run smoothly behind the scenes — so clients always get the support they need.",
  },
  {
    name: "Scott Juhnke",
    role: "Project Manager / Commercial Estimator",
    since: "Since 2010",
    image: "/team/Scott_Juhnke-300x300.webp",
    bio: "Scott is the steady hand guiding our commercial projects. Since 2010, he's been handling estimates, planning, and keeping schedules and budgets on track. He's great at balancing details with big-picture thinking, and his communication keeps everyone aligned, from start to finish.",
  },
  {
    name: "Melissa Miller",
    role: "Operations Coordinator & Dispatch",
    since: "Since 2018",
    image: "/team/Melissa-Miller-300x300.webp",
    bio: "Melissa is the person behind the phone when things need to happen fast. Since 2018, she's been coordinating our field crews and keeping our schedule organized. Whether it's a last-minute dispatch or a routine maintenance visit, Melissa makes sure we're responsive and ready.",
  },
  {
    name: "Heather Hickman",
    role: "Operations Coordinator & Purchasing",
    since: "Since 2014",
    image: "/team/Heather-Hickman-300x300.webp",
    bio: "Heather's been with Gardner Air since 2014, and she's the reason our field techs always have what they need. She handles purchasing, accounting, and back-end logistics with care and consistency. Her organization helps keep jobs running without delays and vendors in sync with our pace.",
  },
  {
    name: "Brandon Wade",
    role: "Field Service Supervisor",
    since: "Since 2020",
    image: "/team/Brandon_Wade-300x300.webp",
    bio: "Brandon joined in 2020 and quickly became an essential part of our technician development. As a Field Supervisor, he's out there every day helping the next generation learn the ropes safely and thoroughly. He leads by example and makes sure quality never slips in the field.",
  },
  {
    name: "Sidney Morrison",
    role: "Preventive Maintenance Sales Specialist",
    since: "Since 2020",
    image: "/team/Sidney_Morrison-300x300.webp",
    bio: "Sidney came aboard in 2020 and focuses on helping clients get ahead of HVAC issues. She handles site visits, equipment evaluations, and maintenance proposals with a down-to-earth, solution-first mindset. Her work helps businesses avoid downtime and plan smarter.",
  },
  {
    name: "Brandon Guminski",
    role: "Field Service Supervisor",
    since: "Since 2016",
    image: "/team/Brandon_Guminski-300x300.webp",
    bio: "Brandon's been with us since 2016 and brings experience, leadership, and a whole lot of energy to the field. He oversees our field operations and is known for his eye for detail, technical skills, and loud personality, which we wouldn't trade for anything.",
  },
];

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Clear Communication, Always",
    body: "From the first phone call to the final service report, our team keeps you informed. No surprises, no ambiguity — just straight talk about what your equipment needs and what it will take to keep it running.",
  },
  {
    num: "02",
    title: "Long-Term Solutions Over Quick Fixes",
    body: "We don't cut corners to get to the next job. Every service call, every install, every maintenance visit is scoped to protect your equipment for the long haul — not just to close out a ticket.",
  },
  {
    num: "03",
    title: "There When You Need Us",
    body: "Preventative maintenance, full replacements, new installations, emergency dispatch — our team is structured to respond quickly and follow through with the professionalism you expect.",
  },
];

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const leadershipSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://gardnerair.com/about/leadership-team/",
  name: "Leadership Team | Gardner Air",
  about: {
    "@type": "HVACBusiness",
    name: "Gardner Air",
    employee: TEAM.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      worksFor: { "@type": "Organization", name: "Gardner Air" },
      image: `https://gardnerair.com${m.image}`,
    })),
  },
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function LeadershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://gardnerair.com/about/" },
              { "@type": "ListItem", position: 3, name: "Leadership Team", item: "https://gardnerair.com/about/leadership-team/" },
            ],
          }),
        }}
      />

      <SiteHeader />

      <main id="main-content">
        {/* ---- Hero ---- */}
        <section
          aria-labelledby="leadership-hero-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] pb-16 lg:pt-[180px] lg:pb-24"
        >
          <Image
            src="/Gardner-Air-line-of-trucks-1030x644.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-[50%_40%] opacity-45 pointer-events-none select-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/85 to-ga-charcoal-footer/55 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
                  Leadership Team
                </p>
                <h1
                  id="leadership-hero-heading"
                  className="font-bold text-white leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                  }}
                >
                  Meet the Leadership Team
                  <br />
                  at Gardner Air.
                </h1>
              </div>
              <p className="text-base lg:text-[17px] text-white/75 leading-relaxed max-w-xl">
                Gardner Air&rsquo;s leadership is rooted in integrity,
                experience, and proven results. Our team combines decades of
                hands-on fieldwork with strategic oversight — ensuring every
                service call, project, and client experience reflects the
                high standards our clients count on across Southern
                California.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* About Our Team — intro                                              */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="team-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  About Our Team
                </p>
                <h2
                  id="team-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  The People Behind Every Service Call
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Gardner Air&rsquo;s reputation for quality commercial HVAC
                    service comes from the people who lead it. Our leadership
                    team combines decades of hands-on fieldwork with strategic
                    oversight to ensure every service call, project, and client
                    experience reflects our high standards.
                  </p>
                  <p>
                    From technician training to long-term customer care, our
                    team works together to keep businesses across Southern
                    California comfortable, efficient, and well-supported.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-b border-[#D8D4CC]">
                <div className="py-6 pr-6 flex flex-col gap-1">
                  <p
                    className="tabular-nums font-bold text-[#D42027] leading-none"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    }}
                  >
                    8
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                    Leaders on staff
                  </p>
                </div>
                <div className="py-6 pl-6 border-l border-[#D8D4CC] flex flex-col gap-1">
                  <p
                    className="tabular-nums font-bold text-[#D42027] leading-none"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    }}
                  >
                    15+
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                    Avg years in the field
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Team grid                                                           */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="team-grid-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="mb-12 lg:mb-16 max-w-3xl">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Leadership
              </p>
              <h2
                id="team-grid-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Meet the Team Running Gardner Air
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {TEAM.map((m) => (
                <article
                  key={m.name}
                  className="rounded-2xl border border-[#D8D4CC] bg-white p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-[#F7F6F3]">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} at Gardner Air`}
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#D42027] mb-2">
                      {m.since}
                    </p>
                    <h3
                      className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-1"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "1.375rem",
                      }}
                    >
                      {m.name}
                    </h3>
                    <p
                      className="text-sm font-semibold text-[#6B7280] mb-4"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {m.role}
                    </p>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* What Makes Gardner Air Different                                    */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="different-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              <div className="lg:sticky lg:top-32">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  What Sets Us Apart
                </p>
                <h2
                  id="different-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  What Makes Gardner Air Different
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-8">
                  At Gardner Air, we know that commercial HVAC is about keeping
                  your building comfortable and running without surprises. Our
                  leadership team stays focused on clear communication,
                  long-term solutions, and being there when you need us. We
                  don&rsquo;t cut corners or leave you in the dark — whether
                  you need preventative maintenance, a full replacement, or a
                  new installation, Gardner Air delivers reliable service with
                  the professionalism and follow-through you expect.
                </p>

                <Link
                  href="/commercial-hvac-services/"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Explore Our Services
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                {DIFFERENTIATORS.map((p) => (
                  <div
                    key={p.num}
                    className="grid grid-cols-[72px_1fr] gap-6 py-8 items-start"
                  >
                    <p
                      className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(2rem, 3vw, 2.75rem)",
                      }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </p>
                    <div>
                      <h3
                        className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.125rem",
                        }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-base text-[#6B7280] leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule commercial HVAC service"
          className="relative overflow-hidden bg-[#1E2126] py-16 lg:py-24"
        >
          <Image
            src="/schematic.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.13] [filter:invert(1)] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                Work With Our Team
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Ready to Put Our Team to Work on Your Facility?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Talk to the people who&rsquo;ll actually manage your account —
                clear scope, honest pricing, and a maintenance program built
                around the way your building runs.
              </p>
              <Link
                href="#leadership-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule My Service
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact form                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="leadership-contact"
          aria-labelledby="leadership-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Get in Touch With the Gardner Air Team"
                  subhead="Tell us about your facility and equipment. Our team responds within one business day with a clear next step."
                  submitLabel="Schedule My Service"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility and equipment mix" },
                    { num: "02", body: "Our team scopes a maintenance or service plan" },
                    { num: "03", body: "You receive a written proposal with clear pricing" },
                  ].map((step) => (
                    <div key={step.num} className="grid grid-cols-[56px_1fr] gap-4 py-7 items-start">
                      <p
                        className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                        }}
                        aria-hidden="true"
                      >
                        {step.num}
                      </p>
                      <p
                        className="font-bold text-[#111318] leading-tight pt-1"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">
                    Prefer to talk first?
                  </p>
                  <a
                    href="tel:+19516964495"
                    className="text-base font-bold text-[#D42027] underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    (951) 696-4495
                  </a>
                </div>

                <div className="mt-10 overflow-hidden rounded-xl border border-[#D8D4CC]">
                  <Image
                    src="/customer-service-reps-v2.webp"
                    alt="Gardner Air commercial HVAC dispatch and customer service team in Murrieta, California"
                    width={1536}
                    height={1024}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <MobileCTABar />
    </>
  );
}

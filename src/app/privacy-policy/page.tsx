import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Gardner Air" },
  description:
    "Gardner Air's privacy policy: how we collect, use, and protect personal data on our website.",
  alternates: {
    canonical: "https://gardnerair.com/privacy-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://gardnerair.com/privacy-policy/" },
  ],
};

const SECTIONS = [
  { id: "overview", num: "01", title: "Overview" },
  { id: "information-collection", num: "02", title: "Information Collection & Use" },
  { id: "data-types", num: "03", title: "Types of Data Collected" },
  { id: "use-of-data", num: "04", title: "Use of Data" },
  { id: "transfer-of-data", num: "05", title: "Transfer of Data" },
  { id: "disclosure", num: "06", title: "Disclosure of Data" },
  { id: "security", num: "07", title: "Security of Data" },
  { id: "service-providers", num: "08", title: "Service Providers" },
  { id: "analytics", num: "09", title: "Analytics" },
  { id: "external-links", num: "10", title: "Links to Other Sites" },
  { id: "childrens-privacy", num: "11", title: "Children's Privacy" },
  { id: "changes", num: "12", title: "Changes to This Policy" },
  { id: "contact", num: "13", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main id="main-content">
        {/* ---- Hero ---- */}
        <section
          aria-labelledby="privacy-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] lg:pt-[180px] pb-16 lg:pb-24"
        >
          <Image
            src="/gardner-air-fleet.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-[50%_62%] opacity-45 pointer-events-none select-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/85 to-ga-charcoal-footer/55 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
              Legal
            </p>
            <h1
              id="privacy-heading"
              className="font-bold text-white leading-[0.95] tracking-tight mb-6 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
              How Gardner Air collects, uses, and protects personal information
              when you use our website and services.
            </p>
            <div className="inline-flex items-center gap-6 py-3 px-5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex flex-col gap-0.5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Effective Date
                </p>
                <p
                  className="text-white text-sm font-bold"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  July 14, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Body: two-column editorial ---- */}
        <section
          aria-label="Privacy policy content"
          className="bg-white py-16 lg:py-24 border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.2fr] gap-12 lg:gap-16 items-start">

              {/* Sticky sidebar — Contents */}
              <aside className="lg:sticky lg:top-32">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-6">
                  Contents
                </p>
                <nav aria-label="Privacy policy sections">
                  <ol className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                    {SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group grid grid-cols-[36px_1fr] gap-3 py-3 items-baseline hover:bg-[#FAF9F6] transition-colors -mx-3 px-3 rounded"
                        >
                          <span
                            className="tabular-nums font-bold text-[#D8D4CC] leading-none group-hover:text-ga-red transition-colors"
                            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem" }}
                            aria-hidden="true"
                          >
                            {s.num}
                          </span>
                          <span
                            className="text-sm text-ga-black leading-snug group-hover:text-ga-red transition-colors"
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                          >
                            {s.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-10 rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-6">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-gray-600 mb-3">
                    Questions?
                  </p>
                  <p
                    className="font-bold text-ga-black text-lg leading-tight mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Call our team directly.
                  </p>
                  <a
                    href="tel:+19516964495"
                    className="inline-flex items-center gap-2 text-base font-bold text-ga-red hover:text-ga-red-dark transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    (951) 696-4495
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </aside>

              {/* Content column */}
              <div
                className="flex flex-col gap-5 text-base lg:text-[17px] text-ga-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >

                {/* 01 — Overview */}
                <Section id="overview" num="01" eyebrow="Overview" title="About This Policy">
                  <p>
                    Gardner Air (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;)
                    operates the gardnerair.com website (the &ldquo;Service&rdquo;).
                  </p>
                  <p>
                    This page informs you of our policies regarding the collection,
                    use, and disclosure of personal data when you use our Service
                    and the choices you have associated with that data.
                  </p>
                  <p>
                    We use your data to provide and improve the Service. By using
                    the Service, you agree to the collection and use of information
                    in accordance with this policy. Unless otherwise defined in
                    this Privacy Policy, terms used in this Privacy Policy have the
                    same meanings as in our Terms and Conditions, accessible from
                    gardnerair.com.
                  </p>
                </Section>

                {/* 02 — Information Collection */}
                <Section id="information-collection" num="02" eyebrow="Collection & Use" title="Information Collection and Use">
                  <p>
                    We collect several different types of information for various
                    purposes to provide and improve our Service to you.
                  </p>
                </Section>

                {/* 03 — Types of Data */}
                <Section id="data-types" num="03" eyebrow="Data Types" title="Types of Data Collected">
                  <SubHeading>Personal Data</SubHeading>
                  <p>
                    While using our Service, we may ask you to provide us with
                    certain personally identifiable information that can be used to
                    contact or identify you (&ldquo;Personal Data&rdquo;).
                    Personally identifiable information may include, but is not
                    limited to:
                  </p>
                  <BulletList
                    items={[
                      "Email address",
                      "First name and last name",
                      "Phone number",
                      "Cookies and Usage Data",
                    ]}
                  />

                  <SubHeading>Usage Data</SubHeading>
                  <p>
                    We may also collect information how the Service is accessed
                    and used (&ldquo;Usage Data&rdquo;). This Usage Data may
                    include information such as your computer&rsquo;s Internet
                    Protocol address (e.g. IP address), browser type, browser
                    version, the pages of our Service that you visit, the time and
                    date of your visit, the time spent on those pages, unique
                    device identifiers and other diagnostic data.
                  </p>

                  <SubHeading>Tracking &amp; Cookies Data</SubHeading>
                  <p>
                    We use cookies and similar tracking technologies to track the
                    activity on our Service and hold certain information.
                  </p>
                  <p>
                    Cookies are files with small amount of data which may include
                    an anonymous unique identifier. Cookies are sent to your
                    browser from a website and stored on your device. Tracking
                    technologies also used are beacons, tags, and scripts to
                    collect and track information and to improve and analyze our
                    Service.
                  </p>
                  <p>
                    You can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our Service.
                  </p>
                  <p className="text-ga-black font-semibold">Examples of Cookies we use:</p>
                  <BulletList
                    items={[
                      <><strong className="text-ga-black">Session Cookies.</strong> We use Session Cookies to operate our Service.</>,
                      <><strong className="text-ga-black">Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</>,
                      <><strong className="text-ga-black">Security Cookies.</strong> We use Security Cookies for security purposes.</>,
                    ]}
                  />
                </Section>

                {/* 04 — Use of Data */}
                <Section id="use-of-data" num="04" eyebrow="Purpose" title="Use of Data">
                  <p>Gardner Air uses the collected data for various purposes:</p>
                  <BulletList
                    items={[
                      "To provide and maintain the Service",
                      "To notify you about changes to our Service",
                      "To allow you to participate in interactive features of our Service when you choose to do so",
                      "To provide customer care and support",
                      "To provide analysis or valuable information so that we can improve the Service",
                      "To monitor the usage of the Service",
                      "To detect, prevent and address technical issues",
                    ]}
                  />
                </Section>

                {/* 05 — Transfer */}
                <Section id="transfer-of-data" num="05" eyebrow="Transfer" title="Transfer of Data">
                  <p>
                    Your information, including Personal Data, may be transferred
                    to &mdash; and maintained on &mdash; computers located outside
                    of your state, province, country or other governmental
                    jurisdiction where the data protection laws may differ than
                    those from your jurisdiction.
                  </p>
                  <p>
                    If you are located outside United States and choose to provide
                    information to us, please note that we transfer the data,
                    including Personal Data, to United States and process it
                    there.
                  </p>
                  <p>
                    Your consent to this Privacy Policy followed by your
                    submission of such information represents your agreement to
                    that transfer.
                  </p>
                </Section>

                {/* 06 — Disclosure */}
                <Section id="disclosure" num="06" eyebrow="Disclosure" title="Disclosure of Data">
                  <SubHeading>Legal Requirements</SubHeading>
                  <p>
                    Gardner Air may disclose your Personal Data in the good faith
                    belief that such action is necessary to:
                  </p>
                  <BulletList
                    items={[
                      "Comply with a legal obligation",
                      "Protect and defend the rights or property of Gardner Air",
                      "Prevent or investigate possible wrongdoing in connection with the Service",
                      "Protect the personal safety of users of the Service or the public",
                      "Protect against legal liability",
                    ]}
                  />
                </Section>

                {/* 07 — Security */}
                <Section id="security" num="07" eyebrow="Security" title="Security of Data">
                  <p>
                    The security of your data is important to us, but remember
                    that no method of transmission over the Internet, or method of
                    electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your Personal Data,
                    we cannot guarantee its absolute security.
                  </p>
                </Section>

                {/* 08 — Service Providers */}
                <Section id="service-providers" num="08" eyebrow="Third Parties" title="Service Providers">
                  <p>
                    We may employ third party companies and individuals to
                    facilitate our Service (&ldquo;Service Providers&rdquo;), to
                    provide the Service on our behalf, to perform Service-related
                    services or to assist us in analyzing how our Service is used.
                  </p>
                  <p>
                    These third parties have access to your Personal Data only to
                    perform these tasks on our behalf and are obligated not to
                    disclose or use it for any other purpose.
                  </p>
                </Section>

                {/* 09 — Analytics */}
                <Section id="analytics" num="09" eyebrow="Analytics" title="Analytics">
                  <p>
                    We may use third-party Service Providers to monitor and
                    analyze the use of our Service.
                  </p>
                  <SubHeading>Google Analytics</SubHeading>
                  <p>
                    Google Analytics is a web analytics service offered by Google
                    that tracks and reports website traffic. Google uses the data
                    collected to track and monitor the use of our Service. This
                    data is shared with other Google services. Google may use the
                    collected data to contextualize and personalize the ads of its
                    own advertising network.
                  </p>
                  <p>
                    You can opt-out of having made your activity on the Service
                    available to Google Analytics by installing the Google
                    Analytics opt-out browser add-on. The add-on prevents the
                    Google Analytics JavaScript (ga.js, analytics.js, and dc.js)
                    from sharing information with Google Analytics about visits
                    activity.
                  </p>
                  <p>
                    For more information on the privacy practices of Google,
                    please visit the Google Privacy &amp; Terms web page:{" "}
                    <a
                      href="https://policies.google.com/privacy?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ga-red underline underline-offset-2 hover:text-ga-red-dark transition-colors break-all"
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </Section>

                {/* 10 — External Links */}
                <Section id="external-links" num="10" eyebrow="External" title="Links to Other Sites">
                  <p>
                    Our Service may contain links to other sites that are not
                    operated by us. If you click on a third party link, you will
                    be directed to that third party&rsquo;s site. We strongly
                    advise you to review the Privacy Policy of every site you
                    visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </p>
                </Section>

                {/* 11 — Children's Privacy */}
                <Section id="childrens-privacy" num="11" eyebrow="Minors" title="Children's Privacy">
                  <p>
                    Our Service does not address anyone under the age of 18
                    (&ldquo;Children&rdquo;).
                  </p>
                  <p>
                    We do not knowingly collect personally identifiable
                    information from anyone under the age of 18. If you are a
                    parent or guardian and you are aware that your Children has
                    provided us with Personal Data, please contact us. If we
                    become aware that we have collected Personal Data from
                    children without verification of parental consent, we take
                    steps to remove that information from our servers.
                  </p>
                </Section>

                {/* 12 — Changes */}
                <Section id="changes" num="12" eyebrow="Updates" title="Changes to This Privacy Policy">
                  <p>
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy on
                    this page.
                  </p>
                  <p>
                    We will let you know via email and/or a prominent notice on
                    our Service, prior to the change becoming effective and update
                    the &ldquo;effective date&rdquo; at the top of this Privacy
                    Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for
                    any changes. Changes to this Privacy Policy are effective when
                    they are posted on this page.
                  </p>
                </Section>

                {/* 13 — Contact */}
                <Section id="contact" num="13" eyebrow="Contact" title="Contact Us">
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <div className="mt-4 rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="flex flex-col gap-1">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-gray-600">
                        By Phone
                      </p>
                      <a
                        href="tel:+19516964495"
                        className="text-lg font-bold text-ga-red hover:text-ga-red-dark transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        (951) 696-4495
                      </a>
                    </div>
                  </div>
                </Section>

                {/* Back to home */}
                <div className="mt-10 pt-8 border-t border-[#D8D4CC]">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red hover:text-ga-red-dark transition-colors"
                  >
                    &larr; Back to Home
                  </Link>
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

/* ------------------------------------------------------------------ */
/* Editorial section — mirrors home-page numbered pattern              */
/* ------------------------------------------------------------------ */
function Section({
  id,
  num,
  eyebrow,
  title,
  children,
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-32 pt-10 lg:pt-14 first:pt-0 border-t border-[#D8D4CC] first:border-t-0"
    >
      <div className="grid grid-cols-[52px_1fr] lg:grid-cols-[72px_1fr] gap-4 lg:gap-8 mb-6">
        <p
          className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
          }}
          aria-hidden="true"
        >
          {num}
        </p>
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-3">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="font-bold text-ga-black leading-tight tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(1.5rem, 2.25vw, 1.875rem)",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="lg:pl-20 flex flex-col gap-4">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-4 mb-1 font-bold text-ga-black text-lg lg:text-xl leading-tight tracking-[-0.01em]"
      style={{ fontFamily: "var(--font-dm-sans)" }}
    >
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col divide-y divide-[#E5E1D8] border-t border-b border-[#E5E1D8]">
      {items.map((item, i) => (
        <li key={i} className="py-3 grid grid-cols-[20px_1fr] gap-3 items-start">
          <span
            className="mt-2 h-1.5 w-1.5 rounded-full bg-ga-red shrink-0"
            aria-hidden="true"
          />
          <span className="text-ga-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Award,
  Shield,
  Zap,
  Clock,
  TrendingDown,
  BarChart3,
  ChevronDown,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Commercial HVAC Controls & BAS Service | Gardner Air | Southern California",
  description:
    "Gardner Air provides preventative maintenance and integration support for commercial HVAC controls and building automation systems across Southern California. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/precision-controls/",
  },
  openGraph: {
    title: "Commercial HVAC Controls & BAS Service | Gardner Air | Southern California",
    description:
      "Gardner Air provides preventative maintenance and integration support for commercial HVAC controls and building automation systems across Southern California. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/precision-controls/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const controlsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Controls and BAS Maintenance",
  description:
    "Gardner Air provides preventative maintenance, diagnostics, and integration support for BACnet building automation systems, direct digital controls, Modbus and LonWorks integration, and cloud-connected controls platforms serving commercial facilities and multi-site campuses across Southern California.",
  url: "https://gardnerair.com/equipment/precision-controls/",
  serviceType: "Commercial HVAC Controls Maintenance",
  provider: {
    "@type": "HVACBusiness",
    name: "Gardner Air",
    telephone: "+19516964495",
    email: "service@gardnerci.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30714 Wealth St",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      postalCode: "92563",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "County", name: "Riverside County" },
      { "@type": "County", name: "San Bernardino County" },
      { "@type": "County", name: "Orange County" },
    ],
  },
  areaServed: "Southern California",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gardnerair.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Equipment",
      item: "https://gardnerair.com/equipment/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Precision Controls",
      item: "https://gardnerair.com/equipment/precision-controls/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is a building automation system and why does it need maintenance?",
    a: "A building automation system (BAS) is a network of controllers, sensors, and software that monitors and controls a building's HVAC, lighting, and other mechanical systems. It maintains setpoints, executes control sequences, logs trends, and generates alarms when conditions fall outside defined parameters. A BAS requires maintenance because sensors drift from calibration, communication networks develop faults, PID loops require retuning as system conditions change, and firmware requires updates. A BAS that has not been maintained operates on inaccurate data and executes sequences against the last correct configuration — which may be years out of date.",
  },
  {
    q: "What is the difference between BACnet, Modbus, and LonWorks?",
    a: "BACnet is an open standard developed specifically for building automation and is the dominant commercial protocol for modern HVAC controls. It supports complex object models, alarm management, and flexible network topologies. Modbus is an older serial protocol widely used in industrial equipment, VFDs, meters, and legacy HVAC gear — simpler than BACnet but still common in commercial facilities. LonWorks is a peer-to-peer networking protocol deployed heavily in the 1990s and 2000s in institutional and campus buildings. Many facilities operate all three, with a supervisory BAS aggregating data across protocols. Gardner Air services all three and manages the integration between them.",
  },
  {
    q: "How do I know if my BAS sensors are reading accurately?",
    a: "The most reliable indicator is a calibration check against a reference instrument. Common field indicators of sensor drift include: spaces that feel warmer or cooler than the thermostat setpoint, energy consumption that has increased without a corresponding change in occupancy or weather, equipment that runs longer than expected to reach setpoint, and BAS trend data that shows setpoints being reached inconsistently. None of these indicators alone confirms sensor drift — they can also reflect mechanical issues — but sensor calibration should be verified before pursuing more costly mechanical interventions.",
  },
  {
    q: "What is PID tuning and when does it need to be adjusted?",
    a: "PID (proportional-integral-derivative) control is the algorithm most building automation controllers use to modulate HVAC equipment toward a setpoint. The P, I, and D parameters determine how aggressively the controller responds to a deviation from setpoint. Incorrect PID tuning causes equipment to overshoot the setpoint, oscillate, or hunt continuously without stabilizing. PID parameters need adjustment when HVAC equipment is replaced, when system loads change significantly, when a control loop that previously performed well begins exhibiting instability, or as part of a scheduled commissioning review. Gardner Air evaluates control loop performance on every maintenance visit.",
  },
  {
    q: "Can you integrate new HVAC equipment with our existing BAS?",
    a: "Gardner Air manages the integration of new HVAC equipment — chillers, air handlers, rooftop units, boilers — with existing BAS platforms across all major protocols. Integration work includes protocol configuration, point mapping, sequence of operations programming, alarm configuration, and trend logging setup. Where the new equipment uses a different communication protocol than the existing BAS, Gardner Air handles the protocol translation layer. Complete integration documentation is provided at the conclusion of every integration project.",
  },
  {
    q: "What are signs my controls system needs immediate attention?",
    a: "Controls conditions that warrant prompt attention include: equipment running continuously without cycling normally, setpoints that are not being maintained despite equipment operation, loss of communication alarms for multiple controllers, trend data that shows setpoints drifting over hours or days, alarm floods that are masking underlying fault conditions, and any situation where the BAS operator cannot verify that commands are executing at the field device level. Gardner Air's maintenance clients receive documented communications status and sensor calibration data after every visit, making early detection of these conditions possible before they escalate.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const CERT_LOGOS = [
  {
    src: "/diamond-contractor.webp",
    alt: "Diamond Contractor — Elite Factory-Authorized Dealer",
    widthClass: "w-28 lg:w-36",
  },
  {
    src: "/epa-logo.webp",
    alt: "EPA Certified — Environmental Protection Agency",
    widthClass: "w-14 lg:w-16",
  },
  {
    src: "/nate-logo.webp",
    alt: "NATE Certified — North American Technician Excellence",
    widthClass: "w-14 lg:w-16",
  },
  {
    src: "/nci-logo.webp",
    alt: "NCI Certified — National Comfort Institute",
    widthClass: "w-24 lg:w-28",
  },
  {
    src: "/york-logo.webp",
    alt: "York Authorized — Factory-Authorized Dealer",
    widthClass: "w-20 lg:w-24",
  },
];

const CONTROLS_TYPES = [
  {
    title: "BACnet Building Automation Systems",
    body: "BACnet (Building Automation and Control Networks) is the dominant open-protocol standard for commercial building controls. It enables communication between HVAC controllers, meters, lighting systems, and other building subsystems from multiple manufacturers. Gardner Air services BACnet networks at the controller level — verifying network addressing, object configuration, alarm logic, and integration with field devices. Clients on BACnet platforms can expect their systems to be maintained against the configuration documentation, not just observed for obvious faults.",
  },
  {
    title: "LonWorks Controls",
    body: "LonWorks is a peer-to-peer control networking protocol found in institutional buildings, campuses, and transportation facilities — often in systems installed before BACnet became the dominant commercial standard. LonWorks networks in older buildings require specific diagnostic tools and protocol knowledge that general HVAC contractors do not carry. Gardner Air services LonWorks control systems including node commissioning, network variable binding verification, and integration with modern supervisory platforms where legacy-to-current migration is in progress.",
  },
  {
    title: "Modbus Integration",
    body: "Modbus is a serial communication protocol widely used in industrial HVAC, building controls, and process equipment. It is common in facilities that operate variable-frequency drives, chillers, boilers, and packaged equipment alongside a supervisory BAS. Gardner Air services Modbus register mapping, communication fault diagnosis, and integration with higher-level control platforms — ensuring that the data flowing from Modbus devices to the BAS is accurate and that command signals are executing correctly at the field device level.",
  },
  {
    title: "Direct Digital Controls (DDC)",
    body: "Direct digital controls replace pneumatic and analog control with microprocessor-based controllers that execute sequences of operation for individual HVAC equipment — air handling units, VAV boxes, fan coil units, and terminal units. DDC controllers require periodic verification that control sequences are executing correctly, sensor inputs are calibrated, and PID loop parameters are tuned to current system conditions. Gardner Air's DDC service scope covers controller programming verification, sensor calibration, sequence of operations testing, and alarm logic review.",
  },
  {
    title: "Wireless and Cloud-Connected Controls",
    body: "Wireless and cloud-connected controls platforms extend BAS visibility to facilities without extensive hardwired infrastructure and enable centralized monitoring across multi-site portfolios. Gardner Air supports integration of wireless sensor and control nodes with existing BAS platforms, configuration of cloud dashboard access, and verification of data integrity between field devices and the monitoring layer. For facilities moving from standalone controls to a connected platform, Gardner Air manages the integration process to ensure existing HVAC equipment is represented accurately in the new system.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "Controls maintenance is not a panel inspection — it is an operational verification. Every visit covers: sensor calibration against reference instruments, control sequence testing, alarm logic verification, communication fault review across all networked devices, PID loop performance assessment, and a written service report documenting calibration data and any identified deviations. No items deferred because the scheduled time ran out.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When controls are producing incorrect setpoints, failing to communicate with field devices, or generating fault alarms that cannot be cleared, Gardner Air diagnoses the root cause. Covers sensor replacement and recalibration, controller firmware evaluation, network communication fault isolation, PID retuning, and sequence of operations correction. Existing maintenance clients receive priority scheduling.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a controls system has reached end of support life or a facility's operational requirements have outgrown the existing system's capabilities, Gardner Air manages the replacement process from specification through commissioning — including protocol selection, controller hardware procurement, sequence programming, integration with existing HVAC equipment, and full commissioning documentation.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New controls system installation and startup requires more than hardware commissioning. Sequence of operations programming, point-to-point verification of every sensor and command output, alarm logic configuration, BAS integration testing, and baseline documentation all occur before Gardner Air considers the system accepted.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Sensor drift and calibration loss",
    body: "Temperature, pressure, humidity, and CO2 sensors drift from their calibration baseline over time. A sensor reading 4°F above actual supply air temperature causes the control system to overcool spaces, increasing energy consumption and reducing occupant comfort. Gardner Air calibrates sensors against reference instruments on every maintenance visit and documents the calibration data as a trend record.",
  },
  {
    title: "Communication faults between controllers",
    body: "BACnet, Modbus, and LonWorks networks experience communication faults from hardware failures, network topology changes, address conflicts, and firmware incompatibilities. A controller that has dropped off the network is not alarming — it is silently executing the last command it received, which may be a damper open, a setpoint at its limit, or a disabled safety interlock.",
  },
  {
    title: "Incorrect PID tuning causing cycling",
    body: "PID control loops that are not tuned to the current system's thermal characteristics cause equipment to overshoot setpoints, short-cycle, and hunt continuously for a stable operating point. This accelerates mechanical wear and produces energy inefficiency. Gardner Air evaluates PID performance on every maintenance visit and retunes loops where system response data indicates instability.",
  },
  {
    title: "Unauthorized setpoint changes",
    body: "Commercial controls systems with multiple users or operators frequently accumulate unauthorized or undocumented setpoint changes that shift the system away from its intended design conditions. Gardner Air's maintenance visits include a setpoint audit — comparing current programmed setpoints against the documented design intent and flagging deviations for the facilities manager's review.",
  },
  {
    title: "Expired firmware and security vulnerabilities",
    body: "Building automation systems that have not received firmware updates carry known security vulnerabilities and may no longer be supported by manufacturer patches. In healthcare, pharmaceutical, and government facilities, controls system security is a compliance requirement. Gardner Air tracks firmware versions across serviced controllers and flags systems approaching or past end of support.",
  },
  {
    title: "Integration gaps between legacy and modern equipment",
    body: "Facilities that add new HVAC equipment to an existing BAS often experience incomplete integration — new equipment visible on the network but not fully mapped to the supervisory layer, alarm conditions not configured, or trend logging not capturing the new points. Gardner Air identifies and closes integration gaps as part of the controls maintenance scope.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Verified sensor accuracy · Setpoints maintained",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Lower energy costs · Stable control loops",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Full BAS visibility · No silent failures",
    Icon: BarChart3,
  },
];

const WHY_CHOOSE = [
  {
    title: "Operational verification, not visual inspection.",
    body: "Gardner Air's controls maintenance visits test that sensors are reading accurately, sequences are executing correctly, and communication between devices is intact — not just that the panel is powered on and not alarming. Facilities managers receive calibration data and sequence test results in the written report after every visit.",
  },
  {
    title: "Cross-platform protocol knowledge.",
    body: "Gardner Air's technicians work across BACnet, Modbus, LonWorks, and proprietary platforms. Commercial facilities rarely operate a single-vendor controls environment, and accurate diagnostics require the ability to trace a fault across protocol boundaries — from a field sensor through a Modbus device to a BACnet controller to the supervisory BAS.",
  },
  {
    title: "Integration with the mechanical service scope.",
    body: "Because Gardner Air services both the controls and the HVAC equipment those controls govern, the diagnostic process is not limited by a boundary between controls contractors and mechanical contractors. A setpoint deviation causing chiller short-cycling, a sensor fault masking a coil problem, or a PID loop driving a pump to failure — Gardner Air identifies and corrects these conditions without a handoff.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are structured around a maintenance program, not individual service calls. That means your controls system's calibration history, setpoint records, and network configuration are documented and maintained over time — giving Gardner Air the trend data to identify developing problems before they produce a system failure.",
  },
];

const BRANDS = [
  "Johnson Controls Metasys",
  "Honeywell / Tridium Niagara",
  "Siemens Desigo",
  "Automated Logic",
  "Distech Controls",
  "KMC Controls",
  "ALC (Reliable Controls)",
  "Delta Controls",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function PrecisionControlsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(controlsServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                 */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="precision-controls-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/equipment/equipment-hero-bg.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35"
              aria-hidden="true"
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,45,51,0.72) 0%, rgba(42,45,51,0.60) 35%, rgba(42,45,51,0.85) 70%, rgba(42,45,51,0.98) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10" aria-hidden="true" />

          <div
            className="relative flex-1 flex flex-col justify-center w-full mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 z-10"
            style={{ paddingTop: "calc(100px + 5vh)", paddingBottom: "5vh" }}
          >
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white/40">
                <li>
                  <Link href="/" className="hover:text-white/70 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/equipment/" className="hover:text-white/70 transition-colors">
                    Equipment
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Precision Controls</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Equipment &middot; Heating &amp; Precision
            </p>

            <h1
              id="precision-controls-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial HVAC controls service,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">completed in full.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides preventative maintenance, diagnostics, and integration support for BACnet building automation systems, direct digital controls, Modbus and LonWorks integration, and cloud-connected controls platforms serving commercial facilities and multi-site campuses across Southern California.
            </p>

            <Link
              href="#precision-controls-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a BAS Controls Service Proposal
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative z-10" aria-label="Gardner Air credentials">
            <div
              className="border-t border-white/10"
              style={{ background: "rgba(42,45,51,0.85)", backdropFilter: "blur(12px)" }}
            >
              <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
                <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                  {TRUST_BADGES.map(({ Icon, text }, i) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded flex items-center justify-center bg-[#D42027]/15 flex-shrink-0">
                        <Icon size={14} className="text-[#D42027]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                        {text}
                      </span>
                      {i < TRUST_BADGES.length - 1 && (
                        <span className="hidden lg:block text-white/20 ml-2" aria-hidden="true">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Cert logo strip                                                      */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Gardner Air certifications and credentials"
          className="bg-white border-t border-[#E5E7EB] py-8 lg:py-10"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-7 text-center">
              Credentialed · Certified · Continuously Trained
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
              {CERT_LOGOS.map((cert) => (
                <div key={cert.src} className={`relative h-12 lg:h-14 ${cert.widthClass}`}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 25vw, 150px"
                    className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Intro                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="precision-controls-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="precision-controls-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  The Controls Layer Determines Whether Your System Runs to Design Intent
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    The controls layer is the intelligence that determines whether a commercial HVAC system operates efficiently, reliably, and within the setpoints a facility manager specified. A chiller plant or air handling system with degraded controls is not operating to its design intent — it is operating to whatever the sensors are currently reading and whatever the control logic last stored, which may be neither accurate nor current.
                  </p>
                  <p>
                    Gardner Air services the controls and building automation systems that govern commercial HVAC equipment across Riverside County, San Bernardino County, and Orange County. That spans BACnet DDC systems in corporate campuses and healthcare facilities, Modbus integration in industrial plants, legacy LonWorks networks in older institutional buildings, and cloud-connected platforms in multi-site commercial portfolios.
                  </p>
                  <p>
                    The common thread across all of them: controls problems are rarely self-announcing. Sensor drift, communication faults, and incorrect PID tuning degrade system performance gradually — until a regulatory inspection, an energy spike, or an equipment failure forces the issue.
                  </p>
                  <p>
                    For facilities managers, the <Link href="/building-automation/" className="text-[#D42027] underline underline-offset-2 hover:text-[#B01C22] transition-colors">building automation system</Link> is both the monitoring layer and the intervention point. Gardner Air&rsquo;s approach to controls service treats it as both — maintenance that verifies the system is reading accurately, and diagnostics that investigate what the data is revealing about the underlying equipment.
                  </p>
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF]">
                  Last Updated: August 2026
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div
                  className="relative rounded-2xl overflow-hidden border border-[#D8D4CC] bg-[#F7F6F3]"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <Image
                    src="/equipment/precision-controls-intro-detail.webp"
                    alt="Gardner Air technician inspecting a precision HVAC controls at a Southern California commercial facility."
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] px-6 py-5 flex items-center gap-5">
                  <p
                    className="tabular-nums font-bold text-[#D42027] leading-none flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    }}
                  >
                    3–5%
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Sensor drift that shifts setpoint
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Enough to fail regulatory tolerance in precision environments
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Controls System Types + Brands                                       */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="controls-types-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Equipment Coverage
                </p>
                <h2
                  id="controls-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Controls System Types We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {CONTROLS_TYPES.map((type, i) => (
                    <div
                      key={type.title}
                      className="grid grid-cols-[52px_1fr] gap-5 py-7 items-start"
                    >
                      <p
                        className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none pt-1"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3
                          className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "1.0625rem",
                          }}
                        >
                          {type.title}
                        </h3>
                        <p className="text-base text-[#6B7280] leading-relaxed">
                          {type.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Controls platforms Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Platforms We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians are trained and experienced on the major commercial building automation and controls platforms in service across Southern California. Platform knowledge matters: each BAS uses different programming tools, different diagnostic interfaces, and different network architecture conventions. Generic controls experience does not translate to accurate diagnostics on a specific platform.
                </p>

                <ul className="flex flex-col gap-3 mb-8" role="list">
                  {BRANDS.map((brand) => (
                    <li key={brand} className="flex items-center gap-3">
                      <Check
                        size={13}
                        className="shrink-0 text-[#D42027]"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-white/80 font-medium">{brand}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/55 text-xs leading-relaxed mb-4">
                    Operating a controls platform not listed above? Call with your platform, protocol, and current maintenance situation — Gardner Air services a wide range of commercial automation and DDC systems.
                  </p>
                  <a
                    href="tel:+19516964495"
                    className="group inline-flex items-center gap-3 h-12 pl-5 pr-4 rounded-full text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.5)] transition-all duration-200 min-h-[44px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    (951) 696-4495
                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Our Controls Services                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="controls-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Controls Services
              </p>
              <h2
                id="controls-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope Controls Service From Maintenance to System Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <Wrench size={18} className="text-[#D42027]" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-base text-[#6B7280] leading-relaxed flex-1">
                    {svc.body}
                  </p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42027] hover:text-[#B01C22] transition-colors group mt-auto"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule a controls assessment"
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
                Prevent Failures Before They Happen
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Schedule a Controls Assessment for Your Facility
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Gardner Air serves commercial and industrial facilities across Riverside County, San Bernardino County, and Orange County. If your building automation system is not delivering verified sensor accuracy, documented sequence testing, and network communication status after every maintenance visit, that is a gap worth correcting.
              </p>
              <Link
                href="#precision-controls-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a BAS Controls Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Issues                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="controls-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="controls-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common Controls Issues We Diagnose
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Root-cause diagnosis before any intervention. Gardner Air&rsquo;s technicians are trained to trace a fault across protocol boundaries — from a field sensor through a Modbus device to a BACnet controller to the supervisory BAS.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMON_ISSUES.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] p-6 flex flex-col gap-3 hover:border-[#D42027]/25 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#D42027]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle size={14} className="text-[#D42027]" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-bold text-[#111318] leading-snug pt-1"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "1rem",
                      }}
                    >
                      {issue.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {issue.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Outcome cards                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="controls-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="controls-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined Controls Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their controls systems on a disciplined preventative maintenance program operate their HVAC equipment to design intent, reduce energy waste from sensor drift and incorrect PID tuning, and eliminate the silent failure modes that degrade system performance without triggering alarms.
                </p>
                <p>
                  Facilities managers across Southern California retain Gardner Air not for emergencies, but to prevent them. That distinction defines the relationship from day one.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {OUTCOMES.map((o) => (
                <div
                  key={o.eyebrow}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <o.Icon size={18} className="text-[#D42027]" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">
                    {o.eyebrow}
                  </p>
                  <p
                    className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                    }}
                  >
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Why Choose Gardner Air                                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="why-choose-controls-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-choose-controls-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why Facilities Managers Choose Gardner Air for Controls Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your controls system&rsquo;s calibration history, setpoint records, and network configuration are documented and maintained over time — giving Gardner Air the trend data to identify developing problems before they produce a system failure.
                </p>

                <div className="mt-8">
                  <Link
                    href="#precision-controls-contact"
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Request a Service Proposal
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                {WHY_CHOOSE.map((item) => (
                  <div key={item.title} className="py-7 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#D42027]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check
                          size={11}
                          className="text-[#D42027]"
                          aria-hidden="true"
                          strokeWidth={3}
                        />
                      </div>
                      <h3
                        className="font-bold text-[#111318] leading-snug"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base text-[#6B7280] leading-relaxed pl-8">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ---- Cross-sell block ---- */}
        <section
          aria-labelledby="crosssell-controls-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/equipment/precision-controls-replacement.webp"
                    alt="Gardner Air commercial HVAC equipment replacement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    Full BAS Integration
                  </p>
                  <h2
                    id="crosssell-controls-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Ready for a Building Automation System Upgrade?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s building automation services — from legacy system migration to full BAS commissioning across multi-site commercial portfolios.
                  </p>
                  <div>
                    <Link
                      href="/building-automation/"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Explore Building Automation Services
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ                                                                  */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="controls-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="controls-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial HVAC Controls Service
            </h2>

            <div className="flex flex-col gap-3 mb-12 lg:mb-16">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>

            <div className="rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-[#D8D4CC]">
                <div className="p-8 lg:p-10">
                  <p
                    className="font-bold text-[#111318] mb-3 leading-tight"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)",
                    }}
                  >
                    Don&rsquo;t see your question?
                  </p>
                  <p className="text-base text-[#6B7280] leading-relaxed">
                    Controls service is specific to the platform, protocol, and the facility&rsquo;s integration requirements. If you have a question about scope, scheduling, or platform coverage, our team responds within one business day.
                  </p>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <a
                    href="tel:+19516964495"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors min-h-[44px] justify-center"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    Call (951) 696-4495
                  </a>
                  <a
                    href="mailto:service@gardnerci.com"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors min-h-[44px] justify-center"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Email Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact form                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="precision-controls-contact"
          aria-labelledby="precision-controls-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a BAS Controls Service Proposal"
                  subhead="Contact Gardner Air to discuss your controls environment and what a precision controls maintenance program should include."
                  submitLabel="Request a BAS Controls Service Proposal"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility and controls environment" },
                    { num: "02", body: "Our team schedules a site walkthrough and network audit" },
                    { num: "03", body: "You receive a written scope and maintenance proposal" },
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
                    alt="Gardner Air customer service representatives"
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

/* ------------------------------------------------------------------ */
/* FAQ Accordion Item                                                   */
/* ------------------------------------------------------------------ */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-[#E5E1D8] bg-white open:bg-[#FAF8F4] open:border-ga-red/30 hover:border-ga-red/25 open:shadow-[0_1px_3px_rgba(17,19,24,0.04)] transition-colors duration-200">
      <summary className="flex items-center justify-between gap-4 px-5 py-5 lg:px-6 lg:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3
          className="font-semibold text-ga-black text-base lg:text-lg leading-snug"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {question}
        </h3>
        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#F7F6F3] text-ga-gray-600 group-open:bg-ga-red group-open:text-white transition-colors duration-200">
          <ChevronDown
            size={18}
            className="transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>
      <p className="px-5 pb-5 lg:px-6 lg:pb-6 text-base text-ga-gray-600 leading-relaxed max-w-2xl">
        {answer}
      </p>
    </details>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CERTS = [
  {
    label: "Diamond Contractor",
    sub: "Elite Factory-Authorized Dealer",
    logo: "/diamond-contractor.webp",
    alt: "Diamond Contractor — Elite Factory-Authorized Dealer",
    widthClass: "w-40 lg:w-48",
  },
  {
    label: "EPA Certified",
    sub: "Environmental Protection Agency",
    logo: "/epa-logo.webp",
    alt: "EPA Certified — Environmental Protection Agency",
    widthClass: "w-20 lg:w-24",
  },
  {
    label: "NATE Certified",
    sub: "North American Technician Excellence",
    logo: "/nate-logo.webp",
    alt: "NATE Certified — North American Technician Excellence",
    widthClass: "w-20 lg:w-24",
  },
  {
    label: "NCI Certified",
    sub: "National Comfort Institute",
    logo: "/nci-logo.webp",
    alt: "NCI Certified — National Comfort Institute",
    widthClass: "w-36 lg:w-44",
  },
  {
    label: "York Authorized",
    sub: "Factory-Authorized Dealer",
    logo: "/york-logo.webp",
    alt: "York Authorized — Factory-Authorized Dealer",
    widthClass: "w-32 lg:w-40",
  },
];

export function CertificationsStrip() {
  return (
    <section
      id="certifications"
      aria-labelledby="certs-heading"
      className="bg-white py-16 lg:py-24 border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Two-column header — with editorial number anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 items-end mb-14 lg:mb-16">
          <div>
            <div className="flex items-baseline gap-4 mb-5">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600">
                Certifications
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ga-gray-600/60">
                / {CERTS.length.toString().padStart(2, "0")}
              </span>
            </div>
            <p
              className="tabular-nums font-bold text-ga-red leading-[0.85] mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
              }}
            >
              {CERTS.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="certs-heading"
              className="font-bold text-ga-black leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(1.875rem, 3.25vw, 2.75rem)",
              }}
            >
              Industry-recognized training and credentials.
            </h2>
          </div>
          <p className="text-ga-gray-600 text-base leading-relaxed max-w-md">
            Gardner Air is certified by the industry&rsquo;s most respected
            organizations — with continuous investment in factory training,
            refrigerant transition education, and current DOE regulation
            knowledge.
          </p>
        </div>

        {/* Logo row — gap-px hairlines via container bg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#D8D4CC] border-t border-b border-[#D8D4CC]">
          {CERTS.map((cert) => (
            <div
              key={cert.label}
              className="group flex flex-col items-center text-center bg-white px-6 py-10 lg:py-12"
            >
              {/* Logo — per-shape width so wordmarks and badges normalize visually */}
              <div className="h-20 lg:h-24 mb-6 flex items-center justify-center">
                <div className={`relative h-full ${cert.widthClass}`}>
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
                    className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>

              <p
                className="font-bold text-ga-black text-sm lg:text-base leading-tight mb-1.5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {cert.label}
              </p>
              <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-ga-gray-600 leading-snug">
                {cert.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Factory brand training band — text-only until logos are supplied */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 border-t border-b border-[#D8D4CC] py-8 lg:py-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red">
            Factory Trained
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {["Carrier", "York", "Samsung", "Mitsubishi", "Raypak"].map((brand) => (
              <p
                key={brand}
                className="font-bold text-ga-black text-sm lg:text-base leading-tight tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {brand}
              </p>
            ))}
          </div>
        </div>

        {/* Closing meta row — trust marker + CTA */}
        <div className="mt-8 lg:mt-10 pt-6 border-t border-[#D8D4CC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="block h-2 w-2 rounded-full bg-ga-red" aria-hidden="true" />
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600">
              Continuous training · Refrigerant transition · DOE regulations
            </p>
          </div>
          <Link
            href="/certifications"
            className="btn-arrow-slide inline-flex items-center gap-2 text-sm font-semibold text-ga-red self-start sm:self-auto"
          >
            Certifications &amp; compliance
            <ArrowRight size={15} className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}

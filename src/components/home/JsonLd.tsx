/**
 * JsonLd — Structured data for the homepage.
 *
 * Emits three linked JSON-LD blocks:
 *   1. HVACBusiness — primary LocalBusiness entity
 *   2. Organization — entity anchor for the Knowledge Graph
 *   3. WebSite — canonical site entity, links to the Organization
 *
 */

const ORG_ID = "https://gardnerair.com/#organization";
const SITE_ID = "https://gardnerair.com/#website";
const BUSINESS_ID = "https://gardnerair.com/#hvacbusiness";

// Coordinates sourced from the Gardner Air Google Business Profile pin.
const GEO = { latitude: 33.5795015, longitude: -117.1221113 };

export function JsonLd() {
  const hvacBusiness = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": BUSINESS_ID,
    "name": "Gardner Air",
    "description":
      "Gardner Air specializes in commercial HVAC preventative maintenance across Southern California. Complete-scope service visits, factory-trained technicians, long-term partnerships with facilities managers.",
    "url": "https://gardnerair.com",
    "logo": "https://gardnerair.com/gardnerairlogo.webp",
    "image": "https://gardnerair.com/og-image.jpg",
    "telephone": "+19516964495",
    "email": "service@gardnerci.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30714 Wealth St",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "postalCode": "92563",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GEO.latitude,
      "longitude": GEO.longitude,
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Riverside County" },
      { "@type": "AdministrativeArea", "name": "San Bernardino County" },
      { "@type": "AdministrativeArea", "name": "Orange County" },
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "California Contractors License #871464 — B (General Building), C20 (HVAC), C4 (Boiler)" },
      { "@type": "EducationalOccupationalCredential", "name": "NATE Certified Technicians" },
      { "@type": "EducationalOccupationalCredential", "name": "NCI Certified" },
    ],
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "16:00",
      },
    ],
    "parentOrganization": { "@id": ORG_ID },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial HVAC Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Preventative Maintenance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial HVAC Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Equipment Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial HVAC Installation" } },
      ],
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    "name": "Gardner Air",
    "url": "https://gardnerair.com",
    "logo": "https://gardnerair.com/gardnerairlogo.webp",
    "telephone": "+19516964495",
    "email": "service@gardnerci.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30714 Wealth St",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "postalCode": "92563",
      "addressCountry": "US",
    },
    "sameAs": [
      "https://www.google.com/maps/place/Gardner+Air/@33.5795015,-117.1221113,17z/data=!3m1!4b1!4m6!3m5!1s0x80db7dd3dc307def:0xe4651dd6deb40ae6!8m2!3d33.5795015!4d-117.1221113!16s%2Fg%2F1td_5gqs",
      "https://www.facebook.com/profile.php?id=100064700769749",
      "https://www.linkedin.com/company/gardner-air/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    "url": "https://gardnerair.com",
    "name": "Gardner Air",
    "publisher": { "@id": ORG_ID },
    "inLanguage": "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hvacBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

/**
 * JsonLd — LocalBusiness (HVACBusiness) structured data for the homepage.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Gardner Air",
    "description":
      "Gardner Air specializes in commercial HVAC preventative maintenance across Southern California. Complete-scope service visits, factory-trained technicians, long-term partnerships with facilities managers.",
    "url": "https://gardnerair.com", // TODO: confirm live domain
    "logo": "https://gardnerair.com/gardnerairlogo.webp", // TODO: confirm domain
    "image": "https://gardnerair.com/og-image.webp", // TODO: real OG image
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial HVAC Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Preventative Maintenance",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial HVAC Repair",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Replacement",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial HVAC Installation",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

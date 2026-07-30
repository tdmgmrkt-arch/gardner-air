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
    "telephone": "+1-951-696-4495",
    "email": "service@gardnerci.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30714 Wealth St",
      "addressLocality": "Murrieta",
      "addressRegion": "CA",
      "postalCode": "92563",
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "State",
      "name": "Southern California",
    },
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      // TODO: confirm actual business hours
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "{{TBD}}",
        "closes": "{{TBD}}",
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

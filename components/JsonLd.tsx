export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zara",
    jobTitle: "Presentation Designer & Pitch Deck Specialist",
    description:
      "Professional presentation designer with 6+ years of experience crafting pitch decks, corporate presentations, and brand identities.",
    url: "https://zaradesigns.com",
    sameAs: ["https://www.fiverr.com/ppt_world"],
    knowsAbout: [
      "Presentation Design",
      "Pitch Deck Design",
      "Brand Identity",
      "Infographic Design",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "PowerPoint",
      "Google Slides",
      "Figma",
      "Canva",
    ],
    knowsLanguage: ["English", "German", "French"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Presentation Design",
    provider: {
      "@type": "Person",
      name: "Zara",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pitch Deck Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Presentations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infographic Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design Consultation" } },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

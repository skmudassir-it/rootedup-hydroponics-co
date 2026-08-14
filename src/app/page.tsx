import type { Metadata } from "next";
import {
  HeroSection,
  FeatureGrid,
  StatsStrip,
  ServicesGrid,
  TestimonialsSlider,
  FaqSection,
  CtaBand,
} from "@/components/blocks";
import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "RootedUp Hydroponics Co. | Hydroponics Consulting & System Design",
  description:
    "Independent hydroponics consultants for system design & setup, nutrient and pH management, greenhouse hydroponics, vertical farming, crop troubleshooting, automation, and team training. Grow more from the same square footage.",
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Hydroponics consulting — system design & setup, nutrient and pH management, greenhouse hydroponics, vertical farming systems, crop consulting & troubleshooting, automation & grow lighting, and training & workshops.",
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.split(",")[0],
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80216",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
  priceRange: "$$",
  image: `${SITE_URL}/images/og.jpg`,
  sameAs: [
    "https://www.linkedin.com/company/rootedup-hydroponics-co",
    "https://www.facebook.com/rooteduphydro",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection
        eyebrow="Independent Hydroponics Consulting"
        title={
          <>
            Grow more from the same space, <span className="text-gradient">without the guesswork</span>
          </>
        }
        sub="We design hydroponic systems, tune nutrient and pH programs, and troubleshoot crops for growers of every size — so your plants get exactly what they need, every day."
        image="/images/hero.jpg"
        imageAlt="Indoor hydroponic farm with leafy green crops on clean white grow racks under soft LED glow"
      />
      <FeatureGrid />
      <StatsStrip />
      <ServicesGrid limit={6} />
      <TestimonialsSlider />
      <FaqSection />
      <CtaBand />
    </>
  );
}

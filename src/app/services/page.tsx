import type { Metadata } from "next";
import { PageHero, ServicesGrid, CtaBand, FadeIn } from "@/components/blocks";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hydroponics Consulting Services",
  description:
    "Seven focused hydroponics consulting services: system design & setup, nutrient & pH management, greenhouse hydroponics, vertical farming systems, crop consulting & troubleshooting, automation & grow lighting, and training & workshops.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Hydroponics consulting, done properly"
        text={`From your first system sketch to your hundredth harvest, our consultants cover ${SERVICES.length} service lines — each scoped clearly and priced transparently.`}
      />
      <ServicesGrid />
      <FadeIn className="mx-auto max-w-3xl px-4 pb-10 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Not sure which service fits your grow? Book a free consultation and we’ll point you to
          the right path — even if that path isn’t with us.
        </p>
      </FadeIn>
      <CtaBand />
    </>
  );
}

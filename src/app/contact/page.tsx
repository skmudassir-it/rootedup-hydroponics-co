import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, FadeIn } from "@/components/blocks";
import { QuoteForm, ContactInfo } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free hydroponics consultation with RootedUp Hydroponics Co. No obligation — just a clear conversation about your grow goals.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s get your grow growing"
        text="Tell us a little about your space, your crops, and your goals — we’ll get back to you within one business day, usually much sooner. The first consultation is always free."
      />
      <section className="px-4 pb-10 pt-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="glass-deep rounded-3xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Request a free quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Takes about 60 seconds. We’ll never share your information.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </FadeIn>
          <div className="space-y-6 lg:col-span-2">
            <FadeIn delay={0.1}>
              <div className="glass-deep overflow-hidden rounded-3xl p-2.5">
                <Image
                  src="/images/contact.jpg"
                  alt="RootedUp hydroponics consultant at a clean white desk with seedling trays and LED grow lights"
                  width={800}
                  height={450}
                  className="aspect-video w-full rounded-2xl object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <ContactInfo />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

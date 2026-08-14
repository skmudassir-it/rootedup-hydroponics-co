import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, StatsStrip, CtaBand, FadeIn, SectionHeading } from "@/components/blocks";
import { Leaf, Droplets, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RootedUp Hydroponics Co. is an independent hydroponics consulting firm. Learn about our mission, our team, and how we help growers put down roots.",
};

const VALUES = [
  {
    icon: Leaf,
    title: "Crop-first consulting",
    text: "We design around the crops you grow and the goals you have — not a catalog of what we happen to sell. There's no hardware agenda here.",
  },
  {
    icon: Droplets,
    title: "Science over guesswork",
    text: "Every recommendation comes from measurements: EC, pH, VPD, light, water chemistry. If we don’t have the number, we test before we advise.",
  },
  {
    icon: Users,
    title: "Grower-side always",
    text: "We're independent consultants, not equipment dealers. We work for you — and we’ll tell you when you don’t need us at all.",
  },
  {
    icon: Award,
    title: "Accountability to harvest",
    text: "Our job isn’t done at the design review — it’s done when your first crop comes in healthy and on schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RootedUp"
        title="We built the grow support we wished we’d had"
        text="RootedUp Hydroponics Co. was founded by commercial growers and system engineers who got tired of watching good crops fail from bad design and guesswork nutrition. We left the vendor side to work for the only side that matters: yours."
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="glass-deep overflow-hidden rounded-3xl p-2.5">
              <Image
                src="/images/about.jpg"
                alt="RootedUp consultants walking through a greenhouse with a commercial grower"
                width={800}
                height={450}
                className="aspect-video w-full rounded-2xl object-cover"
              />
            </div>
          </FadeIn>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="From the grow room floor to your side"
            />
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Between us, our consultants have designed, built, or managed more than 120
                  hydroponic systems — from shipping-container farms to multi-acre greenhouses.
                  We know where systems fail, where nutrient programs drift, and how to build
                  operations that run themselves.
                </p>
                <p>
                  Today we do one thing: stand between you and the variables. We design systems,
                  tune nutrition, automate the routine, and train your team — until your grow runs
                  as well as we’d run it ourselves.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our values" title="What we hold ourselves to" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="glass-card h-full p-7">
                  <span className="icon-badge">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="The team"
              title="Consultants, not call centers"
            />
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Every RootedUp client is paired with one named consultant who knows your
                  facility, your water, and your crops. You’ll never re-explain your situation to
                  a stranger or wait on a ticket queue.
                </p>
                <p>
                  Our team spans system engineers, plant scientists, and former commercial
                  growers — so whether you’re troubleshooting a pH swing or planning a 10,000-foot
                  vertical buildout, there’s an expert on it.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div className="glass-deep overflow-hidden rounded-3xl p-2.5">
              <Image
                src="/images/contact.jpg"
                alt="RootedUp consultant at a clean white desk with seedling trays"
                width={800}
                height={450}
                className="aspect-video w-full rounded-2xl object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <StatsStrip />
      <CtaBand />
    </>
  );
}

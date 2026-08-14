import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero, FaqSection, CtaBand, FadeIn } from "@/components/blocks";
import { PRICING, FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, fixed-fee hydroponics consulting: $0 first consultation, $2,900 flat-fee design & setup, and $490/month ongoing crop care. No long-term contracts.",
};

const PRICE_FAQS = [
  {
    q: "When do I pay the design fee?",
    a: "You pay when you decide to move forward with us — never before your first free consultation. The fee is disclosed in writing up front, and it is refunded in full if you cancel before we begin work.",
  },
  {
    q: "Do you make money from equipment or nutrients?",
    a: "No. We are independent consultants, not equipment dealers — we don’t take commissions or kickbacks from any manufacturer. Our income is the consulting fee you see on this page, which is why our recommendations stay genuinely neutral.",
  },
  {
    q: "What if I already have a system?",
    a: "Great — we’ll work with what you have. We can audit your existing setup, tune your nutrient program, or troubleshoot a problem without replacing anything. Many clients hire us to fix, not to rebuild.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed fees. No surprises."
        text="Consulting should be priced like a professional service — clearly. One transparent fee, disclosed in writing before we start, with the first consultation always free."
      />
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  p.highlight
                    ? "border-2 border-primary/30 bg-gradient-to-b from-primary/10 to-white/70 backdrop-blur-xl shadow-xl shadow-primary/10"
                    : "glass-card"
                )}
              >
                {p.highlight ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#241a04]">
                    Most popular
                  </span>
                ) : null}
                <h2 className="font-heading text-lg font-bold text-foreground">{p.name}</h2>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-extrabold text-primary">{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.period}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 w-full",
                    p.highlight ? "btn-primary" : "btn-ghost"
                  )}
                >
                  {p.cta} <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Consulting fees cover design, analysis, and on-site or remote support only. Equipment,
            nutrients, and third-party services are quoted separately at cost. We do not receive
            commissions from any manufacturer.
          </p>
        </FadeIn>
      </section>
      <FaqSection items={[...PRICE_FAQS, ...FAQS.slice(3, 6)]} />
      <CtaBand />
    </>
  );
}

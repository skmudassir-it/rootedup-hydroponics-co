import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, CtaBand, FadeIn, SectionHeading } from "@/components/blocks";
import { PROJECTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real RootedUp engagements: a warehouse vertical farm buildout, a winter-proofed greenhouse retrofit, and a nutrient automation rollout — with the numbers that mattered.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real grows, real numbers"
        text="A few of the engagements we’re proudest of — with the outcomes, in yield and dollars, that mattered to the growers involved."
      />
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl space-y-10">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <article className="glass-card grid overflow-hidden lg:grid-cols-5">
                <div className="relative aspect-video lg:col-span-2 lg:aspect-auto">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.client}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:col-span-3">
                  <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#96601c]">
                    {p.category}
                  </span>
                  <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">{p.title}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{p.client}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.summary}</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-primary/10 bg-primary/5 p-4 text-center">
                        <p className="font-heading text-xl font-extrabold text-primary">{m.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 rounded-xl border border-primary/10 bg-white/60 p-4 text-sm leading-relaxed text-foreground/85">
                    <span className="font-bold text-primary">Outcome: </span>
                    {p.outcome}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Your turn"
            title="Let’s write your case study"
            text="Every engagement starts the same way: a free conversation about your goals. The numbers come after."
          />
          <FadeIn delay={0.1} className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

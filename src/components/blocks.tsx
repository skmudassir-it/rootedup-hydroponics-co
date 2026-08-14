"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FEATURES, STATS, SERVICES, TESTIMONIALS, FAQS, CONTACT, SITE_NAME } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <FadeIn className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#96601c]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p> : null}
    </FadeIn>
  );
}

export function HeroSection({
  eyebrow,
  title,
  sub,
  image,
  imageAlt,
  primary = { href: "/contact", label: "Get a Free Consultation" },
  secondary = { href: "/services", label: "Explore Services" },
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  image: string;
  imageAlt: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-36">
      <div className="blob blob-primary -top-24 -left-24 size-105" />
      <div className="blob blob-accent top-10 right-[-8rem] size-120" />
      <div className="blob blob-primary bottom-[-10rem] left-1/3 size-96 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
              <i className="fa-solid fa-circle-check text-accent" aria-hidden="true" />
              {eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{sub}</p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={primary.href} className="btn-primary">
                {primary.label} <ArrowRight className="size-4" />
              </Link>
              <Link href={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Star className="size-4 fill-accent text-accent" /> 4.9/5 client rating
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> 97% crop success rate
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" /> 120+ systems designed
              </span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.15} className="relative">
          <div className="glass-deep relative overflow-hidden rounded-3xl p-2.5">
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={675}
              priority
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <div className="glass absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl px-5 py-4">
              <div>
                <p className="font-heading text-sm font-bold text-primary">Harvest-ready in as little as 6 weeks</p>
                <p className="text-xs text-muted-foreground">Leafy greens & herbs · with our crop programs</p>
              </div>
              <Link href="/pricing" className="btn-ghost !min-h-10 !px-4 !py-2 text-xs">
                See plans
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why RootedUp"
          title={<>The science of growing, <span className="text-gradient">on your side</span></>}
          text="We are independent hydroponics consultants with a single job: make sure the system you run is the right one — designed properly, fed precisely, and explained clearly."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="glass-card h-full p-7">
                <span className="icon-badge">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="glass-deep grid grid-cols-2 gap-8 rounded-3xl px-8 py-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="relative px-4 py-20">
      <div className="blob blob-primary top-20 right-[-6rem] size-96 opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Hydroponics consulting for <span className="text-gradient">every stage</span> of your grow</>}
          text="From your first system sketch to your hundredth harvest — seven focused service lines, one root system."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <Link href={`/services/${s.slug}`} className="glass-card group block h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="icon-badge absolute bottom-3 left-3 !bg-white/85 backdrop-blur">
                    <s.icon className="size-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        {limit ? (
          <FadeIn className="mt-12 text-center">
            <Link href="/services" className="btn-ghost">
              View all services <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}

export function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative px-4 py-20">
      <div className="blob blob-accent left-[-6rem] top-10 size-96 opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Stories"
          title={<>Growers we’ve helped <span className="text-gradient">put down roots</span></>}
        />
        <FadeIn delay={0.1}>
          <div className="relative mt-12">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="embla__slide">
                    <figure className="glass-card flex h-full flex-col p-7">
                      <Quote className="size-8 text-accent/70" />
                      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-5">
                        <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#0f9a77] font-heading text-sm font-bold text-white">
                          {t.name.charAt(0)}
                        </span>
                        <span>
                          <span className="block font-heading text-sm font-bold text-foreground">{t.name}</span>
                          <span className="block text-xs text-muted-foreground">{t.role}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="embla__dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn("embla__dot", selected === i && "embla__dot--selected")}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-white/70 text-primary transition hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-white/70 text-primary transition hover:bg-primary hover:text-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function FaqSection({ items = FAQS }: { items?: typeof FAQS }) {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered clearly</span></>}
        />
        <FadeIn delay={0.1}>
          <Accordion className="mt-12 gap-3" defaultValue={["faq-0"]}>
            {items.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="glass-card !rounded-xl !border !px-6 !py-1">
                <AccordionTrigger className="!py-4 text-left font-heading text-[15px] font-bold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

export function CtaBand({ image = "/images/cta.jpg" }: { image?: string }) {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#0b4f48] to-[#0a3f39] px-8 py-16 sm:px-14">
        <div className="blob blob-accent -top-20 right-0 size-96 opacity-40" />
        <div className="blob blob-primary -bottom-24 left-0 size-80 opacity-60" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur">
                <i className="fa-solid fa-bolt" aria-hidden="true" /> No obligation
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Ready to grow more from the same square footage?
              </h2>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                Book a free 60-minute consultation. We’ll review your space and water, and show you
                exactly what a hydroponic system — or a fix to your current one — can do for you.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-bold text-[#241a04] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Book My Free Consultation <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <i className="fa-solid fa-phone" aria-hidden="true" /> {CONTACT.phone}
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="relative hidden lg:block">
            <div className="glass overflow-hidden rounded-3xl border-white/30 bg-white/15 p-2.5 backdrop-blur-xl">
              <Image
                src={image}
                alt="Healthy leafy greens growing under hydroponic LED lights"
                width={800}
                height={450}
                className="aspect-video w-full rounded-2xl object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-36 text-center sm:pt-40">
      <div className="blob blob-primary -top-20 left-1/4 size-105" />
      <div className="blob blob-accent top-0 right-[10%] size-80 opacity-70" />
      <div className="relative mx-auto max-w-3xl">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
            {eyebrow}
          </span>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-5 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">{title}</h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        </FadeIn>
      </div>
    </section>
  );
}

export function SiteName() {
  return SITE_NAME;
}

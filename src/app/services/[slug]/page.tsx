import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, SectionHeading, CtaBand } from "@/components/blocks";
import { SERVICES } from "@/lib/data";
import { SITE_URL } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.short,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | RootedUp Hydroponics Co.`,
      description: service.short,
      images: [{ url: service.image, width: 800, height: 450 }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-36">
        <div className="blob blob-primary -top-24 -left-24 size-105" />
        <div className="blob blob-accent top-24 right-[-6rem] size-96 opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
                <Icon className="size-4" /> Service
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                {service.name}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.description}</p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote <ArrowRight className="size-4" />
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  See Pricing
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="glass-deep overflow-hidden rounded-3xl p-2.5">
              <Image
                src={service.image}
                alt={service.name}
                width={800}
                height={450}
                priority
                className="aspect-video w-full rounded-2xl object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="What's included"
              title={`How we help with ${service.name.toLowerCase()}`}
            />
            <FadeIn delay={0.1}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.features.map((f, i) => (
                  <div key={f} className="glass-card flex items-start gap-3 p-5" style={{ animationDelay: `${i * 60}ms` }}>
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground/90">{f}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <aside className="glass-card sticky top-28 p-7">
              <h2 className="font-heading text-lg font-bold text-foreground">Next steps</h2>
              <ol className="mt-5 space-y-4">
                {[
                  "Book a free 60-minute consultation",
                  "We review your space, water, and goals",
                  "You receive a clear, data-backed recommendation",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="btn-primary mt-7 w-full">
                Start Now <ArrowRight className="size-4" />
              </Link>
            </aside>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Related" title="More ways we can help" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 0.08}>
                <Link href={`/services/${r.slug}`} className="glass-card group block h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-base font-bold text-foreground">{r.name}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONTACT, SERVICES, SITE_NAME } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} home`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#0f9a77] text-white shadow-md shadow-primary/25">
        <i className="fa-solid fa-seedling text-sm" aria-hidden="true" />
      </span>
      <span className={cn("font-heading text-lg font-bold tracking-tight", light ? "text-white" : "text-primary")}>
        RootedUp
        <span className="text-accent">.</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border py-2.5 pl-5 pr-2.5 transition-all duration-300",
          scrolled
            ? "glass-deep border-white/70"
            : "border-white/50 bg-white/55 backdrop-blur-xl"
        )}
      >
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-primary/8 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Free Consultation
            <ArrowRight className="size-4" />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition hover:bg-white lg:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l border-white/60 bg-white/85 backdrop-blur-2xl">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-lg text-primary">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1 px-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="min-h-11 rounded-xl px-4 py-3 text-base font-medium text-foreground/85 transition hover:bg-primary/8 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
                  Free Consultation <ArrowRight className="size-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-8">
      <div className="mx-auto max-w-6xl rounded-3xl glass-deep px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hydroponic systems designed around your space, your crops, and your goals. We grow
              with you — from first blueprint to harvest day.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                ["facebook-f", "Facebook"],
                ["linkedin-in", "LinkedIn"],
                ["x-twitter", "X (Twitter)"],
                ["instagram", "Instagram"],
              ].map(([icon, label]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition hover:bg-primary hover:text-white"
                >
                  <i className={`fa-brands fa-${icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.filter((n) => n.href !== "/").map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-muted-foreground transition hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-muted-foreground transition hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`} className="transition hover:text-primary">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a href={`mailto:${CONTACT.email}`} className="transition hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground/80">{CONTACT.hours}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME} All rights reserved.</p>
          <p>Hydroponics consulting · System design · Crop management</p>
        </div>
      </div>
    </footer>
  );
}

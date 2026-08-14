import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-24">
      <div className="blob blob-primary -top-20 left-1/4 size-105" />
      <div className="blob blob-accent bottom-0 right-[10%] size-80 opacity-60" />
      <div className="glass-deep relative mx-auto max-w-xl rounded-3xl p-12 text-center">
        <p className="font-heading text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back to greener
          pastures — your next harvest is still waiting.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="size-4" /> Back Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES, CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().optional(),
});

type QuoteInput = z.infer<typeof quoteSchema>;

const inputClass =
  "h-11 w-full rounded-xl border border-primary/15 bg-white/70 px-4 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur transition focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: QuoteInput) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Request received!", {
          description: "A RootedUp consultant will reach out within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: data.message ?? "Please try again in a moment.",
        });
      }
    } catch {
      toast.error("Network error", { description: "Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-name" className="text-sm font-medium text-foreground">
            Full name
          </Label>
          <Input id="qf-name" placeholder="Jane Smith" className={inputClass} {...register("name")} />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-email" className="text-sm font-medium text-foreground">
            Email
          </Label>
          <Input id="qf-email" type="email" placeholder="jane@email.com" className={inputClass} {...register("email")} />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div className="space-y-1.5">
          <Label htmlFor="qf-phone" className="text-sm font-medium text-foreground">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="qf-phone" type="tel" placeholder="(555) 000-0000" className={inputClass} {...register("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qf-service" className="text-sm font-medium text-foreground">
            Service
          </Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value || null} onValueChange={(v) => field.onChange(v ?? "")}>
                <SelectTrigger id="qf-service" className={cn(inputClass, "w-full")}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-xl">
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.service ? <p className="text-xs text-destructive">{errors.service.message}</p> : null}
        </div>
      </div>
      {!compact ? (
        <div className="space-y-1.5">
          <Label htmlFor="qf-msg" className="text-sm font-medium text-foreground">
            Tell us about your grow <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="qf-msg"
            rows={4}
            placeholder="Space, crops, current setup, timeline…"
            className="w-full rounded-xl border border-primary/15 bg-white/70 px-4 py-3 text-sm backdrop-blur transition focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none"
            {...register("message")}
          />
        </div>
      ) : null}
      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Get My Free Quote
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        No obligation · Your information is never sold.
      </p>
    </form>
  );
}

export function ContactInfo() {
  const rows = [
    { icon: Phone, label: "Call us", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^0-9]/g, "")}` },
    { icon: Mail, label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Visit", value: CONTACT.address },
    { icon: Clock, label: "Hours", value: CONTACT.hours },
  ];
  return (
    <div className="space-y-4">
      {rows.map((r) => (
        <div key={r.label} className="glass-card flex items-start gap-4 p-5">
          <span className="icon-badge-accent shrink-0">
            <r.icon className="size-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{r.label}</p>
            {r.href ? (
              <a href={r.href} className="mt-1 block font-heading text-[15px] font-bold text-foreground hover:text-primary">
                {r.value}
              </a>
            ) : (
              <p className="mt-1 text-[15px] font-medium text-foreground">{r.value}</p>
            )}
          </div>
        </div>
      ))}
      <div className="glass-card p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Prefer a face-to-face meeting? We consult in person at our Denver office, on your farm, or
          over secure video — whichever is easier for you.
        </p>
      </div>
    </div>
  );
}

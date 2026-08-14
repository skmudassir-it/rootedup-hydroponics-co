import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar, Footer } from "@/components/chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["500", "600", "700", "800"], display: "swap" });

export const SITE_URL = "https://rootedup-hydroponics-co.amsitservices.com";
export const SITE_NAME = "RootedUp Hydroponics Co.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RootedUp Hydroponics Co. | Hydroponics Consulting & System Design",
    template: "%s | RootedUp Hydroponics Co.",
  },
  description:
    "RootedUp Hydroponics Co. — trusted hydroponics consulting. System design & setup, nutrient and pH management, greenhouse hydroponics, vertical farming, crop troubleshooting, automation & grow lighting, and team training.",
  keywords: [
    "hydroponics consultant",
    "hydroponics consulting",
    "hydroponic system design",
    "nutrient and pH management",
    "greenhouse hydroponics",
    "vertical farming systems",
    "crop troubleshooting",
    "grow lighting",
    "hydroponic automation",
    "hydroponics training",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "RootedUp Hydroponics Co. | Hydroponics Consulting & System Design",
    description:
      "Hydroponic systems designed around your space, your crops, and your goals — from design and setup to nutrient programs, automation, and team training.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 675, alt: "RootedUp Hydroponics Co." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RootedUp Hydroponics Co. | Hydroponics Consulting & System Design",
    description:
      "Hydroponic systems designed around your space, your crops, and your goals.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}

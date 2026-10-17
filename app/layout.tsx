/**
 * Root shell: Manrope typography, light-first theme, global atmosphere,
 * cursor, startup loader, navigation, and Lenis. Keep Lenis mounted.
 */
import type { Metadata, Viewport } from "next";
import { Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StudioBackground } from "@/components/StudioBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroLoader } from "@/components/IntroLoader";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adsince2k4.vercel.app"),
  title: "Abhilash Dash | Full-Stack Engineering, AI Agents & Automation",
  description:
    "Abhilash Dash builds full-stack products, AI agents, and business automations for founders and teams.",
  openGraph: {
    type: "website",
    url: "https://adsince2k4.vercel.app",
    siteName: "ADSince2K4 · Abhilash Dash",
    title: "Abhilash Dash | Full-Stack Engineering, AI Agents & Automation",
    description: "Full-stack products, AI agents, and business automations built around real problems.",
    images: [{ url: "/dp.webp", alt: "ADSince2K4 — Abhilash Dash" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhilash Dash | Full-Stack Engineering, AI Agents & Automation",
    description: "Full-stack products, AI agents, and business automations built around real problems.",
    images: ["/dp.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F8F4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.variable + " " + dancingScript.variable + " antialiased bg-background text-foreground"}>
        <ThemeProvider>
          <StudioBackground />
          <CustomCursor />
          <IntroLoader />
          <SmoothScrolling>
            <Navbar />
            <main className="relative z-10 min-h-screen">{children}</main>
            <Footer />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}

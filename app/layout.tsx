/**
 * Root application shell: global fonts, metadata, styles, navigation, scroll
 * behavior, and footer. Related files: app/globals.css defines theme tokens;
 * components/Navbar.tsx and components/Footer.tsx wrap every page.
 */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Engineer & AI Automation",
  description:
    "Selected software projects and experiments in full-stack engineering, AI agents, and business automation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrolling>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

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
  title: "Abhilash Dash | Full-Stack Engineering, AI Agents & Automation",
  description:
    "I build full-stack products, AI agents, and business automations that turn complex ideas into useful systems.",
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

import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShieldHER — Modern Community Safety Layer for Women",
  description:
    "Your people, your journey, and help nearby — connected when you need them. ShieldHER connects friends, family, verified responders, and safer routes into one empowered safety network.",
  keywords: [
    "women safety",
    "community safety layer",
    "guardian mode",
    "safe routes",
    "safety circle",
    "verified responders",
  ],
  authors: [{ name: "ShieldHER Creative Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-cream-50 text-charcoal-900 antialiased min-h-screen selection:bg-blush-200 selection:text-plum-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

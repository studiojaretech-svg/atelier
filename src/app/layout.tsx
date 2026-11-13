import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// Primary display font configuration (Futura geometric equivalent)
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Secondary editorial serif font configuration
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATELIER FORM — Contemporary Architectural Furniture",
  description:
    "Sculptural permanence crafted for contemporary architectural interiors. Bespoke editions in Paris & Milan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="bg-[#233126] text-[#D8D0C2] antialiased selection:bg-[#4A1A23] selection:text-[#D8D0C2] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

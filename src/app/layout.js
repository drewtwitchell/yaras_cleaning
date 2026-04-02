import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yarascleaning.vercel.app"),
  title: "Yara's Cleaning | Licensed & Insured Home Cleaning | Greater Boston & Southern NH",
  description:
    "Professional, licensed and insured cleaning for homes, apartments, and businesses in Greater Boston and Southern New Hampshire. Weekly, monthly, deep cleans, and move-in/move-out. Call (508) 735-4579 for a free estimate.",
  keywords: [
    "house cleaning Boston",
    "home cleaning Greater Boston",
    "cleaning service Southern NH",
    "house cleaning Hudson NH",
    "house cleaning Salem NH",
    "house cleaning Nashua NH",
    "licensed cleaning service",
    "insured cleaning",
    "deep cleaning Boston",
    "move in cleaning",
    "move out cleaning",
    "office cleaning Boston",
    "apartment cleaning Boston",
  ],
  openGraph: {
    title: "Yara's Cleaning | Licensed & Insured Home Cleaning",
    description: "Professional cleaning for homes, apartments, and businesses in Greater Boston & Southern NH. Call (508) 735-4579 for a free estimate.",
    type: "website",
    locale: "en_US",
    url: "https://yarascleaning.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Yara's Cleaning - Licensed & Insured Home Cleaning" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yara's Cleaning | Licensed & Insured Home Cleaning",
  description:
    "Professional, licensed and insured home cleaning services. Weekly and monthly plans available. Contact Yara today for a free in-home estimate.",
  keywords: [
    "house cleaning",
    "home cleaning",
    "licensed cleaning service",
    "insured cleaning",
    "weekly cleaning",
    "monthly cleaning",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

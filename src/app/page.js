"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE_NUMBER = "(555) 123-4567";
const PHONE_HREF = "tel:+15551234567";

function SparkleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function HomeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ClipboardIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-light/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <SparkleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-primary-dark">
              Yara&apos;s{" "}
              <span className="text-accent">Cleaning</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground/70 hover:text-primary font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/70 hover:text-primary font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-yaras"
              className="text-foreground/70 hover:text-primary font-medium transition-colors"
            >
              Why Yara&apos;s
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="text-foreground/70 hover:text-primary font-medium py-2 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-foreground/70 hover:text-primary font-medium py-2 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-yaras"
              onClick={() => setMenuOpen(false)}
              className="text-foreground/70 hover:text-primary font-medium py-2 transition-colors"
            >
              Why Yara&apos;s
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 via-white to-warm-light/30" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-warm/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-4 py-2 rounded-full text-sm font-semibold mb-6 sm:mb-8">
            <ShieldIcon className="w-4 h-4" />
            Fully Licensed & Insured
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            A Cleaner Home,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              A Happier You
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Professional home cleaning you can trust. Yara personally inspects
            every job to deliver a spotless home — on your schedule, at a fair
            price.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <PhoneIcon className="w-5 h-5" />
              Call for a Free Estimate
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-lg font-bold border-2 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>

          {/* Phone number display */}
          <p className="mt-6 text-foreground/50 text-sm">
            Or call directly:{" "}
            <a
              href={PHONE_HREF}
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Weekly Cleaning",
      description:
        "Keep your home consistently fresh with regular weekly visits. Perfect for busy families and professionals who want a spotless home every week.",
      icon: CalendarIcon,
      features: [
        "Dusting & vacuuming all rooms",
        "Kitchen & bathroom deep clean",
        "Floor mopping & surface wipe-down",
        "Trash removal & tidying",
      ],
    },
    {
      title: "Monthly Cleaning",
      description:
        "A thorough monthly refresh to maintain your home's cleanliness. Great for those who need a regular deep clean without the weekly commitment.",
      icon: HomeIcon,
      features: [
        "Full deep clean of all rooms",
        "Baseboard & fixture cleaning",
        "Inside appliance wipe-down",
        "Window sill & detail work",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Cleaning Plans That{" "}
            <span className="text-primary">Fit Your Life</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-lg max-w-2xl mx-auto">
            Choose the schedule that works for you. Every plan starts with a
            free in-home estimate so we can tailor the service to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-accent-light/30"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Get Your Free Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Give Yara a Call",
      description:
        "Reach out by phone to discuss your cleaning needs. Yara will ask about your home and schedule preferences.",
      icon: PhoneIcon,
    },
    {
      number: "2",
      title: "Free In-Home Estimate",
      description:
        "Yara will visit your home to assess the scope of work and provide a transparent, fair price — no surprises.",
      icon: ClipboardIcon,
    },
    {
      number: "3",
      title: "Enjoy a Sparkling Home",
      description:
        "Sit back and relax while Yara transforms your space. Consistent quality, every single visit.",
      icon: SparkleIcon,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Getting Started Is{" "}
            <span className="text-primary">Easy</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-lg max-w-2xl mx-auto">
            Three simple steps to a cleaner, happier home.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Step number circle */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg">
                <step.icon className="w-8 h-8 text-white" />
                <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-warm text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyYaras() {
  const reasons = [
    {
      icon: ShieldIcon,
      title: "Fully Licensed & Insured",
      description:
        "Your home is protected. Yara's Cleaning carries full liability insurance and all required business licenses for your complete peace of mind.",
    },
    {
      icon: SparkleIcon,
      title: "Personal Touch",
      description:
        "Yara personally oversees every clean. No anonymous crews or revolving staff — just consistent, reliable service from someone who cares.",
    },
    {
      icon: CheckCircleIcon,
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges. Every job starts with a free in-home estimate so you know exactly what to expect.",
    },
    {
      icon: CalendarIcon,
      title: "Flexible Scheduling",
      description:
        "Weekly or monthly plans designed to fit your lifestyle. We work around your schedule, not the other way around.",
    },
  ];

  return (
    <section id="why-yaras" className="py-16 sm:py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Why Families{" "}
            <span className="text-primary">Trust Yara</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 sm:gap-5 bg-white rounded-xl p-5 sm:p-6 shadow-md border border-accent-light/20"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SparkleIcon className="w-12 h-12 text-white/80 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Ready for a Spotless Home?
        </h2>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Call Yara today to schedule your free in-home estimate. No
          obligations, no pressure — just honest pricing for a job well done.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-3 bg-white text-primary-dark px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-warm-light transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          <PhoneIcon className="w-6 h-6" />
          {PHONE_NUMBER}
        </a>
        <p className="mt-4 text-white/60 text-sm">
          Free estimates &middot; No obligation &middot; Licensed & Insured
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/80 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <SparkleIcon className="w-6 h-6 text-accent-light" />
            <span className="text-lg font-bold text-white">
              Yara&apos;s Cleaning
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors font-medium"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-sm">
              <ShieldIcon className="w-4 h-4 text-accent-light" />
              Licensed & Insured
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/50">
          &copy; {currentYear} Yara&apos;s Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyYaras />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

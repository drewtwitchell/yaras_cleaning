"use client";

import { useState } from "react";

const PHONE_NUMBER = "(508) 735-4579";
const PHONE_HREF = "tel:+15087354579";

/* ─── Icons ─── */

function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function HomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <line x1="8" y1="6" x2="8" y2="6" />
      <line x1="12" y1="6" x2="12" y2="6" />
      <line x1="16" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="14" />
    </svg>
  );
}

function BoxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function TargetIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClipboardIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function DollarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

/* ─── Header ─── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/5 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <SparkleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-primary-dark tracking-tight">
                Yara&apos;s
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-accent tracking-tight">
                {" "}Cleaning
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {["Services", "How It Works", "Why Yara's"].map((item) => {
              const href = `#${item.toLowerCase().replace(/['\s]+/g, "-").replace("'", "")}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="px-4 py-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/5 font-medium transition-all text-sm"
                >
                  {item}
                </a>
              );
            })}
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white pl-4 pr-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-5 pt-3 flex flex-col gap-1 border-t border-primary/5">
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Why Yara's", href: "#why-yaras" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 font-medium transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3.5 rounded-full font-semibold shadow-lg"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-section-alt via-white to-white">
      {/* Decorative blobs */}
      <div className="absolute top-10 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl animate-shimmer" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-accent/10 to-gold/10 rounded-full blur-3xl animate-shimmer" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary-dark px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary/10">
              <ShieldCheckIcon className="w-4 h-4 text-primary" />
              Fully Licensed & Insured
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Your Space,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-accent">
                Sparkling Clean
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/55 max-w-xl leading-relaxed">
              From cozy apartments to busy offices, Yara delivers a
              detail-obsessed clean tailored to your space. Every job starts
              with a free, in-person walkthrough — because no two spaces are
              the same.
            </p>

            {/* CTA area */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-5 h-5" />
                Call for a Free Estimate
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary-dark px-8 py-4 rounded-full text-lg font-bold border-2 border-primary/15 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                View Services
              </a>
            </div>

            {/* Quick trust stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" />
                  ))}
                </div>
                <span className="font-semibold text-foreground/70">5-Star Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartIcon className="w-4 h-4 text-rose" />
                <span>Locally Owned</span>
              </div>
            </div>
          </div>

          {/* Right visual — floating cards */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Background circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10" />

              {/* Floating service cards */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-primary/10 p-4 sm:p-5 animate-float w-56 sm:w-64">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <HomeIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Homes & Apartments</p>
                    <p className="text-xs text-foreground/40">Weekly or Monthly</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-12 left-2 sm:left-4 bg-white rounded-2xl shadow-xl border border-primary/10 p-4 animate-float-delayed w-52 sm:w-56">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary-light flex items-center justify-center">
                    <SparkleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Deep Cleans</p>
                    <p className="text-xs text-foreground/40">Top to Bottom</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 right-2 sm:right-4 bg-white rounded-2xl shadow-xl border border-primary/10 p-4 animate-float w-48 sm:w-52" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">100% Insured</p>
                    <p className="text-xs text-foreground/40">Full Peace of Mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */

function Services() {
  const services = [
    {
      icon: HomeIcon,
      title: "House Cleaning",
      description: "Regular cleaning for your entire home — kitchens, bathrooms, bedrooms, living areas. Everything stays fresh and inviting.",
      color: "from-primary to-primary-dark",
    },
    {
      icon: BuildingIcon,
      title: "Apartment Cleaning",
      description: "Studio to multi-bedroom apartments. Yara works with your space and layout to deliver a thorough, efficient clean every time.",
      color: "from-accent to-primary",
    },
    {
      icon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
          <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      ),
      title: "Office & Business",
      description: "Professional cleaning for offices, retail spaces, and small businesses. A clean workspace means better productivity and happier clients.",
      color: "from-primary-dark to-primary-deeper",
    },
    {
      icon: TargetIcon,
      title: "Deep Cleaning",
      description: "An intensive, top-to-bottom clean for when your space needs extra love. Inside cabinets, behind appliances, baseboards — every corner.",
      color: "from-primary to-accent",
    },
    {
      icon: BoxIcon,
      title: "Move-In Cleaning",
      description: "Start fresh in your new place. Yara makes sure every surface is spotless before you unpack a single box.",
      color: "from-accent to-primary-light",
    },
    {
      icon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      ),
      title: "Move-Out Cleaning",
      description: "Get your deposit back. Yara leaves the place looking better than you found it — landlord-approved, every time.",
      color: "from-gold to-gold-light",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What We Clean</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Every Space Deserves to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Shine
            </span>
          </h2>
          <p className="mt-4 text-foreground/50 text-lg max-w-2xl mx-auto">
            Homes, apartments, offices — no matter the space, Yara brings the same
            attention to detail and personal care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-gray-100 hover:border-primary/15"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-5 shadow-md group-hover:shadow-lg transition-shadow`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/50 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-foreground/40 mb-4">Not sure what you need? No worries.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Yara — She&apos;ll Help You Figure It Out
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Give Yara a Call",
      description: "Tell her about your space and what you're looking for. She'll ask the right questions and find a time to come see it.",
      icon: PhoneIcon,
      accent: "from-primary to-primary-dark",
    },
    {
      number: "02",
      title: "Free In-Person Estimate",
      description: "Yara visits your space to understand the scope of work. She'll give you an honest, transparent price on the spot — zero obligation.",
      icon: ClipboardIcon,
      accent: "from-accent to-primary",
    },
    {
      number: "03",
      title: "Enjoy the Sparkle",
      description: "Pick your schedule — weekly, monthly, or one-time — and Yara handles the rest. Consistent quality you can count on.",
      icon: SparkleIcon,
      accent: "from-gold to-gold-light",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-section-alt relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(124,58,237,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Three Steps to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Cleaner Space
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
              )}

              <div className="relative inline-block mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-2 -left-2 w-8 h-8 rounded-lg bg-foreground text-white text-xs font-black flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground/50 leading-relaxed text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Yara's ─── */

function WhyYaras() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: "Licensed & Insured",
      description: "Full liability coverage and all required business licenses. Your property and peace of mind are always protected.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: HeartIcon,
      title: "The Personal Touch",
      description: "Yara is there for every clean — no anonymous crews, no revolving door of strangers. Just reliable, caring service from someone who takes pride in her work.",
      gradient: "from-rose to-accent",
    },
    {
      icon: DollarIcon,
      title: "Honest, Transparent Pricing",
      description: "No hidden fees, no bait-and-switch. Every job starts with a free walkthrough so you know exactly what you're paying for before any work begins.",
      gradient: "from-accent to-primary",
    },
    {
      icon: CalendarIcon,
      title: "Your Schedule, Your Way",
      description: "Weekly, monthly, or one-time cleans. Moving in or moving out. Yara works around your life, not the other way around.",
      gradient: "from-gold to-gold-light",
    },
  ];

  return (
    <section id="why-yaras" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">The Yara Difference</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Why People{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Trust Yara
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex gap-5 bg-section-alt rounded-2xl p-6 border border-primary/5 hover:border-primary/15 hover:shadow-lg transition-all"
            >
              <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
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

/* ─── CTA Section ─── */

function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deeper via-primary-dark to-primary" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/10">
          <SparkleIcon className="w-4 h-4" />
          Free Estimates, Always
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready for a Space That<br className="hidden sm:block" />{" "}
          Feels Brand New?
        </h2>
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          One phone call is all it takes. Yara will walk through your space,
          understand exactly what you need, and give you an honest price.
          No pressure, no games.
        </p>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-3 bg-white text-primary-dark px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-gold-light hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl"
        >
          <PhoneIcon className="w-6 h-6" />
          {PHONE_NUMBER}
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm">
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-accent" />
            Free In-Person Estimate
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-accent" />
            No Obligation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-accent" />
            Licensed & Insured
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white/70 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <SparkleIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">
              Yara&apos;s Cleaning
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors font-semibold"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <div className="hidden sm:block w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-white/40">
              <ShieldCheckIcon className="w-4 h-4 text-accent-light/60" />
              Fully Licensed & Insured
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {currentYear} Yara&apos;s Cleaning. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-white/60 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-white/60 transition-colors">How It Works</a>
            <a href="#why-yaras" className="hover:text-white/60 transition-colors">Why Yara&apos;s</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

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

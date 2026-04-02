"use client";

import { useState, useEffect, useRef } from "react";

const PHONE_NUMBER = "(508) 735-4579";
const PHONE_HREF = "tel:+15087354579";

/* ─── Scroll Reveal Hook ─── */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}>
      {children}
    </div>
  );
}

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
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <circle cx="8" cy="6" r="0.5" fill="currentColor" /><circle cx="12" cy="6" r="0.5" fill="currentColor" /><circle cx="16" cy="6" r="0.5" fill="currentColor" />
      <circle cx="8" cy="10" r="0.5" fill="currentColor" /><circle cx="12" cy="10" r="0.5" fill="currentColor" /><circle cx="16" cy="10" r="0.5" fill="currentColor" />
      <circle cx="8" cy="14" r="0.5" fill="currentColor" /><circle cx="12" cy="14" r="0.5" fill="currentColor" /><circle cx="16" cy="14" r="0.5" fill="currentColor" />
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
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
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
function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function MoveOutIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function ClipboardIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 14l2 2 4-4" />
    </svg>
  );
}
function DollarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

/* ─── Header ─── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <SparkleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight">
              <span className="text-primary-dark">Yara&apos;s</span>
              <span className="text-accent"> Cleaning</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "About Yara", href: "#about" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="px-4 py-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/5 font-medium transition-all text-sm">
                {item.label}
              </a>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white pl-4 pr-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-5 pt-3 flex flex-col gap-1 border-t border-primary/5 bg-white/95 backdrop-blur-md rounded-b-2xl">
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "About Yara", href: "#about" },
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 font-medium transition-all">
                {item.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3.5 rounded-full font-semibold shadow-lg">
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-alt via-white to-accent-light/20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/12 to-transparent rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />

      {/* Floating decorative sparkles */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <SparkleIcon className="w-6 h-6 text-primary/20" />
      </div>
      <div className="absolute top-1/3 left-[15%] animate-float-slow">
        <SparkleIcon className="w-4 h-4 text-accent/25" />
      </div>
      <div className="absolute bottom-1/3 right-[10%] animate-float-reverse">
        <SparkleIcon className="w-5 h-5 text-gold/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm text-primary-dark px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-primary/10 shadow-sm">
              <ShieldCheckIcon className="w-4 h-4 text-primary" />
              Licensed & Insured — Full Peace of Mind
            </div>
          </Reveal>

          {/* Giant headline */}
          <Reveal delay={1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
              <span className="text-foreground">Clean spaces.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-light">
                Happy faces.
              </span>
            </h1>
          </Reveal>

          {/* Subheading — more editorial */}
          <Reveal delay={2}>
            <p className="mt-8 text-xl sm:text-2xl text-foreground/45 max-w-2xl leading-relaxed font-light">
              Yara doesn&apos;t just clean — she transforms your space with a
              level of care that feels personal, because it is. Homes,
              apartments, offices, and everything in between.
            </p>
          </Reveal>

          {/* CTA Row */}
          <Reveal delay={3}>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={PHONE_HREF}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4.5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
              >
                <PhoneIcon className="w-5 h-5" />
                Get Your Free Estimate
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary-dark px-8 py-4.5 rounded-full text-lg font-bold border-2 border-primary/12 hover:border-primary/25 hover:bg-primary/5 transition-all"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={4}>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-foreground/40">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-5 h-5 text-gold" />
                  ))}
                </div>
                <span className="font-semibold text-foreground/60 ml-1">5-Star Rated</span>
              </div>
              <div className="w-px h-4 bg-foreground/10" />
              <span className="flex items-center gap-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-primary/60" />
                Fully Licensed & Insured
              </span>
              <div className="w-px h-4 bg-foreground/10 hidden sm:block" />
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <HeartIcon className="w-4 h-4 text-rose/60" />
                Locally Owned & Operated
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 80V40C360 80 720 0 1080 40C1260 60 1380 70 1440 70V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Scrolling Marquee ─── */

function Marquee() {
  const items = [
    "House Cleaning", "Apartment Cleaning", "Office Cleaning",
    "Deep Cleaning", "Move-In Cleaning", "Move-Out Cleaning",
    "Weekly Service", "Monthly Service", "One-Time Cleans",
  ];

  return (
    <div className="py-6 bg-white overflow-hidden border-y border-primary/5 marquee-track">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 sm:mx-10 text-sm sm:text-base font-semibold text-foreground/20 uppercase tracking-widest flex items-center gap-3">
            <SparkleIcon className="w-4 h-4 text-primary/20" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Services Bento Grid ─── */

function Services() {
  const services = [
    {
      icon: HomeIcon,
      title: "Houses",
      desc: "Whole-home cleaning from top to bottom. Every room, every surface, every detail.",
      gradient: "from-primary to-primary-dark",
      size: "sm:col-span-2 sm:row-span-2",
      big: true,
    },
    {
      icon: BuildingIcon,
      title: "Apartments",
      desc: "Studios to multi-bedrooms — efficient and thorough.",
      gradient: "from-accent to-primary",
    },
    {
      icon: () => <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>,
      title: "Offices & Businesses",
      desc: "Professional spaces deserve professional cleaning.",
      gradient: "from-primary-dark to-primary-deeper",
    },
    {
      icon: TargetIcon,
      title: "Deep Cleans",
      desc: "Intensive, top-to-bottom clean. Inside cabinets, behind appliances, baseboards — every corner gets attention.",
      gradient: "from-primary to-accent",
      size: "sm:col-span-2",
      wide: true,
    },
    {
      icon: BoxIcon,
      title: "Move-In",
      desc: "Start fresh. Spotless before you unpack.",
      gradient: "from-accent to-primary-light",
    },
    {
      icon: MoveOutIcon,
      title: "Move-Out",
      desc: "Get your deposit back. Landlord-approved clean.",
      gradient: "from-gold to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14 sm:mb-18">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Whatever your space,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                we&apos;ve got you.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={Math.min(i + 1, 5)}>
                <div className={`bento-card group relative overflow-hidden rounded-3xl p-6 sm:p-8 ${service.size || ""} ${service.big ? "bg-gradient-to-br from-primary-deeper via-primary-dark to-primary min-h-[280px] sm:min-h-[360px]" : "bg-section-alt border border-primary/5 hover:border-primary/15"} ${service.wide ? "min-h-[160px]" : ""} flex flex-col justify-end h-full`}>
                  {/* Decorative bg elements for big card */}
                  {service.big && (
                    <>
                      <div className="absolute top-6 right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${service.big ? "w-16 h-16" : ""} rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg`}>
                      <Icon className={`${service.big ? "w-8 h-8" : "w-6 h-6"} text-white`} />
                    </div>
                    <h3 className={`font-bold mb-2 ${service.big ? "text-3xl sm:text-4xl text-white" : "text-xl text-foreground"}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed ${service.big ? "text-white/60 text-lg max-w-sm" : "text-foreground/45 text-sm"}`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Strip ─── */

function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-section-dark relative overflow-hidden curve-divider">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {[
            { number: "6+", label: "Service Types", sub: "For any space" },
            { number: "100%", label: "Insured", sub: "Full coverage" },
            { number: "5★", label: "Rated", sub: "By every client" },
            { number: "Free", label: "Estimates", sub: "Always, no obligation" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={Math.min(i + 1, 4)}>
              <div>
                <p className="stat-number text-4xl sm:text-5xl lg:text-6xl font-black">{stat.number}</p>
                <p className="text-white font-bold mt-2 text-lg">{stat.label}</p>
                <p className="text-white/30 text-sm mt-1">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */

function HowItWorks() {
  const steps = [
    { number: "01", title: "Call Yara", desc: "Tell her about your space. She asks the right questions and finds a time to come see it.", icon: PhoneIcon },
    { number: "02", title: "Free Walkthrough", desc: "Yara visits in person to understand the scope. You get an honest price on the spot — zero obligation.", icon: ClipboardIcon },
    { number: "03", title: "Enjoy the Sparkle", desc: "Pick your schedule and relax. Yara delivers consistent, detail-obsessed quality every single time.", icon: SparkleIcon },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — section intro */}
          <div>
            <Reveal>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Getting started is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  effortless.
                </span>
              </h2>
              <p className="mt-6 text-xl text-foreground/40 leading-relaxed">
                No forms. No back-and-forth emails. Just a quick phone call
                and Yara takes care of everything from there.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <a
                href={PHONE_HREF}
                className="group mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
              >
                <PhoneIcon className="w-5 h-5" />
                {PHONE_NUMBER}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* Right — steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={Math.min(i + 1, 3)}>
                <div className="group flex gap-5 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-section-alt border border-primary/5 hover:border-primary/15 hover:shadow-xl transition-all">
                  <div className="shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-primary/30 font-black text-2xl">{step.number}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-foreground/45 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Yara ─── */

function AboutYara() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 0V30C480 60 960 0 1440 30V0H0Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-gold/5 border border-primary/10 flex items-center justify-center relative overflow-hidden">
                {/* Abstract clean illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 animate-pulse-soft" />
                </div>
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl mb-6">
                    <HeartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground">Yara</p>
                  <p className="text-foreground/40 mt-1 font-medium">Founder & Lead Cleaner</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl border border-primary/10 p-4 sm:p-5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Fully Licensed</p>
                    <p className="text-xs text-foreground/40">& Insured</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <Reveal>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Meet Yara</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                Cleaning isn&apos;t just a job.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  It&apos;s personal.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-lg text-foreground/45 leading-relaxed">
                Yara started her cleaning business because she believes everyone
                deserves to come home to a space that feels fresh, cared for, and
                truly clean. She&apos;s not running a franchise or managing crews
                from an office — she&apos;s the one showing up, doing the work, and
                making sure every detail is right.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-4 text-lg text-foreground/45 leading-relaxed">
                That personal commitment is what sets Yara&apos;s Cleaning apart.
                When you call, you talk to Yara. When she walks through your space,
                she sees what needs attention. And when the job is done, you&apos;ll
                notice the difference.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheckIcon, label: "Licensed & Insured" },
                  { icon: HeartIcon, label: "Personally Involved" },
                  { icon: DollarIcon, label: "Transparent Pricing" },
                  { icon: CalendarIcon, label: "Flexible Scheduling" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-foreground/60">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deeper via-primary-dark to-primary" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/15 rounded-full blur-3xl" />

      {/* Top curve */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 0V30C480 60 960 0 1440 30V0H0Z" fill="#faf5ff" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-white/10">
            <SparkleIcon className="w-4 h-4" />
            Your first estimate is always free
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Your space deserves<br className="hidden sm:block" /> to sparkle.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            One phone call. That&apos;s all it takes. Yara will walk through
            your space, understand what you need, and give you an honest
            price. No games.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center justify-center gap-3 bg-white text-primary-dark px-10 py-5 rounded-full text-xl font-bold hover:bg-gold-light hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl"
          >
            <PhoneIcon className="w-6 h-6" />
            {PHONE_NUMBER}
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/35 text-sm">
            {["Free In-Person Estimate", "No Obligation", "Licensed & Insured"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-white/60 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <SparkleIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Yara&apos;s Cleaning
              </span>
            </div>
            <p className="mt-3 text-white/30 text-sm max-w-xs">
              Professional cleaning that&apos;s personal. Licensed, insured, and
              committed to making your space shine.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-bold text-white/80 mb-3 uppercase tracking-wider text-xs">Services</p>
              <ul className="space-y-2 text-white/35">
                <li>House Cleaning</li>
                <li>Apartment Cleaning</li>
                <li>Office Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Move-In / Move-Out</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white/80 mb-3 uppercase tracking-wider text-xs">Quick Links</p>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/35 hover:text-white/70 transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="text-white/35 hover:text-white/70 transition-colors">How It Works</a></li>
                <li><a href="#about" className="text-white/35 hover:text-white/70 transition-colors">About Yara</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-right">
            <p className="font-bold text-white/80 mb-3 uppercase tracking-wider text-xs">Get In Touch</p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 text-accent-light hover:text-white transition-colors font-bold text-lg"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <div className="flex items-center gap-2 mt-3 text-sm text-white/30 justify-center lg:justify-end">
              <ShieldCheckIcon className="w-4 h-4 text-accent-light/40" />
              Licensed & Insured
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/20">
          &copy; {currentYear} Yara&apos;s Cleaning. All rights reserved.
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
        <Marquee />
        <Services />
        <Stats />
        <HowItWorks />
        <AboutYara />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

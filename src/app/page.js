"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PHONE = "(508) 735-4579";
const PHONE_HREF = "tel:+15087354579";

/* ── Scroll Reveal ── */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function R({ children, className = "", delay = 0 }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}>{children}</div>;
}

/* ── Decorative ── */

function Sparkle({ className, size = 16 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5z" />
    </svg>
  );
}

function BubbleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="bubble bubble-1" style={{ bottom: "5%" }} />
      <div className="bubble bubble-2" style={{ bottom: "10%" }} />
      <div className="bubble bubble-3" style={{ bottom: "0%" }} />
      <div className="bubble bubble-4" style={{ bottom: "15%" }} />
      <div className="bubble bubble-5" style={{ bottom: "8%" }} />
      <div className="bubble bubble-6" style={{ bottom: "3%" }} />
      <div className="bubble bubble-7" style={{ bottom: "12%" }} />
    </div>
  );
}

/* ── Icons ── */

function PhoneIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
}
function CheckIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function ArrowRight({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function StarIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
function HomeIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}
function BuildingIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><line x1="8" y1="6" x2="8.01" y2="6" /><line x1="12" y1="6" x2="12.01" y2="6" /><line x1="16" y1="6" x2="16.01" y2="6" /><line x1="8" y1="10" x2="8.01" y2="10" /><line x1="12" y1="10" x2="12.01" y2="10" /><line x1="16" y1="10" x2="16.01" y2="10" /></svg>;
}
function BriefcaseIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;
}
function TargetIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}
function BoxIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
}
function TruckIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
}
function ShieldIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>;
}
function ClipboardIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 14l2 2 4-4" /></svg>;
}
function CalendarIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function DollarIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>;
}
function UsersIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
}

/* ════════════════════════════════════════
   HEADER
   ════════════════════════════════════════ */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md shadow-purple/5" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
        <a href="#" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Yara's Cleaning"
            width={200}
            height={200}
            className="h-16 sm:h-20 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-muted hover:text-purple transition-colors">Services</a>
          <a href="#how-it-works" className="text-muted hover:text-purple transition-colors">How It Works</a>
          <a href="#about" className="text-muted hover:text-purple transition-colors">About</a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-purple text-white px-5 py-2.5 rounded-full font-semibold hover:bg-purple-dark shadow-md shadow-purple/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <PhoneIcon className="w-4 h-4" />
            Call Yara
          </a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-5 flex flex-col gap-2 bg-white/95 backdrop-blur-md border-t border-lavender-light">
          {[
            { label: "Services", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-muted hover:text-purple font-medium py-2.5 px-2 rounded-lg hover:bg-lavender-soft transition-all">
              {item.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="mt-1 inline-flex items-center justify-center gap-2 bg-purple text-white px-6 py-3 rounded-full font-semibold shadow-md">
            <PhoneIcon className="w-4 h-4" />
            {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
}

/* ════════════════════════════════════════
   HERO
   ════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-soft via-lavender-light/30 to-white" />

      {/* Bubbles floating up from bottom */}
      <BubbleField />

      {/* Sparkle twinkles */}
      <Sparkle className="absolute top-28 right-[18%] text-lavender twinkle" size={14} />
      <Sparkle className="absolute top-48 left-[12%] text-sparkle twinkle twinkle-delay-1" size={10} />
      <Sparkle className="absolute bottom-40 right-[30%] text-purple/20 twinkle twinkle-delay-2" size={18} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <R>
            <div className="inline-flex items-center gap-2 bg-white border border-lavender px-4 py-2 rounded-full text-sm font-semibold text-purple-dark shadow-sm mb-8">
              <ShieldIcon className="w-4 h-4 text-purple" />
              Licensed, Insured & Ready to Go
            </div>
          </R>

          <R delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Your home called.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-purple-dark to-lavender">
                It wants a deep clean.
              </span>
            </h1>
          </R>

          <R delay={2}>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed">
              From weekly house cleanings to move-out scrubs, Yara and her team
              handle it all. Every job starts with a free walk-through so
              there are no surprises.
            </p>
          </R>

          <R delay={3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-purple text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-purple/25 hover:shadow-xl hover:shadow-purple/30 hover:-translate-y-1 hover:bg-purple-dark transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-purple font-semibold px-6 py-4 rounded-full border-2 border-lavender hover:bg-lavender-soft transition-all">
                See Our Services
              </a>
            </div>
          </R>

          <R delay={4}>
            <p className="mt-5 text-muted text-sm">
              Or call directly: <a href={PHONE_HREF} className="text-purple font-semibold hover:text-purple-dark">{PHONE}</a>
            </p>
          </R>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V25C200 50 400 10 600 30S1000 55 1200 25C1320 12 1400 18 1440 25V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   TRUST STRIP
   ════════════════════════════════════════ */

function TrustStrip() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-4 h-4 text-gold" />)}
              </div>
              <span className="font-semibold text-foreground">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldIcon className="w-4 h-4 text-purple" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="w-4 h-4 text-purple" />
              <span>Locally Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarIcon className="w-4 h-4 text-purple" />
              <span>Cash, Check & Venmo</span>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SERVICES
   ════════════════════════════════════════ */

function Services() {
  const services = [
    { icon: HomeIcon, title: "Houses", desc: "Full home cleaning, top to bottom. Kitchens, bathrooms, bedrooms, the works.", gradient: "from-purple to-purple-dark" },
    { icon: BuildingIcon, title: "Apartments", desc: "Studios to multi-bedrooms. Same thorough clean, sized to your place.", gradient: "from-lavender to-purple" },
    { icon: BriefcaseIcon, title: "Offices", desc: "Keep your workspace looking sharp for your team and your clients.", gradient: "from-purple-dark to-purple-deep" },
    { icon: TargetIcon, title: "Deep Cleans", desc: "The serious scrub. Inside cabinets, behind appliances, under everything.", gradient: "from-purple to-lavender" },
    { icon: BoxIcon, title: "Move-In", desc: "Moving somewhere new? Yara gets it spotless before you unpack.", gradient: "from-lavender to-bubble" },
    { icon: TruckIcon, title: "Move-Out", desc: "Get that deposit back. We leave it better than you found it.", gradient: "from-purple-deep to-purple" },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-lavender-soft relative overflow-hidden">
      <BubbleField />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">What We Clean</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              If it has walls and floors,{" "}
              <span className="text-purple">we&apos;re on it.</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Every job starts with a free walk-through so Yara can see
              your space and give you a fair, honest price.
            </p>
          </div>
        </R>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <R key={s.title} delay={Math.min(i + 1, 4)}>
                <a
                  href={PHONE_HREF}
                  className="service-card group block bg-white rounded-2xl p-6 sm:p-7 shadow-md shadow-purple/5 hover:shadow-xl hover:shadow-purple/15 border border-lavender-light/60 relative overflow-hidden"
                >
                  {/* Purple fill on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-lavender-soft border border-lavender/40 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                      <Icon className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-purple group-hover:text-white/90 text-sm font-semibold transition-colors">
                      <PhoneIcon className="w-3.5 h-3.5" />
                      Call for a quote
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </R>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   HOW IT WORKS
   ════════════════════════════════════════ */

function HowItWorks() {
  const steps = [
    { num: "1", icon: PhoneIcon, title: "Give Yara a Ring", desc: "Tell her about your place and what you need. She'll set up a time to come take a look.", color: "bg-purple" },
    { num: "2", icon: ClipboardIcon, title: "Free Walk-Through", desc: "Yara comes to see the space and gives you a price right there. No pressure, no games.", color: "bg-purple-dark" },
    { num: "3", icon: () => <Sparkle className="text-white" size={24} />, title: "Sit Back & Enjoy", desc: "Pick your schedule (weekly, monthly, or one-time) and let the team work their magic.", color: "bg-lavender" },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative">
      <Sparkle className="absolute top-16 right-[10%] text-lavender/30 twinkle" size={16} />
      <Sparkle className="absolute bottom-20 left-[8%] text-purple/10 twinkle twinkle-delay-1" size={12} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Three steps to <span className="text-purple">sparkle.</span>
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-5 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <R key={step.num} delay={Math.min(i + 1, 3)}>
                <div className="text-center relative">
                  {/* Dashed connector */}
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-10 left-[60%] w-[calc(100%-20%)] border-t-2 border-dashed border-lavender" />
                  )}

                  <div className="relative inline-block mb-5">
                    <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg shadow-purple/15`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-purple text-purple text-xs font-bold flex items-center justify-center shadow-sm">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </R>
            );
          })}
        </div>

        <R delay={4}>
          <div className="mt-14 text-center">
            <a href={PHONE_HREF} className="group inline-flex items-center gap-3 bg-purple text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-purple/25 hover:shadow-xl hover:-translate-y-1 hover:bg-purple-dark transition-all">
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-3 text-faint text-sm">We accept cash, check & Venmo</p>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   ABOUT YARA
   ════════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-lavender-soft relative overflow-hidden">
      <BubbleField />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo showcase */}
          <R>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-3xl bg-gradient-to-br from-white via-lavender-light/50 to-lavender-soft border border-lavender/30 shadow-xl p-8 sm:p-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Yara's Cleaning"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-lg border border-lavender-light p-3 sm:p-4">
                <div className="flex items-center gap-2.5">
                  <ShieldIcon className="w-5 h-5 text-purple" />
                  <div>
                    <p className="font-bold text-foreground text-sm leading-tight">Licensed</p>
                    <p className="text-xs text-muted leading-tight">& Insured</p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* Text */}
          <div>
            <R>
              <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">Meet Yara</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                She built this business on{" "}
                <span className="text-purple">doing things right.</span>
              </h2>
            </R>

            <R delay={1}>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Yara started her cleaning business because she thinks you
                  should know and trust the people cleaning your home. She
                  personally walks through every space before quoting a price
                  because every home is different.
                </p>
                <p>
                  She&apos;s the type who notices the baseboards, the corners,
                  the spots behind the door that other services walk past. Whether
                  it&apos;s her or her team, the standard stays the same.
                </p>
                <p>
                  Weekly cleanings for busy families, deep cleans when you need
                  a reset, keeping your office sharp for clients. Whatever it is,
                  Yara&apos;s team treats your space like their own.
                </p>
              </div>
            </R>

            <R delay={2}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: ShieldIcon, label: "Licensed & Insured" },
                  { icon: UsersIcon, label: "Trusted Team" },
                  { icon: DollarIcon, label: "No Hidden Fees" },
                  { icon: CalendarIcon, label: "Flexible Scheduling" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-lavender-light/50">
                    <item.icon className="w-4 h-4 text-purple shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   QUOTE
   ════════════════════════════════════════ */

function Quote() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <R>
          <div className="bg-gradient-to-br from-lavender-soft to-white rounded-3xl p-8 sm:p-12 border border-lavender/20 shadow-lg relative overflow-hidden">
            <Sparkle className="absolute top-5 right-7 text-lavender/30 twinkle" size={16} />
            <Sparkle className="absolute bottom-6 left-8 text-purple/10 twinkle twinkle-delay-1" size={12} />

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug">
              &ldquo;We clean your space like it&apos;s our own home.
              That&apos;s not a sales pitch. That&apos;s just how we do things.&rdquo;
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center">
                <Sparkle className="text-purple" size={16} />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground text-sm">Yara</p>
                <p className="text-muted text-xs">Founder, Yara&apos;s Cleaning</p>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   WHAT YOU GET
   ════════════════════════════════════════ */

function WhatYouGet() {
  const items = [
    "Yara personally walks through your space before any work starts",
    "Free estimate, no commitment required",
    "Fixed pricing, no surprise add-ons",
    "Fully licensed and insured",
    "Weekly, monthly, or one-time. Your call.",
    "Houses, apartments, offices, deep cleans, move-in/out",
    "Same high standard whether it's Yara or her team",
    "We accept cash, check & Venmo",
  ];

  return (
    <section className="py-20 sm:py-28 bg-lavender-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <R>
              <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">The Promise</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                What you get with{" "}
                <span className="text-purple">Yara&apos;s Cleaning.</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                No contracts. No gimmicks. Just a team that takes pride
                in leaving your space spotless.
              </p>
            </R>
          </div>

          <div>
            {items.map((item, i) => (
              <R key={item} delay={Math.min(Math.floor(i / 2) + 1, 4)}>
                <div className="flex items-start gap-3 py-3.5 border-b border-lavender/30 last:border-0">
                  <div className="w-6 h-6 rounded-full bg-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-purple" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   CTA
   ════════════════════════════════════════ */

function CTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-deep via-purple-dark to-purple" />
      <BubbleField />

      {/* Sparkles */}
      <Sparkle className="absolute top-16 left-[12%] text-white/10 twinkle" size={20} />
      <Sparkle className="absolute top-1/3 right-[18%] text-white/8 twinkle twinkle-delay-1" size={14} />
      <Sparkle className="absolute bottom-24 left-[25%] text-white/6 twinkle twinkle-delay-2" size={16} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lavender/8 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <R>
          <Sparkle className="text-white/40 mx-auto mb-6" size={32} />
        </R>
        <R delay={1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready for a space<br />that actually sparkles?
          </h2>
        </R>
        <R delay={2}>
          <p className="mt-6 text-white/50 text-lg max-w-md mx-auto">
            Call Yara. She&apos;ll come see your space, give you a
            straight price, and you decide. Simple as that.
          </p>
        </R>
        <R delay={3}>
          <a
            href={PHONE_HREF}
            className="group mt-10 inline-flex items-center gap-3 bg-white text-purple-dark px-10 py-5 rounded-full text-xl font-bold hover:bg-lavender-light hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl"
          >
            <PhoneIcon className="w-6 h-6" />
            {PHONE}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </R>
        <R delay={4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/30 text-sm">
            {["Free Walk-Through", "No Obligation", "Licensed & Insured", "Cash, Check & Venmo"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckIcon className="w-3.5 h-3.5 text-lavender" />
                {item}
              </span>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════ */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 bg-white border-t border-lavender-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Yara's Cleaning" width={140} height={140} className="h-12 w-auto" />
            <span className="text-faint text-sm">&copy; {year}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
            <span className="text-faint flex items-center gap-1.5">
              <ShieldIcon className="w-3.5 h-3.5 text-purple" />
              Licensed & Insured
            </span>
            <span className="text-faint">Cash, Check & Venmo</span>
            <a href={PHONE_HREF} className="text-purple font-semibold hover:text-purple-dark transition-colors">{PHONE}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   PAGE
   ════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <About />
        <Quote />
        <WhatYouGet />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

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
          <a href="#faq" className="text-muted hover:text-purple transition-colors">FAQ</a>
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
            { label: "FAQ", href: "#faq" },
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
    { icon: HomeIcon, title: "Houses", desc: "Full home cleaning, top to bottom. Kitchens, bathrooms, bedrooms, the works.", gradient: "from-purple to-purple-dark", cta: "Book a home cleaning" },
    { icon: BuildingIcon, title: "Apartments", desc: "Studios to multi-bedrooms. Same thorough clean, sized to your place.", gradient: "from-lavender to-purple", cta: "Get your apartment sparkling" },
    { icon: BriefcaseIcon, title: "Offices", desc: "Keep your workspace looking sharp for your team and your clients.", gradient: "from-purple-dark to-purple-deep", cta: "Clean up your workspace" },
    { icon: TargetIcon, title: "Deep Cleans", desc: "The serious scrub. Inside cabinets, behind appliances, under everything.", gradient: "from-purple to-lavender", cta: "Schedule a deep clean" },
    { icon: BoxIcon, title: "Move-In", desc: "Moving somewhere new? Yara gets it spotless before you unpack.", gradient: "from-lavender to-bubble", cta: "Start fresh in your new place" },
    { icon: TruckIcon, title: "Move-Out", desc: "Get that deposit back. We leave it better than you found it.", gradient: "from-purple-deep to-purple", cta: "Get your deposit back" },
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
                      {s.cta}
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
          <R>
            <div className="relative max-w-lg mx-auto lg:mx-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Yara's Cleaning"
                width={600}
                height={600}
                className="w-full max-w-[420px] h-auto drop-shadow-xl"
              />
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
   SERVICE AREA
   ════════════════════════════════════════ */

function CoverageMap() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background */}
        <rect width="400" height="450" rx="24" fill="white" />

        {/* NH/MA state line */}
        <line x1="30" y1="150" x2="370" y2="150" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="6 4" />
        <text x="50" y="140" fill="#a5a5c0" fontSize="11" fontWeight="600">NEW HAMPSHIRE</text>
        <text x="50" y="168" fill="#a5a5c0" fontSize="11" fontWeight="600">MASSACHUSETTS</text>

        {/* Coverage circles - overlapping to show connected area */}
        {/* Southern NH zone */}
        <circle cx="200" cy="100" r="75" fill="#7c3aed" opacity="0.08" />
        <circle cx="200" cy="100" r="75" stroke="#7c3aed" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />

        {/* Greater Boston zone */}
        <circle cx="250" cy="240" r="90" fill="#7c3aed" opacity="0.08" />
        <circle cx="250" cy="240" r="90" stroke="#7c3aed" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />

        {/* Worcester zone */}
        <circle cx="120" cy="280" r="65" fill="#7c3aed" opacity="0.08" />
        <circle cx="120" cy="280" r="65" stroke="#7c3aed" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />

        {/* Main coverage blob connecting all three */}
        <ellipse cx="200" cy="220" rx="170" ry="170" fill="#7c3aed" opacity="0.05" />

        {/* Location dots + labels - Southern NH */}
        <circle cx="175" cy="60" r="4" fill="#7c3aed" />
        <text x="187" y="64" fill="#2d2d3f" fontSize="11" fontWeight="600">Nashua</text>
        <circle cx="250" cy="80" r="4" fill="#7c3aed" />
        <text x="262" y="84" fill="#2d2d3f" fontSize="11" fontWeight="600">Salem</text>
        <circle cx="155" cy="115" r="4" fill="#7c3aed" />
        <text x="118" y="112" fill="#6b6b8a" fontSize="10">Hudson</text>
        <circle cx="210" cy="100" r="3" fill="#c4b5fd" />
        <text x="195" y="90" fill="#6b6b8a" fontSize="10">Pelham</text>

        {/* Location dots + labels - Boston area */}
        <circle cx="290" cy="220" r="6" fill="#7c3aed" />
        <text x="302" y="224" fill="#2d2d3f" fontSize="12" fontWeight="700">Boston</text>
        <circle cx="260" cy="195" r="3" fill="#c4b5fd" />
        <text x="270" y="199" fill="#6b6b8a" fontSize="10">Cambridge</text>
        <circle cx="230" cy="235" r="3" fill="#c4b5fd" />
        <text x="240" y="239" fill="#6b6b8a" fontSize="10">Newton</text>
        <circle cx="300" cy="260" r="3" fill="#c4b5fd" />
        <text x="310" y="264" fill="#6b6b8a" fontSize="10">Quincy</text>
        <circle cx="240" cy="265" r="3" fill="#c4b5fd" />
        <text x="250" y="269" fill="#6b6b8a" fontSize="10">Brookline</text>

        {/* Location dots + labels - Worcester area */}
        <circle cx="115" cy="275" r="5" fill="#7c3aed" />
        <text x="72" y="265" fill="#2d2d3f" fontSize="12" fontWeight="700">Worcester</text>
        <circle cx="145" cy="300" r="3" fill="#c4b5fd" />
        <text x="155" y="304" fill="#6b6b8a" fontSize="10">Shrewsbury</text>
        <circle cx="100" cy="310" r="3" fill="#c4b5fd" />
        <text x="60" y="314" fill="#6b6b8a" fontSize="10">Auburn</text>

        {/* Legend */}
        <circle cx="50" cy="400" r="8" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="1.5" opacity="0.3" />
        <text x="66" y="404" fill="#6b6b8a" fontSize="11">Coverage Area</text>

        <circle cx="170" cy="400" r="4" fill="#7c3aed" />
        <text x="182" y="404" fill="#6b6b8a" fontSize="11">Major City</text>

        <circle cx="275" cy="400" r="3" fill="#c4b5fd" />
        <text x="285" y="404" fill="#6b6b8a" fontSize="11">Town</text>
      </svg>
    </div>
  );
}

function ServiceArea() {
  const regions = [
    { name: "Greater Boston", areas: "Boston, Cambridge, Somerville, Brookline, Newton, Quincy & surrounding areas" },
    { name: "Southern New Hampshire", areas: "Nashua, Hudson, Salem, Pelham, Londonderry, Windham & nearby towns" },
    { name: "Worcester Area", areas: "Worcester, Shrewsbury, Auburn, Holden, Millbury & surrounding communities" },
  ];

  return (
    <section id="areas" className="py-20 sm:py-28 bg-lavender-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">Service Area</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Three regions. <span className="text-purple">One standard.</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              From Southern New Hampshire through Greater Boston and out to
              Worcester, Yara&apos;s team has you covered.
            </p>
          </div>
        </R>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Map */}
          <R>
            <CoverageMap />
          </R>

          {/* Regions list */}
          <div className="space-y-6">
            {regions.map((region, i) => (
              <R key={region.name} delay={Math.min(i + 1, 3)}>
                <div className="bg-white rounded-2xl p-6 shadow-md shadow-purple/5 border border-lavender-light/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple" />
                    <h3 className="text-lg font-bold text-foreground">{region.name}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed pl-6">{region.areas}</p>
                </div>
              </R>
            ))}

            <R delay={4}>
              <div className="pl-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-muted text-sm">Not sure if we cover your area?</p>
                <a
                  href={PHONE_HREF}
                  className="group inline-flex items-center gap-2 text-purple font-semibold hover:text-purple-dark transition-colors text-sm"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Give Yara a call
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </R>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FAQ
   ════════════════════════════════════════ */

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-lavender/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-foreground font-semibold pr-4 group-hover:text-purple transition-colors">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-lavender-soft flex items-center justify-center transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="w-4 h-4 text-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-muted leading-relaxed pr-12">
          {a}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I need to be home during the cleaning?",
      a: "Nope! Many of our clients leave a key or provide entry instructions. You're welcome to be home if you prefer, but it's not required.",
    },
    {
      q: "Do you bring your own cleaning supplies?",
      a: "Yes, we bring everything we need. If you have specific products you'd like us to use or any allergies, just let us know and we'll accommodate.",
    },
    {
      q: "How long does a cleaning usually take?",
      a: "It depends on the size of your space and the type of cleaning. A standard home cleaning typically takes 2-4 hours. Yara will give you a time estimate during the walk-through.",
    },
    {
      q: "What forms of payment do you accept?",
      a: "We accept cash, check, and Venmo. Payment is due on the day of service.",
    },
    {
      q: "How does pricing work?",
      a: "Every space is different, so Yara does a free in-person walk-through before giving you a price. No ballpark guesses over the phone. You'll know the exact cost before any work starts.",
    },
    {
      q: "Can I change my cleaning schedule?",
      a: "Of course. Life happens. Just give us a heads up and we'll adjust your schedule. No penalties, no hassle.",
    },
    {
      q: "What areas do you serve?",
      a: "We cover three regions: Greater Boston, Southern New Hampshire (Nashua, Hudson, Salem, Pelham area), and the Worcester area. Not sure if we reach you? Give us a call and we'll let you know.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes, fully. Yara's Cleaning carries complete liability insurance and all required business licenses. Your home and belongings are protected.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-12">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Got questions? <span className="text-purple">We&apos;ve got answers.</span>
            </h2>
          </div>
        </R>

        <R delay={1}>
          <div className="border-t border-lavender/30">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </R>

        <R delay={2}>
          <div className="mt-10 text-center">
            <p className="text-muted mb-4">Still have questions?</p>
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-2 bg-purple text-white px-6 py-3 rounded-full font-semibold shadow-md shadow-purple/20 hover:bg-purple-dark hover:-translate-y-0.5 transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Yara
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </R>
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
    <footer className="bg-purple-deep text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Yara's Cleaning" width={200} height={200} className="h-20 w-auto brightness-110 mb-4" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professional cleaning that feels personal. Licensed,
              insured, and ready to make your space shine.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">House Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Apartment Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Cleans</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Move-In / Move-Out</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Yara</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-lavender hover:text-white transition-colors font-bold text-lg mb-4"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
            <div className="space-y-2 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-4 h-4 text-lavender/50" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <DollarIcon className="w-4 h-4 text-lavender/50" />
                Cash, Check & Venmo
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center text-xs text-white/20">
          &copy; {year} Yara&apos;s Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   STICKY MOBILE CALL BUTTON
   ════════════════════════════════════════ */

function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={PHONE_HREF}
      className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-purple text-white pl-4 pr-5 py-3.5 rounded-full font-bold shadow-xl shadow-purple/30 hover:bg-purple-dark transition-all active:scale-95"
    >
      <PhoneIcon className="w-5 h-5" />
      Call Now
    </a>
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
        <ServiceArea />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

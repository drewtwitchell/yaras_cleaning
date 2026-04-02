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

/* ── Decorative SVG elements ── */

function Sparkle({ className, size = 20 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5z" />
    </svg>
  );
}

function Bubbles({ className }) {
  return (
    <div className={className}>
      <div className="w-4 h-4 rounded-full bg-lavender/40 absolute animate-float" style={{ left: "10%", top: "20%" }} />
      <div className="w-6 h-6 rounded-full bg-bubble/30 absolute animate-float-slow" style={{ left: "80%", top: "15%" }} />
      <div className="w-3 h-3 rounded-full bg-lavender/50 absolute animate-float-delay" style={{ left: "60%", top: "70%" }} />
      <div className="w-5 h-5 rounded-full bg-sparkle/30 absolute animate-float" style={{ left: "25%", top: "60%", animationDelay: "1s" }} />
      <div className="w-3 h-3 rounded-full bg-purple/10 absolute animate-float-slow" style={{ left: "90%", top: "50%" }} />
      <div className="w-4 h-4 rounded-full bg-lavender/30 absolute animate-float-delay" style={{ left: "45%", top: "85%" }} />
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center">
          <Image src="/logo.png" alt="Yara's Cleaning" width={160} height={60} className="h-12 sm:h-14 w-auto" priority />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-muted hover:text-purple transition-colors">What We Clean</a>
          <a href="#how-it-works" className="text-muted hover:text-purple transition-colors">How It Works</a>
          <a href="#about" className="text-muted hover:text-purple transition-colors">Meet Yara</a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-purple text-white px-5 py-2.5 rounded-full font-semibold hover:bg-purple-dark transition-colors shadow-md shadow-purple/20 hover:shadow-lg hover:shadow-purple/30 hover:-translate-y-0.5 transition-all">
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
            { label: "What We Clean", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Meet Yara", href: "#about" },
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
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-soft via-white to-white" />

      {/* Floating sparkles */}
      <Sparkle className="absolute top-24 right-[15%] text-lavender animate-sparkle w-5 h-5" size={20} />
      <Sparkle className="absolute top-40 left-[10%] text-sparkle animate-sparkle-delay w-4 h-4" size={16} />
      <Sparkle className="absolute bottom-32 right-[25%] text-purple/20 animate-sparkle-delay-2 w-6 h-6" size={24} />

      {/* Bubbles */}
      <Bubbles className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <R>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-lavender px-4 py-2 rounded-full text-sm font-semibold text-purple-dark mb-8 shadow-sm">
              <Sparkle className="text-purple" size={14} />
              Licensed, Insured & Ready to Sparkle
              <Sparkle className="text-lavender" size={14} />
            </div>
          </R>

          <R delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Your home called.
              <br />
              <span className="text-purple">It wants a deep clean.</span>
            </h1>
          </R>

          <R delay={2}>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl mx-auto leading-relaxed">
              Yara handles everything from weekly cleanings to move-outs.
              She shows up herself, sees what needs doing, and doesn&apos;t
              stop until it shines.
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
                See What We Clean
              </a>
            </div>
          </R>

          <R delay={4}>
            <p className="mt-6 text-muted text-sm">
              Or call directly: <a href={PHONE_HREF} className="text-purple font-semibold hover:text-purple-dark">{PHONE}</a>
            </p>
          </R>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V20C240 50 480 0 720 30S1200 50 1440 20V60H0Z" fill="white" />
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
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-4 h-4 text-gold" />)}
              </div>
              <span className="font-semibold text-foreground">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkle className="text-purple" size={16} />
              <span>Fully Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-purple" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💜</span>
              <span>Locally Owned</span>
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
    {
      emoji: "🏠",
      title: "Houses",
      desc: "Full home cleaning, top to bottom. Kitchens, bathrooms, bedrooms, the works.",
      color: "from-purple to-purple-dark",
    },
    {
      emoji: "🏢",
      title: "Apartments",
      desc: "Studios to multi-bedrooms. Same thorough clean, sized to your place.",
      color: "from-lavender to-purple",
    },
    {
      emoji: "💼",
      title: "Offices",
      desc: "Keep your workspace looking sharp for your team and your clients.",
      color: "from-purple-dark to-purple-deep",
    },
    {
      emoji: "✨",
      title: "Deep Cleans",
      desc: "The serious scrub. Inside cabinets, behind appliances, under everything.",
      color: "from-purple to-lavender",
    },
    {
      emoji: "📦",
      title: "Move-In",
      desc: "Moving somewhere new? Yara gets it spotless before you unpack.",
      color: "from-lavender to-sparkle",
    },
    {
      emoji: "🚚",
      title: "Move-Out",
      desc: "Get that deposit back. Yara leaves it better than you found it.",
      color: "from-purple-deep to-purple",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-lavender-soft relative overflow-hidden">
      {/* Decorative sparkles */}
      <Sparkle className="absolute top-12 left-[8%] text-lavender/40 animate-sparkle" size={18} />
      <Sparkle className="absolute bottom-20 right-[12%] text-purple/15 animate-sparkle-delay" size={22} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">What We Clean</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              If it has walls and floors,{" "}
              <span className="text-purple">Yara&apos;s on it.</span>
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <R key={s.title} delay={Math.min(i + 1, 4)}>
              <a
                href={PHONE_HREF}
                className="fun-card group block bg-white rounded-2xl p-6 sm:p-7 shadow-md shadow-purple/5 hover:shadow-xl hover:shadow-purple/10 border border-lavender-light/50 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <span className="text-3xl block mb-4 group-hover:animate-wiggle">{s.emoji}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-purple group-hover:text-white/90 text-sm font-semibold transition-colors">
                    Call for a quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </R>
          ))}
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
    { num: "1", emoji: "📞", title: "Give Yara a Ring", desc: "Tell her about your place and what you need. She'll set up a time to come take a look." },
    { num: "2", emoji: "🏡", title: "Free Walk-Through", desc: "Yara comes to see the space herself and gives you a price right there. No pressure, no games." },
    { num: "3", emoji: "🧹", title: "Sit Back & Relax", desc: "Pick your schedule (weekly, monthly, or one-time) and let Yara work her magic." },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Three steps to <span className="text-purple">sparkle.</span>
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <R key={step.num} delay={Math.min(i + 1, 3)}>
              <div className="text-center relative">
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden sm:block absolute top-10 left-[60%] w-[calc(100%-20%)] border-t-2 border-dashed border-lavender" />
                )}

                <div className="relative inline-block mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-lavender-soft border-2 border-lavender flex items-center justify-center text-4xl shadow-md">
                    {step.emoji}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            </R>
          ))}
        </div>

        <R delay={4}>
          <div className="mt-14 text-center">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-3 bg-purple text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-purple/25 hover:shadow-xl hover:shadow-purple/30 hover:-translate-y-1 hover:bg-purple-dark transition-all"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
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
      <Bubbles className="absolute inset-0 pointer-events-none opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <R>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-lavender via-lavender-light to-white border border-lavender flex items-center justify-center shadow-lg overflow-hidden relative">
                <Image src="/logo.png" alt="Yara's Cleaning" width={400} height={400} className="w-[85%] h-auto object-contain" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg border border-lavender-light p-3 sm:p-4 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="font-bold text-foreground text-sm">Licensed</p>
                    <p className="text-xs text-muted">& Insured</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-3 sm:-left-6 bg-white rounded-xl shadow-lg border border-lavender-light p-3 animate-float-delay">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />)}
                  </div>
                  <span className="text-xs font-bold text-foreground">5-Star</span>
                </div>
              </div>
            </div>
          </R>

          {/* Text */}
          <div>
            <R>
              <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">Meet Yara</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                She doesn&apos;t send a crew.{" "}
                <span className="text-purple">She shows up.</span>
              </h2>
            </R>

            <R delay={1}>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Most cleaning companies send whoever&apos;s available. Yara does things
                  differently. She started this business because she thinks you should
                  actually know and trust the person cleaning your home.
                </p>
                <p>
                  She walks through every space before quoting a price because
                  every home is different. She&apos;s the type who notices the baseboards,
                  the corners, the spots behind the door that other services walk past.
                </p>
                <p>
                  Whether it&apos;s a weekly cleaning for a busy family or a deep
                  clean before moving day, Yara treats your space like her own.
                </p>
              </div>
            </R>

            <R delay={2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { emoji: "✅", label: "Licensed & Insured" },
                  { emoji: "🧹", label: "Yara, Every Visit" },
                  { emoji: "💰", label: "No Hidden Fees" },
                  { emoji: "📅", label: "Flexible Scheduling" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-lavender-light/50">
                    <span className="text-lg">{item.emoji}</span>
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
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <R>
          <div className="bg-lavender-soft rounded-3xl p-8 sm:p-12 border border-lavender/30 relative overflow-hidden">
            <Sparkle className="absolute top-4 right-6 text-lavender/40 animate-sparkle" size={20} />
            <Sparkle className="absolute bottom-6 left-8 text-purple/15 animate-sparkle-delay" size={16} />

            <span className="text-5xl sm:text-6xl block mb-4">💬</span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-snug">
              &ldquo;I clean your space like it&apos;s my own home.
              That&apos;s not a sales pitch. That&apos;s just how I
              was raised.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-lg">🧹</div>
              <div className="text-left">
                <p className="font-bold text-foreground text-sm">Yara</p>
                <p className="text-muted text-xs">Founder & Lead Cleaner</p>
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
    "Yara does the cleaning herself. Every time.",
    "Free walk-through before you commit to anything",
    "Fixed pricing, no surprise add-ons",
    "Fully licensed and insured",
    "Weekly, monthly, or one-time. Your call.",
    "Houses, apartments, offices, deep cleans, move-in/out",
    "Same person, same quality, every visit",
    "She treats your space like her own",
  ];

  return (
    <section className="py-20 sm:py-28 bg-lavender-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <R>
              <p className="text-purple font-bold text-sm uppercase tracking-widest mb-3">What You Get</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                The Yara difference,{" "}
                <span className="text-purple">in a nutshell.</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                No contracts. No gimmicks. Just Yara and a clean you
                can actually see the difference in.
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

      {/* Sparkles */}
      <Sparkle className="absolute top-16 left-[10%] text-white/10 animate-sparkle" size={24} />
      <Sparkle className="absolute top-1/3 right-[15%] text-white/8 animate-sparkle-delay" size={18} />
      <Sparkle className="absolute bottom-20 left-[20%] text-white/6 animate-sparkle-delay-2" size={20} />
      <Bubbles className="absolute inset-0 pointer-events-none opacity-30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lavender/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <R>
          <span className="text-5xl block mb-6">✨</span>
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
            {["Free Walk-Through", "No Obligation", "Licensed & Insured"].map((item) => (
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
            <Image src="/logo.png" alt="Yara's Cleaning" width={120} height={45} className="h-10 w-auto" />
            <span className="text-faint text-sm">&copy; {year}</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-faint flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-purple" />
              Licensed & Insured
            </span>
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

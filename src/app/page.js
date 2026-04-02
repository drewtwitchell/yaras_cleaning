"use client";

import { useState, useEffect, useRef } from "react";

const PHONE = "(508) 735-4579";
const PHONE_HREF = "tel:+15087354579";

/* ─── Scroll Reveal ─── */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
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

/* ─── Minimal Icons ─── */

function PhoneIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
}
function ArrowDown({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>;
}
function ArrowRight({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function CheckIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}

/* ════════════════════════════════════════════
   HEADER — minimal, just logo + phone
   ════════════════════════════════════════════ */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
          Yara&apos;s<span className="text-primary">.</span>
        </a>

        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <a href="#story" className="text-muted hover:text-foreground transition-colors">Story</a>
          <a href="#services" className="text-muted hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-muted hover:text-foreground transition-colors">Process</a>
          <a href={PHONE_HREF} className="text-foreground font-semibold hover:text-primary transition-colors">{PHONE}</a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden p-2" aria-label="Menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="sm:hidden px-5 pb-6 flex flex-col gap-4 bg-background/95 backdrop-blur-md">
          <a href="#story" onClick={() => setMenuOpen(false)} className="text-muted hover:text-foreground transition-colors py-1">Story</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-muted hover:text-foreground transition-colors py-1">Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-muted hover:text-foreground transition-colors py-1">Process</a>
          <a href={PHONE_HREF} className="text-foreground font-semibold">{PHONE}</a>
        </nav>
      )}
    </header>
  );
}

/* ════════════════════════════════════════════
   HERO — Full-height, one bold statement
   ════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <R>
          <p className="text-muted text-sm sm:text-base font-medium tracking-wide uppercase mb-6 sm:mb-8">
            Licensed & Insured Cleaning
          </p>
        </R>

        <R delay={1}>
          <h1 className="text-[clamp(2.8rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-tight max-w-5xl">
            Not just clean.
            <br />
            <span className="text-primary">Yara</span> clean.
          </h1>
        </R>

        <R delay={2}>
          <p className="mt-8 sm:mt-10 text-muted text-lg sm:text-xl max-w-lg leading-relaxed">
            Homes. Apartments. Offices. Deep cleans. Move-ins. Move-outs.
            One woman who does the work herself. Every time.
          </p>
        </R>

        <R delay={3}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start gap-4">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-base font-semibold hover:bg-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Free Estimate - Call Yara
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 text-muted hover:text-foreground px-4 py-4 text-base font-medium transition-colors">
              Scroll to learn more
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </R>
      </div>

      {/* Subtle side accent */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
    </section>
  );
}

/* ════════════════════════════════════════════
   STATEMENT — Big text interlude
   ════════════════════════════════════════════ */

function Statement() {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12 bg-dark text-white">
      <div className="max-w-5xl mx-auto">
        <R>
          <p className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold leading-snug tracking-tight">
            Most cleaning companies send whoever&apos;s available.{" "}
            <span className="text-faint">
              Yara shows up herself, every single time. She catches what
              others miss, actually cares about the corners, and won&apos;t
              leave until she&apos;s happy with it.
            </span>
          </p>
        </R>
        <R delay={1}>
          <div className="mt-12 flex items-center gap-4">
            <hr className="hr-accent" />
            <span className="text-faint text-sm font-medium uppercase tracking-widest">Fully Licensed & Insured</span>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   STORY — Asymmetric two-column about section
   ════════════════════════════════════════════ */

function Story() {
  return (
    <section id="story" className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left — narrow label column */}
        <div className="lg:col-span-4">
          <R>
            <p className="text-sm text-muted font-medium uppercase tracking-widest mb-4">The Story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Cleaning is personal. <span className="text-primary">It should feel that way.</span>
            </h2>
          </R>
        </div>

        {/* Right — story text */}
        <div className="lg:col-span-7 lg:col-start-6">
          <R>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Yara started this business because she thinks you should know
                the person cleaning your home. Not a rotating crew
                of strangers. Not a franchise. <span className="text-highlight">Just Yara, doing the work
                herself.</span>
              </p>
              <p>
                She walks through every space before quoting a price because
                every home is different. She&apos;s the person who notices the
                baseboards, the corners, the spots behind the door that other
                services walk right past.
              </p>
              <p>
                Weekly cleanings for busy families, deep cleans when you need
                a reset, keeping your office looking sharp for clients. Whatever
                it is, Yara treats your space like it&apos;s her own.
              </p>
            </div>
          </R>

          <R delay={1}>
            <div className="mt-10 pt-8 border-t border-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Licensed", detail: "Fully registered" },
                { label: "Insured", detail: "Full liability" },
                { label: "Personal", detail: "Yara, every time" },
                { label: "Transparent", detail: "No hidden fees" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-faint mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SERVICES — Not a grid. A stacked list with presence.
   ════════════════════════════════════════════ */

function Services() {
  const services = [
    { name: "Houses", detail: "Full home cleaning, top to bottom. Kitchens, bathrooms, bedrooms, the works." },
    { name: "Apartments", detail: "Studios to multi-bedrooms. Same thorough clean, sized to your place." },
    { name: "Offices & Businesses", detail: "Keep your workspace looking professional for your team and your clients." },
    { name: "Deep Cleans", detail: "The serious scrub. Inside cabinets, behind appliances, under everything." },
    { name: "Move-In", detail: "Moving somewhere new? Yara gets it spotless before you unpack." },
    { name: "Move-Out", detail: "Get that deposit back. Yara leaves it better than you found it." },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <R>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-sm text-muted font-medium uppercase tracking-widest mb-4">Services</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-md">
                Whatever the space, <span className="text-primary">Yara cleans it.</span>
              </h2>
            </div>
            <a href={PHONE_HREF} className="text-muted hover:text-primary text-sm font-medium inline-flex items-center gap-2 transition-colors shrink-0">
              Need something custom? Call Yara <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </R>

        {/* Service list — large typography, not cards */}
        <div className="border-t border-foreground/10">
          {services.map((s, i) => (
            <R key={s.name} delay={Math.min(i + 1, 4)}>
              <a
                href={PHONE_HREF}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 sm:py-8 border-b border-foreground/10 hover:pl-4 transition-all"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-faint text-sm font-medium tabular-nums w-6">0{i + 1}</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {s.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <p className="text-muted text-sm sm:text-base max-w-sm hidden sm:block">{s.detail}</p>
                  <div className="w-10 h-10 rounded-full border border-foreground/10 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all shrink-0">
                    <ArrowRight className="w-4 h-4 text-faint group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-muted text-sm mt-2 sm:hidden ml-10">{s.detail}</p>
              </a>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   NUMBERS — Tight stat strip
   ════════════════════════════════════════════ */

function Numbers() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 text-center">
        {[
          { big: "6", label: "service types", sub: "homes to offices" },
          { big: "1", label: "cleaner", sub: "Yara, every visit" },
          { big: "0", label: "hidden fees", sub: "transparent pricing" },
          { big: "∞", label: "attention to detail", sub: "she doesn't miss" },
        ].map((s, i) => (
          <R key={s.label} delay={Math.min(i + 1, 4)}>
            <div>
              <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white/90">{s.big}</p>
              <p className="text-white font-semibold mt-2 text-sm uppercase tracking-wider">{s.label}</p>
              <p className="text-white/30 text-xs mt-1">{s.sub}</p>
            </div>
          </R>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PROCESS — Three horizontal steps
   ════════════════════════════════════════════ */

function Process() {
  const steps = [
    {
      num: "01",
      title: "Call Yara",
      text: "Tell her about your space, what you need, when you need it. She'll find a time to come see it in person.",
    },
    {
      num: "02",
      title: "Walk-through & Quote",
      text: "Yara comes to see the space herself and gives you a fixed price right there. No obligations, no back-and-forth.",
    },
    {
      num: "03",
      title: "Relax",
      text: "Pick your schedule (weekly, monthly, or one-time) and that's it. Yara handles the rest.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <R>
          <p className="text-sm text-muted font-medium uppercase tracking-widest mb-4">Process</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-lg mb-16">
            One phone call. <span className="text-primary">That&apos;s it.</span>
          </h2>
        </R>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-16">
          {steps.map((step, i) => (
            <R key={step.num} delay={Math.min(i + 1, 3)}>
              <div className="relative">
                <span className="text-7xl sm:text-8xl font-black text-foreground/[0.04] absolute -top-6 -left-2 select-none">{step.num}</span>
                <div className="relative">
                  <hr className="hr-accent mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PROMISE — Big quote-style section
   ════════════════════════════════════════════ */

function Promise() {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <R>
          <span className="quote-mark text-8xl sm:text-[10rem] block mb-[-1rem] sm:mb-[-2rem]">&ldquo;</span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
            I clean your space like it&apos;s my own home. That&apos;s
            not a sales pitch. That&apos;s just how I was raised.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <hr className="hr-accent" />
            <span className="text-muted text-sm font-medium">Yara, Founder</span>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CHECKLIST — What you get, no fluff
   ════════════════════════════════════════════ */

function Checklist() {
  const items = [
    "Yara does the cleaning herself. Every time.",
    "Free walkthrough before you commit to anything",
    "Fixed pricing, no surprise add-ons",
    "Fully licensed and insured",
    "Weekly, monthly, or one-time. Your call.",
    "Houses, apartments, offices, deep cleans, move-in/out",
    "Same person, same quality, every visit",
    "She treats your space like her own",
  ];

  return (
    <section className="py-20 sm:py-32 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <R>
            <p className="text-sm text-muted font-medium uppercase tracking-widest mb-4">The Promise</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              What you get when you hire <span className="text-primary">Yara.</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              No contracts. No gimmicks. Just Yara and a clean you can
              actually see the difference in.
            </p>
          </R>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-0">
            {items.map((item, i) => (
              <R key={item} delay={Math.min(Math.floor(i / 2) + 1, 4)}>
                <div className="flex items-start gap-4 py-4 border-b border-foreground/5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-foreground/80 text-base">{item}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA — Clean, confident
   ════════════════════════════════════════════ */

function CTA() {
  return (
    <section className="py-24 sm:py-36 px-5 sm:px-8 lg:px-12 bg-dark relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <R>
          <p className="text-faint text-sm font-medium uppercase tracking-widest mb-6">Ready?</p>
        </R>
        <R delay={1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your space deserves<br />
            <span className="text-primary">better.</span>
          </h2>
        </R>
        <R delay={2}>
          <p className="mt-6 text-white/40 text-lg max-w-md mx-auto leading-relaxed">
            Call Yara. She&apos;ll come see your space, give you
            a straight price, and you decide. Simple as that.
          </p>
        </R>
        <R delay={3}>
          <a
            href={PHONE_HREF}
            className="group mt-10 inline-flex items-center gap-3 bg-white text-dark px-9 py-5 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-colors shadow-2xl shadow-black/20"
          >
            <PhoneIcon className="w-5 h-5" />
            {PHONE}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </R>
        <R delay={4}>
          <p className="mt-6 text-white/25 text-sm">
            Free estimate &middot; No obligation &middot; Licensed & Insured
          </p>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FOOTER — Minimal
   ════════════════════════════════════════════ */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 px-5 sm:px-8 lg:px-12 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
        <div className="flex items-center gap-6">
          <span className="font-extrabold text-foreground">Yara&apos;s<span className="text-primary">.</span></span>
          <span className="text-faint">&copy; {year}</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-faint">Licensed & Insured</span>
          <a href={PHONE_HREF} className="text-foreground font-semibold hover:text-primary transition-colors">{PHONE}</a>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <Story />
        <Services />
        <Numbers />
        <Process />
        <Promise />
        <Checklist />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

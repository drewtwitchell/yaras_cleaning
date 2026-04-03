"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PHONE = "(508) 735-4579";
const PHONE_HREF = "tel:+15087354579";
const SMS_HREF = "sms:+15087354579";

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
function MessageIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
}
function CheckIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function XIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
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
function HeartIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
}
function MapPinIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function EyeIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md shadow-blue/5" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
        <a href="#" className="shrink-0">
          <Image
            src="/logo-new.png"
            alt="Yara's Cleaning - Spotless Homes, Caring Service"
            width={847}
            height={533}
            className="h-14 sm:h-18 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          <a href="#services" className="text-muted hover:text-blue transition-colors">Services</a>
          <a href="#why-yaras" className="text-muted hover:text-blue transition-colors">Why Yara&apos;s</a>
          <a href="#reviews" className="text-muted hover:text-blue transition-colors">Reviews</a>
          <a href="#about" className="text-muted hover:text-blue transition-colors">About</a>
          <a href="#faq" className="text-muted hover:text-blue transition-colors">FAQ</a>
          <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-full font-semibold hover:bg-teal-dark shadow-md shadow-teal/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <MessageIcon className="w-4 h-4" />
            Text Us
          </a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-dark shadow-md shadow-blue/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <PhoneIcon className="w-4 h-4" />
            Call Now
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
        <nav className="md:hidden px-4 pb-5 flex flex-col gap-2 bg-white/95 backdrop-blur-md border-t border-sky">
          {[
            { label: "Services", href: "#services" },
            { label: "Why Yara's", href: "#why-yaras" },
            { label: "Reviews", href: "#reviews" },
            { label: "About", href: "#about" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-muted hover:text-blue font-medium py-2.5 px-2 rounded-lg hover:bg-sky-light transition-all">
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 mt-1">
            <a href={SMS_HREF} className="flex-1 inline-flex items-center justify-center gap-2 bg-teal text-white px-4 py-3 rounded-full font-semibold shadow-md">
              <MessageIcon className="w-4 h-4" />
              Text Us
            </a>
            <a href={PHONE_HREF} className="flex-1 inline-flex items-center justify-center gap-2 bg-blue text-white px-4 py-3 rounded-full font-semibold shadow-md">
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ════════════════════════════════════════
   HERO — Personal, not template
   ════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-light via-white/80 to-white" />
      <BubbleField />
      <Sparkle className="absolute top-32 right-[18%] text-teal/25 twinkle" size={14} />
      <Sparkle className="absolute top-52 left-[12%] text-sparkle twinkle twinkle-delay-1" size={10} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Above-the-fold trust strip */}
        <R>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-white border border-teal/20 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-dark shadow-sm">
              <MapPinIcon className="w-3.5 h-3.5 text-teal" />
              Worcester &bull; Boston &bull; Southern NH
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-teal/20 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-dark shadow-sm">
              <DollarIcon className="w-3.5 h-3.5 text-teal" />
              Free Estimates
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-teal/20 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-dark shadow-sm">
              <CalendarIcon className="w-3.5 h-3.5 text-teal" />
              Reliable Recurring Cleanings
            </span>
            <span className="inline-flex items-center gap-1.5 bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-full text-xs font-semibold text-teal-dark shadow-sm">
              <MessageIcon className="w-3.5 h-3.5 text-teal" />
              Text or Call Today
            </span>
          </div>
        </R>

        <div className="max-w-3xl mx-auto text-center">
          <R delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Your home deserves someone
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-teal to-teal-dark">
                who actually cares.
              </span>
            </h1>
          </R>

          <R delay={2}>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Yara doesn&apos;t send strangers to your house. She walks through
              your space herself, gives you an honest price, and her team cleans
              it like it&apos;s their own. That&apos;s not a tagline &mdash; it&apos;s how
              every single job works.
            </p>
          </R>

          <R delay={3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SMS_HREF}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-teal text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-1 hover:bg-teal-dark transition-all"
              >
                <MessageIcon className="w-5 h-5" />
                Text Us for a Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={PHONE_HREF} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue font-semibold px-6 py-4 rounded-full border-2 border-blue/20 hover:bg-sky-light transition-all">
                <PhoneIcon className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
          </R>

          {/* Social proof metric */}
          <R delay={4}>
            <div className="mt-8 inline-flex items-center gap-3 bg-warm-light border border-warm/20 rounded-full px-5 py-2.5">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-4 h-4 text-gold" />)}
              </div>
              <span className="text-sm font-medium text-foreground">
                Trusted by families across MA & NH
              </span>
            </div>
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
   SERVICES
   ════════════════════════════════════════ */

function Services() {
  const services = [
    { icon: HomeIcon, title: "Houses", desc: "Top to bottom. The kitchen you cook in, the bathroom you rush through, the bedroom you collapse into. All of it.", gradient: "from-blue to-blue-dark", cta: "Book a home cleaning" },
    { icon: BuildingIcon, title: "Apartments", desc: "Studio or three-bedroom, we make it feel twice the size. Same standards, scaled to your space.", gradient: "from-teal to-teal-dark", cta: "Get your apartment sparkling" },
    { icon: BriefcaseIcon, title: "Offices", desc: "Your clients notice a clean office. Your team does too. Let us keep it sharp.", gradient: "from-blue-dark to-blue-deep", cta: "Clean up your workspace" },
    { icon: TargetIcon, title: "Deep Cleans", desc: "Inside cabinets, behind the fridge, under the things you forgot were there. The reset button for your home.", gradient: "from-teal to-blue", cta: "Schedule a deep clean" },
    { icon: BoxIcon, title: "Move-In Ready", desc: "Nobody wants to unpack into someone else's dust. We get it spotless before your first box hits the floor.", gradient: "from-blue to-teal", cta: "Start fresh" },
    { icon: TruckIcon, title: "Move-Out Clean", desc: "Get your deposit back. We leave it cleaner than the day you signed the lease.", gradient: "from-blue-deep to-blue", cta: "Get that deposit back" },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              What Yara&apos;s team <span className="text-teal">can do for you</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Every job starts with Yara seeing your space in person.
              No cookie-cutter quotes, no guessing games.
            </p>
          </div>
        </R>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <R key={s.title} delay={Math.min(i + 1, 4)}>
                <a
                  href={SMS_HREF}
                  className="service-card group block bg-white rounded-2xl p-6 sm:p-7 shadow-md shadow-blue/5 hover:shadow-xl hover:shadow-blue/15 border border-sky relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-sky border border-teal/15 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:border-white/30 transition-all">
                      <Icon className="w-6 h-6 text-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-white mb-2 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-teal group-hover:text-white/90 text-sm font-semibold transition-colors">
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
   WHY YARA'S — Comparison (not generic)
   ════════════════════════════════════════ */

function WhyYaras() {
  const comparisons = [
    { label: "In-person walk-through before every quote", yaras: true, others: false },
    { label: "Same team every visit — not random strangers", yaras: true, others: false },
    { label: "Yara personally oversees quality", yaras: true, others: false },
    { label: "Honest, flat pricing — no hidden fees", yaras: true, others: false },
    { label: "Licensed & fully insured", yaras: true, others: "Sometimes" },
    { label: "We notice the baseboards, the corners, behind the doors", yaras: true, others: false },
    { label: "Flexible scheduling — life happens, we adapt", yaras: true, others: false },
    { label: "Text Yara directly — no call centers", yaras: true, others: false },
  ];

  return (
    <section id="why-yaras" className="py-20 sm:py-28 bg-gradient-to-b from-cream to-warm-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Why families choose <span className="text-blue">Yara&apos;s</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              We&apos;re not a franchise. We&apos;re not an app. We&apos;re a real team
              that takes care of real homes.
            </p>
          </div>
        </R>

        <R delay={1}>
          <div className="bg-white rounded-3xl shadow-xl border border-warm/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] items-center px-5 sm:px-8 py-4 bg-sky-light border-b border-sky">
              <span className="text-sm font-bold text-foreground" />
              <span className="text-center text-sm font-bold text-blue">Yara&apos;s</span>
              <span className="text-center text-sm font-bold text-muted">Others</span>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] items-center px-5 sm:px-8 py-4 ${i < comparisons.length - 1 ? "border-b border-sky/60" : ""} hover:bg-sky-light/50 transition-colors`}
              >
                <span className="text-sm text-foreground font-medium pr-4">{row.label}</span>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-teal" />
                  </div>
                </div>
                <div className="flex justify-center">
                  {row.others === true ? (
                    <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-teal" />
                    </div>
                  ) : row.others === false ? (
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                      <XIcon className="w-4 h-4 text-red-300" />
                    </div>
                  ) : (
                    <span className="text-xs text-faint font-medium">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </R>

        <R delay={2}>
          <div className="mt-10 text-center">
            <a
              href={SMS_HREF}
              className="group inline-flex items-center gap-2 bg-teal text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-teal/20 hover:bg-teal-dark hover:-translate-y-0.5 transition-all"
            >
              <MessageIcon className="w-4 h-4" />
              See the difference — text Yara
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   YARA'S PROMISE (Named guarantee)
   ════════════════════════════════════════ */

function Promise() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="relative bg-gradient-to-br from-sky-light via-white to-teal-light rounded-3xl p-8 sm:p-12 border border-teal/10 shadow-lg overflow-hidden">
            <Sparkle className="absolute top-6 right-8 text-teal/15 twinkle" size={20} />
            <Sparkle className="absolute bottom-8 left-10 text-blue/10 twinkle twinkle-delay-2" size={14} />

            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal to-blue flex items-center justify-center shadow-lg">
                  <ShieldIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                  Yara&apos;s Sparkle Promise
                </h3>
                <p className="text-muted leading-relaxed text-lg">
                  If something isn&apos;t right, tell Yara. She&apos;ll come back
                  and make it right &mdash; no awkward conversations, no runaround.
                  Your home should feel like yours again when we leave, and if it
                  doesn&apos;t, that&apos;s on us.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-foreground">
                  <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-teal" />
                    100% satisfaction
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-teal" />
                    We&apos;ll come back & fix it
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-teal" />
                    No questions asked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   REVIEWS — Real customers
   ════════════════════════════════════════ */

function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Worcester, MA",
      text: "Yara and her team are amazing! They deep cleaned my entire house before we moved in and it looked brand new. I've been using them weekly ever since. Can't recommend enough!",
      rating: 5,
    },
    {
      name: "Mike D.",
      location: "Nashua, NH",
      text: "Finally found a cleaning service I can trust. Yara does a walkthrough before giving a price — no surprises. My house has never been cleaner. Worth every penny.",
      rating: 5,
    },
    {
      name: "Jessica R.",
      location: "Boston, MA",
      text: "I was nervous about having someone clean my apartment, but Yara made me feel so comfortable. She's thorough, professional, and genuinely cares about doing a great job.",
      rating: 5,
    },
    {
      name: "Tom & Linda K.",
      location: "Hudson, NH",
      text: "We've tried other cleaning services before and none compare. Yara's team catches every detail — baseboards, corners, behind furniture. Our home feels fresh every time.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-sky-light relative overflow-hidden">
      <BubbleField />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Hear it from the people <span className="text-blue">who let us in.</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              We don&apos;t take your trust lightly. Here&apos;s what our clients say.
            </p>
          </div>
        </R>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <R key={review.name} delay={Math.min(i + 1, 4)}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md shadow-blue/5 border border-sky/60 relative">
                <div className="absolute top-4 right-6 text-5xl text-teal/8 font-serif leading-none select-none">&ldquo;</div>

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className={`w-4 h-4 ${s <= review.rating ? "text-gold" : "text-gray-200"}`} />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-blue flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>

        <R delay={4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md border border-sky/60">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} className="w-5 h-5 text-gold" />)}
              </div>
              <span className="font-bold text-foreground text-sm">
                Loved by families across MA & NH
              </span>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   HOW IT WORKS
   ════════════════════════════════════════ */

function HowItWorks() {
  const steps = [
    { num: "1", icon: MessageIcon, title: "Text or Call Yara", desc: "Tell her about your place — size, what you need, any concerns. She'll find a time that works.", color: "bg-teal" },
    { num: "2", icon: EyeIcon, title: "She Comes to You", desc: "Yara walks through your space in person. She sees the counters, the corners, the chaos. Then she gives you an honest price on the spot.", color: "bg-blue" },
    { num: "3", icon: () => <Sparkle className="text-white" size={24} />, title: "You Come Home to Clean", desc: "Pick weekly, biweekly, monthly, or one-time. Same team, same standard, every time.", color: "bg-warm" },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              How it works <span className="text-teal">(it&apos;s simple)</span>
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-5 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <R key={step.num} delay={Math.min(i + 1, 3)}>
                <div className="text-center relative">
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-10 left-[60%] w-[calc(100%-20%)] border-t-2 border-dashed border-teal/25" />
                  )}

                  <div className="relative inline-block mb-5">
                    <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-blue text-blue text-xs font-bold flex items-center justify-center shadow-sm">
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
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   ABOUT YARA — Her real story
   ════════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-cream to-warm-light relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <R>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-warm/10">
                <Image
                  src="/logo-new.png"
                  alt="Yara's Cleaning"
                  width={847}
                  height={533}
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative leaf accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/5 rounded-full blur-xl" />
            </div>
          </R>

          <div>
            <R>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                This isn&apos;t a side hustle.
                <br />
                <span className="text-blue">This is Yara&apos;s life&apos;s work.</span>
              </h2>
            </R>

            <R delay={1}>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Yara started this business because she believes you should
                  know and trust the people who walk into your home. Not a
                  random crew from an app &mdash; a real team, led by someone
                  who cares about every baseboard, every corner, every spot
                  behind the door that other services walk right past.
                </p>
                <p>
                  She personally visits every new home before quoting a price.
                  Not because she has to &mdash; because every home is different,
                  and a phone estimate isn&apos;t fair to you. She wants to see your
                  space, understand what you need, and give you a number you
                  can trust.
                </p>
                <p>
                  Whether it&apos;s your weekly clean, a deep scrub before the
                  holidays, or making sure your office looks sharp for Monday,
                  Yara&apos;s team treats your space the way they treat their own.
                </p>
              </div>
            </R>

            <R delay={2}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: ShieldIcon, label: "Licensed & Insured" },
                  { icon: UsersIcon, label: "Consistent Team" },
                  { icon: DollarIcon, label: "Honest Pricing" },
                  { icon: CalendarIcon, label: "Your Schedule" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-warm/10">
                    <item.icon className="w-4 h-4 text-teal shrink-0" />
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
   SERVICE AREA
   ════════════════════════════════════════ */

function CoverageMap() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <rect width="400" height="450" rx="24" fill="white" />

        <line x1="30" y1="150" x2="370" y2="150" stroke="#a8d8ea" strokeWidth="1" strokeDasharray="6 4" />
        <text x="50" y="140" fill="#a0adb8" fontSize="11" fontWeight="600">NEW HAMPSHIRE</text>
        <text x="50" y="168" fill="#a0adb8" fontSize="11" fontWeight="600">MASSACHUSETTS</text>

        <circle cx="200" cy="100" r="75" fill="#48b8a0" opacity="0.08" />
        <circle cx="200" cy="100" r="75" stroke="#48b8a0" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />
        <circle cx="250" cy="240" r="90" fill="#2c5f8a" opacity="0.08" />
        <circle cx="250" cy="240" r="90" stroke="#2c5f8a" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />
        <circle cx="120" cy="280" r="65" fill="#2c5f8a" opacity="0.08" />
        <circle cx="120" cy="280" r="65" stroke="#2c5f8a" strokeWidth="2" opacity="0.2" strokeDasharray="4 3" />
        <ellipse cx="200" cy="220" rx="170" ry="170" fill="#48b8a0" opacity="0.04" />

        <circle cx="175" cy="60" r="4" fill="#48b8a0" />
        <text x="187" y="64" fill="#2d3a4a" fontSize="10" fontWeight="600">Nashua</text>
        <circle cx="250" cy="80" r="4" fill="#48b8a0" />
        <text x="262" y="84" fill="#2d3a4a" fontSize="10" fontWeight="600">Salem</text>
        <circle cx="155" cy="115" r="3" fill="#a8d8ea" />
        <text x="118" y="112" fill="#6b7b8d" fontSize="10">Hudson</text>
        <circle cx="210" cy="100" r="3" fill="#a8d8ea" />
        <text x="195" y="90" fill="#6b7b8d" fontSize="10">Pelham</text>

        <circle cx="290" cy="220" r="6" fill="#2c5f8a" />
        <text x="302" y="224" fill="#2d3a4a" fontSize="12" fontWeight="700">Boston</text>
        <circle cx="260" cy="195" r="3" fill="#a8d8ea" />
        <text x="270" y="199" fill="#6b7b8d" fontSize="10">Cambridge</text>
        <circle cx="230" cy="235" r="3" fill="#a8d8ea" />
        <text x="240" y="239" fill="#6b7b8d" fontSize="10">Newton</text>
        <circle cx="300" cy="260" r="3" fill="#a8d8ea" />
        <text x="310" y="264" fill="#6b7b8d" fontSize="10">Quincy</text>
        <circle cx="240" cy="265" r="3" fill="#a8d8ea" />
        <text x="250" y="269" fill="#6b7b8d" fontSize="10">Brookline</text>

        <circle cx="115" cy="275" r="5" fill="#2c5f8a" />
        <text x="72" y="265" fill="#2d3a4a" fontSize="12" fontWeight="700">Worcester</text>
        <circle cx="145" cy="300" r="3" fill="#a8d8ea" />
        <text x="155" y="304" fill="#6b7b8d" fontSize="10">Shrewsbury</text>
        <circle cx="100" cy="310" r="3" fill="#a8d8ea" />
        <text x="60" y="314" fill="#6b7b8d" fontSize="10">Auburn</text>

        <circle cx="50" cy="400" r="8" fill="#48b8a0" opacity="0.15" stroke="#48b8a0" strokeWidth="1.5" />
        <text x="66" y="404" fill="#6b7b8d" fontSize="11">Coverage Area</text>
        <circle cx="170" cy="400" r="4" fill="#2c5f8a" />
        <text x="182" y="404" fill="#6b7b8d" fontSize="11">Major City</text>
        <circle cx="275" cy="400" r="3" fill="#a8d8ea" />
        <text x="285" y="404" fill="#6b7b8d" fontSize="11">Town</text>
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
    <section id="areas" className="py-20 sm:py-28 bg-sky-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <R>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Three regions. <span className="text-blue">One standard.</span>
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              From Southern New Hampshire through Greater Boston and out to
              Worcester &mdash; same team, same quality, wherever you are.
            </p>
          </div>
        </R>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <R>
            <CoverageMap />
          </R>

          <div className="space-y-6">
            {regions.map((region, i) => (
              <R key={region.name} delay={Math.min(i + 1, 3)}>
                <div className="bg-white rounded-2xl p-6 shadow-md shadow-blue/5 border border-sky/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-teal" />
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
                  href={SMS_HREF}
                  className="group inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors text-sm"
                >
                  <MessageIcon className="w-4 h-4" />
                  Text us and ask
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
    <div className="border-b border-sky">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-foreground font-semibold pr-4 group-hover:text-blue transition-colors">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-sky flex items-center justify-center transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="w-4 h-4 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
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
      q: "Will the same people clean my home each time?",
      a: "Yes! We believe consistency matters. You'll have the same team every visit so they know your home, your preferences, and your standards.",
    },
    {
      q: "Can I change my cleaning schedule?",
      a: "Of course. Life happens. Just give us a heads up and we'll adjust your schedule. No penalties, no hassle.",
    },
    {
      q: "What areas do you serve?",
      a: "Greater Boston, Southern New Hampshire (Nashua, Hudson, Salem, Pelham area), and the Worcester area. Not sure if we reach you? Text or call and we'll let you know.",
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Questions? <span className="text-blue">Answers.</span>
            </h2>
          </div>
        </R>

        <R delay={1}>
          <div className="border-t border-sky">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-blue-dark to-teal-dark" />
      <BubbleField />

      <Sparkle className="absolute top-16 left-[12%] text-white/10 twinkle" size={20} />
      <Sparkle className="absolute top-1/3 right-[18%] text-white/8 twinkle twinkle-delay-1" size={14} />
      <Sparkle className="absolute bottom-24 left-[25%] text-white/6 twinkle twinkle-delay-2" size={16} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/8 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <R>
          <Sparkle className="text-white/40 mx-auto mb-6" size={32} />
        </R>
        <R delay={1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your space is waiting.
          </h2>
        </R>
        <R delay={2}>
          <p className="mt-6 text-white/50 text-lg max-w-md mx-auto">
            Text Yara. She&apos;ll come see your space, give you a straight
            price, and you decide. No pressure, no pitch.
          </p>
        </R>
        <R delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SMS_HREF}
              className="group inline-flex items-center gap-3 bg-teal text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-teal-dark hover:shadow-2xl transition-all hover:-translate-y-1 shadow-xl"
            >
              <MessageIcon className="w-6 h-6" />
              Text Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-3 bg-white/10 text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all border border-white/20"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </R>
        <R delay={4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/30 text-sm">
            {["Free Walk-Through", "No Obligation", "Licensed & Insured"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckIcon className="w-3.5 h-3.5 text-teal" />
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
    <footer className="bg-blue-deep text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo-new.png"
              alt="Yara's Cleaning"
              width={847}
              height={533}
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Spotless homes, caring service. Licensed,
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
              <li><a href="#why-yaras" className="hover:text-white transition-colors">Why Yara&apos;s</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Yara</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-4">
              <a
                href={SMS_HREF}
                className="flex items-center gap-2 text-teal hover:text-white transition-colors font-bold text-lg"
              >
                <MessageIcon className="w-5 h-5" />
                Text Us
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-teal hover:text-white transition-colors font-bold text-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
            <div className="space-y-2 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-4 h-4 text-teal/50" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <DollarIcon className="w-4 h-4 text-teal/50" />
                Cash, Check & Venmo
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-white/20">
          &copy; {year}&nbsp;Yara&apos;s Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   STICKY MOBILE BUTTONS
   ════════════════════════════════════════ */

function StickyMobileButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-50 flex gap-2">
      <a
        href={SMS_HREF}
        className="flex items-center gap-2 bg-teal text-white pl-4 pr-5 py-3.5 rounded-full font-bold shadow-xl shadow-teal/30 hover:bg-teal-dark transition-all active:scale-95"
      >
        <MessageIcon className="w-5 h-5" />
        Text
      </a>
      <a
        href={PHONE_HREF}
        className="flex items-center gap-2 bg-blue text-white pl-4 pr-5 py-3.5 rounded-full font-bold shadow-xl shadow-blue/30 hover:bg-blue-dark transition-all active:scale-95"
      >
        <PhoneIcon className="w-5 h-5" />
        Call
      </a>
    </div>
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
        <Services />
        <WhyYaras />
        <Promise />
        <Reviews />
        <HowItWorks />
        <About />
        <ServiceArea />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyMobileButtons />
    </>
  );
}

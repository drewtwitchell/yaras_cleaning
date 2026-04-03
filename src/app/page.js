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
      { threshold: 0.15 }
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
function XMarkIcon({ className }) {
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
function CalendarIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function DollarIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>;
}
function UsersIcon({ className }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : ""}`}>
      {/* Top bar */}
      <div className="hidden sm:block bg-blue-dark text-white/80 text-xs">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-3 h-3" />
              Worcester &bull; Boston &bull; Southern NH
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldIcon className="w-3 h-3" />
              Licensed & Insured
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneIcon className="w-3 h-3" />
              {PHONE}
            </a>
            <a href={SMS_HREF} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageIcon className="w-3 h-3" />
              Text Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 sm:h-20">
        <a href="#" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Yara's Cleaning - Spotless Homes, Caring Service"
            width={847}
            height={533}
            className="h-12 sm:h-16 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-muted hover:text-foreground transition-colors">Services</a>
          <a href="#why-yaras" className="text-muted hover:text-foreground transition-colors">Why Us</a>
          <a href="#reviews" className="text-muted hover:text-foreground transition-colors">Reviews</a>
          <a href="#about" className="text-muted hover:text-foreground transition-colors">About</a>
          <a href="#faq" className="text-muted hover:text-foreground transition-colors">FAQ</a>
          <a href={SMS_HREF} className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-dark transition-colors">
            Get Free Estimate
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
        <nav className="md:hidden px-4 pb-4 bg-white border-t border-border-light">
          {[
            { label: "Services", href: "#services" },
            { label: "Why Us", href: "#why-yaras" },
            { label: "Reviews", href: "#reviews" },
            { label: "About", href: "#about" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block text-muted hover:text-foreground py-3 border-b border-border-light text-sm">
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a href={SMS_HREF} className="flex-1 text-center bg-teal text-white py-3 rounded-lg text-sm font-semibold">
              Text Us
            </a>
            <a href={PHONE_HREF} className="flex-1 text-center bg-blue text-white py-3 rounded-lg text-sm font-semibold">
              Call Now
            </a>
          </div>
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
    <section className="pt-32 sm:pt-44 pb-20 sm:pb-28 bg-gradient-to-br from-blue-dark via-blue to-teal-dark relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <R>
            <p className="text-teal-light font-semibold text-sm mb-4 tracking-wide">Professional House Cleaning in MA & NH</p>
          </R>
          <R delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight">
              Your home deserves someone who actually cares.
            </h1>
          </R>
          <R delay={2}>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Yara walks through your space, gives you an honest price, and
              her team cleans it like their own. Free estimates, no surprises,
              no contracts.
            </p>
          </R>
          <R delay={3}>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a
                href={SMS_HREF}
                className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-teal-dark transition-colors"
              >
                <MessageIcon className="w-4 h-4" />
                Text Us for a Free Estimate
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-lg text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                <PhoneIcon className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
          </R>
          <R delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <div className="flex">{[1,2,3,4,5].map(i => <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />)}</div>
                5-Star Rated
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldIcon className="w-3.5 h-3.5 text-teal" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-teal" />
                Weekly &bull; Biweekly &bull; Monthly
              </span>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SERVICES
   ════════════════════════════════════════ */

function Services() {
  const services = [
    { icon: HomeIcon, title: "House Cleaning", desc: "Top to bottom — kitchens, bathrooms, bedrooms, living spaces. The full job." },
    { icon: BuildingIcon, title: "Apartments", desc: "Studio or three-bedroom, same thorough clean sized to your space." },
    { icon: BriefcaseIcon, title: "Office Cleaning", desc: "A clean workspace your team and clients will notice." },
    { icon: TargetIcon, title: "Deep Cleans", desc: "Inside cabinets, behind appliances, under everything. The reset button." },
    { icon: BoxIcon, title: "Move-In", desc: "Spotless before your first box hits the floor." },
    { icon: TruckIcon, title: "Move-Out", desc: "Get your deposit back. We leave it better than you found it." },
  ];

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="max-w-xl mb-12">
            <p className="text-teal font-semibold text-sm mb-2">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What we clean
            </h2>
            <p className="mt-3 text-muted">
              Every job starts with Yara seeing your space in person. No generic quotes.
            </p>
          </div>
        </R>

        <R delay={1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-xl p-6 sm:p-7 border border-border-light hover:border-teal/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </R>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   WHY YARA'S — Comparison
   ════════════════════════════════════════ */

function WhyYaras() {
  const rows = [
    { label: "In-person walk-through before every quote", yaras: true, others: false },
    { label: "Same team cleans your home every visit", yaras: true, others: false },
    { label: "Text the owner directly — no call center", yaras: true, others: false },
    { label: "Flat pricing — no hidden fees or surprises", yaras: true, others: false },
    { label: "Satisfaction guarantee on every clean", yaras: true, others: false },
  ];

  return (
    <section id="why-yaras" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <R>
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm mb-2">Why Yara&apos;s</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Not a franchise. Not an app. A real team.
            </h2>
          </div>
        </R>

        <R delay={1}>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_100px_100px] items-center px-5 sm:px-6 py-3 bg-surface border-b border-border text-xs font-semibold text-muted uppercase tracking-wider">
              <span />
              <span className="text-center text-blue">Yara&apos;s</span>
              <span className="text-center">Others</span>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_100px_100px] items-center px-5 sm:px-6 py-4 ${i < rows.length - 1 ? "border-b border-border-light" : ""}`}
              >
                <span className="text-sm text-foreground pr-4">{row.label}</span>
                <div className="flex justify-center">
                  <CheckIcon className="w-4 h-4 text-teal" />
                </div>
                <div className="flex justify-center">
                  {row.others === true ? (
                    <CheckIcon className="w-4 h-4 text-teal" />
                  ) : row.others === false ? (
                    <XMarkIcon className="w-4 h-4 text-border" />
                  ) : (
                    <span className="text-xs text-faint">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   GUARANTEE
   ════════════════════════════════════════ */

function Guarantee() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="bg-blue-dark rounded-2xl px-8 sm:px-12 py-10 sm:py-14 text-white flex flex-col sm:flex-row items-start gap-8">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-xl bg-teal/20 flex items-center justify-center">
                <ShieldIcon className="w-8 h-8 text-teal" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Yara&apos;s Sparkle Promise</h3>
              <p className="text-white/70 leading-relaxed max-w-xl">
                If something isn&apos;t right, tell Yara. She&apos;ll come back and make
                it right — no awkward conversations, no runaround. Your home should
                feel like yours again when we leave.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-teal" />
                  100% satisfaction
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-teal" />
                  We&apos;ll re-clean it free
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-teal" />
                  No questions asked
                </span>
              </div>
            </div>
          </div>
        </R>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   REVIEWS
   ════════════════════════════════════════ */

function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Worcester, MA",
      text: "Yara and her team are amazing! They deep cleaned my entire house before we moved in and it looked brand new. I've been using them weekly ever since.",
    },
    {
      name: "Mike D.",
      location: "Nashua, NH",
      text: "Finally found a cleaning service I can trust. Yara does a walkthrough before giving a price — no surprises. My house has never been cleaner.",
    },
    {
      name: "Jessica R.",
      location: "Boston, MA",
      text: "I was nervous about having someone clean my apartment, but Yara made me feel so comfortable. She's thorough, professional, and genuinely cares.",
    },
    {
      name: "Tom & Linda K.",
      location: "Hudson, NH",
      text: "We've tried other cleaning services and none compare. Yara's team catches every detail — baseboards, corners, behind furniture. Our home feels fresh every time.",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="max-w-xl mb-12">
            <p className="text-teal font-semibold text-sm mb-2">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What our clients say
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <R key={review.name} delay={Math.min(i + 1, 4)}>
              <div className="bg-surface rounded-xl p-6 sm:p-8">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-4 h-4 text-gold" />)}
                </div>
                <p className="text-foreground leading-relaxed text-[15px] mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center text-sm font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
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
    { num: "01", icon: MessageIcon, title: "Reach Out", desc: "Text or call Yara. Tell her about your space and what you need." },
    { num: "02", icon: EyeIcon, title: "Free Walk-Through", desc: "Yara visits your home, sees the space, and gives you an honest price on the spot." },
    { num: "03", icon: CalendarIcon, title: "Pick Your Schedule", desc: "Weekly, biweekly, monthly, or one-time. Same team, same standard, every visit." },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="max-w-xl mb-12">
            <p className="text-teal font-semibold text-sm mb-2">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Three simple steps
            </h2>
          </div>
        </R>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <R key={step.num} delay={Math.min(i + 1, 3)}>
                <div className="bg-white rounded-xl p-6 border border-border-light">
                  <span className="text-3xl font-bold text-teal/20">{step.num}</span>
                  <div className="mt-3 w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
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
   ABOUT YARA
   ════════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <R className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Yara's Cleaning"
                width={847}
                height={533}
                className="w-full max-w-sm h-auto"
              />
            </div>
          </R>

          <div className="lg:col-span-3">
            <R>
              <p className="text-teal font-semibold text-sm mb-2">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                This is Yara&apos;s life&apos;s work.
              </h2>
            </R>

            <R delay={1}>
              <div className="mt-5 space-y-4 text-muted leading-relaxed">
                <p>
                  Yara started this business because she believes you should know
                  and trust the people who walk into your home. Not a random crew
                  from an app — a real team, led by someone who cares about every
                  baseboard, every corner, every spot behind the door that other
                  services walk right past.
                </p>
                <p>
                  She personally visits every new home before quoting a price — not
                  because she has to, but because every home is different. A phone
                  estimate isn&apos;t fair to you.
                </p>
              </div>
            </R>

            <R delay={2}>
              <a href={SMS_HREF} className="mt-6 inline-flex items-center gap-2 text-teal font-semibold text-sm hover:text-teal-dark transition-colors">
                Get to know Yara — text us
                <ArrowRight className="w-4 h-4" />
              </a>
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
        <rect width="400" height="450" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="1" />

        <line x1="30" y1="150" x2="370" y2="150" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
        <text x="50" y="140" fill="#9ca3af" fontSize="11" fontWeight="600">NEW HAMPSHIRE</text>
        <text x="50" y="168" fill="#9ca3af" fontSize="11" fontWeight="600">MASSACHUSETTS</text>

        <circle cx="200" cy="100" r="75" fill="#48b8a0" opacity="0.06" />
        <circle cx="200" cy="100" r="75" stroke="#48b8a0" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 3" />
        <circle cx="250" cy="240" r="90" fill="#1a4a6e" opacity="0.06" />
        <circle cx="250" cy="240" r="90" stroke="#1a4a6e" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 3" />
        <circle cx="120" cy="280" r="65" fill="#1a4a6e" opacity="0.06" />
        <circle cx="120" cy="280" r="65" stroke="#1a4a6e" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 3" />

        <circle cx="175" cy="60" r="4" fill="#48b8a0" />
        <text x="187" y="64" fill="#1f2937" fontSize="10" fontWeight="600">Nashua</text>
        <circle cx="250" cy="80" r="4" fill="#48b8a0" />
        <text x="262" y="84" fill="#1f2937" fontSize="10" fontWeight="600">Salem</text>
        <circle cx="155" cy="115" r="3" fill="#9ca3af" />
        <text x="118" y="112" fill="#6b7280" fontSize="10">Hudson</text>
        <circle cx="210" cy="100" r="3" fill="#9ca3af" />
        <text x="195" y="90" fill="#6b7280" fontSize="10">Pelham</text>

        <circle cx="290" cy="220" r="6" fill="#1a4a6e" />
        <text x="302" y="224" fill="#1f2937" fontSize="12" fontWeight="700">Boston</text>
        <circle cx="260" cy="195" r="3" fill="#9ca3af" />
        <text x="270" y="199" fill="#6b7280" fontSize="10">Cambridge</text>
        <circle cx="230" cy="235" r="3" fill="#9ca3af" />
        <text x="240" y="239" fill="#6b7280" fontSize="10">Newton</text>
        <circle cx="300" cy="260" r="3" fill="#9ca3af" />
        <text x="310" y="264" fill="#6b7280" fontSize="10">Quincy</text>
        <circle cx="240" cy="265" r="3" fill="#9ca3af" />
        <text x="250" y="269" fill="#6b7280" fontSize="10">Brookline</text>

        <circle cx="115" cy="275" r="5" fill="#1a4a6e" />
        <text x="72" y="265" fill="#1f2937" fontSize="12" fontWeight="700">Worcester</text>
        <circle cx="145" cy="300" r="3" fill="#9ca3af" />
        <text x="155" y="304" fill="#6b7280" fontSize="10">Shrewsbury</text>
        <circle cx="100" cy="310" r="3" fill="#9ca3af" />
        <text x="60" y="314" fill="#6b7280" fontSize="10">Auburn</text>

        <circle cx="50" cy="400" r="8" fill="#48b8a0" opacity="0.12" stroke="#48b8a0" strokeWidth="1" />
        <text x="66" y="404" fill="#6b7280" fontSize="11">Coverage Area</text>
        <circle cx="170" cy="400" r="4" fill="#1a4a6e" />
        <text x="182" y="404" fill="#6b7280" fontSize="11">Major City</text>
        <circle cx="275" cy="400" r="3" fill="#9ca3af" />
        <text x="285" y="404" fill="#6b7280" fontSize="11">Town</text>
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
    <section id="areas" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="max-w-xl mb-12">
            <p className="text-teal font-semibold text-sm mb-2">Service Area</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Three regions, one standard
            </h2>
          </div>
        </R>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <R>
            <CoverageMap />
          </R>

          <div className="space-y-4">
            {regions.map((region, i) => (
              <R key={region.name} delay={Math.min(i + 1, 3)}>
                <div className="bg-surface rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-1">{region.name}</h3>
                  <p className="text-muted text-sm">{region.areas}</p>
                </div>
              </R>
            ))}

            <R delay={4}>
              <p className="text-sm text-muted">
                Not sure if we cover your area?{" "}
                <a href={SMS_HREF} className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Text us and ask &rarr;
                </a>
              </p>
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
    <div className="border-b border-border-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-foreground font-medium pr-8">{q}</span>
        <span className={`shrink-0 text-muted transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-muted text-sm leading-relaxed pr-12">
          {a}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need to be home during the cleaning?", a: "Nope! Many of our clients leave a key or provide entry instructions. You're welcome to be home if you prefer, but it's not required." },
    { q: "Do you bring your own cleaning supplies?", a: "Yes, we bring everything we need. If you have specific products you'd like us to use or any allergies, just let us know." },
    { q: "How long does a cleaning usually take?", a: "It depends on the size of your space and the type of cleaning. A standard home cleaning typically takes 2-4 hours. Yara will give you a time estimate during the walk-through." },
    { q: "How does pricing work?", a: "Every space is different, so Yara does a free in-person walk-through before giving you a price. No ballpark guesses over the phone. You'll know the exact cost before any work starts." },
    { q: "Will the same people clean my home each time?", a: "Yes. We believe consistency matters. You'll have the same team every visit so they know your home, your preferences, and your standards." },
    { q: "What forms of payment do you accept?", a: "We accept cash, check, and Venmo. Payment is due on the day of service." },
    { q: "Can I change my cleaning schedule?", a: "Of course. Life happens. Just give us a heads up and we'll adjust. No penalties, no hassle." },
    { q: "What areas do you serve?", a: "Greater Boston, Southern New Hampshire (Nashua, Hudson, Salem, Pelham area), and the Worcester area. Not sure if we reach you? Text or call and we'll let you know." },
    { q: "Are you licensed and insured?", a: "Yes, fully. Yara's Cleaning carries complete liability insurance and all required business licenses. Your home and belongings are protected." },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <R>
          <div className="max-w-xl mb-12">
            <p className="text-teal font-semibold text-sm mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Common questions
            </h2>
          </div>
        </R>

        <R delay={1}>
          <div className="border-t border-border-light">
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
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <R>
          <div className="bg-blue-dark rounded-2xl px-8 sm:px-16 py-14 sm:py-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready for a cleaner home?
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Text or call Yara for a free walk-through and estimate. No pressure, no obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SMS_HREF}
                className="inline-flex items-center gap-2 bg-teal text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
              >
                <MessageIcon className="w-4 h-4" />
                Text Us Now
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
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
    <footer className="bg-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Yara's Cleaning" width={847} height={533} className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Spotless homes, caring service. Licensed, insured, and serving families across MA & NH.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">House Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Apartment Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Cleans</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Move-In / Move-Out</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><a href="#why-yaras" className="hover:text-white transition-colors">Why Yara&apos;s</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Yara</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={SMS_HREF} className="flex items-center gap-2 text-sm text-teal hover:text-white transition-colors font-medium">
                <MessageIcon className="w-4 h-4" />
                Text Us
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-teal hover:text-white transition-colors font-medium">
                <PhoneIcon className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
            <div className="mt-4 space-y-2 text-xs text-white/30">
              <div className="flex items-center gap-1.5">
                <ShieldIcon className="w-3 h-3" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-1.5">
                <DollarIcon className="w-3 h-3" />
                Cash, Check & Venmo
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/20">
          &copy; {year} Yara&apos;s Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   STICKY MOBILE CTA
   ════════════════════════════════════════ */

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border px-4 py-3 flex gap-3">
      <a href={SMS_HREF} className="flex-1 text-center bg-teal text-white py-3 rounded-lg text-sm font-semibold">
        <span className="flex items-center justify-center gap-2">
          <MessageIcon className="w-4 h-4" />
          Text Us
        </span>
      </a>
      <a href={PHONE_HREF} className="flex-1 text-center bg-blue text-white py-3 rounded-lg text-sm font-semibold">
        <span className="flex items-center justify-center gap-2">
          <PhoneIcon className="w-4 h-4" />
          Call Now
        </span>
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
        <Guarantee />
        <Reviews />
        <HowItWorks />
        <About />
        <ServiceArea />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

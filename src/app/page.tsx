'use client';

import { useState } from 'react';
import AuditSection from '@/components/AuditSection';


  // ...rest of your existing state (selectedTimezone, selectedDate, testimonials array, faqs array, etc.) stays exactly as it was
export default function Home() {

   const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const navLinks = [
    { href: '/', label: 'The Problem' },
    { href: '#talking-websites', label: 'Talking Websites' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/industry-blueprints', label: 'Industry Blueprints' },
    { href: '/roi-calculator', label: 'ROI Calculator' },
    { href: '/about-us', label: 'About Us' },
    { href: '#blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Section 9 Demo Booking States
  const [selectedTimezone, setSelectedTimezone] = useState("Central Time (CT)");
  const [selectedDate, setSelectedDate] = useState<number>(18);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const testimonials = [
    {
      quote: "Since installing the AI agent, our missed call rate dropped to zero. It booked 14 new appointments in the first week alone while we were sleeping.",
      author: "Sarah Jenkins",
      title: "Owner, Elite Salons",
      initials: "SJ"
    },
    {
      quote: "I was skeptical about AI sounding robotic, but my clients constantly think they're texting with my receptionist. It's an absolute game-changer for our clinic.",
      author: "Dr. James Chen",
      title: "Apex Medical",
      initials: "JC"
    },
    {
      quote: "The automated follow-up sequence saved us. We used to lose so many leads because we couldn't call back fast enough. Now the AI handles it instantly.",
      author: "Mike Rodriguez",
      title: "Pro HVAC Services",
      initials: "MR"
    },
    {
      quote: "Best investment we've made this year. The setup was completely hands-off for us, and it paid for itself within the first 48 hours of going live.",
      author: "Emily Thompson",
      title: "Prime Real Estate",
      initials: "ET"
    },
    {
      quote: "We used to spend 2 hours a day just answering the same basic questions over the phone. The talking website handles all of it now.",
      author: "David Wright",
      title: "Justice Law",
      initials: "DW"
    }
  ];

  const faqs = [
    {
      question: "Will the AI sound like a robot?",
      answer: "Not at all. We train natural language models designed specifically for human-like conversation. It speaks fluidly, pauses naturally, and adapts contextually so visitors feel like they're conversing with a real team member."
    },
    {
      question: "How does it know the answers to my specific business questions?",
      answer: "During our onboarding phase, we upload your custom documentation, FAQs, pricing details, and service guidelines directly into the AI agent's knowledge base. It only shares verified facts about your business."
    },
    {
      question: "Can it actually book appointments?",
      answer: "Yes! The AI agent integrates directly into Google Calendar, Calendly, or your preferred CRM schedule to offer real-time openings and lock in bookings instantly."
    },
    {
      question: "What happens if the AI doesn't know the answer?",
      answer: "If a visitor asks an unexpected or overly complex question, the AI gracefully collects their contact info, explains that a specialist will reach out, and immediately notifies your team."
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "Zero technical skills needed. We handle 100% of the build, integration, training, and testing. You simply receive bookings and qualified leads."
    }
  ];

  const timezones = [
    "Central Time (CT)",
    "Eastern Time (ET)",
    "Mountain Time (MT)",
    "Pacific Time (PT)",
    "Alaska Time (AKT)",
    "Hawaii Time (HT)",
    "Europe/London",
    "Europe/Paris",
    "Asia/Dubai",
    "Asia/Kolkata",
    "Asia/Tokyo",
    "Australia/Sydney"
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleTestimonials = [
    testimonials[currentTestimonialIndex],
    testimonials[(currentTestimonialIndex + 1) % testimonials.length],
    testimonials[(currentTestimonialIndex + 2) % testimonials.length],
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(7); // August
  const [year, setYear] = useState<number>(2026);

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setYear((prev) => prev - 1);
    } else {
      setCurrentMonthIndex((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setYear((prev) => prev + 1);
    } else {
      setCurrentMonthIndex((prev) => prev + 1);
    }
  };

  return (
    <main 
  suppressHydrationWarning
  className={`min-h-screen transition-colors duration-300 font-sans ${
    isLightMode ? 'bg-white text-slate-800' : 'bg-[#01050e] text-[rgb(103,111,126)]'
  }`}
>
      {/* SECTION 1: Header & Hero */}
       <div id="section-1" className="relative overflow-hidden">
        <header 
    className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b px-4 sm:px-6 lg:px-12 py-4 transition-colors duration-300 ${
      isLightMode 
        ? 'bg-white/70 border-slate-200/60' 
        : 'bg-[#01050e]/70 border-slate-800/50'
    }`}
  >
    <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
      <a href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-3 shrink-0">
        <span className={`relative flex items-center justify-center w-8 h-8 rounded-full ${isLightMode ? 'bg-slate-100 border-slate-300' : 'bg-[#0b1329] border-slate-800'}`}>
          <span className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-cyan-400 to-[#7d5aff] p-[2.5px] flex items-center justify-center">
            <span className={`w-2.5 h-2.5 rounded-full ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}></span>
          </span>
        </span>
        <span>
          <span className={isLightMode ? 'text-slate-900' : 'text-white'}>Inno</span>
          <span className="text-[#7d5aff]">vibe</span>
        </span>
      </a>

      {/* Desktop nav — hidden below lg */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
        <nav className={`flex items-center gap-4 xl:gap-7 text-sm font-medium whitespace-nowrap ${
          isLightMode ? 'text-slate-600' : 'text-slate-300'
        }`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#6c47ff] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label="Toggle theme"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
              isLightMode 
                ? 'text-slate-700 hover:text-[rgb(13,204,242)] hover:bg-[rgb(13,204,242)]/10' 
                : 'text-slate-300 hover:text-[rgb(13,204,242)] hover:bg-[rgb(13,204,242)]/15'
            }`}
          >
            {isLightMode ? (
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
              </svg>
            )}
          </button>

          <a
            href="#booking"
            className="px-7 py-2.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)] shrink-0"
          >
            Book Demo
          </a>
        </div>
      </div>

      {/* Mobile controls — theme toggle + hamburger, shown below lg */}
      <div className="flex lg:hidden items-center gap-2 shrink-0">
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          aria-label="Toggle theme"
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
            isLightMode 
              ? 'text-slate-700 hover:bg-slate-200/60' 
              : 'text-slate-300 hover:bg-white/10'
          }`}
        >
          {isLightMode ? (
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
            </svg>
          )}
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
            isLightMode 
              ? 'text-slate-700 hover:bg-slate-200/60' 
              : 'text-slate-300 hover:bg-white/10'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile dropdown menu */}
    {isMenuOpen && (
      <div className={`lg:hidden mt-4 pt-4 border-t ${isLightMode ? 'border-slate-200' : 'border-slate-800/60'}`}>
        <nav className={`flex flex-col gap-1 text-sm font-medium ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-2.5 px-2 rounded-lg transition-colors ${isLightMode ? 'hover:bg-slate-100 hover:text-slate-900' : 'hover:bg-white/5 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 block text-center px-7 py-3 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300"
        >
          Book Demo
        </a>
      </div>
    )}
  </header>

  <section className="max-w-5xl mx-auto text-center px-6 pt-16 pb-12">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-8 ${
          isLightMode ? 'border-slate-300 bg-slate-100 text-slate-700' : 'border-slate-800 bg-slate-900/60 text-slate-300'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#7d5aff]"></span>
            The Future of Local Business Websites
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 ${
            isLightMode ? 'text-slate-900' : 'text-white'
          }`}>
            Stop Losing Leads to <br />
            Voicemail. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7d5aff] via-indigo-400 to-cyan-400">
              Turn Your Website Into a <br />
              24/7 Sales Agent.
            </span>
          </h1>

          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal ${
            isLightMode ? 'text-slate-600' : 'text-slate-300'
          }`}>
            We build voice-enabled websites that actively talk to your visitors, answer questions instantly, and book appointments automatically while you sleep.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]"
            >
              Book Free AI Demo →
            </a>

            <a
              href="#problem"
              className={`w-full sm:w-auto px-8 py-3.5 text-sm font-semibold border rounded-full transition-all duration-300 ${
                isLightMode 
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 hover:text-slate-900' 
                  : 'bg-[rgb(1,5,14)] border-slate-800 text-white hover:bg-[rgb(29,37,53)] hover:text-[rgb(26,26,26)]'
              }`}
            >
              See It In Action
            </a>
          </div>

          <div className={`flex flex-wrap justify-center gap-8 text-xs font-medium ${
            isLightMode ? 'text-slate-600' : 'text-slate-300'
          }`}>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#7d5aff]/20 text-[#7d5aff] flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              No Code Required
            </span>

            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#7d5aff]/20 text-[#7d5aff] flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Setup in 7 Days
            </span>

            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#7d5aff]/20 text-[#7d5aff] flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Integrates with your CRM
            </span>
          </div>
        </section>
      </div>

      {/* Trusted Businesses */}
      <div className={`w-full border-y py-8 overflow-x-auto ${
        isLightMode 
          ? 'bg-slate-100/70 border-slate-200' 
          : 'bg-[#040814] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4">
          <p className="text-center text-[10px] font-bold tracking-widest uppercase mb-6 text-slate-400">
            TRUSTED BY LOCAL BUSINESSES ACROSS THE US
          </p>
          
          <div className="group cursor-pointer grid grid-cols-5 w-full min-w-[900px] items-stretch">
            <div className="flex items-center justify-center gap-3 py-4 px-2 w-full">
              <svg className="w-6 h-6 text-slate-400 transition-colors duration-300 group-hover:text-[#7d5aff] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-400 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                Elite Salons
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-4 px-2 w-full">
              <svg className="w-6 h-6 text-slate-400 transition-colors duration-300 group-hover:text-[rgb(13,204,242)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
              </svg>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                Prime Real Estate
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-4 px-2 w-full">
              <svg className="w-6 h-6 text-slate-400 transition-colors duration-300 group-hover:text-[rgb(34,197,94)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span className="text-xl md:text-2xl font-semibold italic text-slate-400 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                Apex Medical
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-4 px-2 w-full">
              <svg className="w-6 h-6 text-slate-400 transition-colors duration-300 group-hover:text-[rgb(59,130,246)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
              </svg>
              <span className="text-xl md:text-2xl font-bold text-slate-400 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                Pro HVAC
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-4 px-2 w-full">
              <svg className="w-6 h-6 text-slate-400 transition-colors duration-300 group-hover:text-[rgb(245,158,11)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 7h18M6 7l-3 7h6l-3-7zm12 0l-3 7h6l-3-7zM3 21h18" />
              </svg>
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-400 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                Justice Law
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Problem & Grid */}
      <section id="problem" className={`pt-20 pb-32 transition-colors duration-300 ${isLightMode ? 'bg-slate-50/50' : 'bg-[#01050e]'}`}>
        <div className="max-w-4xl mx-auto text-center px-6 mb-14">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight ${
            isLightMode ? 'text-slate-900' : 'text-white'
          }`}>
            The Old Way is Costing You <br /> Money
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isLightMode ? 'text-slate-600' : 'text-slate-400'
          }`}>
            78% of customers buy from the first business that responds. If they hit your voicemail or wait hours for an email reply, they are calling your competitor.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`group relative aspect-square overflow-hidden p-7 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl ${
            isLightMode 
              ? 'bg-white border-slate-200 shadow-sm hover:border-[rgb(70,33,42)]' 
              : 'bg-[#060a14] border-slate-800/80 hover:border-[rgb(70,33,42)]'
          }`}>
            <div className="absolute top-2 right-2 text-red-500/10 group-hover:text-red-500/25 transition-colors duration-300 pointer-events-none">
              <svg className="w-28 h-28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L2 22M10.68 13.31a16 16 0 003.41 3.41l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-5.33-5.33A19.79 19.79 0 012 4.18 2 2 0 014.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.16 9.91" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L2 22M10.68 13.31a16 16 0 003.41 3.41l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-5.33-5.33A19.79 19.79 0 012 4.18 2 2 0 014.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.16 9.91" />
              </svg>
            </div>
            <h3 className={`text-xl font-extrabold leading-snug mb-3 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Missed Calls = Lost <br /> Revenue
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              You're busy running your business. Every missed call is a potential client handing money to the guy down the street.
            </p>
          </div>

          <div className={`group relative aspect-square overflow-hidden p-7 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl ${
            isLightMode 
              ? 'bg-white border-slate-200 shadow-sm hover:border-[rgb(82,43,29)]' 
              : 'bg-[#060a14] border-slate-800/80 hover:border-[rgb(82,43,29)]'
          }`}>
            <div className="absolute top-2 right-2 text-amber-500/10 group-hover:text-amber-500/25 transition-colors duration-300 pointer-events-none">
              <svg className="w-28 h-28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
              </svg>
            </div>
            <h3 className={`text-xl font-extrabold leading-snug mb-3 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Slow Response Times
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Web forms and emails take too long. Modern consumers expect answers in seconds, not hours or days.
            </p>
          </div>

          <div className={`group relative aspect-square overflow-hidden p-7 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl ${
            isLightMode 
              ? 'bg-white border-slate-200 shadow-sm hover:border-[rgb(124,100,20)]' 
              : 'bg-[#060a14] border-slate-800/80 hover:border-[rgb(124,100,20)]'
          }`}>
            <div className="absolute top-2 right-2 text-yellow-500/10 group-hover:text-yellow-500/25 transition-colors duration-300 pointer-events-none">
              <svg className="w-28 h-28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="w-11 h-11 rounded-full bg-yellow-500/15 flex items-center justify-center text-yellow-400 mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className={`text-xl font-extrabold leading-snug mb-3 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              No Automation
            </h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              You and your staff are overwhelmed with manual follow-ups, scheduling, and repetitive questions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Talking Websites */}
      <section id="talking-websites" className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7d5aff]/30 bg-[#7d5aff]/10 text-[#7d5aff] text-xs font-semibold mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244m4.5 0V3.104m-9.75 6h15M3 13.75h18M5.25 18h13.5M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Meet The Talking Website
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
              <span className={isLightMode ? 'text-slate-900' : 'text-white'}>Your Best Sales Rep, </span>
              <br />
              <span className="text-[#7d5aff]">Working 24/7/365.</span>
            </h2>

            <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-xl ${
              isLightMode ? 'text-slate-600' : 'text-slate-400'
            }`}>
              We don't just build websites that look pretty. We install an advanced AI voice agent directly into your site. It actively engages visitors, answers their specific questions, and converts them into booked appointments.
            </p>

            <ul className="space-y-4 mb-10 w-full">
              {[
                "Speaks naturally with visitors in real-time",
                "Answers FAQs instantly based on your business data",
                "Qualifies leads and captures contact info",
                "Books appointments directly into your calendar"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5 text-base sm:text-lg font-medium">
                  <span className="relative flex items-center justify-center w-6 h-6 rounded-full border border-[#7d5aff]/50 bg-[#7d5aff]/10 shrink-0">
                    <span className="w-4 h-4 rounded-full bg-[#7d5aff]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#7d5aff]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </span>
                  <span className={isLightMode ? 'text-slate-800' : 'text-slate-200'}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#how-it-works"
              className="px-8 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]"
            >
              See How It Works →
            </a>
          </div>

          <div className="relative w-full">
            <div className={`relative rounded-3xl p-6 sm:p-8 border backdrop-blur-sm shadow-2xl transition-colors duration-300 ${
              isLightMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-[#090d19]/90 border-slate-800/80 text-white'
            }`}>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-[#7d5aff]/20 flex items-center justify-center text-[#7d5aff] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <rect x="8" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                    <rect x="14" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">AI Sales Agent</h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-[#12192b] border border-slate-800/80 rounded-2xl p-4 max-w-[65%] text-slate-300 leading-relaxed">
                  Hi there! I noticed you're looking at our services. Do you have an emergency or need a quote?
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#182035] border border-slate-800 rounded-2xl p-4 max-w-[85%] text-slate-200 leading-relaxed text-right">
                    I need a quote for a replacement.
                  </div>
                </div>

                <div className="bg-[#12192b] border border-slate-800/80 rounded-2xl p-4 max-w-[85%] text-slate-300 leading-relaxed">
                  I can help with that! We offer free estimates. Would you like to schedule someone to come out tomorrow?
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#182035]/70 border border-slate-800/60 rounded-2xl p-4 max-w-[85%] text-slate-400 leading-relaxed text-right">
                    Yes, tomorrow afternoon works.
                  </div>
                </div>
              </div>

              <div className="absolute top-16 sm:top-14 -right-2 sm:-right-6 bg-[#0d1322] border border-slate-700/80 rounded-xl p-4 sm:p-5 shadow-2xl flex items-center gap-3.5 backdrop-blur-md z-20 animate-[bounce_3s_infinite_ease-in-out] will-change-transform">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-0.5">New Appointment</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Tomorrow @ 2:00 PM</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Services Grid */}
      <section id="services" className={`py-24 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-white border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              Everything You Need to <br /> Automate Growth
            </h2>
            <p className={`text-base sm:text-lg ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              We provide end-to-end AI and automation solutions tailored for local businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 hover:border-[#7d5aff]' 
                : 'bg-[#060a14] border-slate-800/90 hover:border-[#7d5aff]'
            }`}>
              <div className="absolute top-2 right-2 text-[#7d5aff]/10 group-hover:text-[#7d5aff]/25 transition-all duration-300 group-hover:scale-105 pointer-events-none">
                <svg className="w-44 h-44" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <path d="M2 16h1M21 16h1" strokeWidth="2" strokeLinecap="round" />
                  <rect x="8" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                  <rect x="14" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                </svg>
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#7d5aff]/15 text-[#7d5aff] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <rect x="8" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                    <rect x="14" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                  </svg>
                </div>

                <h3 className={`text-2xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#7d5aff] ${
                  isLightMode ? 'text-slate-900' : 'text-white'
                }`}>
                  Talking Websites
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Our flagship service. Turn your static website into an interactive AI agent that speaks with visitors and books appointments 24/7.
                </p>

                <ul className="space-y-3 mb-10 text-xs sm:text-sm font-medium">
                  {["Voice & Text enabled", "Multi-language support", "Direct calendar integration"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-[#7d5aff]/20 text-[#7d5aff] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={isLightMode ? 'text-slate-700' : 'text-slate-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/talking-website-learn-more"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]"
              >
                Learn More
              </a>
            </div>

            <div className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 hover:border-blue-500' 
                : 'bg-[#060a14] border-slate-800/90 hover:border-blue-500'
            }`}>
              <div className="absolute top-2 right-2 text-blue-500/10 group-hover:text-blue-500/25 transition-all duration-300 group-hover:scale-105 pointer-events-none">
                <svg className="w-44 h-44" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <rect x="8" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                  <rect x="14" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                </svg>
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <rect x="8" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                    <rect x="14" y="15" width="2" height="2" rx="0.5" fill="currentColor" />
                  </svg>
                </div>

                <h3 className={`text-2xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-blue-500 ${
                  isLightMode ? 'text-slate-900' : 'text-white'
                }`}>
                  AI Receptionist
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Never miss another call. Our AI Receptionist answers every call on the first ring, handles FAQs, and books appointments.
                </p>

                <ul className="space-y-3 mb-10 text-xs sm:text-sm font-medium">
                  {["Answers 24/7", "Natural Voice AI", "Calendar Booking"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={isLightMode ? 'text-slate-700' : 'text-slate-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/AI-receptionist-learn-more"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-2xl transition-all duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                Learn More
              </a>
            </div>

            <div className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 hover:border-cyan-500' 
                : 'bg-[#060a14] border-slate-800/90 hover:border-cyan-500'
            }`}>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className={`text-2xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-cyan-400 ${
                  isLightMode ? 'text-slate-900' : 'text-white'
                }`}>
                  CRM & Automation
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Stop letting leads fall through the cracks. We build automated follow-up pipelines that nurture leads until they buy.
                </p>

                <ul className="space-y-3 mb-10 text-xs sm:text-sm font-medium">
                  {["Automated SMS & Email", "Pipeline management", "Missed call text-back"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={isLightMode ? 'text-slate-700' : 'text-slate-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/CRM-&-Automation-automate-now"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-cyan-500 rounded-2xl transition-all duration-300 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Automate Now
              </a>
            </div>

            <div className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 hover:border-emerald-500' 
                : 'bg-[#060a14] border-slate-800/90 hover:border-emerald-500'
            }`}>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <h3 className={`text-2xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-emerald-400 ${
                  isLightMode ? 'text-slate-900' : 'text-white'
                }`}>
                  Lead Gen & Reputation
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  Get more eyeballs on your business and automatically collect 5-star reviews from happy customers.
                </p>

                <ul className="space-y-3 mb-10 text-xs sm:text-sm font-medium">
                  {["Automated review requests", "SEO optimization", "Local search dominance"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={isLightMode ? 'text-slate-700' : 'text-slate-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/lead-gen-and-reputation-grow-your-bussiness"
                className="w-full py-3.5 text-center text-sm font-semibold text-white bg-emerald-500 rounded-2xl transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Grow Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: How It Works / 3 Steps */}
      <section id="how-it-works" className={`py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              From Zero to Automated in 3 <br /> Steps
            </h2>
            <p className={`text-base sm:text-lg ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              We handle all the heavy lifting so you can focus on running your business.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[2px] bg-slate-800/80 z-0"></div>

            <div className="group relative z-10 flex flex-col items-center text-center p-4 cursor-pointer transition-all duration-300">
              <div className="absolute top-2 w-28 h-28 rounded-full bg-[#7d5aff]/0 group-hover:bg-[#7d5aff]/15 blur-xl transition-all duration-500 ease-out pointer-events-none"></div>

              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mb-8 transition-all duration-300 ease-out group-hover:scale-110 shadow-lg ${
                isLightMode 
                  ? 'bg-slate-100 border-2 border-slate-300 text-slate-900 group-hover:border-[#7d5aff] group-hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]' 
                  : 'bg-[#020712] border-2 border-[#3b2d6e] text-white group-hover:border-[#7d5aff] group-hover:shadow-[0_0_30px_rgba(125,90,255,0.7)]'
              }`}>
                01
              </div>

              <h3 className={`text-xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#7d5aff] ${
                isLightMode ? 'text-slate-900' : 'text-white'
              }`}>
                Discovery & Audit
              </h3>

              <p className={`text-sm leading-relaxed max-w-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                We analyze your current website, sales process, and bottlenecks to design the perfect AI solution.
              </p>
            </div>

            <div className="group relative z-10 flex flex-col items-center text-center p-4 cursor-pointer transition-all duration-300">
              <div className="absolute top-2 w-28 h-28 rounded-full bg-[#7d5aff]/0 group-hover:bg-[#7d5aff]/15 blur-xl transition-all duration-500 ease-out pointer-events-none"></div>

              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mb-8 transition-all duration-300 ease-out group-hover:scale-110 shadow-lg ${
                isLightMode 
                  ? 'bg-slate-100 border-2 border-slate-300 text-slate-900 group-hover:border-[#7d5aff] group-hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]' 
                  : 'bg-[#020712] border-2 border-[#3b2d6e] text-white group-hover:border-[#7d5aff] group-hover:shadow-[0_0_30px_rgba(125,90,255,0.7)]'
              }`}>
                02
              </div>

              <h3 className={`text-xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#7d5aff] ${
                isLightMode ? 'text-slate-900' : 'text-white'
              }`}>
                Custom AI Build
              </h3>

              <p className={`text-sm leading-relaxed max-w-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                We train your AI agent on your business data, FAQs, and pricing, and integrate it with your calendar.
              </p>
            </div>

            <div className="group relative z-10 flex flex-col items-center text-center p-4 cursor-pointer transition-all duration-300">
              <div className="absolute top-2 w-28 h-28 rounded-full bg-[#7d5aff]/0 group-hover:bg-[#7d5aff]/15 blur-xl transition-all duration-500 ease-out pointer-events-none"></div>

              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mb-8 transition-all duration-300 ease-out group-hover:scale-110 shadow-lg ${
                isLightMode 
                  ? 'bg-slate-100 border-2 border-slate-300 text-slate-900 group-hover:border-[#7d5aff] group-hover:shadow-[0_0_25px_rgba(125,90,255,0.6)]' 
                  : 'bg-[#020712] border-2 border-[#3b2d6e] text-white group-hover:border-[#7d5aff] group-hover:shadow-[0_0_30px_rgba(125,90,255,0.7)]'
              }`}>
                03
              </div>

              <h3 className={`text-xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[#7d5aff] ${
                isLightMode ? 'text-slate-900' : 'text-white'
              }`}>
                Launch & Optimize
              </h3>

              <p className={`text-sm leading-relaxed max-w-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Your Talking Website goes live. We monitor conversations and continuously optimize for higher conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials Carousel */}
      <section id="testimonials" className={`py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-white border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              What Local Businesses Say
            </h2>
            <p className={`text-base sm:text-lg ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Don't just take our word for it. See how our AI agents are transforming businesses.
            </p>
          </div>

          <div className="relative flex items-center justify-center gap-4 sm:gap-6">
            
            <button 
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                isLightMode 
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:border-slate-400' 
                  : 'border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {visibleTestimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group rounded-2xl p-7 border aspect-square flex flex-col justify-between transition-all duration-300 ease-out hover:border-[#7d5aff]/50 hover:shadow-[0_0_25px_rgba(125,90,255,0.15)] ${
                    isLightMode 
                      ? 'bg-slate-50 border-slate-200' 
                      : 'bg-[#040814] border-slate-800/80'
                  }`}
                >
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4">
                    <div className="w-10 h-10 rounded-full bg-[#0d1326] border border-slate-700/60 text-[#7d5aff] flex items-center justify-center font-bold text-xs shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                        {item.author}
                      </h4>
                      <p className="text-xs text-slate-400">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleNext}
              aria-label="Next Testimonial"
              className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                isLightMode 
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:border-slate-400' 
                  : 'border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>
      </section>

      {/* SECTION 7: Compact Common Questions (FAQ) */}
      <section id="faq" className={`py-16 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 ${
              isLightMode ? 'text-slate-900' : 'text-white'
            }`}>
              Common Questions
            </h2>
            <p className={`text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Everything you need to know about our Talking Websites.
            </p>
          </div>

          <div className={`divide-y border-t border-b ${
            isLightMode ? 'border-slate-200 divide-slate-200' : 'border-slate-800/80 divide-slate-800/80'
          }`}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="group py-3.5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-6 cursor-pointer transition-colors duration-200"
                  >
                    <span className={`text-sm sm:text-base font-semibold group-hover:underline group-hover:text-[#7d5aff] transition-colors duration-200 ${
                      isLightMode ? 'text-slate-900' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>

                    <svg
                      className={`w-4 h-4 shrink-0 transition-all duration-300 group-hover:text-[#7d5aff] ${
                        isOpen ? 'rotate-180 text-[#7d5aff]' : 'text-slate-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 pb-1 pr-10">
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isLightMode ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 8: Call to Action (CTA) */}
      <section id="demo" className={`py-20 sm:py-24 px-6 lg:px-12 transition-colors duration-300 border-t text-center ${
        isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 max-w-3xl leading-[1.1] ${
            isLightMode ? 'text-slate-900' : 'text-white'
          }`}>
            Ready to Stop Missing Opportunities?
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mb-10 leading-relaxed ${
            isLightMode ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Join the local businesses that have automated their sales process and increased their conversion rates with our Talking Websites.
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full cursor-pointer transition-all duration-300 ease-out shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)] mb-6"
          >
            <span>Book Your Free Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            No commitment. Just a 15-minute showcase of what's possible.  
          </p>
        </div>
      </section>

      {/* SECTION 9: Interactive Calendar & Timezone Booking */}
<section id="booking" className={`py-20 px-6 lg:px-12 transition-colors duration-300 border-t ${
  isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
}`}>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
      isLightMode ? 'text-slate-900' : 'text-white'
    }`}>
      Book Your Free Demo
    </h2>
    <p className={`text-sm sm:text-base mb-12 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
      Select a time below to see exactly how our AI can transform your business.
    </p>

    <div className={`max-w-xl mx-auto rounded-3xl border p-6 md:p-8 text-left transition-colors duration-300 ${
      isLightMode 
        ? 'bg-white border-slate-200 shadow-xl' 
        : 'bg-[rgb(6,10,18)] border-slate-800/80 shadow-2xl'
    }`}>
      <div className="mb-6">
        <label className="block text-xs font-semibold mb-2 text-slate-400">
          Timezone
        </label>
        <div className="relative">
          <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
            className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-800 bg-[rgb(9,14,26)] text-white text-sm font-medium focus:outline-none focus:border-purple-500 cursor-pointer"
          >
            {timezones.map((tz, idx) => (
              <option key={idx} value={tz} className="bg-[rgb(9,14,26)] text-white">
                {tz}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 px-2">
        <button 
          type="button"
          onClick={handlePrevMonth}
          aria-label="Previous month" 
          className="w-9 h-9 rounded-full bg-[rgb(16,23,38)] border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <span className="text-sm font-bold tracking-wide text-white">
          {months[currentMonthIndex]} {year}
        </span>

        <button 
          type="button"
          onClick={handleNextMonth}
          aria-label="Next month" 
          className="w-9 h-9 rounded-full bg-[rgb(16,23,38)] border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-400 mb-3">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>

      <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-xs font-semibold mb-8">
        {[26, 27, 28, 29, 30, 31].map((day) => (
          <div key={`prev-${day}`} className="flex items-center justify-center">
            <span className="w-9 h-9 flex items-center justify-center text-slate-600/40">{day}</span>
          </div>
        ))}

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((day) => {
          const isSelected = selectedDate === day;
          return (
            <div key={day} className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setSelectedDate(day)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-tr from-[rgb(13,204,242)] to-[rgb(125,90,255)] text-white font-bold shadow-[0_0_15px_rgba(13,204,242,0.4)]'
                    : 'text-slate-300 hover:bg-[rgb(13,204,242)] hover:text-slate-900'
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => setSelectedDate(18)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg font-bold transition-all duration-200 cursor-pointer ${
              selectedDate === 18 
                ? 'bg-gradient-to-tr from-[rgb(13,204,242)] to-[rgb(125,90,255)] text-white shadow-[0_0_15px_rgba(13,204,242,0.4)]' 
                : currentMonthIndex === 7 && year === 2026
                  ? 'bg-[rgb(13,204,242)] text-slate-900 hover:opacity-90'
                  : 'text-slate-300 hover:bg-[rgb(13,204,242)] hover:text-slate-900'
            }`}
          >
            18
          </button>
        </div>

        {[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => {
          const isSelected = selectedDate === day;
          return (
            <div key={day} className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => setSelectedDate(day)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-tr from-[rgb(13,204,242)] to-[rgb(125,90,255)] text-white font-bold shadow-[0_0_15px_rgba(13,204,242,0.4)]'
                    : 'text-slate-300 hover:bg-[rgb(13,204,242)] hover:text-slate-900'
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}

        {[1, 2, 3, 4, 5].map((day) => (
          <div key={`next-${day}`} className="flex items-center justify-center">
            <span className="w-9 h-9 flex items-center justify-center text-slate-600/40">{day}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-800/80">
        <h3 className="text-sm font-bold mb-4 text-white">
          {months[currentMonthIndex]} {selectedDate ?? 18}, {year}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
            '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
            '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
            '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
            '4:00 PM', '4:30 PM'
          ].map((time, idx) => {
            const isSelected = selectedTimeSlot === time;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedTimeSlot(time)}
                className={`py-2.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[rgb(125,90,255)] border-[rgb(125,90,255)] text-white shadow-[0_0_15px_rgba(125,90,255,0.4)]'
                    : 'bg-[rgb(8,13,30)] border-slate-800 text-slate-200 hover:border-[rgb(13,204,242)]/50 hover:bg-[rgb(14,22,40)]'
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* SECTION 10: Business Leakage Audit */}
      <section id="audit">
        <AuditSection isLightMode={isLightMode} />
      </section>

      {/* SECTION 11: Get In Touch */}
      <section 
        id="contact-form" 
        className={`py-12 px-4 sm:px-6 transition-colors duration-300 ${
          isLightMode ? 'bg-slate-100 text-slate-900' : 'bg-[#01050e] text-white'
        }`}
      >
        <div className="max-w-[580px] mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get In Touch
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Have questions? Send us a message and our team will get back to you shortly.
            </p>
          </div>

          <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
            isLightMode 
              ? 'bg-white border-slate-200/80 shadow-lg' 
              : 'bg-[#050a18] border-slate-800/80 shadow-2xl'
          }`}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                      isLightMode
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#7d5aff] focus:bg-white'
                        : 'bg-[#01050e] border-slate-800/90 text-white placeholder:text-slate-500 focus:border-[#7d5aff]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                      isLightMode
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#7d5aff] focus:bg-white'
                        : 'bg-[#01050e] border-slate-800/90 text-white placeholder:text-slate-500 focus:border-[#7d5aff]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                    isLightMode
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#7d5aff] focus:bg-white'
                      : 'bg-[#01050e] border-slate-800/90 text-white placeholder:text-slate-500 focus:border-[#7d5aff]'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>
                  Message
                </label>
                <textarea
                  rows={3.5}
                  placeholder="How can we help you?"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none resize-y transition-all ${
                    isLightMode
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#7d5aff] focus:bg-white'
                      : 'bg-[#01050e] border-slate-800/90 text-white placeholder:text-slate-500 focus:border-[#7d5aff]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-5 rounded-lg font-semibold text-sm text-white bg-[#7d5aff] hover:bg-[#6c47ff] transition-all flex items-center justify-center shadow-[0_0_20px_rgba(125,90,255,0.4)] hover:shadow-[0_0_25px_rgba(125,90,255,0.6)] active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={`text-sm pt-16 pb-12 border-t transition-colors duration-300 ${
        isLightMode ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-[rgb(5,6,15)] text-slate-400 border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
            <div className="max-w-sm space-y-4">
              <div className={`flex items-center gap-3 text-xl font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                <span className={`relative flex items-center justify-center w-8 h-8 rounded-full border ${isLightMode ? 'bg-white border-slate-300' : 'bg-[rgb(11,19,41)] border-slate-800'}`}>
                  <span className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-cyan-400 to-[rgb(125,90,255)] p-[2.5px] flex items-center justify-center">
                    <span className={`w-2.5 h-2.5 rounded-full ${isLightMode ? 'bg-slate-100' : 'bg-[rgb(1,5,14)]'}`}></span>
                  </span>
                </span>
                <span>
                  <span className={isLightMode ? 'text-slate-900' : 'text-white'}>Inno</span>
                  <span className="text-[rgb(125,90,255)]">vibe</span>
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                We build voice-enabled websites and AI automation systems that actively talk to your visitors and book appointments automatically.
              </p>
            </div>

            <div className={`w-full lg:max-w-xl border rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${
              isLightMode ? 'bg-white border-slate-200 shadow-lg' : 'bg-[rgb(9,10,24)] border-white/10'
            }`}>
              <h3 className={`text-base sm:text-lg font-bold mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Subscribe to our Newsletter
              </h3>
              <p className={`text-xs sm:text-sm mb-5 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Get the latest AI strategies and automation tips delivered weekly.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition ${
                    isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-black/40 border-white/10 text-white placeholder-slate-500'
                  }`}
                />
                <button
                  type="submit"
                  className="bg-[rgb(99,91,255)] hover:bg-[rgb(83,75,229)] text-white font-medium text-sm px-6 py-2.5 rounded-xl transition duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className={`border-t mb-8 ${isLightMode ? 'border-slate-200' : 'border-white/5'}`} />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2026 Innovibe Digital. All rights reserved.</p>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a href="/services" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Services</a>
              <a href="/pricing" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Pricing</a>
              <a href="/industry-blueprints" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Industry Blueprints</a>
              <a href="/roi-calculator" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>ROI Calculator</a>
              <a href="/about" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>About Us</a>
              <a href="/#blog" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Blog</a>
              <a href="/contact" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Contact</a>
              <a href="/privacy-policy" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Privacy Policy</a>
              <a href="/terms-of-services" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Terms of Service</a>
            </nav>
          </div>

        </div>
      </footer>

      {/* Floating Call Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          aria-label="Call Us"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
    </main>
 );
};

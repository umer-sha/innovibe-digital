'use client';

import React, { useState } from 'react';
import AuditSection from '@/components/AuditSection';

export default function IndustryBlueprintsHero() {
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
  

  return (
    <div className={`min-h-screen font-sans ${isLightMode ? 'bg-white text-slate-900' : 'bg-[#01050e] text-white'}`}>
      
      {/* HEADER */}
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

      {/* INDUSTRY BLUEPRINTS HERO SECTION */}
      <section className="pt-28 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Exact Pill Styling matching screenshot */}
          <div className="inline-block px-5 py-1.5 rounded-full text-xs font-medium text-indigo-400 bg-[#060814] border border-[#232042] mb-3 shadow-inner">
            Industry Blueprints
          </div>

          {/* Main Title with original spacious sizing */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Proven Frameworks for <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            See how our industry-specific AI blueprints are designed to eliminate bottlenecks, capture lost revenue, and deploy in just 7 days.
          </p>

        </div>
      </section>

      {/* SECTION 2: THE SALON BLUEPRINT */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(125,90,255,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-600/20 to-purple-600/20 border border-pink-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Scissors Icon */}
                    <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="2.5" />
                      <circle cx="6" cy="18" r="2.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.128 15.872M14.42 14.42L20 20M8.128 8.128L11.5 11.5" />
                    </svg>
                  </div>
                  <div>
                    {/* Heading: The Salon (Pink), Blueprint (White) */}
                    <h3 className={`text-2xl font-extrabold tracking-tight italic ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                      <span className="text-pink-500 not-italic font-extrabold">The Salon</span><span className="font-light text-white not-italic">Blueprint</span>
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                      SALONS, SPAS & BEAUTY BUSINESSES
                    </p>
                  </div>
                </div>

                {/* Stats List (All Pink Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Lost Booking Revenue</span>
                    <span className="text-lg sm:text-xl font-bold text-pink-500">$4k/mo</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Avg. Front Desk Time</span>
                    <span className="text-lg sm:text-xl font-bold text-pink-500">20 hrs/wk</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-pink-500">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Salon owners and stylists are busy with clients, meaning the phone rings out. When clients can't book immediately or ask simple questions about services, they go to the salon down the street. Managing Instagram DMs, calls, and texts is a full-time job.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    How our AI agent handles booking for high-volume beauty businesses: We deploy an omni-channel AI receptionist that answers FAQs about pricing and services, and instantly books appointments directly into your salon software, 24/7.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> Based on industry data, salons lose up to 20% of potential bookings due to missed calls. Our AI captures those bookings instantly.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE REALTOR BLUEPRINT */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(79,70,229,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-blue-600/20 border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Real Estate / Blueprint Icon */}
                    <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    {/* Heading: The Realtor (White), Blueprint (Indigo) */}
                    <h3 className={`text-2xl font-extrabold tracking-tight italic ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                      <span className="text-white not-italic font-extrabold">The Realtor</span><span className="font-light text-indigo-400 not-italic">Blueprint</span>
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                      REAL ESTATE AGENTS & BROKERAGES
                    </p>
                  </div>
                </div>

                {/* Stats List (All Indigo Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Speed to Lead</span>
                    <span className="text-lg sm:text-xl font-bold text-indigo-400">&lt; 5 mins</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Lead Conversion Drop</span>
                    <span className="text-lg sm:text-xl font-bold text-indigo-400">400%</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-indigo-400">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Real estate agents are always on the go—doing showings, closing deals, or driving. When a lead comes in, if it isn't answered within 5 minutes, the chances of converting drop by 400%. Following up manually is slow and inconsistent.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    Our rapid-response AI system designed for real estate professionals: We implement an AI SMS and voice agent that instantly texts new leads, qualifies their buying timeline and budget, and schedules property showings automatically.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> Industry data shows that responding to a lead within 5 minutes increases conversion by 391%. Our AI guarantees a 0-minute response time.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
{/* SECTION 4: THE CLEANING SYSTEM */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(6,182,212,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600/25 to-blue-600/25 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Cleaning Sparkle Icon */}
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    {/* Top Line: THE */}
                    <span className="text-xl lg:text-2xl font-extrabold text-cyan-400 tracking-wider leading-none">
                      THE
                    </span>
                    {/* Bottom Line: CLEANINGSYSTEM with no space */}
                    <div className="text-xl lg:text-2xl font-extrabold tracking-tight leading-none mt-1">
                      <span className="text-cyan-400">CLEANING</span><span className="text-white">SYSTEM</span>
                    </div>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                      RESIDENTIAL & COMMERCIAL CLEANING
                    </p>
                  </div>
                </div>

                {/* Stats List (All Cyan Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Quote Request Drop-off</span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-400">65%</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Avg. Job Value</span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-400">$200+</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-400">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Cleaning businesses rely on volume, but providing custom quotes takes time. Customers want immediate pricing for their specific square footage. When they have to wait for a callback with an estimate, they book a competitor who gave an instant quote.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    Automated quoting and scheduling for cleaning businesses: We build an AI agent that asks the right questions (square footage, deep clean vs standard, pets), instantly calculates an accurate quote, and secures the booking with a deposit.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> Consumers are 3x more likely to book a home service if they receive an instant, transparent quote. Our AI delivers quotes and books jobs on autopilot.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: THE LEGAL BLUEPRINT */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(59,130,246,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/25 to-indigo-600/25 border border-blue-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Legal Scales Icon */}
                    <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m0 0l-3 9a5.002 5.002 0 01-6.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    {/* Heading: The Legal (Serif, White), Blueprint (Sans, Blue) */}
                    <h3 className={`text-2xl font-extrabold tracking-tight italic ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                      <span className="font-serif font-normal not-italic text-white mr-1.5">The Legal</span><span className="font-sans font-extrabold text-blue-500 not-italic">Blueprint</span>
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                      LAW FIRMS & ATTORNEYS
                    </p>
                  </div>
                </div>

                {/* Stats List (All Blue Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>First-Responder Win Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-500">78%</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Avg. Cost Per Lead</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-500">$150+</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-500">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Firms spend heavily on Google Ads but lose high-value personal injury leads because potential clients hit voicemail after hours. When people need a lawyer urgently, they simply call the next firm on the search results if they don't get an immediate answer.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    Our omni-channel AI strategy designed to capture high-value legal leads: We implement a Talking Website agent and After-Hours Voice AI. The system instantly qualifies leads based on case type, captures essential contact details, and automatically schedules priority consultations.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> 78% of customers buy from the first responder. Our Talking Website is designed to capture that 78% before they call your competitors.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: THE HOME SERVICE SYSTEM */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(16,185,129,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600/25 to-teal-600/25 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Precise Wind Waves Icon */}
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h12" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    {/* Top Line: THE HOME */}
                    <span className="text-xl lg:text-2xl font-extrabold text-white tracking-wider leading-none">
                      THE HOME
                    </span>
                    {/* Bottom Line: SERVICE (White) SYSTEM (Green) with no space */}
                    <div className="text-xl lg:text-2xl font-extrabold tracking-tight leading-none mt-1">
                      <span className="text-white">SERVICE</span><span className="text-emerald-400">SYSTEM</span>
                    </div>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-2">
                      HVAC, PLUMBING & ROOFING
                    </p>
                  </div>
                </div>

                {/* Stats List (All Green Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Avg. Missed Call Value</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-400">$150+</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Lost Revenue</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-400">$60k/yr</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-emerald-400">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Technicians are constantly stopping work to answer the phone for simple status updates or pricing inquiries. Missed calls equal lost jobs. Without an automated follow-up system, high-intent leads slip through the cracks every single day.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    Automated follow-up and CRM pipelines built for high-volume home services: We deploy a Missed Call Text-Back and AI booking system. If a call is missed, the customer instantly receives a text. The AI qualifies the emergency, provides estimates, and books the dispatch.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> The average missed call value in HVAC is $150. If the AI captures just 10 calls, the system pays for itself in one week.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: THE SOLAR FRAMEWORK */}
      <section className={`py-12 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className={`rounded-3xl border p-8 lg:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_60px_rgba(251,191,36,0.15)] ${
            isLightMode 
              ? 'bg-slate-50 border-slate-200 shadow-xl' 
              : 'bg-[#060913] border-slate-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)]'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Card Details & Stats (Aligned to Top) */}
              <div className="space-y-8 pt-2">
                
                {/* Logo & Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/25 to-yellow-600/25 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-lg">
                    {/* Sun / Solar Icon */}
                    <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.02-12.02l-1.41 1.41" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    {/* Title: The Solar (White) Framework (Amber/Yellow) */}
                    <h3 className={`text-2xl font-extrabold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                      <span className="text-white font-extrabold">The Solar</span><span className="text-amber-400 font-extrabold">Framework</span>
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                      SOLAR INSTALLATION & ENERGY
                    </p>
                  </div>
                </div>

                {/* Stats List (All Yellow/Amber Values) */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Lead Drop-off Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400">82%</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Avg. System Value</span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400">$25k+</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className={`text-xs sm:text-sm ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Implementation</span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400">7 Days</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Bottleneck, Implementation & Insight Box */}
              <div className="space-y-6 pt-2">
                
                {/* Industry Bottleneck (Red/Orange Icon & Grayish Text) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3L3 21" />
                    </svg>
                    <span>Industry Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    Solar companies spend thousands on leads, but if a homeowner isn't contacted within minutes, they go cold or sign with a competitor. Sales reps waste hours dialing unverified leads instead of closing deals.
                  </p>
                </div>

                {/* The 7-Day Implementation (White Text) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm sm:text-base">
                    <svg className="w-5 h-5 shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>The 7-Day Implementation</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white">
                    Our AI qualification engine designed for high-ticket solar: We build an AI agent that instantly engages new leads, asks qualifying questions (roof age, shade, electric bill), and books qualified prospects directly onto your reps' calendars.
                  </p>
                </div>

                {/* Industry Data Insight Box */}
                <div className="p-4 rounded-2xl border flex items-start gap-3 mt-4 bg-[#03050b] border-slate-800/80 text-slate-300">
                  <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300">
                    <strong className="text-white font-semibold">Industry Data Insight:</strong> Speed to lead is critical in solar. Our AI ensures a 0-minute response time, filtering out unqualified leads and only booking high-intent appointments.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: OUR PORTFOLIO */}
      <section className={`py-16 px-6 lg:px-12 transition-colors duration-300 ${isLightMode ? 'bg-white' : 'bg-[#01050e]'}`}>
        <div className="max-w-[85rem] mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12">
            <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Our Portfolio
            </h2>
            <p className={`text-sm sm:text-base max-w-xl mx-auto ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Take a look at some of the beautiful, high-converting AI agents and websites we've built for our clients.
            </p>
          </div>

          {/* Portfolio Grid - All 7 Cards in One Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Portfolio Card 1 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 1.png" 
                alt="Medical Clinic AI" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Salon Blueprint</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Beauty • AI Booking Agent</p>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 2.png" 
                alt="Hair Salon Booking" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Realtor Blueprint</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Real Estate • Lead Qualification</p>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 3.png" 
                alt="Cleaning System AI" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Cleaning System</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Cleaning • Automated Quoting</p>
              </div>
            </div>

            {/* Portfolio Card 4 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 1.png" 
                alt="Project 4" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Clinic Framework</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Healthcare • AI Voice Receptionist</p>
              </div>
            </div>

            {/* Portfolio Card 5 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 2.png" 
                alt="Project 5" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Legal Blueprint</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Law Firm • Omni-channel AI</p>
              </div>
            </div>

            {/* Portfolio Card 6 */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 3.png" 
                alt="Project 6" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Home Service System</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Home Services • CRM & Automation</p>
              </div>
            </div>

            {/* Portfolio Card 7 (Flows naturally to the left/first column on the 3rd row) */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative group cursor-pointer border border-slate-800/40">
              <img 
                src="/our portfolio image 1.png" 
                alt="Project 7" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">The Solar Framework</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Solar • AI Qualification</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section className="py-16 px-6 lg:px-12 transition-colors duration-300" style={{ backgroundColor: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(1, 5, 14)' }}>
        <div className="max-w-[70rem] mx-auto">
          
          <div className="rounded-[2.5rem] border p-12 lg:p-20 text-center relative overflow-hidden transition-all duration-300 shadow-2xl" style={{
            backgroundColor: isLightMode ? 'rgb(248, 250, 252)' : 'rgb(7, 11, 22)',
            borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)'
          }}>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>
              Ready to write your success story?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base max-w-lg mx-auto mb-8 font-normal" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>
              Stop losing leads to competitors. Let's build an AI agent that works 24/7 to grow your business.
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm sm:text-base transition-colors duration-300 shadow-lg"
                style={{ 
                  backgroundColor: 'rgb(113, 86, 245)',
                  boxShadow: '0 10px 25px -5px rgba(113, 86, 245, 0.4)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#674FE0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(113, 86, 245)'}
              >
                Book Your Free Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/*section 10: audit section */}
      <section>
        <AuditSection isLightMode={isLightMode} />
      </section>      

      {/* FOOTER */}
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
     </div>  
  );
}
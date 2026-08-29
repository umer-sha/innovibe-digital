'use client';

import React, { useState } from 'react';

export default function UseCasesPage() {
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
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isLightMode ? 'bg-white text-slate-900' : 'bg-[rgb(1,5,14)] text-white'}`}>
      
      {/* NAVBAR */}
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

      {/* SECTION 1: HERO & INDUSTRY USE CASES */}
      <section className="pt-12 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
            <a href="/" className={`transition ${isLightMode ? 'hover:text-slate-900' : 'hover:text-white'}`}>Home</a>
            <span>›</span>
            <span className={isLightMode ? 'text-slate-800 font-medium' : 'text-slate-200 font-medium'}>Use Cases</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Industry Use Cases
          </h1>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto mb-16 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            See how our AI voice agents are transforming customer communication across different industries.
          </p>

          {/* 2x2 Grid of Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-20">
            
            {/* Card 1: Healthcare */}
            <div className={`group border rounded-2xl p-8 transition-all duration-300 shadow-xl hover:scale-[1.02] hover:border-[#3B82F6] ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(6,10,18)] border-slate-800/80'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 group-hover:bg-[#3B82F6]/20 border border-blue-500/20 group-hover:border-[#3B82F6] flex items-center justify-center text-[#3B82F6] mb-6 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4.8 2.3A.3.3 0 0 0 5 2h4a.3.3 0 0 1 .3.3v3.4a.3.3 0 0 1-.3.3H5a.3.3 0 0 0-.3.3v1a6.3 6.3 0 0 0 12.6 0v-1a.3.3 0 0 0-.3-.3h-4a.3.3 0 0 1-.3-.3V2.3a.3.3 0 0 1 .3-.3h4a.3.3 0 0 0 .2-.1" />
                  <path d="M12 15v3a3 3 0 1 0 6 0" />
                  <circle cx="18" cy="15" r="2" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-[#3B82F6] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Healthcare & Clinics</h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Handle patient inquiries, book appointments, and answer common questions about services and insurance without tying up your front desk.
              </p>
            </div>

            {/* Card 2: Law Firms */}
            <div className={`group border rounded-2xl p-8 transition-all duration-300 shadow-xl hover:scale-[1.02] hover:border-[#F59E0B] ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(6,10,18)] border-slate-800/80'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 group-hover:bg-[#F59E0B]/20 border border-amber-500/20 group-hover:border-[#F59E0B] flex items-center justify-center text-[#F59E0B] mb-6 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-[#F59E0B] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Law Firms</h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Perform initial lead qualification, schedule consultations, and provide basic information about practice areas 24/7.
              </p>
            </div>

            {/* Card 3: Real Estate */}
            <div className={`group border rounded-2xl p-8 transition-all duration-300 shadow-xl hover:scale-[1.02] hover:border-[#10B981] ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(6,10,18)] border-slate-800/80'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 group-hover:bg-[#10B981]/20 border border-emerald-500/20 group-hover:border-[#10B981] flex items-center justify-center text-[#10B981] mb-6 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-[#10B981] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Real Estate</h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Answer questions about property listings, schedule viewings, and capture buyer/seller information instantly.
              </p>
            </div>

            {/* Card 4: Home Services */}
            <div className={`group border rounded-2xl p-8 transition-all duration-300 shadow-xl hover:scale-[1.02] hover:border-[#EA7316] ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(6,10,18)] border-slate-800/80'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 group-hover:bg-[#EA7316]/20 border border-orange-500/20 group-hover:border-[#EA7316] flex items-center justify-center text-[#EA7316] mb-6 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.9 6.9a2.12 2.12 0 01-3-3l6.9-6.9a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-[#EA7316] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Home Services</h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Never miss an emergency call. Book estimates, dispatch information, and handle after-hours inquiries automatically.
              </p>
            </div>

          </div>

          {/* Custom Industry Section */}
          <div className="text-center space-y-4">
            <h3 className={`text-2xl sm:text-3xl font-extrabold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Don't see your industry?</h3>
            <p className={`text-sm max-w-lg mx-auto ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Our AI agents are highly customizable and can be trained on any business's unique data and processes.
            </p>
            <div className="pt-2">
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(108,71,255)] hover:bg-[rgb(93,58,235)] text-white text-sm font-medium px-8 py-3.5 rounded-full transition shadow-[0_0_20px_rgba(108,71,255,0.4)]"
              >
                <span>Let's Discuss Your Needs</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: FREE BUSINESS LEAKAGE AUDIT COMPONENT */}
      <section className={`py-20 px-6 lg:px-12 border-t transition-colors duration-300 ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[rgb(2,6,15)] border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
              <span>🔒 Free Business Leakage Audit</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Find out exactly how much <span className="text-red-500">revenue your website is leaking.</span>
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Most local businesses lose up to 40% of their online leads due to slow response times, missed calls, and lack of automated follow-ups. We'll analyze your current setup and show you the hidden gaps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className={`p-4 rounded-xl border ${isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[rgb(6,10,18)] border-slate-800'}`}>
                <div className="text-purple-400 mb-2">📊</div>
                <h4 className={`text-sm font-bold mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Conversion Analysis</h4>
                <p className={`text-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>See where visitors drop off before contacting you.</p>
              </div>
              <div className={`p-4 rounded-xl border ${isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[rgb(6,10,18)] border-slate-800'}`}>
                <div className="text-purple-400 mb-2">⏱️</div>
                <h4 className={`text-sm font-bold mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Response Time Check</h4>
                <p className={`text-xs ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Evaluate how quickly leads receive a response.</p>
              </div>
            </div>
          </div>

          <div className={`border rounded-3xl p-8 shadow-2xl transition-colors duration-300 ${
            isLightMode ? 'bg-white border-slate-200 shadow-xl' : 'bg-[rgb(9,10,24)] border-white/10'
          }`}>
            <h3 className={`text-xl font-bold mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Request Your Free Audit</h3>
            <p className={`text-xs mb-6 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Enter your details below to get your custom report in 24 hours.</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition ${
                    isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-black/40 border-white/10 text-white placeholder-slate-600'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition ${
                    isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-black/40 border-white/10 text-white placeholder-slate-600'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLightMode ? 'text-slate-700' : 'text-slate-300'}`}>Website URL</label>
                <input 
                  type="text" 
                  placeholder="https://yourwebsite.com" 
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition ${
                    isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-black/40 border-white/10 text-white placeholder-slate-600'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[rgb(108,71,255)] hover:bg-[rgb(93,58,235)] text-white font-semibold text-sm py-3.5 rounded-xl transition duration-200 shadow-[0_0_20px_rgba(108,71,255,0.4)] cursor-pointer"
              >
                Scan My Website Now →
              </button>

              <p className={`text-center text-[11px] pt-2 ${isLightMode ? 'text-slate-500' : 'text-slate-500'}`}>
                We'll send your custom report directly to your inbox. No spam.
              </p>
            </form>
          </div>

        </div>
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
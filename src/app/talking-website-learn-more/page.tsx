'use client';

import React, { useState } from 'react';

export default function InnovibeTalkingWebsites() {
  // Global Light Mode State
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
    <div className={`min-h-screen transition-colors duration-300 flex flex-col justify-between ${isLightMode ? 'bg-slate-50 text-slate-900' : 'bg-[#01050e] text-white'}`}>
      
      <div>
        {/* HEADER / NAVBAR */}
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

        {/* HERO SECTION */}
        <section className="pt-36 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.08)' : 'rgba(125,90,255,0.15)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>

              <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                AI Talking <span className="bg-gradient-to-r from-[#7d5aff] to-cyan-400 bg-clip-text text-transparent">Websites</span>
              </h1>

              <p 
                className="text-base sm:text-lg font-normal leading-relaxed"
                style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}
              >
                Turn your static website into an interactive 24/7 sales agent. Our AI agents actively engage visitors, answer specific questions, and book appointments automatically.
              </p>

              <div>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(125,90,255,0.4)]"
                >
                  Book a Demo →
                </a>
              </div>

            </div>

            {/* Right Graphic / Chat Simulator */}
            <div className="lg:col-span-6">
              <div 
                className={`rounded-3xl border p-6 sm:p-8 space-y-4 shadow-2xl transition-colors duration-300 ${
                  isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(7,11,22)] border-white/10'
                }`}
              >
                {/* Chat Bubble 1 (AI) */}
                <div className="flex justify-start">
                  <div 
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed border ${
                      isLightMode ? 'bg-slate-100 text-slate-800 border-slate-200' : 'bg-[rgb(16,21,38)] text-slate-200 border-white/5'
                    }`}
                  >
                    Hi! I'm the AI assistant for Innovibe. Are you looking to automate your customer service today?
                  </div>
                </div>

                {/* Chat Bubble 2 (User) */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed bg-[#7d5aff] text-white shadow-md">
                    Yes, I need help managing my appointments.
                  </div>
                </div>

                {/* Chat Bubble 3 (AI) */}
                <div className="flex justify-start">
                  <div 
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed border ${
                      isLightMode ? 'bg-slate-100 text-slate-800 border-slate-200' : 'bg-[rgb(16,21,38)] text-slate-200 border-white/5'
                    }`}
                  >
                    Perfect! I can integrate directly with your calendar and book clients automatically. Would you like to see a demo?
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Core Features
            </h2>
            <p className="text-sm sm:text-base" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>
              Everything you need to automate customer interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div 
              className={`rounded-3xl border p-8 space-y-4 shadow-xl transition-colors duration-300 ${
                isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(9,10,24)] border-white/10'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.08)' : 'rgba(125,90,255,0.15)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h3 className={`text-lg font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Natural Voice & Text
              </h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Human-like conversations that adapt to user context.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              className={`rounded-3xl border p-8 space-y-4 shadow-xl transition-colors duration-300 ${
                isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(9,10,24)] border-white/10'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.08)' : 'rgba(125,90,255,0.15)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3 className={`text-lg font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Direct Booking
              </h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Integrates with your calendar to book qualified leads.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              className={`rounded-3xl border p-8 space-y-4 shadow-xl transition-colors duration-300 ${
                isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(9,10,24)] border-white/10'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.08)' : 'rgba(125,90,255,0.15)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <h3 className={`text-lg font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Multi-Language
              </h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Automatically translates and converses in 50+ languages.
              </p>
            </div>

            {/* Feature 4 */}
            <div 
              className={`rounded-3xl border p-8 space-y-4 shadow-xl transition-colors duration-300 ${
                isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(9,10,24)] border-white/10'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.08)' : 'rgba(125,90,255,0.15)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <h3 className={`text-lg font-bold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Call Routing
              </h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Transfers complex queries to human staff instantly.
              </p>
            </div>

          </div>

        </section>

        {/* CTA BANNER SECTION */}
        <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto mb-20">
          <div 
            className={`rounded-3xl border p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl transition-colors duration-300 ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-[rgb(9,10,24)] border-white/10'
            }`}
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7d5aff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Ready to upgrade your website?
              </h2>
              <p className={`text-sm sm:text-base ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Stop relying on simple contact forms. Switch to conversational AI today.
              </p>
              <div>
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-xl transition-all duration-300 shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

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

      {/* Floating Call Button */}
      <a 
        href="#call"
        aria-label="Contact Phone"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27 1.11l-2.18 2.12z" />
        </svg>
      </a>

    </div>
  );
}
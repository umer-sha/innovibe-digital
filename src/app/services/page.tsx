'use client';

import React, { useState } from 'react';
import AuditSection from '@/components/AuditSection';

export default function ServicesPage() {
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
  
      {/* SECTION 1: HERO */}
      <section className="pt-36 pb-20 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgb(125,90,255)]/10 border border-[rgb(125,90,255)]/30 text-[rgb(125,90,255)] text-xs font-medium">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>End-to-End Automation</span>
          </div>

          <h1 className={`text-4xl sm:text-6xl md:text-[68px] font-extrabold tracking-tight leading-[1.08] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Everything You Need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] via-[#38bdf8] to-[#818cf8]">Automate & Grow</span>
          </h1>

          <p className={`text-sm sm:text-base max-w-[620px] mx-auto leading-relaxed pt-2 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            We provide comprehensive AI and automation solutions designed specifically for local businesses to capture more leads, close more deals, and save hundreds of hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#booking"
              className="px-7.5 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition shadow-[0_0_25px_rgba(125,90,255,0.4)]"
            >
              Book Free Strategy Call
            </a>
            <a 
              href="#services-list"
              className={`px-7.5 py-3.5 text-sm font-semibold border rounded-full transition ${
                isLightMode ? 'border-slate-300 hover:bg-slate-100 text-slate-800' : 'border-slate-800 hover:bg-white/5 text-white'
              }`}
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: AI Talking Websites */}
      <section id="talking-websites" className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Robot Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[rgb(125,90,255)]/10 border border-[rgb(125,90,255)]/30 text-[rgb(125,90,255)] flex items-center justify-center mb-6">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H15A3,3 0 0,1 18,10V11H19A2,2 0 0,1 21,13V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V13A2,2 0 0,1 5,11H6V10A3,3 0 0,1 9,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A1.5,1.5 0 0,0 6,14.5A1.5,1.5 0 0,0 7.5,16A1.5,1.5 0 0,0 9,14.5A1.5,1.5 0 0,0 7.5,13M16.5,13A1.5,1.5 0 0,0 15,14.5A1.5,1.5 0 0,0 16.5,16A1.5,1.5 0 0,0 18,14.5A1.5,1.5 0 0,0 16.5,13M12,10A1,1 0 0,0 11,11A1,1 0 0,0 12,12A1,1 0 0,0 13,11A1,1 0 0,0 12,10Z" />
              </svg>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              AI Talking Websites
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${
              isLightMode ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Transform your static website into a 24/7 sales agent. Our AI agents actively engage visitors, answer questions, and book appointments automatically.
            </p>

            {/* 2x2 Feature Cards Grid with Hover Pop-up & Text-Selection Prevention */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                { 
                  title: "Natural Voice & Text Chat", 
                  icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
                },
                { 
                  title: "Direct Calendar Booking", 
                  icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" 
                },
                { 
                  title: "Multi-Language Support", 
                  icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10c0 .69-.08 1.36-.22 2h-3.34a16 16 0 0 0 0-4h3.34c.14.64.22 1.31.22 2zm-1.82 4h-2.82a13.5 13.5 0 0 1-1.77 3.25 8.16 8.16 0 0 0 4.59-3.25zM12 4a12.3 12.3 0 0 1 2.39 3H9.61A12.3 12.3 0 0 1 12 4zM3.82 16h2.82a13.5 13.5 0 0 1 1.77-3.25A8.16 8.16 0 0 0 3.82 16zM5.5 10h3.34a16 16 0 0 0 0 4H5.5a14.2 14.2 0 0 1 0-4zm6.5-6a12.3 12.3 0 0 1-2.39 3h4.78A12.3 12.3 0 0 1 12 4zm0 16a12.3 12.3 0 0 1-2.39-3h4.78A12.3 12.3 0 0 1 12 20zm2.39-5h-4.78a11.9 11.9 0 0 1 0-4h4.78a11.9 11.9 0 0 1 0 4z" 
                },
                { 
                  title: "Call Routing & Handoff", 
                  icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
                }
              ].map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl border cursor-default select-none transition-transform duration-300 hover:-translate-y-1 ${
                    isLightMode 
                      ? 'bg-slate-100 border-slate-200 text-slate-800' 
                      : 'bg-[#0b0f19] border-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="text-[rgb(125,90,255)] shrink-0">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={feat.icon}/></svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{feat.title}</span>
                </div>
              ))}
            </div>

            {/* Slimmer Learn More Button */}
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-2 text-xs sm:text-sm font-medium text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(125,90,255,0.3)]"
            >
              Learn More →
            </a>
          </div>

          {/* Right Column: Graphic & Chat UI */}
          <div className="lg:col-span-6 relative w-full">
            <div className={`relative rounded-3xl p-6 sm:p-10 border backdrop-blur-sm shadow-2xl transition-colors duration-300 ${
              isLightMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-[#080b14]/90 border-slate-800/80 text-white'
            }`}>
              
              <div className="space-y-4 max-w-md mx-auto text-xs sm:text-sm">
                <div className="bg-[#121826] border border-slate-800 rounded-2xl rounded-bl-none p-4 text-slate-300 leading-relaxed">
                  Hi! I'm the AI assistant for Innovibe. Are you looking to automate your customer service today?
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#182035] border border-slate-800 text-slate-200 rounded-2xl rounded-br-none p-4 max-w-[85%] leading-relaxed text-right">
                    Yes, I need help managing my appointments.
                  </div>
                </div>

                <div className="bg-[#121826] border border-slate-800 rounded-2xl rounded-bl-none p-4 text-slate-300 leading-relaxed">
                  Perfect! I can integrate directly with your calendar and book clients automatically. Would you like to see a demo?
                </div>
              </div>

              {/* Floating Animated Badge */}
              <div className="absolute top-12 sm:top-14 -right-2 sm:-right-6 bg-[#0f1423] border border-slate-700/80 rounded-xl p-3.5 sm:p-4 shadow-2xl flex items-center gap-3.5 backdrop-blur-md z-20 animate-[bounce_3s_infinite_ease-in-out] will-change-transform">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">New Appointment</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Tomorrow @ 2:00 PM</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


     {/* SECTION 3: AI Receptionist */}
      <section id="ai-receptionist" className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Graphic & Call UI */}
          <div className="lg:col-span-6 relative w-full order-2 lg:order-1">
            <div className={`relative rounded-3xl p-6 sm:p-10 border backdrop-blur-sm shadow-2xl transition-colors duration-300 ${
              isLightMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-[#080b14]/90 border-slate-800/80 text-white'
            }`}>
              
              <div className="space-y-4 max-w-md mx-auto text-xs sm:text-sm">
                <div className="bg-[#121826] border border-slate-800 rounded-2xl rounded-bl-none p-4 text-slate-300 leading-relaxed">
                  "Thanks for calling. This is Sarah, our AI assistant. How can I help?"
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#182035] border border-slate-800 text-slate-200 rounded-2xl rounded-br-none p-4 max-w-[85%] leading-relaxed text-right">
                    "I need to book a consultation for tomorrow."
                  </div>
                </div>

                <div className="bg-[#121826] border border-slate-800 rounded-2xl rounded-bl-none p-4 text-slate-300 leading-relaxed">
                  "I'd be happy to help! We have 2:00 PM or 4:30 PM available. Which works best?"
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Phone Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              AI Receptionist
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${
              isLightMode ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Never miss another call. Our AI Receptionist answers every call on the first ring, handles FAQs, and books appointments directly into your calendar.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                { title: "Answers 24/7" },
                { title: "Natural Voice AI" },
                { title: "Calendar Booking" },
                { title: "Smart Call Routing" }
              ].map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-default select-none transition-transform duration-300 hover:-translate-y-1 ${
                    isLightMode 
                      ? 'bg-slate-100 border-slate-200 text-slate-800' 
                      : 'bg-[#0b0f19] border-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{feat.title}</span>
                </div>
              ))}
            </div>

            {/* Slimmer Blue Learn More Button */}
            <a
              href="/AI-receptionist-learn-more"
              className="inline-flex items-center justify-center px-6 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              Learn More →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4: CRM & Automation */}
      <section id="crm-automation" className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Lightning / CRM Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              CRM & Automation
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${
              isLightMode ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Stop letting leads fall through the cracks. We build automated follow-up pipelines that nurture leads via SMS and email until they buy.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                { title: "Automated SMS & Email" },
                { title: "Missed Call Text-Back" },
                { title: "Pipeline Management" },
                { title: "Payment Collection" }
              ].map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-default select-none transition-transform duration-300 hover:-translate-y-1 ${
                    isLightMode 
                      ? 'bg-slate-100 border-slate-200 text-slate-800' 
                      : 'bg-[#0b0f19] border-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{feat.title}</span>
                </div>
              ))}
            </div>

            {/* Slimmer Cyan Learn More Button */}
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-2 text-xs sm:text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              Learn More →
            </a>
          </div>

          {/* Right Column: Graphic & Workflow UI */}
          <div className="lg:col-span-6 relative w-full">
            <div className={`relative rounded-3xl p-6 sm:p-10 border backdrop-blur-sm shadow-2xl transition-colors duration-300 ${
              isLightMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-[#080b14]/90 border-slate-800/80 text-white'
            }`}>
              
              <div className="space-y-4 max-w-md mx-auto text-xs sm:text-sm">
                {/* Missed Call Box */}
                <div className="bg-[#121826] border border-slate-800 rounded-2xl p-4 flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm">Missed Call</div>
                      <div className="text-[11px] text-slate-400">From: (555) 019-2834</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500">Just now</div>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-px h-6 bg-slate-800 mx-auto"></div>

                {/* Text Sent Box */}
                <div className="bg-[#121826] border border-cyan-500/30 rounded-2xl p-4 flex items-center justify-between text-slate-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm">Text Sent</div>
                      <div className="text-[11px] text-slate-400">"Sorry we missed you! How can we help?"</div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  </div>
                </div>
              </div>

              {/* Floating Animated Pipeline Update Badge */}
              <div className="absolute top-24 -left-2 sm:-left-6 bg-[#0f1423] border border-slate-700/80 rounded-xl p-3.5 sm:p-4 shadow-2xl flex items-center gap-3.5 backdrop-blur-md z-20 animate-[bounce_3s_infinite_ease-in-out] will-change-transform">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Pipeline Update</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Lead Converted</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Lead Gen & Reputation */}
      <section id="lead-gen-reputation" className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Graphic & Rating UI */}
          <div className="lg:col-span-6 relative w-full">
            <div className={`relative rounded-3xl p-6 sm:p-12 border backdrop-blur-sm shadow-2xl transition-colors duration-300 ${
              isLightMode 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-[#080b14]/90 border-slate-800/80 text-white'
            }`}>
              
              {/* Outer Container Card (Larger) */}
              <div className="max-w-lg mx-auto py-8 px-4 sm:px-6 relative">
                
                {/* Inner Rating Card (Smaller & Centered) */}
                <div className="max-w-[320px] mx-auto bg-[#121826] border border-emerald-500/30 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  {/* 5 Yellow Stars */}
                  <div className="flex items-center justify-center gap-1 mb-3 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">4.9 / 5.0</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 mb-4">Based on 342 automated reviews</div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +45% increase this month
                  </div>
                </div>

              </div>

              {/* Floating Animated 5 Stars Received Badge with Original Star Icon */}
              <div className="absolute bottom-6 sm:bottom-8 right-2 sm:right-6 bg-[#0f1423] border border-slate-700/85 rounded-xl p-3.5 sm:p-4 shadow-2xl flex items-center gap-3.5 backdrop-blur-md z-20 animate-[bounce_3s_infinite_ease-in-out] will-change-transform">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">New Review</div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">5 Stars Received</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Trend Up Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Lead Gen & Reputation
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${
              isLightMode ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Dominate your local market. We help you rank higher in search results and automatically collect 5-star reviews from happy customers.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
              {[
                { title: "Automated Review Requests" },
                { title: "Local SEO Optimization" },
                { title: "Google Business Profile" },
                { title: "Review Monitoring" }
              ].map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-default select-none transition-transform duration-300 hover:-translate-y-1 ${
                    isLightMode 
                      ? 'bg-slate-100 border-slate-200 text-slate-800' 
                      : 'bg-[#0b0f19] border-slate-800/80 text-slate-200'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{feat.title}</span>
                </div>
              ))}
            </div>

            {/* Slimmer Green Learn More Button */}
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-6 py-2 text-xs sm:text-sm font-medium text-slate-900 bg-emerald-500 hover:bg-emerald-400 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Learn More →
            </a>
          </div>

        </div>
      </section>
      {/* SECTION 6: Call to Action */}
      <section id="cta" className={`py-24 lg:py-32 px-6 lg:px-12 text-center transition-colors duration-300 border-t ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[#01050e] border-slate-800/80'
      }`}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight ${
            isLightMode ? 'text-slate-900' : 'text-white'
          }`}>
            Ready to Transform Your <br /> Business?
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed mb-10 max-w-xl ${
            isLightMode ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Stop losing leads to competitors. Let's build an automated system that works as hard as you do.
          </p>

          <a
            href="#audit"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(125,90,255,0.4)]"
          >
            Get Your Free Audit →
          </a>

        </div>
      </section>
      {/* SECTION :7 FREE BUSINESS LEAKAGE AUDIT COMPONENT */}
      <section id="audit" className={`py-20 px-6 lg:px-12 border-t transition-colors duration-300 ${
        isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-[rgb(2,6,15)] border-slate-800/80'
      }`}>
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
};
'use client';

import React, { useState, useEffect, useRef } from 'react';
import AuditSection from '@/components/AuditSection';

export default function PricingPage() {
  const [visitors, setVisitors] = useState(5000);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
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

  // Determine recommended plan based on visitor thresholds
  let recommendedPlan = 'professional';
  if (visitors <= 2500) {
    recommendedPlan = 'starter';
  } else if (visitors <= 9500) {
    recommendedPlan = 'professional';
  } else {
    recommendedPlan = 'enterprise';
  }

  // Dynamic calculations based on slider
  const getRoiMultipliers = (count: number) => {
    if (count <= 2500) return { starter: "2x - 3x", pro: "3x - 4x", enterprise: "5x - 6x" };
    if (count <= 9500) return { starter: "3x - 4x", pro: "4x - 6x", enterprise: "8x+" };
    return { starter: "4x - 5x", pro: "8x - 12x", enterprise: "15x+" };
  };

  const currentRoi = getRoiMultipliers(visitors);

  // Calculate percentage for custom slider track
  const min = 500;
  const max = 20000;
  const percentage = Math.max(0, Math.min(100, ((visitors - min) / (max - min)) * 100));

  // Global pointer move tracking for custom slider
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const step = 500;

      let clientX = e.clientX;
      let pct = (clientX - rect.left) / rect.width;
      pct = Math.max(0, Math.min(1, pct));
      
      const rawValue = min + pct * (max - min);
      const steppedValue = Math.round(rawValue / step) * step;
      const finalValue = Math.max(min, Math.min(max, steppedValue));

      setVisitors(finalValue);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const step = 500;
    let pct = (e.clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    const rawValue = min + pct * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    setVisitors(Math.max(min, Math.min(max, steppedValue)));
  };

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

      {/* PRICING HERO & CALCULATOR SECTION */}
      <section className={`py-20 lg:py-28 px-6 lg:px-12 transition-colors duration-300 mt-16`}>
        <div className="max-w-[1400px] mx-auto text-center">
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className={`text-base sm:text-lg max-w-xl mx-auto mb-16 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            Invest in automation that pays for itself. Find the perfect plan based on your current website traffic and expected ROI.
          </p>

          {/* Interactive ROI Estimator Card */}
          <div className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 border backdrop-blur-sm shadow-2xl mb-16 transition-colors duration-300 ${
            isLightMode ? 'bg-white border-slate-200' : 'bg-[#080b14]/90 border-slate-800/80'
          }`}>
            <h2 className={`text-lg sm:text-xl font-bold mb-2 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Interactive ROI Estimator</h2>
            <p className={`text-xs sm:text-sm mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>Adjust your monthly website traffic to see our recommended plan and estimated ROI.</p>

            <div className="flex justify-between items-center mb-3 text-sm font-semibold">
              <span className={isLightMode ? 'text-slate-600' : 'text-slate-400'}>Monthly Website Visitors</span>
              <span className="text-[rgb(113,86,245)] text-base sm:text-lg font-bold">{visitors.toLocaleString()}</span>
            </div>

            {/* Custom Track Slider */}
            <div className="mb-6 relative pt-4 pb-2">
              <div 
                ref={trackRef}
                onClick={handleTrackClick}
                className={`relative w-full h-2 rounded-full cursor-pointer ${
                  isLightMode ? 'bg-[rgb(243,244,247)]' : 'bg-[rgb(29,37,53)]'
                }`}
              >
                {/* Left active fill with rounded corners */}
                <div 
                  className="absolute top-0 left-0 h-full bg-[rgb(113,86,245)] rounded-full pointer-events-none overflow-hidden"
                  style={{ width: `${percentage}%` }}
                />

                {/* Thumb vertically centered right on the track line without getting cut off */}
                <div
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setIsDragging(true);
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[2.5px] border-[rgb(113,86,245)] cursor-grab active:cursor-grabbing shadow-md transition-transform hover:scale-110 ${
                    isLightMode ? 'bg-white' : 'bg-[#0b0f19]'
                  }`}
                  style={{ left: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] text-slate-500 mt-3">
                <span>0</span>
                <span>20,000+</span>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16 pt-6">
            
            {/* STARTER PLAN */}
            <div className={`relative flex flex-col justify-between rounded-3xl p-8 border text-left transition-all duration-300 ${
              recommendedPlan === 'starter' 
                ? `lg:-translate-y-4 shadow-2xl border-[#7d5aff]/80 ring-2 ring-[#7d5aff]/30 ${isLightMode ? 'bg-white' : 'bg-[#0b0f19]'}` 
                : `hover:-translate-y-1 ${isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#080b14]/90 border-slate-800/80'}`
            }`}>
              
              {recommendedPlan === 'starter' && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  Recommended for You
                </div>
              )}

              <div>
                <div className={`font-bold text-lg mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Starter</div>
                <div className={`text-xs mb-6 ${isLightMode ? 'text-slate-600' : (recommendedPlan === 'starter' ? 'text-slate-400' : 'text-slate-500')}`}>Perfect for small local businesses starting their automation journey.</div>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl sm:text-5xl font-extrabold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>$497</span>
                  <span className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>/mo</span>
                  <span className="ml-auto text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Est. ROI: {currentRoi.starter}
                  </span>
                </div>

                <div className="space-y-4 mb-8 text-xs sm:text-sm">
                  {[
                    "AI Website Agent (Text Only)",
                    "AI Receptionist (Basic Call Answering)",
                    "Basic Calendar Integration",
                    "Up to 500 conversations/mo",
                    "Standard Support"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        recommendedPlan === 'starter' ? 'bg-indigo-500/20 text-indigo-400' : (isLightMode ? 'bg-slate-100 text-slate-600' : 'bg-slate-800/60 text-slate-400')
                      }`}>✓</div>
                      <span className={isLightMode ? 'text-slate-700' : (recommendedPlan === 'starter' ? 'text-slate-300' : 'text-slate-400')}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-3 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                recommendedPlan === 'starter' 
                  ? 'text-white bg-[#7d5aff] hover:bg-[#6c47ff] shadow-[0_0_20px_rgba(125,90,255,0.4)]' 
                  : (isLightMode ? 'text-slate-700 bg-slate-100 hover:bg-slate-200' : 'text-slate-200 bg-slate-800/80 hover:bg-slate-700')
              }`}>
                Get Started
              </button>
            </div>


            {/* PROFESSIONAL PLAN */}
            <div className={`relative flex flex-col justify-between rounded-3xl p-8 border text-left transition-all duration-300 ${
              recommendedPlan === 'professional' 
                ? `lg:-translate-y-4 shadow-2xl border-[#7d5aff]/80 ring-2 ring-[#7d5aff]/30 ${isLightMode ? 'bg-white' : 'bg-[#0b0f19]'}` 
                : `hover:-translate-y-1 ${isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#080b14]/90 border-slate-800/80'}`
            }`}>
              
              {recommendedPlan === 'professional' && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  Recommended for You
                </div>
              )}

              {recommendedPlan !== 'professional' && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#7d5aff] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Most Popular
                </div>
              )}

              <div>
                <div className={`font-bold text-lg mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Professional</div>
                <div className={`text-xs mb-6 ${isLightMode ? 'text-slate-600' : (recommendedPlan === 'professional' ? 'text-slate-400' : 'text-slate-500')}`}>Our most popular plan for established businesses ready to scale.</div>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl sm:text-5xl font-extrabold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>$997</span>
                  <span className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>/mo</span>
                  <span className="ml-auto text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Est. ROI: {currentRoi.pro}
                  </span>
                </div>

                <div className="space-y-4 mb-8 text-xs sm:text-sm">
                  {[
                    "AI Voice & Text Agent",
                    "AI Receptionist (Advanced Routing)",
                    "Advanced CRM Integration",
                    "Automated Follow-ups",
                    "Up to 2,000 conversations/mo",
                    "Priority Support"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        recommendedPlan === 'professional' ? 'bg-indigo-500/20 text-indigo-400' : (isLightMode ? 'bg-slate-100 text-slate-600' : 'bg-slate-800/60 text-slate-400')
                      }`}>✓</div>
                      <span className={isLightMode ? 'text-slate-700' : (recommendedPlan === 'professional' ? 'text-slate-300' : 'text-slate-400')}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-3 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                recommendedPlan === 'professional' 
                  ? 'text-white bg-[#7d5aff] hover:bg-[#6c47ff] shadow-[0_0_20px_rgba(125,90,255,0.4)]' 
                  : (isLightMode ? 'text-slate-700 bg-slate-100 hover:bg-slate-200' : 'text-slate-200 bg-slate-800/80 hover:bg-slate-700')
              }`}>
                Get Started
              </button>
            </div>


            {/* ENTERPRISE PLAN */}
            <div className={`relative flex flex-col justify-between rounded-3xl p-8 border text-left transition-all duration-300 ${
              recommendedPlan === 'enterprise' 
                ? `lg:-translate-y-4 shadow-2xl border-[#7d5aff]/80 ring-2 ring-[#7d5aff]/30 ${isLightMode ? 'bg-white' : 'bg-[#0b0f19]'}` 
                : `hover:-translate-y-1 ${isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#080b14]/90 border-slate-800/80'}`
            }`}>
              
              {recommendedPlan === 'enterprise' && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  Recommended for You
                </div>
              )}

              <div>
                <div className={`font-bold text-lg mb-1 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Enterprise</div>
                <div className={`text-xs mb-6 ${isLightMode ? 'text-slate-600' : (recommendedPlan === 'enterprise' ? 'text-slate-400' : 'text-slate-500')}`}>Custom solutions for high-volume businesses and franchises.</div>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl sm:text-5xl font-extrabold ${isLightMode ? 'text-slate-900' : 'text-white'}`}>$1,997</span>
                  <span className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>/mo</span>
                  <span className="ml-auto text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Est. ROI: {currentRoi.enterprise}
                  </span>
                </div>

                <div className="space-y-4 mb-8 text-xs sm:text-sm">
                  {[
                    "Custom AI Training & Workflows",
                    "AI Receptionist (Custom Voices)",
                    "Full Marketing Automation",
                    "Unlimited Conversations",
                    "Dedicated Account Manager",
                    "White-glove Onboarding"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        recommendedPlan === 'enterprise' ? 'bg-indigo-500/20 text-indigo-400' : (isLightMode ? 'bg-slate-100 text-slate-600' : 'bg-slate-800/60 text-slate-400')
                      }`}>✓</div>
                      <span className={isLightMode ? 'text-slate-700' : (recommendedPlan === 'enterprise' ? 'text-slate-300' : 'text-slate-400')}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-3 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                recommendedPlan === 'enterprise' 
                  ? 'text-white bg-[#7d5aff] hover:bg-[#6c47ff] shadow-[0_0_20px_rgba(125,90,255,0.4)]' 
                  : (isLightMode ? 'text-slate-700 bg-slate-100 hover:bg-slate-200' : 'text-slate-200 bg-slate-800/80 hover:bg-slate-700')
              }`}>
                Get Started
              </button>
            </div>

          </div>

          {/* Need a Custom Solution Banner */}
          <div className={`max-w-6xl mx-auto rounded-3xl p-8 sm:p-10 border flex flex-col sm:flex-row items-center justify-between gap-6 text-left transition-colors duration-300 ${
            isLightMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#080b14]/90 border-slate-800/80'
          }`}>
            <div>
              <div className={`text-xl font-extrabold mb-2 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>Need a Custom Solution?</div>
              <div className={`text-xs sm:text-sm max-w-xl ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Build your own package tailored exactly to your business needs. Choose your features, estimate your volume, and get a custom quote instantly.
              </div>
            </div>
            <button className="shrink-0 inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#7d5aff] hover:bg-[#6c47ff] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(125,90,255,0.3)]">
              Customize Your Package →
            </button>
          </div>

        </div>
      </section>

      {/* AUDIT SECTION IMPORTED & CALLED */}
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
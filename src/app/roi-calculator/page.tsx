'use client';

import React, { useState } from 'react';
import AuditSection from '@/components/AuditSection';

export default function InnovibeApp() {
  // Global Light Mode State
  const [isLightMode, setIsLightMode] = useState(false);

  // Selected Industry State ('general', 'salon', 'real-estate', 'cleaning', 'solar')
  const [activeIndustry, setActiveIndustry] = useState('solar');

  // Calculator State
  const [missedCalls, setMissedCalls] = useState(40);
  const [avgCustomerValue, setAvgCustomerValue] = useState(25000);
  const [closeRate, setCloseRate] = useState(15);
  const [followUpHours, setFollowUpHours] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(40);
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

  // Handle Industry Tab Switch
  const handleIndustryChange = (industryId: string) => {
    setActiveIndustry(industryId);
    if (industryId === 'solar') {
      setMissedCalls(40);
      setAvgCustomerValue(25000);
      setCloseRate(15);
      setFollowUpHours(25);
      setHourlyRate(40);
    } else if (industryId === 'cleaning') {
      setMissedCalls(60);
      setAvgCustomerValue(250);
      setCloseRate(30);
      setFollowUpHours(10);
      setHourlyRate(25);
    } else if (industryId === 'real-estate') {
      setMissedCalls(30);
      setAvgCustomerValue(9000);
      setCloseRate(5);
      setFollowUpHours(15);
      setHourlyRate(30);
    } else if (industryId === 'salon') {
      setMissedCalls(10);
      setAvgCustomerValue(10);
      setCloseRate(5);
      setFollowUpHours(5);
      setHourlyRate(20);
    } else {
      setMissedCalls(0);
      setAvgCustomerValue(0);
      setCloseRate(0);
      setFollowUpHours(0);
      setHourlyRate(0);
    }
  };

  // Calculations
  const recoveredRevenueMonthly = Math.round(missedCalls * (closeRate / 100) * avgCustomerValue);
  const laborSavingsMonthly = Math.round(followUpHours * 4 * hourlyRate);
  const totalValueYearly = (recoveredRevenueMonthly + laborSavingsMonthly) * 12;

  const getRecommendation = (yearlyVal: number) => {
    if (yearlyVal > 50000) return { name: 'Growth Tier', price: '$599', roi: '1085%' };
    if (yearlyVal > 20000) return { name: 'Pro Tier', price: '$299', roi: '750%' };
    return { name: 'Starter Tier', price: '$99', roi: '450%' };
  };

  const tier = getRecommendation(totalValueYearly);

  // Dynamic labels based on active industry
  const getLabels = () => {
    if (activeIndustry === 'solar') {
      return {
        missedLabel: 'Missed Quote Requests (Monthly)',
        missedMax: 200,
        missedStep: 2,
        valueLabel: 'Average System Value',
        valueMax: 50000,
        valueStep: 500,
        rateLabel: 'Quote to Install Rate',
        rateMax: 100,
        rateStep: 1,
        hoursLabel: 'Admin Hours (Weekly)',
        rateHourlyLabel: 'Admin Hourly Rate'
      };
    }
    if (activeIndustry === 'cleaning') {
      return {
        missedLabel: 'Missed Quote Requests (Monthly)',
        missedMax: 300,
        missedStep: 5,
        valueLabel: 'Average Job Value',
        valueMax: 2000,
        valueStep: 25,
        rateLabel: 'Quote Win Rate',
        rateMax: 100,
        rateStep: 5,
        hoursLabel: 'Admin Hours (Weekly)',
        rateHourlyLabel: 'Admin Hourly Rate'
      };
    }
    if (activeIndustry === 'real-estate') {
      return {
        missedLabel: 'Missed Inquiries (Monthly)',
        missedMax: 200,
        missedStep: 2,
        valueLabel: 'Average Commission',
        valueMax: 30000,
        valueStep: 1000,
        rateLabel: 'Lead to Client Rate',
        rateMax: 100,
        rateStep: 5,
        hoursLabel: 'Admin/TC Hours (Weekly)',
        rateHourlyLabel: 'Admin Hourly Rate'
      };
    }
    if (activeIndustry === 'salon') {
      return {
        missedLabel: 'Missed Booking Calls per Month',
        missedMax: 1000,
        missedStep: 10,
        valueLabel: 'Average Ticket + Tip',
        valueMax: 1000,
        valueStep: 10,
        rateLabel: 'Booking Rate',
        rateMax: 100,
        rateStep: 1,
        hoursLabel: 'Front Desk Hours (Weekly)',
        rateHourlyLabel: 'Front Desk Hourly Rate'
      };
    }
    return {
      missedLabel: 'Missed Calls per Month',
      missedMax: 500,
      missedStep: 5,
      valueLabel: 'Average Customer Value',
      valueMax: 5000,
      valueStep: 50,
      rateLabel: 'Close Rate',
      rateMax: 100,
      rateStep: 1,
      hoursLabel: 'Hours Spent on Follow-ups (Weekly)',
      rateHourlyLabel: 'Staff Hourly Rate'
    };
  };

  const labels = getLabels();

  // Helper to generate slider background style with split gradient
  const getSliderBackground = (val: number, max: number) => {
    const percentage = Math.min(Math.max((val / max) * 100, 0), 100);
    const inactiveColor = isLightMode ? 'rgb(243, 244, 247)' : 'rgb(29, 37, 53)';
    const activeColor = '#7d5aff';
    return `linear-gradient(to right, ${activeColor} ${percentage}%, ${inactiveColor} ${percentage}%)`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isLightMode ? 'bg-slate-50 text-slate-900' : 'bg-[#01050e] text-white'}`}>
      
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

      {/* section 1 HERO*/}
      <section className="pt-32 pb-12 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[rgb(113,86,245)] via-[rgb(120,130,250)] to-[rgb(56,189,248)] bg-clip-text text-transparent">
              Hidden Revenue
            </span>
          </h1>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}
          >
            See exactly how much money you're leaving on the table from missed calls and manual follow-ups.
          </p>
        </div>
      </section>

      {/* section 2CALCULATOR*/}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[75rem] mx-auto space-y-6">
          
          {/* Industry Selection Tabs Bar */}
          <div className="flex justify-start overflow-x-auto pb-2">
            <div 
              className="p-1.5 rounded-full border inline-flex items-center gap-1.5 shadow-xl transition-colors duration-300"
              style={{
                backgroundColor: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(7, 11, 22)',
                borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)'
              }}
            >
              {[
                { 
                  id: 'general', 
                  label: 'General',
                  svg: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                },
                { 
                  id: 'salon', 
                  label: 'Salon & Spa',
                  svg: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 3v18M18 3v18M3 6h18M3 18h18"/></svg>
                },
                { 
                  id: 'real-estate', 
                  label: 'Real Estate',
                  svg: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                },
                { 
                  id: 'cleaning', 
                  label: 'Cleaning',
                  svg: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                },
                { 
                  id: 'solar', 
                  label: 'Solar',
                  svg: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2"/></svg>
                },
              ].map((tab) => {
                const isActive = activeIndustry === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleIndustryChange(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive ? 'shadow-md' : ''
                    }`}
                    style={{
                      backgroundColor: isActive ? '#7d5aff' : 'transparent',
                      color: isActive ? '#ffffff' : (isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)')
                    }}
                  >
                    {tab.svg}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculator Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sliders Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Card 1: Revenue Recovery */}
              <div 
                className="rounded-[2rem] border p-6 sm:p-8 space-y-6 shadow-xl transition-colors duration-300"
                style={{
                  backgroundColor: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(7, 11, 22)',
                  borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl text-[#7d5aff]" style={{ backgroundColor: isLightMode ? 'rgba(125,90,255,0.1)' : 'rgba(125,90,255,0.15)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>
                    Revenue Recovery
                  </h3>
                </div>

                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>{labels.missedLabel}</span>
                    <span className="font-bold text-base text-[#7d5aff]">{missedCalls}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={labels.missedMax} 
                    step={labels.missedStep}
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full cursor-pointer h-2 rounded-lg appearance-none transition-all"
                    style={{ background: getSliderBackground(missedCalls, labels.missedMax) }}
                  />
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>{labels.valueLabel}</span>
                    <span className="font-bold text-base text-[#7d5aff]">${avgCustomerValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={labels.valueMax} 
                    step={labels.valueStep}
                    value={avgCustomerValue}
                    onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                    className="w-full cursor-pointer h-2 rounded-lg appearance-none transition-all"
                    style={{ background: getSliderBackground(avgCustomerValue, labels.valueMax) }}
                  />
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>{labels.rateLabel}</span>
                    <span className="font-bold text-base text-[#7d5aff]">{closeRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max={labels.rateMax} 
                    step={labels.rateStep}
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full cursor-pointer h-2 rounded-lg appearance-none transition-all"
                    style={{ background: getSliderBackground(closeRate, labels.rateMax) }}
                  />
                </div>
              </div>

              {/* Card 2: Time & Labor Savings */}
              <div 
                className="rounded-[2rem] border p-6 sm:p-8 space-y-6 shadow-xl transition-colors duration-300"
                style={{
                  backgroundColor: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(7, 11, 22)',
                  borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)'
                }}
              >
                <h3 className="text-xl font-bold" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>
                  Time & Labor Savings
                </h3>

                {/* Slider 4 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>{labels.hoursLabel}</span>
                    <span className="font-bold text-base text-[rgb(56,189,248)]">{followUpHours} hours</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="80" 
                    step="1"
                    value={followUpHours}
                    onChange={(e) => setFollowUpHours(Number(e.target.value))}
                    className="w-full cursor-pointer h-2 rounded-lg appearance-none transition-all"
                    style={{ background: getSliderBackground(followUpHours, 80) }}
                  />
                </div>

                {/* Slider 5 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium" style={{ color: isLightMode ? 'rgb(71, 85, 105)' : 'rgb(148, 163, 184)' }}>{labels.rateHourlyLabel}</span>
                    <span className="font-bold text-base text-[rgb(56,189,248)]">${hourlyRate}/hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="150" 
                    step="1"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full cursor-pointer h-2 rounded-lg appearance-none transition-all"
                    style={{ background: getSliderBackground(hourlyRate, 150) }}
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Output / Results Summary Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div 
                className="rounded-[2rem] border p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden transition-colors duration-300"
                style={{
                  backgroundColor: isLightMode ? 'rgb(255, 255, 255)' : 'rgb(7, 11, 22)',
                  borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(125, 90, 255, 0.4)'
                }}
              >
                <div className="flex items-center gap-2 text-[#7d5aff] font-bold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  <span>Your Potential ROI</span>
                </div>

                <hr style={{ borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)' }} />

                {/* Recovered Revenue */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)' }}>
                    Recovered Revenue (Monthly)
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>
                    ${recoveredRevenueMonthly.toLocaleString()}
                  </div>
                </div>

                <hr style={{ borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)' }} />

                {/* Labor Savings */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)' }}>
                    Labor Savings (Monthly)
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>
                    ${laborSavingsMonthly.toLocaleString()}
                  </div>
                </div>

                <hr style={{ borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)' }} />

                {/* Total Value Generated Box */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)' }}>
                    Total Value Generated
                  </span>
                  <div 
                    className="rounded-2xl p-6 text-center border"
                    style={{
                      backgroundColor: isLightMode ? 'rgb(248, 250, 252)' : 'rgb(1, 5, 14)',
                      borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(30, 41, 59, 0.8)'
                    }}
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-[rgb(56,189,248)] tracking-tight">
                      ${totalValueYearly.toLocaleString()}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)' }}>
                      PER YEAR
                    </span>
                  </div>
                </div>

                {/* Recommended Tier */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: isLightMode ? 'rgb(100, 116, 139)' : 'rgb(148, 163, 184)' }}>
                    Recommended Solution Tier
                  </span>
                  <div 
                    className="rounded-2xl p-4 flex items-center justify-between border"
                    style={{
                      backgroundColor: isLightMode ? 'rgb(248, 250, 252)' : 'rgb(1, 5, 14)',
                      borderColor: isLightMode ? 'rgb(226, 232, 240)' : 'rgba(125, 90, 255, 0.3)'
                    }}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#7d5aff]">{tier.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sm" style={{ color: isLightMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}>{tier.price}<span className="text-xs font-normal">/mo</span></div>
                      <div className="text-xs font-semibold text-emerald-400">{tier.roi} ROI</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full py-4 rounded-xl text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg bg-[#7d5aff] hover:bg-[#6c47ff]"
                >
                  <span>Stop Losing Money</span>
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/*section 3 AUDIT SECTION*/}
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

    </div>
  );
}
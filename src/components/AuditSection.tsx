'use client';

import React from 'react';

interface AuditSectionProps {
  isLightMode?: boolean;
}

export default function AuditSection({ isLightMode = false }: AuditSectionProps) {
  return (
    <section 
      id="contact" 
      className={`py-20 px-6 lg:px-12 transition-colors duration-300 ${
        isLightMode ? 'bg-slate-50 text-slate-900' : 'bg-[#01050e] text-white'
      }`}
    >
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="space-y-6 lg:pr-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-rose-500/25 bg-rose-500/10 text-[#f05252] text-xs font-semibold tracking-wide">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Free Business Leakage Audit</span>
          </div>

          {/* Heading - Fixed line wrapping to match original */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08]">
            Find out exactly how much{' '}
            <span className="text-[#f05252] block sm:inline">
              revenue your website is leaking.
            </span>
          </h2>

          {/* Description */}
          <p className={`text-base leading-relaxed ${
            isLightMode ? 'text-slate-600' : 'text-slate-300/80'
          }`}>
            Most local businesses lose up to 40% of their online leads due to slow response times, missed calls, and lack of automated follow-ups. We'll analyze your current setup and show you the hidden gaps.
          </p>

          {/* Feature Grid - Fixed icon styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                isLightMode ? 'bg-slate-200 text-slate-700' : 'bg-[#0a1329] text-[#7173e6]'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">Conversion Analysis</h3>
                <p className={`text-xs mt-0.5 ${isLightMode ? 'text-slate-500' : 'text-slate-400/80'}`}>
                  See where visitors drop off before contacting you.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                isLightMode ? 'bg-slate-200 text-slate-700' : 'bg-[#0a1329] text-[#22d3ee]'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">Response Time Check</h3>
                <p className={`text-xs mt-0.5 ${isLightMode ? 'text-slate-500' : 'text-slate-400/80'}`}>
                  Evaluate how quickly leads receive a response.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className={`p-8 sm:p-10 rounded-[28px] border transition-all ${
          isLightMode 
            ? 'bg-white border-slate-200 shadow-xl' 
            : 'bg-[#060b18] border-[#131b2e] shadow-[0_0_50px_rgba(112,88,235,0.05)]'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold tracking-tight">
              Request Your Free Audit
            </h3>
            <p className={`text-xs sm:text-sm mt-2 ${isLightMode ? 'text-slate-500' : 'text-slate-400/90'}`}>
              Enter your details below to get your custom report in 24 hours.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className={`block text-xs font-semibold mb-2 ${isLightMode ? 'text-slate-700' : 'text-slate-200'}`}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  isLightMode
                    ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[rgb(127,103,246)]'
                    : 'bg-[#020612] border-[#131b2e] text-white placeholder:text-slate-600 focus:border-[rgb(127,103,246)]'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${isLightMode ? 'text-slate-700' : 'text-slate-200'}`}>
                Work Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  isLightMode
                    ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[rgb(127,103,246)]'
                    : 'bg-[#020612] border-[#131b2e] text-white placeholder:text-slate-600 focus:border-[rgb(127,103,246)]'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-2 ${isLightMode ? 'text-slate-700' : 'text-slate-200'}`}>
                Website URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    isLightMode
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[rgb(127,103,246)]'
                      : 'bg-[#020612] border-[#131b2e] text-white placeholder:text-slate-600 focus:border-[rgb(127,103,246)]'
                  }`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[rgb(112,88,235)] hover:bg-[rgb(99,76,217)] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(112,88,235,0.35)]"
            >
              <span>Scan My Website Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          <p className={`text-center text-[11px] mt-4 ${isLightMode ? 'text-slate-400' : 'text-slate-500'}`}>
            We'll send your custom report directly to your inbox. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
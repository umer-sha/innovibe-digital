'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogClientProps {
  posts: any[];
}

export default function BlogClientPage({ posts }: BlogClientProps) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navLinks = [
    { href: '/', label: 'The Problem' },
    { href: '/#talking-websites', label: 'Talking Websites' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/industry-blueprints', label: 'Industry Blueprints' },
    { href: '/roi-calculator', label: 'ROI Calculator' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const categories = ['All', 'AI Technology', 'Business Growth', 'Automation', 'Marketing'];

  // Filter posts based on search query and selected category
  const filteredPosts = posts.filter((post: any) => {
    const matchesSearch = 
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      post.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

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

          {/* Desktop nav */}
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

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button 
              onClick={() => setIsLightMode(!isLightMode)}
              aria-label="Toggle theme"
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                isLightMode ? 'text-slate-700 hover:bg-slate-200/60' : 'text-slate-300 hover:bg-white/10'
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
                isLightMode ? 'text-slate-700 hover:bg-slate-200/60' : 'text-slate-300 hover:bg-white/10'
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

      {/* MAIN BLOG CONTENT */}
      <main className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-sm text-slate-400 mb-2">Home &gt; Blog</p>
          
          {/* Exact heading style matching the reference image */}
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-5 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
            Insights & Updates
          </h1>
          
          <p className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            Expert advice, industry trends, and practical tips on using AI and automation to scale your local business.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className={`relative flex items-center border rounded-full px-5 py-3.5 transition-all duration-300 shadow-lg ${
              isLightMode ? 'bg-white border-slate-300 text-slate-900' : 'bg-[#090b18] border-slate-800 text-white'
            }`}>
              <svg className="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent focus:outline-none text-sm placeholder-slate-500"
              />
            </div>
          </div>

          {/* Filter Categories Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#7d5aff] text-white shadow-[0_0_15px_rgba(125,90,255,0.5)]' 
                      : isLightMode 
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200' 
                        : 'bg-[#0b1329] text-slate-300 hover:bg-[#131d3a] border border-slate-800/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post: any) => (
              <article 
                key={post._id}
                className={`border rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl ${
                  isLightMode ? 'bg-white border-slate-200 hover:border-[#7d5aff]/50' : 'bg-[#0b1329] border-slate-800/80 hover:border-[#7d5aff]/50'
                }`}
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    {post.mainImageUrl && (
                      <img 
                        src={post.mainImageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {post.category && (
                      <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-white border border-white/10">
                        {post.category}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      {post.publishedAt && (
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      )}
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>

                    <h2 className={`text-xl font-bold mb-3 transition-colors line-clamp-2 ${isLightMode ? 'text-slate-900 group-hover:text-[#7d5aff]' : 'text-white group-hover:text-[#7d5aff]'}`}>
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className={`text-sm line-clamp-3 leading-relaxed mb-6 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link 
                    href={`/blog/${post.slug?.current || post.slug}`}
                    className="text-sm font-semibold text-[#7d5aff] hover:text-[#9b7aff] inline-flex items-center gap-1 transition-colors"
                  >
                    Read Full Article &rarr;
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 text-center py-20 text-slate-500">
              No matching blog posts found. Try checking your spelling or selecting a different category.
            </div>
          )}
        </div>

        {/* NEVER MISS AN UPDATE BANNER SECTION */}
        <section className="max-w-7xl mx-auto px-6">
          <div className={`relative overflow-hidden rounded-3xl border p-8 sm:p-14 text-center transition-colors duration-300 ${
            isLightMode ? 'bg-white border-slate-200 shadow-xl' : 'bg-[rgb(9,10,24)] border-white/10'
          }`}>
            {/* Background calendar vector icon */}
            <div className="absolute right-6 bottom-0 translate-y-6 opacity-5 pointer-events-none hidden sm:block">
              <svg className="w-64 h-64" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                Never Miss an Update
              </h2>
              <p className={`text-sm sm:text-base mb-8 ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Get the latest strategies on AI, automation, and business growth delivered straight to your inbox once a month.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition ${
                    isLightMode ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400' : 'bg-black/40 border-white/10 text-white placeholder-slate-500'
                  }`}
                />
                <button
                  type="submit"
                  className="bg-[rgb(125,90,255)] hover:bg-[rgb(110,75,230)] text-white font-medium text-sm px-7 py-3 rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-purple-500/25"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

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
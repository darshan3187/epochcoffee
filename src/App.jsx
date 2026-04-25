import React, { useState, useEffect, useRef } from 'react';

// --- Epoch Coffee Redesign: "You Belong Here ❤️" ---
// Optimized with Real Verified Assets from EpochCoffee.com

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Locations', href: '#locations' },
    { name: 'Roasting', href: '#roasting' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A120B] font-sans selection:bg-[#3C2A21] selection:text-white overflow-x-hidden">
      {/* Premium Glassmorphism Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl py-3 shadow-sm border-b border-[#1A120B]/5' 
          : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-11 h-11 bg-[#1A120B] flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-serif text-2xl">E</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className={`font-serif text-2xl tracking-tighter leading-none ${isMenuOpen || isScrolled ? 'text-[#1A120B]' : 'text-white'}`}>Epoch</span>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${isMenuOpen || isScrolled ? 'text-[#1A120B]/60' : 'text-white/60'}`}>Coffee</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex gap-10 font-medium uppercase text-[10px] tracking-[0.2em] ${isScrolled ? 'text-[#1A120B]' : 'text-white'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative group py-2 hover:text-red-500 transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#locations" 
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                isScrolled 
                ? 'bg-[#1A120B] text-white' 
                : 'bg-white text-[#1A120B]'
              }`}
            >
              Order Online
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            
            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 z-50 ${
                isMenuOpen 
                ? 'text-[#1A120B]' 
                : isScrolled ? 'text-[#1A120B] hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen || isScrolled ? 'bg-[#1A120B]' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen || isScrolled ? 'bg-[#1A120B]' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen || isScrolled ? 'bg-[#1A120B]' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#FDFCF8] z-40 transition-all duration-700 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className={`text-4xl font-serif text-[#1A120B] transition-all duration-500 delay-[${idx * 100}ms] hover:text-red-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#locations" 
              onClick={() => setIsMenuOpen(false)} 
              className={`mt-10 bg-[#1A120B] text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-2xl transition-all duration-500 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            >
              Visit Our Locations
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i0.wp.com/epochcoffee.com/wp-content/uploads/2020/02/Far-West-strada.jpg?ssl=1" 
            alt="Epoch Coffee Gear" 
            className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20" />
          <div className="grain-overlay opacity-[0.1]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in-up">
          <div className="mb-6 overflow-hidden">
            <span className="block text-white uppercase tracking-[0.5em] text-[8px] sm:text-[10px] font-bold animate-fade-in [animation-delay:200ms] drop-shadow-sm">Established 2006 • Austin, TX</span>
          </div>
          <h1 className="text-white font-serif text-[11vw] sm:text-7xl md:text-8xl lg:text-[9rem] mb-8 lg:mb-10 leading-[0.9] tracking-tight drop-shadow-lg">
            You <span className="italic font-light opacity-90">Belong</span> <br className="sm:hidden" /> Here <span className="text-red-500 drop-shadow-glow animate-pulse">❤️</span>
          </h1>
          <p className="text-white text-base sm:text-lg md:text-2xl mb-10 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic opacity-0 animate-fade-in [animation-delay:600ms] drop-shadow-md">
            Experience Austin's original 24/6 coffee sanctuary. A curated space where specialty craft meets local indie culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in [animation-delay:1000ms]">
            <button className="group relative bg-white text-[#1A120B] px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
              Discover Menu
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center text-[8px] text-white italic">Go</span>
            </button>
            <button className="bg-transparent text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all border border-white/30 backdrop-blur-md">
              Find Your Epoch
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-4 transition-all duration-300">
          <span className="text-white/40 uppercase tracking-widest text-[8px] font-bold group-hover:text-white transition-colors">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </a>
      </section>

      {/* Decorative Branding Line */}
      <div className="relative py-12 flex items-center justify-center">
        <div className="absolute w-full h-px bg-[#1A120B]/5" />
        <div className="relative bg-[#FDFCF8] px-8 text-[#1A120B]/20 font-serif italic text-sm">Est. 2006</div>
      </div>

      {/* About Section - "The Culture" */}
      <section id="about" className="reveal py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-8 lg:mb-10 leading-[1.1] tracking-tighter">
              We brew more than <span className="text-[#3C2A21] italic opacity-60">coffee</span>. We host community.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 text-[#1A120B] text-base md:text-lg leading-relaxed">
              <p>
                Epoch Coffee is a sanctuary for the early birds, the night owls, and everyone in between. Our mission has always been simple: provide a home for Austin’s creative spirit, powered by world-class specialty coffee.
              </p>
              <p>
                From our open-curation art galleries to our sustainable, zero-emissions roasting program, every detail is crafted to ensure that you—and everyone else—truly belong here.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1A120B]">Epoch Philosophy</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
              <img 
                src="https://i0.wp.com/epochcoffee.com/wp-content/uploads/2020/02/nixie.jpg?ssl=1" 
                alt="Epoch Interior Vibe" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 backdrop-blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-xl border border-[#1A120B]/5">
              <span className="text-[#1A120B] font-serif text-5xl block mb-2 leading-none">24/6</span>
              <span className="text-[#3C2A21] text-[10px] uppercase tracking-widest font-bold opacity-60">Austin's Constant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section - "The Hubs" */}
      <section id="locations" className="py-20 md:py-32 bg-[#1A120B] text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] grain-overlay invert pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-6">Austin's Original Stay.</h2>
              <p className="text-white/50 text-lg md:text-xl font-light">Find your corner across our three distinct Austin spaces.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* North Loop */}
            <div className="group relative bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="bg-red-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">The Original</span>
              </div>
              <h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">North Loop</h3>
              <p className="text-white/50 mb-10 leading-relaxed font-light italic">
                The heart of Epoch. 24/6 operations, rotating gallery, and that classic indie vibe.
              </p>
              <div className="pt-10 border-t border-white/10 flex flex-col gap-4">
                <div className="flex justify-between text-xs tracking-widest opacity-60 uppercase font-bold">
                  <span>Open 24/6</span>
                  <span>Austin, TX</span>
                </div>
                <button className="w-full bg-white text-[#1A120B] py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#F5F5F0] transition-all shadow-xl">
                  Get Directions
                </button>
              </div>
            </div>

            {/* The Village */}
            <div className="group relative bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
              </div>
              <h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">The Village</h3>
              <p className="text-white/50 mb-10 leading-relaxed font-light italic">
                A modern escape at Anderson Ln. Perfect for focus, work, and that specialty roasting flavor.
              </p>
              <div className="pt-10 border-t border-white/10 flex flex-col gap-4">
                <div className="flex justify-between text-xs tracking-widest opacity-60 uppercase font-bold">
                  <span>6:30am - 8pm</span>
                  <span>North Austin</span>
                </div>
                <button className="w-full bg-white text-[#1A120B] py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#F5F5F0] transition-all shadow-xl">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Far West */}
            <div className="group relative bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
              </div>
              <h3 className="font-serif text-3xl mb-4 group-hover:translate-x-2 transition-transform">Far West</h3>
              <p className="text-white/50 mb-10 leading-relaxed font-light italic">
                Our cozy neighborhood spot. Warm community, great views, and always the best beans.
              </p>
              <div className="pt-10 border-t border-white/10 flex flex-col gap-4">
                <div className="flex justify-between text-xs tracking-widest opacity-60 uppercase font-bold">
                  <span>6:30am - 6pm</span>
                  <span>Far West</span>
                </div>
                <button className="w-full bg-white text-[#1A120B] py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#F5F5F0] transition-all shadow-xl">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roasting Program Section - "The Craft" */}
      <section id="roasting" className="py-32 px-6 bg-[#FDFCF8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(60,42,33,0.2)]">
              <img 
                src="https://i0.wp.com/epochcoffee.com/wp-content/uploads/2023/07/three-new-coffee-2-scaled.jpg?ssl=1" 
                alt="Epoch Specialty Coffee Bags" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#3C2A21] rounded-full -z-0 translate-x-10 translate-y-10 opacity-5 shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Zero Emissions Roasting</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-8 lg:mb-10 leading-none tracking-tighter text-[#1A120B]">Specialty Batch. <br /><span className="italic font-light text-[#3C2A21]/60">Pure Conscience.</span></h2>
            <div className="space-y-8 text-lg text-[#1A120B] leading-relaxed">
              <p>
                We roast our coffee locally in small batches using a state-of-the-art 100% electric roaster. This zero-emissions process isn’t just better for the Austin air—it’s better for the bean.
              </p>
              <p>
                By avoiding gas-powered roasting, we prevent charred flavors and unlock the delicate, vibrant notes inherent in every specialty origin we source.
              </p>
            </div>
            <div className="mt-12">
              <button className="group relative overflow-hidden bg-[#1A120B] text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:pr-14 active:scale-95 shadow-2xl">
                Explore Our Blends
                <svg className="absolute top-1/2 -translate-y-1/2 right-6 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - "The Art" */}
      <section id="gallery" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-6">Gallery Space.</h2>
              <p className="text-[#3C2A21]/60 text-lg md:text-xl font-light italic">Supporting the local Austin scene, one wall at a time.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery Item 1 - Latte Art */}
            <div className="aspect-square rounded-[3rem] overflow-hidden group relative">
              <img 
                src="https://i0.wp.com/epochcoffee.com/wp-content/uploads/2020/02/lattes--scaled.jpg?ssl=1" 
                alt="Epoch Latte Art" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-serif italic text-2xl">Signature Pour</span>
              </div>
            </div>

            {/* Gallery Item 2 - Preparation */}
            <div className="aspect-square rounded-[3rem] overflow-hidden group relative">
              <img 
                src="https://i0.wp.com/epochcoffee.com/wp-content/uploads/2023/07/website-scaled.jpg?ssl=1" 
                alt="Coffee Preparation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-serif italic text-2xl">Daily Craft</span>
              </div>
            </div>

            {/* Gallery Item 3 - Interior Detail */}
            <div className="aspect-square rounded-[3rem] overflow-hidden group relative">
              <img 
                src="public/hero.png" 
                alt="Austin Cafe Vibe" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-serif italic text-2xl">The Vibe</span>
              </div>
            </div>

            {/* Gallery Item 4 - Community Space */}
            <div className="aspect-square rounded-[3rem] overflow-hidden group relative bg-[#3C2A21] flex flex-col items-center justify-center p-12 text-center">
              <h4 className="text-white font-serif text-3xl mb-6 italic">Join the Gallery</h4>
              <p className="text-white/60 text-sm tracking-widest uppercase leading-loose max-w-xs">We host rotating local art every month. Showcase your work at Epoch.</p>
              <button className="mt-10 text-white text-[10px] uppercase tracking-widest font-black border-b border-white/20 pb-2 hover:border-white transition-colors">Apply to Exhibit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A120B] text-white pt-32 pb-12 px-6 relative overflow-hidden">
        {/* Grain overlay again for continuity */}
        <div className="absolute inset-0 opacity-[0.02] grain-overlay invert pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 mb-32">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl rotate-3">
                  <span className="text-[#1A120B] font-serif text-3xl">E</span>
                </div>
                <h3 className="font-serif text-4xl">Epoch Coffee</h3>
              </div>
              <p className="text-white/50 max-w-md mb-12 text-xl font-light leading-relaxed italic">
                "You Belong Here" isn't just a tagline—it's our promise to the Austin community. Since 2006, we've been brewing conversation and craft. ❤️
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/epochcoffee" target="_blank" rel="noreferrer" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1A120B] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-10 opacity-30">Quick Navigation</h4>
              <ul className="space-y-6 text-lg font-serif italic">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-red-500 transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-10 opacity-30">Join the List</h4>
              <p className="text-white/40 text-xs mb-8 leading-loose">Get updates on new zero-emissions roasts and upcoming gallery exhibits.</p>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent border-b border-white/10 py-4 w-full focus:outline-none focus:border-red-500 transition-colors text-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors">Join</button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
              <span>© 2026 Epoch Coffee</span>
              <div className="w-1 h-1 bg-white/10 rounded-full" />
              <span>Austin, TX</span>
            </div>
            <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
        
        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="absolute right-10 bottom-10 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-[#1A120B] transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </footer>
    </div>
  );
};

export default App;

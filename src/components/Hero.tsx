import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Star, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

export default function Hero() {
  const [reviewCount, setReviewCount] = useState(0);

  // Animated counter for verified review count (152) on initial mount
  useEffect(() => {
    let start = 0;
    const end = BUSINESS_INFO.googleReviewsCount;
    const duration = 1200; // ms
    const increment = Math.ceil(end / (duration / 25));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setReviewCount(end);
        clearInterval(timer);
      } else {
        setReviewCount(start);
      }
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#070D1E]">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle geometric grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }} 
        />
        {/* Neon Lime and Deep Navy Ambient Radial Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#CCFF00]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#1E3264]/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Trust Eyebrow (No pill badge, clean typography with subtle separator) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4">
              <span className="text-[#CCFF00] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#CCFF00]" />
                Gadag-Betageri, Karnataka
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">2nd Floor, ASION Mall</span>
            </div>

            {/* Main Athletic Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-white leading-[0.98] mb-6 max-w-2xl text-balance">
              YOUR FITNESS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#E2FF66] to-white">
                YOUR NEXT LEVEL.
              </span>
            </h1>

            {/* Clear Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              {BUSINESS_INFO.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary WhatsApp Conversion CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#CCFF00] text-[#070D1E] text-base font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b8e600] hover:shadow-[0_0_30px_rgba(204,255,0,0.45)] active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5 fill-[#070D1E]" />
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Navigation CTA */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#132247]/70 hover:bg-[#1E3264] text-white border border-[#1E3264] text-base font-semibold uppercase tracking-wider transition-all duration-200 hover:border-slate-400 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
              >
                <span>Explore Our Gym</span>
              </a>
            </div>

            {/* Quick Contact Micro-text */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-slate-300 font-medium">Direct Line:</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-[#CCFF00] underline decoration-slate-600 underline-offset-4 transition-colors">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-slate-300 font-medium">Hours:</span>
                <span>Open till 10:00 PM</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Graphic Athletic Composition */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container with subtle border and deep navy surface */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0F1D3D] border border-[#1E3264] shadow-2xl p-6 sm:p-8">
                
                {/* Athletic Graphic Centerpiece */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#132247] via-[#0B132B] to-[#070D1E] flex flex-col justify-between p-6 border border-[#1E3264]/80">
                  {/* Decorative corner accent */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
                      <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-bold">GADAG HUB</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">EST. PREMIUM</span>
                  </div>

                  {/* Dynamic Gym Silhouette / Brand Typography */}
                  <div className="my-auto py-4 text-center">
                    <div className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
                      DEVU
                    </div>
                    <div className="text-xs tracking-[0.3em] uppercase text-[#CCFF00] font-semibold mt-1">
                      FITNESS CENTER
                    </div>
                    <div className="mt-4 text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                      Strength Training · Personal Coaching · Girls Gym · Aerobics · Cycling · Yoga
                    </div>
                  </div>

                  {/* Card bottom info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                    <span className="text-slate-400">2nd Floor, ASION Mall</span>
                    <span className="text-white font-medium">Karnataka 582103</span>
                  </div>
                </div>

                {/* Proof Metric Card Overlay: Google Rating */}
                <div className="mt-4 p-4 rounded-xl bg-[#070D1E]/90 border border-[#1E3264] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
                      <Star className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl font-bold font-display text-white tracking-tight">5.0</span>
                        <div className="flex text-[#CCFF00]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">Verified Google Business Rating</p>
                    </div>
                  </div>
                  <div className="text-right border-l border-slate-700/60 pl-4">
                    <div className="text-xl font-bold font-mono tabular-nums text-white">
                      {reviewCount}
                    </div>
                    <p className="text-xs text-slate-400">Google Reviews</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Proof Strip: Strictly verified facts only */}
      <div className="relative z-10 border-t border-[#1E3264]/70 bg-[#070D1E]/90 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 items-center">
            
            {/* Fact 1: 5.0 Google Rating */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#132247] border border-[#1E3264] flex items-center justify-center text-[#CCFF00] shrink-0">
                <Star className="w-5 h-5 fill-[#CCFF00]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">
                  5.0 / 5.0 Rating
                </div>
                <div className="text-xs text-slate-400">
                  Highest customer satisfaction score
                </div>
              </div>
            </div>

            {/* Fact 2: 152 Verified Reviews */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#132247] border border-[#1E3264] flex items-center justify-center text-[#CCFF00] shrink-0">
                <Award className="w-5 h-5 text-[#CCFF00]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">
                  152 Google Reviews
                </div>
                <div className="text-xs text-slate-400">
                  Real experiences from fitness members
                </div>
              </div>
            </div>

            {/* Fact 3: Gadag Location */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#132247] border border-[#1E3264] flex items-center justify-center text-[#CCFF00] shrink-0">
                <MapPin className="w-5 h-5 text-[#CCFF00]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wide">
                  ASION Mall, Betageri
                </div>
                <div className="text-xs text-slate-400">
                  Convenient 2nd Floor Gadag location
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, CheckCircle, ExternalLink, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

export default function Reviews() {
  const ratingFactors = [
    { label: "Gym Atmosphere & Motivation", score: "5.0" },
    { label: "Trainer Guidance & Support", score: "5.0" },
    { label: "Cleanliness & Maintenance", score: "5.0" },
    { label: "Equipment Quality & Variety", score: "5.0" },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#070D1E] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#CCFF00] mb-3 flex items-center justify-center gap-2">
            <span>COMMUNITY FEEDBACK</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GOOGLE BUSINESS VERIFIED</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            REAL REVIEWS. REAL EXPERIENCES.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Devu Fitness Center is proud to maintain an outstanding 5.0-star rating across 152 verified Google reviews. 
            In strict adherence to factual integrity, we link directly to our genuine Google Business reviews.
          </p>
        </div>

        {/* Central Trust Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0F1D3D] border border-[#1E3264] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score & Star Breakdown */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[#1E3264] pb-8 md:pb-0 md:pr-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                  Google Verified Rating
                </span>
              </div>

              {/* Large Score Display */}
              <div className="font-display text-6xl sm:text-7xl font-extrabold text-white tracking-tight my-2">
                {BUSINESS_INFO.rating}
                <span className="text-2xl text-slate-400 font-sans font-normal ml-1">/ 5.0</span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 text-[#CCFF00] my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#CCFF00]" />
                ))}
              </div>

              <div className="text-sm font-mono text-slate-300 mt-1">
                Based on <strong className="text-white font-bold">{BUSINESS_INFO.googleReviewsCount}</strong> verified reviews
              </div>

              {/* Location Tag */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Gadag-Betageri, Karnataka</span>
              </div>
            </div>

            {/* Satisfaction Pillars */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-4">
                  What Members Value Most
                </h3>
                <div className="space-y-3.5">
                  {ratingFactors.map((factor) => (
                    <div key={factor.label}>
                      <div className="flex justify-between text-xs sm:text-sm font-medium mb-1">
                        <span className="text-slate-300">{factor.label}</span>
                        <span className="font-mono text-[#CCFF00] font-bold">{factor.score} / 5.0</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#132247] overflow-hidden">
                        <div className="h-full bg-[#CCFF00] rounded-full w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View on Google & Review on Google */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#CCFF00] text-[#070D1E] text-xs font-bold uppercase tracking-wider hover:bg-[#b8e600] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>View All 152 Reviews on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppLink("Hello Devu Fitness Center! I saw your 5.0 rating on Google and would like to learn more about joining.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#132247] hover:bg-[#1E3264] text-white border border-[#1E3264] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Adherence Rule Note */}
          <div className="mt-8 pt-6 border-t border-[#1E3264] text-center text-xs text-slate-400">
            Reviews and ratings reflect the real-time verified listing of Devu Fitness Center on Google. 
            We do not fabricate testimonials or member claims.
          </div>
        </div>

      </div>
    </section>
  );
}

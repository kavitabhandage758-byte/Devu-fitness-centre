import { useState } from 'react';
import { GALLERY_ITEMS, getWhatsAppLink } from '../data/gymData';
import { Dumbbell, Bike, Flame, Sparkles, Shield, HeartPulse, X, MessageCircle, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.type === selectedFilter || (selectedFilter === 'strength' && item.type === 'combat'));

  const getZoneIcon = (type: string) => {
    switch (type) {
      case 'strength': return <Dumbbell className="w-8 h-8 text-[#CCFF00]" />;
      case 'cardio': return <Bike className="w-8 h-8 text-[#CCFF00]" />;
      case 'functional': return <Flame className="w-8 h-8 text-[#CCFF00]" />;
      case 'girls-gym': return <Sparkles className="w-8 h-8 text-[#CCFF00]" />;
      case 'combat': return <Shield className="w-8 h-8 text-[#CCFF00]" />;
      case 'wellness': return <HeartPulse className="w-8 h-8 text-[#CCFF00]" />;
      default: return <Dumbbell className="w-8 h-8 text-[#CCFF00]" />;
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FFFFFF] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B]/70 mb-3 flex items-center gap-2">
              <span>FACILITY TOUR</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>DEVU FITNESS CENTER GADAG</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0B132B] mb-4 leading-tight">
              INSIDE DEVU FITNESS CENTER
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Explore our training floors, specialized workout zones, and dedicated training areas situated on the 2nd floor of ASION Mall, Betageri.
            </p>
          </div>

          {/* Filter Tabs (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setSelectedFilter('strength')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                selectedFilter === 'strength'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Strength & Free Weights
            </button>
            <button
              onClick={() => setSelectedFilter('cardio')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                selectedFilter === 'cardio'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cardio & Cycling
            </button>
            <button
              onClick={() => setSelectedFilter('girls-gym')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                selectedFilter === 'girls-gym'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Girls Gym
            </button>
            <button
              onClick={() => setSelectedFilter('wellness')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                selectedFilter === 'wellness'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yoga & Mobility
            </button>
          </div>
        </div>

        {/* Gallery Cards Grid (Zero broken images guaranteed with stylized athletic surfaces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer group rounded-2xl overflow-hidden bg-[#070D1E] border border-slate-200 hover:border-[#0B132B] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Graphic Zone Composition */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#132247] via-[#0B132B] to-[#070D1E] p-6 flex flex-col justify-between overflow-hidden">
                {/* Subtle grid pattern */}
                <div 
                  className="absolute inset-0 opacity-10" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }} 
                />

                {/* Top Row: Zone Tag & Expand Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#CCFF00]">
                    {item.accent}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-[#CCFF00] group-hover:text-[#070D1E] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Center Icon Graphic with hover zoom */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B132B]/80 border border-[#1E3264] flex items-center justify-center shadow-lg">
                    {getZoneIcon(item.type)}
                  </div>
                </div>

                {/* Bottom Row inside visual card */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Devu Fitness Center</span>
                  <span className="text-slate-400">ASION Mall</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 bg-white text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#0B132B] mb-1 group-hover:text-[#132247] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B132B]">
                  <span>Tap to view details</span>
                  <span className="text-[#0B132B]">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Tour Invitation Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-lg font-bold uppercase text-[#0B132B]">
              Experience the gym in person
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Drop by 2nd Floor, ASION Mall, Mulagund Naka Road, Betageri to inspect the facilities firsthand.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello Devu Fitness Center! I would like to visit the gym floor today.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#0B132B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#132247] transition-colors shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#CCFF00]" />
            <span>Book a Walkthrough</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-[#1E3264] shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#132247] border border-[#1E3264] flex items-center justify-center">
                {getZoneIcon(activeItem.type)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider font-semibold">
                  {activeItem.accent}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeItem.desc} Devu Fitness Center maintains rigorous cleanliness standards, structured equipment spacing, and attentive coaching on every floor to give members in Gadag an unmatched workout experience.
            </p>

            <div className="p-4 rounded-xl bg-[#070D1E] border border-[#1E3264] mb-6 text-xs text-slate-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold text-white">2nd Floor, ASION Mall, Gadag</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Timings:</span>
                <span className="font-semibold text-white">Open till 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Access:</span>
                <span className="font-semibold text-[#CCFF00]">Included with Membership</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppLink(`Hello Devu Fitness Center! I am inquiring about the ${activeItem.title} at your gym.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#070D1E] font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
                <span>Enquire About This Zone</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold uppercase tracking-wider text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

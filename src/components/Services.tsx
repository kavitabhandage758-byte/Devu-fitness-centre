import { useState } from 'react';
import { 
  Dumbbell, 
  UserCheck, 
  Zap, 
  Flame, 
  Bike, 
  Music, 
  Shield, 
  HeartPulse, 
  Apple, 
  Sparkles,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { CONFIRMED_SERVICES, GymService, getWhatsAppLink } from '../data/gymData';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'cardio' | 'wellness' | 'specialized'>('all');

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Bike': return <Bike className="w-6 h-6" />;
      case 'Music': return <Music className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Apple': return <Apple className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <Dumbbell className="w-6 h-6" />;
    }
  };

  const filteredServices = activeFilter === 'all' 
    ? CONFIRMED_SERVICES 
    : CONFIRMED_SERVICES.filter(service => service.category === activeFilter);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B132B] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#CCFF00] mb-3 flex items-center gap-2">
              <span>EXPLORE DISCIPLINES</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">10 CONFIRMED OFFERINGS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              FIND YOUR WAY TO FITNESS
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore our complete suite of training programs confirmed by Devu Fitness Center. 
              Select any program to review its details and connect directly on WhatsApp to confirm current batch timings.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Permitted segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#070D1E] border border-[#1E3264] rounded-xl shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#CCFF00] text-[#070D1E] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#132247]'
              }`}
            >
              All (10)
            </button>
            <button
              onClick={() => setActiveFilter('strength')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                activeFilter === 'strength'
                  ? 'bg-[#CCFF00] text-[#070D1E] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#132247]'
              }`}
            >
              Strength
            </button>
            <button
              onClick={() => setActiveFilter('cardio')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                activeFilter === 'cardio'
                  ? 'bg-[#CCFF00] text-[#070D1E] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#132247]'
              }`}
            >
              Cardio
            </button>
            <button
              onClick={() => setActiveFilter('specialized')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                activeFilter === 'specialized'
                  ? 'bg-[#CCFF00] text-[#070D1E] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#132247]'
              }`}
            >
              Specialized
            </button>
            <button
              onClick={() => setActiveFilter('wellness')}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                activeFilter === 'wellness'
                  ? 'bg-[#CCFF00] text-[#070D1E] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#132247]'
              }`}
            >
              Wellness
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: GymService) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-[#0F1D3D] border border-[#1E3264] hover:border-[#CCFF00]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#132247] border border-[#1E3264] flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-[#070D1E] transition-colors duration-200">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Button: Directly opens WhatsApp with custom inquiry */}
              <div className="pt-4 border-t border-[#1E3264]/70">
                <a
                  href={getWhatsAppLink(service.whatsappQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#CCFF00] group-hover:text-white transition-colors py-1.5"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Enquire on WhatsApp
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note about confirmation */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          All programs are officially confirmed with Devu Fitness Center. For custom personal training packages and daily batch schedules, connect directly with gym management.
        </div>

      </div>
    </section>
  );
}

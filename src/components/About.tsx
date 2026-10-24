import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

export default function About() {
  const highlights = [
    {
      title: "Comprehensive Training Options",
      description: "From heavy free weights and cardio to kickboxing and mindful yoga, explore diverse paths suited to your individual goals."
    },
    {
      title: "Welcoming & Inclusive Environment",
      description: "A motivating fitness space in Gadag designed for both beginners stepping into a gym for the first time and experienced athletes."
    },
    {
      title: "Dedicated Girls Gym",
      description: "Specialized, comfortable sessions and spaces where women can train with total focus, guidance, and community support."
    },
    {
      title: "Prime ASION Mall Location",
      description: "Centrally positioned on the 2nd Floor of ASION Mall, Betageri with easy road access, ample parking, and extended hours till 10:00 PM."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B]/70 mb-3 flex items-center gap-2">
            <span>ABOUT DEVU FITNESS CENTER</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>GADAG-BETAGERI</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0B132B] mb-6 leading-tight text-balance">
            A SPACE TO MOVE FORWARD
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Located on the 2nd floor of ASION Mall in Gadag-Betageri, Devu Fitness Center is built 
            to help you discover your strength, build daily vitality, and embrace a sustainable, healthy lifestyle. 
            Whether your journey begins with strength training, high-energy group cardio, or mindful mobility, 
            our gym offers a focused and supportive setting to help you progress step by step.
          </p>
        </div>

        {/* Feature Cards Grid (Rounded cards, clean white/slate surfaces, no pill badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono font-semibold text-slate-600">
                    {String(index + 1).padStart(2, '0')}.
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#0B132B] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#0B132B] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact and Owner Consultation Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0B132B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-2 text-white">
              VISIT OUR GYM IN GADAG
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Step in for a walkthrough, explore our equipment floor, and consult directly on batch timings and membership plans.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={getWhatsAppLink("Hello Devu Fitness Center! I would like to schedule a visit to explore the gym.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#CCFF00] text-[#070D1E] text-sm font-bold uppercase tracking-wider hover:bg-[#b8e600] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
            >
              <span>View Location</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

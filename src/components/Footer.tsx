import { Phone, MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1E] text-slate-400 border-t border-[#1E3264]/60 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-white">
              DEVU <span className="text-[#CCFF00]">FITNESS</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Your fitness. Your next level. Premier gym and fitness destination located on the 2nd floor of ASION Mall, Gadag-Betageri, Karnataka. Dedicated to healthy lifestyles and positive transformation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-lg bg-[#132247] hover:bg-[#CCFF00] hover:text-[#070D1E] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-9 h-9 rounded-lg bg-[#132247] hover:bg-[#CCFF00] hover:text-[#070D1E] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                aria-label="Phone Call"
                className="w-9 h-9 rounded-lg bg-[#132247] hover:bg-[#CCFF00] hover:text-[#070D1E] text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 3) */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Center</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Classes</a>
              </li>
              <li>
                <a href="#bmi-calculator" className="hover:text-white transition-colors">BMI Calculator</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Verified Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Facility Tour</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Key Services (Col 4) */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Programs
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Weight & Strength Training</li>
              <li>Personal Coaching (1-on-1)</li>
              <li>Girls Gym (Dedicated space)</li>
              <li>Aerobics & HIIT Workouts</li>
              <li>Indoor Cycling</li>
              <li>Kickboxing Conditioning</li>
              <li>Yoga & Pilates</li>
            </ul>
          </div>

          {/* Location & Hours (Col 5) */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Location & Hours
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>
                  2nd Floor, ASION Mall, CJ8C+RP4, Mulagund Naka Road, Betageri, Gadag-Betageri, Karnataka 582103
                </span>
              </div>
              <div className="pt-1 text-slate-400">
                <strong className="text-white block mb-0.5">Operating Hours:</strong>
                Closes at 10:00 PM<br />
                Morning & evening batches.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E3264]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Devu Fitness Center. All rights reserved. Gadag-Betageri, Karnataka.
          </div>
          <div className="flex items-center gap-6">
            <a href="#bmi-calculator" className="hover:text-slate-300 transition-colors">
              Health Disclaimer
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

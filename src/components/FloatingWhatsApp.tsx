import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/gymData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip on hover/focus */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#070D1E] text-white text-xs font-medium py-1.5 px-3 rounded-lg border border-[#1E3264] shadow-lg animate-in fade-in slide-in-from-right-2 duration-150 whitespace-nowrap">
          Chat with Devu Fitness
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Direct WhatsApp enquiry with Devu Fitness Center"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
      >
        {/* Subtle pulsing ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />
        
        {/* Lucide WhatsApp Message icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
}

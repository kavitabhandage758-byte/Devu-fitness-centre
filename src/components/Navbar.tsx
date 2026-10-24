import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'BMI Calculator', href: '#bmi-calculator' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-[#1E3264]/60 py-3 shadow-lg shadow-black/40'
          : 'bg-[#0B132B]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
          >
            <span className="font-display uppercase tracking-wider text-white">
              DEVU <span className="text-[#CCFF00]">FITNESS</span>
            </span>
          </a>

          {/* Zone 2: 4-5 Navigation Links (single-line, clean text) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300 whitespace-nowrap"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CCFF00] ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#CCFF00] font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CCFF00] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Join Now WhatsApp button) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#CCFF00] text-[#070D1E] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] active:scale-95 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
              <span>Join Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join via WhatsApp"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#CCFF00] text-[#070D1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E]/98 border-b border-[#1E3264] px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium rounded-md text-slate-200 hover:text-[#CCFF00] hover:bg-[#132247]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1E3264]/60">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#CCFF00] text-[#070D1E] font-bold uppercase tracking-wider text-sm transition-colors hover:bg-[#b8e600]"
              >
                <MessageCircle className="w-5 h-5 fill-[#070D1E]" />
                <span>Join Now via WhatsApp</span>
              </a>
              <div className="mt-3 text-center text-xs text-slate-400">
                Call: <a href="tel:+919902059061" className="text-white font-medium hover:underline">{BUSINESS_INFO.displayPhone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

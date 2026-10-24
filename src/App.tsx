/**
 * Devu Fitness Center - Main Application
 * Modern Urban Fitness theme in Midnight Navy, Crisp White & Neon Lime
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BmiCalculator from './components/BmiCalculator';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'bmi-calculator', 'reviews', 'gallery', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 flex flex-col font-sans selection:bg-[#CCFF00] selection:text-[#070D1E]">
      {/* Top Bar Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow: Proposition -> Mechanism -> Proof -> Conversion */}
      <main className="flex-1">
        {/* 1. Hero Section (Midnight Navy + Neon Lime, Verified Statistics) */}
        <Hero />

        {/* 2. About Section (Crisp White & Midnight Navy, Authentic Mission) */}
        <About />

        {/* 3. Services Section (10 Confirmed Offerings with WhatsApp CTAs) */}
        <Services />

        {/* 4. BMI Calculator (Browser-only, Metric/Imperial, Full Classification) */}
        <BmiCalculator />

        {/* 5. Verified Reviews (5.0 Stars, 152 Google Reviews, Verified Listing) */}
        <Reviews />

        {/* 6. Facility & Training Zones Showcase */}
        <Gallery />

        {/* 7. Search & AEO Frequently Asked Questions */}
        <Faq />

        {/* 8. Contact & Location (ASION Mall Gadag, Directions, WhatsApp Composer) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

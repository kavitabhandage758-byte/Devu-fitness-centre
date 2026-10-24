import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink } from '../data/gymData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#0B132B] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#CCFF00] mb-3 flex items-center justify-center gap-2">
            <span>FREQUENT QUESTIONS</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>CLEAR ANSWERS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            QUESTIONS & ANSWERS
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Find immediate answers regarding gym timings, location, services, and female training sessions at Devu Fitness Center in Gadag.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0F1D3D] border-[#CCFF00]/50 shadow-lg'
                    : 'bg-[#070D1E]/90 border-[#1E3264] hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#CCFF00] text-[#070D1E] rotate-180' : 'bg-[#132247] text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#1E3264]/40 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#070D1E] border border-[#1E3264] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold uppercase text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#CCFF00]" />
              <span>Have another question?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Contact Devu Fitness Center directly on WhatsApp for prompt responses to questions.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello Devu Fitness Center! I have a question about the gym.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#CCFF00] text-[#070D1E] text-xs font-bold uppercase tracking-wider hover:bg-[#b8e600] transition-colors shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

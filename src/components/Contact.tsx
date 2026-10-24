import { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  Send
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/gymData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('General Membership');
  const [visitorName, setVisitorName] = useState('');
  const [customQuery, setCustomQuery] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateComposerWhatsAppLink = () => {
    let msg = `Hello Devu Fitness Center!`;
    if (visitorName.trim()) {
      msg += ` My name is ${visitorName.trim()}.`;
    }
    msg += ` I visited your website and would like to inquire about: ${selectedInterest}.`;
    if (customQuery.trim()) {
      msg += ` Additional note: ${customQuery.trim()}`;
    }
    return getWhatsAppLink(msg);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B]/70 mb-3 flex items-center gap-2">
            <span>GET IN TOUCH</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>CONNECT WITH DEVU FITNESS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0B132B] mb-4 leading-tight">
            READY TO GET STARTED?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take your next fitness step today. Reach out to Devu Fitness Center directly via phone, WhatsApp, or visit us in person at ASION Mall, Gadag-Betageri.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Business Information Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B132B] text-[#CCFF00] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Direct Phone Call
                </div>
                <div className="text-lg font-bold text-[#0B132B]">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Tap to call for immediate membership inquiries and schedule confirmation.
                </p>
                <div className="mt-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B132B] hover:text-[#132247] uppercase tracking-wider"
                  >
                    <span>Call Now ({BUSINESS_INFO.phone})</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B132B] text-[#CCFF00] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 fill-[#CCFF00]" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  WhatsApp Support & Enquiry
                </div>
                <div className="text-lg font-bold text-[#0B132B]">
                  +{BUSINESS_INFO.whatsappNumber}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Connect instantly to receive membership details, batch timings, and personal training options.
                </p>
                <div className="mt-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B132B] hover:bg-[#132247] text-[#CCFF00] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#CCFF00]" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Full Address & Directions Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B132B] text-[#CCFF00] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                  Gym Location
                </div>
                <div className="text-base font-bold text-[#0B132B]">
                  {BUSINESS_INFO.address.line1}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B132B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#132247] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>Get Directions</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Operational Hours & Instagram Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Hours
                  </div>
                  <div className="text-sm font-bold text-[#0B132B] mt-0.5">
                    Closes at 10:00 PM
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Morning & evening batches available.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Instagram className="w-5 h-5 text-[#0B132B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Instagram
                  </div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#0B132B] hover:text-[#132247] hover:underline block mt-0.5"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Follow workout reels & updates.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Composer */}
          <div className="lg:col-span-6 bg-[#0B132B] text-white rounded-3xl p-6 sm:p-10 border border-[#1E3264] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
                  DIRECT WHATSAPP ENQUIRY
                </span>
                <span className="text-xs text-slate-400">Response via WhatsApp</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Choose your program of interest, add any specific questions, and open a direct chat with Devu Fitness Center on WhatsApp.
              </p>

              {/* Form Controls */}
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="visitorName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    id="visitorName"
                    type="text"
                    placeholder="Enter your name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-[#1E3264] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] text-sm"
                  />
                </div>

                {/* Interest Selector */}
                <div>
                  <label htmlFor="interestSelect" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Select Your Area of Interest
                  </label>
                  <select
                    id="interestSelect"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-[#1E3264] text-white focus:outline-none focus:ring-2 focus:ring-[#CCFF00] text-sm font-medium"
                  >
                    <option value="General Membership">General Gym Membership</option>
                    <option value="Weight Training">Weight Training & Free Weights</option>
                    <option value="Personal Training (1-on-1)">Personal Training (1-on-1)</option>
                    <option value="Girls Gym Batch Timings">Girls Gym Batch Timings & Space</option>
                    <option value="Aerobics & HIIT Workouts">Aerobics & HIIT Workouts</option>
                    <option value="Indoor Cycling">Indoor Cycling & Spin</option>
                    <option value="Dance Fitness">Dance Fitness Sessions</option>
                    <option value="Kickboxing Conditioning">Kickboxing Conditioning</option>
                    <option value="Yoga and Pilates">Yoga and Pilates</option>
                    <option value="Nutrition Counseling">Nutrition Counseling</option>
                  </select>
                </div>

                {/* Custom Note */}
                <div>
                  <label htmlFor="customQuery" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Additional Message or Preferred Timings
                  </label>
                  <textarea
                    id="customQuery"
                    rows={3}
                    placeholder="e.g. I prefer morning batches between 6 AM to 8 AM. Please share fee structure."
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-[#1E3264] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Launch WhatsApp Button */}
            <div className="mt-8 pt-6 border-t border-[#1E3264]">
              <a
                href={generateComposerWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#070D1E] font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Send className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>
              <div className="mt-3 text-center text-xs text-slate-400">
                Opens directly in WhatsApp app or web.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

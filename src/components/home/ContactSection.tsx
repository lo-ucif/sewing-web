import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Send } from 'lucide-react';
import Button from '../ui/Button';

export const ContactSection: React.FC = () => {
  const whatsappNumber = '15550199821'; // Example WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Maison%20de%20Couture,%20I%20am%20interested%20in%20discussing%20a%20bespoke%20sewing%20project.`;

  return (
    <section className="relative bg-dark text-white py-24 overflow-hidden border-t border-white/5">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(#c8a96a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative Needle Motif */}
        <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6 text-gold">
          <Send className="w-4.5 h-4.5 rotate-45" />
        </div>

        {/* Header */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide leading-tight">
          Let’s Bring Your <span className="italic text-gold font-normal">Dream Garment</span> to Life
        </h2>
        
        <p className="font-sans text-white/70 text-sm md:text-base font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Skip the endless phone calls and scattered images. Let's arrange a direct fitting or digital consultation to discuss your fabrics, measurements, and design aspirations.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* WhatsApp Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="gold" size="lg" className="w-full flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 fill-current" /> Contact via WhatsApp
            </Button>
          </a>

          {/* Contact Details Page */}
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full text-white border-white/20 hover:border-white hover:bg-white hover:text-dark flex items-center justify-center gap-2"
            >
              Fill Booking Form <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Social Link Mock */}
        <div className="flex items-center justify-center gap-2 text-white/55 hover:text-gold transition-colors duration-300">
          <svg
            className="w-4 h-4 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-widest uppercase font-medium"
          >
            Follow our craft on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

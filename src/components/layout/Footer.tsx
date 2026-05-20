import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand details */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-white mb-6">
            <Scissors className="w-5 h-5 text-gold transform rotate-90" />
            <span className="font-serif text-lg tracking-[0.2em] uppercase">
              Maison <span className="text-gold font-light">de Couture</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-6 font-sans">
            Crafting luxury bespoke garments and precision tailoring services. By-appointment atelier dedicated to slow fashion and absolute quality.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-dark flex items-center justify-center transition-all duration-300"
              aria-label="Instagram Profile"
            >
              <svg
                className="w-4 h-4"
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
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div>
          <h4 className="font-serif text-gold text-sm font-semibold tracking-wider uppercase mb-6">
            Explore Atelier
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-white/60 hover:text-gold text-sm transition-colors duration-300 font-sans">
                Home Portfolio
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white/60 hover:text-gold text-sm transition-colors duration-300 font-sans">
                All Sewing Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white/60 hover:text-gold text-sm transition-colors duration-300 font-sans">
                Craftsmanship Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/60 hover:text-gold text-sm transition-colors duration-300 font-sans">
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="font-serif text-gold text-sm font-semibold tracking-wider uppercase mb-6">
            Atelier Hours
          </h4>
          <ul className="space-y-3 text-white/60 text-sm font-sans">
            <li>
              <span className="text-white/80 font-medium">Mon - Fri:</span> 9:00 AM - 6:00 PM
            </li>
            <li>
              <span className="text-white/80 font-medium">Saturday:</span> 10:00 AM - 4:00 PM
            </li>
            <li>
              <span className="text-white/80 font-medium">Sunday:</span> Closed (By Appointment Only)
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-gold text-sm font-semibold tracking-wider uppercase mb-6">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-white/60 text-sm font-sans">
            <li className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
              <span>128 Haute Couture Blvd, Suite A, Fashion District</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4.5 h-4.5 text-gold shrink-0" />
              <a href="tel:+15550199" className="hover:text-gold transition-colors">+1 (555) 019-9821</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4.5 h-4.5 text-gold shrink-0" />
              <a href="mailto:atelier@maisondecouture.com" className="hover:text-gold transition-colors">atelier@maisondecouture.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
        <p>© {new Date().getFullYear()} Maison de Couture. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 font-light">
          Handcrafted in excellence. Premium Fashion Portfolio.
        </p>
      </div>
    </footer>
  );
};
export default Footer;

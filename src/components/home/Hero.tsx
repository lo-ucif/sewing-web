import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558278224-5db379207748?q=80&w=1600"
          alt="Tailoring atelier studio"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_6s_infinite] transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent md:to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-start text-white">
        {/* Subtle Brand Tagline */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <span className="h-[1px] w-8 bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3 h-3" /> Haute Couture & Tailoring
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-wide mb-6 max-w-4xl">
          Crafting <span className="italic font-light text-gold">Impeccable</span> <br />
          Sartorial Artistry
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-white/75 text-base md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed mb-10">
          We replace catalog PDFs and cluttered chat messages with an elegant digital atelier experience. Browse our bespoke garments, review custom detailing, and commission your next piece.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/projects">
            <Button variant="gold" size="lg" className="flex items-center gap-2">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-dark">
              Request Bespoke Fitting
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent hidden md:block" />
    </section>
  );
};
export default Hero;

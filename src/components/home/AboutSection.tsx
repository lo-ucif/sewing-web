import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Ruler, Heart } from 'lucide-react';
import Button from '../ui/Button';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-beige py-24 border-b border-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block - Craft Images */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 overflow-hidden rounded-md shadow-md aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800"
                alt="Tailor sewing detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="col-span-4 self-end overflow-hidden rounded-md shadow-md aspect-[3/4] translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=800"
                alt="Garment pattern making"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Float Gold Craft Badge */}
            <div className="absolute -top-6 -right-2 bg-dark text-white p-6 rounded-md border border-gold/30 shadow-xl hidden md:block">
              <span className="font-serif text-3xl text-gold font-semibold block">15+</span>
              <span className="text-xs font-sans tracking-widest uppercase text-white/70">Years Atelier Craft</span>
            </div>
          </div>

          {/* Right Block - Brand Narrative */}
          <div className="lg:col-span-6">
            <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
              Craftsmanship Philosophy
            </span>
            <h2 className="text-dark text-4xl md:text-5xl font-medium tracking-wide mb-6">
              A Legacy Built Stitch by Stitch
            </h2>
            
            <p className="text-dark/80 font-sans font-light text-base leading-relaxed mb-6">
              At Maison de Couture, we believe that garments should tell a story. We reject mass production in favor of absolute personalization. From the initial pencil sketch to the final steam pressing, we pour decades of tailoring expertise into every line, seam, and hem.
            </p>
            <p className="text-dark/85 font-sans font-light text-sm leading-relaxed mb-8">
              We collaborate with each client to select fabrics from the world's most prestigious mills, structural canvasing designed to fit perfectly, and custom embellishments that align with your signature style.
            </p>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-dark/10 pt-8">
              <div>
                <div className="text-gold mb-2"><Scissors className="w-5 h-5" /></div>
                <h4 className="font-serif text-lg font-semibold text-dark mb-0.5">Bespoke</h4>
                <p className="text-dark/60 text-xs font-sans">Drafted from scratch</p>
              </div>
              <div>
                <div className="text-gold mb-2"><Ruler className="w-5 h-5" /></div>
                <h4 className="font-serif text-lg font-semibold text-dark mb-0.5">Fit</h4>
                <p className="text-dark/60 text-xs font-sans">100% custom drape</p>
              </div>
              <div>
                <div className="text-gold mb-2"><Heart className="w-5 h-5" /></div>
                <h4 className="font-serif text-lg font-semibold text-dark mb-0.5">Slow</h4>
                <p className="text-dark/60 text-xs font-sans">Sustainably made</p>
              </div>
            </div>

            <Link to="/about">
              <Button variant="primary">Read Our Story</Button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

import React, { useEffect } from 'react';
import { Scissors, Ruler, Hammer, Sparkles, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Bespoke Consultation',
      description: 'We meet at our atelier or virtually to discuss design ideas, garments references, fabrics, and take 30+ precision measurements.',
      icon: <Scissors className="w-5 h-5 text-gold" />,
    },
    {
      number: '02',
      title: 'Muslin Pattern Fitting',
      description: 'We draft a custom pattern on paper and stitch a temporary cotton "toile" or muslin garment to refine the drape and fit on your body.',
      icon: <Ruler className="w-5 h-5 text-gold" />,
    },
    {
      number: '03',
      title: 'Premium Cutting & Canvas',
      description: 'Your final premium fabric is hand-cut. We build structural interior canvas using horsehair or premium canvas for durability.',
      icon: <Hammer className="w-5 h-5 text-gold" />,
    },
    {
      number: '04',
      title: 'Fine Stitch Finishing',
      description: 'Garments are stitched, linings attached, and fine details like hand-worked buttonholes, collars, and pressed finishes are completed.',
      icon: <Sparkles className="w-5 h-5 text-gold" />,
    },
  ];

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
            Maison Philosophy
          </span>
          <h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
            The Art of Fine Needlework
          </h1>
          <p className="text-dark/65 font-sans font-light text-sm">
            Discover the legacy of our bespoke tailoring studio, our slow fashion values, and our dedication to handcrafted perfection.
          </p>
        </div>

        {/* Narrative & Portrait Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Portrait Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden rounded-md shadow-md aspect-[4/5] bg-dark">
              <img
                src="https://images.unsplash.com/photo-1581404917879-17e412179d55?q=80&w=800"
                alt="Master tailoring artisan"
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-102"
              />
            </div>
            {/* Float Signature Box */}
            <div className="absolute bottom-6 -right-6 bg-dark text-white p-6 rounded-md shadow-xl border border-gold/30 hidden md:block max-w-[240px]">
              <p className="font-serif italic text-gold text-lg mb-1">Maison de Couture</p>
              <p className="text-white/60 text-xs font-sans font-light leading-relaxed">
                "Fashion passes, style remains. We build for longevity."
              </p>
            </div>
          </div>

          {/* Detailed Story text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-dark text-3xl md:text-4xl font-medium tracking-wide">
              Crafting Elegance Since 2012
            </h2>
            <p className="text-dark/80 font-sans font-light text-sm md:text-base leading-relaxed">
              Founded by master designer Eleanor Vance, Maison de Couture was created to restore the slow, intentional art of tailoring. In a world dominated by fast, disposable garments, we establish a quiet sanctuary of craftsmanship in our fashion district studio.
            </p>
            <p className="text-dark/75 font-sans font-light text-sm leading-relaxed">
              We do not create templates; we create garments tailored specifically to you. Every suit, gown, and shirt starts as a fresh paper pattern based entirely on your unique measurements. By using traditional hand-sewn canvases, linings from natural fibers, and fabrics sourced from centuries-old European mills, we craft garments built to endure for generations.
            </p>
            
            {/* Atelier Values */}
            <div className="space-y-4 pt-6 border-t border-dark/10">
              <div className="flex gap-3">
                <Star className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-dark text-base font-semibold">Premium Fabric Guarantee</h4>
                  <p className="text-dark/60 text-xs font-sans">We exclusively work with natural silk, linen, cashmere wools, and organic cottons.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Star className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-dark text-base font-semibold">Slow Fashion Values</h4>
                  <p className="text-dark/60 text-xs font-sans">Zero fabric waste. Leftover fabrics are transformed into childrenwear accessories or recycled.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Roadmap Section */}
        <div className="bg-white border border-dark/5 rounded-md p-10 md:p-16 shadow-sm mb-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-2">Atelier Steps</span>
            <h2 className="text-dark text-3xl md:text-4xl font-medium tracking-wide">The Bespoke Process Flow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, index) => (
              <div key={index} className="relative group">
                {/* Number Backdrop */}
                <span className="font-serif text-6xl text-gold/15 group-hover:text-gold/25 transition-colors duration-300 font-bold block mb-4">
                  {s.number}
                </span>
                
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-full bg-beige border border-gold/30 flex items-center justify-center mb-4 text-gold">
                  {s.icon}
                </div>

                <h3 className="font-serif text-dark text-lg font-semibold mb-2">
                  {s.title}
                </h3>
                
                <p className="text-dark/65 font-sans font-light text-xs leading-relaxed">
                  {s.description}
                </p>

                {/* Connecting arrow line on desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[75%] right-[-25%] h-[1px] bg-dark/10 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Book Banner */}
        <div className="text-center py-12">
          <Link to="/contact">
            <Button variant="gold" size="lg">Book Your Bespoke Fitting</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
export default About;

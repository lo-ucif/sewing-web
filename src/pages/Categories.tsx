import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors } from 'lucide-react';
import Button from '../components/ui/Button';

interface CategoryDetails {
  id: string;
  name: 'Women' | 'Men' | 'Kids' | 'Traditional' | 'Custom';
  title: string;
  subTitle: string;
  description: string;
  fabrics: string[];
  imageUrl: string;
}

export const Categories: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const categoriesData: CategoryDetails[] = [
    {
      id: 'women',
      name: 'Women',
      title: 'Haute Couture & Bridal',
      subTitle: 'Form-fitting elegance built on structural corsetry.',
      description: 'Our womenswear collection focuses on custom bridal gowns, premium silk evening wear, and draped cocktail dresses. Each dress is built around custom corset foundations designed specifically for the client\'s body structure, creating a seamless fit and timeless drape.',
      fabrics: ['Mulberry Silk Satin', 'French Chantilly Lace', 'Silk Organza', 'Tulle'],
      imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600',
    },
    {
      id: 'men',
      name: 'Men',
      title: 'Bespoke Suiting & Tailoring',
      subTitle: 'Traditional canvasing and structured shoulders.',
      description: 'Our menswear represents standard Savile Row guidelines: natural shoulders, hand-padded lapels, and half-canvas or full-canvas jackets that conform to your posture over time. We construct custom suits, shirts, and waistcoats designed to command attention.',
      fabrics: ['Super 120s & 150s Merino Wool', 'Cashmere-Wool Blends', 'Egyptian Cotton', 'Belgian Linen'],
      imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600',
    },
    {
      id: 'traditional',
      name: 'Traditional',
      title: 'Heritage & Traditional Wear',
      subTitle: 'Intricate embroidery and traditional silhouettes.',
      description: 'Celebrating cultural heritage with hand-guided metallic threads (Zardozi), gold lace boundaries, and tailored traditional structures. We construct premium kaftans, tunics, and cultural garments with high-weight silks and velvet drapes.',
      fabrics: ['Silk Velvet', 'Brocade Silk', 'Hand-woven Jacquard', 'Crepe'],
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600',
    },
    {
      id: 'custom',
      name: 'Custom',
      title: 'Creative Reconstruct & Alterations',
      subTitle: 'Resizing, vintage restyling, and complex refits.',
      description: 'Give vintage garments or heirloom heirlooms a second life. We offer creative reconstruction—taking older quality fabrics and re-cutting them to contemporary patterns, as well as high-precision alteration services for suits and evening gowns.',
      fabrics: ['Cotton Velvet', 'Vintage Twills', 'High-grade Satins', 'Linen weaves'],
      imageUrl: 'https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?q=80&w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-beige pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-1.5 text-gold mb-3">
            <Scissors className="w-4 h-4 transform rotate-90" />
            <span className="text-xs font-sans tracking-[0.2em] uppercase font-semibold">Atelier Services</span>
          </div>
          <h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide">
            Our Specialties
          </h1>
          <p className="text-dark/65 font-sans font-light text-sm">
            Learn more about the craft, design system, and premium fabric options associated with our custom tailoring categories.
          </p>
        </div>

        {/* Categories List Block */}
        <div className="space-y-24">
          {categoriesData.map((cat, index) => (
            <div
              key={cat.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Category Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-md shadow-md aspect-[4/3] bg-dark relative group">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Category Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block">
                  {cat.name} Portfolio
                </span>
                
                <h2 className="text-dark text-3xl md:text-4xl font-medium tracking-wide">
                  {cat.title}
                </h2>
                
                <p className="text-gold text-xs font-sans italic tracking-wide">
                  {cat.subTitle}
                </p>

                <p className="text-dark/80 font-sans font-light text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Fabrics tags */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-dark text-xs font-sans tracking-wider uppercase font-semibold">
                    Commonly Sourced Fabrics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.fabrics.map((f, i) => (
                      <span
                        key={i}
                        className="text-dark/70 bg-white border border-dark/5 px-3 py-1 text-xs rounded-sm font-sans"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-4">
                  <Link to={`/projects?category=${cat.name}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      View {cat.name} Projects <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Categories;

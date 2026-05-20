import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: "The bridal gown created for me was absolute perfection. Eleanor Vance's draping skill is unmatched. The silk fell beautifully, and it fit me like a second skin. They made the entire fitting process a luxury experience.",
      author: "Charlotte Thorne",
      role: "Bridal Client",
      rating: 5,
    },
    {
      id: '2',
      quote: "As a commercial director, my clothes need to speak authority and fit flawlessly. The bespoke double-breasted suit crafted here is easily the best garment I own. The attention to interior stitching details is incredible.",
      author: "Alexander Hayes",
      role: "Bespoke Suiting Client",
      rating: 5,
    },
    {
      id: '3',
      quote: "They took an old vintage velvet evening dress that had belonged to my grandmother and reconstructed it into a modern off-the-shoulder masterpiece. I was blown away by their creativity and craftsmanship.",
      author: "Sofia Rossi",
      role: "Garment Restyling Client",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
            Client Reflections
          </span>
          <h2 className="text-dark text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Words from the Tailored
          </h2>
          <p className="text-dark/65 font-sans font-light text-sm">
            Read about the experience of commissioning a custom garment and working with our master tailoring studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-beige border border-dark/5 rounded-md p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* Gold Quote Accent */}
              <div className="absolute top-6 right-8 text-[#c8a96a]/15 group-hover:text-[#c8a96a]/25 transition-colors duration-300">
                <Quote className="w-12 h-12 transform scale-x-[-1]" />
              </div>

              {/* Quote Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-dark/85 font-sans font-light text-sm leading-relaxed italic mb-8 flex-1">
                "{test.quote}"
              </p>

              {/* Quote Author */}
              <div className="border-t border-dark/10 pt-6">
                <h4 className="font-serif text-[#111111] font-semibold text-base">
                  {test.author}
                </h4>
                <p className="text-gold text-xs tracking-wider uppercase font-sans mt-0.5">
                  {test.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

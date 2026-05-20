import { Link } from "react-router-dom";
import { Scissors, User, Landmark, Palette } from "lucide-react";

interface CategoryItem {
  id: string;
  name:
    | "دسيكـ"
    | "فساتين أعراس"
    | "ستايل منزلي"
    | "ستايل قسنطيني"
    | "ستايل قبائلي";
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export const Categories: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: "desk",
      name: "دسيكـ",
      title: "تشكيلة دسيكـ",
      subtitle: "Evening gowns, bridal, and custom daywear.",
      imageUrl:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "bridal",
      name: "فساتين أعراس",
      title: "فساتين زفاف",
      subtitle: "Sartorial suits, shirts, and coat tailoring.",
      imageUrl:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "home",
      name: "ستايل منزلي",
      title: "ستايل منزلي",
      subtitle: "Traditional kaftans, tunics, and embroidery.",
      imageUrl:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      id: "constantine",
      name: "ستايل قسنطيني",
      title: "ستايل قسنطيني",
      subtitle: "Creative reconstruction, alterations, and refits.",
      imageUrl:
        "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?q=80&w=600",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase font-semibold block mb-3">
            Service Spectrum
          </span>
          <h2 className="text-dark text-4xl md:text-5xl font-medium tracking-wide mb-4">
            Bespoke Specializations
          </h2>
          <p className="text-dark/65 font-sans font-light text-sm">
            Whether creating a custom bridal gown from scratch or reconstructing
            a vintage heirloom coat, our attention to stitch detail is absolute.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/projects?category=${encodeURIComponent(cat.name)}`}
              className="group block relative overflow-hidden rounded-md aspect-[4/5] shadow-sm hover:shadow-lg transition-all duration-500 bg-dark"
            >
              {/* Card Image */}
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-65"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />

              {/* Card Floating Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Floating Icon Box */}
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-dark/20 backdrop-blur-sm mb-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {cat.icon}
                </div>

                <span className="text-gold text-xs font-sans tracking-widest uppercase mb-1 font-medium">
                  {cat.name} Portfolio
                </span>

                <h3 className="text-white font-serif text-xl font-medium mb-1 tracking-wide">
                  {cat.title}
                </h3>

                <p className="text-white/70 text-xs font-sans font-light leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Top Accent Gold Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;

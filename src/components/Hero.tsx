import React from 'react';
import { MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('مرحباً، أود حجز موعد استشارة تفصيل ملابس.')}`;

  return (
    <section id="home" className="relative bg-wine-dark text-white pt-32 pb-24 md:py-36 overflow-hidden">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(#C8919D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Area (RTL: right side column, but flex handles reading order) */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-right">
          <span className="inline-block bg-rose-primary/20 text-rose-light text-xs font-sans tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full border border-rose-primary/30">
            شغل يدوي منزلي بحب وشغف
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            خياطة منزلية بتصاميم مخصصة
          </h1>
          
          <p className="font-sans text-white/80 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            تفصيل فساتين سهرة، عباءات، وملابس أطفال يدوية بخبرة وجودة عالية تفوق خيالك. أصمم كل قطعة خصيصاً لتناسب مقاساتكِ وذوقكِ الفريد.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-primary hover:bg-rose-light hover:text-wine-dark text-white text-base px-8 py-3.5 rounded-[30px] font-sans font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 fill-current" /> تواصل عبر واتساب
            </a>
            
            <a
              href="#gallery"
              className="inline-flex items-center text-white/80 hover:text-white font-sans text-sm font-semibold border-b border-white/20 hover:border-white pb-1 transition-all duration-300"
            >
              شاهد أعمالي السابقة
            </a>
          </div>
        </div>

        {/* Image Frame */}
        <div className="lg:col-span-6 flex justify-center relative">
          {/* Decorative frame shadow */}
          <div className="absolute -inset-1.5 bg-rose-primary/30 rounded-[20px] blur-sm transform rotate-2" />
          
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[20px] overflow-hidden shadow-lg border-2 border-rose-light/20 bg-wine-dark">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"
              alt="Sewing workshop detail"
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </div>

          {/* Floater icon text */}
          <div className="absolute bottom-6 -right-4 bg-white text-wine-dark p-4 rounded-lg shadow-md border border-divider hidden md:block">
            <p className="font-serif font-bold text-sm">تفصيل حسب الطلب</p>
            <p className="text-[10px] text-muted font-sans">بمقاساتكِ الشخصية تماماً</p>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;

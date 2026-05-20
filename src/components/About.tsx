import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-b border-divider/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative text (RTL: right side column, order 1 on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
            <span className="text-rose-primary text-xs font-sans font-bold tracking-widest uppercase block">
              من أنا؟
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark leading-tight">
              قصة مشغلي المنزلي الصغير
            </h2>
            
            <div className="w-16 h-[2px] bg-divider" />
            
            <p className="font-sans text-muted text-base leading-relaxed">
              مرحباً بكِ، أنا خياطة شغوفة أعمل من مشغلي المنزلي الصغير لتفصيل تصاميم فريدة تناسب شخصيتكِ وقوامكِ. لطالما كان التفصيل والخياطة جزءاً من روحي منذ الصغر؛ حيث أرى القماش كلوحة فارغة تنتظر أن تتحول إلى قطعة فنية تمنحكِ الثقة والأناقة.
            </p>
            
            <p className="font-sans text-muted text-sm leading-relaxed">
              أهتم بأدق التفاصيل—بدءاً من اختيار الخيوط المناسبة ونوعية القماش الفاخر، ومروراً بالقص والسرجة القياسية، وانتهاءً بإنهاء التفاصيل الداخلية يدوياً لضمان متانة القطعة وملمسها الناعم. لا أتعامل مع الملابس كمنتجات سريعة، بل كقطع تدوم معكِ طويلاً وتحمل ذكرياتكِ الجميلة.
            </p>
            
            {/* Quick trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-divider/20">
              <div className="flex items-start gap-3 justify-end text-right">
                <div>
                  <h4 className="font-serif text-dark text-sm font-bold">أقمشة فاخرة</h4>
                  <p className="text-muted text-xs font-sans">أنتقي خاماتي بعناية من الكتان والحرير الطبيعي.</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-rose-primary mt-1.5 shrink-0" />
              </div>
              
              <div className="flex items-start gap-3 justify-end text-right">
                <div>
                  <h4 className="font-serif text-dark text-sm font-bold">مقاسات مخصصة</h4>
                  <p className="text-muted text-xs font-sans">نفصل كل قطعة بمقاساتكِ الفردية الدقيقة.</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-rose-primary mt-1.5 shrink-0" />
              </div>
            </div>
          </div>

          {/* Graphic/Image (order 2 on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
            <div className="absolute -inset-1 bg-rose-light/40 rounded-[20px] transform -rotate-3 blur-xs" />
            
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm border border-divider/30 bg-body-bg">
              <img
                src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600"
                alt="Working hands sewing"
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;

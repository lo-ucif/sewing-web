import React, { useState } from 'react';
import { MessageSquare, Phone, Instagram, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'تفصيل فستان سهرة',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = '15550199821';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `مرحباً، أود حجز موعد استشارة تفصيل.\nالاسم: ${formData.name}\nالخدمة المطلوبة: ${formData.service}\nملاحظات: ${formData.notes}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Redirect to WhatsApp on submission after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setFormData({ name: '', service: 'تفصيل فستان سهرة', notes: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-body-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-primary text-xs font-sans font-bold tracking-widest uppercase block mb-2">
            تواصل معي
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
            دعينا نصنع قطعتكِ القادمة
          </h2>
          <div className="w-16 h-[2px] bg-divider mx-auto mb-4" />
          <p className="font-sans text-muted text-sm leading-relaxed">
            يمكنكِ ملء هذا النموذج لحجز موعد استشارة وتفصيل سريع، أو الانتقال مباشرة لمحادثتي على واتساب.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Booking Request Form */}
          <div className="lg:col-span-7 bg-card border border-divider/20 p-8 rounded-2xl shadow-sm text-right">
            <h3 className="font-serif text-dark text-xl font-bold mb-6">
              طلب تفصيل واستشارة مقاسات
            </h3>

            {isSubmitted ? (
              <div className="bg-rose-light/20 border border-rose-primary/30 p-8 rounded-xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-rose-primary text-white flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-dark text-lg font-bold">تم تسجيل طلبكِ</h4>
                <p className="text-muted text-sm font-sans">
                  جاري تحويلكِ الآن إلى واتساب لتأكيد الموعد واستلام التفاصيل...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-sans font-bold tracking-wider text-dark/80">
                    الاسم الكريم *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="مثال: ياسمين أحمد"
                    className="w-full bg-body-bg border border-divider/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-primary transition-colors text-dark text-right"
                  />
                </div>

                {/* Service Request */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-xs font-sans font-bold tracking-wider text-dark/80">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-body-bg border border-divider/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-primary transition-colors text-dark text-right cursor-pointer"
                  >
                    <option value="تفصيل فستان سهرة">تفصيل فستان سهرة مخصص</option>
                    <option value="عباءة تقليدية مطرزة">تفصيل عباءة مطرزة</option>
                    <option value="ملابس أطفال للعيد">تفصيل ملابس أطفال مخصصة</option>
                    <option value="تعديل وتضييق فستان">تعديل ملابس وفساتين عتيقة</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-xs font-sans font-bold tracking-wider text-dark/80">
                    أي ملاحظات أو مقاسات خاصة (اختياري)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="مثال: طول الفستان ١٤٠ سم، نوع القماش كتان ناعم..."
                    className="w-full bg-body-bg border border-divider/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-primary transition-colors text-dark text-right"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-rose-primary hover:bg-rose-light hover:text-wine-dark text-white font-sans font-semibold py-3.5 px-6 rounded-[30px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Send className="w-4.5 h-4.5 transform rotate-180" /> إرسال عبر واتساب للتأكيد
                </button>
              </form>
            )}
          </div>

          {/* Social and Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Quick Contact Info Card */}
            <div className="bg-wine-dark text-white p-8 rounded-2xl border border-rose-primary/10 space-y-6 text-right flex-1 flex flex-col justify-center">
              <h3 className="font-serif text-rose-light text-xl font-bold border-b border-rose-primary/20 pb-4">
                معلومات المشغل
              </h3>

              <div className="space-y-6 font-sans font-light text-sm">
                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <span className="text-rose-light/60 block text-[10px] uppercase font-bold">الموقع</span>
                    <span className="text-white/95">مشغل منزلي - الرياض، المملكة العربية السعودية</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <span className="text-rose-light/60 block text-[10px] uppercase font-bold">مواعيد استقبال المقاسات</span>
                    <span className="text-white/95">يومياً من الساعة ٤ عصرًا حتى ٩ مساءً</span>
                    <span className="block text-rose-light font-medium text-xs mt-1">يرجى التنسيق المسبق عبر واتساب</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <span className="text-rose-light/60 block text-[10px] uppercase font-bold">رقم الهاتف</span>
                    <a href="tel:+15550199821" className="hover:text-rose-light transition-colors font-medium">+966 55 019 9821</a>
                  </div>
                </div>
              </div>

              {/* Instagram Anchor */}
              <div className="pt-4 border-t border-rose-primary/20 flex items-center justify-between flex-row-reverse">
                <span className="text-white/60 text-xs font-sans">تلمسي التفاصيل:</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-rose-light hover:text-white transition-colors text-xs font-sans font-bold"
                >
                  <Instagram className="w-4 h-4" /> انستغرام المشغل
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callbox */}
            <div className="bg-white border border-divider/20 p-6 rounded-2xl text-center space-y-3">
              <h4 className="font-serif text-dark text-base font-bold">
                تفضّلين التحدث المباشر؟
              </h4>
              <p className="text-muted text-xs font-sans leading-relaxed">
                اضغطي على الزر بالأسفل لبدء دردشة مباشرة وسريعة لطرح أي استفسار بخصوص الأقمشة والأسعار.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white text-sm px-6 py-2.5 rounded-[30px] font-sans font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" /> محادثة مباشرة على واتساب
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;

import React from "react";
import { Scissors, Phone, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8e8ef] text-[#4b313d] pt-12 pb-8 border-t border-[#f0d8e3]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-[#8e5a72]">
            <Scissors className="w-6 h-6" />
            <span className="font-sans text-sm uppercase tracking-[0.3em]">
              فاطمة بوعلام
            </span>
          </div>
          <p className="text-sm md:text-base text-[#6d4d5f]">
            فاطمة بوعلام © 2025 — كل الحقوق محفوظة
          </p>
          <p className="text-sm text-[#866075]/90">صُنع بالحب من البيت 🧵</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a
            href="tel:+212600000000"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm text-[#8e5a72] hover:bg-[#fff1f6] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs font-sans">الهاتف</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm text-[#8e5a72] hover:bg-[#fff1f6] transition-colors"
          >
            <span className="text-base">📘</span>
            <span className="text-xs font-sans">فيسبوك</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm text-[#8e5a72] hover:bg-[#fff1f6] transition-colors"
          >
            <span className="text-base">📸</span>
            <span className="text-xs font-sans">إنستغرام</span>
          </a>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm text-[#8e5a72] hover:bg-[#fff1f6] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-sans">واتساب</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

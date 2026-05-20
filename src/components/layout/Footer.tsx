import React from 'react';
import { Scissors, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#f0d8e3] bg-[#f8e8ef] pb-8 pt-12 text-[#4b313d]">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[#8e5a72]">
            <Scissors className="h-6 w-6" />
            <span className="font-sans text-sm uppercase tracking-[0.3em]">فاطمة بوعلام</span>
          </div>
          <p className="text-sm text-[#6d4d5f] md:text-base">فاطمة بوعلام © 2025 — كل الحقوق محفوظة</p>
          <p className="text-sm text-[#866075]/90">صُنع بالحب من البيت 🧵</p>
        </div>

        <div className="mx-auto flex w-fit flex-col items-center gap-3 md:hidden">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-sans">واتساب</span>
          </a>
          <a
            href="tel:+212600000000"
            className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]"
          >
            <Phone className="h-4 w-4" />
            <span className="text-xs font-sans">الهاتف</span>
          </a>
        </div>

        <div className="hidden items-center justify-center gap-3 md:flex">
          <a href="tel:+212600000000" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <Phone className="h-4 w-4" />
            <span className="text-xs font-sans">الهاتف</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <span className="text-base">📘</span>
            <span className="text-xs font-sans">فيسبوك</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <span className="text-base">📸</span>
            <span className="text-xs font-sans">إنستغرام</span>
          </a>
          <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-[#8e5a72] shadow-sm transition-colors hover:bg-[#fff1f6]">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-sans">واتساب</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

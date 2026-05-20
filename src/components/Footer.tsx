import React from "react";
import { Scissors, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wine-dark text-white py-12 border-t border-rose-primary/10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        {/* Brand Logo & Icon */}
        <div className="flex items-center justify-center gap-2">
          <Scissors className="w-5 h-5 text-rose-light transform -rotate-45" />
          <span className="font-serif text-lg font-bold text-white tracking-wide">
            خياطتي الأنيقة
          </span>
        </div>

        {/* Tagline */}
        <p className="font-sans text-rose-light/70 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
          حياكة يدوية منزلية تصنع من القماش حكايات دافئة تناسب مقاساتكِ وأناقتكِ
          الفريدة.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://wa.me/15550199821"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-rose-primary hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label="WhatsApp Channel"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-rose-primary hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <span className="text-base">📸</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 text-[10px] text-white/40 font-sans">
          <p>© {currentYear} خياطتي الأنيقة. جميع الحقوق محفوظة.</p>
          <p className="mt-1 font-light">صُنِع بحب في المشغل المنزلي.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

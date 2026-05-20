import React, { useState } from "react";
import { Menu, X, MessageCircle, Scissors } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";

const navLinks = [
  { name: "الرئيسية", href: "#home" },
  { name: "من أنا", href: "#about" },
  { name: "تخصصاتي", href: "#skills" },
  { name: "أعمالي", href: "#projects" },
  { name: "تواصلي معي", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScroll(20);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"} border-b border-[#f3d6e0]/50`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <Scissors className="w-6 h-6 text-[#bb7c99] rotate-90" />
          <a
            href="#home"
            onClick={closeMenu}
            className="font-sans text-base md:text-lg font-semibold tracking-[0.24em] text-[#4b313d] uppercase"
          >
            فاطمة بوعلام
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-sans text-[#6d4d5f] hover:text-[#b76487] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
          >
            <span className="text-base">📸</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
          >
            <span className="text-base">📘</span>
          </a>
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#6d4d5f] hover:text-[#b76487] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white/95 border-t border-[#f3d6e0]/50 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-5 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block text-right text-base font-sans text-[#5e4152] hover:text-[#b76487] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between gap-3 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
            >
              <span className="text-base">📸</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
            >
              <span className="text-base">📘</span>
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#fff0f4] text-[#b76487] hover:bg-[#f7dce5] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

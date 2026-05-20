import React, { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";

type Page = "home" | "gallery" | "detail";

interface NavbarProps {
  currentPage: Page;
  onGoHome: () => void;
  onGoGallery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onGoHome, onGoGallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScroll(20);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#f3d6e0]/50 transition-all duration-500 motion-safe:animate-[navIn_.5s_ease] ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-3">
          <Scissors className={`w-6 h-6 text-[#bb7c99] transition-transform duration-500 ${scrolled ? "rotate-180" : "rotate-90"}`} />
          <button
            type="button"
            onClick={() => {
              onGoHome();
              closeMenu();
            }}
            className="font-sans text-base font-semibold uppercase tracking-[0.24em] text-[#4b313d] md:text-lg"
          >
            فاطمة بوعلام
          </button>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => {
              onGoHome();
              closeMenu();
            }}
            className={`text-sm font-sans transition-colors ${
              currentPage === "home" ? "text-[#b76487]" : "text-[#6d4d5f] hover:text-[#b76487]"
            }`}
          >
            الرئيسية
          </button>
          <button
            type="button"
            onClick={() => {
              onGoGallery();
              closeMenu();
            }}
            className={`text-sm font-sans transition-colors ${
              currentPage !== "home" ? "text-[#b76487]" : "text-[#6d4d5f] hover:text-[#b76487]"
            }`}
          >
            معرض الأعمال
          </button>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 text-[#6d4d5f] transition-colors hover:text-[#b76487] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-[#f3d6e0]/50 bg-white/95 transition-all duration-300 md:hidden ${isOpen ? "max-h-40" : "max-h-0"}`}>
        <div className="space-y-4 px-5 pb-6 pt-4">
          <button
            type="button"
            onClick={() => {
              onGoHome();
              closeMenu();
            }}
            className="block w-full text-right text-base font-sans text-[#5e4152] transition-colors hover:text-[#b76487]"
          >
            الرئيسية
          </button>
          <button
            type="button"
            onClick={() => {
              onGoGallery();
              closeMenu();
            }}
            className="block w-full text-right text-base font-sans text-[#5e4152] transition-colors hover:text-[#b76487]"
          >
            معرض الأعمال
          </button>
        </div>
      </div>

      <style>{`@keyframes navIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </nav>
  );
};
export default Navbar;

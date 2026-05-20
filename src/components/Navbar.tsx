import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'أعمالي', href: '#gallery' },
    { label: 'من أنا', href: '#about' },
    { label: 'تواصل معي', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navbar/95 backdrop-blur-md shadow-md py-3' : 'bg-navbar py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Desktop Links (Right side of screen, since it's RTL) */}
        <div className="hidden md:flex items-center gap-8 order-2 md:order-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white hover:text-rose-light font-sans text-sm font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center Logo - Sewing Brand */}
        <div className="flex items-center gap-2 order-1 md:order-2 mx-auto md:mx-0">
          <Scissors className="w-5 h-5 text-rose-light transform -rotate-45" />
          <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
            خياطتي الأنيقة
          </span>
        </div>

        {/* Empty placeholder or secondary action on desktop to balance layout */}
        <div className="hidden md:block w-[200px] order-3 text-left">
          <a
            href="https://wa.me/15550199821?text=مرحباً،%20أود%20الاستفسار%20عن%20تفصيل%20ملابس"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-primary hover:bg-rose-light hover:text-wine-dark text-white text-xs px-4 py-2 rounded-full transition-all duration-300 font-sans"
          >
            طلب تفصيل سريع
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-rose-light focus:outline-none order-3"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-navbar border-t border-divider/30 py-4 px-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-white hover:text-rose-light font-sans text-base py-1.5 transition-colors border-b border-divider/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/15550199821?text=مرحباً،%20أود%20الاستفسار%20عن%20تفصيل%20ملابس"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-rose-primary hover:bg-rose-light hover:text-wine-dark text-white text-sm py-2.5 rounded-full transition-all duration-300 font-sans"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

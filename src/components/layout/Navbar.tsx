import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScroll(20);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? 'bg-beige/85 backdrop-blur-md border-dark/5 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 group text-dark focus:outline-none"
        >
          <Scissors className="w-5 h-5 text-gold transform rotate-90 group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-serif text-lg md:text-xl font-semibold tracking-[0.2em] uppercase">
            Maison <span className="text-gold font-light">de Couture</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-sans tracking-widest uppercase relative py-1 focus:outline-none transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-gold font-medium'
                  : 'text-dark/70 hover:text-dark'
              } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 ${
                isActive(link.path) ? 'after:scale-x-100' : 'hover:after:scale-x-100'
              } after:bg-[#c8a96a] after:origin-left after:transition-transform after:duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-xs font-sans tracking-widest uppercase bg-dark text-white hover:bg-gold hover:text-dark px-5 py-2.5 transition-all duration-300 rounded-sm shadow-sm"
          >
            Book Fitting
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 text-dark/80 hover:text-dark transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[65px] bg-beige z-30 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500 ease-in-out border-t border-dark/5 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className={`font-serif text-2xl tracking-wider hover:text-gold transition-colors ${
              isActive(link.path) ? 'text-gold' : 'text-dark'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="text-xs font-sans tracking-widest uppercase bg-dark text-white hover:bg-gold hover:text-dark px-8 py-3.5 transition-all duration-300 rounded-sm mt-4 shadow-md"
        >
          Book Fitting
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

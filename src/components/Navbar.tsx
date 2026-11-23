import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'education', 'services', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-20 py-6 flex justify-between items-center bg-black/30 backdrop-blur-[10px] transition-all duration-300">
      {/* Brand Logo matching Usman's site */}
      <a
        href="#home"
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white hover:scale-105 transition-transform"
      >
        Muhammad <span className="glow-span">{PERSONAL_INFO.firstName}</span>
      </a>

      {/* Desktop Navigation matching Usman's navbar */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer pb-1 ${
                isActive
                  ? 'text-[var(--main-color)] border-b-3 border-[var(--main-color)] font-semibold'
                  : 'text-white hover:text-[var(--main-color)] border-b-3 border-transparent hover:border-[var(--main-color)]'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-[var(--main-color)] hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navbar Overlay matching Usman's site */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 w-3/4 sm:w-1/2 p-6 bg-black/95 backdrop-blur-xl border-l-2 border-b-2 border-[var(--main-color)] rounded-bl-3xl shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-left text-lg font-medium py-2 transition-colors ${
                  isActive
                    ? 'text-[var(--main-color)] font-bold'
                    : 'text-white hover:text-[var(--main-color)]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

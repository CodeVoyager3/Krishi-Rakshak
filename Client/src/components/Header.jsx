import React, { useState } from 'react';
import { Leaf, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.howItWorks, href: '#how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 max-w-7xl mx-auto rounded-2xl bg-transparent backdrop-blur-md z-50 shadow-sm mt-2  border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 tracking-tight">
              Krishi-Rakshak
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-emerald-800 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Language Toggle Button - Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-base font-medium text-emerald-800 hover:text-emerald-600 transition-colors"
            >
              <Globe size={18} />
              {t.nav.language}
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              {t.nav.useApp}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emerald-800"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md pb-4 shadow-lg border-t border-emerald-100/50">
          <nav className="flex flex-col items-center gap-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 text-lg font-medium text-emerald-800 hover:text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            {/* Language Toggle Button - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1.5 w-full py-3 text-lg font-medium text-emerald-800 hover:text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all duration-300"
            >
              <Globe size={20} />
              {t.nav.language}
            </button>
            <a
              href="#"
              className="w-full inline-flex items-center justify-center mt-2 px-5 py-3 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-md"
            >
              {t.nav.useApp}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


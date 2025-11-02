import React from 'react';
import { Leaf } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative max-w-7xl mx-auto rounded-b-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-emerald-900 border-t border-emerald-800/50 mt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800/50 rounded-xl backdrop-blur-sm">
              <Leaf className="h-7 w-7 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">
              Krishi-Rakshak
            </span>
          </div>
          <p className="text-sm md:text-base text-emerald-300/80 text-center md:text-right">
            {t.footer.rights.replace('{year}', new Date().getFullYear())}
          </p>
        </div>
        
        {/* Decorative Line */}
        <div className="mt-8 pt-8 border-t border-emerald-800/30">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-emerald-400/60">
            <span>Empowering farmers with AI technology</span>
            <span className="hidden md:inline">•</span>
            <span>Made with ❤️ for Indian Agriculture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


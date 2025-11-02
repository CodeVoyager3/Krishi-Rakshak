import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/landingPage';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-white text-emerald-950 font-sans overflow-x-hidden">
        <Header />
        <div className="pt-18">
          <LandingPage />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

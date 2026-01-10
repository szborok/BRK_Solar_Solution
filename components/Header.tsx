'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-700/90 backdrop-blur-lg text-white z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-white">BRK</span>{' '}
              <span className="text-primary-400">SOLAR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('how-we-work')}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('faq')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent-600 hover:bg-accent-700 px-6 py-2 rounded-lg transition-all duration-300 font-medium ml-2 hover:shadow-lg hover:shadow-accent-500/30"
            >
              {t('freeAssessment')}
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left hover:text-accent-400 transition-colors py-2"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('how-we-work')}
              className="text-left hover:text-accent-400 transition-colors py-2"
            >
              {t('about')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left hover:text-accent-400 transition-colors py-2"
            >
              {t('faq')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent-600 hover:bg-accent-700 px-6 py-2 rounded-md transition-colors font-medium text-left"
            >
              {t('freeAssessment')}
            </button>
            <div className="pt-2 border-t border-gray-600">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

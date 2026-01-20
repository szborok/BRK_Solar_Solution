'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  
  const isHomePage = pathname === `/${locale}` || pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      window.location.href = `/${locale}#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-700/90 backdrop-blur-lg text-white z-50 border-b border-white/10">
      <div className="w-full px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">BRK</span>{' '}
                <span className="text-primary-400">SOLAR</span>
              </div>
            </Link>
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href={`/${locale}`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('services')}
            </Link>
            <Link
              href={`/${locale}/where-we-work`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('whereWeWork')}
            </Link>
            <Link
              href={`/${locale}/how-we-work`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('howWeWork')}
            </Link>
            <Link
              href={`/${locale}/government-support`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('governmentSupport')}
            </Link>
            <Link
              href={`/${locale}/knowledge`}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('knowledge')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent-600 hover:bg-accent-700 px-6 py-2 rounded-lg transition-all duration-300 font-medium ml-2 hover:shadow-lg hover:shadow-accent-500/30"
            >
              {t('freeAssessment')}
            </button>
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
            <Link
              href={`/${locale}`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href={`/${locale}/where-we-work`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('whereWeWork')}
            </Link>
            <Link
              href={`/${locale}/how-we-work`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('howWeWork')}
            </Link>
            <Link
              href={`/${locale}/government-support`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('governmentSupport')}
            </Link>
            <Link
              href={`/${locale}/knowledge`}
              className="text-left hover:text-accent-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('knowledge')}
            </Link>
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

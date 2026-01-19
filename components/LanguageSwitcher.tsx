'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract locale from pathname as fallback
  const getLocaleFromPath = () => {
    const pathArray = pathname.split('/').filter(p => p);
    if (pathArray.length > 0 && ['en', 'de', 'hu'].includes(pathArray[0])) {
      return pathArray[0];
    }
    return locale;
  };

  const currentLocale = pendingLocale || getLocaleFromPath() || locale;
  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (newLocale: string) => {
    // Set pending locale immediately for UI feedback
    setPendingLocale(newLocale);
    
    // Get the pathname without the leading slash
    const pathArray = pathname.split('/');
    
    // Remove empty strings from split
    const filteredPath = pathArray.filter(p => p);
    
    // Check if first element is a locale code
    let remainingPath = '/';
    if (filteredPath.length > 0 && ['en', 'de', 'hu'].includes(filteredPath[0])) {
      // Remove the locale and rebuild path
      remainingPath = '/' + filteredPath.slice(1).join('/');
    } else {
      // No locale in path, use entire path
      remainingPath = pathname;
    }
    
    // Build new path with new locale
    const newPath = `/${newLocale}${remainingPath === '/' ? '' : remainingPath}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 font-medium group"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 text-white/70 group-hover:text-white/90 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Dropdown */}
          <div className="absolute right-0 mt-6 w-56 bg-dark-700/60 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 z-[10000] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    lang.code === currentLocale
                      ? 'bg-primary-500/20 text-primary-300 shadow-sm'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.name}</span>
                  {lang.code === currentLocale && (
                    <svg
                      className="w-4 h-4 ml-auto text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

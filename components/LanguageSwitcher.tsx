'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

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

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
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
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                  lang.code === locale ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {lang.code === locale && (
                  <svg
                    className="w-5 h-5 ml-auto text-primary-600"
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
        </>
      )}
    </div>
  );
}

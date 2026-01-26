'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');

  const faqs = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' },
    { key: 'q4' },
    { key: 'q5' },
    { key: 'q6' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">{/* removed overflow-hidden so yellow circle can extend to Contact */}
      {/* Sun container - low z-index so content from above sections stays on top */}
      <div className="absolute top-[-82.5%] left-1/2 -translate-x-1/2 w-[2600px] h-[2600px] z-0">
        {/* Yellow circle with scale animation and radial fade to completely transparent edges - extra blur for smooth edges */}
        <div className="absolute inset-0 rounded-full blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(253, 224, 71, 0.65) 0%, rgba(253, 224, 71, 0.55) 20%, rgba(253, 224, 71, 0.38) 35%, rgba(253, 224, 71, 0.22) 50%, rgba(253, 224, 71, 0.12) 60%, rgba(253, 224, 71, 0.05) 70%, rgba(253, 224, 71, 0.015) 78%, transparent 85%)',
            animation: 'pulse-scale 7s ease-in-out infinite'
          }}
        />
        
        {/* Orange sun orbs - centered within the container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1080px] h-[1080px] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-full blur-xl opacity-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400 rounded-full blur-lg opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-700 mb-4" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.5)' }}>
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="group cursor-pointer transition-all duration-300"
              >
                <div
                  className={`relative transition-all duration-300 ${
                    index !== faqs.length - 1 ? 'border-b border-gray-200' : ''
                  } ${
                    openIndex === index
                      ? 'bg-accent-50/50'
                      : 'hover:bg-white/50'
                  }`}
                >
                  {/* Header */}
                  <div className="p-6 flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-accent-600 text-white'
                          : 'bg-accent-100 text-accent-600 group-hover:bg-accent-200'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-dark-700 mb-2 group-hover:text-accent-600 transition-colors">
                        {t(`${faq.key}.question`)}
                      </h3>
                      <div 
                        className={`overflow-hidden transition-all duration-200 ease-out ${
                          openIndex === index ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                        <div className="text-gray-600 leading-relaxed">
                          {t(`${faq.key}.answer`)}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-accent-600 text-white rotate-180'
                          : 'bg-gray-100 text-gray-400 group-hover:bg-accent-100 group-hover:text-accent-600'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';

export default function GovernmentSupport() {
  const t = useTranslations('governmentSupport');

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      key: 'benefit1'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
      ),
      key: 'benefit2'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      key: 'benefit3'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      key: 'benefit4'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/50 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-700 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Big Highlight */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-white shadow-2xl shadow-primary-500/30 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider opacity-90">{t('highlight.label')}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-7xl font-bold mb-2">{t('highlight.percentage')}</div>
                    <div className="text-xl opacity-90">{t('highlight.subtitle')}</div>
                  </div>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    {t('highlight.description')}
                  </p>
                  
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{t('highlight.note')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-700 mb-2">
                    {t(`${benefit.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`${benefit.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-dark-700 to-dark-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/government-programs"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {t('cta.viewAllPrograms')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
              >
                {t('cta.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

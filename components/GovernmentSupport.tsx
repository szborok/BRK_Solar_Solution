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
    <section className="py-20 relative overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071" 
          alt="Finance background" 
          className="w-full h-full object-cover"
          style={{ objectPosition: '30% center' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl ml-auto">
          {/* Header */}
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
              {t('title')}
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl ml-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Big Highlight */}
            <div className="relative group/main">
              <div className="rounded-3xl p-12 bg-white/60 backdrop-blur-sm shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/main:bg-green-500/20 transition-all duration-500" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-300/0 to-green-200/0 group-hover/main:from-green-400/10 group-hover/main:via-green-300/5 group-hover/main:to-green-200/5 transition-all duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover/main:bg-green-500/30 group-hover/main:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 text-green-600 group-hover/main:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">{t('highlight.label')}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-7xl font-bold mb-2 text-green-600 group-hover/main:scale-110 transition-transform duration-300">{t('highlight.percentage')}</div>
                    <div className="text-xl text-gray-700">{t('highlight.subtitle')}</div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {t('highlight.description')}
                  </p>
                  
                  <div className="flex items-center gap-3 bg-green-50 rounded-xl px-6 py-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{t('highlight.note')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const backgroundImages = [
                  'linear-gradient(135deg, rgba(34, 139, 34, 0.85), rgba(30, 58, 47, 0.9)), url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071)', // Benefit 1 - coins/money
                  'linear-gradient(135deg, rgba(30, 58, 47, 0.85), rgba(34, 139, 34, 0.9)), url(https://images.unsplash.com/photo-1554224311-beee460ae6ba?q=80&w=2070)', // Benefit 2 - receipt/tax
                  'linear-gradient(135deg, rgba(34, 139, 34, 0.85), rgba(30, 58, 47, 0.9)), url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070)', // Benefit 3 - credit card
                  'linear-gradient(135deg, rgba(30, 58, 47, 0.85), rgba(34, 139, 34, 0.9)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015)', // Benefit 4 - growth chart
                ];
                
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-6 bg-white/60 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden cursor-pointer hover:scale-110 hover:shadow-2xl hover:z-10"
                  >
                    {/* Hover overlay with color shift */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-600/0 group-hover:from-green-400/10 group-hover:to-green-600/5 transition-all duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 bg-green-500/20 text-green-600 group-hover:bg-green-500/30 group-hover:scale-125 group-hover:rotate-6">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:scale-105 transition-transform duration-300">
                        {t(`${benefit.key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {t(`${benefit.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-gray-800/60 backdrop-blur-sm">
            <div className="relative z-10">
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
      </div>
    </section>
  );
}

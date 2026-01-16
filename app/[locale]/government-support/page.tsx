'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GovernmentSupportPage() {
  const t = useTranslations('governmentSupportPage');

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.85)), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Main Program Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-3xl p-12 text-center shadow-2xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {t('highlight.badge')}
            </div>
            <h2 className="text-6xl font-bold mb-4">{t('highlight.percentage')}</h2>
            <h3 className="text-3xl font-bold mb-6">{t('highlight.title')}</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">{t('highlight.description')}</p>
            <button
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('highlight.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('programs.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-700 mb-3">{t(`programs.program${num}.title`)}</h3>
                    <p className="text-gray-600 mb-4">{t(`programs.program${num}.description`)}</p>
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('programs.maxSupport')}</span>
                        <span className="text-xl font-bold text-primary-600">{t(`programs.program${num}.amount`)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('eligibility.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-dark-700 mb-6">{t(`eligibility.category${num}.title`)}</h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((req) => (
                    <li key={req} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{t(`eligibility.category${num}.requirement${req}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('howToApply.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('howToApply.description')}</p>
          
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {num}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-dark-700 mb-2">{t(`howToApply.step${num}.title`)}</h3>
                  <p className="text-gray-600">{t(`howToApply.step${num}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8">{t('cta.subtitle')}</p>
          <button
            onClick={scrollToContact}
            className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t('cta.button')}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

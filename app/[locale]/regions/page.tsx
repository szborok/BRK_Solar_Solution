'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhereWeWorkPage() {
  const t = useTranslations('whereWeWorkPage');

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/media_collection/hero/3393346639-preview.mp4" type="video/mp4" />
        </video>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-7xl font-bold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.title')}</h1>
          <p className="text-2xl max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-dark-700 mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('coverage.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>{t('coverage.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-300 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-black bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">{t(`coverage.stat${num}.value`)}</div>
                  <h3 className="text-2xl font-bold text-dark-700 mb-3">{t(`coverage.stat${num}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(`coverage.stat${num}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]\"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-dark-700 mb-8 sm:mb-12 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('map.title')}</h2>
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-gray-100 hover:border-primary-200 transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-primary-100 via-white to-accent-100 rounded-2xl flex items-center justify-center shadow-inner">
              <p className="text-gray-500 text-xl font-medium">{t('map.placeholder')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-5xl font-bold text-dark-700 mb-8 sm:mb-12 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('areas.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="group bg-gradient-to-br from-primary-50 via-white to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:border-primary-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-dark-700 mb-4 group-hover:text-primary-600 transition-colors">{t(`areas.area${num}.name`)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(`areas.area${num}.description`)}</p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t(`areas.area${num}.cities`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t('expansion.title')}</h2>
          <p className="text-xl mb-8">{t('expansion.description')}</p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            {t('expansion.button')}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.85)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-700 mb-6">{t('coverage.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t('coverage.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((num) => (
              <div key={num} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="text-5xl font-bold text-primary-600 mb-4">{t(`coverage.stat${num}.value`)}</div>
                <h3 className="text-xl font-bold text-dark-700 mb-2">{t(`coverage.stat${num}.title`)}</h3>
                <p className="text-gray-600">{t(`coverage.stat${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('map.title')}</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">{t('map.placeholder')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('areas.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-dark-700 mb-3">{t(`areas.area${num}.name`)}</h3>
                <p className="text-gray-600 text-sm mb-4">{t(`areas.area${num}.description`)}</p>
                <div className="flex items-center text-primary-600 text-sm font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t(`areas.area${num}.cities`)}
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

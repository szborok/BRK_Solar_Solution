'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HVACPage() {
  const t = useTranslations('serviceDetails.hvac');

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
            backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.85)), url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/" className="inline-block mb-4 text-white/80 hover:text-white transition-colors">
            ← {t('backToHome')}
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2070"
                alt="HVAC System"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-dark-700 mb-6">{t('overview.title')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('overview.description')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t('overview.description2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('solutions.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-700 mb-4">{t(`solutions.solution${num}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`solutions.solution${num}.description`)}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((feature) => (
                    <li key={feature} className="flex items-start text-gray-600">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{t(`solutions.solution${num}.feature${feature}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('efficiency.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-5xl font-bold text-primary-600 mb-4">{t(`efficiency.stat${num}.value`)}</div>
                <h3 className="text-lg font-bold text-dark-700 mb-2">{t(`efficiency.stat${num}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`efficiency.stat${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-700 mb-2">{t(`features.feature${num}.title`)}</h3>
                  <p className="text-gray-600 text-sm">{t(`features.feature${num}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
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

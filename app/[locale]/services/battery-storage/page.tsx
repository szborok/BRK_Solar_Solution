'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BatteryStoragePage() {
  const t = useTranslations('serviceDetails.batteryStorage');

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
            backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.85)), url(https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2072)',
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
            <div>
              <h2 className="text-4xl font-bold text-dark-700 mb-6">{t('overview.title')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('overview.description')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t('overview.description2')}</p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2070"
                alt="Battery Storage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{num}</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-700 mb-4">{t(`howItWorks.step${num}.title`)}</h3>
                <p className="text-gray-600">{t(`howItWorks.step${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('benefits.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-700 mb-2">{t(`benefits.benefit${num}.title`)}</h3>
                  <p className="text-gray-600">{t(`benefits.benefit${num}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('systems.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-dark-700 mb-2">{t(`systems.system${num}.title`)}</h3>
                  <p className="text-accent-600 text-lg font-semibold">{t(`systems.system${num}.capacity`)}</p>
                </div>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((spec) => (
                    <li key={spec} className="flex items-start text-gray-600">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{t(`systems.system${num}.spec${spec}`)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">{t(`systems.system${num}.idealFor`)}</p>
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

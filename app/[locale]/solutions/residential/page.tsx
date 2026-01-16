'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResidentialPage() {
  const t = useTranslations('targetAudienceDetails.residential');

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
            backgroundImage: 'linear-gradient(135deg, rgba(34, 139, 34, 0.85), rgba(30, 58, 47, 0.9)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073)',
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-700 mb-6">{t('overview.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t('overview.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-4">{t(`overview.stat${num}.value`)}</div>
                <h3 className="text-xl font-bold text-dark-700 mb-2">{t(`overview.stat${num}.title`)}</h3>
                <p className="text-gray-600">{t(`overview.stat${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('benefits.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-700 mb-4">{t(`benefits.benefit${num}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`benefits.benefit${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('packages.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['starter', 'premium', 'ultimate'].map((pkg, idx) => (
              <div key={pkg} className={`rounded-2xl overflow-hidden shadow-xl ${idx === 1 ? 'ring-4 ring-primary-500 transform md:scale-105' : ''}`}>
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{t(`packages.${pkg}.name`)}</h3>
                  <div className="text-4xl font-bold mb-2">{t(`packages.${pkg}.power`)}</div>
                  <p className="text-white/90">{t(`packages.${pkg}.description`)}</p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-4 mb-8">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num} className="flex items-start">
                        <span className="text-primary-600 mr-3">✓</span>
                        <span className="text-gray-700">{t(`packages.${pkg}.feature${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-br from-primary-500 to-accent-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                  >
                    {t('packages.getQuote')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('stories.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((num) => (
              <div key={num} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-primary-500 to-accent-500" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dark-700 mb-4">{t(`stories.story${num}.title`)}</h3>
                  <p className="text-gray-600 mb-6 italic">"{t(`stories.story${num}.quote`)}"</p>
                  <div className="border-t pt-6">
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="font-bold text-dark-700">{t(`stories.story${num}.name`)}</p>
                        <p className="text-gray-500">{t(`stories.story${num}.location`)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-600">{t(`stories.story${num}.savings`)}</p>
                        <p className="text-gray-500">{t('stories.monthlySavings')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('process.title')}</h2>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {num}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-dark-700 mb-2">{t(`process.step${num}.title`)}</h3>
                  <p className="text-gray-600">{t(`process.step${num}.description`)}</p>
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

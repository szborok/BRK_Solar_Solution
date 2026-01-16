'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CommercialPage() {
  const t = useTranslations('targetAudienceDetails.commercial');

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
            backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 47, 0.85), rgba(34, 139, 34, 0.9)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069)',
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
          
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-4">{t(`overview.stat${num}.value`)}</div>
                <h3 className="text-lg font-bold text-dark-700 mb-2">{t(`overview.stat${num}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`overview.stat${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('industries.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-700 mb-3">{t(`industries.industry${num}.title`)}</h3>
                <p className="text-gray-600 text-sm mb-4">{t(`industries.industry${num}.description`)}</p>
                <p className="text-primary-600 font-semibold text-sm">{t(`industries.industry${num}.savings`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('financial.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-700 mb-3">{t(`financial.benefit${num}.title`)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(`financial.benefit${num}.description`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Sizes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('systems.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['small', 'medium', 'large'].map((size, idx) => (
              <div key={size} className={`rounded-2xl overflow-hidden shadow-xl ${idx === 1 ? 'ring-4 ring-primary-500 transform md:scale-105' : ''}`}>
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{t(`systems.${size}.name`)}</h3>
                  <div className="text-4xl font-bold mb-2">{t(`systems.${size}.power`)}</div>
                  <p className="text-white/90 mb-4">{t(`systems.${size}.description`)}</p>
                  <p className="text-sm opacity-90">{t(`systems.${size}.idealFor`)}</p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex items-start">
                        <span className="text-primary-600 mr-3">✓</span>
                        <span className="text-gray-700">{t(`systems.${size}.feature${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-6 text-center">
                    <p className="text-sm text-gray-500 mb-2">{t('systems.estimatedCost')}</p>
                    <p className="text-2xl font-bold text-primary-600">{t(`systems.${size}.cost`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('caseStudies.title')}</h2>
          <div className="space-y-12">
            {[1, 2].map((num) => (
              <div key={num} className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-dark-700 mb-4">{t(`caseStudies.case${num}.title`)}</h3>
                    <p className="text-gray-600 mb-6">{t(`caseStudies.case${num}.description`)}</p>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">{t('caseStudies.systemSize')}</span>
                        <span className="font-bold text-dark-700">{t(`caseStudies.case${num}.systemSize`)}</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">{t('caseStudies.annualSavings')}</span>
                        <span className="font-bold text-primary-600">{t(`caseStudies.case${num}.savings`)}</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-3">
                        <span className="text-gray-600">{t('caseStudies.payback')}</span>
                        <span className="font-bold text-accent-600">{t(`caseStudies.case${num}.payback`)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{t('caseStudies.co2Reduction')}</span>
                        <span className="font-bold text-dark-700">{t(`caseStudies.case${num}.co2`)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 min-h-[300px]" />
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

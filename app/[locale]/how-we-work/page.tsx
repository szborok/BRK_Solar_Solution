'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HowWeWorkPage() {
  const t = useTranslations('howWeWorkPage');

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.85)), url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-dark-700 mb-6">{t('overview.title')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t('overview.description')}</p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {num}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-700 mb-4">{t(`steps.step${num}.title`)}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t(`steps.step${num}.description`)}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl">
                      <h4 className="font-bold text-dark-700 mb-2">{t('steps.duration')}</h4>
                      <p className="text-gray-600">{t(`steps.step${num}.duration`)}</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-4 rounded-xl">
                      <h4 className="font-bold text-dark-700 mb-2">{t('steps.deliverables')}</h4>
                      <p className="text-gray-600">{t(`steps.step${num}.deliverables`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-12 text-center">{t('commitment.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-700 mb-3">{t(`commitment.point${num}.title`)}</h3>
                <p className="text-gray-600">{t(`commitment.point${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('whyUs.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3">{t(`whyUs.reason${num}.title`)}</h3>
                <p className="text-white/90">{t(`whyUs.reason${num}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

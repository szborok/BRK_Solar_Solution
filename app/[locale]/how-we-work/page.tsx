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
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-700/85 to-accent-700/90 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg opacity-95">{t('hero.subtitle')}</p>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-accent-300 hidden md:block"></div>
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative flex gap-8 items-center">
                {/* Horizontal connector line from center to card */}
                <div className={`hidden md:block absolute top-1/2 ${num % 2 === 0 ? 'left-1/2' : 'right-1/2'} w-12 h-0.5 bg-gradient-to-${num % 2 === 0 ? 'r' : 'l'} from-primary-300 to-accent-300 z-10`}></div>
                
                {/* Step number circle - positioned in the center for timeline effect */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                    {num}
                  </div>
                </div>

                {/* Mobile step number */}
                <div className="flex-shrink-0 md:hidden">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {num}
                  </div>
                </div>

                {/* Content card - alternating sides on desktop */}
                <div className={`flex-1 ${num % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} md:w-[calc(50%-3rem)]`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark-700 mb-4 group-hover:text-primary-600 transition-colors">{t(`steps.step${num}.title`)}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t(`steps.step${num}.description`)}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 p-5 rounded-xl border border-primary-100 shadow-inner">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-bold text-dark-700">{t('steps.duration')}</h4>
                        </div>
                        <p className="text-gray-600">{t(`steps.step${num}.duration`)}</p>
                      </div>
                      <div className="bg-gradient-to-br from-accent-50 via-white to-primary-50 p-5 rounded-xl border border-accent-100 shadow-inner">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-accent-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-bold text-dark-700">{t('steps.deliverables')}</h4>
                        </div>
                        <p className="text-gray-600">{t(`steps.step${num}.deliverables`)}</p>
                      </div>
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
          <h2 className="text-4xl font-bold text-dark-700 mb-4 text-center">{t('commitment.title')}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our promises to deliver excellence in every project</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-700 mb-3 group-hover:text-primary-600 transition-colors">{t(`commitment.point${num}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`commitment.point${num}.description`)}</p>
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

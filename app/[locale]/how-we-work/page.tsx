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
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-700/80 to-accent-700/90 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            6-Step Process
          </div>
          <h1 className="text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">{t('hero.title')}</h1>
          <p className="text-2xl max-w-3xl mx-auto drop-shadow-lg opacity-95 leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <h2 className="text-5xl font-bold text-dark-700 mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">{t('overview.title')}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t('overview.description')}</p>
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
                  <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-300 hover:-translate-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-dark-700 mb-4 group-hover:text-primary-600 transition-colors">{t(`steps.step${num}.title`)}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.08),transparent_50%)]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-dark-700 mb-4 text-center">{t('commitment.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">Our promises to deliver excellence in every project</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-300 hover:-translate-y-3 relative overflow-hidden">
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
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold mb-16 text-center drop-shadow-lg">{t('whyUs.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{t(`whyUs.reason${num}.title`)}</h3>
                    <p className="text-white/90 leading-relaxed">{t(`whyUs.reason${num}.description`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

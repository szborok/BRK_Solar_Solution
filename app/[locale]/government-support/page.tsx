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
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-700/80 to-accent-700/90 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.1),transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Government Subsidies Available
          </div>
          <h1 className="text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">{t('hero.title')}</h1>
          <p className="text-2xl max-w-3xl mx-auto drop-shadow-lg opacity-95 leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Main Program Highlight */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.12),transparent_50%)]"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-40"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white rounded-3xl p-20 text-center shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">   
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30 shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('highlight.badge')}
              </div>
              <div className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">{t('highlight.percentage')}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">{t('highlight.title')}</h3>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">{t('highlight.description')}</p>
              <button
                onClick={scrollToContact}
                className="group/btn relative bg-white text-primary-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center"
              >
                <span>{t('highlight.button')}</span>
                <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-dark-700 mb-6 text-center">{t('programs.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">Discover all available financial support options for your green energy investment</p>
          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary-300 hover:-translate-y-3 relative overflow-hidden">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-700 mb-3 group-hover:text-primary-600 transition-colors">{t(`programs.program${num}.title`)}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{t(`programs.program${num}.description`)}</p>
                    <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 p-5 rounded-xl border border-primary-100 shadow-inner">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">{t('programs.maxSupport')}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">{t(`programs.program${num}.amount`)}</span>
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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_70%)]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-dark-700 mb-6 text-center">{t('eligibility.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">Check if you qualify for government support programs</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{num}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-700 mb-6 group-hover:text-primary-600 transition-colors">{t(`eligibility.category${num}.title`)}</h3>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4].map((req) => (
                      <li key={req} className="flex items-start group/item">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{t(`eligibility.category${num}.requirement${req}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

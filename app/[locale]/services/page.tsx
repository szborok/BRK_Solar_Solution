'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const t = useTranslations('servicesPage');

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072',
      key: 'solarPanels'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072',
      key: 'evCharger'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2072',
      key: 'batteryStorage'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      key: 'hvac'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
      key: 'electricalPrep'
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-700/80 to-accent-700/90 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg opacity-95">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">{t('overview.title')}</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">{t('overview.description')}</p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-700 mb-6 text-center">End-to-End Energy Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center mb-16">From solar panel installation to electrical infrastructure upgrades, we provide everything you need to transition to sustainable energy. Our expert team handles every aspect of your project with precision and care.</p>
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}>
                <div className="md:w-1/2">
                  <div
                    className="relative h-96 bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-accent-600/80 transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 bg-white/20 backdrop-blur-md rounded-3xl text-white transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 border border-white/30">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 bg-white rounded-3xl shadow-xl transform transition-all duration-500 group-hover:shadow-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4 transition-colors duration-300 group-hover:text-primary-600">{t(`services.${service.key}.title`)}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t(`services.${service.key}.fullDescription`)}</p>
                  
                  <h4 className="text-xl font-bold text-dark-700 mb-4 flex items-center">
                    <span className="w-8 h-0.5 bg-primary-600 mr-3"></span>
                    {t('services.keyFeatures')}
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex items-start transition-transform duration-300 hover:translate-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{t(`services.${service.key}.feature${num}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 p-6 rounded-2xl border border-primary-100 shadow-inner">
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2 font-medium">{t('services.forResidential')}</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">{t(`services.${service.key}.residentialPrice`)}</p>
                      </div>
                      <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-4"></div>
                      <div className="flex-1 text-right">
                        <p className="text-sm text-gray-600 mb-2 font-medium">{t('services.forCommercial')}</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">{t(`services.${service.key}.commercialPrice`)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-dark-700 mb-4 text-center">{t('targetAudience.title')}</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Choose the solution that fits your needs</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('targetAudience.residential.title')}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">{t('targetAudience.residential.description')}</p>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:bg-white/20">
                      <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/95">{t(`targetAudience.residential.benefit${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-dark-700 via-dark-600 to-gray-800 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('targetAudience.commercial.title')}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">{t('targetAudience.commercial.description')}</p>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:bg-white/20">
                      <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/95">{t(`targetAudience.commercial.benefit${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

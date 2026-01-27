'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Brands from '@/components/sections/Brands';

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Load Three.js
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js';
      script1.async = true;
      
      script1.onload = () => {
        // Load Vanta Fog
        const script2 = document.createElement('script');
        script2.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js';
        script2.async = true;
        
        script2.onload = () => {
          if (vantaRef.current && (window as any).VANTA) {
            vantaEffect.current = (window as any).VANTA.FOG({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              highlightColor: 0xcdbf9f,
              midtoneColor: 0xc8a49f,
              lowlightColor: 0x342f46,
              baseColor: 0x59615b,
              speed: 1.70,
              zoom: 1.30
            });
          }
        };
        
        document.head.appendChild(script2);
      };
      
      document.head.appendChild(script1);
    }
    
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

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
      
      {/* Hero Section - Video Background */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"
          >
            <source src="/media_collection/hero/3940526531-preview.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-100" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.subtitle')}</p>
        </div>
      </section>

      <Brands />

      {/* Detailed Services - Grid Layout */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Vanta Fog Background */}
        <div ref={vantaRef} className="absolute inset-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-700 mb-3 sm:mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>End-to-End Energy Solutions</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8 sm:mb-12" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>From solar panel installation to electrical infrastructure upgrades, we provide everything you need to transition to sustainable energy.</p>
          
          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 flex flex-col">
                {/* Image with Icon Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 to-accent-600/70 transition-opacity duration-500 group-hover:opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-2xl text-white transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30 border border-white/30">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-700 mb-2 transition-colors duration-300 group-hover:text-primary-600">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
                    {t(`services.${service.key}.fullDescription`)}
                  </p>
                  
                  {/* Key Features - Compact */}
                  <ul className="space-y-2 mt-auto">
                    {[1, 2].map((num) => (
                      <li key={num} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{t(`services.${service.key}.feature${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Button */}
                  <button className="mt-4 w-full py-3 px-4 bg-white text-primary-600 hover:bg-gray-100 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 opacity-0 group-hover:opacity-100 border border-gray-100">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences - Compact */}
      <section className="py-12 sm:py-16 relative overflow-hidden" style={{
        backgroundImage: 'url(/media_collection/bg/house_and_business.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%'
      }}>
        {/* Decorative circles */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-br from-primary-300/30 to-accent-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-accent-300/30 to-primary-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('targetAudience.title')}</h2>
          <p className="text-sm sm:text-base text-white text-center mb-8 sm:mb-12 max-w-2xl mx-auto relative z-10" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>Choose the solution that fits your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="group relative bg-gradient-to-br from-primary-600/70 to-primary-700/70 text-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('targetAudience.residential.title')}</h3>
                <p className="text-sm sm:text-base mb-4 opacity-95">{t('targetAudience.residential.description')}</p>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-start text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/95">{t(`targetAudience.residential.benefit${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-dark-700/70 via-dark-600/70 to-gray-800/70 text-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('targetAudience.commercial.title')}</h3>
                <p className="text-sm sm:text-base mb-4 opacity-95">{t('targetAudience.commercial.description')}</p>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-start text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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
          
          {/* CTA at bottom of section */}
          <div className="rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-gray-900/80 backdrop-blur-sm mt-12 max-w-6xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{t('cta.title')}</h3>
              <p className="text-gray-200 text-lg mb-8 sm:mb-12 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>{t('cta.subtitle')}</p>
              <p className="text-gray-300 text-base mb-8 sm:mb-12 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                Our experienced team will assess your property, recommend the perfect solution for your needs, and provide a transparent quote with no hidden fees. We handle everything from permits to installation, making your transition to clean energy seamless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <button
                  onClick={scrollToContact}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {t('cta.button')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  onClick={scrollToContact}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/40 hover:bg-white/50 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-white/60"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

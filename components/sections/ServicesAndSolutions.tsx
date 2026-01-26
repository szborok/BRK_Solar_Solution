'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServicesAndSolutions() {
  const t = useTranslations('services');
  const tAudience = useTranslations('targetAudience');
  const params = useParams();
  const locale = params.locale as string;
  const [isVisible, setIsVisible] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => {
      if (solutionsRef.current) {
        observer.unobserve(solutionsRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072',
      key: 'solarPanels'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072',
      key: 'evCharger'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2072',
      key: 'batteryStorage'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      key: 'hvac'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069',
      key: 'electricalPrep'
    },
  ];

  return (
    <section id="services" className="py-20 text-white relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(225deg, rgba(243, 156, 18, 0.5), rgba(46, 204, 113, 0.5)), url(/media_collection/bg/solar-8656654_1920.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      transform: 'scaleX(-1)'
    }}>
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/20 z-0" />

      <div className="container mx-auto px-4 relative z-10" style={{ transform: 'scaleX(-1)' }}>
        {/* Solar Solutions Section - Now First */}
        <div ref={solutionsRef}>
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
              {tAudience('title')}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl ml-auto" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}>
              {tAudience('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl ml-auto mb-24">
            {/* Residential Card */}
            <Link
              href={`/${locale}/solutions/residential`}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform block ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(34, 139, 34, 0.85), rgba(30, 58, 47, 0.9)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col text-white" style={{ minHeight: '600px' }}>
                <div>
                  <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{tAudience('residential.title')}</h3>
                  <p className="text-lg mb-6 text-gray-100">
                    {tAudience('residential.description')}
                  </p>
                
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('residential.benefit1')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('residential.benefit2')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('residential.benefit3')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('residential.benefit4')}</span>
                    </div>
                  </div>
                </div>

                <button className="absolute bottom-8 left-8 right-8 w-auto bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                  {tAudience('residential.button')}
                </button>
              </div>
            </Link>

            {/* Commercial Card */}
            <Link
              href={`/${locale}/solutions/commercial`}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 47, 0.85), rgba(20, 40, 30, 0.9)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col text-white" style={{ minHeight: '600px' }}>
                <div>
                  <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{tAudience('commercial.title')}</h3>
                  <p className="text-lg mb-6 text-gray-100">
                    {tAudience('commercial.description')}
                  </p>
                
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('commercial.benefit1')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('commercial.benefit2')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('commercial.benefit3')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base">{tAudience('commercial.benefit4')}</span>
                    </div>
                  </div>
                </div>

                <button className="absolute bottom-8 left-8 right-8 w-auto bg-white text-dark-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                  {tAudience('commercial.button')}
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Services Section - Now Second */}
        <div className="mt-24">
          <div className="text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
              {t('title')}
            </h2>
            <p className="text-xl max-w-2xl ml-auto" style={{ color: '#ffffff', textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}>
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl ml-auto mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Icon/Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(30, 58, 47, 0.8), rgba(34, 139, 34, 0.6)), url(${service.image})`,
                    }}
                  />
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-700 mb-3">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {t(`${service.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-end">
            <Link
              href={`/${locale}/services`}
              className="group relative px-12 py-5 bg-gradient-to-r from-white/20 via-gray-100/30 to-white/20 backdrop-blur-sm border-2 border-white/50 text-gray-900 rounded-full text-lg font-bold shadow-xl hover:shadow-white/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-gray-100/50 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              <span className="relative flex items-center gap-3 group-hover:text-orange-700">
                {t('learnMoreButton')}
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

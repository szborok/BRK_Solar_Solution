'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Services() {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;

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
    <section className="pt-20 pb-0 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #2ecc71 0%, #a4d65e 50%, #f39c12 100%)'
    }}>
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-[-15%] left-[30%] w-[550px] h-[550px] bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute top-[10%] right-[25%] w-[350px] h-[350px] bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-1000" />
      <div className="absolute top-[50%] right-[-5%] w-[450px] h-[450px] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-blob animation-delay-3000" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-primary-400 rounded-full opacity-60 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-primary-300 rounded-full opacity-50 animate-float animation-delay-1000" />
        <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-primary-500 rounded-full opacity-40 animate-float animation-delay-2000" />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-primary-200 rounded-full opacity-60 animate-float animation-delay-3000" />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 bg-green-400 rounded-full opacity-50 animate-float animation-delay-1500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-700 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
        <div className="flex justify-center mt-16">
          <Link
            href={`/${locale}/services`}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-orange-500/20 backdrop-blur-sm border-2 border-orange-500/50 text-orange-600 rounded-full text-lg font-bold shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-500/50 to-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
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
    </section>
  );
}

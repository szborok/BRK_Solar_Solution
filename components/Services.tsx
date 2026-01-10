'use client';

import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Gradient Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      
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
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                <h3 className="text-xl font-bold text-dark-700 mb-3 group-hover:text-accent-600 transition-colors">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {t(`${service.key}.description`)}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-500 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

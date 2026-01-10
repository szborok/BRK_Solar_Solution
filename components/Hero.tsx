'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.6) 0%, rgba(34, 139, 34, 0.75) 50%, rgba(30, 58, 47, 0.9) 100%), url(https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-[-15%] left-[30%] w-[550px] h-[550px] bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute top-[10%] right-[25%] w-[350px] h-[350px] bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-1000" />
      <div className="absolute top-[50%] right-[-5%] w-[450px] h-[450px] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-blob animation-delay-3000" />

      {/* Hexagon Solar Cell Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 70px'
        }} />
      </div>

      {/* Sun Rays Geometric Pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]">
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-full origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg)`,
                background: 'linear-gradient(to top, transparent, white, transparent)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Solar Panel Corner Accents */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <rect x="5" y="5" width="25" height="25" fill="currentColor" opacity="0.6" />
          <rect x="35" y="5" width="25" height="25" fill="currentColor" opacity="0.7" />
          <rect x="65" y="5" width="25" height="25" fill="currentColor" opacity="0.5" />
          <rect x="5" y="35" width="25" height="25" fill="currentColor" opacity="0.7" />
          <rect x="35" y="35" width="25" height="25" fill="currentColor" opacity="0.8" />
          <rect x="65" y="35" width="25" height="25" fill="currentColor" opacity="0.6" />
          <rect x="5" y="65" width="25" height="25" fill="currentColor" opacity="0.5" />
          <rect x="35" y="65" width="25" height="25" fill="currentColor" opacity="0.6" />
          <rect x="65" y="65" width="25" height="25" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="text-primary-200">
          <rect x="5" y="5" width="25" height="25" fill="currentColor" opacity="0.5" />
          <rect x="35" y="5" width="25" height="25" fill="currentColor" opacity="0.8" />
          <rect x="65" y="5" width="25" height="25" fill="currentColor" opacity="0.6" />
          <rect x="5" y="35" width="25" height="25" fill="currentColor" opacity="0.6" />
          <rect x="35" y="35" width="25" height="25" fill="currentColor" opacity="0.7" />
          <rect x="65" y="35" width="25" height="25" fill="currentColor" opacity="0.8" />
          <rect x="5" y="65" width="25" height="25" fill="currentColor" opacity="0.7" />
          <rect x="35" y="65" width="25" height="25" fill="currentColor" opacity="0.5" />
          <rect x="65" y="65" width="25" height="25" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-white rounded-full opacity-60 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-primary-300 rounded-full opacity-50 animate-float animation-delay-1000" />
        <div className="absolute top-[45%] left-[20%] w-2 h-2 bg-white rounded-full opacity-40 animate-float animation-delay-2000" />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-primary-200 rounded-full opacity-60 animate-float animation-delay-3000" />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 bg-white rounded-full opacity-50 animate-float animation-delay-1500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              {t('requestConsultation')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 border border-white/30"
            >
              {t('ourServices')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-200">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-200">Years Warranty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

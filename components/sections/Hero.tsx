'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number>();
  const isReversingRef = useRef(false);
  const playbackSpeedRef = useRef(0.5); // Reverse speed factor

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Handle autoplay errors gracefully
    });

    const handleEnded = () => {
      // Start reversing
      isReversingRef.current = true;
      video.pause();
      reverseVideo();
    };

    const reverseVideo = () => {
      if (!video.duration) {
        animationRef.current = requestAnimationFrame(reverseVideo);
        return;
      }

      const step = () => {
        if (isReversingRef.current) {
          video.currentTime = Math.max(0, video.currentTime - playbackSpeedRef.current);

          // If we've reached the beginning, play forward
          if (video.currentTime <= 0) {
            isReversingRef.current = false;
            video.currentTime = 0;
            video.play().catch(() => {});
            return;
          }

          animationRef.current = requestAnimationFrame(step);
        }
      };

      animationRef.current = requestAnimationFrame(step);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video/GIF */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072"
        >
          <source src="/media_collection/solar/3884707157-preview.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.6)' }}>
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)' }}>
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
              <div className="text-sm md:text-base text-gray-200">{t('projectsCompleted')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-200">{t('yearsWarranty')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-200">{t('satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

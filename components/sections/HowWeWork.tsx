'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HowWeWork() {
  const t = useTranslations('howWeWork');
  const params = useParams();
  const locale = params.locale as string;
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Animation starts when section enters viewport
      // Animation completes when the header text exits the top of viewport
      const sectionTop = rect.top;
      
      // Animation starts when section is visible (top at bottom of viewport)
      const scrollStart = windowHeight;
      // Animation completes when title area (approx first 150px) exits viewport
      const scrollEnd = -150;
      
      const progress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
      
      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      // Update continuous progress for the line
      setScrollProgress(clampedProgress);
      
      // Map progress to steps (0-3)
      const step = Math.floor(clampedProgress * 3.99);
      const newActiveStep = Math.min(3, Math.max(0, step));
      
      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: '01',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      key: 'step1'
    },
    {
      number: '02',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      key: 'step2'
    },
    {
      number: '03',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      key: 'step3'
    },
    {
      number: '04',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      key: 'step4'
    },
  ];

  return (
    <section ref={sectionRef} id="workflow" className="py-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/06/12/41787-430909611_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 via-gray-50/80 to-white/80" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle animated dots */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-15 blur-3xl animate-blob" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2)' }}>
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-12" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.2)' }}>
            {t('subtitle')}
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-300">
              <div 
                className="h-full bg-gradient-to-r from-gray-800 to-black transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 mx-auto">
                    <div className={`w-40 h-40 mx-auto mb-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-700 transform ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-black/50 scale-125'
                        : 'bg-white shadow-lg scale-100'
                    }`}>
                      <div className={`transition-all duration-700 ${
                        activeStep === index ? 'text-white scale-110' : 'text-gray-800'
                      }`}>
                        {step.icon}
                      </div>
                      <div className={`text-4xl font-bold mt-2 transition-all duration-700 ${
                        activeStep === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`text-xl font-bold mb-3 transition-all duration-500 ${
                      activeStep === index ? 'text-gray-900 scale-105' : 'text-gray-700'
                    }`}>
                      {t(`${step.key}.title`)}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-500 ${
                      activeStep === index ? 'text-gray-800 opacity-100' : 'text-gray-600 opacity-70'
                    }`}>
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex gap-6">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center shadow-lg shadow-black/30">
                      <div className="text-white text-xs">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white shadow-md rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {t(`${step.key}.title`)}
                      </h3>
                      <span className="text-3xl font-bold text-gray-300">
                        {step.number}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <Link
            href={`/${locale}/workflow`}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-orange-500/20 backdrop-blur-sm border-2 border-orange-500/50 text-orange-600 rounded-full text-lg font-bold shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-500/50 to-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            <span className="relative flex items-center gap-3 group-hover:text-orange-700">
              {t('learnMore')}
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

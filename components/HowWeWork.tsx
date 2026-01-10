'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function HowWeWork() {
  const t = useTranslations('howWeWork');
  const [activeStep, setActiveStep] = useState(0);

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
    <section id="how-we-work" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/80 to-gray-200/80" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle animated dots */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-15 blur-3xl animate-blob" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-15 blur-3xl animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-300">
              <div 
                className="h-full bg-gradient-to-r from-gray-800 to-black transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative cursor-pointer group"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 mx-auto">
                    <div className={`w-40 h-40 mx-auto mb-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 transform ${
                      activeStep === index
                        ? 'bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-black/50 scale-125'
                        : 'bg-white shadow-lg group-hover:shadow-2xl group-hover:scale-110'
                    }`}>
                      <div className={`transition-all duration-500 ${
                        activeStep === index ? 'text-white scale-110' : 'text-gray-800'
                      }`}>
                        {step.icon}
                      </div>
                      <div className={`text-4xl font-bold mt-2 transition-all duration-500 ${
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
      </div>
    </section>
  );
}

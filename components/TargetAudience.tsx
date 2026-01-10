'use client';

import { useEffect, useRef, useState } from 'react';

export default function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Gradient Fade from Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[rgba(30,58,47,0.1)] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-700 mb-4">
            Solar Solutions for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a homeowner or a business owner, we have the perfect solar solution tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Residential Card */}
          <div
            className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
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
            <div className="relative z-10 p-8 md:p-10 min-h-[500px] flex flex-col justify-between text-white">
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Residential</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Transform your home into a sustainable energy powerhouse
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Reduce your monthly electricity bills by up to 90%</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Increase your property value instantly</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">25+ year warranty on solar panels</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Flexible financing options available</span>
                </div>
              </div>

              <button className="mt-8 w-full bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Explore Home Solutions
              </button>
            </div>
          </div>

          {/* Commercial Card */}
          <div
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
            <div className="relative z-10 p-8 md:p-10 min-h-[500px] flex flex-col justify-between text-white">
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Commercial</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Maximize profits while minimizing your carbon footprint
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Significant ROI within 3-5 years</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Tax incentives and business deductions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Enhanced corporate sustainability profile</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base">Scalable systems for any business size</span>
                </div>
              </div>

              <button className="mt-8 w-full bg-white text-dark-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Explore Business Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

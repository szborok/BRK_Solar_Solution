'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const locale = params.locale as string;

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
    <section id="services" ref={sectionRef} className="pt-0 pb-20 bg-gray-50 relative overflow-hidden">
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(to bottom, rgba(30, 58, 47, 0.35) 0%, rgba(34, 139, 34, 0.25) 50%, rgba(30, 58, 47, 0.15) 100%)'
      }} />

      {/* Hexagon Solar Cell Pattern - Continuation from Services */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 70px'
        }} />
      </div>

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
            Solar Solutions for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a homeowner or a business owner, we have the perfect solar solution tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Residential</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Transform your home into a sustainable energy powerhouse
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
              </div>

              <button className="absolute bottom-8 left-8 right-8 w-auto bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Explore Home Solutions
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Commercial</h3>
                <p className="text-lg mb-6 text-gray-100">
                  Maximize profits while minimizing your carbon footprint
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
              </div>

              <button className="absolute bottom-8 left-8 right-8 w-auto bg-white text-dark-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Explore Business Solutions
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services');
  const tHeader = useTranslations('header');
  
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Tree Background - Lower Portion (Roots) */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=80)',
            backgroundPosition: 'center bottom',
          }}
        />
        {/* Darker Overlay - continues from Contact section */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/90 via-dark-900/95 to-black" />
      </div>
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      
      {/* Green Accent Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">BRK</span>{' '}
                <span className="text-primary-400">SOLAR</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('servicesTitle')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tServices('solarPanels.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tServices('batteryStorage.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tServices('evCharger.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tServices('hvac.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tServices('electricalPrep.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('companyTitle')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#workflow" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tHeader('about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tHeader('references')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {tHeader('faq')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  {t('contactTitle')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors flex items-center gap-2 group">
                  <span className="text-primary-500 group-hover:translate-x-1 transition-transform">→</span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('contactTitle')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href="tel:+3611889900" className="text-gray-300 hover:text-accent-500 transition-colors">
                    +36 1 188 9900
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:info@brksolar.hu" className="text-gray-300 hover:text-accent-500 transition-colors">
                    info@brksolar.hu
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Office</p>
                  <p className="text-gray-300">
                    Budapest, Hungary
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              {t('copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                {t('terms')}
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                {t('cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KnowledgePage() {
  const t = useTranslations('knowledgePage');

  const categories = ['all', 'solar', 'battery', 'evCharger', 'maintenance', 'financing'];
  
  const articles = [
    { id: 1, category: 'solar', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072' },
    { id: 2, category: 'battery', image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2072' },
    { id: 3, category: 'evCharger', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072' },
    { id: 4, category: 'solar', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072' },
    { id: 5, category: 'maintenance', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070' },
    { id: 6, category: 'financing', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/media_collection/hero/3799746825-preview.mp4" type="video/mp4" />
        </video>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-gray-700"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-6 py-3 rounded-full bg-white border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-colors text-gray-700 font-semibold"
                >
                  {t(`categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-dark-700 mb-3 sm:mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('featured.title')}</h2>
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072)',
                }}
              />
              <div className="p-12 text-white flex flex-col justify-center">
                <div className="inline-block self-start bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {t('featured.badge')}
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('featured.article.title')}</h3>
                <p className="text-lg mb-6 opacity-90">{t('featured.article.excerpt')}</p>
                <div className="flex items-center text-sm mb-6 opacity-75">
                  <span>{t('featured.article.date')}</span>
                  <span className="mx-3">•</span>
                  <span>{t('featured.article.readTime')}</span>
                </div>
                <button className="self-start bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  {t('featured.readMore')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-dark-700 mb-8 sm:mb-12" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{t('articles.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3)), url(${article.image})`,
                  }}
                />
                <div className="p-6">
                  <div className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {t(`categories.${article.category}`)}
                  </div>
                  <h3 className="text-xl font-bold text-dark-700 mb-3">{t(`articles.article${article.id}.title`)}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{t(`articles.article${article.id}.excerpt`)}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{t(`articles.article${article.id}.date`)}</span>
                    <span>{t(`articles.article${article.id}.readTime`)}</span>
                  </div>
                  <button className="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors">
                    {t('articles.readMore')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t('newsletter.title')}</h2>
          <p className="text-xl mb-8">{t('newsletter.subtitle')}</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              {t('newsletter.button')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

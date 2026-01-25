'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

// County to operator mapping
const countyOperators: { [key: string]: string } = {
  'HUSZ': 'EDKE',
  'HUBE': 'EON',
  'HUHB': 'EDKE',
  'HUCS': 'MVM',
  'HUGS': 'EON',
  'HUSN': 'EON',
  'HUVA': 'EON',
  'HUBK': 'MVM',
  'HUSD': 'MVM',
  'HUZA': 'MVM',
  'HUSO': 'MVM',
  'HUBZ': 'ELMŰ',
  'HUNO': 'ELMŰ',
  'HUST': 'ELMŰ',
  'HUKE': 'ELMŰ',
  'HUPE': 'ELMŰ',
  'HUJN': 'EDKE',
  'HUFE': 'EDKE',
  'HUVE': 'EDKE',
  'HUTO': 'EDKE',
  'HUBA': 'ELMŰ',
  'HUSK': 'EDKE',
  'HUBU': 'ELMŰ',
  'HUER': 'ELMŰ',
  'HUHE': 'ELMŰ',
  'HUEG': 'ELMŰ'
};

// County name mapping
const countyNames: { [key: string]: string } = {
  'HUSZ': 'Szabolcs-Szatmár-Bereg',
  'HUBE': 'Békés',
  'HUHB': 'Hajdú-Bihar',
  'HUCS': 'Csongrád',
  'HUGS': 'Gyor-Moson-Sopron',
  'HUSN': 'Sopron',
  'HUVA': 'Vas',
  'HUBK': 'Bács-Kiskun',
  'HUSD': 'Szeged',
  'HUZA': 'Zala',
  'HUSO': 'Somogy',
  'HUBZ': 'Borsod-Abaúj-Zemplén',
  'HUNO': 'Nógrád',
  'HUST': 'Salgótarján',
  'HUKE': 'Komárom-Esztergom',
  'HUPE': 'Pest',
  'HUJN': 'Jász-Nagykun-Szolnok',
  'HUFE': 'Fejér',
  'HUVE': 'Veszprém',
  'HUTO': 'Tolna',
  'HUBA': 'Baranya',
  'HUSK': 'Szolnok',
  'HUBU': 'Budapest',
  'HUER': 'Érd',
  'HUHE': 'Heves',
  'HUEG': 'Eger'
};

// Color mapping by operator
const operatorColors: { [key: string]: string } = {
  'EON': 'fill-blue-500',
  'MVM': 'fill-green-500',
  'ELMŰ': 'fill-purple-500',
  'EDKE': 'fill-yellow-500'
};

export default function WhereWeWork() {
  const t = useTranslations('whereWeWork');
  const params = useParams();
  const locale = params.locale as string;
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const partners = [
    { name: 'EON', key: 'eon', color: 'blue' },
    { name: 'MVM', key: 'mvm', color: 'green' },
    { name: 'ELMŰ', key: 'elmuu', color: 'purple' },
    { name: 'EDKE', key: 'edke', color: 'orange' },
  ];

  const handleMouseEnter = (e: React.MouseEvent, countyId: string) => {
    setHoveredCounty(countyId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCounty(null);
  };

  const getCountyColor = (countyId: string) => {
    const operator = countyOperators[countyId];
    return operatorColors[operator] || 'fill-gray-400';
  };

  return (
    <section className="relative py-16 md:py-24" id="where-we-work">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(/where_we_work_bg/pexels-darshan394-1123972.jpg)',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
            {t('title')}
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mb-12 border border-white/20">
          <div className="flex flex-col items-center">
            {/* SVG Map Container */}
            <div className="relative z-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-100 w-full bg-transparent">
              <div className="relative w-full" style={{ minHeight: '500px' }}>
                <svg 
                  className="w-full h-auto" 
                  viewBox="0 0 1000 613" 
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <g id="features">
                    {Object.keys(county Operators).map((countyId) => {
                      const svgPaths: { [key: string]: string } = {
                        'HUSZ': "M857.6 225.9l-0.1-0.1-2.8-3.7-2.7-11.5-2.3-3.5-6.2 7-3.5-3.5 0.7-5.2-3.8-6.9-9.4-5.3-4.5 0.3-3.3 5.6-1.6 4.2-2.5 2.5-2.8-1.7-2.4-3-2.7-1.1-2.9 0-5.6-2.1-2.6-2.5-6.6-1.4-2.2-3.1-12.6-9.9 0.6-11.2 1.7-10.7-1.4-4.2-4.2-1.5-5.2 3.1-21.7 1.7-6 2.4-11.1-8.9-9.7-1.3 0.8-5.2 0.9-2.5 1.5-1.5 5.8-3.9 0.9-0.2 3.3 0.2 1.4-0.6 0.5-1.2 0.4-1.4 0.9-1 2.2-0.1 1.4 1.2 1.2 1.7 1.6 1.4 1.9 0.4 6.4-0.4-0.9 0 4.5-0.2 4.6-1.3 3.4-3.4 1.3-6.3-0.4-2.7-1-1.6-0.7-1.8 0.2-3.5 1-2.8 1.5-2.9 1.9-2.4 2-1.4 2.5-0.4 8.6 0.4 5-0.7 2.2 0 5.3 2.6 2.6 0.4 2.5-0.4 10.2-6.4 1.6-0.4 2.2-0.1 2.5-2 2.4-2.6 2-1.5 8.5-0.6 2.6-0.9 1.9-1.6 3.8-4.5 4.5-6.7 0.8-0.8 1.6-0.2 2.6 1.4 1.2 0.3 3.7-2.4 2.8-4.6 5-10.6 2.8-3.1 0.2 0 1.3-1.4 4.4-1.8 3 0.4 0.1 0.1 0.1 0.2 0 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.2 0.1 0.1 0.1 0.1 0.1 0.1 0 0.2 0.1 0.2 0.1 0.2 0 0.2 0.1 0.1 0 0.2 0 0.3-0.1 0.1 0 0.2-0.1 0.2 0 0.3-0.1 1.9 1 0 0.1-0.1 0.2 0 0.2-0.1 0.1 0 0.2-0.1 0.2-0.1 0.2-0.1 0.1-0.1 0.2 0 0.2-0.1 0.1-0.1 0.1 0 0.1-0.1 0.3-0.1 0.1-0.2 0.2-0.1 0.1-0.1 0.1 0 0.1-0.2 0.1-0.2 0.1-0.1 0-0.2 0.1-0.1 0-0.3 0-0.3 0.1-0.1 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0 0.1 0.1 0.2 0.1 0.2 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.2 0.2 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.2 0.1 0.2 0.1 0.2 0.1 0.4 0.5 0.9 0.8 1.1 0.1 0 0.2 0.1 1.6 0.4 0.1 0 1.3 0.4 0.9 1.5 0 1.9-0.3 2.4 0.1 2.7 1.4 4.1 6.6 10.2 0.9 0.9 0.9 0.3 1-0.3 0.4 0.4 0.4 0.5 0.1 0 0-0.1 0-0.1 0-0.1 0.1-0.1 0-0.1 0-0.1 0-0.1 0.1-0.1 0-0.1 0.1 0 0.1 0 0-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.2-0.1 0.1 0 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0-0.1 0-0.1 0.1-0.1 0-0.1 0.4 0.1 2.6 1 2.1 0.5 2.1-0.2 2.2-1.1 0.1 0.1 0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0.6-0.1 0.5 0.1 0.6 0.3 9.9 13.2 1.8 4.1 1.9 6.4 1.2 2.5-0.3 0.9 0.1 0 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0 0.1 0 0.2 0.1 0.2 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.2 0 0.2 0 0.2 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1 0 0.2-0.1 0.1-0.1 0.2 0 0 0.2 0 0.1 0 0.1 0.1 0.1 0-0.1 0.2 0 0.1 0 0.1 0.1 0.2 0.2 0.1 0.1 0.1 0.1 0.2 0.4 0.3 0.3 0.3 0.3 0.1 0.1 0.2 0.1 0.2 0 0.2 0 0.4 0 0.3 0 0.1 0 0.1 0 0.1 0 0.3 0.1 0.3 0 0.3 0 0.3 0 0.1-0.1 0.2 0 0.2 0.1 0.2 0 0.2 0.1 0.2 0.2 0.1 0.1 0.3 0.1 0.3 0.1 0.3 0 0.4 0 0.2 0 0.2 0 0.1-0.1 0.1-0.1 0.1 0 0.2-0.1 0.1-0.2 0.2-0.3 0.2-0.1 0.2-0.2 0.2-0.3 1-0.6 2.4-0.8 2.3-1.5 2.3-0.6 2.2 1.4 0.4 1 4.8 2.7 4 3.7 1.8 2.3 1.4 2.7 0.9 3.8-0.5 2.1-0.9 1.9-0.1 1.1 0 0.1-0.4 0 0 0.2 0 0.1 0.1 0.3 0 0.2 0.1 0-0.2 0.2-0.1 0-0.3-0.2 0 0.1-0.1 0.1 0 0.1-0.1 0.1-0.1 0 0 0.1-0.1 0-0.1 0.2 0 0.1-0.1 0.1-0.1 0.1 0 0.1-0.2 0.2 0 0.1 0 0.1-0.1 0-0.1 0.1-0.1 0.1 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0 0.1 0 0.1-0.1 0.1-1.2 1.5 1.1 2.5 4.9 4-2.2 2.6-3.3 6.2-2.2 2.1-5.4 2-2.1 1.5-1.5 2.7 0.1 1.7 0.7 1.3 0.2 1.4-1.1 2.3-0.8 0.5-2.9 0.3-2.7 1.3-1.7 1.3-3.3 4.3-3.9 3.5-4.9 2.1-5.1 0.7-4.6-0.7-10-5.3-4.1 1-2.2 7.8-1.5 1.5-1.8 0.7-1.9 0.2-6.2-0.9-1.7 0.1-2.4 0.9-2.5 1.4-1.5 1.6-2.9 4.4-1.1 1.1-2.2 1.6-1 1.3-0.5 1.4-0.5 3.7-0.4 1.7-3.3 4.8-0.4 1.3-0.1 1.4-0.2 1.3 0 0.3-0.7 1.5-1.1 0.8z m-40.8-81.4l-7.1-0.6 0-6-3.8-2.8-5.1 3.6-2.4-2.5-6.8 0.5-2.3 4.5-1.3 4.3-1 10.1-1 12.1 8.1 2.6 9.2 2.5 4.4 3 7.4-1.5 3.1-6.6 0.3-7.1 4.4-1 0.4-7.6-0.4-7-2.7-3.1-3.4 2.6z",
                        'HUBE': "M674.4 484.7l0-0.1-1.6-2.4-2.5-1.9-1-3 1.1-4.8 0.2-4.6-1.5-3.7-2.3-2.9-2.6 0.3-1.2-2.3-7.1 1.9-6.7-0.1 2.4-5.3-4.3 1.1 0.1-8.1 1.3-2.5-0.8-3.9 2.9-5 1.8-6.3-4-1.7-2.1-3.9-0.4-14.6 1.8-9.2-0.4-12.5-4.3-4-6.7-1.8-10.9-3.9-2-6.5 1.4-5.7 5.3-4.6 4.7-0.5 4.5 1.2 3.8-5.4 3.9 1.1 3.1-2.7 2.1 1.4 1.6 2.3 2.7-0.6 2.5-1.8 2.2-0.4 2.1-1.4 1.4-5.9-0.7-6.4-1.3-2.5-0.1-3 5.1-6.2-0.1-2.6-0.5-1.2 1.4-2.5 2.2-1.6 8.1-10 2.6-1 2.7 0.8 1.9-1.1 1.2-2.6 1.9-0.6 1.5-2.5 1.1-2.6 3.2-1.3 1.5-2 1-2.7 2-2.7 2.6-1.3 16.6 10.9 5.7 2 6 0.7 8.8 4.3 2.7 5.7-0.1 14.2-0.3 5.6 1.7 3.1 3.2 0.9 2.5 2.5-1.2 4.8 2.5 2.5 4.5 0.9 9.3-2.6 5.6 0.1 9.2-9.3 5.7-2.8 3.3-0.8 0.3 1 1.2 0.6 1.3 0.2 0.9 0.8 1.2 2.3 0.1 0.2-0.5 0.2-2.6 9.7-1.1 1.4-6.1 5.1-0.6 0.2-0.2 0.5-0.2 2.3 0.1 2.4 0.5 2.1 0 2.1-1.1 2.5-1.4 1.2-4.9 1.4-2.8 2.6-1.7 3.2-2.8 7.9-0.6 0.9-0.5 1-0.3 1.2-0.1 1.2 0.3 0.5 0.3 0.5 0.4 0.4 3.6 2.4-0.4 3.9-2.5 3.6-2.7 1.6-3.6 0.6-1.5 2.3-0.2 0.7-0.9 2.6-2.8 3.7-2.9 1.5-4.9-0.4-2.9 0.8-2 2.4-0.8 3.7-0.5 7.5-1.7 3.6-2.3 2.9-1.9 3.1-0.3 4 3.9 7.5 0.8 4.3-3.1 2.3-5.6 0.3-2.7 0.9-2.2 2.7-1.4 4.2-0.5 8.6-1.2 3.8-1.5 2.9-1.3 1-3.9 0-0.9 0.4-6.4 7.8-2.4 1-2.6-2.3-0.9-1.1-1.1-0.6-1.1 0-1.3 0.6-2.6 0.1-5-2.2-2.4-0.5-0.9 0.3-2 1.1-1.3 0.1-1.1-0.5-2.4-2.1-1.3-0.6-2.6-0.2-2.9 0.8-1.5 0.9z m51-79.2l5.3-6.5-2.4-6.5 1.6-7.7-6.1-8.9-12.9-6-5.5 10-5.8 6.1 2.1 10 1.6 10.4 7.4-0.1 6.3-1.2 8.4 0.4z",
                        // ... (copy all other SVG paths from the original file)
                      };
                      
                      return (
                        <path
                          key={countyId}
                          d={svgPaths[countyId]}
                          id={countyId}
                          className={`cursor-pointer transition-all duration-200 ${
                            hoveredCounty === countyId ? 'fill-orange-600' : getCountyColor(countyId)
                          } hover:fill-orange-600 stroke-white stroke-[0.5]`}
                          onMouseEnter={(e) => handleMouseEnter(e, countyId)}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>

              {/* Tooltip */}
              {hoveredCounty && (
                <div
                  className="fixed z-50 bg-white rounded-lg shadow-xl p-4 border-2 border-orange-500 pointer-events-none"
                  style={{
                    left: `${tooltipPosition.x + 10}px`,
                    top: `${tooltipPosition.y + 10}px`,
                  }}
                >
                  <div className="font-bold text-gray-800">
                    {countyNames[hoveredCounty]}
                  </div>
                  <div className="text-sm text-gray-600">
                    Operator: <span className="font-bold text-orange-600">{countyOperators[hoveredCounty]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Map Legend */}
            <div className="mt-8 w-full">
              <h3 className="text-xl font-bold text-white mb-4">{t('networkPartners')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {partners.map((partner) => {
                  const colorMap: { [key: string]: { bg: string; border: string; text: string } } = {
                    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900' },
                    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900' },
                    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-900' },
                    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900' },
                  };
                  const colors = colorMap[partner.color];
                  
                  return (
                    <div key={partner.key} className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <h4 className={`font-bold ${colors.text}`}>{t(`partners.${partner.key}.title`)}</h4>
                      <p className="text-sm text-gray-700">{t(`partners.${partner.key}.region`)}</p>
                      <p className="text-xs text-gray-600 mt-1">{t(`partners.${partner.key}.areas`)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <Link
            href={`/${locale}/where-we-work`}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-orange-500/20 backdrop-blur-sm border-2 border-orange-500/50 text-white rounded-full text-lg font-bold shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-500/50 to-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            <span className="relative flex items-center gap-3">
              {t('exploreAreas')}
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

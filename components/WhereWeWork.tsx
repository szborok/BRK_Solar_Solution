'use client';

import { useState } from 'react';

type CountyType = 
  | 'budapest' | 'pest' | 'fejér' | 'komárom-esztergom' | 'győr-moson-sopron' 
  | 'vas' | 'veszprém' | 'somogy' | 'tolna' | 'baranya' | 'bács-kiskun' 
  | 'csongrád-csanád' | 'békés' | 'jász-nagykun-szolnok' | 'heves' 
  | 'nógrád' | 'borsod-abaúj-zemplén' | 'szabolcs-szatmár-bereg' | 'hajdú-bihar' | null;

interface County {
  name: string;
  operator: string;
  available: boolean;
  color: string;
}

export default function WhereWeWork() {
  const [activeCounty, setActiveCounty] = useState<CountyType>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const counties: Record<CountyType extends null ? never : CountyType, County> = {
    'budapest': { name: 'Budapest', operator: 'ELMŰ', available: true, color: '#ea580c' },
    'pest': { name: 'Pest', operator: 'ELMŰ/EDKE', available: true, color: '#f97316' },
    'fejér': { name: 'Fejér', operator: 'ELMŰ', available: true, color: '#fb923c' },
    'komárom-esztergom': { name: 'Komárom-Esztergom', operator: 'EON', available: true, color: '#fdba74' },
    'győr-moson-sopron': { name: 'Győr-Moson-Sopron', operator: 'EON', available: true, color: '#fed7aa' },
    'vas': { name: 'Vas', operator: 'EON', available: true, color: '#fecaca' },
    'veszprém': { name: 'Veszprém', operator: 'ELMŰ', available: true, color: '#fca5a5' },
    'somogy': { name: 'Somogy', operator: 'ELMŰ', available: true, color: '#f87171' },
    'tolna': { name: 'Tolna', operator: 'ELMŰ', available: true, color: '#ef4444' },
    'baranya': { name: 'Baranya', operator: 'EON', available: true, color: '#dc2626' },
    'bács-kiskun': { name: 'Bács-Kiskun', operator: 'MVM', available: true, color: '#b91c1c' },
    'csongrád-csanád': { name: 'Csongrád-Csanád', operator: 'MVM', available: true, color: '#7f1d1d' },
    'békés': { name: 'Békés', operator: 'MVM', available: true, color: '#991b1b' },
    'jász-nagykun-szolnok': { name: 'Jász-Nagykun-Szolnok', operator: 'MVM', available: true, color: '#b91c1c' },
    'heves': { name: 'Heves', operator: 'MVM', available: true, color: '#dc2626' },
    'nógrád': { name: 'Nógrád', operator: 'MVM', available: true, color: '#ef4444' },
    'borsod-abaúj-zemplén': { name: 'Borsod-Abaúj-Zemplén', operator: 'MVM', available: true, color: '#f87171' },
    'szabolcs-szatmár-bereg': { name: 'Szabolcs-Szatmár-Bereg', operator: 'MVM', available: true, color: '#fca5a5' },
    'hajdú-bihar': { name: 'Hajdú-Bihar', operator: 'MVM', available: true, color: '#fecaca' },
  };

  const handleCountyHover = (county: CountyType, event: React.MouseEvent) => {
    setActiveCounty(county);
    const rect = (event.currentTarget as SVGPathElement).getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  return (
    <section 
      id="where-we-work" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Where We Work</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Certified to operate across all of Hungary. Hover over any county to see details.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl">
              <svg 
                viewBox="0 0 400 500" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Map paths for each county - simplified Hungarian county boundaries */}
                
                {/* Budapest */}
                <path
                  d="M 190 200 L 200 200 L 200 210 L 190 210 Z"
                  fill={counties.budapest.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('budapest', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Pest */}
                <path
                  d="M 185 195 L 210 195 L 210 225 L 185 225 Z"
                  fill={counties.pest.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('pest', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Fejér */}
                <path
                  d="M 180 230 L 210 230 L 210 260 L 180 260 Z"
                  fill={counties.fejér.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('fejér', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Komárom-Esztergom */}
                <path
                  d="M 160 180 L 190 180 L 190 210 L 160 210 Z"
                  fill={counties['komárom-esztergom'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('komárom-esztergom', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Győr-Moson-Sopron */}
                <path
                  d="M 140 150 L 170 150 L 170 185 L 140 185 Z"
                  fill={counties['győr-moson-sopron'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('győr-moson-sopron', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Vas */}
                <path
                  d="M 120 160 L 145 160 L 145 195 L 120 195 Z"
                  fill={counties.vas.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('vas', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Veszprém */}
                <path
                  d="M 160 210 L 190 210 L 190 245 L 160 245 Z"
                  fill={counties.veszprém.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('veszprém', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Somogy */}
                <path
                  d="M 150 260 L 185 260 L 185 300 L 150 300 Z"
                  fill={counties.somogy.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('somogy', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Tolna */}
                <path
                  d="M 190 265 L 220 265 L 220 300 L 190 300 Z"
                  fill={counties.tolna.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('tolna', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Baranya */}
                <path
                  d="M 190 305 L 225 305 L 225 345 L 190 345 Z"
                  fill={counties.baranya.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('baranya', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Bács-Kiskun */}
                <path
                  d="M 210 300 L 260 300 L 260 350 L 210 350 Z"
                  fill={counties['bács-kiskun'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('bács-kiskun', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Csongrád-Csanád */}
                <path
                  d="M 265 330 L 300 330 L 300 370 L 265 370 Z"
                  fill={counties['csongrád-csanád'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('csongrád-csanád', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Békés */}
                <path
                  d="M 260 270 L 300 270 L 300 320 L 260 320 Z"
                  fill={counties.békés.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('békés', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Jász-Nagykun-Szolnok */}
                <path
                  d="M 225 245 L 265 245 L 265 290 L 225 290 Z"
                  fill={counties['jász-nagykun-szolnok'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('jász-nagykun-szolnok', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Heves */}
                <path
                  d="M 215 210 L 250 210 L 250 250 L 215 250 Z"
                  fill={counties.heves.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('heves', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Nógrád */}
                <path
                  d="M 215 170 L 245 170 L 245 210 L 215 210 Z"
                  fill={counties.nógrád.color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('nógrád', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Borsod-Abaúj-Zemplén */}
                <path
                  d="M 250 165 L 295 165 L 295 220 L 250 220 Z"
                  fill={counties['borsod-abaúj-zemplén'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('borsod-abaúj-zemplén', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Szabolcs-Szatmár-Bereg */}
                <path
                  d="M 280 120 L 330 120 L 330 175 L 280 175 Z"
                  fill={counties['szabolcs-szatmár-bereg'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('szabolcs-szatmár-bereg', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />

                {/* Hajdú-Bihar */}
                <path
                  d="M 270 200 L 310 200 L 310 250 L 270 250 Z"
                  fill={counties['hajdú-bihar'].color}
                  stroke="#333"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => handleCountyHover('hajdú-bihar', e)}
                  onMouseLeave={() => setActiveCounty(null)}
                />
              </svg>
            </div>

            {/* Info Card */}
            {activeCounty && activeCounty in counties && (
              <div className="mt-8 bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-600 rounded-xl p-6 max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {counties[activeCounty].name}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Electrical Operator</p>
                    <p className="text-lg text-gray-900">{counties[activeCounty].operator}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Service Available</p>
                    <p className="text-lg font-bold text-accent-600">Yes, we serve this area</p>
                  </div>
                </div>
              </div>
            )}

            {!activeCounty && (
              <div className="mt-8 text-center text-gray-600">
                <p className="text-lg font-semibold">Hover over any county to see details</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Below Map */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            One Contractor, Complete Coverage
          </h3>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Unlike most solar companies, we hold certifications to work across all regional electrical systems in Hungary. This means we have the authority to operate in EON, MVM, ELMŰ, and EDKE territories without needing additional contractors.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">No Delays</h4>
                <p className="text-sm text-gray-600">
                  We handle every step of the process. No coordination with multiple contractors means faster completion.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Lower Costs</h4>
                <p className="text-sm text-gray-600">
                  You don't pay for another company's operational costs, staff, or owner's profit margin.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Full Responsibility</h4>
                <p className="text-sm text-gray-600">
                  One team, one guarantee. No passing the buck between contractors when issues arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

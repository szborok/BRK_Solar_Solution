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
}

export default function WhereWeWork() {
  const [activeCounty, setActiveCounty] = useState<CountyType>(null);

  const counties: Record<Exclude<CountyType, null>, County> = {
    'budapest': { name: 'Budapest', operator: 'ELMŰ', available: true },
    'pest': { name: 'Pest', operator: 'ELMŰ/EDKE', available: true },
    'fejér': { name: 'Fejér', operator: 'ELMŰ', available: true },
    'komárom-esztergom': { name: 'Komárom-Esztergom', operator: 'EON', available: true },
    'győr-moson-sopron': { name: 'Győr-Moson-Sopron', operator: 'EON', available: true },
    'vas': { name: 'Vas', operator: 'EON', available: true },
    'veszprém': { name: 'Veszprém', operator: 'ELMŰ', available: true },
    'somogy': { name: 'Somogy', operator: 'ELMŰ', available: true },
    'tolna': { name: 'Tolna', operator: 'ELMŰ', available: true },
    'baranya': { name: 'Baranya', operator: 'EON', available: true },
    'bács-kiskun': { name: 'Bács-Kiskun', operator: 'MVM', available: true },
    'csongrád-csanád': { name: 'Csongrád-Csanád', operator: 'MVM', available: true },
    'békés': { name: 'Békés', operator: 'MVM', available: true },
    'jász-nagykun-szolnok': { name: 'Jász-Nagykun-Szolnok', operator: 'MVM', available: true },
    'heves': { name: 'Heves', operator: 'MVM', available: true },
    'nógrád': { name: 'Nógrád', operator: 'MVM', available: true },
    'borsod-abaúj-zemplén': { name: 'Borsod-Abaúj-Zemplén', operator: 'MVM', available: true },
    'szabolcs-szatmár-bereg': { name: 'Szabolcs-Szatmár-Bereg', operator: 'MVM', available: true },
    'hajdú-bihar': { name: 'Hajdú-Bihar', operator: 'MVM', available: true },
  };

  const countyCoords: Record<Exclude<CountyType, null>, { x: number; y: number; radius: number }> = {
    'budapest': { x: 50, y: 42, radius: 2.5 },
    'pest': { x: 52, y: 45, radius: 4 },
    'fejér': { x: 48, y: 50, radius: 3.5 },
    'komárom-esztergom': { x: 42, y: 38, radius: 3 },
    'győr-moson-sopron': { x: 35, y: 32, radius: 4 },
    'vas': { x: 30, y: 38, radius: 3.5 },
    'veszprém': { x: 42, y: 45, radius: 3 },
    'somogy': { x: 40, y: 58, radius: 4 },
    'tolna': { x: 48, y: 56, radius: 2.5 },
    'baranya': { x: 48, y: 65, radius: 3.5 },
    'bács-kiskun': { x: 55, y: 62, radius: 5 },
    'csongrád-csanád': { x: 62, y: 68, radius: 3 },
    'békés': { x: 65, y: 58, radius: 3.5 },
    'jász-nagykun-szolnok': { x: 58, y: 52, radius: 4 },
    'heves': { x: 54, y: 45, radius: 3 },
    'nógrád': { x: 50, y: 36, radius: 2.5 },
    'borsod-abaúj-zemplén': { x: 62, y: 40, radius: 4 },
    'szabolcs-szatmár-bereg': { x: 70, y: 32, radius: 5 },
    'hajdú-bihar': { x: 67, y: 48, radius: 4 },
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
            Licensed to serve all of Hungary. Click any county to see details.
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="flex flex-col items-center">
            {/* SVG Map Container */}
            <div className="w-full max-w-3xl">
              <svg 
                viewBox="0 0 800 600" 
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hungary County Boundaries - SVG Paths */}
                
                {/* Győr-Moson-Sopron */}
                <path
                  d="M 150 80 L 220 85 L 230 140 L 180 155 L 140 140 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'győr-moson-sopron' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('győr-moson-sopron')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Vas */}
                <path
                  d="M 100 100 L 150 80 L 140 140 L 90 160 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'vas' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('vas')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Komárom-Esztergom */}
                <path
                  d="M 180 155 L 230 140 L 260 200 L 210 210 L 170 185 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'komárom-esztergom' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('komárom-esztergom')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Veszprém */}
                <path
                  d="M 210 210 L 260 200 L 300 280 L 250 300 L 200 250 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'veszprém' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('veszprém')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Fejér */}
                <path
                  d="M 260 200 L 320 210 L 350 280 L 300 280 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'fejér' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('fejér')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Pest */}
                <path
                  d="M 320 210 L 380 200 L 400 300 L 350 280 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'pest' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('pest')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Budapest */}
                <circle
                  cx="360"
                  cy="260"
                  r="25"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'budapest' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('budapest')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Somogy */}
                <path
                  d="M 200 250 L 250 300 L 280 380 L 200 390 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'somogy' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('somogy')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Tolna */}
                <path
                  d="M 250 300 L 300 280 L 350 370 L 280 380 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'tolna' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('tolna')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Baranya */}
                <path
                  d="M 280 380 L 350 370 L 380 450 L 300 460 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'baranya' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('baranya')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Somogy extends to Bács-Kiskun */}
                {/* Bács-Kiskun */}
                <path
                  d="M 200 390 L 280 380 L 350 370 L 420 420 L 380 480 L 250 500 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'bács-kiskun' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('bács-kiskun')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Csongrád-Csanád */}
                <path
                  d="M 420 420 L 500 400 L 550 480 L 480 520 L 380 480 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'csongrád-csanád' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('csongrád-csanád')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Békés */}
                <path
                  d="M 450 300 L 520 310 L 550 380 L 500 400 L 420 350 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'békés' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('békés')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Jász-Nagykun-Szolnok */}
                <path
                  d="M 400 300 L 450 300 L 420 350 L 380 340 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'jász-nagykun-szolnok' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('jász-nagykun-szolnok')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Heves */}
                <path
                  d="M 380 200 L 450 210 L 450 300 L 400 300 L 380 270 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'heves' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('heves')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Nógrád */}
                <path
                  d="M 350 160 L 380 200 L 380 270 L 350 250 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'nógrád' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('nógrád')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Borsod-Abaúj-Zemplén */}
                <path
                  d="M 450 210 L 520 200 L 560 280 L 520 310 L 450 300 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'borsod-abaúj-zemplén' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('borsod-abaúj-zemplén')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Hajdú-Bihar */}
                <path
                  d="M 520 200 L 600 190 L 620 300 L 560 280 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'hajdú-bihar' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('hajdú-bihar')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* Szabolcs-Szatmár-Bereg */}
                <path
                  d="M 520 200 L 630 120 L 680 200 L 620 300 L 560 280 Z"
                  fill="#f0f0f0"
                  stroke="#333"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all ${activeCounty === 'szabolcs-szatmár-bereg' ? 'fill-accent-300' : 'hover:fill-orange-100'}`}
                  onMouseEnter={() => setActiveCounty('szabolcs-szatmár-bereg')}
                  onMouseLeave={() => setActiveCounty(null)}
                />
                
                {/* County Labels */}
                <text x="180" y="120" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">GMS</text>
                <text x="120" y="130" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Vas</text>
                <text x="220" y="180" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">K-E</text>
                <text x="260" y="250" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Vez</text>
                <text x="310" y="240" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Fejér</text>
                <text x="360" y="240" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Pest</text>
                <text x="360" y="260" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#ea580c" className="pointer-events-none">Bp</text>
                <text x="240" y="330" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Somogy</text>
                <text x="300" y="330" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Tolna</text>
                <text x="340" y="410" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Baranya</text>
                <text x="320" y="450" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Bács-K</text>
                <text x="480" y="460" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Csong-Cs</text>
                <text x="500" y="340" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Békés</text>
                <text x="420" y="320" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">JNSZ</text>
                <text x="420" y="240" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Heves</text>
                <text x="360" y="210" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">Nógrád</text>
                <text x="500" y="260" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">BAZ</text>
                <text x="580" y="250" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">H-B</text>
                <text x="600" y="200" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">SZSZ</text>
              </svg>
            </div>

            {/* Info Card */}
            {activeCounty && activeCounty in counties && (
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-600 rounded-xl p-6 max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {counties[activeCounty].name}
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold">Network Operator</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{counties[activeCounty].operator}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold">Service Status</p>
                    <p className="text-xl font-bold text-accent-600 mt-1">We Serve This Area</p>
                  </div>
                </div>
              </div>
            )}

            {!activeCounty && (
              <div className="text-center text-gray-600 mt-4">
                <p className="text-lg font-semibold">Hover over any county to see service details</p>
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
              We are certified to work across all major electrical distribution networks in Hungary. This means we have operational authority in all regions, whether served by EON, MVM, ELMŰ, or EDKE. There's no need for multiple contractors or coordination with different service providers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">No Delays</h4>
                <p className="text-gray-600 leading-relaxed">
                  We manage the entire project from start to finish. No waiting for other contractors means faster completion and faster ROI.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Lower Costs</h4>
                <p className="text-gray-600 leading-relaxed">
                  You don't finance another company's operational overhead, staff, or profit margins. Direct savings get passed to you.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Full Responsibility</h4>
                <p className="text-gray-600 leading-relaxed">
                  One team, one accountability. No disputes between contractors means better quality and faster problem resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

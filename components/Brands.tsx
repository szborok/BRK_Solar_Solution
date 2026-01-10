'use client';

export default function Brands() {
  const brands = [
    {
      name: 'SunPower',
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <text x="10" y="28" fill="currentColor" className="font-bold text-2xl">SunPower</text>
        </svg>
      )
    },
    {
      name: 'Tesla',
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <path d="M10 20 L20 10 L30 20 L20 15 Z" fill="currentColor"/>
          <text x="35" y="28" fill="currentColor" className="font-bold text-2xl">TESLA</text>
        </svg>
      )
    },
    {
      name: 'LG',
      logo: (
        <svg viewBox="0 0 80 40" className="h-8 w-auto">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
          <text x="10" y="27" fill="currentColor" className="font-bold text-3xl">LG</text>
        </svg>
      )
    },
    {
      name: 'Panasonic',
      logo: (
        <svg viewBox="0 0 140 40" className="h-8 w-auto">
          <text x="10" y="28" fill="currentColor" className="font-semibold text-2xl">Panasonic</text>
        </svg>
      )
    },
    {
      name: 'Enphase',
      logo: (
        <svg viewBox="0 0 120 40" className="h-8 w-auto">
          <rect x="10" y="12" width="20" height="16" fill="currentColor" rx="2"/>
          <text x="35" y="28" fill="currentColor" className="font-bold text-xl">ENPHASE</text>
        </svg>
      )
    },
    {
      name: 'SolarEdge',
      logo: (
        <svg viewBox="0 0 130 40" className="h-8 w-auto">
          <polygon points="15,10 25,10 20,20 30,20 15,30 18,20 10,20" fill="currentColor"/>
          <text x="35" y="28" fill="currentColor" className="font-semibold text-xl">SolarEdge</text>
        </svg>
      )
    },
    {
      name: 'Q CELLS',
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 w-auto">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
          <text x="18" y="27" fill="currentColor" className="font-bold text-2xl">Q</text>
          <text x="40" y="28" fill="currentColor" className="font-semibold text-xl">CELLS</text>
        </svg>
      )
    },
    {
      name: 'Canadian Solar',
      logo: (
        <svg viewBox="0 0 150 40" className="h-8 w-auto">
          <path d="M15 10 L25 10 L20 20 L25 30 L15 30 L20 20 Z" fill="currentColor"/>
          <text x="30" y="28" fill="currentColor" className="font-semibold text-lg">Canadian Solar</text>
        </svg>
      )
    },
    {
      name: 'Fronius',
      logo: (
        <svg viewBox="0 0 110 40" className="h-8 w-auto">
          <rect x="10" y="15" width="15" height="10" fill="currentColor"/>
          <text x="30" y="28" fill="currentColor" className="font-bold text-xl">FRONIUS</text>
        </svg>
      )
    },
    {
      name: 'Huawei',
      logo: (
        <svg viewBox="0 0 110 40" className="h-8 w-auto">
          <path d="M12 20 Q20 10 28 20 Q20 30 12 20" fill="currentColor"/>
          <text x="35" y="28" fill="currentColor" className="font-semibold text-xl">HUAWEI</text>
        </svg>
      )
    },
  ];

  return (
    <section className="h-[140px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-y border-gray-600 flex items-center overflow-hidden relative z-10">
      {/* Subtle dark accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-600/20 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-500/20 rounded-full blur-3xl" />
      
      <div className="w-full px-8 md:px-16 relative z-10">
        <div className="flex items-center justify-between w-full gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 flex-1"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

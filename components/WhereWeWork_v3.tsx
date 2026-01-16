'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

declare global {
  interface Window {
    simplemaps_countrymap?: {
      load: () => void;
      map?: {
        svg?: SVGElement;
      };
    };
  }
}

export default function WhereWeWork() {
  useEffect(() => {
    // Load the mapdata first
    const script1 = document.createElement('script');
    script1.src = '/maps/mapdata.js';
    script1.type = 'text/javascript';
    
    script1.onload = () => {
      // Only load countrymap after mapdata is fully loaded
      const script2 = document.createElement('script');
      script2.src = '/maps/countrymap.js';
      script2.type = 'text/javascript';
      
      script2.onload = () => {
        // Wait for map to render, then initialize
        setTimeout(() => {
          try {
            if (window.simplemaps_countrymap) {
              window.simplemaps_countrymap.load();
              
              const mapElement = document.getElementById('map');
              if (!mapElement) {
                console.error('Map element not found');
                return;
              }
              
              // Add comprehensive CSS styling
              const style = document.createElement('style');
              style.textContent = `
                #map {
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  touch-action: none;
                  overflow: hidden !important;
                }
                
                #map svg {
                  cursor: default !important;
                  transform: none !important;
                }
                
                #map rect[fill="white"] {
                  fill: transparent !important;
                }
                
                /* Hide zoom and reset buttons */
                #map button,
                #map input[type="button"],
                .simplemaps_mapbutton,
                .simplemaps_back_button {
                  display: none !important;
                }
              `;
              document.head.appendChild(style);
              
              // Remove any buttons that might be added
              const removeButtons = () => {
                const buttons = mapElement.querySelectorAll<HTMLElement>('button, input[type="button"]');
                buttons.forEach(btn => {
                  btn.style.display = 'none';
                });
              };
              removeButtons();
              setInterval(removeButtons, 500);
              
              // Block only clicks and zooming - allow mousemove for hover
              const blockClickAndZoom = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
              };
              
              // Block clicks on the map itself
              mapElement.addEventListener('click', blockClickAndZoom, true);
              mapElement.addEventListener('dblclick', blockClickAndZoom, true);
              
              // Block zoom with wheel
              mapElement.addEventListener('wheel', blockClickAndZoom, { capture: true, passive: false });
              mapElement.addEventListener('mousewheel', blockClickAndZoom, { capture: true, passive: false });
              
              // Block touch interactions
              mapElement.addEventListener('touchstart', blockClickAndZoom, { capture: true, passive: false });
              mapElement.addEventListener('touchmove', blockClickAndZoom, { capture: true, passive: false });
              mapElement.addEventListener('touchend', blockClickAndZoom, { capture: true, passive: false });
              
              // Block drag by preventing SVG element selection and transforms
              mapElement.addEventListener('mousedown', (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
              }, true);
              
              console.log('Map initialized with interaction blocking');
            } else {
              console.error('simplemaps_countrymap not loaded');
            }
          } catch (error) {
            console.error('Error initializing map:', error);
          }
        }, 1500);
      };
      
      document.head.appendChild(script2);
    };
    
    document.head.appendChild(script1);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="/maps/"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24" id="where-we-work">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url(/where_we_work_bg/pexels-darshan394-1123972.jpg)',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Where We Work
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            BRK Electrical Solution serves all of Hungary through our partnerships with major national electricity distributors. We work with EON, MVM, ELMŰ, and EDKE to provide comprehensive electrical solutions nationwide.
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl mb-12 border border-white/20">
          <div className="flex flex-col items-center">
            {/* HTML5 Country Map Container */}
            <div id="map" className="w-full" style={{ minHeight: '600px', backgroundColor: 'transparent' }}></div>

            {/* Map Legend */}
            <div className="mt-8 w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Network Partners</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900">EON</h4>
                  <p className="text-sm text-gray-700">Western Regions</p>
                  <p className="text-xs text-gray-600 mt-1">Győr-Moson-Sopron, Vas, Komárom-Esztergom, Baranya</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900">MVM</h4>
                  <p className="text-sm text-gray-700">Central & Eastern</p>
                  <p className="text-xs text-gray-600 mt-1">Bács-Kiskun, Csongrád-Csanád, Békés, Jász-Nagykun-Szolnok, Heves, Nógrád, Borsod-Abaúj-Zemplén, Szabolcs-Szatmár-Bereg, Hajdú-Bihar</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900">ELMŰ</h4>
                  <p className="text-sm text-gray-700">Budapest & Central</p>
                  <p className="text-xs text-gray-600 mt-1">Budapest, Pest, Fejér, Veszprém, Somogy, Tolna</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-900">EDKE</h4>
                  <p className="text-sm text-gray-700">Pest Region</p>
                  <p className="text-xs text-gray-600 mt-1">Co-operator in Pest County with ELMŰ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <Link
            href={`/${(useParams().locale as string)}/where-we-work`}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-orange-500/20 backdrop-blur-sm border-2 border-orange-500/50 text-orange-600 rounded-full text-lg font-bold shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 via-orange-500/50 to-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            <span className="relative flex items-center gap-3 group-hover:text-orange-700">
              Explore Our Service Areas
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

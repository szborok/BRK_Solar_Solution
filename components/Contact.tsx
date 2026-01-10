'use client';

import { useState } from 'react';

type FormType = 'contact' | 'quote';

export default function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>('contact');
  
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [quoteData, setQuoteData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: '',
    roofType: '',
    roofArea: '',
    energyBill: '',
    installationType: '',
    timeframe: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setContactData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setQuoteData({
        name: '', phone: '', email: '', address: '', propertyType: '',
        roofType: '', roofArea: '', energyBill: '', installationType: '',
        timeframe: '', message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Tree Background - Upper Portion (Trunk & Canopy) - behind sun */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=80)',
            backgroundPosition: 'center top',
          }}
        />
        {/* Gradient Overlay - start completely white and fade to show tree */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 via-gray-100/70 via-gray-300/60 via-dark-700/80 to-dark-800/90" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-800">
            Get in touch or request a detailed solar installation quote
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/20 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30">
            <button
              onClick={() => setActiveForm('contact')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === 'contact'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Quick Contact
            </button>
            <button
              onClick={() => setActiveForm('quote')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === 'quote'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="max-w-5xl mx-auto">
          {activeForm === 'contact' ? (
            // Simple Contact Form
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl min-h-[1200px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                      placeholder="+36 XX XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all resize-none flex-1"
                    placeholder="How can we help you?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>

              {/* Button and Contact Info Outside Form */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                onClick={(e) => {
                  const form = (e.currentTarget.closest('.bg-white\\/95') as HTMLElement)?.querySelector('form') as HTMLFormElement;
                  if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Contact Info Below Form */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+3612892599" className="text-accent-600 hover:text-accent-700">
                        +36 1 289-2599
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@brksolar.hu" className="text-accent-600 hover:text-accent-700">
                        info@brksolar.hu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600">Budapest, Hungary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Detailed Quote Form
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl min-h-[1200px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Request Detailed Quote</h3>
              <form onSubmit={handleQuoteSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1">
                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent-600">Personal Information</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="quote-name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="name"
                        value={quoteData.name}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="block text-sm font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        value={quoteData.phone}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder="+36 XX XXX-XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent-600">Property Information</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="quote-address" className="block text-sm font-semibold mb-2">
                        Installation Address *
                      </label>
                      <input
                        type="text"
                        id="quote-address"
                        name="address"
                        value={quoteData.address}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder="Full address"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-propertyType" className="block text-sm font-semibold mb-2">
                        Property Type *
                      </label>
                      <select
                        id="quote-propertyType"
                        name="propertyType"
                        value={quoteData.propertyType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">Select type...</option>
                        <option value="residential">Residential House</option>
                        <option value="apartment">Apartment Building</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="industrial">Industrial Facility</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-roofType" className="block text-sm font-semibold mb-2">
                        Roof Type *
                      </label>
                      <select
                        id="quote-roofType"
                        name="roofType"
                        value={quoteData.roofType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">Select type...</option>
                        <option value="flat">Flat Roof</option>
                        <option value="pitched">Pitched Roof</option>
                        <option value="tile">Tile Roof</option>
                        <option value="metal">Metal Roof</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-roofArea" className="block text-sm font-semibold mb-2">
                        Approximate Roof Area (m²)
                      </label>
                      <input
                        type="number"
                        id="quote-roofArea"
                        name="roofArea"
                        value={quoteData.roofArea}
                        onChange={handleQuoteChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder="e.g., 100"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-energyBill" className="block text-sm font-semibold mb-2">
                        Monthly Energy Bill *
                      </label>
                      <select
                        id="quote-energyBill"
                        name="energyBill"
                        value={quoteData.energyBill}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">Select range...</option>
                        <option value="0-50">€0 - €50</option>
                        <option value="50-100">€50 - €100</option>
                        <option value="100-200">€100 - €200</option>
                        <option value="200-300">€200 - €300</option>
                        <option value="300+">€300+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Installation Details */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent-600">Installation Preferences</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-installationType" className="block text-sm font-semibold mb-2">
                        Installation Type *
                      </label>
                      <select
                        id="quote-installationType"
                        name="installationType"
                        value={quoteData.installationType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">Select type...</option>
                        <option value="solar-only">Solar Panels Only</option>
                        <option value="solar-battery">Solar + Battery Storage</option>
                        <option value="solar-ev">Solar + EV Charger</option>
                        <option value="complete">Complete System (Solar + Battery + EV)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-timeframe" className="block text-sm font-semibold mb-2">
                        Preferred Timeframe *
                      </label>
                      <select
                        id="quote-timeframe"
                        name="timeframe"
                        value={quoteData.timeframe}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">Select timeframe...</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6+months">6+ months</option>
                        <option value="just-exploring">Just exploring options</option>
                      </select>
                    </div>
                  </div>
                </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="quote-message" className="block text-sm font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    value={quoteData.message}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent resize-none flex-1"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll prepare your quote and contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>

              {/* Button and Contact Info Outside Form */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                onClick={(e) => {
                  const form = (e.currentTarget.closest('.bg-white\\/95') as HTMLElement)?.querySelector('form') as HTMLFormElement;
                  if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
              </button>

              {/* Contact Info Below Form */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+3612892599" className="text-accent-600 hover:text-accent-700">
                        +36 1 289-2599
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@brksolar.hu" className="text-accent-600 hover:text-accent-700">
                        info@brksolar.hu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600">Budapest, Hungary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

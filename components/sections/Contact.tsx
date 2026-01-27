'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type FormType = 'contact' | 'quote';

export default function Contact() {
  const t = useTranslations('contact');
  const [activeForm, setActiveForm] = useState<FormType>('quote');
  
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [quoteData, setQuoteData] = useState({
    firstName: '',
    surname: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    propertyType: '',
    roofType: '',
    orientation: '',
    phases: '',
    energyBill: '',
    installationType: [] as string[],
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
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setQuoteData((prev) => {
        if (name === 'installationType') {
          const currentArray = prev[name] as string[];
          return {
            ...prev,
            [name]: checked
              ? [...currentArray, value]
              : currentArray.filter((item) => item !== value),
          };
        }
        return prev;
      });
    } else {
      setQuoteData((prev) => ({ ...prev, [name]: value }));
    }
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
        firstName: '',
        surname: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        propertyType: '',
        roofType: '',
        orientation: '',
        phases: '',
        energyBill: '',
        installationType: [],
        timeframe: '',
        message: '',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2)' }}>{t('title')}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 sm:mb-12 text-gray-800" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.2)' }}>
            {t('description')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/20 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30">
            <button
              onClick={() => setActiveForm('quote')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === 'quote'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('requestQuoteButton')}
            </button>
            <button
              onClick={() => setActiveForm('contact')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeForm === 'contact'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {t('quickContactButton')}
            </button>
          </div>
        </div>

        {/* Forms Container */}
        <div className="max-w-5xl mx-auto">
          {activeForm === 'contact' ? (
            // Simple Contact Form
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl min-h-[1200px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6">{t('sendMessage')}</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">
                      {t('nameLabel')} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">
                      {t('phoneLabel')} *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                      placeholder={t('phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">
                    {t('emailLabel')} *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">
                    {t('messageLabel')} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all resize-none flex-1"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {t('successMessage')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {t('errorMessage')}
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
                {isSubmitting ? t('sendingButton') : t('sendMessageButton')}
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
                      <p className="font-semibold text-gray-900">{t('phoneTitle')}</p>
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
                      <p className="font-semibold text-gray-900">{t('officeTitle')}</p>
                      <p className="text-gray-600">{t('officeLocation')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Detailed Quote Form
            <div className="bg-white/95 backdrop-blur-sm text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl min-h-[1200px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('requestDetailedQuote')}</h3>
              <form onSubmit={handleQuoteSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="flex-1">
                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold mt-6 mb-0 text-accent-600">{t('personalInformation')}</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quote-firstName" className="block text-sm font-semibold mb-2">
                        {t('firstNameLabel')} *
                      </label>
                      <input
                        type="text"
                        id="quote-firstName"
                        name="firstName"
                        value={quoteData.firstName || ''}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('firstNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-surname" className="block text-sm font-semibold mb-2">
                        {t('surnameLabel')} *
                      </label>
                      <input
                        type="text"
                        id="quote-surname"
                        name="surname"
                        value={quoteData.surname || ''}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('surnamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="block text-sm font-semibold mb-2">
                        {t('phoneLabel')} *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        value={quoteData.phone}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-sm font-semibold mb-2">
                        {t('emailLabel')} *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        value={quoteData.email}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <h4 className="text-lg font-semibold mt-6 mb-0 text-accent-600">{t('propertyInformation')}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-city" className="block text-sm font-semibold mb-2">
                        {t('cityLabel')} *
                      </label>
                      <input
                        type="text"
                        id="quote-city"
                        name="city"
                        value={quoteData.city || ''}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('cityPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-address" className="block text-sm font-semibold mb-2">
                        {t('installationAddress')} *
                      </label>
                      <input
                        type="text"
                        id="quote-address"
                        name="address"
                        value={quoteData.address}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                        placeholder={t('installationAddressPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-propertyType" className="block text-sm font-semibold mb-2">
                        {t('propertyTypeLabel')} *
                      </label>
                      <select
                        id="quote-propertyType"
                        name="propertyType"
                        value={quoteData.propertyType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('selectTypeOption')}</option>
                        <option value="residential">{t('residentialHouse')}</option>
                        <option value="apartment">{t('apartmentBuilding')}</option>
                        <option value="commercial">{t('commercialBuilding')}</option>
                        <option value="industrial">{t('industrialFacility')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-roofType" className="block text-sm font-semibold mb-2">
                        {t('roofTypeLabel')} *
                      </label>
                      <select
                        id="quote-roofType"
                        name="roofType"
                        value={quoteData.roofType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('selectTypeOption')}</option>
                        <option value="flat">{t('flatRoof')}</option>
                        <option value="pitched">{t('pitchedRoof')}</option>
                        <option value="tile">{t('tileRoof')}</option>
                        <option value="metal">{t('metalRoof')}</option>
                        <option value="other">{t('otherRoof')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-orientation" className="block text-sm font-semibold mb-2">
                        {t('orientationLabel')}
                      </label>
                      <select
                        id="quote-orientation"
                        name="orientation"
                        value={quoteData.orientation || ''}
                        onChange={handleQuoteChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('orientationPlaceholder')}</option>
                        <option value="north">{t('north')}</option>
                        <option value="northeast">{t('northeast')}</option>
                        <option value="east">{t('east')}</option>
                        <option value="southeast">{t('southeast')}</option>
                        <option value="south">{t('south')}</option>
                        <option value="southwest">{t('southwest')}</option>
                        <option value="west">{t('west')}</option>
                        <option value="northwest">{t('northwest')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-phases" className="block text-sm font-semibold mb-2">
                        {t('phasesLabel')}
                      </label>
                      <select
                        id="quote-phases"
                        name="phases"
                        value={quoteData.phases || ''}
                        onChange={handleQuoteChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('selectPhases')}</option>
                        <option value="single">{t('singlePhase')}</option>
                        <option value="three">{t('threePhase')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quote-energyBill" className="block text-sm font-semibold mb-2">
                        {t('energyBillLabel')} *
                      </label>
                      <select
                        id="quote-energyBill"
                        name="energyBill"
                        value={quoteData.energyBill}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('selectRangeOption')}</option>
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
                <div className="mb-0">
                  <h4 className="text-lg font-semibold mt-6 mb-0 text-accent-600">{t('installationPreferences')}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Installation Type Checkboxes */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        {t('installationTypeLabel')} *
                      </label>
                      <div className="space-y-2">
                        {[
                          { value: 'solar-only', label: t('solarOnly') },
                          { value: 'solar-battery', label: t('solarBattery') },
                          { value: 'solar-ev', label: t('solarEV') },
                          { value: 'complete', label: t('completeSystem') },
                        ].map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`installationType-${option.value}`}
                              name="installationType"
                              value={option.value}
                              checked={quoteData.installationType.includes(option.value)}
                              onChange={handleQuoteChange}
                              className="w-4 h-4 text-accent-600 rounded focus:ring-2 focus:ring-accent-600"
                            />
                            <label htmlFor={`installationType-${option.value}`} className="ml-2 text-sm cursor-pointer">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeframe Dropdown */}
                    <div>
                      <label htmlFor="quote-timeframe" className="block text-sm font-semibold mb-3">
                        {t('timeframeLabel')} *
                      </label>
                      <select
                        id="quote-timeframe"
                        name="timeframe"
                        value={quoteData.timeframe}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent"
                      >
                        <option value="">{t('selectTimeframe')}</option>
                        <option value="asap">{t('asap')}</option>
                        <option value="1-3months">{t('next3Months')}</option>
                        <option value="3-6months">{t('next6Months')}</option>
                        <option value="6+months">{t('flexible')}</option>
                        <option value="just-exploring">{t('justExploring')}</option>
                      </select>
                    </div>
                  </div>
                </div>
                </div>

                <div className="flex-1 flex flex-col mt-2">
                  <label htmlFor="quote-message" className="block text-sm font-semibold mb-2">
                    {t('additionalInfo')}
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    value={quoteData.message}
                    onChange={handleQuoteChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent resize-none flex-1"
                    placeholder={t('additionalInfoPlaceholder')}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {t('successMessage')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {t('errorMessage')}
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
                {isSubmitting ? t('submittingQuoteButton') : t('submitQuoteButton')}
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
                      <p className="font-semibold text-gray-900">{t('phoneTitle')}</p>
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
                      <p className="font-semibold text-gray-900">{t('officeTitle')}</p>
                      <p className="text-gray-600">{t('officeLocation')}</p>
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



import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002147] mb-8">{t.termsOfService.title}</h1>
        <p className="text-slate-600 leading-relaxed">{t.termsOfService.content}</p>
      </div>
    </div>
  );
};

export default TermsOfService;
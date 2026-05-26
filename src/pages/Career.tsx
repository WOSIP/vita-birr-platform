import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const CareerPage = () => {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#002147] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t.career.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">{t.career.heroDesc}</p>
          <Link to="/">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
              {t.career.exploreBtn} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">{t.career.summaryTitle}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.career.summaryDesc}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason1Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason1Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason2Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason2Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason3Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason3Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason4Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason4Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason5Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason5Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason6Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason6Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason7Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason7Desc}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.reason8Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.career.reason8Desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">{t.career.conclusionTitle}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.career.conclusionDesc}</p>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">{t.career.joinTitle}</h3>
            <Link to="/">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
                {t.career.registerBtn} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
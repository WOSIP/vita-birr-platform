import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Smartphone, QrCode } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const VitabirrETSwitch = () => {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#002147] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t.qrPage.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            {t.qrPage.heroDesc}
          </p>
          <Link to="/">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
              {t.qrPage.registerBtn} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">{t.qrPage.whatIsTitle}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {t.qrPage.whatIsDesc}
          </p>
          
          {/* Illustration 1: Mobile Payment / QR Scanning */}
          <div className="my-8 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl bg-slate-100">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779295716237_QR_Code_payment_1.jpg" 
                alt="Customer scanning QR code for payment" 
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {t.qrPage.bidirectionalDesc}
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#CE1126] w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-slate-700"><strong>{t.qrPage.merchantToCustomer.split(':')[0]}:</strong> {t.qrPage.merchantToCustomer.split(':')[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#CE1126] w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-slate-700"><strong>{t.qrPage.customerToCustomer.split(':')[0]}:</strong> {t.qrPage.customerToCustomer.split(':')[1]}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.keyCapabilitiesTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">{t.qrPage.capability}</th>
                  <th className="p-4 rounded-tr-lg">{t.qrPage.howItWorks}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.dynamicQrAmount}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.dynamicQrAmountDesc}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.oneTapConfirm}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.oneTapConfirmDesc}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.receiveAnyBank}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.receiveAnyBankDesc}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.payAnyBank}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.payAnyBankDesc}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.zeroFeesEndUser}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.zeroFeesEndUserDesc}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits for End Users */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.benefitsEndUserTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: t.qrPage.noAmountTyping, desc: t.qrPage.noAmountTypingDesc },
              { title: t.qrPage.receiveAnyone, desc: t.qrPage.receiveAnyoneDesc },
              { title: t.qrPage.sendAnyone, desc: t.qrPage.sendAnyoneDesc },
              { title: t.qrPage.biometricSecurity, desc: t.qrPage.biometricSecurityDesc },
              { title: t.qrPage.oneQrEverything, desc: t.qrPage.oneQrEverythingDesc },
              { title: t.qrPage.zeroFeesAlways, desc: t.qrPage.zeroFeesAlwaysDesc }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Merchants */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.benefitsMerchantTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: t.qrPage.fasterCheckout, desc: t.qrPage.fasterCheckoutDesc },
              { title: t.qrPage.noErrors, desc: t.qrPage.noErrorsDesc },
              { title: t.qrPage.acceptAnyBank, desc: t.qrPage.acceptAnyBankDesc },
              { title: t.qrPage.receiveInstantly, desc: t.qrPage.receiveInstantlyDesc },
              { title: t.qrPage.easiestCollection, desc: t.qrPage.easiestCollectionDesc }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-[#002147] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.howItWorksStepTitle}</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#CE1126] mb-4">{t.qrPage.scenarioA}</h3>
            <ol className="space-y-4 list-decimal list-inside text-slate-700">
              <li>{t.qrPage.scenarioA1}</li>
              <li>{t.qrPage.scenarioA2}</li>
              <li>{t.qrPage.scenarioA3}</li>
              <li>{t.qrPage.scenarioA4}</li>
              <li>{t.qrPage.scenarioA5}</li>
              <li>{t.qrPage.scenarioA6}</li>
            </ol>
            <p className="mt-4 font-semibold text-[#002147]">{t.qrPage.scenarioATime}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#CE1126] mb-4">{t.qrPage.scenarioB}</h3>
            <ol className="space-y-4 list-decimal list-inside text-slate-700">
              <li>{t.qrPage.scenarioB1}</li>
              <li>{t.qrPage.scenarioB2}</li>
              <li>{t.qrPage.scenarioB3}</li>
              <li>{t.qrPage.scenarioB4}</li>
              <li>{t.qrPage.scenarioB5}</li>
            </ol>
            <p className="mt-4 font-semibold text-[#002147]">{t.qrPage.scenarioBZeroFees}</p>
            <p className="mt-2 text-slate-600">{t.qrPage.scenarioBResult}</p>
          </div>
        </div>
      </section>

      {/* Dynamic QR vs Static QR */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.dynamicVsStaticTitle}</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">{t.qrPage.feature}</th>
                  <th className="p-4">{t.qrPage.staticQr}</th>
                  <th className="p-4 rounded-tr-lg">{t.qrPage.dynamicQr}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.amountPreset}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.amountPresetStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.amountPresetDynamic}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.typingRequired}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.typingRequiredStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.typingRequiredDynamic}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.errorRisk}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.errorRiskStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.errorRiskDynamic}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.speed}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.speedStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.speedDynamic}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.bestFor}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.bestForStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.bestForDynamic}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.receiveAnyBankQ}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.receiveAnyBankStatic}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.receiveAnyBankDynamic}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-700">
            <strong>{t.qrPage.supportsBoth}</strong><br />
            • {t.qrPage.dynamicQrFor}<br />
            • {t.qrPage.staticQrFor}
          </p>
        </div>
      </section>

      {/* Real-Life Examples */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.realLifeExamplesTitle}</h2>
          
          <div className="mb-10 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-xl font-bold text-[#002147] mb-3">{t.qrPage.example1Title}</h3>
            
            <p className="text-slate-600 mb-2">{t.qrPage.example1Desc}</p>
            <p className="text-slate-700"><strong>{t.qrPage.oldWay}</strong> {t.qrPage.oldWay1}</p>
            <p className="text-slate-700"><strong>{t.qrPage.vitabirrWay}</strong> {t.qrPage.vitabirrWay1}</p>
            <p className="mt-2 font-semibold text-[#002147]">{t.qrPage.example1Result}</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-xl font-bold text-[#002147] mb-3">{t.qrPage.example2Title}</h3>
            <p className="text-slate-600 mb-2">{t.qrPage.example2Desc}</p>
            <p className="text-slate-700"><strong>{t.qrPage.oldWay}</strong> {t.qrPage.oldWay2}</p>
            <p className="text-slate-700"><strong>{t.qrPage.vitabirrWay}</strong> {t.qrPage.vitabirrWay2}</p>
            <p className="mt-2 font-semibold text-[#002147]">{t.qrPage.example2Result}</p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.securityTitle}</h2>
          <p className="text-slate-600 mb-6">{t.qrPage.securityDesc}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">{t.qrPage.method}</th>
                  <th className="p-4">{t.qrPage.howItWorks}</th>
                  <th className="p-4 rounded-tr-lg">{t.qrPage.bestFor}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.pinMethod}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.pinMethodDesc}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.pinMethodBest}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.biometricMethod}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.biometricMethodDesc}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.biometricMethodBest}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600">{t.qrPage.securityCompliance}</p>
        </div>
      </section>

      {/* Summary Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-8">{t.qrPage.summaryComparisonTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002147] text-white">
                  <th className="p-4 rounded-tl-lg">{t.qrPage.feature}</th>
                  <th className="p-4">{t.qrPage.vitabirrEtswitch}</th>
                  <th className="p-4 rounded-tr-lg">{t.qrPage.otherMobileMoney}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.dynamicQrEmbedded}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.dynamicQrEmbeddedVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.dynamicQrEmbeddedOther}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.confirmFingerprint}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.confirmFingerprintVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.confirmFingerprintOther}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.receiveAnyBankApp}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.receiveAnyBankAppVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.receiveAnyBankAppOther}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.sendAnyBankUser}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.sendAnyBankUserVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.sendAnyBankUserOther}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.endUserFees}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.endUserFeesVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.endUserFeesOther}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.merchantSpeed}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.merchantSpeedVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.merchantSpeedOther}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#002147]">{t.qrPage.worksNoInternet}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.worksNoInternetVitabirr}</td>
                  <td className="p-4 text-slate-600">{t.qrPage.worksNoInternetOther}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Summary Box */}
      <section className="py-16 px-4 bg-[#002147] text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{t.qrPage.finalSummaryTitle}</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse bg-white/10">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="p-4">{t.qrPage.youWantTo}</th>
                  <th className="p-4">{t.qrPage.howVitabirrHelps}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">{t.qrPage.payMerchant}</td>
                  <td className="p-4">{t.qrPage.payMerchantDesc}</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">{t.qrPage.receiveMoney}</td>
                  <td className="p-4">{t.qrPage.receiveMoneyDesc}</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="p-4 font-semibold">{t.qrPage.sendMoney}</td>
                  <td className="p-4">{t.qrPage.sendMoneyDesc}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">{t.qrPage.getPaidInstantly}</td>
                  <td className="p-4">{t.qrPage.getPaidInstantlyDesc}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t.qrPage.callToAction}</h3>
            <p className="text-xl mb-6">{t.qrPage.ctaTitle}</p>
            <p className="text-lg mb-8 text-slate-300">{t.qrPage.ctaDesc}</p>
            <Link to="/">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
                {t.qrPage.registerBtn} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-slate-400">{t.qrPage.ctaFooter}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitabirrETSwitch;
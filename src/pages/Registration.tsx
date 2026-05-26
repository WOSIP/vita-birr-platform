import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, User, Building2, CheckCircle2, Upload, FileText, Phone, MapPin, Calendar, CreditCard, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const RegistrationPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'end-user' | 'merchant'>('end-user');
  const [merchantType, setMerchantType] = useState<'sole' | 'company'>('sole');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#002147] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t.registration.backToHome}
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#002147] mb-4">{t.registration.createAccountTitle}</h1>
          <p className="text-lg text-slate-600">{t.registration.createAccountDesc}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('end-user')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'end-user' ? 'bg-[#002147] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <User className="w-5 h-5" /> {t.registration.endUserTab}
            </button>
            <button
              onClick={() => setActiveTab('merchant')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'merchant' ? 'bg-[#002147] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-5 h-5" /> {t.registration.merchantTab}
            </button>
          </div>
        </div>

        {/* End User Form */}
        {activeTab === 'end-user' && (
          <Card className="border-none shadow-xl">
            <CardHeader className="bg-[#002147] text-white rounded-t-xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <User className="w-6 h-6" /> {t.registration.endUserRegTitle}
              </CardTitle>
              <CardDescription className="text-slate-300">{t.registration.endUserRegDesc}</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.fullName}</label>
                  <Input placeholder="e.g. Abebe Kassahun" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.dob}</label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.gender}</label>
                  <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]">
                    <option value="">{t.registration.selectGender}</option>
                    <option value="male">{t.registration.male}</option>
                    <option value="female">{t.registration.female}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.address}</label>
                  <Input placeholder="City, Sub-city, Woreda" required />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5" /> {t.registration.identification}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.idType}</label>
                    <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]">
                      <option value="fayda">{t.registration.faydaId}</option>
                      <option value="kebele">{t.registration.kebeleId}</option>
                      <option value="passport">{t.registration.passport}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.idNumber}</label>
                    <Input placeholder={t.registration.idNumber} required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.uploadIdPic}</label>
                    <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-600">{t.registration.idPicDesc}</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.uploadProfilePic}</label>
                    <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-600">{t.registration.profilePicDesc}</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> {t.registration.securityPin}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.createPin}</label>
                    <Input type="password" maxLength={6} placeholder="••••••" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">{t.registration.confirmPin}</label>
                    <Input type="password" maxLength={6} placeholder="••••••" required />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-[#CE1126] rounded focus:ring-[#CE1126]" required />
                <label htmlFor="terms" className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: t.registration.acceptTerms }} />
              </div>

              <Button className="w-full bg-[#CE1126] hover:bg-[#b00e20] text-white h-12 text-lg font-semibold">
                {t.registration.activateAccount}
              </Button>
              <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> {t.registration.accountActivated}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Merchant Form */}
        {activeTab === 'merchant' && (
          <Card className="border-none shadow-xl">
            <CardHeader className="bg-[#002147] text-white rounded-t-xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Building2 className="w-6 h-6" /> {t.registration.merchantRegTitle}
              </CardTitle>
              <CardDescription className="text-slate-300">{t.registration.merchantRegDesc}</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setMerchantType('sole')}
                  className={`flex-1 py-3 rounded-lg font-semibold border transition-all ${
                    merchantType === 'sole' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#002147]'
                  }`}
                >
                  {t.registration.soleProprietor}
                </button>
                <button
                  onClick={() => setMerchantType('company')}
                  className={`flex-1 py-3 rounded-lg font-semibold border transition-all ${
                    merchantType === 'company' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#002147]'
                  }`}
                >
                  {t.registration.company}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.businessLicense}</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">{t.registration.uploadLicense}</span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.tinCertificate}</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">{t.registration.uploadTin}</span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{merchantType === 'sole' ? t.registration.ownerId : t.registration.ownerId}</label>
                  <Input placeholder={t.registration.ownerIdPlaceholder} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{merchantType === 'sole' ? t.registration.phoneNumber : t.registration.companyPhone}</label>
                  <Input type="tel" placeholder={t.registration.phoneNumberPlaceholder} required />
                </div>
              </div>

              {merchantType === 'company' && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{t.registration.memorandum}</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">{t.registration.uploadDocuments}</span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input type="checkbox" id="vat" className="w-4 h-4 text-[#CE1126] rounded focus:ring-[#CE1126]" />
                <label htmlFor="vat" className="text-sm text-slate-700 font-medium">{t.registration.vatRegistered}</label>
              </div>

              <Button className="w-full bg-[#CE1126] hover:bg-[#b00e20] text-white h-12 text-lg font-semibold">
                {t.registration.activateMerchant}
              </Button>
              <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> {t.registration.merchantActivated}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
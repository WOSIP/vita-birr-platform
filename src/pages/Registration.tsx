import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, User, Building2, CheckCircle2, Upload, FileText, Phone, MapPin, Calendar, CreditCard, ShieldCheck } from 'lucide-react';

const RegistrationPage = () => {
  const [activeTab, setActiveTab] = useState<'end-user' | 'merchant'>('end-user');
  const [merchantType, setMerchantType] = useState<'sole' | 'company'>('sole');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#002147] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#002147] mb-4">Create Your Vitabirr Account</h1>
          <p className="text-lg text-slate-600">Choose your account type to get started with zero-fee payments.</p>
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
              <User className="w-5 h-5" /> End User
            </button>
            <button
              onClick={() => setActiveTab('merchant')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'merchant' ? 'bg-[#002147] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-5 h-5" /> Merchant
            </button>
          </div>
        </div>

        {/* End User Form */}
        {activeTab === 'end-user' && (
          <Card className="border-none shadow-xl">
            <CardHeader className="bg-[#002147] text-white rounded-t-xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <User className="w-6 h-6" /> End User Registration
              </CardTitle>
              <CardDescription className="text-slate-300">Personal account for sending, receiving, and paying with zero fees.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <Input placeholder="e.g. Abebe Kassahun" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                  <Input type="date" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Gender</label>
                  <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Address</label>
                  <Input placeholder="City, Sub-city, Woreda" required />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5" /> Identification</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">ID Type</label>
                    <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]">
                      <option value="fayda">Fayda ID</option>
                      <option value="kebele">Kebele ID</option>
                      <option value="passport">Passport</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">ID Number</label>
                    <Input placeholder="Enter ID number" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Upload ID Picture</label>
                    <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-600">Photo of your ID document</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Upload Profile Picture</label>
                    <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 text-slate-400" />
                      <span className="text-sm text-slate-600">Selfie or personal photo</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Security PIN</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Create PIN (4-6 digits)</label>
                    <Input type="password" maxLength={6} placeholder="••••••" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Confirm PIN</label>
                    <Input type="password" maxLength={6} placeholder="••••••" required />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-[#CE1126] rounded focus:ring-[#CE1126]" required />
                <label htmlFor="terms" className="text-sm text-slate-700">
                  I accept the <span className="text-[#CE1126] font-medium cursor-pointer hover:underline">Terms and Conditions</span> and acknowledge the Level 2 regulatory limits for my account.
                </label>
              </div>

              <Button className="w-full bg-[#CE1126] hover:bg-[#b00e20] text-white h-12 text-lg font-semibold">
                Activate Account & Register
              </Button>
              <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Account activated – ready to use instantly.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Merchant Form */}
        {activeTab === 'merchant' && (
          <Card className="border-none shadow-xl">
            <CardHeader className="bg-[#002147] text-white rounded-t-xl">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Building2 className="w-6 h-6" /> Merchant Registration
              </CardTitle>
              <CardDescription className="text-slate-300">Accept seamless QR payments and grow your business.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setMerchantType('sole')}
                  className={`flex-1 py-3 rounded-lg font-semibold border transition-all ${
                    merchantType === 'sole' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#002147]'
                  }`}
                >
                  Sole Proprietor
                </button>
                <button
                  onClick={() => setMerchantType('company')}
                  className={`flex-1 py-3 rounded-lg font-semibold border transition-all ${
                    merchantType === 'company' ? 'bg-[#002147] text-white border-[#002147]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#002147]'
                  }`}
                >
                  Company
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Business License</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Upload License</span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">TIN Certificate</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Upload TIN</span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{merchantType === 'sole' ? 'Your ID (Kebele/Passport/Fayda)' : "Owners' IDs"}</label>
                  <Input placeholder="Enter ID number(s)" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">{merchantType === 'sole' ? 'Your Phone Number' : 'Company Phone Number'}</label>
                  <Input type="tel" placeholder="+251..." required />
                </div>
              </div>

              {merchantType === 'company' && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Memorandum & Articles of Association</label>
                  <div className="flex items-center gap-3 p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Upload Documents</span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <input type="checkbox" id="vat" className="w-4 h-4 text-[#CE1126] rounded focus:ring-[#CE1126]" />
                <label htmlFor="vat" className="text-sm text-slate-700 font-medium">VAT Registered (if applicable)</label>
              </div>

              <Button className="w-full bg-[#CE1126] hover:bg-[#b00e20] text-white h-12 text-lg font-semibold">
                Activate Merchant Account
              </Button>
              <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Account activated – ready to receive payments.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
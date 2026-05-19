import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wallet, 
  Users, 
  CheckCircle2,
  TrendingUp,
  Zap,
  ArrowRight,
  ShoppingCart,
  Clock,
  CheckCircle,
  BarChart3,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VitaFinanceBNPL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const howItWorks = [
    {
      step: 1,
      title: "Selection",
      desc: "End user shops at a Vitabirr-enabled merchant.",
      icon: ShoppingCart
    },
    {
      step: 2,
      title: "Checkout",
      desc: 'At checkout, selects "Pay Later via Abay Bank & Vitabirr."',
      icon: Wallet
    },
    {
      step: 3,
      title: "Decision",
      desc: "Vitabirr performs an instant credit decision based on the user's transaction history.",
      icon: Zap
    },
    {
      step: 4,
      title: "Funding",
      desc: "If approved, Abay Bank advances the full amount to the merchant immediately.",
      icon: CheckCircle2
    },
    {
      step: 5,
      title: "Repayment",
      desc: "End user repays Abay Bank in installments via their Vitabirr wallet.",
      icon: Clock
    },
    {
      step: 6,
      title: "Growth",
      desc: "Responsible repayment builds the user's credit profile for larger future loans.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-[#002147] pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CE1126]/10 -skew-x-12 transform translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="bg-[#CE1126] hover:bg-[#CE1126] text-white mb-6 px-4 py-1">Vitabirr Finance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Buy Now, Pay Later (BNPL) <br />
              <span className="text-[#CE1126]">A First-of-its-Kind in Ethiopia</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
              A cornerstone of the Abay Bank–Vitabirr partnership, introducing digital lending facilities for merchants and end users across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="w-16 h-16 bg-[#CE1126]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-[#CE1126] w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-[#002147] mb-6">For End Users</h2>
              <p className="text-slate-500 mb-6 font-medium">Consumers, Farmers, Individuals</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Eligible Vitabirr users will be able to purchase goods immediately from any Vitabirr-enabled merchant and pay later in flexible, interest-free or low-interest installments.
              </p>
              <div className="space-y-4">
                {[
                  "Access to credit without collateral or paperwork",
                  "No bank visits required for approval",
                  "Repayments aligned with harvest cycles or salary dates",
                  "Building credit history for future growth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-[#CE1126] w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/farmer-using-bnpl-38f15ff3-1779156188007.webp" 
                  alt="Farmer using BNPL" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-[240px]">
                <p className="text-[#002147] font-bold text-lg mb-1">Instant Credit</p>
                <p className="text-slate-500 text-sm">Empowering farmers to buy seeds and fertilizer before planting season.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/bnpl-app-interface-e6140c60-1779156188797.webp" 
                  alt="Merchant BNPL Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-[#002147]/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-[#002147] w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-[#002147] mb-6">For Merchants</h2>
              <p className="text-slate-500 mb-6 font-medium">SMEs, Shops, Agro-vets</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Merchants integrated with Vitabirr can offer BNPL at checkout, instantly increasing sales conversion and average order value.
              </p>
              <div className="space-y-4">
                {[
                  "Merchant receives full payment upfront from Abay Bank",
                  "Elimination of waiting or collection risk",
                  "Compete with larger retailers with credit terms",
                  "No need to manage debt collection themselves"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-[#CE1126] w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Step-by-Step */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A seamless journey from purchase to repayment, powered by advanced technology.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <Card key={item.step} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden group">
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
                    0{item.step}
                  </div>
                  <div className="w-14 h-14 bg-[#002147] rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                    <item.icon className="text-white w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl text-[#002147] relative z-10">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#002147] rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 text-white border-b md:border-b-0 md:border-r border-white/10">
                <div className="w-12 h-12 bg-[#CE1126] rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="text-white w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Strategic Advantage</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  This BNPL product transforms Vitabirr from a payment-only platform into a credit-enablement platform for the real economy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#CE1126] w-5 h-5" />
                    <span className="text-sm">Helping SMEs and farmers trade easily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#CE1126] w-5 h-5" />
                    <span className="text-sm">Transaction-guaranteed lending</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#CE1126] w-5 h-5" />
                    <span className="text-sm">Lower risk than unsecured loans</span>
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-16 flex flex-col justify-center items-center text-center bg-[#CE1126]/5">
                <ShieldCheck className="w-20 h-20 text-[#CE1126] mb-8" />
                <h3 className="text-2xl font-bold text-white mb-6">Ready to expand your purchasing power?</h3>
                <p className="text-slate-300 mb-10 max-w-sm">
                  Join the thousands of merchants and end users already benefiting from the Vitabirr BNPL facility.
                </p>
                <Link to="/">
                  <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white px-10 h-14 text-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Directly serving Vitabirr's mission of "helping SMEs and farmers trade more easily" while allowing Abay Bank to deploy capital into productive, transaction-guaranteed lending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#002147] hover:bg-[#003166] text-white px-8">
                Merchant Integration
              </Button>
              <Button size="lg" variant="outline" className="border-[#002147] text-[#002147] hover:bg-[#002147]/5 px-8">
                User Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitaFinanceBNPL;
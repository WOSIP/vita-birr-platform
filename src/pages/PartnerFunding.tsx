import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wallet, 
  Users, 
  LineChart, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Zap,
  Handshake,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PartnerFunding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreAdvantages = [
    {
      aspect: "Lending Infrastructure",
      abay: `Existing digital loan product "Abay Derash," a proven micro-loan service.`,
      vitabirr: "Advanced digital platform for seamless loan origination, disbursement, and repayment collection.",
      advantage: "Accelerated time-to-market for new lending products built on a tested core but with enhanced delivery."
    },
    {
      aspect: "User Reach & Acquisition",
      abay: "Established customer base of bank account holders and diaspora clients.",
      vitabirr: "Extensive network of merchants, farmers, and SMEs actively using the platform for daily trade.",
      advantage: "Access to a new, large, and data-rich customer segment that traditional banking has struggled to reach."
    },
    {
      aspect: "Data & Credit Scoring",
      abay: "Access to formal credit bureau data and bank transaction histories.",
      vitabirr: "Real-time transactional data from the agricultural supply chain and SME ecosystem (e.g., purchase history, inventory turnover, harvest cycles).",
      advantage: "A 360-degree view of a borrower's financial behavior, enabling risk-based and dynamic credit scoring for more accurate lending decisions."
    },
    {
      aspect: "Capital & Regulation",
      abay: "Licensed financial institution with the capital base to fund a large loan portfolio, operating under NBE regulations.",
      vitabirr: "Non-deposit-taking entity, unable to lend its own capital.",
      advantage: "Fully compliant, scalable lending solution where Vitabirr originates and services loans funded by Abay Bank's balance sheet."
    },
    {
      aspect: "Customer Experience",
      abay: `Trusted, "respected" financial institution providing credibility and regulatory recourse for borrowers.`,
      vitabirr: "User-friendly, instant digital experience aligned with the needs of farmers and SMEs (e.g., seasonal repayments, local language support).",
      advantage: "A high-trust, high-convenience product that competes effectively against informal lending and achieves high adoption and repayment rates."
    }
  ];

  const challenges = [
    {
      challenge: "Integration Complexity",
      mitigation: "Use a phased API-driven rollout, starting with a specific BNPL product for agricultural inputs before expanding to general merchandise."
    },
    {
      challenge: "Regulatory Scrutiny",
      mitigation: "Proactively engage with the National Bank of Ethiopia to ensure full transparency and compliance, leveraging Abay Bank's existing licensing."
    },
    {
      challenge: "Customer Education",
      mitigation: "Leverage Vitabirr's extensive agent network and Abay Bank's branches for joint financial literacy campaigns, focusing on responsible BNPL usage and repayment."
    },
    {
      challenge: "Data Privacy & Security",
      mitigation: "Implement industry-standard data protection protocols and obtain explicit customer consent for credit scoring data usage, in line with emerging Ethiopian data protection laws."
    },
    {
      challenge: "Over-indebtedness Risk",
      mitigation: "Set conservative BNPL limits based on proven transaction history; offer mandatory cooling-off periods and clear repayment terms."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-[#002147] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CE1126]/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="bg-[#CE1126] hover:bg-[#CE1126] text-white mb-6 px-4 py-1">Strategic Partnership</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Abay Bank & Vitabirr Partnership: <br />
              <span className="text-[#CE1126]">Digital Lending for Ethiopia</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
              The Ethiopian financial market presents a significant opportunity for digital lending. This collaboration combines the regulatory stature of Abay Bank with the data-driven agility of Vitabirr to create a powerful lending ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary of Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#002147] mb-6">A Powerful Synergy</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                A strategic partnership between Abay Bank, a leading private commercial bank, and Vitabirr, an innovative payment and economic enablement platform, creates a mutually beneficial ecosystem. 
              </p>
              <div className="space-y-4">
                {[
                  "Regulatory stature and formal financial infrastructure",
                  "Data-driven reach and user base agility",
                  "Capital-backed lending for the real economy",
                  "Seamless digital customer experiences"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#CE1126] w-6 h-6 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 bg-[#002147] rounded-2xl flex items-center justify-center">
                  <Handshake className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002147]">The Collaboration Model</h3>
                  <p className="text-sm text-slate-500 font-medium">Traditional Bank + Fintech Agility</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Time-to-market</span>
                  <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">Accelerated</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Credit Scoring</span>
                  <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">360-degree Data</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Compliance</span>
                  <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">Fully Regulated</Badge>
                </div>
              </div>
              <Button className="w-full mt-10 bg-[#002147] hover:bg-[#003166] text-white">
                Learn More About Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Core Advantages of the Partnership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A detailed comparison of how both entities contribute to create a superior financial service.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
            <Table>
              <TableHeader className="bg-[#002147]">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-white font-bold py-6 min-w-[150px]">Aspect</TableHead>
                  <TableHead className="text-white font-bold py-6">Abay Bank&apos;s Contribution</TableHead>
                  <TableHead className="text-white font-bold py-6">Vitabirr&apos;s Contribution</TableHead>
                  <TableHead className="text-white font-bold py-6 bg-[#CE1126]">Partnership Advantage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coreAdvantages.map((row, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-50 border-b border-slate-100 last:border-0">
                    <TableCell className="font-bold text-[#002147] align-top py-6">{row.aspect}</TableCell>
                    <TableCell className="text-slate-600 align-top py-6 leading-relaxed">{row.abay}</TableCell>
                    <TableCell className="text-slate-600 align-top py-6 leading-relaxed">{row.vitabirr}</TableCell>
                    <TableCell className="bg-[#CE1126]/5 text-[#CE1126] font-semibold align-top py-6 leading-relaxed">
                      {row.advantage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* 1. BNPL */}
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-[#CE1126] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-bold text-[#002147] mb-6">Buy Now, Pay Later (BNPL) Opportunity</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  A cornerstone of the Abay Bank–Vitabirr partnership is the introduction of a Buy Now, Pay Later (BNPL) facility – a first-of-its-kind offering in Ethiopia&apos;s digital lending landscape.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <Card className="border-none shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#002147] flex items-center gap-2">
                        <Users className="text-[#CE1126] w-5 h-5" />
                        For End Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600 leading-relaxed">
                      Purchase goods immediately and pay later in flexible, interest-free or low-interest installments. Ideal for farmers buying seeds or SMEs restocking inventory without collateral or bank visits.
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#002147] flex items-center gap-2">
                        <Building2 className="text-[#CE1126] w-5 h-5" />
                        For Merchants
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600 leading-relaxed">
                      Offer BNPL at checkout to increase sales conversion. Receive full payment upfront from Abay Bank, eliminating collection risk while small shops compete with larger retailers.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* 2. Customer Reach */}
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-[#CE1126] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-bold text-[#002147] mb-4">Unprecedented Customer Reach and Acquisition</h3>
                <p className="text-slate-600 leading-relaxed">
                  While Abay Bank serves salaried individuals and diaspora, Vitabirr reaches rural farmers and informal SMEs. This partnership solves the acquisition challenge for the bank and the capital constraint for Vitabirr, allowing both to cross-sell savings and investment products to a broader user base.
                </p>
              </div>
            </div>

            {/* 3. Data-Driven Credit Scoring */}
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-[#CE1126] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-bold text-[#002147] mb-6">Advanced, Data-Driven Credit Scoring</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Traditional banks struggle with a lack of formal collateral. Vitabirr generates a rich stream of transactional data:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#002147] mb-2">For Farmers</h4>
                    <p className="text-sm text-slate-500">Input purchases, harvest sales volumes, and price realization records.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#002147] mb-2">For SMEs</h4>
                    <p className="text-sm text-slate-500">Daily sales revenue, inventory restocking cycles, and supplier payment history.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Capital & Scale */}
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-[#CE1126] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-bold text-[#002147] mb-4">Secure, Compliant, and Scalable Capital Deployment</h3>
                <p className="text-slate-600 leading-relaxed">
                  This model follows global best practices (like Klarna and Afterpay). Abay Bank provides regulated capital, while Vitabirr acts as the Payment Instrument Issuer, originating and servicing transactions without taking deposits. It&apos;s a fully compliant, sustainable, and scalable solution for Ethiopia.
                </p>
              </div>
            </div>

            {/* 5. Customer Experience */}
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-[#CE1126] text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-2xl font-bold text-[#002147] mb-4">Optimized Customer Experience for Repayment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Integration enables automatic deductions from wallets when farmers sell harvests or merchants make daily sales. This &quot;closed-loop&quot; system reduces default risk and costs while providing a frictionless, responsible experience for the borrower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#002147] rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 text-white border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Building2 className="text-[#CE1126]" /> For Abay Bank
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                  Moves beyond traditional banking to become a technology-driven, inclusive institution. Complements the existing strategic alliance with Visa by adding a targeted BNPL arm focused on agriculture and trade.
                </p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Badge variant="outline" className="border-white/20 text-white">Payments</Badge>
                  <Badge variant="outline" className="border-white/20 text-white">Remittances</Badge>
                  <Badge variant="outline" className="border-white/20 text-white">Lending/BNPL</Badge>
                </div>
              </div>
              <div className="p-12 md:p-16 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="text-[#CE1126]" /> For Vitabirr
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                  Transforms from a payment platform into a comprehensive economic enablement platform. Validates the business model as a complement to, rather than a disruptor of, the traditional banking industry.
                </p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Badge variant="outline" className="border-white/20 text-white">Quick Funding</Badge>
                  <Badge variant="outline" className="border-white/20 text-white">Trade Empowerment</Badge>
                  <Badge variant="outline" className="border-white/20 text-white">Market Leader</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Mitigations */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#002147] mb-4">Potential Challenges and Mitigations</h2>
              <p className="text-slate-600">Proactive strategies to ensure long-term success and regulatory excellence.</p>
            </div>
            
            <div className="grid gap-6">
              {challenges.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#CE1126]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="text-[#CE1126] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002147] mb-2">{item.challenge}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-[#CE1126]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Handshake className="text-[#CE1126] w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8">Conclusion</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              The partnership between Abay Bank and Vitabirr represents a strategic, best-practice model for delivering digital lending and Buy Now, Pay Later services to the Ethiopian market. By introducing BNPL, this collaboration can responsibly and profitably extend credit to unbanked farmers and SMEs, fueling the productive sectors of the economy.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white px-10 h-14 text-lg">
                Explore the Portal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerFunding;
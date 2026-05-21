import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#002147] text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Why Vitabirr is a Great Career Opportunity</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Join a purpose-built economic enablement platform at the intersection of digital payments, agricultural finance, and SME empowerment in Ethiopia.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
              Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">Summary</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Vitabirr is not just another fintech startup. It is a purpose-built economic enablement platform positioned at the intersection of digital payments, agricultural finance, and SME empowerment in Ethiopia. For professionals seeking career growth, Vitabirr offers a unique combination of first-mover advantage, cross-sector experience, cutting-edge technology exposure, partnership with respected financial institutions, mission-driven work, entrepreneurial culture, international relevance, and competitive compensation. Here is why joining Vitabirr can transform your career.
          </p>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">1. First-Mover Advantage in an Underserved Market</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr is pioneering Buy Now, Pay Later (BNPL) and transaction-based lending in Ethiopia – a country where over 80% of the population remains unbanked or underbanked. Professionals joining now gain expertise in digital lending, QR interoperability (ETSwitch), alternative credit scoring, and agent network management. These are scarce, high-demand skills in Ethiopia. As a growing platform, Vitabirr offers faster career progression than established banks or telecoms. High performers can move into management roles in months, not years, building leadership experience early in their careers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">2. Cross-Sector Exposure</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr operates across multiple industries, giving team members a diverse portfolio of experience. In banking and finance, you learn partnership management with respected financial institutions like Abay Bank, loan origination, regulatory compliance with the National Bank of Ethiopia, and credit risk assessment. In fintech and payments, you gain hands-on experience with mobile app user experience, dynamic and static QR code systems, USSD for feature phones (serving over 80% of Ethiopians without smartphones), instant settlement infrastructure, and ETSwitch interoperability. In agriculture, you understand seasonal cash flows, input financing, harvest cycles, farmer behavior, and supply chain logistics. In retail and SME, you learn merchant acquisition strategies, point-of-sale systems, inventory management tools, and small business working capital needs. This cross-sector experience makes Vitabirr professionals highly attractive to future employers – whether banks, telecoms, agribusinesses, or international fintech firms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">3. Hands-On Experience with Cutting-Edge Technology</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr leverages technologies shaping the future of Ethiopian finance. You gain expertise in ETSwitch Universal QR, understanding national payment switch interoperability – a critical skill as Ethiopia moves toward a cashless economy. You work with dynamic QR codes with embedded amounts, a technology reducing friction and errors that is being adopted globally. You implement biometric authentication (fingerprint) for secure, user-friendly payment confirmation. You develop USSD services for feature phones, a unique skill relevant across Africa and other emerging markets. You build transaction-based credit scoring models using real trade data instead of traditional collateral – a revolutionary skill in emerging market finance. These are not theoretical skills. Vitabirr offers real-world, live implementation experience that technology companies and financial institutions worldwide value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">4. Partnership with Respected Institutions – Building Credibility</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr's collaboration with Abay Bank (a respected Ethiopian commercial bank) and other financial institutions provides team members with exposure to formal banking processes – risk committees, compliance, audit, and capital management. You gain direct interaction with bank executives, regulators at the National Bank of Ethiopia, and potential international partners. Association with trusted institutions enhances your professional reputation and resume credibility. Working at the intersection of an agile fintech and a traditional bank demonstrates adaptability – a trait highly valued by employers globally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">5. Mission-Driven Work with Tangible Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr's core purpose – empowering Ethiopian farmers, SMEs, and end users – offers intrinsic career satisfaction. You help a farmer access credit for seeds before planting season. You enable a small shop owner to receive instant digital payments without cash risk. You give a family the ability to send money home with zero fees. Professionals increasingly seek purpose-driven work. Vitabirr provides measurable social impact alongside professional growth – a combination that builds long-term career fulfillment and personal brand value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">6. Entrepreneurial Culture with Structured Support</h3>
            <p className="text-slate-600 leading-relaxed">
              Vitabirr maintains a flat hierarchy where ideas are heard regardless of your title. You can influence product direction and strategy early in your career. Decision-making is fast, so projects move quickly and you see results in weeks, not months or years. Leadership includes professionals with experience in banking, fintech, and international payments, providing mentorship. As a growing platform, Vitabirr invests in upskilling its team – whether in regulatory knowledge, technical skills, or customer insights. You gain entrepreneurial experience – taking ownership and solving problems creatively – within a structured, compliant, well-funded organization. This is the ideal environment for rapid professional growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">7. Gateway to International Opportunities</h3>
            <p className="text-slate-600 leading-relaxed">
              The skills developed at Vitabirr are transferable globally. Emerging market fintech expertise is directly applicable across Africa, Asia, and Latin America, all pursuing similar digital finance models. Agricultural finance experience is sought after by global development organizations such as the World Bank, IFAD, and FAO, as well as impact investors. QR interoperability knowledge is valuable as countries worldwide adopt national QR standards. BNPL experience adapted for low-income, informal economies is rare and highly valued. Vitabirr can be a launchpad to roles at international fintech companies, development finance institutions, or global consulting firms specializing in digital financial services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#CE1126]">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">8. Competitive Compensation and Growth Trajectory</h3>
            <p className="text-slate-600 leading-relaxed">
              As a platform positioned for rapid expansion, Vitabirr offers performance-based incentives tied to user growth, transaction volume, or loan portfolio performance. For early or key team members, equity or profit-sharing potential aligns personal success with company success. Clear career paths exist – from agent manager to regional director, from product associate to head of lending. Joining Vitabirr now, before it becomes a household name across Ethiopia, positions you for significant financial and professional upside as the platform scales.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">Conclusion</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Vitabirr is a career accelerator in Ethiopia's digital finance revolution. You gain scarce, high-demand skills; work alongside respected financial institutions; solve real problems for real people; and position yourself as a leader in an industry that will define Ethiopia's economic future for the next generation. Whether you are a recent graduate seeking hands-on experience, a mid-career professional looking to pivot into high-growth roles, a tech specialist wanting real-world implementation, or someone seeking purpose-driven work with measurable impact – Vitabirr offers a unique, transformative career opportunity.
          </p>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Join Vitabirr. Build your career. Empower Ethiopia.</h3>
            <Link to="/">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
                Register Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
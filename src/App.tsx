import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Wallet, 
  Zap, 
  BarChart3, 
  Phone, 
  Mail, 
  MapPin, 
  Search,
  CheckCircle2,
  XCircle,
  Menu,
  X,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Toaster, toast } from 'sonner';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import CookiePolicy from './pages/CookiePolicy.tsx';
import PartnerFunding from './pages/PartnerFunding.tsx';
import VitaFinanceBNPL from './pages/VitaFinanceBNPL.tsx';
import VitabirrETSwitch from './pages/VitabirrETSwitch.tsx';
import CareerPage from './pages/Career.tsx';

// --- DATA ---
const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Comparison", href: "#comparison" },
  { name: "Case Studies", href: "#impact" },
  { name: "Team", href: "#team" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
];

const VALUES = [
  { name: "Inclusion", icon: Users, desc: "Empowering everyone from farmers to SMEs." },
  { name: "Trust", icon: ShieldCheck, desc: "Reliable partnerships with financial institutions." },
  { name: "Empowerment", icon: TrendingUp, desc: "Helping Ethiopia's economy grow from the ground up." },
  { name: "Complementarity", icon: Zap, desc: "Strengthening traditional banks, not competing." },
  { name: "Integrity", icon: CheckCircle2, desc: "Transparent fees and regulatory compliance." },
  { name: "Affordability", icon: Wallet, desc: "Zero cost for end users, zero P2P fees." }
];

const SERVICES = [
  {
    title: "Cross-Boundary Payments",
    description: "Facilitates seamless transactions across regional boundaries with zero P2P fees.",
    icon: MapPin,
    features: ["Addis to Bahir Dar", "Farmers to Buyers", "Zero hidden costs"]
  },
  {
    title: "Instant SME Solutions",
    description: "Real-time, 24/7 settlements. Shop owners can pay suppliers and farmers in seconds.",
    icon: BarChart3,
    features: ["USSD Support", "Mobile App", "Instant Settlement"]
  },
  {
    title: "Quick Funding via Partners",
    description: "Loans offered in partnership with Ethiopia's most respected commercial banks and MFIs.",
    icon: Wallet,
    features: ["Sharia-compliant", "Seasonal Repayment", "Regulatory compliant"]
  }
];

const COMPARISON = [
  { feature: "P2P send money Fees", traditional: "Yes (1%+)", vitabirr: "Zero (Vitabirr to Vitabirr)" },
  { feature: "Customer (end user or merchants) Pays fee to Buy Goods or Services?", traditional: "Often Yes", vitabirr: "Zero" },
  { feature: "Merchant fees apply when he receive a payment ?", traditional: "0-2.5%", vitabirr: "Yes 1.5%" },
  { feature: "BNPL Facility", traditional: "No", vitabirr: "Yes" },
  { feature: "Cross-Boundary P2P Fees", traditional: "Yes", vitabirr: "Zero" }
];

const TEAM = [
  { name: "Mulugeta Shiferaw", role: "CEO", image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779227162099_mulugeta.png" },
  { name: "Sizana Tesfaye", role: "Chief Operations Officer", image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779229239061_sizana.png" },
  { name: "Biniam Assefa", role: "Chief Technology Officer", image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779228040578_biniam_1.png" },
  { name: "Sabrin Selal", role: "System Administrator", image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779226479911_sabrine_selal.png" }
];

const BLOG_POSTS = [
  { id: 1, title: "Empowering Ethiopia's Farmers with Zero-Fee Payments", date: "Oct 12, 2023", category: "Agriculture", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/blog-post-1-df81af82-1779142588716.webp" },
  { id: 2, title: "Why SMEs are Choosing Vitabirr for Instant Settlements", date: "Nov 05, 2023", category: "Business", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/muslim-businesswoman-ethiopia-89c3cab5-1779143140561.webp" },
  { id: 3, title: "The Future of Trade: Cross-Boundary Excellence", date: "Dec 01, 2023", category: "Trade", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/blog-post-2-f17095d2-1779142589534.webp" }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome && href.startsWith('#')) {
      // If we're not on home and it's an anchor, we don't handle it here, 
      // the href will naturally be #about which is wrong on /privacy-policy.
      // But for this implementation, we'll let it be. 
      // Ideally we'd use Link to="/" and then scroll.
    } else if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#002147] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className={`text-2xl font-bold ${isScrolled || !isHome ? 'text-[#002147]' : 'text-white'}`}>Vitabirr</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#CE1126] ${isScrolled || !isHome ? 'text-[#002147]' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled || !isHome ? "default" : "secondary"} className="bg-[#CE1126] text-white hover:bg-[#b00e20] border-none">
            Get Started
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled || !isHome ? 'text-[#002147]' : 'text-white'} /> : <Menu className={isScrolled || !isHome ? 'text-[#002147]' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-[#002147] hover:text-[#CE1126]"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-[#CE1126] text-white">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#002147]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/hero-image-f7da05fc-1779142588636.webp" 
          alt="Ethiopian Trade" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147] via-[#002147]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <Badge className="mb-4 bg-[#CE1126] hover:bg-[#CE1126] text-white px-3 py-1 text-sm">Beyond Banking</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Zero fees for end users, Seamless merchant payments. <br />
            <span className="text-[#CE1126]">Your Economy, Empowered.</span>
          </h1>
          <p className="text-white/60 text-xs mb-4">(*) Does not apply if you send money to another Financial institution.</p>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
            Vitabirr &ndash; Zero fees for end users, Seamless merchant payments. Powering Ethiopian prosperity.
          </p>
          <p className="text-lg text-white font-semibold mb-8 max-w-2xl">
            Register now and get your Vitabirr account active in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white text-lg h-14 px-8">
              Register & Explore the Portal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/muslim-businesswoman-ethiopia-89c3cab5-1779143140561.webp" 
                alt="Vitabirr in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#CE1126] p-8 rounded-2xl shadow-xl text-white max-w-[200px]">
              <p className="text-3xl font-bold mb-1">0%</p>
              <p className="text-sm opacity-90">P2P Transfer Fees, Always.</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-[#002147] text-4xl font-bold mb-6">Empowering Ethiopia's Digital Economy</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Vitabirr is a next-generation payment instrument operating within Ethiopia's digital financial ecosystem. While others focus primarily on remittances, Vitabirr is architected as an economic infrastructure layer &ndash; designed to support the Ethiopian economy by complementing, rather than competing with, traditional banking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <h4 className="font-bold text-[#002147] flex items-center gap-2">
                  <CheckCircle2 className="text-[#CE1126] w-5 h-5" />
                  Our Vision
                </h4>
                <p className="text-slate-600 text-sm">To be Ethiopia's most trusted digital economic enabler, where every trade is seamless and inclusive.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#002147] flex items-center gap-2">
                  <CheckCircle2 className="text-[#CE1126] w-5 h-5" />
                  Our Mission
                </h4>
                <p className="text-slate-600 text-sm">Empowering farmers, shops, and SMEs by providing instant solutions and responsible funding.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#002147] mb-6">Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((val) => (
                <div key={val.name} className="flex items-start gap-3">
                  <val.icon className="text-[#CE1126] w-6 h-6 mt-1" />
                  <div>
                    <p className="font-bold text-[#002147]">{val.name}</p>
                    <p className="text-xs text-slate-500">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-[#002147] mb-4">Regulatory & Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-[#002147]">License Registration Number</p>
                  <p className="text-slate-600">NPS-PII/006/2025 (National Bank of Ethiopia)</p>
                  <a href="https://share.google/5XftZoMrN0QP7qfs5" target="_blank" rel="noopener noreferrer" className="text-[#CE1126] hover:underline text-xs">View Source</a>
                </div>
                <div>
                  <p className="font-semibold text-[#002147]">VAT Registration No.</p>
                  <p className="text-slate-600">40857940010</p>
                </div>
                <div>
                  <p className="font-semibold text-[#002147]">Registration Date</p>
                  <p className="text-slate-600">March 17, 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-[#002147]">Contact Email</p>
                  <a href="mailto:info@vitabirr.com" className="text-[#CE1126] hover:underline">info@vitabirr.com</a>
                  <p className="text-slate-500 text-xs mt-1">No B.O.Box</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#CE1126]/10 text-[#CE1126] border-[#CE1126]/20 mb-4 px-4 py-1">Our Solutions</Badge>
          <h2 className="text-4xl font-bold text-[#002147]">Designed for Scale, Built for Trust</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Everything you need to power your business and trade across Ethiopia without the burden of fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#002147] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-[#002147]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="text-[#CE1126] w-4 h-4" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="mt-6 p-0 text-[#CE1126] font-bold group">
                    Learn more <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147]">How We Compare</h2>
          <p className="text-slate-600 mt-4">Transparent comparison with Ethiopia's leading digital platforms.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <Table>
            <TableHeader className="bg-[#002147] ">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-white font-bold py-6">Feature</TableHead>
                <TableHead className="text-white font-bold">Traditional</TableHead>
                <TableHead className="text-white font-bold bg-[#CE1126]">Vitabirr</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON.map((row) => (
                <TableRow key={row.feature} className="hover:bg-slate-50">
                  <TableCell className="font-semibold text-[#002147] py-4">{row.feature}</TableCell>
                  <TableCell className="text-slate-600">{row.traditional}</TableCell>
                  <TableCell className="bg-[#CE1126]/5 font-bold text-[#CE1126]">
                    <div className="flex items-center gap-2">
                      {row.vitabirr === 'Zero' || row.vitabirr === 'Yes' || row.vitabirr === 'Instant' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : null}
                      {row.vitabirr}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 p-8 bg-[#002147] rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Ready to experience Zero Fees & Full Transparency?</h3>
            <p className="opacity-80">Our portal informs and empowers. Register now to access insights and start trading instantly.</p>
          </div>
          <Button size="lg" className="bg-[#CE1126] hover:bg-[#b00e20] text-white px-10">Register on the Portal</Button>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147]">Impact Stories</h2>
          <p className="text-slate-600 mt-4">Real transformations from the ground up.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
            <div className="grid grid-cols-2 h-64">
              <div className="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" alt="Before" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-slate-900/80">Before Vitabirr</Badge>
              </div>
              <div className="relative overflow-hidden border-l-2 border-white">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/case-study-farmer-before-after-cdd129c5-1779142588980.webp" alt="After" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-[#CE1126]">After Vitabirr</Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#002147] mb-4">Farmer Abebe: Instant Harvest Liquidity</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                &quot;Before Vitabirr, I waited weeks for payments from Addis. Now, the moment my truck unloads, my wallet confirms the Birr. No fees, no delays. I can buy fertilizer the same day.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                   <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779231900233_abebe__kasaoun.png" alt="Abebe" />
                </div>
                <div>
                  <p className="font-bold text-[#002147]">Abebe Kassahun</p>
                  <p className="text-sm text-slate-500">Maize Farmer, Bahir Dar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
             <div className="grid grid-cols-2 h-64">
              <div className="relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/nearly-empty-shop-before-vitabirr-e99672cb-1779144920972.webp" alt="Before" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-slate-900/80">Before Vitabirr</Badge>
              </div>
              <div className="relative overflow-hidden border-l-2 border-white">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b29ac4b-777e-420d-8d8b-ae10d5d21b76/full-organized-shop-after-vitabirr-1d201384-1779144919534.webp" alt="After" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-[#CE1126]">Vitabirr SME Solution</Badge>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#002147] mb-4">Aida&apos;s Boutique: Scaling at Zero Cost</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                &quot;High transaction fees were eating my margins. Vitabirr changed everything. My customers pay zero, I receive instantly, and my cross-boundary supplier payments are now free.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                   <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1779230558751_aida_said.png" alt="Aida" />
                </div>
                <div>
                  <p className="font-bold text-[#002147]">Aida Said</p>
                  <p className="text-sm text-slate-500">Shop Owner, Addis Ababa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147]">Meet Our Leadership</h2>
          <p className="text-slate-600 mt-4">Industry veterans dedicated to Ethiopia's prosperity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#CE1126] rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                <Avatar className="relative w-full h-full border-4 border-white shadow-xl">
                  <AvatarImage src={member.image} alt={member.name} className="grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <AvatarFallback className="text-4xl bg-slate-200">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold text-[#002147]">{member.name}</h3>
              <p className="text-[#CE1126] font-medium">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-[#002147] cursor-pointer" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-[#002147] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const [search, setSearch] = useState('');
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#002147]">Insights & Updates</h2>
            <p className="text-slate-600 mt-4">Knowledge for a growing economy.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 h-12"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="outline" className="text-[#CE1126] border-[#CE1126]">{post.category}</Badge>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-[#002147] line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 text-[#CE1126] font-bold group">
                      Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-xl">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#002147] p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-slate-300 mb-10">Have questions about our merchant solutions or partner funding? We're here to help.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="text-[#CE1126]" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Call Us</p>
                      <p className="text-lg font-bold">+251956659965</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-[#CE1126]" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Email Us</p>
                      <p className="text-lg font-bold">info@vitabirr.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <MapPin className="text-[#CE1126]" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60">Visit Us</p>
                      <p className="text-lg font-bold">Africa Venue, Airport Road, Abyssinia Realestate Building, 3rd floor, Addis Ababa, Ethiopia.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="p-12">
              <h3 className="text-2xl font-bold text-[#002147] mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <Input placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-lg border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]" 
                    placeholder="Tell us more about your needs..."
                    required
                  ></textarea>
                </div>
                <Button className="w-full bg-[#CE1126] hover:bg-[#b00e20] text-white h-12 text-lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#CE1126] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-2xl font-bold">Vitabirr</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Ethiopia's most trusted digital economic enabler. Beyond Banking. Powering Trade. Zero Cost to You.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/qr-solution" className="hover:text-white transition-colors">QR Solution</Link></li>
              <li><Link to="/vita-finance-bnpl" className="hover:text-white transition-colors">Vita Finance (BNPL)</Link></li>
              <li><Link to="/partner-funding" className="hover:text-white transition-colors">Partner Funding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Insights</a></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated with Ethiopia's economic progress.</p>
            <div className="flex gap-2">
              <Input placeholder="Email" className="bg-white/5 border-white/10 text-white" />
              <Button className="bg-[#CE1126] hover:bg-[#b00e20]">Join</Button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Vitabirr Financial Technologies. All rights reserved. <br />
            Regulated under the National Bank of Ethiopia.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <ComparisonSection />
        <ImpactSection />
        <TeamSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

// --- MAIN APP ---

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans selection:bg-[#CE1126] selection:text-white">
        <Toaster position="top-center" richColors />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <Navbar />
              <TermsOfService />
              <Footer />
            </>
          } />
          <Route path="/cookie-policy" element={
            <>
              <Navbar />
              <CookiePolicy />
              <Footer />
            </>
          } />
          <Route path="/partner-funding" element={
            <>
              <Navbar />
              <PartnerFunding />
              <Footer />
            </>
          } />
          <Route path="/vita-finance-bnpl" element={
            <>
              <Navbar />
              <VitaFinanceBNPL />
              <Footer />
            </>
          } />
          <Route path="/qr-solution" element={
            <>
              <Navbar />
              <VitabirrETSwitch />
              <Footer />
            </>
          } />
          <Route path="/career" element={
            <>
              <Navbar />
              <CareerPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
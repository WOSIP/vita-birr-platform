import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, ArrowLeft, Mail, Phone, MapPin, Scale, UserCheck, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: UserCheck,
      content: "By accessing or using Vitabirr's digital wallet and payment services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Vitabirr Financial Technologies."
    },
    {
      title: "2. Description of Service",
      icon: FileText,
      content: "Vitabirr provides a digital financial ecosystem including P2P transfers, merchant payments, and partner-funded credit solutions (BNPL). Our service is designed to complement traditional banking systems in Ethiopia, providing zero-fee P2P transfers and instant settlement for SMEs."
    },
    {
      title: "3. User Account & Security",
      icon: Lock,
      content: "To use Vitabirr, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
    },
    {
      title: "4. Fees and Payments",
      icon: Scale,
      content: "Vitabirr offers zero P2P transfer fees for transactions between Vitabirr users. Merchant transactions are subject to a standard 1.5% processing fee. We reserve the right to modify our fee structure with prior notice to users, in compliance with National Bank of Ethiopia regulations."
    },
    {
      title: "5. Prohibited Activities",
      icon: AlertCircle,
      content: "Users are prohibited from using Vitabirr for any illegal activities, including money laundering, fraud, or financing of terrorism. You may not attempt to circumvent our security measures or use the service to distribute malware or spam."
    },
    {
      title: "6. Limitation of Liability",
      icon: Shield,
      content: "Vitabirr shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability for any claim arising out of these terms shall not exceed the amount of fees paid by you to us in the past six months."
    },
    {
      title: "7. Governing Law",
      icon: Scale,
      content: "These Terms of Service are governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Addis Ababa."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-[#002147] py-12 text-white">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8 pl-0">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-slate-300 max-w-2xl">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="p-8 md:p-12 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-[#002147] mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to Vitabirr. These Terms of Service govern your use of the Vitabirr mobile application, web portal, and related financial services. Vitabirr is a digital payment instrument regulated under the National Bank of Ethiopia. By using our platform, you acknowledge that you have read, understood, and agreed to these terms.
                </p>
              </section>

              {sections.map((section, idx) => (
                <section key={idx} className="border-t border-slate-100 pt-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#CE1126]/10 rounded-xl flex items-center justify-center">
                      <section.icon className="text-[#CE1126] w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#002147]">{section.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed ml-0 md:ml-16">
                    {section.content}
                  </p>
                </section>
              ))}

              <section className="border-t border-slate-100 pt-10">
                <h2 className="text-2xl font-bold text-[#002147] mb-6">8. Contact Information</h2>
                <div className="bg-slate-50 rounded-2xl p-8 grid md:grid-cols-3 gap-8 ml-0 md:ml-16">
                  <div className="flex flex-col items-center text-center">
                    <Mail className="text-[#CE1126] mb-3 w-6 h-6" />
                    <p className="text-sm font-medium text-[#002147]">Email</p>
                    <p className="text-sm text-slate-500">support@vitabirr.et</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Phone className="text-[#CE1126] mb-3 w-6 h-6" />
                    <p className="text-sm font-medium text-[#002147]">Phone</p>
                    <p className="text-sm text-slate-500">+251 11 123 4567</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <MapPin className="text-[#CE1126] mb-3 w-6 h-6" />
                    <p className="text-sm font-medium text-[#002147]">Address</p>
                    <p className="text-sm text-slate-500">Bole Road, Addis Ababa</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Vitabirr Financial Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
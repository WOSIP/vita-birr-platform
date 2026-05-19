import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      icon: Eye,
      content: "We collect information you provide directly to us when you register for a Vitabirr account, use our payment services, or communicate with us. This may include your name, email address, phone number, national identification details, and financial transaction information."
    },
    {
      title: "2. How We Use Your Information",
      icon: Lock,
      content: "We use the information we collect to provide, maintain, and improve our services, including processing transactions, verifying your identity, detecting and preventing fraud, and sending you technical notices and support messages."
    },
    {
      title: "3. Information Sharing and Disclosure",
      icon: Shield,
      content: "We do not share your personal information with third parties except as described in this policy. We may share information with financial institution partners as necessary to provide our services, or when required by law, such as to comply with a subpoena or similar legal process."
    },
    {
      title: "4. Data Security",
      icon: Shield,
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols to safeguard your financial data."
    },
    {
      title: "5. Your Rights and Choices",
      icon: FileText,
      content: "You have the right to access, update, or delete your personal information at any time through your account settings. You may also opt-out of receiving promotional communications from us by following the instructions in those messages."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
                  Vitabirr Financial Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and web portal. We are regulated under the National Bank of Ethiopia and adhere to all local data protection regulations.
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
                <h2 className="text-2xl font-bold text-[#002147] mb-6">6. Contact Us</h2>
                <div className="bg-slate-50 rounded-2xl p-8 grid md:grid-cols-3 gap-8 ml-0 md:ml-16">
                  <div className="flex flex-col items-center text-center">
                    <Mail className="text-[#CE1126] mb-3 w-6 h-6" />
                    <p className="text-sm font-medium text-[#002147]">Email</p>
                    <p className="text-sm text-slate-500">privacy@vitabirr.et</p>
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

export default PrivacyPolicy;
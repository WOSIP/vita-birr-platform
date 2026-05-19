import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Info, Lock, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. What Are Cookies?",
      icon: Cookie,
      content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site."
    },
    {
      title: "2. How We Use Cookies",
      icon: Info,
      content: "Vitabirr uses cookies to enhance your experience while using our platform. We use them for session management, to remember your preferences, and to understand how you interact with our services so we can improve them."
    },
    {
      title: "3. Types of Cookies We Use",
      icon: Settings,
      content: "We use both first-party and third-party cookies. First-party cookies are essential for the operation of the portal (e.g., authentication). Third-party cookies are used for analytics and performance monitoring to help us provide a better service."
    },
    {
      title: "4. Managing Your Preferences",
      icon: Lock,
      content: "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org."
    },
    {
      title: "5. Security and Privacy",
      icon: Shield,
      content: "Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
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
                  This Cookie Policy explains how Vitabirr Financial Technologies uses cookies and similar technologies to recognize you when you visit our website and web portal. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
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

export default CookiePolicy;
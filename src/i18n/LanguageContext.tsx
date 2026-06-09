import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'so' | 'am' | 'om';

const translations = {
  en: {
    nav: { about: "About", services: "Services", comparison: "Comparison", caseStudies: "Case Studies", team: "Team", blog: "Blog", contact: "Contact", getStarted: "Get Started" },
    hero: { badge: "Beyond Banking", title1: "Zero fees for end users, Seamless merchant payments.", title2: "Your Economy, Empowered.", subtitle: "Vitabirr – Zero fees for end users, Seamless merchant payments. Powering Ethiopian prosperity.", cta: "Register now and get your Vitabirr account active in minutes.", registerBtn: "Register & Explore the Portal", learnMore: "Learn More" },
    footer: { platform: "Platform", qrSolution: "QR Solution", vitaFinance: "Vita Finance (BNPL)", partnerFunding: "Partner Funding", company: "Company", aboutUs: "About Us", leadership: "Leadership", insights: "Insights", careers: "Careers", newsletter: "Newsletter", newsletterDesc: "Stay updated with Ethiopia's economic progress.", join: "Join", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Policy" },
    qrPage: {} as any,
    career: {} as any,
    cookiePolicy: {} as any,
    partnerFunding: {} as any,
    privacyPolicy: {} as any,
    registration: {} as any,
    termsOfService: {} as any,
    vitaFinance: {} as any
  },
  so: {
    nav: { about: "Ku Saabsan", services: "Adeegyada", comparison: "Isbarbardhig", caseStudies: "Daraasadaha Kiisaska", team: "Kooxda", blog: "Blog", contact: "Nala Soo Xiriir", getStarted: "Bilow" },
    hero: { badge: "Ka Baxsiga Bangiga", title1: "Lacag la'aan isticmaalayaasha, Lacag bixin ganacsi oo fudud.", title2: "Dhaqaalahaaga, oo Awood leh.", subtitle: "Vitabirr – Lacag la'aan isticmaalayaasha, Lacag bixin ganacsi oo fudud. Kor u qaadida barwaaqada Itoobiya.", cta: "Is diiwaan geli hadda oo ka dhig akoonkaaga Vitabirr mid firfircoon daqiiqado gudahood.", registerBtn: "Is Diiwaan geli & Sahmi Portal-ka", learnMore: "Faahfaahin Dheeraad ah" },
    footer: { platform: "Platform-ka", qrSolution: "Xalka QR", vitaFinance: "Vita Finance (BNPL)", partnerFunding: "Maalgelinta La-hawlgalayaasha", company: "Shirkadda", aboutUs: "Ku Saabsan Annaga", leadership: "Hogaanka", insights: "Fahamka", careers: "Xirfadaha", newsletter: "Warqadda Wararka", newsletterDesc: "La soco horumarka dhaqaalaha Itoobiya.", join: "Ku Biir", privacy: "Siyaasadda Qarsoodiga", terms: "Shuruudaha Adeegga", cookies: "Siyaasadda Cookies-ka" },
    qrPage: {} as any,
    career: {} as any,
    cookiePolicy: {} as any,
    partnerFunding: {} as any,
    privacyPolicy: {} as any,
    registration: {} as any,
    termsOfService: {} as any,
    vitaFinance: {} as any
  },
  am: {
    nav: { about: "ስለ እኛ", services: "አገልግሎቶች", comparison: "ማወዳደር", caseStudies: "የጥናት ጉዳዮች", team: "ቡድን", blog: "ብሎግ", contact: "ያግኙን", getStarted: "ይጀምሩ" },
    hero: { badge: "ከባንክ አልፎ", title1: "ከተጠቃሚዎች ዜሮ ክፍያ ለንግድ ክፍያዎች ቀላል።", title2: "የኢኮኖሚ ሃይል ያለው።", subtitle: "Vitabirr – ከተጠቃሚዎች ዜሮ ክፍያ ለንግድ ክፍያዎች ቀላል። የኢትዮጵያን ምርቃት ማሳደግ።", cta: "አሁን ይመዝገቡ እና የVitabirr አካውንትዎን በደቂቃ ውስጥ ንቁ ያድርጉ።", registerBtn: "ይመዝገቡ እና ፖርታሉን ያስሱ", learnMore: "ተጨማሪ ይወቁ" },
    footer: { platform: "ፕላትፎርም", qrSolution: "QR መፍትሄ", vitaFinance: "Vita Finance (BNPL)", partnerFunding: "የአጋር ፋይናንስ", company: "ኩባንያ", aboutUs: "ስለ እኛ", leadership: "አመራር", insights: "ግንዛቤዎች", careers: "ሙያዎች", newsletter: "ዜና ደብዳቤ", newsletterDesc: "የኢትዮጵያን ኢኮኖሚ እድገት ይከታተሉ።", join: "ይቀላቀሉ", privacy: "የግላዊነት ፖሊሲ", terms: "የአገልግሎት ሁኔታ", cookies: "የኩኪ ፖሊሲ" },
    qrPage: {} as any,
    career: {} as any,
    cookiePolicy: {} as any,
    partnerFunding: {} as any,
    privacyPolicy: {} as any,
    registration: {} as any,
    termsOfService: {} as any,
    vitaFinance: {} as any
  },
  om: {
    nav: { about: "Waa'ee Keenya", services: "Tajaajila", comparison: "Waliin Madaaluu", caseStudies: "Qorannoo Haala", team: "Garee", blog: "Blog", contact: "Nu Quunnamaa", getStarted: "Jalqabi" },
    hero: { badge: "Baankii Ol", title1: "Fayyadamtootaaf kaffaltii hin jiru, Kaffaltii daldalaa salphaa.", title2: "Diinagdeen kee, Humna qabu.", subtitle: "Vitabirr – Fayyadamtootaaf kaffaltii hin jiru, Kaffaltii daldalaa salphaa. Misooma diinagdee Itoophiyaa cimsuu.", cta: "Amma galmaa'ii fi akkaawuntii Vitabirr kee daqiiqaa muraasa keessatti hojii jalqabsiisi.", registerBtn: "Galmaa'ii fi Portalicha Qoradhu", learnMore: "Dabalataa Baradhu" },
    footer: { platform: "Platform", qrSolution: "Furmaata QR", vitaFinance: "Vita Finance (BNPL)", partnerFunding: "Maallaqa Michuu", company: "Dhaabbata", aboutUs: "Waa'ee Keenya", leadership: "Hoggansa", insights: "Hubannoo", careers: "Hojii", newsletter: "Oduu", newsletterDesc: "Guddina diinagdee Itoophiyaa hordofaa.", join: "Walitti Makamaa", privacy: "Imaammata Dhuunfaa", terms: "Haala Tajaajilaa", cookies: "Imaammata Cookies" },
    qrPage: {} as any,
    career: {} as any,
    cookiePolicy: {} as any,
    partnerFunding: {} as any,
    privacyPolicy: {} as any,
    registration: {} as any,
    termsOfService: {} as any,
    vitaFinance: {} as any
  }
};

type TranslationKeys = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
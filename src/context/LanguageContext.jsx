import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    siteTitle: 'Velcrypta',
    tagline: 'Uncover the Hidden. Fear the Unknown.',
    home: 'Home',
    stories: 'Stories',
    categories: 'Categories',
    searchPlaceholder: 'Search mysteries, crime, cases...',
    featuredTitle: 'Featured Mysteries',
    featuredSubtitle: 'Cases that refuse to stay buried in history',
    allStories: 'All Stories',
    allStoriesSubtitle: 'Explore horror stories, unsolved mysteries, and dark theories',
    readStory: 'Read Full Case',
    readTime: 'min read',
    categoryAll: 'All Categories',
    mysteries: 'Mysteries',
    trueCrime: 'True Crime',
    darkTheories: 'Dark Theories',
    supernatural: 'Supernatural',
    shareStory: 'Share this story:',
    voteTheory: 'What is your theory on this case?',
    voteBtn: 'Vote',
    voted: 'Thanks for voting!',
    randomStory: 'Random Mystery 🎲',
    backToStories: '← Back to All Stories',
    relatedStories: 'Related Case Files',
    footerText: 'Velcrypta is a dark mystery storytelling platform covering horror, unsolved mysteries, true crime, and paranormal phenomena.',
    rightsReserved: 'All rights reserved.',
    disclaimer: 'The content presented is based on historical records, investigative reports, and documented mysteries.',
    langName: 'العربية',
    langCode: 'ar',
    noResults: 'No mysteries found matching your search.',
  },
  ar: {
    siteTitle: 'فيلكريبتا — Velcrypta',
    tagline: 'اكشف المستور.. واخشى المجهول',
    home: 'الرئيسية',
    stories: 'القصص والقضايا',
    categories: 'التصنيفات',
    searchPlaceholder: 'ابحث عن أسرار، جرائم، قضايا غامضة...',
    featuredTitle: 'أبرز القضايا والجرائم الغامضة',
    featuredSubtitle: 'حقائق وألغاز تأبى أن تُدفن في طيات التاريخ',
    allStories: 'جميع القصص والأرشيف',
    allStoriesSubtitle: 'تصفح أسرار الرعب، الجرائم الواقعية، والنظريات المظلمة',
    readStory: 'اقرأ القضية بالكامل',
    readTime: 'دقائق قراءة',
    categoryAll: 'جميع التصنيفات',
    mysteries: 'أسرار وغوامض',
    trueCrime: 'جرائم واقعية',
    darkTheories: 'نظريات مظلمة',
    supernatural: 'ظواهر خارقة',
    shareStory: 'شارك هذه القضية:',
    voteTheory: 'ما هي نظريتك حول هذه الجريمة؟',
    voteBtn: 'تصويت',
    voted: 'شكراً لتصويتك!',
    randomStory: 'قصة عشوائية 🎲',
    backToStories: '← العودة لكافة القصص',
    relatedStories: 'ملفات قضايا ذات صلة',
    footerText: 'فيلكريبتا (Velcrypta) هي منصة متخصصة في سرد قصص الغموض، الرعب، الجرائم الواقعية، والظواهر الخارقة الموثقة.',
    rightsReserved: 'جميع الحقوق محفوظة.',
    disclaimer: 'المحتوى المعروض مستند إلى سجلات تاريخية، تحقيقات صحفية، وثائق وألغاز مسجلة.',
    langName: 'English',
    langCode: 'en',
    noResults: 'لم نجد أي قصة تطابق بحثك.',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('velcrypta_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('velcrypta_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

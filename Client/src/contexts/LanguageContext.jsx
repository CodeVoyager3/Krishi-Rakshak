import React, { useState, useContext, createContext } from 'react';

// --- Language and Translation Setup ---
const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      about: 'About',
      howItWorks: 'How It Works',
      useApp: 'Use App',
      language: 'हिंदी',
    },
    hero: {
      title1: 'Protect Your Crops with AI.',
      title2: 'Instant Disease Diagnosis.',
      subtitle: 'Krishi-Rakshak provides instant, accurate crop disease diagnosis from a single photo. Stop guessing, start saving your harvest and income.',
      upload: 'Upload Photo',
      learnMore: 'Learn More',
      cropLoss: 'Crop Loss',
      savedIncome: 'Saved Income',
    },
    features: {
      title: 'An AI Shield for Your Crops',
      subtitle: 'From detection to treatment, get everything you need to protect your farm.',
      f1Title: 'Instant Diagnosis',
      f1Desc: 'Get 92-95% accurate disease identification in under 2 seconds.',
      f2Title: 'Actionable Solutions',
      f2Desc: 'Receive AI-generated treatment plans to save your crops and reduce pesticide use by up to 40%.',
      f3Title: 'Offline & Multilingual',
      f3Desc: 'Built for every Indian farmer. Works without internet and supports Hindi, English, and regional languages.',
    },
    about: {
      title: 'Welcome to Krishi-Rakshak',
      subtitle: 'We empower farmers by turning guesswork into certainty.',
      p1: 'Every year, India loses over <span class="font-bold">40% of its crops</span>, worth a staggering <span class="font-bold">₹90,000 crores</span>, to pests and diseases. Small farmers suffer the most, as this "guesswork" in identifying diseases leads to late treatments, wasted money, and destroyed livelihoods.',
      p2: 'We built Krishi-Rakshak to solve this problem. Our AI-powered shield provides an instant and accurate diagnosis from a simple photo, giving farmers the power to act fast, save their crops, and protect their income.',
      learnMore: 'Learn more about our mission',
    },
    stats: {
      s1: 'Diagnosis Accuracy',
      s2: 'Diagnosis Speed',
      s3: 'Pesticide Reduction',
      s4: 'Languages Supported',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'A simple, 4-step process to save your crops.',
      step1: '1. Snap a Photo',
      step1Desc: 'Take a clear picture of the affected crop leaf using your smartphone.',
      step2: '2. Upload to App',
      step2Desc: 'Upload the photo to the Krishi-Rakshak app. Works even with low internet.',
      step3: '3. Get Instant Diagnosis',
      step3Desc: 'Our AI analyzes the image and identifies the disease in seconds.',
      step4: '4. Receive Treatment Plan',
      step4Desc: 'Get a simple, actionable treatment plan in your local language.',
    },
    footer: {
      rights: '© {year} Krishi-Rakshak. All rights reserved.',
    }
  },
  hi: {
    nav: {
      home: 'होम',
      features: 'विशेषताएँ',
      about: 'हमारे बारे में',
      howItWorks: 'यह काम किस प्रकार करता है',
      useApp: 'ऐप का उपयोग करें',
      language: 'English',
    },
    hero: {
      title1: 'AI से अपनी फसलों की रक्षा करें।',
      title2: 'तुरंत रोग निदान।',
      subtitle: 'कृषि-रक्षक एक तस्वीर से तुरंत, सटीक फसल रोग निदान प्रदान करता है। अनुमान लगाना बंद करें, अपनी फसल और आय को बचाना शुरू करें।',
      upload: 'फोटो अपलोड करें',
      learnMore: 'और जानें',
      cropLoss: 'फसल का नुकसान',
      savedIncome: 'बचाई गई आय',
    },
    features: {
      title: 'आपकी फसलों के लिए एक AI शील्ड',
      subtitle: 'पता लगाने से लेकर उपचार तक, अपनी खेती की सुरक्षा के लिए सब कुछ प्राप्त करें।',
      f1Title: 'तुरंत निदान',
      f1Desc: '2 सेकंड से भी कम समय में 92-95% सटीक रोग पहचान प्राप्त करें।',
      f2Title: 'कार्रवाई योग्य समाधान',
      f2Desc: 'अपनी फसलों को बचाने और कीटनाशकों का उपयोग 40% तक कम करने के लिए AI-जनित उपचार योजनाएँ प्राप्त करें।',
      f3Title: 'ऑफलाइन और बहुभाषी',
      f3Desc: 'हर भारतीय किसान के लिए बनाया गया। बिना इंटरनेट के काम करता है और हिंदी, अंग्रेजी और क्षेत्रीय भाषाओं का समर्थन करता है।',
    },
    about: {
      title: 'कृषि-रक्षक में आपका स्वागत है',
      subtitle: 'हम अनुमान को निश्चितता में बदलकर किसानों को सशक्त बनाते हैं।',
      p1: 'हर साल, भारत कीटों और बीमारियों से अपनी <span class="font-bold">40% से अधिक फसलें</span> खो देता है, जिनकी कीमत <span class="font-bold">₹90,000 करोड़</span> है। छोटे किसान सबसे ज्यादा पीड़ित होते हैं, क्योंकि बीमारियों की पहचान में यह "अनुमान" देर से उपचार, पैसे की बर्बादी और आजीविका को नष्ट कर देता है।',
      p2: 'हमने इस समस्या को हल करने के लिए कृषि-रक्षक का निर्माण किया। हमारी AI-संचालित शील्ड एक साधारण तस्वीर से तत्काल और सटीक निदान प्रदान करती है, जिससे किसानों को तेजी से कार्य करने, अपनी फसलों को बचाने और अपनी आय की रक्षा करने की शक्ति मिलती है।',
      learnMore: 'हमारे मिशन के बारे में और जानें',
    },
    stats: {
      s1: 'निदान सटीकता',
      s2: 'निदान गति',
      s3: 'कीटनाशकों में कमी',
      s4: 'समर्थित भाषाएँ',
    },
    howItWorks: {
      title: 'यह काम किस प्रकार करता है',
      subtitle: 'आपकी फसलों को बचाने के लिए एक सरल, 4-चरणीय प्रक्रिया।',
      step1: '1. एक तस्वीर लें',
      step1Desc: 'अपने स्मार्टफोन का उपयोग करके प्रभावित फसल के पत्ते की एक स्पष्ट तस्वीर लें।',
      step2: '2. ऐप पर अपलोड करें',
      step2Desc: 'कृषि-रक्षक ऐप पर फोटो अपलोड करें। कम इंटरनेट पर भी काम करता है।',
      step3: '3. तुरंत निदान प्राप्त करें',
      step3Desc: 'हमारा AI तस्वीर का विश्लेषण करता है और सेकंडों में बीमारी की पहचान करता है।',
      step4: '4. उपचार योजना प्राप्त करें',
      step4Desc: 'अपनी स्थानीय भाषा में एक सरल, कार्रवाई योग्य उपचार योजना प्राप्त करें।',
    },
    footer: {
      rights: '© {year} कृषि-रक्षक। सर्वाधिकार सुरक्षित।',
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'hi' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);


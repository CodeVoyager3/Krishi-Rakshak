import React from 'react';
import { Leaf, Camera, Upload, Brain, FileText, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import krishi2Image from '../assets/krishi2.png';
import { useLanguage } from '../contexts/LanguageContext';
import ImageUpload from '../components/ImageUpload';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
};

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Hero t={t} />
      <Features t={t} />
      <About t={t} />
      <Stats t={t} />
      <HowItWorks t={t} />
    </main>
  );
}

// Hero Section
function Hero({ t }) {
  return (
    <section className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  overflow-x-hidden rounded-3xl my-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div> */}
        <img src={krishi2Image} alt="Background" className='absolute inset-0 w-full h-full object-cover rounded-3xl opacity-50'/>
      </div>
      
      <div className="relative z-10 py-24 md:py-12 lg:py-18">
        <motion.div 
          className="flex items-center justify-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
         
          <div className="text-center md:text-left">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                <Leaf className="h-4 w-4" />
                AI-Powered Crop Protection
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-emerald-900 leading-tight  tracking-tighter text-center"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.hero.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mt-2 ">
                {t.hero.title2}
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-emerald-700/90 max-w-lg mx-auto md:mx-4 leading-relaxed font-semibold"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ImageUpload t={t} />
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-base font-semibold rounded-xl text-emerald-600 bg-white/50 backdrop-blur-sm hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t.hero.learnMore}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-6 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white"></div>
                </div>
                <span className="text-sm text-emerald-700 font-medium">Trusted by 10K+ farmers</span>
              </div>
            </motion.div>
          </div>
          
          {/* Image */}
          {/* <motion.div 
            className="relative"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="./farmer.gif"
                alt="Happy farmer with healthy crops"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>
        
            
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function Features({ t }) {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      title: t.features.f1Title,
      description: t.features.f1Desc,
      img: 'https://placehold.co/400x300/c7f9cc/1f2922?text=AI+Scan+on+Leaf',
      gradient: "from-emerald-50 to-green-50",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-green-500 to-green-600",
      title: t.features.f2Title,
      description: t.features.f2Desc,
      img: 'https://placehold.co/400x300/bbf7d0/1f2922?text=AI+Treatment+Plan',
      gradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      iconBg: "bg-gradient-to-br from-emerald-600 to-green-600",
      title: t.features.f3Title,
      description: t.features.f3Desc,
      img: 'https://placehold.co/400x300/a7f3d0/1f2922?text=Works+Offline',
      gradient: "from-emerald-50 via-green-50 to-emerald-50",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50/30 overflow-x-hidden rounded-3xl my-4">
      <div>
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-emerald-900"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.features.title}
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-emerald-700/80 text-center max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.features.subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 ${feature.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-emerald-700/80 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function About({ t }) {
  return (
    <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-x-hidden rounded-3xl my-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            className="order-2 md:order-1 relative"
            variants={slideInFromLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/600x450/6ee7b7/1f2922?text=Krishi-Rakshak+in+Action"
                alt="Farmer using Krishi-Rakshak app"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200/50 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200/50 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="order-1 md:order-2"
            variants={slideInFromRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-900 leading-tight">
              {t.about.title}
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              {t.about.subtitle}
            </p>
            {/* Using dangerouslySetInnerHTML to preserve bold tags from translation */}
            <div className="mt-6 space-y-4">
              <p 
                className="text-lg text-emerald-700/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.about.p1 }} 
              />
              <p className="text-lg text-emerald-700/90 leading-relaxed">
                {t.about.p2}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center mt-8 px-6 py-3 text-lg font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all duration-300 group border border-emerald-200"
            >
              {t.about.learnMore}
              <span aria-hidden="true" className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats({ t }) {
  const stats = [
    { value: '95%', label: t.stats.s1, icon: <ShieldCheck className="h-6 w-6" /> },
    { value: '<2 sec', label: t.stats.s2, icon: <Brain className="h-6 w-6" /> },
    { value: '40%', label: t.stats.s3, icon: <Leaf className="h-6 w-6" /> },
    { value: '10+', label: t.stats.s4, icon: <Globe className="h-6 w-6" /> },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/50 to-white overflow-x-hidden rounded-3xl my-4">
      <div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="group relative text-center p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {stat.icon}
              </div>
              
              <motion.p 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-3 text-sm md:text-base font-semibold text-emerald-800">
                {stat.label}
              </p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks({ t }) {
  const steps = [
    {
      icon: <Camera className="h-6 w-6 text-white" />,
      number: '01',
      title: t.howItWorks.step1,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: <Upload className="h-6 w-6 text-white" />,
      number: '02',
      title: t.howItWorks.step2,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      number: '03',
      title: t.howItWorks.step3,
      description: t.howItWorks.step3Desc,
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      number: '04',
      title: t.howItWorks.step4,
      description: t.howItWorks.step4Desc,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-x-hidden rounded-t-3xl mt-4 mb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 rounded-3xl">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-emerald-800/50 text-emerald-300 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Simple Process
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.howItWorks.title}
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-emerald-300/90 text-center max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </div>

        <motion.div className="mt-16 relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Connection Line - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title} 
                className="relative flex flex-col items-center text-center group"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-6xl font-extrabold text-emerald-900/30 leading-none">{step.number}</span>
                </div>
                
                {/* Icon Circle */}
                <div className="relative shrink-0 z-10">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-2xl group-hover:scale-110 group-hover:shadow-emerald-500/50 transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500 opacity-0 group-hover:opacity-50 animate-ping"></div>
                </div>
                
                {/* Content */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-emerald-300/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-5 lg:-right-8 text-emerald-600 z-20">
                    <span className="text-3xl">→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


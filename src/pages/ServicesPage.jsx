import React, { useState, useEffect } from "react";
import { 

  FaCode,

  FaPhone,

  FaMobile,
  FaDesktop,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,

} from "react-icons/fa";

// Network Pattern Component
const NetworkPattern = ({ className = "", animate = false }) => (
  <div className={`absolute ${className} ${animate ? "animate-pulse" : ""}`}>
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full text-[#6C47FF] opacity-10"
    >
      <defs>
        <pattern
          id="network-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="0" cy="0" r="1" fill="currentColor" />
          <circle cx="40" cy="0" r="1" fill="currentColor" />
          <circle cx="0" cy="40" r="1" fill="currentColor" />
          <circle cx="40" cy="40" r="1" fill="currentColor" />
          <line x1="20" y1="20" x2="0" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#network-pattern)" />
    </svg>
  </div>
);

// Floating Network Nodes
const FloatingNodes = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <div className="relative w-full h-full">
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#6C47FF] rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-[#6C47FF] rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-[#6C47FF] rounded-full opacity-15 animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  </div>
);


const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "تطوير التطبيقات المحمولة",
      description: "نطور تطبيقات محمولة متطورة لنظامي iOS و Android باستخدام أحدث التقنيات",
      icon: FaMobile,
      features: ["تطبيقات أصلية", "تطبيقات هجينة", "واجهات مستخدم متقدمة", "تحسين الأداء"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description: "نصمم ونطور مواقع إلكترونية متجاوبة وسريعة تناسب جميع الأجهزة",
      icon: FaDesktop,
      features: ["تصميم متجاوب", "سرعة التحميل", "تحسين محركات البحث", "لوحات تحكم"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "الحلول السحابية",
      description: "نقدم حلول سحابية متكاملة لتحسين الأداء وتوفير التكاليف",
      icon: FaCloud,
      features: ["التخزين السحابي", "الخوادم المُدارة", "النسخ الاحتياطي", "الحماية المتقدمة"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "الأمن السيبراني",
      description: "نحمي بياناتك وأنظمتك من التهديدات السيبرانية بأحدث تقنيات الحماية",
      icon: FaShieldAlt,
      features: ["مراقبة مستمرة", "كشف التهديدات", "حماية البيانات", "تدريب الموظفين"],
      color: "from-red-500 to-orange-600"
    },
    {
      title: "تحليل البيانات",
      description: "نحول بياناتك إلى رؤى قابلة للتنفيذ لاتخاذ قرارات مدروسة",
      icon: FaChartLine,
      features: ["تحليل متقدم", "تقارير تفاعلية", "ذكاء اصطناعي", "تنبؤات مستقبلية"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "الاستشارات التقنية",
      description: "نقدم استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة",
      icon: FaLightbulb,
      features: ["تقييم الأنظمة", "التخطيط الاستراتيجي", "تحسين العمليات", "التحول الرقمي"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "التحليل والدراسة",
      description: "نحلل متطلباتك ونضع خطة شاملة للمشروع",
      icon: FaLightbulb
    },
    {
      step: "02",
      title: "التصميم والتطوير",
      description: "نصمم ونطور الحل باستخدام أفضل الممارسات",
      icon: FaCode
    },
    {
      step: "03",
      title: "الاختبار والتحسين",
      description: "نختبر الحل بدقة ونحسن الأداء",
      icon: FaCheckCircle
    },
    {
      step: "04",
      title: "التسليم والدعم",
      description: "نسلم المشروع ونقدم دعم مستمر",
      icon: FaHandshake
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <NetworkPattern className="top-0 right-0 w-64 h-64 md:w-96 md:h-96" animate />
      <FloatingNodes className="top-20 left-4 md:left-10 w-32 h-32 md:w-64 md:h-64" />
      <NetworkPattern className="bottom-20 left-0 w-48 h-48 md:w-80 md:h-80" />
      <FloatingNodes className="bottom-10 right-4 md:right-20 w-32 h-32 md:w-48 md:h-48" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Hero Section */}
        <div className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-block mb-6">
            <div className="w-16 md:w-20 h-1 bg-gradient-to-l from-[#6C47FF] to-[#8B5CF6] mx-auto mb-4 md:mb-6"></div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#000] mb-4 md:mb-6">
              خدماتنا
            </h1>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] mx-auto"></div>
          </div>
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            نقدم مجموعة شاملة من الخدمات التقنية المتطورة لمساعدتك في تحقيق أهدافك الرقمية
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 transform transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className={`relative bg-white p-6 md:p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 ${
                  activeService === index ? 'border-[#6C47FF]' : 'border-slate-200'
                } hover:border-[#6C47FF]/50 h-full`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6C47FF]/10 to-[#8B5CF6]/10 rounded-2xl flex items-center justify-center text-[#6C47FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#000] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-[#6C47FF] text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className={`mb-12 md:mb-20 transform transition-all duration-1000 delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000] mb-4">
              كيف نعمل
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              عملية منهجية لضمان تحقيق أفضل النتائج
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#6C47FF] font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#000] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <NetworkPattern className="top-0 right-0 w-full h-full opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                جاهز لبدء مشروعك؟
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                تواصل معنا اليوم ودعنا نحول أفكارك إلى واقع رقمي مبهر
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center justify-center h-12 gap-2 px-6 md:px-8 text-lg font-medium tracking-wide text-[#6C47FF] transition duration-300 rounded-xl shadow-lg whitespace-nowrap bg-white hover:bg-gray-50 hover:shadow-xl focus:bg-gray-50 focus:shadow-xl focus-visible:outline-none">
                  <span>احصل على استشارة مجانية</span>
                  <FaRocket />
                </button>
                <button className="inline-flex items-center justify-center h-12 gap-2 px-6 md:px-8 text-lg font-medium tracking-wide text-white transition duration-300 rounded-xl border-2 border-white hover:bg-white hover:text-[#6C47FF] focus:bg-white focus:text-[#6C47FF] focus-visible:outline-none">
                  <FaPhone />
                  <span>اتصل بنا</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage

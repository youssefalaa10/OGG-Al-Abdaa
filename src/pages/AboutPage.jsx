import React, { useState, useEffect } from "react";
import { 
  FaNetworkWired, 
  FaUsers, 
  FaAward, 
  FaBolt, 
  FaGlobe,
  FaCode,
  FaPalette,
  FaTasks,
  FaCog
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

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "مشروع منجز", icon: FaAward },
    { number: "50+", label: "عميل راضي", icon: FaUsers },
    { number: "10+", label: "سنوات خبرة", icon: FaAward },
    { number: "24/7", label: "دعم مستمر", icon: FaBolt },
  ];

  const values = [
    {
      title: "الأصالة والمعاصرة",
      description:
        "نجمع بين التراث السعودي الأصيل والتقنيات الحديثة لنقدم حلولاً متميزة تلبي احتياجات العصر",
      icon: FaGlobe,
    },
    {
      title: "الجودة والإتقان",
      description: "نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه، مع التركيز على التفاصيل والإتقان",
      icon: FaAward,
    },
    {
      title: "الابتكار المستدام",
      description: "نطور حلولاً مبتكرة تساهم في تحقيق رؤية المملكة 2030 وتدعم التحول الرقمي",
      icon: FaNetworkWired,
    },
  ];

  const teamRoles = [
    {
      role: "فريق التطوير التقني",
      description: "متخصصون في تطوير الحلول التقنية المتقدمة",
      icon: FaCode,
      color: "from-blue-500 to-indigo-600"
    },
    {
      role: "فريق التصميم",
      description: "خبراء في تصميم واجهات المستخدم والتجربة الرقمية",
      icon: FaPalette,
      color: "from-purple-500 to-pink-600"
    },
    {
      role: "فريق إدارة المشاريع",
      description: "ضمان تسليم المشاريع في الوقت المحدد وبأعلى جودة",
      icon: FaTasks,
      color: "from-green-500 to-emerald-600"
    },
    {
      role: "فريق الدعم التقني",
      description: "دعم مستمر وصيانة للحلول المطورة",
      icon: FaCog,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Content */}
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
        dir="rtl"
      >
        {/* Background Elements */}
        <NetworkPattern className="top-0 right-0 w-96 h-96" animate />
        <FloatingNodes className="top-20 left-10 w-64 h-64" />
        <NetworkPattern className="bottom-20 left-0 w-80 h-80" />
        <FloatingNodes className="bottom-10 right-20 w-48 h-48" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-l from-[#6C47FF] to-[#8B5CF6] mx-auto mb-6"></div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#000] mb-6">
                من نحن
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] mx-auto"></div>
            </div>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              نحن شركة سعودية رائدة في مجال التقنية والابتكار، نعمل على تشكيل
              مستقبل رقمي يحاكي طموحات المملكة ويحقق رؤية 2030
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#6C47FF]/20 to-[#8B5CF6]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white mb-6">
                    <FaNetworkWired size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#000] mb-6">قصتنا</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    بدأت رحلتنا من قلب المملكة العربية السعودية، مستلهمين من
                    تراثنا العريق ومتطلعين نحو مستقبل تقني مشرق. نؤمن بأن الجمع
                    بين الأصالة والمعاصرة هو السبيل لتحقيق التميز والوصول للقمة.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-full flex items-center justify-center text-white">
                      <FaUsers size={20} />
                    </div>
                    <span className="text-gray-600">فريق من 50+ متخصص</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 group"
                    >
                      <div className="text-[#6C47FF] mb-3 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={32} />
                      </div>
                      <div className="text-3xl font-bold text-[#6C47FF] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div
            className={`mb-20 transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#000] mb-4">
                قيمنا الأساسية
              </h2>
              <p className="text-xl text-gray-600">
                المبادئ التي توجه عملنا وتحدد هويتنا المهنية
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-[#6C47FF]/30">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#6C47FF]/10 to-[#8B5CF6]/10 rounded-2xl flex items-center justify-center text-[#6C47FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#000] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div
            className={`mb-20 transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#000] mb-4">
                فرق العمل المتخصصة
              </h2>
              <p className="text-xl text-gray-600">
                فرق متنوعة من الخبراء والمتخصصين في مختلف المجالات التقنية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamRoles.map((team, index) => {
                const IconComponent = team.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative bg-white p-6 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#6C47FF]/30">
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br from-[#6C47FF]/10 to-[#8B5CF6]/10 rounded-2xl flex items-center justify-center text-[#6C47FF] mx-auto group-hover:scale-105 transition-transform duration-300`}>
                          <IconComponent size={28} />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-[#000] mb-3">
                          {team.role}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {team.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-3xl p-12 text-white relative overflow-hidden">
              <NetworkPattern className="top-0 right-0 w-full h-full opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  هل أنت مستعد للانطلاق؟
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  دعنا نساعدك في تحقيق أهدافك الرقمية والوصول لأعلى المستويات
                </p>
                <button className="inline-flex items-center justify-center h-12 gap-2 px-8 text-lg font-medium tracking-wide text-[#6C47FF] transition duration-300 rounded-xl shadow-lg whitespace-nowrap bg-white hover:bg-gray-50 hover:shadow-xl focus:bg-gray-50 focus:shadow-xl focus-visible:outline-none">
                  <span>تواصل معنا الآن</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
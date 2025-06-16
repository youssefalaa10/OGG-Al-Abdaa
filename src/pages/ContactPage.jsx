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
  FaCog,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMobile,
  FaDesktop,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
  FaPaperPlane
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

// Contact Page Component
const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "الهاتف",
      content: "+966 11 234 5678",
      link: "tel:+966112345678"
    },
    {
      icon: FaEnvelope,
      title: "البريد الإلكتروني",
      content: "info@yourcompany.sa",
      link: "mailto:info@yourcompany.sa"
    },
    {
      icon: FaMapMarkerAlt,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية",
      link: "#"
    },
    {
      icon: FaClock,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 - 18:00",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: FaWhatsapp, color: "text-green-500", link: "#" },
    { icon: FaTwitter, color: "text-blue-400", link: "#" },
    { icon: FaLinkedin, color: "text-blue-600", link: "#" },
    { icon: FaInstagram, color: "text-pink-500", link: "#" }
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
              تواصل معنا
            </h1>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] mx-auto"></div>
          </div>
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم ودعنا نبدأ رحلة النجاح معاً
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C47FF] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C47FF] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C47FF] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    موضوع الرسالة
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C47FF] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="ما هو موضوع رسالتك؟"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6C47FF] focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#000] mb-1">{info.title}</h3>
                        <a href={info.link} className="text-gray-600 hover:text-[#6C47FF] transition-colors duration-300">
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 mt-8">
              <h3 className="text-xl font-bold text-[#000] mb-4">تابعنا على</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
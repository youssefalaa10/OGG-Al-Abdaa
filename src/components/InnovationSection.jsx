import React, { useState, useEffect } from 'react';
import bgImage from '../assets/ogghero.png';
const InnovationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "الذكاء الاصطناعي",
      subtitle: "استثمار إمكانيات الذكاء الاصطناعي لاتخاذ قرارات أكثر قائمة على البيانات",
      image: `${bgImage}`,
      delay: "delay-100"
    },
    {
      title: "الاستشارات التقنية",
      subtitle: "نصائح حديثة في الاستراتيجيات التقنية لدفع مجال الأعمال",
      image: `${bgImage}`,
      delay: "delay-200"
    },
    {
      title: "الحلول الرقمية",
      subtitle: "ابتكارات تقنية متقدمة لتحديات الأعمال في عالم رقمي",
      image: `${bgImage}`,
      delay: "delay-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            نلوم الابتكار ونشكّل الأفكار
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استكشف خدماتنا المصممة لتعزيز الابتكار وتجاوز التوقعات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${service.delay}`}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Animation */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.subtitle}
                  </p>
                  
                  {/* Hover Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <button className="bg-gradient-to-l from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      اعرف المزيد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Animation Elements */}
        <div className="relative mt-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-32 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Custom Styles for Arabic Text */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap');
        
        * {
          font-family: 'Noto Sans Arabic', sans-serif;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default InnovationSection;
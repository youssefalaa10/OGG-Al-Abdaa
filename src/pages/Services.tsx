import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  TrendingUp,
  Bot,
  Cloud,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      category: 'التطوير التقني',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'مواقع تعريفية ومتاجر إلكترونية',
        'صفحات هبوط عالية التحويل',
        'تطبيقات الجوال المتقدمة',
        'تطبيقات ويب تفاعلية (PWA)',
        'حجز وإدارة النطاقات',
        'استضافة عالية الأداء'
      ]
    },
    {
      category: 'الأنظمة المؤسسية',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'حلول ERP وCRM مخصصة',
        'تكامل APIs وبوابات الدفع',
        'أنظمة إدارة المحتوى',
        'أتمتة العمليات الإدارية',
        'حلول البنية التحتية السحابية',
        'تحليلات البيانات المتقدمة'
      ]
    },
    {
      category: 'التسويق الرقمي',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'استراتيجيات SEO متقدمة',
        'إدارة الحملات الإعلانية',
        'إنتاج محتوى إبداعي',
        'تحليلات الأداء والتقارير',
        'إدارة وسائل التواصل',
        'التسويق بالمحتوى'
      ]
    },
    {
      category: 'الأمان والدعم',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'دعم فني 24/7',
        'تحديثات أمنية دورية',
        'مراقبة الأنظمة المستمرة',
        'خدمات النسخ الاحتياطي',
        'فحص الثغرات الأمنية',
        'استشارات الأمان السيبراني'
      ]
    },
    {
      category: 'الأتمتة الذكية',
      icon: Bot,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'أتمتة سير العمل',
        'تحليلات تنبؤية ذكية',
        'روبوتات الدردشة الذكية',
        'أتمتة التسويق',
        'تخصيص المحتوى الذكي',
        'حلول الذكاء الاصطناعي'
      ]
    },
    {
      category: 'الاستشارات التقنية',
      icon: Settings,
      color: 'from-teal-500 to-blue-500',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: [
        'تحليل الاحتياجات التقنية',
        'تصميم الحلول المخصصة',
        'تطوير استراتيجيات رقمية',
        'تحسين الأداء والكفاءة',
        'التدريب التقني المتخصص',
        'إدارة المشاريع التقنية'
      ]
    }
  ];

  const features = [
    { icon: Zap, title: 'سرعة في التنفيذ', desc: 'تسليم المشاريع في الوقت المحدد' },
    { icon: BarChart3, title: 'نتائج مضمونة', desc: 'حلول مثبتة الفعالية' },
    { icon: Headphones, title: 'دعم مستمر', desc: 'خدمة عملاء 24/7' },
    { icon: Cloud, title: 'تقنيات حديثة', desc: 'أحدث الأدوات والتقنيات' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              🛠️ خدماتنا المتميزة
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              حلول تقنية <span className="text-gradient">شاملة ومتطورة</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              نقدم مجموعة واسعة من الخدمات التقنية المتخصصة التي تلبي جميع احتياجات الأفراد والشركات 
              في العصر الرقمي الحديث
            </p>

            <Link to="/contact" className="btn-primary">
              احصل على استشارة مجانية
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-3`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{service.category}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (itemIndex * 0.05) }}
                        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 ml-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary-500 hover:to-secondary-500 text-gray-700 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <span>اطلب الخدمة</span>
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              لماذا تختار أوج الإبداع؟
            </h2>
            <p className="text-xl opacity-90">
              نتميز بخبرتنا الواسعة والتزامنا بأعلى معايير الجودة والابتكار
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              هل تحتاج خدمة مخصصة؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              نحن نقدم حلولاً مخصصة تماماً لاحتياجاتك الفريدة. تواصل معنا لمناقشة مشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                تواصل معنا الآن
              </Link>
              <Link to="/portfolio" className="px-8 py-3 border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300">
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
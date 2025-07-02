import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Eye, Filter, Code, Smartphone, Globe, Database } from 'lucide-react';
import qutof from '/qutof.png';
import Rawaed from '/Rawaed.png'
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع المشاريع', icon: Eye },
    { id: 'web', name: 'مواقع الويب', icon: Globe },
    { id: 'mobile', name: 'تطبيقات الجوال', icon: Smartphone },
    { id: 'system', name: 'أنظمة مؤسسية', icon: Database },
    { id: 'ecommerce', name: 'متاجر إلكترونية', icon: Code },
  ];

  const projects = [
    {
      id: 1,
      title: 'روائد الحلول',
      description: 'نحن شركة متخصصة في تمكين الشركات في كل مرحلة من مراحل نموها وتطويرها، مع تركيز استراتيجي على تطوير الأعمال والحلول التقنية والمالية',    
      category: 'Bussiness',
      image: Rawaed,
      technologies: ['Business Consulting', 'Tech Solutions', 'Financial Services'],
      client: 'روائد الحلول',
      year: '2025'
    },
    {
      id: 2,
      title: 'تطبيق قطوف فرش',
      description: 'تطبيق جوال لبيع وتوصيل الخضروات والفواكه الطازجة للمنازل مع خيارات دفع متنوعة',
      category: 'mobile',
      image: qutof,
      technologies: ['Flutter', 'Supabase', 'Bloc'],
      client: 'قطوف فرش',
      year: '2025'
    },
    {
      id: 3,
      title: 'نظام إدارة المستشفيات',
      description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
      category: 'system',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      client: 'مستشفى الرعاية الطبية',
      year: '2022'
    },
    {
      id: 4,
      title: 'موقع الشركة التعريفي',
      description: 'موقع تعريفي حديث مع تصميم متجاوب وتحسين محركات البحث',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      client: 'شركة الاستشارات المالية',
      year: '2023'
    },
    {
      id: 5,
      title: 'منصة التعلم الإلكتروني',
      description: 'منصة تعليمية تفاعلية مع نظام إدارة الدورات والطلاب',
      category: 'web',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'WebRTC'],
      client: 'معهد التطوير المهني',
      year: '2022'
    },
    {
      id: 6,
      title: 'تطبيق الخدمات المصرفية',
      description: 'تطبيق مصرفي آمن مع ميزات التحويل والدفع الرقمي',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'JWT'],
      client: 'البنك الرقمي الحديث',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Portfolio Background"
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
              💼 أعمالنا المميزة
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              معرض <span className="text-gradient">أعمالنا</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              استكشف مجموعة من أفضل المشاريع التي نفذناها بنجاح لعملائنا في مختلف القطاعات
            </p>

            <Link to="/contact" className="btn-primary">
              ابدأ مشروعك معنا
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2 space-x-reverse">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 font-semibold">{project.year}</span>
                    <span className="text-sm text-gray-500">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    عرض التفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              إنجازاتنا في أرقام
            </h2>
            <p className="text-xl opacity-90">
              نفتخر بالثقة التي وضعها عملاؤنا فينا
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '70+', label: 'مشروع مكتمل' },
              { number: '300+', label: 'عميل راضٍ' },
              { number: '50+', label: 'شريك تقني' },
              { number: '99%', label: 'معدل النجاح' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
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
              هل لديك مشروع في ذهنك؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              دعنا نحول فكرتك إلى واقع رقمي مذهل. تواصل معنا اليوم لبدء رحلة النجاح
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                ابدأ مشروعك الآن
              </Link>
              <Link to="/services" className="px-8 py-3 border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
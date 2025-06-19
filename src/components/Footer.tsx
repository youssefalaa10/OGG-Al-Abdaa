import React from 'react';
import { motion } from 'framer-motion';
import { 
  
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp
} from 'lucide-react';
import oggLogo from '/OGG-LOGO.png';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const services = [
    'تطوير المواقع الإلكترونية',
    'تطبيقات الجوال',
    'الأنظمة المؤسسية',
    'التسويق الرقمي',
    'الأمان السيبراني',
    'الاستشارات التقنية',
  ];

  const socialLinks = [
    { icon: Globe, link: '#', name: 'الموقع الإلكتروني' },
    { icon: Linkedin, link: '#', name: 'لينكد إن' },
    { icon: Twitter, link: '#', name: 'تويتر' },
    { icon: Instagram, link: '#', name: 'إنستغرام' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.03,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="bg-primary-500 rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
  <img
    src={oggLogo}
    alt="OGG Logo"
    className="w-45 h-16 object-contain rounded-xl"
  />
</div>

              
              <p className="text-gray-300 mb-6 leading-relaxed">
                شركة رائدة في مجال التقنية بالمملكة العربية السعودية، نقدم حلولاً رقمية متطورة 
                تمكن الأفراد والشركات من المنافسة بثقة في البيئة الرقمية.
              </p>
              
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300"
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-2 h-2 bg-secondary-500 rounded-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                    <a href="mailto:info@awjtech.sa" className="text-gray-300 hover:text-primary-400 transition-colors">
                      info@awjtech.sa
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">رقم الهاتف</p>
                    <a href="tel:+966123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                      +966 12 345 6789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">العنوان</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      جدة، حي الفيصلية<br />
                      برج تلالين، طريق الملك فهد
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © 2025 أوج الإبداع لتقنية المعلومات. جميع الحقوق محفوظة.
              </motion.p>
              
              <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-primary-400 transition-colors">شروط الاستخدام</a>
                <a href="#" className="hover:text-primary-400 transition-colors">ملفات تعريف الارتباط</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
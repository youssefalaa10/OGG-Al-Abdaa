import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeft,
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  Code,
  Smartphone,
  Database,
  Shield,
  CheckCircle,
  Zap,
  Globe,
  Target,
  Lightbulb,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: Users,
      value: "300+",
      label: "عميل راضٍ",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      value: "70+",
      label: "مشروع مكتمل",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: "معدل النجاح",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      value: "4.9",
      label: "تقييم العملاء",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "تطوير المواقع الإلكترونية",
      description: "مواقع حديثة وسريعة مع تصميم متجاوب",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["تصميم متجاوب", "تحسين محركات البحث", "أمان متقدم"],
    },
    {
      icon: Smartphone,
      title: "تطبيقات الجوال",
      description: "تطبيقات ذكية ومبتكرة لجميع المنصات",
      image:
        "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["متعدد المنصات", "واجهة سهلة", "أداء عالي"],
    },
    {
      icon: Database,
      title: "الأنظمة المؤسسية",
      description: "حلول متكاملة لإدارة الأعمال",
      image:
        "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["إدارة شاملة", "تقارير ذكية", "تكامل سلس"],
    },
    {
      icon: Shield,
      title: "الأمان السيبراني",
      description: "حماية متقدمة للبيانات والأنظمة",
      image:
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["حماية متقدمة", "مراقبة مستمرة", "استجابة سريعة"],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "سرعة في التنفيذ",
      description: "نلتزم بالمواعيد المحددة مع ضمان الجودة العالية",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Target,
      title: "حلول مخصصة",
      description: "نصمم حلول تقنية تناسب احتياجاتك الفريدة",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Lightbulb,
      title: "ابتكار مستمر",
      description: "نستخدم أحدث التقنيات والأدوات المتطورة",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Heart,
      title: "دعم مستمر",
      description: "فريق دعم فني متاح على مدار الساعة",
      color: "from-red-400 to-rose-500",
    },
  ];

  const testimonials = [
    {
      content:
        "فريق أوج الإبداع قدم لنا حلول تقنية متطورة ساعدتنا في تطوير أعمالنا بشكل كبير. الاحترافية والجودة كانت استثنائية.",
      rating: 5,
    },
    {
      content:
        "تطوير متجرنا الإلكتروني كان تجربة رائعة. الموقع سريع وجميل وزاد من مبيعاتنا بنسبة 300% في أول شهر.",
      rating: 5,
    },
    {
      // name: "محمد الشهري",
      // position: "مدير عام - مستشفى النور",
      content:
        "نظام إدارة المستشفى الذي طوروه لنا سهل علينا العمل كثيراً. الآن نستطيع إدارة المرضى والمواعيد بكفاءة عالية.",
      rating: 5,
      // image:
      //   "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center"
      >
        {/* Background with Clip Path */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img
              src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Technology in Saudi Arabia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-secondary-900/90"></div>
          </div>

          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-20 sm:bottom-32 left-10 sm:left-20 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-xl"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-right text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/30"
                >
                  الشريك التقني الأول في المملكة العربية السعودية
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                >
                  <span className="text-gradient-white">أوج الإبداع</span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-2xl sm:text-4xl md:text-5xl"
                  >
                    لتقنية المعلومات
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
                >
                  نحن شركة رائدة في مجال التقنية بالمملكة العربية السعودية، نقدم
                  حلولاً رقمية متطورة تمكن الأفراد والشركات من المنافسة بثقة في
                  البيئة الرقمية المستمرة
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0"
              >
                <Link
                  to="/contact"
                  className="group btn-primary bg-white text-white hover:bg-gray-100 hover:text-white flex items-center justify-center font-bold shadow-lg"
                >
                  <span>ابدأ مشروعك الآن</span>
                  <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/portfolio"
                  className="group flex items-center justify-center space-x-2 sm:space-x-3 space-x-reverse px-6 sm:px-8 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">شاهد أعمالنا</span>
                </Link>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6"
              >
                {[Code, Smartphone, Database, Shield].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/20"
                  >
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Visual Element with Clip Path */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div
                  className="w-full h-80 lg:h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 85%)",
                  }}
                >
                  <img
                    src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Saudi Technology Innovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm">سنوات خبرة</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section
        ref={statsRef}
        className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              إنجازاتنا <span className="text-gradient">بالأرقام</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              نفتخر بثقة عملائنا وشراكتنا الناجحة معهم
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={statsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div
                  className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-2xl transition-all duration-300`}
                >
                  <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        ref={servicesRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              خدماتنا <span className="text-gradient">المتميزة</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              نقدم مجموعة شاملة من الحلول التقنية المتطورة التي تلبي جميع
              احتياجاتك الرقمية
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  <div
                    className="relative h-40 sm:h-48 overflow-hidden"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/30">
                        <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-gray-500"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 ml-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="block w-full py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-sm text-center"
                    >
                      اعرف المزيد
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link
              to="/services"
              className="btn-primary group inline-flex items-center justify-center px-6 py-3 rounded-md text-sm sm:text-base font-bold transition-all duration-300"
            >
              <span>استكشف جميع الخدمات</span>
              <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mr-2 rtl:ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Animations */}
      <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              لماذا <span className="text-gradient">نحن الأفضل؟</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              نتميز بخبرتنا الواسعة والتزامنا بأعلى معايير الجودة والابتكار في
              كل مشروع
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={featuresInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group px-4"
              >
                <div
                  className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              ماذا يقول <span className="text-gradient">عملاؤنا</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              آراء وتجارب عملائنا الكرام مع خدماتنا المتميزة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.rating}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={
                  testimonialsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-primary-500 mb-3 sm:mb-4" />

                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover ml-3 sm:ml-4 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-tight">
                        {testimonial.position}
                      </p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Advanced Animation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              هل أنت مستعد لبدء{" "}
              <span className="text-yellow-300">مشروعك التقني؟</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-4">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
              الرقمية وتطوير أعمالك بأحدث التقنيات المتاحة
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-center">
              {/* Contact Button */}
              <Link
                to="/contact"
                className="btn-secondary bg-white text-white hover:bg-gray-100 hover:text-white group font-bold shadow-lg px-6 sm:px-8 py-3 rounded-xl inline-flex items-center"
              >
                <span className="ml-2">تواصل معنا الآن</span>
                <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Portfolio Button */}
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group text-white hover:text-white/90 text-sm sm:text-base font-medium inline-flex items-center"
              >
                <span className="ml-2">شاهد أعمالنا</span>
                <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  Star,
  ArrowLeft,
  Shield,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  Building,
  Globe,
  Award,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Target,
  TrendingUp,
  FileText,
  Calendar,
  X,
  Play,
  Sparkles,
  Crown,
  Gem,
  Rocket,
  Briefcase,
  ChevronDown,
  Layers,
  PieChart,
  BarChart3,
  LineChart,
  Activity,
  Hexagon,
  Triangle,
  Square,
  Circle,
} from "lucide-react";

const InvestmentLicense: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsFormOpen(false);
  };

  const features = [
    {
      icon: Building,
      title: "بدون شركة خارجية",
      description: "لا تحتاج لشركة مسجلة خارج المملكة",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      shape: Square,
    },
    {
      icon: FileText,
      title: "بدون قوائم مالية",
      description: "لا حاجة لتقديم قوائم مالية معتمدة",
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      shape: Circle,
    },
    {
      icon: DollarSign,
      title: "بدون حد أدنى لرأس المال",
      description: "ابدأ بأي مبلغ تريده دون قيود",
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
      image:
        "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600",
      shape: Triangle,
    },
    {
      icon: Clock,
      title: "سرعة في الإنجاز",
      description: "استخراج الترخيص خلال أسبوع إلى شهر",
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      shape: Hexagon,
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "وفر 250,000 ريال",
      description: "على مدار 5 سنوات مقارنة بالترخيص العادي",
      amount: "250,000",
      unit: "ريال",
      color: "from-green-500 to-emerald-600",
      accent: "text-green-600",
      image:
        "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: TrendingUp,
      title: "رسوم سنوية منخفضة",
      description: "2,000 ريال بدلاً من 62,000 ريال سنوياً",
      amount: "2,000",
      unit: "ريال",
      color: "from-blue-500 to-indigo-600",
      accent: "text-blue-600",
      image:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Smartphone,
      title: "تطبيق إلكتروني مجاني",
      description: "تصميم وبرمجة تطبيق احترافي لنشاطك",
      amount: "مجاناً",
      unit: "",
      color: "from-purple-500 to-pink-600",
      accent: "text-purple-600",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const testimonials = [
    {
      name: "يوسف",
      business: "شركة لبيع الخضراوات والفواكه",
      content:
        "الاحترافية كانت واضحة من أول اجتماع. شرحوا لي الخطوات بالعامي وبساطة، وبعد ما رفعنا الملف عبر بوابة الوزارة جتنا الموافقة كأن الموضوع سهل من البداية!",
      rating: 5,
      avatar: "Y",
      image:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "عبدالله",
      business: "شركة لإدارة المعارض والمؤتمرات",
      content:
        "مرة حسّيت إن الموضوع صعب ووقت طويل، بس بعد ما تعاونا معاهم صار الملف كامل والتفاصيل واضحة. جيناهم طلبوا توضيح بسيط والأنشطة المطلوبة، وطلعنا الترخيص خلال شهر.",
      rating: 5,
      avatar: "ع",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "بندر",
      business: "شركة مقاولات",
      content:
        "أنا كنت جاي أقدم على ترخيص استثمار عادي، لكن بعد ما اقترحوا علينا الترخيص الريادي وشرح إضافة فكرة تقنية وتصميم تطبيق مخصص للنشاط، الملف صار متكامل، واللجنة وافقت علينا خلال 3 أسابيع!",
      rating: 5,
      avatar: "ب",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "الاستشارة الأولية",
      description: "نستمع لفكرتك ونقدم لك النصائح المناسبة",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      number: "02",
      title: "صياغة الفكرة التقنية",
      description: "نطور فكرة مبتكرة تناسب نشاطك وتلبي متطلبات الترخيص",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      number: "03",
      title: "تصميم التطبيق",
      description: "نصمم تجربة مستخدم سلسة وواجهات جذابة",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      number: "04",
      title: "تجهيز الملف الاستثماري",
      description: "نعد ملفاً متكاملاً يضمن الموافقة من الجهات المختصة",
      icon: FileText,
      color: "from-orange-500 to-red-500",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      number: "05",
      title: "التقديم والمتابعة",
      description: "نتولى إجراءات التقديم ومتابعة الطلب",
      icon: Clock,
      color: "from-indigo-500 to-purple-500",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      number: "06",
      title: "استخراج الترخيص",
      description: "بعد الموافقة، نستكمل إجراءات استخراج الترخيص",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      image:
        "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const comparison = [
    {
      feature: "شركة خارجية",
      regular: "مطلوبة",
      entrepreneurial: "غير مطلوبة",
      regularIcon: X,
      entrepreneurialIcon: CheckCircle,
    },
    {
      feature: "قوائم مالية",
      regular: "مطلوبة",
      entrepreneurial: "غير مطلوبة",
      regularIcon: X,
      entrepreneurialIcon: CheckCircle,
    },
    {
      feature: "الحد الأدنى لرأس المال",
      regular: "7 ملايين ريال",
      entrepreneurial: "لا يوجد حد أدنى",
      regularIcon: X,
      entrepreneurialIcon: CheckCircle,
    },
    {
      feature: "الرسوم السنوية",
      regular: "62,000 ريال",
      entrepreneurial: "2,000 ريال فقط",
      regularIcon: X,
      entrepreneurialIcon: CheckCircle,
    },
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section - Poster Style */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center py-20 lg:py-32"
      >
        {/* Background with Geometric Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-20 right-20 w-64 h-64 border-4 border-white/10 rounded-full"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-20 left-20 w-80 h-80 border-4 border-secondary-400/20 rounded-full"
            />

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-pink-400 rounded-full opacity-60"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            {/* Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 space-x-reverse px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-bold mb-12 shadow-2xl"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>عرض خاص محدود - خصم 15% لأول 10 عملاء</span>
                  <Crown className="w-5 h-5" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none"
                >
                  <span className="block text-white">أسس شركتك</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    في السعودية
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-6">
                    بدون شروط تعجيزية
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-medium"
                >
                  حوّل حلمك إلى حقيقة واستثمر في أرض الفرص
                  <br />
                  <span className="text-yellow-400 font-bold">
                    بدون شركة خارجية • بدون قوائم مالية • بدون حد أدنى لرأس
                    المال
                  </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-6 mb-16"
                >
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-black py-6 px-12 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-2 space-x-reverse">
                      <Rocket className="w-6 h-6" />
                      <span>احصل على استشارة مجانية</span>
                      <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  <a
                    href="https://wa.me/966531991229"
                    className="group flex items-center justify-center space-x-3 space-x-reverse px-10 py-6 border-3 border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg font-bold"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>تواصل عبر الواتساب</span>
                  </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm"
                >
                  <div className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">ضمان استرجاد المبلغ</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">استخراج خلال أسبوع</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">معتمد من الوزارة</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Visual Element - Card Design */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <div className="text-center text-white">
                    {/* Icon */}
                    <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Building className="w-14 h-14 text-black" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      ترخيص استثمار ريادي
                    </h3>

                    {/* Stats */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between bg-white/10 rounded-xl px-6 py-4">
                        <span className="font-semibold">الرسوم السنوية:</span>
                        <span className="font-black text-green-400 text-xl">
                          2,000 ريال
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-xl px-6 py-4">
                        <span className="font-semibold">مدة الاستخراج:</span>
                        <span className="font-black text-blue-400 text-xl">
                          أسبوع - شهر
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-xl px-6 py-4">
                        <span className="font-semibold">
                          رأس المال المطلوب:
                        </span>
                        <span className="font-black text-yellow-400 text-xl">
                          لا يوجد حد أدنى
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-10 -right-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-5 shadow-2xl"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-black">وفر</div>
                    <div className="text-lg font-bold">250,000 ريال</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-5 shadow-2xl"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-black">تطبيق</div>
                    <div className="text-lg font-bold">مجاني</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -left-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-2xl"
                >
                  <Gem className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Ultra Enhanced Magazine Style */}
      <section
        ref={featuresRef}
        className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-200/40 to-secondary-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-secondary-200/40 to-accent-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-4 space-x-reverse px-10 py-5 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-3xl text-2xl font-black mb-10 shadow-xl border-4 border-primary-200">
              <Target className="w-8 h-8" />
              <span>لماذا الترخيص الريادي؟</span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-10">
              تجاوز كل{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                العقبات
              </span>
            </h2>
            <p className="text-4xl text-gray-600 max-w-5xl mx-auto font-bold">
              ابدأ استثمارك في المملكة بأسهل الطرق وأقل التكاليف
            </p>
          </motion.div>

          {/* Ultra Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className={`relative ${feature.bgPattern} rounded-[2rem] p-10 group hover:shadow-2xl transition-all duration-700 border-4 border-gray-200 overflow-hidden`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                  />
                </div>

                {/* Enhanced Background Decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/70 to-transparent rounded-full -translate-y-24 translate-x-24"></div>

                {/* Geometric Shape */}
                <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <feature.shape className="w-16 h-16 text-gray-400" />
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-28 h-28 bg-gradient-to-r ${feature.color} rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-125 transition-transform duration-500 shadow-2xl border-4 border-white/60`}
                  >
                    <feature.icon className="w-14 h-14 text-white" />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 mb-6">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-bold leading-relaxed text-xl">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ultra Premium Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-[2rem] p-12 text-center hover:shadow-2xl transition-all duration-700 border-4 border-gray-100 group overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-opacity duration-700"
                  />
                </div>

                {/* Enhanced Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[2rem]`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-28 h-28 bg-gradient-to-r ${benefit.color} rounded-[1.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl border-4 border-white/60 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <benefit.icon className="w-14 h-14 text-white" />
                  </div>

                  <div className="mb-8">
                    <div
                      className={`text-6xl font-black ${benefit.accent} mb-4`}
                    >
                      {benefit.amount}
                    </div>
                    {benefit.unit && (
                      <div className="text-3xl font-bold text-gray-600">
                        {benefit.unit}
                      </div>
                    )}
                  </div>

                  <h4 className="text-3xl font-black text-gray-900 mb-6">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 font-bold leading-relaxed text-xl">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section - Ultra Enhanced Infographic Style */}
      <section className="py-32 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-primary-200/50 to-secondary-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-secondary-200/50 to-accent-200/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-4 space-x-reverse px-10 py-5 bg-white/95 backdrop-blur-md text-primary-700 rounded-3xl text-2xl font-black mb-10 shadow-2xl border-4 border-white/70">
              <Briefcase className="w-8 h-8" />
              <span>مراحل العمل معنا</span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-10">
              نرافقك في كل{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                خطوة
              </span>
            </h2>
            <p className="text-4xl text-gray-600 font-bold">
              من الفكرة إلى الترخيص في 6 خطوات بسيطة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white/95 backdrop-blur-md rounded-[2rem] p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 border-4 border-white/80 group overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-opacity duration-700"
                  />
                </div>

                {/* Step Number - Ultra Premium Design */}
                <div className="absolute -top-10 right-12 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl border-4 border-white/60">
                  {step.number}
                </div>

                <div className="relative z-10 mt-16">
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-125 transition-transform duration-500 shadow-2xl border-4 border-white/60`}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 mb-8">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 font-bold leading-relaxed text-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Ultra Enhanced Data Visualization */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-4 space-x-reverse px-10 py-5 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-3xl text-2xl font-black mb-10 shadow-xl border-4 border-primary-200">
              <TrendingUp className="w-8 h-8" />
              <span>مقارنة شاملة</span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-10">
              الفرق{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                الواضح
              </span>
            </h2>
            <p className="text-4xl text-gray-600 font-bold">
              اكتشف المزايا الحقيقية للترخيص الريادي
            </p>
          </motion.div>

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-100">
            {/* Header - Ultra Premium Design */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
              <div className="p-12 text-center border-r-4 border-white/30">
                <h3 className="text-3xl font-black">المتطلبات</h3>
              </div>
              <div className="p-12 text-center border-r-4 border-white/30">
                <h3 className="text-3xl font-black">الترخيص العادي</h3>
              </div>
              <div className="p-12 text-center">
                <h3 className="text-3xl font-black">الترخيص الريادي</h3>
              </div>
            </div>

            {/* Comparison Rows - Ultra Enhanced */}
            {comparison.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                className="grid grid-cols-3 border-b-4 border-gray-100 transition-all duration-500"
              >
                <div className="p-12 font-black text-gray-900 text-2xl border-r-4 border-gray-100">
                  {item.feature}
                </div>
                <div className="p-12 border-r-4 border-gray-100 text-center">
                  <div className="flex items-center justify-center space-x-5 space-x-reverse text-red-600">
                    <item.regularIcon className="w-10 h-10" />
                    <span className="font-black text-2xl">{item.regular}</span>
                  </div>
                </div>
                <div className="p-12 text-center">
                  <div className="flex items-center justify-center space-x-5 space-x-reverse text-green-600">
                    <item.entrepreneurialIcon className="w-10 h-10" />
                    <span className="font-black text-2xl">
                      {item.entrepreneurial}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Ultra Enhanced Social Proof */}
      <section
        ref={testimonialsRef}
        className="py-32 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-4 space-x-reverse px-10 py-5 bg-white/95 backdrop-blur-md text-primary-700 rounded-3xl text-2xl font-black mb-10 shadow-2xl border-4 border-white/70">
              <Users className="w-8 h-8" />
              <span>آراء عملائنا</span>
            </div>

            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-10">
              تجارب{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                حقيقية
              </span>
            </h2>
            <p className="text-4xl text-gray-600 font-bold">
              عملاء حققوا أحلامهم الاستثمارية معنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 p-8 lg:p-10 relative overflow-hidden group border-4 border-gray-100"
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.business}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-opacity duration-700"
                  />
                </div>

                {/* Enhanced Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-20 translate-x-20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Enhanced Rating */}
                  <div className="flex mb-6 lg:mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 mb-8 lg:mb-10 leading-relaxed italic font-bold text-lg lg:text-xl xl:text-2xl">
                    "{testimonial.content}"
                  </p>

                  {/* Author - Ultra Premium Design */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[1rem] flex items-center justify-center text-white font-black text-2xl lg:text-3xl mr-4 lg:mr-6 shadow-2xl border-4 border-white/60">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-xl lg:text-2xl xl:text-3xl">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-600 text-base lg:text-lg xl:text-xl font-bold">
                        {testimonial.business}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section - Ultra Enhanced Billboard Style */}
      <section className="py-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-48 h-48 bg-black/15 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1.4, 1, 1.4], rotate: [360, 180, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-72 h-72 bg-black/15 rounded-full blur-xl"
          />

          {/* Ultra Enhanced Geometric Shapes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-black rotate-45 rounded-2xl"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-black rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-black rotate-12 rounded-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-black rounded-2xl rotate-45"></div>
            <div className="absolute bottom-1/4 right-1/2 w-10 h-10 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Ultra Premium Badge */}
            <div className="inline-flex items-center space-x-5 space-x-reverse px-12 py-6 bg-black/40 backdrop-blur-md rounded-3xl text-white font-black mb-12 text-3xl shadow-2xl border-4 border-black/30">
              <Clock className="w-10 h-10" />
              <span>عرض محدود لفترة قصيرة</span>
              <Sparkles className="w-10 h-10" />
            </div>

            {/* Ultra Massive Headline - Billboard Style */}
            <h2 className="text-8xl md:text-[12rem] font-black mb-16 leading-none drop-shadow-2xl filter">
              خصم 15%
              <br />
              <span className="text-6xl md:text-7xl">لأول 10 عملاء</span>
            </h2>

            {/* Enhanced Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md rounded-[2rem] p-12 border-4 border-black/30 shadow-2xl"
              >
                <div className="text-6xl font-black mb-6">15%</div>
                <div className="text-3xl font-bold">خصم على جميع الخدمات</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md rounded-[2rem] p-12 border-4 border-black/30 shadow-2xl"
              >
                <div className="text-6xl font-black mb-6">مجاناً</div>
                <div className="text-3xl font-bold">إقامة مدير تنفيذي</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md rounded-[2rem] p-12 border-4 border-black/30 shadow-2xl"
              >
                <div className="text-6xl font-black mb-6">25%</div>
                <div className="text-3xl font-bold">
                  خصم على الإقامة المميزة
                </div>
              </motion.div>
            </div>

            {/* Ultra Premium CTA */}
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-black py-10 px-20 rounded-[2rem] hover:bg-gray-800 transition-all duration-500 shadow-2xl text-4xl border-4 border-white/30"
            >
              احجز مكانك الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Ultra Enhanced */}
      <section className="py-32 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl md:text-8xl font-black mb-12">
              دعنا نحقق حلمك الاستثماري
            </h2>
            <p className="text-4xl mb-20 opacity-95 font-bold">
              لا تدع الفرصة تفوتك! سجل اهتمامك الآن أو تواصل معنا عبر الواتساب
            </p>

            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-black py-8 px-16 rounded-[2rem] hover:bg-gray-100 transition-all duration-500 text-3xl shadow-2xl border-4 border-white/40"
              >
                سجل اهتمامك الآن
              </motion.button>
              <motion.a
                href="https://wa.me/966531991229"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-8 border-4 border-white/50 rounded-[2rem] hover:bg-white/15 transition-all duration-500 backdrop-blur-md flex items-center justify-center space-x-5 space-x-reverse text-3xl font-black"
              >
                <MessageCircle className="w-10 h-10" />
                <span>تواصل عبر الواتساب</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal - Ultra Enhanced */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-12 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-100"
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-4xl font-black text-gray-900">سجل اهتمامك</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label className="block text-2xl font-black text-gray-700 mb-4">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-8 py-5 border-4 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-xl"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-2xl font-black text-gray-700 mb-4">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-8 py-5 border-4 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-xl"
                  placeholder="+966 5X XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-2xl font-black text-gray-700 mb-4">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 border-4 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-xl"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-2xl font-black text-gray-700 mb-4">
                  نوع النشاط التجاري
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 border-4 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-xl"
                >
                  <option value="">اختر نوع النشاط</option>
                  <option value="retail">تجارة التجزئة</option>
                  <option value="services">الخدمات</option>
                  <option value="technology">التقنية</option>
                  <option value="food">الأغذية والمشروبات</option>
                  <option value="construction">الإنشاءات</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-2xl font-black text-gray-700 mb-4">
                  تفاصيل إضافية
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-8 py-5 border-4 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300 text-xl"
                  placeholder="أخبرنا عن مشروعك..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-black py-6 rounded-2xl hover:shadow-lg transition-all duration-300 text-2xl"
              >
                إرسال الطلب
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InvestmentLicense;

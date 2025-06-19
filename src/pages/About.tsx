import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Lightbulb,
  Shield,
  Handshake,
  Zap,
  CheckCircle,
  Calendar,
  MapPin,
  Trophy
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Lightbulb,
      title: 'الابتكار المستمر',
      description: 'الاستثمار الدائم في أحدث الأدوات والتقنيات الرقمية',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'الاحترافية',
      description: 'الالتزام بمعايير جودة دقيقة وتسليم في المواعيد المتفق عليها',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Eye,
      title: 'الشفافية',
      description: 'إشراك العميل في كافة مراحل المشروع وضمان وضوح الإجراءات',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'المرونة',
      description: 'تصميم حلول مخصصة تتوافق مع احتياجات كل عميل',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'الأمان والثقة',
      description: 'تطبيق أفضل ممارسات حماية البيانات والمعلومات السرية',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const achievements = [
    { number: '500+', label: 'مشروع مكتمل', icon: CheckCircle },
    { number: '200+', label: 'عميل راضٍ', icon: Users },
    { number: '5+', label: 'سنوات خبرة', icon: Calendar },
    { number: '99%', label: 'معدل رضا العملاء', icon: Heart },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'تأسيس الشركة',
      description: 'بدأنا رحلتنا في جدة بفريق صغير من المطورين المتحمسين'
    },
    {
      year: '2020',
      title: 'التوسع الأول',
      description: 'أطلقنا خدمات التسويق الرقمي وحققنا 50 مشروع ناجح'
    },
    {
      year: '2021',
      title: 'الأنظمة المؤسسية',
      description: 'بدأنا تطوير الحلول المؤسسية المتقدمة للشركات الكبيرة'
    },
    {
      year: '2022',
      title: 'الذكاء الاصطناعي',
      description: 'دخلنا مجال الذكاء الاصطناعي وأتمتة العمليات'
    },
    {
      year: '2023',
      title: 'الريادة الإقليمية',
      description: 'أصبحنا من الشركات الرائدة في المنطقة مع 200+ عميل'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                🏢 من نحن
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                نحن <span className="text-gradient">أوج الإبداع</span> لتقنية المعلومات
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                شركة رائدة في مجال التقنية بالمملكة العربية السعودية، نتبنى أحدث الحلول الرقمية 
                لتلبية احتياجات الأفراد والشركات ونسعى إلى تمكين عملائنا من المنافسة بثقة في بيئة رقمية مستمرة
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  تواصل معنا
                </Link>
                <Link to="/services" className="px-8 py-3 border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300">
                  خدماتنا
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Working"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">سنوات خبرة</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mr-4">رؤيتنا</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  أن نصبح الشريك التقني الأول في السعودية والمنطقة، مع الالتزام بأعلى معايير الجودة والابتكار، 
                  والمساهمة في تحقيق نمو مستدام لعملائنا في رحلتهم نحو التحول الرقمي.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-3xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mr-4">رسالتنا</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  تقديم تقنيات متطورة وبسيطة في آنٍ واحد، لبناء بيئات عمل ذكية وآمنة ومرنة، 
                  تمكّن الشركات من التركيز على جوهر أعمالها دون عناء العمليات التقنية المعقدة.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              رحلتنا عبر السنوات
            </h2>
            <p className="text-xl text-gray-600">
              من البداية المتواضعة إلى الريادة في المجال
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600">
              المبادئ التي نؤمن بها ونطبقها في كل مشروع
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-xl opacity-90">
              نفتخر بما حققناه من نجاحات مع عملائنا الكرام
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-80">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              انضم إلى رحلة النجاح معنا
            </h2>
            <p className="text-xl mb-8 opacity-90">
              دعنا نكون شريكك في تحقيق أهدافك التقنية والوصول إلى آفاق جديدة من النمو والازدهار
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                ابدأ مشروعك معنا
              </Link>
              <Link to="/portfolio" className="px-8 py-3 border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300">
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
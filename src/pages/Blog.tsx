import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Clock, Eye } from 'lucide-react';

const Blog: React.FC = () => {
  const categories = [
    { name: 'جميع المقالات', count: 24, active: true },
    { name: 'تطوير الويب', count: 8 },
    { name: 'تطبيقات الجوال', count: 6 },
    { name: 'الذكاء الاصطناعي', count: 5 },
    { name: 'الأمان السيبراني', count: 3 },
    { name: 'التسويق الرقمي', count: 2 },
  ];

  const featuredPost = {
    id: 1,
    title: 'مستقبل الذكاء الاصطناعي في تطوير التطبيقات',
    excerpt: 'كيف يغير الذكاء الاصطناعي طريقة تطوير التطبيقات والمواقع الإلكترونية، وما هي التقنيات الجديدة التي ستشكل مستقبل هذا المجال',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق أوج الإبداع',
    date: '15 يناير 2024',
    readTime: '8 دقائق',
    views: '2.5k',
    category: 'الذكاء الاصطناعي'
  };

  const posts = [
    {
      id: 2,
      title: 'أفضل ممارسات تطوير المواقع الإلكترونية في 2024',
      excerpt: 'دليل شامل لأحدث التقنيات والممارسات في تطوير المواقع الحديثة',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'أحمد محمد',
      date: '12 يناير 2024',
      readTime: '6 دقائق',
      views: '1.8k',
      category: 'تطوير الويب'
    },
    {
      id: 3,
      title: 'كيفية حماية تطبيقاتك من الهجمات السيبرانية',
      excerpt: 'استراتيجيات وأدوات الأمان الأساسية لحماية تطبيقاتك ومواقعك',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'سارة أحمد',
      date: '10 يناير 2024',
      readTime: '7 دقائق',
      views: '1.2k',
      category: 'الأمان السيبراني'
    },
    {
      id: 4,
      title: 'تطوير تطبيقات الجوال باستخدام React Native',
      excerpt: 'مقدمة شاملة لتطوير تطبيقات الجوال متعددة المنصات',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'محمد علي',
      date: '8 يناير 2024',
      readTime: '10 دقائق',
      views: '2.1k',
      category: 'تطبيقات الجوال'
    },
    {
      id: 5,
      title: 'استراتيجيات التسويق الرقمي للشركات الناشئة',
      excerpt: 'كيف تبني استراتيجية تسويق رقمي فعالة بميزانية محدودة',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'فاطمة خالد',
      date: '5 يناير 2024',
      readTime: '5 دقائق',
      views: '1.5k',
      category: 'التسويق الرقمي'
    },
    {
      id: 6,
      title: 'مقدمة في تطوير الأنظمة السحابية',
      excerpt: 'فهم أساسيات الحوسبة السحابية وكيفية بناء تطبيقات قابلة للتوسع',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'عبدالله سعد',
      date: '3 يناير 2024',
      readTime: '9 دقائق',
      views: '1.9k',
      category: 'تطوير الويب'
    },
    {
      id: 7,
      title: 'تحسين أداء المواقع الإلكترونية',
      excerpt: 'تقنيات وأدوات لتحسين سرعة وأداء مواقعك الإلكترونية',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'نورا حسن',
      date: '1 يناير 2024',
      readTime: '6 دقائق',
      views: '1.3k',
      category: 'تطوير الويب'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog Background"
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
              📝 مدونة أوج الإبداع
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              أحدث <span className="text-gradient">المقالات التقنية</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              اكتشف أحدث الاتجاهات والتقنيات في عالم البرمجة والتطوير من خلال مقالاتنا المتخصصة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      مقال مميز
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Tag className="w-4 h-4" />
                      <span>{featuredPost.category}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views} مشاهدة</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{post.author}</div>
                        <div className="flex items-center space-x-1 space-x-reverse text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button className="btn-primary">
              تحميل المزيد من المقالات
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
          </motion.div>
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
              هل تحتاج مساعدة في مشروعك؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              فريقنا من الخبراء جاهز لمساعدتك في تحويل أفكارك إلى واقع رقمي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                تواصل معنا الآن
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

export default Blog;
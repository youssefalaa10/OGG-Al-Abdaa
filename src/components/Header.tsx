import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code,
  Globe,
  Shield,
  Zap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import logo from "/OGG-LOGO.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "الرئيسية", path: "/", icon: Globe },
    { name: "خدماتنا", path: "/services", icon: Code },
    { name: "من نحن", path: "/about", icon: Shield },
    { name: "أعمالنا", path: "/portfolio", icon: Briefcase },
    { name: "المدونة", path: "/blog", icon: BookOpen },
    { name: "تواصل معنا", path: "/contact", icon: Zap },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo  */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 space-x-reverse"
          >
            <Link
              to="/"
              className="flex items-center space-x-3 space-x-reverse"
            >
              <img
                src={logo}
                alt="OGG Logo"
                className="w-18 h-12 object-contain rounded-xl"
              />
             
            </Link>
          </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 space-x-reverse">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 space-x-reverse transition-colors duration-300 font-medium px-3 py-2 rounded-lg text-sm xl:text-base ${
                      location.pathname === item.path
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Hidden on mobile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden xl:block"
            >
              <Link to="/contact" className="btn-primary text-sm">
                احصل على استشارة مجانية
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={handleLinkClick}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <img
                    src={logo}
                    alt="OGG Logo"
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">OGG</h2>
                    <p className="text-sm text-gray-600">أوج الإبداع</p>
                  </div>
                </div>
                <button
                  onClick={handleLinkClick}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-6">
                <nav className="space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                          location.pathname === item.path
                            ? "text-primary-600 bg-primary-50 border-r-4 border-primary-600"
                            : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                        }`}
                        onClick={handleLinkClick}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <div className="px-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full btn-primary block text-center py-3 text-base font-semibold"
                      onClick={handleLinkClick}
                    >
                      احصل على استشارة مجانية
                    </Link>
                  </motion.div>
                </div>

                {/* Additional mobile menu content */}
                <div className="px-4 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center text-sm text-gray-500">
                    <p>© 2024 OGG - أوج الإبداع</p>
                    <p className="mt-1">جميع الحقوق محفوظة</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
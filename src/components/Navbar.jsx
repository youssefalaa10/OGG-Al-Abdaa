import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if current path matches the link
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "حولنا" },
    { path: "/services", label: "خدماتنا" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-200/30'
      }`}>
        <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-16 sm:h-20 items-center justify-between font-medium text-[#000]"
            role="navigation"
            dir="rtl"
          >
            {/* Brand logo */}
            <Link
              to="/"
              aria-label="OGG logo"
              className="flex items-center gap-2 sm:gap-3 py-3 text-lg whitespace-nowrap focus:outline-none transition-transform duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6C47FF] to-[#8B5CF6] flex items-center justify-center rounded-xl shadow-lg">
                <span className="text-white text-lg sm:text-xl font-bold">OGG</span>
              </div>
              <span className="font-bold text-[#6C47FF] text-lg sm:text-xl">اوج الابداع</span>
            </Link>

            {/* Desktop Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className="hidden lg:flex items-center gap-2"
            >
              {navLinks.map((link) => (
                <li key={link.path} role="none">
                  <Link
                    to={link.path}
                    role="menuitem"
                    className={`relative flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActivePath(link.path)
                        ? 'text-[#6C47FF] '
                        : 'text-gray-700 hover:text-[#6C47FF] hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActivePath(link.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#6C47FF] rounded-full"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-10 gap-2 px-6 text-sm font-medium tracking-wide text-white transition-all duration-300 rounded-xl shadow-lg whitespace-nowrap bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]/50"
              >
                <span>تواصل معنا</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="relative lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6C47FF]/50"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block h-0.5 w-6 bg-[#000] rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                ></span>
                <span 
                  className={`absolute block h-0.5 w-6 bg-[#000] rounded-full transition-all duration-300 top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`absolute block h-0.5 w-6 bg-[#000] rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-2'
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6" dir="rtl">
            <ul className="py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActivePath(link.path)
                        ? 'text-[#6C47FF] bg-[#6C47FF]/10 font-semibold'
                        : 'text-gray-700 hover:text-[#6C47FF] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base">{link.label}</span>
                    {isActivePath(link.path) && (
                      <div className="mr-auto w-2 h-2 bg-[#6C47FF] rounded-full"></div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA Button */}
            <div className="px-4 pb-6 pt-2">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full h-12 gap-2 text-base font-medium tracking-wide text-white transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-[#6C47FF] to-[#8B5CF6] hover:shadow-xl active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>تواصل معنا الآن</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}
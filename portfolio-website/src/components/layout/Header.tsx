'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// Theme toggle component
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

// Mobile menu component
const MobileMenu = ({ isOpen, toggleMenu, links }: { 
  isOpen: boolean; 
  toggleMenu: () => void;
  links: { href: string; label: string }[];
}) => {
  const pathname = usePathname();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <button 
        onClick={toggleMenu} 
        className="absolute top-6 right-6 text-white"
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="flex flex-col items-center space-y-8">
        <Link 
          href="/"
          className={`text-2xl font-medium ${
            pathname === '/' 
              ? 'text-blue-400 border-b-2 border-blue-400' 
              : 'text-white hover:text-blue-300'
          }`}
          onClick={toggleMenu}
        >
          Home
        </Link>

        {/* Mobile Services Dropdown */}
        <div className="relative">
          <button 
            onClick={toggleMobileServices}
            className="text-2xl font-medium text-white hover:text-blue-300 flex items-center"
          >
            Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`ml-2 h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <motion.div 
              className="mt-4 flex flex-col items-center space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href="/services/web-development"
                className="text-xl font-medium text-blue-300 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Web Development
              </Link>
              <Link 
                href="/services/mobile-apps"
                className="text-xl font-medium text-blue-300 hover:text-blue-400"
                onClick={toggleMenu}
              >
                Mobile Apps
              </Link>
              <Link 
                href="/services/ui-design"
                className="text-xl font-medium text-blue-300 hover:text-blue-400"
                onClick={toggleMenu}
              >
                UI/UX Design
              </Link>
            </motion.div>
          )}
        </div>

        {/* Other navigation links */}
        {links.filter(link => link.href !== '/').map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={`text-2xl font-medium ${
              pathname === link.href 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-white hover:text-blue-300'
            }`}
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

// Main Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="md:flex items-center space-x-8">
          <Link 
            href="/"
            className={`relative font-medium transition-colors duration-300 ${
              pathname === '/' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Home
            {pathname === '/' && (
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                layoutId="navbar-indicator"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleServicesDropdown}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center cursor-pointer whitespace-nowrap"
            >
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-1 h-4 w-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesDropdown && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <Link 
                    href="/services/web-development"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    Web Development
                  </Link>
                  <Link 
                    href="/services/mobile-apps"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    Mobile Apps
                  </Link>
                  <Link 
                    href="/services/ui-design"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    UI/UX Design
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other navigation links */}
          {links.filter(link => link.href !== '/').map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`relative font-medium transition-colors duration-300 ${
                pathname === link.href 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Let's Talk Button - Hidden on mobile */}
          <Link 
            href="/contact"
            className="hidden md:inline-block bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} links={links} />
    </header>
  );
};

export default Header;

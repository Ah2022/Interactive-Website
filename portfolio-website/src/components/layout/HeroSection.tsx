'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  specialties: string[];
  ctaText: string;
  ctaLink: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  specialties,
  ctaText,
  ctaLink,
  className = ''
}: HeroSectionProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  // 3D geometry animation for the right side
  const geometryVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20,
        delay: 0.5
      }
    }
  };

  // Mouse move effect for 3D geometry
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const geometry = containerRef.current.querySelector('.geometry-container');
    if (!geometry) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    const rotateX = ((centerY - y) / centerY) * 10; // Max 10 degrees

    // Apply the rotation
    (geometry as HTMLElement).style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    const geometry = containerRef.current?.querySelector('.geometry-container');
    if (geometry) {
      (geometry as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
  };

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative pt-16 overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Technology Background" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 min-h-[600px] flex flex-col justify-center">
        <motion.div 
          className="inline-block bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 self-start"
          variants={itemVariants}
        >
          <p className="text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Software Engineer & Creative Developer
          </p>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p 
          className="text-xl text-white mb-10 max-w-2xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <a
            href={ctaLink}
            className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center whitespace-nowrap cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {ctaText}
          </a>
          <a
            href="/projects"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center whitespace-nowrap cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Discover Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0], y: [0, 8, 16] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

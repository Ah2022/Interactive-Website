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
      className={`min-h-[80vh] flex flex-col md:flex-row items-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left side - Text content */}
      <motion.div className="w-full md:w-1/2 p-6 md:p-12">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Specializing in:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </motion.div>
        
        <motion.a
          href={ctaLink}
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      
      {/* Right side - 3D Geometry */}
      <motion.div 
        className="w-full md:w-1/2 p-6 md:p-12 flex justify-center items-center"
        variants={itemVariants}
      >
        <motion.div 
          className="geometry-container w-full h-64 md:h-96 relative perspective-800 transition-transform duration-300"
          variants={geometryVariants}
        >
          {/* 3D Geometry placeholder - will be replaced with actual 3D elements or Rive animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              {/* Cube */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg transform rotate-45 opacity-80"></div>
              
              {/* Sphere */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-blue-500 rounded-2xl filter blur-xl opacity-20 animate-pulse"></div>
              
              {/* Grid lines */}
              <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-2xl"></div>
              <div className="absolute inset-0 border-t-2 border-l-2 border-white border-opacity-10 rounded-2xl transform rotate-45"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
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

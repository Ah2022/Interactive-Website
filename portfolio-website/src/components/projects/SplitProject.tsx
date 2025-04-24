'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import RiveAnimation from './RiveAnimation';
import RiveAnimationPlaceholder from './RiveAnimationPlaceholder';

interface SplitProjectProps {
  title: string;
  leftContent: {
    description: string;
    tags: string[];
    projectUrl: string;
    riveAnimationSrc?: string;
    animationType?: 'webApp' | 'mobileApp' | 'game' | 'ai' | 'dataViz';
  };
  rightContent: {
    description: string;
    tags: string[];
    projectUrl: string;
    riveAnimationSrc?: string;
    animationType?: 'webApp' | 'mobileApp' | 'game' | 'ai' | 'dataViz';
  };
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

const SplitProject = ({
  title,
  leftContent,
  rightContent,
  leftLabel = 'Innie',
  rightLabel = 'Outie',
  className = ''
}: SplitProjectProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={containerRef}
      className={`w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      {/* Desktop view - split screen */}
      <div className="hidden md:block">
        <div className="flex flex-row h-full relative overflow-hidden rounded-xl">
          {/* Left side - Innie */}
          <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-l-xl">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden rounded-lg mb-4">
              {leftContent.riveAnimationSrc ? (
                <RiveAnimation 
                  src={leftContent.riveAnimationSrc}
                  className="w-full h-full"
                  autoplay={true}
                />
              ) : (
                <RiveAnimationPlaceholder 
                  type={leftContent.animationType || 'webApp'}
                  className="w-full h-full"
                />
              )}
            </div>
            
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              {leftLabel} View
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              {leftContent.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              variants={itemVariants}
            >
              {leftContent.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.a
              href={leftContent.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View {leftLabel} Version
            </motion.a>
          </div>
          
          {/* Right side - Outie */}
          <div className="w-1/2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-r-xl">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden rounded-lg mb-4">
              {rightContent.riveAnimationSrc ? (
                <RiveAnimation 
                  src={rightContent.riveAnimationSrc}
                  className="w-full h-full"
                  autoplay={true}
                />
              ) : (
                <RiveAnimationPlaceholder 
                  type={rightContent.animationType || 'webApp'}
                  className="w-full h-full"
                />
              )}
            </div>
            
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              {rightLabel} View
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              {rightContent.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              variants={itemVariants}
            >
              {rightContent.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.a
              href={rightContent.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View {rightLabel} Version
            </motion.a>
          </div>
          
          {/* Labels */}
          <div className="absolute top-2 left-4 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
            {leftLabel}
          </div>
          <div className="absolute top-2 right-4 bg-purple-600 text-white px-2 py-1 text-xs font-medium rounded">
            {rightLabel}
          </div>
        </div>
      </div>
      
      {/* Mobile view - tabs */}
      <div className="md:hidden">
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-1/2 py-3 px-4 text-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium"
            >
              {leftLabel}
            </button>
            <button
              className="w-1/2 py-3 px-4 text-center bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-medium"
            >
              {rightLabel}
            </button>
          </div>
          
          <div className="p-6">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden rounded-lg mb-4">
              {leftContent.riveAnimationSrc ? (
                <RiveAnimation 
                  src={leftContent.riveAnimationSrc}
                  className="w-full h-full"
                  autoplay={true}
                />
              ) : (
                <RiveAnimationPlaceholder 
                  type={leftContent.animationType || 'webApp'}
                  className="w-full h-full"
                />
              )}
            </div>
            
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              {leftLabel} View
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4"
              variants={itemVariants}
            >
              {leftContent.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              variants={itemVariants}
            >
              {leftContent.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.div className="flex space-x-2">
              <motion.a
                href={leftContent.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View {leftLabel} Version
              </motion.a>
              
              <motion.a
                href={rightContent.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View {rightLabel} Version
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplitProject;

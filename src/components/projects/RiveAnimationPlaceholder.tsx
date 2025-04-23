'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RiveAnimationPlaceholderProps {
  type: 'webApp' | 'mobileApp' | 'game' | 'ai' | 'dataViz';
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const RiveAnimationPlaceholder = ({
  type,
  className = '',
  onMouseEnter,
  onMouseLeave,
  onClick
}: RiveAnimationPlaceholderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Reset click state after animation
  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setIsClicked(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isClicked]);
  
  // Handle mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };
  
  // Render different placeholder based on type
  const renderPlaceholder = () => {
    switch (type) {
      case 'webApp':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg overflow-hidden">
            {/* Browser frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden">
              {/* Browser toolbar */}
              <div className="h-6 bg-gray-200 dark:bg-gray-700 flex items-center px-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
              </div>
              
              {/* Browser content */}
              <div className="p-2">
                {/* Header */}
                <div className="h-6 w-3/4 bg-blue-100 dark:bg-blue-900 rounded-sm mb-2"></div>
                
                {/* Content blocks */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-sm w-5/6"></div>
                  <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-sm w-4/6"></div>
                </div>
                
                {/* Button */}
                <motion.div 
                  className="mt-4 h-6 w-20 bg-blue-500 rounded-sm"
                  animate={{ 
                    scale: isClicked ? [1, 1.1, 1] : isHovered ? 1.05 : 1,
                    backgroundColor: isHovered ? '#3b82f6' : '#60a5fa'
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </div>
          </div>
        );
        
      case 'mobileApp':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg overflow-hidden">
            {/* Phone frame */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/2 h-5/6 bg-gray-800 rounded-xl overflow-hidden border-4 border-gray-900">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-b-lg"></div>
              
              {/* Phone screen */}
              <div className="absolute top-2 left-0 right-0 bottom-0 bg-white dark:bg-gray-800 p-1">
                {/* App header */}
                <div className="h-4 bg-purple-500 rounded-t-sm flex items-center justify-center">
                  <div className="w-10 h-2 bg-white bg-opacity-30 rounded-sm"></div>
                </div>
                
                {/* App content */}
                <div className="pt-1 space-y-1">
                  <div className="h-8 bg-purple-100 dark:bg-purple-900 rounded-sm"></div>
                  <div className="flex space-x-1">
                    <div className="w-1/3 h-12 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                    <div className="w-1/3 h-12 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                    <div className="w-1/3 h-12 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                  </div>
                  <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-sm"></div>
                </div>
                
                {/* App navigation */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-4 bg-purple-500 rounded-b-sm flex justify-around items-center"
                  animate={{ 
                    y: isClicked ? [0, -2, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ 
                      scale: isHovered ? 1.5 : 1,
                      opacity: isHovered ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        );
        
      case 'game':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-red-100 to-orange-200 dark:from-red-900 dark:to-orange-800 rounded-lg overflow-hidden">
            {/* Game world */}
            <div className="absolute inset-4 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900 rounded-md overflow-hidden">
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-600 dark:bg-green-800"></div>
              
              {/* Sun/Moon */}
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-300 dark:bg-gray-300"
                animate={{ 
                  y: isHovered ? -4 : 0,
                  boxShadow: isHovered ? '0 0 20px 5px rgba(255, 255, 0, 0.5)' : '0 0 10px 2px rgba(255, 255, 0, 0.3)'
                }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: 'reverse' }}
              ></motion.div>
              
              {/* Character */}
              <motion.div 
                className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-6 h-10"
                animate={{ 
                  x: isClicked ? [0, -20, 20, 0] : isHovered ? [0, -10, 10, 0] : 0,
                  y: isClicked ? [0, -15, 0] : isHovered ? [0, -5, 0] : 0
                }}
                transition={{ 
                  duration: isClicked ? 0.8 : 1.5, 
                  repeat: isHovered ? Infinity : 0, 
                  repeatType: 'loop' 
                }}
              >
                {/* Character body */}
                <div className="w-6 h-6 bg-red-500 dark:bg-red-700 rounded-full"></div>
                <div className="w-2 h-4 bg-blue-500 dark:bg-blue-700 absolute bottom-0 left-1"></div>
                <div className="w-2 h-4 bg-blue-500 dark:bg-blue-700 absolute bottom-0 right-1"></div>
              </motion.div>
              
              {/* Platforms */}
              <div className="absolute bottom-1/2 left-1/4 w-12 h-2 bg-brown-500 dark:bg-yellow-900 rounded"></div>
              <div className="absolute bottom-2/3 right-1/4 w-12 h-2 bg-brown-500 dark:bg-yellow-900 rounded"></div>
            </div>
          </div>
        );
        
      case 'ai':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-800 rounded-lg overflow-hidden">
            {/* Neural network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5">
                {/* Nodes */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-blue-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#3b82f6' : '#60a5fa'
                    }}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-blue-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#3b82f6' : '#60a5fa'
                    }}
                    transition={{ duration: 0.5, delay: 0.1, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-blue-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#3b82f6' : '#60a5fa'
                    }}
                    transition={{ duration: 0.5, delay: 0.2, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                </div>
                
                {/* Hidden layer */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-purple-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#8b5cf6' : '#a78bfa'
                    }}
                    transition={{ duration: 0.5, delay: 0.3, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-purple-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#8b5cf6' : '#a78bfa'
                    }}
                    transition={{ duration: 0.5, delay: 0.4, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-purple-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#8b5cf6' : '#a78bfa'
                    }}
                    transition={{ duration: 0.5, delay: 0.5, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-purple-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#8b5cf6' : '#a78bfa'
                    }}
                    transition={{ duration: 0.5, delay: 0.6, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                </div>
                
                {/* Output layer */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-pink-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#ec4899' : '#f472b6'
                    }}
                    transition={{ duration: 0.5, delay: 0.7, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-pink-500"
                    animate={{ 
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      backgroundColor: isClicked ? '#ec4899' : '#f472b6'
                    }}
                    transition={{ duration: 0.5, delay: 0.8, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
                  ></motion.div>
                </div>
                
                {/* Connections */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  {/* Input to hidden connections */}
                  <motion.line 
                    x1="16" y1="50%" x2="50%" y2="30%" 
                    stroke="#60a5fa" strokeWidth="1"
                    animate={{ 
                      stroke: isHovered ? ['#60a5fa', '#3b82f6', '#60a5fa'] : '#60a5fa',
                      strokeWidth: isHovered ? [1, 2, 1] : 1
                    }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                  />
                  <motion.line 
                    x1="16" y1="50%" x2="50%" y2="40%" 
                    stroke="#60a5fa" strokeWidth="1"
                    animate={{ 
                      stroke: isHovered ? ['#60a5fa', '#3b82f6', '#60a5fa'] : '#60a5fa',
                      strokeWidth: isHovered ? [1, 2, 1] : 1
                    }}
                    transition={{ duration: 1, delay: 0.1, repeat: isHovered ? Infinity : 0 }}
                  />
                  {/* More connections would be added here */}
                </svg>
              </div>
            </div>
          </div>
        );
        
      case 'dataViz':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-teal-200 dark:from-green-900 dark:to-teal-800 rounded-lg overflow-hidden">
            {/* Data visualization */}
            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-md p-2">
              {/* Chart title */}
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-sm mb-4"></div>
              
              {/* Bar chart */}
              <div className="flex items-end h-3/5 space-x-2 mb-2">
                <motion.div 
                  className="w-1/6 bg-green-500 dark:bg-green-600 rounded-t-sm"
                  style={{ height: '60%' }}
                  animate={{ 
                    height: isHovered ? '70%' : '60%',
                    backgroundColor: isClicked ? '#22c55e' : '#4ade80'
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-green-500 dark:bg-green-600 rounded-t-sm"
                  style={{ height: '40%' }}
                  animate={{ 
                    height: isHovered ? '50%' : '40%',
                    backgroundColor: isClicked ? '#22c55e' : '#4ade80'
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-green-500 dark:bg-green-600 rounded-t-sm"
                  style={{ height: '80%' }}
                  animate={{ 
                    height: isHovered ? '90%' : '80%',
                    backgroundColor: isClicked ? '#22c55e' : '#4ade80'
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-green-500 dark:bg-green-600 rounded-t-sm"
                  style={{ height: '50%' }}
                  animate={{ 
                    height: isHovered ? '60%' : '50%',
                    backgroundColor: isClicked ? '#22c55e' : '#4ade80'
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="w-1/6 bg-green-500 dark:bg-green-600 rounded-t-sm"
                  style={{ height: '70%' }}
                  animate={{ 
                    height: isHovered ? '80%' : '70%',
                    backgroundColor: isClicked ? '#22c55e' : '#4ade80'
                  }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                ></motion.div>
              </div>
              
              {/* X-axis */}
              <div className="h-px w-full bg-gray-300 dark:bg-gray-600 mb-1"></div>
              
              {/* X-axis labels */}
              <div className="flex justify-between">
                <div className="w-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-gray-500 dark:text-gray-400">Animation placeholder</div>
          </div>
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`rive-animation-placeholder ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {renderPlaceholder()}
    </div>
  );
};

export default RiveAnimationPlaceholder;

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplitViewProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

const SplitView = ({
  leftContent,
  rightContent,
  leftLabel = 'Innie',
  rightLabel = 'Outie',
  className = ''
}: SplitViewProps) => {
  const [activeView, setActiveView] = useState<'left' | 'right'>('left');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Toggle between views
  const toggleView = () => {
    setActiveView(activeView === 'left' ? 'right' : 'left');
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const slideVariants = {
    left: { x: 0 },
    right: { x: '100%' }
  };
  
  return (
    <motion.div 
      className={`w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {isMobile ? (
        // Mobile view - show one at a time with toggle
        <div className="w-full">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-full flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeView === 'left'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveView('left')}
              >
                {leftLabel}
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeView === 'right'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveView('right')}
              >
                {rightLabel}
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div
              className="w-full"
              initial={false}
              animate={{ opacity: activeView === 'left' ? 1 : 0, x: activeView === 'left' ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              style={{ display: activeView === 'left' ? 'block' : 'none' }}
            >
              {leftContent}
            </motion.div>
            
            <motion.div
              className="w-full"
              initial={false}
              animate={{ opacity: activeView === 'right' ? 1 : 0, x: activeView === 'right' ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              style={{ display: activeView === 'right' ? 'block' : 'none' }}
            >
              {rightContent}
            </motion.div>
          </div>
        </div>
      ) : (
        // Desktop view - split screen
        <div className="relative">
          {/* Split screen container */}
          <div className="flex flex-row h-full relative overflow-hidden rounded-xl">
            {/* Left side */}
            <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-l-xl">
              <div className="h-full">{leftContent}</div>
            </div>
            
            {/* Right side */}
            <div className="w-1/2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-r-xl">
              <div className="h-full">{rightContent}</div>
            </div>
            
            {/* Divider with toggle button */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 flex items-center">
              <div className="h-full w-px bg-gray-300 dark:bg-gray-600"></div>
              <button
                onClick={toggleView}
                className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Toggle view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
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
      )}
    </motion.div>
  );
};

export default SplitView;

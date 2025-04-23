'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectsGridProps {
  children: React.ReactNode;
  filters?: string[];
  className?: string;
}

const ProjectsGrid = ({
  children,
  filters = [],
  className = ''
}: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const filterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Filters */}
      {filters.length > 0 && (
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveFilter('all')}
            variants={filterVariants}
          >
            All
          </motion.button>
          
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveFilter(filter)}
              variants={filterVariants}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      )}
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectsGrid;

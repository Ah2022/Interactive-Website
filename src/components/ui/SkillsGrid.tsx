'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SkillsGridProps {
  skills: {
    category: string;
    items: {
      name: string;
      icon?: string;
      level?: number;
    }[];
  }[];
  className?: string;
}

const SkillsGrid = ({
  skills,
  className = ''
}: SkillsGridProps) => {
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    controls.start('visible');
    
    // Set the first category as active by default
    if (skills.length > 0 && !activeCategory) {
      setActiveCategory(skills[0].category);
    }
  }, [controls, skills, activeCategory]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
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

  return (
    <div className={`w-full ${className}`}>
      {/* Category Tabs */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skills.map((category, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === category.category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category.category)}
            variants={itemVariants}
          >
            {category.category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skills
          .filter(category => activeCategory === null || category.category === activeCategory)
          .flatMap(category => category.items)
          .map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Placeholder for skill icon */}
              <div className="w-12 h-12 mb-3 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300">
                {skill.icon ? (
                  <span>{skill.icon}</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">{skill.name}</h3>
              
              {/* Skill level indicator */}
              {skill.level && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                  <motion.div 
                    className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default SkillsGrid;

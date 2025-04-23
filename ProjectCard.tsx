'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import RiveAnimation from './RiveAnimation';
import RiveAnimationPlaceholder from './RiveAnimationPlaceholder';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  riveAnimationSrc?: string;
  animationType?: 'webApp' | 'mobileApp' | 'game' | 'ai' | 'dataViz';
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  projectUrl,
  riveAnimationSrc,
  animationType = 'webApp',
  className = ''
}: ProjectCardProps) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Animation variants
  const cardVariants = {
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
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Rive animation or placeholder */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        {riveAnimationSrc ? (
          <RiveAnimation 
            src={riveAnimationSrc}
            className="w-full h-full"
            autoplay={true}
          />
        ) : (
          <RiveAnimationPlaceholder 
            type={animationType}
            className="w-full h-full"
          />
        )}
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          variants={itemVariants}
        >
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md"
            >
              {tag}
            </span>
          ))}
        </motion.div>
        
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

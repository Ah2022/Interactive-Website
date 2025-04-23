'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick
}: CardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    // Further from center = more rotation
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setMousePosition({ x: rotateY, y: rotateX });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
        ${hoverEffect ? 'cursor-pointer transition-all duration-300' : ''}
        ${className}
      `}
      animate={{
        rotateX: isHovered ? mousePosition.y : 0,
        rotateY: isHovered ? mousePosition.x : 0,
        scale: isHovered ? 1.02 : 1,
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px rgba(79, 70, 229, 0.2)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 15,
        mass: 0.5
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;

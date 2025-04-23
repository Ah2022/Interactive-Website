'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  type = 'button'
}: ButtonProps) => {
  // Mouse position state for the hover effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    outline: 'bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800'
  };

  // Handle mouse move for the glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Determine if we're rendering a button or an anchor
  const Component = href ? 'a' : 'button';

  // Common props for both button and anchor
  const commonProps = {
    className: `
      relative overflow-hidden rounded-md font-medium transition-all duration-300
      inline-flex items-center justify-center
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${fullWidth ? 'w-full' : ''}
      ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
      ${className}
    `,
    disabled: disabled || loading,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: !disabled && !loading ? onClick : undefined,
    ...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : { type })
  };

  return (
    // @ts-ignore - TS doesn't like the dynamic component with different props
    <Component {...commonProps}>
      {/* Glow effect */}
      {isHovered && variant === 'primary' && (
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-white opacity-20 pointer-events-none"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: 1.5,
          }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        />
      )}
      
      {/* Icon left */}
      {icon && iconPosition === 'left' && (
        <span className="mr-2 inline-flex">{icon}</span>
      )}
      
      {/* Loading spinner */}
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        <span>{children}</span>
      )}
      
      {/* Icon right */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2 inline-flex">{icon}</span>
      )}
    </Component>
  );
};

export default Button;

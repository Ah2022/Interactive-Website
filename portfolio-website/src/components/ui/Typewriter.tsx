'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}

const Typewriter = ({
  text,
  speed = 50,
  delay = 1000,
  loop = false,
  className = '',
  cursor = true
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Convert single string to array for consistent handling
  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentText = textArray[currentTextIndex];
    
    if (isDeleting) {
      // Deleting text
      if (currentIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2); // Deleting is faster
      } else {
        // Finished deleting
        setIsDeleting(false);
        
        // Move to next text if available
        const nextTextIndex = (currentTextIndex + 1) % textArray.length;
        setCurrentTextIndex(nextTextIndex);
        
        // If we've gone through all texts and not looping, stop
        if (nextTextIndex === 0 && !loop) {
          setIsTyping(false);
          return;
        }
        
        // Pause before typing next text
        timeoutRef.current = setTimeout(() => {
          setIsTyping(true);
        }, delay);
      }
    } else {
      // Typing text
      if (currentIndex < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else {
        // Finished typing
        if (textArray.length === 1 && !loop) {
          // Single text, no loop, we're done
          setIsTyping(false);
          return;
        }
        
        // Pause before deleting or moving to next text
        timeoutRef.current = setTimeout(() => {
          if (textArray.length > 1 || loop) {
            setIsDeleting(true);
          }
        }, delay);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping, isDeleting, currentIndex, currentTextIndex, textArray, speed, delay, loop]);

  return (
    <span className={className}>
      {displayText}
      {cursor && isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-1 w-0.5 h-5 bg-blue-600 dark:bg-blue-400"
        />
      )}
    </span>
  );
};

export default Typewriter;

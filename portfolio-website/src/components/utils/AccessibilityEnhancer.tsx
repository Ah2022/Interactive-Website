'use client';

import { useEffect } from 'react';

// This component adds accessibility features to the website
export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Add ARIA labels to interactive elements without labels
    const addAriaLabels = () => {
      // Add labels to buttons without text content
      document.querySelectorAll('button').forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent?.trim() === '') {
          // Try to infer a label from icon or context
          const svg = button.querySelector('svg');
          if (svg) {
            const purpose = button.classList.contains('close') ? 'Close' :
                           button.classList.contains('menu') ? 'Menu' :
                           button.classList.contains('search') ? 'Search' : 'Button';
            button.setAttribute('aria-label', purpose);
          }
        }
      });

      // Add labels to links without text content
      document.querySelectorAll('a').forEach(link => {
        if (!link.getAttribute('aria-label') && link.textContent?.trim() === '') {
          const svg = link.querySelector('svg');
          if (svg) {
            // Try to infer from classes or parent context
            if (link.classList.contains('social')) {
              const socialType = link.classList.contains('github') ? 'GitHub' :
                               link.classList.contains('linkedin') ? 'LinkedIn' :
                               link.classList.contains('twitter') ? 'Twitter' : 'Social Media';
              link.setAttribute('aria-label', socialType);
            } else {
              link.setAttribute('aria-label', 'Link');
            }
          }
        }
      });
    };

    // Ensure proper heading hierarchy
    const checkHeadingHierarchy = () => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      let previousLevel = 0;

      headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1));

        // Check for skipped heading levels
        if (level - previousLevel > 1 && previousLevel !== 0) {
          console.warn(`Accessibility issue: Heading level skipped from h${previousLevel} to h${level}`);
        }

        previousLevel = level;
      });
    };

    // Add keyboard navigation support
    const enhanceKeyboardNavigation = () => {
      // Add focus styles
      const style = document.createElement('style');
      style.textContent = `
        :focus-visible {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      // Make custom components keyboard navigable
      document.querySelectorAll('[role="button"]').forEach(el => {
        if (!el.getAttribute('tabindex')) {
          el.setAttribute('tabindex', '0');
        }

        el.addEventListener('keydown', (e: Event) => {
          const keyEvent = e as KeyboardEvent;
          if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
            e.preventDefault();
            (el as HTMLElement).click();
          }
        });
      });
    };

    // Add skip to content link for keyboard users
    const addSkipToContentLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-to-content';
      skipLink.textContent = 'Skip to content';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #3b82f6;
        color: white;
        padding: 8px;
        z-index: 100;
        transition: top 0.2s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add id to main content if not present
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }
    };

    // Enhance color contrast
    const checkColorContrast = () => {
      // This would ideally use a color contrast API
      // For now, we'll just add a class to ensure high contrast
      document.documentElement.classList.add('high-contrast-mode');
    };

    // Run accessibility enhancements
    addAriaLabels();
    checkHeadingHierarchy();
    enhanceKeyboardNavigation();
    addSkipToContentLink();

    // Optional contrast mode (could be toggled by user)
    // checkColorContrast();

    // Clean up
    return () => {
      document.querySelectorAll('[role="button"]').forEach(el => {
        el.removeEventListener('keydown', () => {});
      });
    };
  }, []);

  return null;
}

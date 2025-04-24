'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// This component adds performance monitoring and optimization
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Implement lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
    } else {
      // Fallback for browsers that don't support native lazy loading
      // This would be implemented with a library like lazysizes
      console.log('Browser does not support native lazy loading');
    }

    // Implement intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Add performance monitoring script */}
      <Script id="performance-monitoring" strategy="afterInteractive">
        {`
          // Performance monitoring
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          console.log('Page load time:', pageLoadTime, 'ms');
          
          // Report to analytics (placeholder)
          if (window.requestIdleCallback) {
            requestIdleCallback(() => {
              console.log('Performance metrics collected during idle time');
            });
          }
        `}
      </Script>
    </>
  );
}

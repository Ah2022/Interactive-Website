'use client';

import { useEffect } from 'react';
import PerformanceOptimizer from '@/components/utils/PerformanceOptimizer';
import Layout from '@/components/layout/Layout';

// This component adds SEO optimization
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add meta viewport for responsive design
  useEffect(() => {
    // Preload critical assets
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      // Add other critical assets here
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.keys(link).forEach(key => {
        // @ts-ignore
        linkElement[key] = link[key];
      });
      document.head.appendChild(linkElement);
    });

    // Add event listeners for performance metrics
    window.addEventListener('load', () => {
      // Report Core Web Vitals
      if ('web-vitals' in window) {
        // @ts-ignore
        window['web-vitals'].getCLS(console.log);
        // @ts-ignore
        window['web-vitals'].getFID(console.log);
        // @ts-ignore
        window['web-vitals'].getLCP(console.log);
      }
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio website showcasing software engineering projects with interactive Rive animations" />
        <meta name="theme-color" content="#3b82f6" />
        <title>Interactive Portfolio | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  );
}

'use client';

import { useEffect } from 'react';

// This component adds browser compatibility testing
export default function BrowserCompatibilityTester() {
  useEffect(() => {
    // Check for browser features and apply polyfills if needed
    const checkBrowserCompatibility = () => {
      const compatibility = {
        flexbox: CSS.supports('display', 'flex'),
        grid: CSS.supports('display', 'grid'),
        webp: false, // Will be tested below
        webgl: false, // Will be tested below
        intersectionObserver: 'IntersectionObserver' in window,
        customProperties: CSS.supports('--custom-property', 'value'),
        fetch: 'fetch' in window,
        webAnimations: 'animate' in document.createElement('div'),
        passiveEvents: (() => {
          let supportsPassive = false;
          try {
            // Test via a getter in the options object to see if the passive property is accessed
            const opts = Object.defineProperty({}, 'passive', {
              get: function() {
                supportsPassive = true;
                return true;
              }
            });
            window.addEventListener('testPassive', null as any, opts);
            window.removeEventListener('testPassive', null as any, opts);
          } catch (e) {}
          return supportsPassive;
        })()
      };

      // Test WebP support
      const testWebP = (callback: (supported: boolean) => void) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          callback(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      };

      testWebP((supported) => {
        compatibility.webp = supported;
      });

      // Test WebGL support
      try {
        const canvas = document.createElement('canvas');
        compatibility.webgl = !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        compatibility.webgl = false;
      }

      // Log compatibility report
      console.log('Browser Compatibility Report:', compatibility);

      // Apply polyfills and fallbacks based on compatibility
      if (!compatibility.intersectionObserver) {
        // Load polyfill for IntersectionObserver
        const script = document.createElement('script');
        script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
        document.head.appendChild(script);
      }

      if (!compatibility.customProperties) {
        // Add a class to body for CSS fallbacks
        document.body.classList.add('no-css-variables');
      }

      if (!compatibility.webgl) {
        // Add a class to body for WebGL fallbacks
        document.body.classList.add('no-webgl');
      }

      // Store compatibility info for other components to use
      window.__BROWSER_COMPATIBILITY__ = compatibility;

      return compatibility;
    };

    // Run browser compatibility check
    const compatibility = checkBrowserCompatibility();

    // Add browser detection for specific fixes
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      let browserName;
      let browserVersion;

      // Detect Chrome
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
        const chromeVersion = userAgent.match(/(?:chrome|chromium|crios)\/(\d+)/i);
        browserVersion = chromeVersion ? parseInt(chromeVersion[1], 10) : undefined;
      } 
      // Detect Firefox
      else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
        const firefoxVersion = userAgent.match(/(?:firefox|fxios)\/(\d+)/i);
        browserVersion = firefoxVersion ? parseInt(firefoxVersion[1], 10) : undefined;
      } 
      // Detect Safari
      else if (userAgent.match(/safari/i) && !userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "safari";
        const safariVersion = userAgent.match(/version\/(\d+)/i);
        browserVersion = safariVersion ? parseInt(safariVersion[1], 10) : undefined;
      } 
      // Detect IE
      else if (userAgent.match(/msie|trident/i)) {
        browserName = "ie";
        const ieVersion = userAgent.match(/(?:msie |rv:)(\d+)/i);
        browserVersion = ieVersion ? parseInt(ieVersion[1], 10) : undefined;
      } 
      // Detect Edge
      else if (userAgent.match(/edg/i)) {
        browserName = "edge";
        const edgeVersion = userAgent.match(/edg\/(\d+)/i);
        browserVersion = edgeVersion ? parseInt(edgeVersion[1], 10) : undefined;
      } 
      // Other browsers
      else {
        browserName = "unknown";
      }

      // Add browser-specific classes to body
      document.body.classList.add(`browser-${browserName}`);
      if (browserVersion) {
        document.body.classList.add(`browser-${browserName}-${browserVersion}`);
      }

      // Apply specific fixes for known browser issues
      if (browserName === 'safari') {
        // Fix for Safari flexbox issues
        const style = document.createElement('style');
        style.textContent = `
          .safari-flex-fix {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
          }
        `;
        document.head.appendChild(style);
      }

      if (browserName === 'ie' || (browserName === 'edge' && browserVersion && browserVersion < 18)) {
        // Add warning for outdated browsers
        const warning = document.createElement('div');
        warning.className = 'browser-warning';
        warning.innerHTML = `
          <div style="position: fixed; top: 0; left: 0; right: 0; background: #f44336; color: white; padding: 10px; text-align: center; z-index: 9999;">
            Your browser may not support all features of this website. Please consider upgrading to a modern browser.
            <button style="margin-left: 10px; padding: 5px 10px; background: white; color: #f44336; border: none; border-radius: 4px; cursor: pointer;">
              Dismiss
            </button>
          </div>
        `;
        document.body.appendChild(warning);

        // Add dismiss functionality
        const dismissButton = warning.querySelector('button');
        if (dismissButton) {
          dismissButton.addEventListener('click', () => {
            warning.remove();
          });
        }
      }

      return { name: browserName, version: browserVersion };
    };

    // Run browser detection
    const browser = detectBrowser();
    console.log('Browser detected:', browser);

    // Clean up
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return null;
}

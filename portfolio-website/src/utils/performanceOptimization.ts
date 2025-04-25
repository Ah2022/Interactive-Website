// This file contains utility functions for performance optimization

// Define interface for web vitals metric
interface WebVitalMetric {
  value: number;
  id: string;
  name: string;
  delta?: number;
  entries?: any[];
}

/**
 * Defers non-critical JavaScript execution
 * @param callback - Function to execute
 * @param delay - Delay in milliseconds
 */
export const deferExecution = (callback: () => void, delay: number = 1000): void => {
  if (typeof window === 'undefined') return;

  setTimeout(() => {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener('load', callback);
    }
  }, delay);
};

/**
 * Monitors and reports Core Web Vitals metrics
 */
export const monitorWebVitals = (): void => {
  if (typeof window === 'undefined') return;

  // Check if the Web Vitals API is available
  if ('web-vitals' in window) {
    try {
      // @ts-ignore - Web Vitals API
      const { getCLS, getFID, getLCP, getFCP, getTTFB } = window['web-vitals'];

      getCLS((metric: WebVitalMetric) => {
        console.log('CLS:', metric.value);
        // In production, send to analytics
      });

      getFID((metric: WebVitalMetric) => {
        console.log('FID:', metric.value);
        // In production, send to analytics
      });

      getLCP((metric: WebVitalMetric) => {
        console.log('LCP:', metric.value);
        // In production, send to analytics
      });

      getFCP((metric: WebVitalMetric) => {
        console.log('FCP:', metric.value);
        // In production, send to analytics
      });

      getTTFB((metric: WebVitalMetric) => {
        console.log('TTFB:', metric.value);
        // In production, send to analytics
      });
    } catch (error) {
      console.error('Error monitoring web vitals:', error);
    }
  }
};

/**
 * Implements code splitting for dynamic imports
 * @param modulePath - Path to the module to import
 * @returns A promise that resolves to the imported module
 */
export const loadDynamically = async (modulePath: string): Promise<any> => {
  try {
    const module = await import(modulePath);
    return module.default || module;
  } catch (error) {
    console.error(`Error dynamically importing ${modulePath}:`, error);
    throw error;
  }
};

/**
 * Debounces a function to limit execution frequency
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 100
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * Throttles a function to limit execution frequency
 * @param func - Function to throttle
 * @param limit - Limit time in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number = 100
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Checks if the browser supports certain features
 * @returns Object with feature support flags
 */
export const checkBrowserSupport = (): Record<string, boolean> => {
  if (typeof window === 'undefined') {
    return {
      webp: false,
      webgl: false,
      intersectionObserver: false,
      lazyLoading: false
    };
  }

  return {
    webp: 'createImageBitmap' in window && 'HTMLCanvasElement' in window,
    webgl: (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    })(),
    intersectionObserver: 'IntersectionObserver' in window,
    lazyLoading: 'loading' in HTMLImageElement.prototype
  };
};

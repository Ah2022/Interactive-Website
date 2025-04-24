// This file contains utility functions for image optimization

/**
 * Generates responsive image srcset for different viewport sizes
 * @param imagePath - Base path to the image
 * @param sizes - Array of sizes to generate srcset for
 * @returns A srcset string for use in img tags
 */
export const generateSrcSet = (imagePath: string, sizes: number[] = [320, 640, 960, 1280, 1920]): string => {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  
  return sizes
    .map(size => `${basePath}-${size}.${extension} ${size}w`)
    .join(', ');
};

/**
 * Optimizes image loading with lazy loading and blur placeholder
 * @param imageElement - The image element to optimize
 */
export const optimizeImage = (imageElement: HTMLImageElement): void => {
  if (!imageElement) return;
  
  // Add lazy loading
  imageElement.loading = 'lazy';
  
  // Add blur placeholder if not already present
  if (!imageElement.style.backgroundImage) {
    imageElement.style.backgroundSize = 'cover';
    imageElement.style.backgroundPosition = 'center';
    imageElement.style.backgroundRepeat = 'no-repeat';
    
    // Create a tiny placeholder (would be a real tiny image in production)
    const color = '#e2e8f0'; // Light gray placeholder
    imageElement.style.backgroundColor = color;
  }
  
  // Add fade-in effect
  imageElement.style.transition = 'opacity 0.3s ease-in-out';
  imageElement.style.opacity = '0';
  
  imageElement.onload = () => {
    imageElement.style.opacity = '1';
  };
};

/**
 * Preloads critical images for faster rendering
 * @param imagePaths - Array of image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Applies WebP format if supported by the browser
 * @param imagePath - Original image path
 * @returns Path to WebP version if supported, otherwise original path
 */
export const useWebPIfSupported = (imagePath: string): string => {
  if (typeof window === 'undefined') return imagePath;
  
  // Check if browser supports WebP
  const supportsWebP = localStorage.getItem('supportsWebP');
  
  if (supportsWebP === 'true') {
    // Convert to WebP path
    const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
    return `${basePath}.webp`;
  } else if (supportsWebP === 'false') {
    return imagePath;
  } else {
    // Test WebP support if not already tested
    const testWebP = (callback: (supported: boolean) => void) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        callback(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    
    testWebP((supported) => {
      localStorage.setItem('supportsWebP', supported.toString());
      if (supported) {
        // Update all images to WebP format
        document.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.endsWith('.webp') && !src.startsWith('data:')) {
            const basePath = src.substring(0, src.lastIndexOf('.'));
            img.setAttribute('src', `${basePath}.webp`);
          }
        });
      }
    });
    
    return imagePath;
  }
};

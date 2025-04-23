// This file contains utility functions for responsive testing

/**
 * Checks if the current viewport matches a specific breakpoint
 * @param breakpoint - The breakpoint to check ('sm', 'md', 'lg', 'xl', '2xl')
 * @returns boolean indicating if the viewport matches the breakpoint
 */
export const isBreakpoint = (breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl'): boolean => {
  if (typeof window === 'undefined') return false;
  
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };
  
  return window.innerWidth >= breakpoints[breakpoint];
};

/**
 * Gets the current active breakpoint
 * @returns The current active breakpoint ('xs', 'sm', 'md', 'lg', 'xl', '2xl')
 */
export const getActiveBreakpoint = (): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
  if (typeof window === 'undefined') return 'md'; // Default for SSR
  
  const width = window.innerWidth;
  
  if (width < 640) return 'xs';
  if (width < 768) return 'sm';
  if (width < 1024) return 'md';
  if (width < 1280) return 'lg';
  if (width < 1536) return 'xl';
  return '2xl';
};

/**
 * Logs the current viewport size and active breakpoint
 * Useful for debugging responsive issues
 */
export const logViewportInfo = (): void => {
  if (typeof window === 'undefined') return;
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  const breakpoint = getActiveBreakpoint();
  
  console.log(`Viewport: ${width}x${height}, Breakpoint: ${breakpoint}`);
};

/**
 * Adds a resize listener that logs viewport information
 * @param enable - Whether to enable the listener
 */
export const enableResponsiveDebug = (enable: boolean = true): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  if (enable) {
    logViewportInfo();
    const handleResize = () => {
      logViewportInfo();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }
  
  return () => {};
};

/**
 * Simulates different device viewports for testing
 * @param device - The device to simulate ('iphone', 'ipad', 'macbook', etc.)
 */
export const simulateDevice = (device: string): void => {
  if (typeof window === 'undefined') return;
  
  const devices = {
    iphone: { width: 375, height: 667 },
    iphonePlus: { width: 414, height: 736 },
    iphoneX: { width: 375, height: 812 },
    ipad: { width: 768, height: 1024 },
    ipadPro: { width: 1024, height: 1366 },
    macbook: { width: 1280, height: 800 },
    macbookPro: { width: 1440, height: 900 },
    desktop: { width: 1920, height: 1080 }
  };
  
  // @ts-ignore
  const dimensions = devices[device] || devices.iphone;
  
  console.log(`Simulating ${device}: ${dimensions.width}x${dimensions.height}`);
  // In a real testing environment, this would resize the viewport
  // For now, we just log the information
};

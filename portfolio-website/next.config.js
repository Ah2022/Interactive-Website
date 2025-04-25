/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export', // Add this for static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: './', // Add this to ensure assets are loaded with relative paths
  basePath: '', // Empty base path for root deployment
};

module.exports = nextConfig;

# Portfolio Website Deployment Guide

This document provides instructions for deploying the portfolio website to either Vercel or Netlify.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

## Local Development

To run the website locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at http://localhost:3000

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. **Create a Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via GitHub Integration**
   - Push your code to a GitHub repository
   - Import the repository in the Vercel dashboard
   - Vercel will automatically detect Next.js and configure the build settings

4. **Deploy via CLI** (Alternative)
   ```bash
   # Login to Vercel
   vercel login

   # Deploy from project directory
   cd /path/to/portfolio
   vercel
   ```

5. **Configuration**
   - The `vercel.json` file in the project root contains the necessary configuration
   - Vercel will automatically use the build command from package.json

### Option 2: Netlify

1. **Create a Netlify Account**
   - Sign up at [netlify.com](https://netlify.com)

2. **Deploy via GitHub Integration**
   - Push your code to a GitHub repository
   - Log in to Netlify and click "New site from Git"
   - Select your repository
   - Use the following build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Deploy via Netlify CLI** (Alternative)
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy from project directory
   cd /path/to/portfolio
   netlify deploy
   ```

4. **Configuration**
   - The `netlify.toml` file in the project root contains the necessary configuration
   - This includes build settings, redirects, and security headers

## Post-Deployment Steps

1. **Set Up Custom Domain** (Optional)
   - Both Vercel and Netlify provide easy ways to configure custom domains
   - Follow the platform-specific instructions to add your domain

2. **Enable HTTPS**
   - Both platforms provide free SSL certificates
   - This is typically enabled by default

3. **Check Performance**
   - Use tools like Lighthouse or PageSpeed Insights to verify performance
   - The site includes built-in performance monitoring

## Updating the Site

Both Vercel and Netlify support continuous deployment:

1. Push changes to your connected Git repository
2. The platform will automatically rebuild and deploy your site

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs in your deployment platform
2. Verify that all dependencies are correctly installed
3. Ensure that the Node.js version is compatible (18.x or higher)
4. Check for any console errors in the browser

## Support

For additional help:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Netlify Documentation: [docs.netlify.com](https://docs.netlify.com)

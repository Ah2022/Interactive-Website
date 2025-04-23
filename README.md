# Interactive Portfolio Website

A modern, responsive portfolio website for a software engineer, featuring interactive Rive animations and a minimal futuristic design.

## Features

- **Interactive Rive Animations**: Each project includes interactive animations that serve as visual metaphors
- **Split Identity UI**: Special "Innie vs Outie" view for the MDR Game project
- **Micro-interactions**: Fluid buttons, typewriter effects, and real-time feedback elements
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **Optimized Performance**: Lazy loading, code splitting, and performance monitoring
- **Accessibility**: ARIA labels, keyboard navigation, and proper heading hierarchy
- **Cross-browser Compatibility**: Feature detection and fallbacks for older browsers

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: TailwindCSS
- **Animations**: Rive, Framer Motion, GSAP
- **Performance**: Custom optimization utilities
- **Deployment**: Configuration for both Vercel and Netlify

## Project Structure

```
portfolio/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── page.tsx          # Home page
│   │   ├── projects/         # Projects page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   └── layout.tsx        # Root layout with SEO
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   ├── projects/         # Project-related components
│   │   ├── ui/               # Reusable UI components
│   │   └── utils/            # Utility components
│   ├── data/
│   │   └── projectsData.ts   # Project and personal info
│   └── utils/                # Utility functions
├── public/
│   └── animations/           # Rive animation files
├── vercel.json               # Vercel configuration
├── netlify.toml              # Netlify configuration
└── DEPLOYMENT.md             # Deployment instructions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for both Vercel and Netlify.

## Customization

- **Projects**: Edit `src/data/projectsData.ts` to update project information
- **Personal Info**: Edit the personalInfo object in `src/data/projectsData.ts`
- **Animations**: Replace placeholder animations in `public/animations/` with custom .riv files
- **Styling**: Modify TailwindCSS theme in `tailwind.config.js`

## Features to Add

- **Blog Section**: Add a blog for sharing technical articles
- **Project Case Studies**: Expand project details with in-depth case studies
- **Interactive Resume**: Add a downloadable and interactive resume
- **Analytics**: Integrate with Google Analytics or similar service

## License

MIT

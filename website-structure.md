# Interactive Portfolio Website Structure

## Overview
This document outlines the structure and layout for a software engineer's interactive portfolio website. The design follows a minimal futuristic aesthetic with 3D geometry, gradients, glowing outlines, and clean typography.

## Pages Structure

### 1. Home Page
- **Hero Section**: 
  - Split-screen layout with animated 3D geometric elements
  - Left side: Developer introduction with typewriter effect
  - Right side: Interactive 3D geometry with hover effects
  - Smooth scroll indicator animation
  - Light/dark mode toggle in top corner

- **Featured Projects Section**:
  - Horizontal scrolling carousel of 3 featured projects
  - Each project card contains:
    - Project title with glowing outline on hover
    - Brief description
    - Interactive Rive animation preview
    - "View Project" button with micro-interaction

- **Skills Section**:
  - Minimal grid layout of technical skills
  - Each skill represented by subtle 3D icon
  - Hover effect reveals skill details
  - Background gradient that subtly shifts on mouse movement

- **Call to Action**:
  - "View All Projects" button with fluid animation
  - "Contact Me" button with contrasting style

### 2. Projects Page
- **Filter Navigation**:
  - Filter tabs by technology/category
  - Animated underline for active filter

- **Project Grid/List**:
  - Each project card includes:
    - Project title
    - Short description
    - Tags (React, Python, WebSockets, etc.)
    - Rive animation embedded (interactive on hover/click)
    - "View Project" button linking to GitHub/demo
  
- **MDR Game Project Special Feature**:
  - Split identity UI with "Innie vs Outie" views
  - Toggle switch to flip between perspectives
  - Different color schemes and animations for each view
  - Real-time state changes reflected in the UI

### 3. About Page
- **Bio Section**:
  - Professional headshot or 3D avatar
  - Detailed biography with animated section transitions
  - Timeline of career/education with interactive elements

- **Skills & Expertise**:
  - Visual representation of skills with progress indicators
  - Categorized by development areas
  - Micro-interactions on hover

- **Personal Interests**:
  - Grid of interests with subtle animations
  - Interactive elements that reveal more details

### 4. Contact Page
- **Contact Form**:
  - Minimal design with floating labels
  - Real-time validation with micro-interactions
  - Submit button with loading animation
  - Success/error states with appropriate feedback

- **Alternative Contact Methods**:
  - Social media links with hover effects
  - Email address with copy-to-clipboard functionality
  - Location information with subtle animation

## Global Elements

### Navigation
- Minimal, fixed navigation bar
- Glowing highlight for active page
- Mobile: Animated hamburger menu with full-screen overlay
- Smooth page transitions

### Footer
- Simple, minimal footer with essential links
- Social media icons with hover animations
- Copyright information
- Back to top button with scroll animation

### Micro-interactions
- Button hover/click effects with fluid animations
- Form field focus states with subtle transitions
- Page transition effects
- Scroll-triggered animations for content sections
- Cursor effects near interactive elements

## Responsive Behavior
- Desktop: Full experience with all animations and effects
- Tablet: Adapted layouts with preserved animations
- Mobile: Simplified layouts with essential animations
- Responsive Rive canvas scaling across all devices

## Technical Considerations
- Next.js for framework with TypeScript
- Tailwind CSS for styling
- Rive JavaScript Runtime for animations
- Framer Motion for additional UI transitions
- Lazy loading for Rive animations
- Fallback for devices without WebGL
- Accessibility features for all interactive elements

import React from 'react';
import SplitProject from '@/components/projects/SplitProject';
import { mdrGameProject } from '@/data/projectsData';

// Removed unused imports
// Removed unescaped single quotes
// Fixed ESLint issues

// Ensure the animationType property matches the expected type
<SplitProject
  title={mdrGameProject.title}
  leftContent={{
    ...mdrGameProject.leftContent,
    animationType: 'game', // Explicitly set to a valid type
  }}
  rightContent={{
    ...mdrGameProject.rightContent,
    animationType: 'game', // Explicitly set to a valid type
  }}
  leftLabel={mdrGameProject.leftLabel}
  rightLabel={mdrGameProject.rightLabel}
/>

// Removed misplaced JSON configuration. Ensure it is in a separate tsconfig.json file.

// tsconfig.json
{
  "compilerOptions": {
    // other options
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/data/*": ["src/data/*"]
    }
  }
}

export const mdrGameProject = {
  title: "MDR Game Project",
  leftContent: {
    description: "Left content description",
    animationType: "game",
  },
  rightContent: {
    description: "Right content description",
    animationType: "game",
  },
  leftLabel: "Left Label",
  rightLabel: "Right Label",
};
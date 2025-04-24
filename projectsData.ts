export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  projectUrl: string;
  githubUrl?: string;
  riveAnimationSrc?: string;
  animationType: 'webApp' | 'mobileApp' | 'game' | 'ai' | 'dataViz';
  featured?: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'ai' | 'game';
}

export const projects: Project[] = [
  {
    id: 'mdr-game',
    title: 'MDR Game Experience',
    description: 'An interactive game inspired by the TV show "Severance" with dual "Innie vs Outie" gameplay mechanics.',
    longDescription: 'The MDR Game Experience is a narrative-driven game that explores the concept of work-life separation through a dual gameplay system. Players experience both the "Innie" (work) and "Outie" (life) perspectives of the same character, with decisions in one world affecting the other. The game features puzzle-solving, resource management, and branching storylines.',
    tags: ['Unity', 'C#', 'Narrative Design', 'Puzzle Mechanics', 'Dual Gameplay'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'game',
    featured: true,
    category: 'game'
  },
  {
    id: 'ai-maintenance-bot',
    title: 'AI Maintenance Bot',
    description: 'A machine learning system that predicts equipment failures and suggests maintenance schedules.',
    longDescription: 'The AI Maintenance Bot uses advanced machine learning algorithms to analyze equipment sensor data and predict potential failures before they occur. The system continuously learns from new data, improving its prediction accuracy over time. It includes a dashboard for monitoring equipment health and automated notification systems for maintenance teams.',
    tags: ['Python', 'TensorFlow', 'Time Series Analysis', 'Predictive Maintenance', 'IoT'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'ai',
    featured: true,
    category: 'ai'
  },
  {
    id: 'responsive-dashboard',
    title: 'Responsive Analytics Dashboard',
    description: 'A data visualization platform that presents complex information in an intuitive, accessible format.',
    longDescription: 'This responsive analytics dashboard transforms complex datasets into clear, actionable insights through interactive visualizations. Built with modern web technologies, it features real-time data updates, customizable widgets, and cross-device compatibility. The dashboard includes filtering capabilities, export options, and user permission management.',
    tags: ['React', 'D3.js', 'TypeScript', 'Responsive Design', 'Data Visualization'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'dataViz',
    featured: true,
    category: 'frontend'
  },
  {
    id: 'mobile-fitness-app',
    title: 'Mobile Fitness Companion',
    description: 'A cross-platform mobile application that tracks workouts, nutrition, and provides personalized recommendations.',
    longDescription: 'The Mobile Fitness Companion helps users achieve their health goals through comprehensive tracking and personalized guidance. The app monitors workouts, nutrition, sleep patterns, and vital statistics, using this data to generate tailored fitness plans and nutritional advice. It features social sharing capabilities, achievement systems, and integration with popular fitness devices.',
    tags: ['React Native', 'Firebase', 'Health APIs', 'Cross-platform', 'User Experience'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'mobileApp',
    category: 'mobile'
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack online shopping solution with inventory management, payment processing, and analytics.',
    longDescription: 'This comprehensive e-commerce platform provides businesses with everything needed to establish and grow their online presence. The system includes product catalog management, inventory tracking, secure payment processing, order fulfillment, and customer relationship tools. The platform also features detailed analytics to help businesses understand their sales patterns and customer behavior.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Payment Integration'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'webApp',
    category: 'fullstack'
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description: 'A scalable API gateway that manages routing, authentication, and rate limiting for microservices.',
    longDescription: 'This API gateway serves as the central entry point for a microservices architecture, handling cross-cutting concerns like authentication, authorization, and rate limiting. It provides service discovery, load balancing, and request routing capabilities, along with comprehensive logging and monitoring. The gateway is designed for high availability and performance, with support for horizontal scaling.',
    tags: ['Go', 'Kubernetes', 'Docker', 'Microservices', 'API Design'],
    projectUrl: '#',
    githubUrl: 'https://github.com',
    animationType: 'webApp',
    category: 'backend'
  }
];

export const mdrGameProject = {
  id: 'mdr-game',
  title: 'MDR Game Experience',
  leftContent: {
    description: 'The "Innie" perspective focuses on office puzzles, memory challenges, and workplace dynamics within the mysterious Lumon Industries.',
    tags: ['Puzzle Mechanics', 'Memory Games', 'Office Simulation', 'Character Interaction'],
    projectUrl: '#',
    animationType: 'game'
  },
  rightContent: {
    description: 'The "Outie" perspective explores personal life, relationships, and the mystery of what happens during work hours, with decisions affecting the Innie\'s experience.',
    tags: ['Narrative Choices', 'Relationship Building', 'Mystery Solving', 'Consequence System'],
    projectUrl: '#',
    animationType: 'game'
  },
  leftLabel: 'Innie',
  rightLabel: 'Outie'
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'CSS/SASS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Three.js', level: 75 },
      { name: 'WebGL', level: 70 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'GraphQL', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'iOS Development', level: 70 },
      { name: 'Android Development', level: 70 },
      { name: 'Mobile UI/UX', level: 85 },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Azure', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Git', level: 90 }
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'UI Design', level: 85 },
      { name: 'UX Research', level: 80 },
      { name: 'Prototyping', level: 85 },
      { name: 'Animation', level: 80 }
    ]
  }
];

export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Software Engineer & Creative Developer',
  bio: 'I\'m a software engineer with a passion for creating engaging digital experiences that combine technical excellence with creative design. With over 5 years of experience in full-stack development, I specialize in building interactive web applications, mobile apps, and games that push the boundaries of what\'s possible on the web.',
  location: 'San Francisco, CA',
  email: 'contact@example.com',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
};

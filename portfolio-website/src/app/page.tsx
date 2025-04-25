'use client';

import { useState } from 'react';
import HeroSection from '@/components/layout/HeroSection';
import Section from '@/components/layout/Section';
import ProjectCard from '@/components/projects/ProjectCard';
import SplitProject from '@/components/projects/SplitProject';
import SkillsGrid from '@/components/ui/SkillsGrid';
import Typewriter from '@/components/ui/Typewriter';
import Button from '@/components/ui/Button';
import { projects, mdrGameProject, skills, personalInfo } from '@/data/projectsData';

export default function Home() {
  const [featuredProjects] = useState(projects.filter(project => project.featured));
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        title={`Hi, I'm ${personalInfo.name}`}
        subtitle={personalInfo.title}
        specialties={['Interactive Experiences', 'Creative Development', 'Responsive Design', 'Animation']}
        ctaText="View My Work"
        ctaLink="#projects"
        className="mb-20"
      />
      
      {/* Featured Projects Section */}
      <Section id="projects" className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <Typewriter 
              text={[
                "Check out some of my recent work",
                "Interactive experiences that push boundaries",
                "Creative solutions to complex problems"
              ]}
              speed={50}
              loop={true}
            />
          </p>
        </div>
        
        {/* MDR Game Split Project */}
        <SplitProject 
          title={mdrGameProject.title}
          leftContent={mdrGameProject.leftContent}
          rightContent={mdrGameProject.rightContent}
          leftLabel={mdrGameProject.leftLabel}
          rightLabel={mdrGameProject.rightLabel}
          className="mb-12"
        />
        
        {/* Other Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {featuredProjects.filter(project => project.id !== 'mdr-game').map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={project.projectUrl}
              riveAnimationSrc={project.riveAnimationSrc}
              animationType={project.animationType}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            href="/projects"
            variant="primary"
            size="lg"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            View All Projects
          </Button>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section className="mb-20 bg-gray-50 dark:bg-gray-900 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of technologies and tools I work with
          </p>
        </div>
        
        <SkillsGrid skills={skills} className="mt-8" />
      </Section>
      
      {/* About Section */}
      <Section id="about" className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about creating digital experiences that are not only functional but also engaging and memorable. My approach combines technical expertise with creative thinking to build solutions that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <Button 
                href="/about"
                variant="primary"
              >
                More About Me
              </Button>
              <Button 
                href="/contact"
                variant="outline"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 rounded-xl">
            <div className="relative h-64 w-full">
              {/* 3D Geometry placeholder - will be replaced with actual 3D elements or image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  {/* Cube */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg transform rotate-45 opacity-80"></div>
                  
                  {/* Sphere */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl filter blur-xl opacity-20 animate-pulse"></div>
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-2xl"></div>
                  <div className="absolute inset-0 border-t-2 border-l-2 border-white border-opacity-10 rounded-2xl transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Email:</span> {personalInfo.email}
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button 
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
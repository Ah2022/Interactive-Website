'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import ProjectCard from '@/components/projects/ProjectCard';
import SplitProject from '@/components/projects/SplitProject';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { projects, mdrGameProject } from '@/data/projectsData';

export default function Projects() {
  const [categories, setCategories] = useState<string[]>([]);
  
  // Extract unique categories from projects
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
    setCategories(uniqueCategories as string[]);
  }, []);
  
  return (
    <Layout>
      {/* Header */}
      <Section className="mb-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my work across web, mobile, games, and AI applications.
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </Section>
      
      {/* Featured Project - MDR Game */}
      <Section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Project
        </h2>
        
        <SplitProject 
          title={mdrGameProject.title}
          leftContent={mdrGameProject.leftContent}
          rightContent={mdrGameProject.rightContent}
          leftLabel={mdrGameProject.leftLabel}
          rightLabel={mdrGameProject.rightLabel}
        />
      </Section>
      
      {/* All Projects */}
      <Section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          All Projects
        </h2>
        
        <ProjectsGrid filters={categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))}>
          {projects.filter(project => project.id !== 'mdr-game').map((project) => (
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
        </ProjectsGrid>
      </Section>
      
      {/* Project Process */}
      <Section className="mb-20 bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            My Project Process
          </h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Discovery & Research
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every project begins with understanding the core problem and researching potential solutions. 
                  I analyze requirements, study user needs, and explore technical possibilities to establish a solid foundation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Design & Prototyping
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With a clear understanding of the goals, I create wireframes and interactive prototypes to visualize the solution.
                  This iterative process helps refine the user experience and interface before development begins.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-300 text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Development & Testing
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I build the solution using modern technologies and best practices, with a focus on clean, maintainable code.
                  Rigorous testing ensures the final product is robust, performant, and accessible across all devices.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-300 text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Deployment & Iteration
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  After launch, I monitor performance and gather user feedback to identify opportunities for improvement.
                  This continuous iteration process ensures the solution evolves to meet changing needs and expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA */}
      <Section className="mb-20">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and challenges.
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </Layout>
  );
}

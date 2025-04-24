'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import SkillsGrid from '@/components/ui/SkillsGrid';
import Button from '@/components/ui/Button';
import { skills, personalInfo } from '@/data/projectsData';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <Section className="mb-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>
      </Section>
      
      {/* Bio Section */}
      <Section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                My journey in software development began with a fascination for creating interactive experiences that blend technology with creativity. Over the years, I've worked on a diverse range of projects, from responsive web applications to mobile apps and games, always striving to push the boundaries of what's possible.
              </p>
              <p>
                I believe that great software is not just about writing code, but about solving real problems and creating meaningful experiences for users. This philosophy guides my approach to every project I undertake.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in art, music, and nature.
              </p>
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
              
              <div className="mt-6 flex space-x-4">
                <a 
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section className="mb-20 bg-gray-50 dark:bg-gray-900 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        
        <SkillsGrid skills={skills} className="mt-8" />
      </Section>
      
      {/* Experience Timeline */}
      <Section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and key milestones
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 pb-6 ml-4">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  Senior Software Engineer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  TechInnovate Inc. • 2022 - Present
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Lead development of interactive web applications and mobile experiences. Mentor junior developers and implement best practices for code quality and performance optimization.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 pb-6 ml-4">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  Frontend Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  WebSolutions Co. • 2019 - 2022
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components and animations.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  Junior Developer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  StartupLabs • 2017 - 2019
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Built and maintained web applications using JavaScript and CSS. Participated in agile development processes and contributed to open-source projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Education */}
      <Section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and continuous learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              University of Technology • 2013 - 2017
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Focused on software engineering, web development, and human-computer interaction. Graduated with honors.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
              Continuous Learning
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              Online Courses & Certifications • 2017 - Present
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Regularly complete courses in emerging technologies, including advanced React patterns, WebGL, 3D graphics, and machine learning fundamentals.
            </p>
          </motion.div>
        </div>
      </Section>
      
      {/* CTA */}
      <Section className="mb-20">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in working together or have a question about my experience?
            I'd love to hear from you.
          </p>
          <Button 
            href="/contact"
            variant="secondary"
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </Section>
    </Layout>
  );
}

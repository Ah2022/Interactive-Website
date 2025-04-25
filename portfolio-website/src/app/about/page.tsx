'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout>
      {/* About Header */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get to know more about my background, skills, and what drives me as a developer.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Bio */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a software engineer with a passion for creating engaging digital experiences that combine technical excellence with creative design. With over 5 years of experience in full-stack development, I specialize in building interactive web applications, mobile apps, and games that push the boundaries of what's possible on the web.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  My journey in software development began with a fascination for creating interactive experiences that blend technology with creativity. Over the years, I've worked on a diverse range of projects, from responsive web applications to mobile apps and games, always striving to push the boundaries of what's possible.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe that great software is not just about writing code, but about solving real problems and creating meaningful experiences for users. This philosophy guides my approach to every project I undertake.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in art, music, and nature.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
                  <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">University of Technology • 2013 - 2017</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Focused on software engineering, web development, and human-computer interaction. Graduated with honors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Experience */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, TypeScript, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1">Mobile</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React Native, Flutter, iOS, Android</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1">Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Figma, Adobe XD, UI/UX, Prototyping</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold">Senior Software Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400">TechInnovate Inc. • 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Lead development of interactive web applications and mobile experiences. Mentor junior developers and implement best practices for code quality and performance optimization.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold">Frontend Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400">WebSolutions Co. • 2019 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components and animations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}

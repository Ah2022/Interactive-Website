'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm Ahmed Hisham
              </motion.h1>
              <motion.p 
                className="text-xl mb-6 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Software Engineer & Creative Developer
              </motion.p>
              <motion.p 
                className="mb-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I build exceptional digital experiences with modern technologies.
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  href="/projects" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg w-64 h-64 mx-auto overflow-hidden">
                  <img 
                    src="/assets/profile.svg" 
                    alt="Ahmed Hisham" 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is built with a focus on performance, accessibility, and user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of project {item} and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs">Tailwind</span>
                  </div>
                  <Link 
                    href={`/projects/${item}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

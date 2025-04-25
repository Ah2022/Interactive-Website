'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Contact() {
  return (
    <Layout>
      {/* Contact Header */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-xl mb-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Contact Form */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">ahmed.hisham2000.ah@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/ahmed-hisham26/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/ahmed-hisham26
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">GitHub</h3>
                      <a 
                        href="https://github.com/Ah2022" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/Ah2022
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Ah2022" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ahmed-hisham26/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600 dark:text-gray-300">
                    <p>All times are in Eastern Standard Time (EST).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">What is your typical process for new projects?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I start with a detailed discovery phase to understand your goals and requirements. Then I create wireframes and prototypes before moving into development. Throughout the process, I maintain open communication and provide regular updates.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">How do you handle project pricing?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I offer flexible pricing models including fixed-price quotes for well-defined projects and hourly rates for ongoing work. I provide detailed proposals with clear breakdowns of costs and timelines before starting any work.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">What is your availability for new projects?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                My availability varies throughout the year. I typically book projects 2-4 weeks in advance, but I can sometimes accommodate rush projects. The best way to find out is to reach out with your project details and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
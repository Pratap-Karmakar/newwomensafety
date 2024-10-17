'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About SafeHer
      </motion.h1>
      
      <motion.div
        className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p 
          className="text-purple-600 text-sm sm:text-base md:text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          SafeHer is dedicated to empowering women and ensuring their safety. Our mission is to provide a comprehensive platform that offers resources, support, and community for women facing safety concerns.
        </motion.p>
        
        <motion.p 
          className="text-purple-600 text-sm sm:text-base md:text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Founded in 2023, our team of experts and advocates work tirelessly to create a safe space where women can access vital information, connect with support networks, and find the help they need.
        </motion.p>
        
        <motion.p 
          className="text-purple-600 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          We believe that every woman has the right to feel safe and empowered. Through education, support, and community building, we strive to make a positive impact in the lives of women everywhere.
        </motion.p>
      </motion.div>
    </div>
  )
}

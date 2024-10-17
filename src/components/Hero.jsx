'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-800 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Women's Safety</h2>
          <p className="text-xl mb-8">Your personal guardian for a safer world</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl mb-8">
          Designing cities where every woman's voice is heard.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
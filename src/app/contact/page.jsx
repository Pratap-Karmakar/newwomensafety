'use client'

import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300 min-h-screen flex flex-col items-center justify-center relative">
      <section id="contact" className="py-20 w-full z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-900 drop-shadow-lg">
            Contact Us
          </h2>
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 text-neutral-950 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-300" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 text-neutral-950 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-300" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-3 border text-neutral-950 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-300" 
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition-transform duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full transform rotate-180"
      >
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#4C1D95"
          />
        </svg>
      </motion.div>
    </div>
  )
}

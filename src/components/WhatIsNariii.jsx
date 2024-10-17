"use client"

import { motion } from 'framer-motion'
import Link from 'next/link' // Import Link
import React from 'react'

const WhatIsNariii = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-500 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTAgMEw2MCA2ME0wIDYwTDYwIDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            What is <span className="text-yellow-300">Nariii</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-10 text-purple-100 leading-relaxed"
          >
            Nariii is a pioneering social impact module dedicated to creating responsive, inclusive, safe, and equitable urban systems. We collaborate with government and non-government stakeholders, harnessing the power of big data to revolutionize city infrastructure and services.
          </motion.p>
          <Link href="/whatisnariii"> {/* Wrap the button with Link */}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-300 text-purple-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
            >
              Discover More
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-32 "
      >
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#4C1D95"/>
        </svg>
      </motion.div>
    </section>
  )
}

export default WhatIsNariii;

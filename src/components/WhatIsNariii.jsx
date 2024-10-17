'use client'

import { motion } from 'framer-motion'
import React from 'react'

const WhatIsNariii = () => {

  return (
    <section className="py-20 bg-purple-400">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">What is Nariii ?</h2>
          <p className="text-xl mb-8 text-gray-700">Nariii is a social impact module dedicated to creating responsive, inclusive, safe, and equitable urban systems. We work alongside government and non-government stakeholders, leveraging big data to enhance city infrastructure and services.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#b082ba] font-bold py-2 px-6 rounded-lg hover:bg-[#f5f3f5] hover:text-[#a053b1] transition duration-300"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsNariii
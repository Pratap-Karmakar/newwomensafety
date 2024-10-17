'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function Resources() {
  const resources = [
    "Self-Defense Techniques",
    "Emergency Preparedness",
    "Online Safety Guide",
    "Community Support Groups",
    "Legal Rights Information",
    "Mental Health Resources",
  ]

  return (
    <section id="resources" className="py-20 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Safety Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow flex items-center"
            >
              <ChevronRight className="w-6 h-6 text-purple-600 mr-2" />
              <span className="text-purple-800 font-medium">{resource}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
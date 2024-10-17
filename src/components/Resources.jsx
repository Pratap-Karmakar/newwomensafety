'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Shield, AlertTriangle, Lock, Users, Scale, Heart } from 'lucide-react'
import Link from 'next/link' // Import Link component

export default function Resources() {
  const [openIndex, setOpenIndex] = useState(null)

  const resources = [
    {
      title: "Self-Defense Techniques",
      icon: Shield,
      details: `Learn simple yet effective techniques such as blocking, striking, and escape moves. 
      Gain knowledge on maintaining awareness and avoiding potentially dangerous situations.`,
      link: "/selfdefensetechniques" // Define link for Read More
    },
    {
      title: "Emergency Preparedness",
      icon: AlertTriangle,
      details: `Create an emergency kit with necessary supplies. Develop a family or personal emergency plan, 
      including evacuation routes, communication strategies, and designated meeting spots.`,
      link: "/emergencypreparedness" // Add link for Emergency Preparedness
    },
    {
      title: "Online Safety Guide",
      icon: Lock,
      details: `Learn about secure browsing habits, avoiding phishing scams, and using strong passwords. 
      Safeguard your social media profiles and protect your data from hackers.`,
      link: "/onlinesafetyguide" // Add link for Online Safety Guide
    },
    {
      title: "Community Support Groups",
      icon: Users,
      details: `Discover local and online groups that offer emotional support. Find safe spaces for sharing 
      experiences, offering advice, and fostering connections among people with similar concerns.`,
      link: "/communitysupportgroups" // Add link for Community Support Groups
    },
    {
      title: "Legal Rights Information",
      icon: Scale,
      details: `Understand your rights during police encounters, tenant-landlord disputes, and workplace issues. 
      Learn steps to take if your rights are violated and where to find legal assistance.`,
      link: "/legalrightsinformation" // Add link for Legal Rights Information
    },
    {
      title: "Mental Health Resources",
      icon: Heart,
      details: `Access hotlines, therapy options, and self-care strategies. Find information on managing stress, 
      dealing with anxiety and depression, and maintaining a balanced life through mindfulness.`,
      link: "/mentalhealthresources" // Add link for Mental Health Resources
    }
  ]

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-purple-500/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Safety Resources</h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center space-x-4">
                  <resource.icon className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-purple-800">{resource.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-purple-700 leading-relaxed">{resource.details}</p>
                    {resource.link && (
                      <Link 
                        href={resource.link}
                        className="mt-4 inline-block text-purple-600 hover:underline font-medium"
                      >
                        Read More
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

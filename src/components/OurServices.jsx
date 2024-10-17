"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"  // Import useRouter from Next.js
import { MapPin, Shield, Users, Building, ChartBar, FileText } from "lucide-react"

const services = [
  {
    icon: <MapPin className="w-12 h-12 text-purple-600" />,
    title: "Safety Audits",
    description: "Conduct comprehensive safety audits of public spaces to identify areas for improvement."
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-600" />,
    title: "My Nariii",
    description: "Personal safety app for users to navigate cities safely and contribute to data collection."
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Nariii Nite",
    description: "Large scale data collection on city safety using camera-based technology."
  },
  {
    icon: <Building className="w-12 h-12 text-purple-600" />,
    title: "Nariii Site",
    description: "Safety audits of buildings and campuses to enhance security measures."
  },
  {
    icon: <ChartBar className="w-12 h-12 text-purple-600" />,
    title: "Nariii Analytics",
    description: "Data analysis and visualization platform for urban safety insights."
  },
  {
    icon: <FileText className="w-12 h-12 text-purple-600" />,
    title: "Nariii Guide",
    description: "Customized safety guidelines and recommendations for urban planning."
  }
]

export default function OurServices() {
  const router = useRouter(); // Initialize useRouter

  const handleReadMore = () => {
    router.push('/ourservices'); // Navigate to /ourservices when button is clicked
  }

  return (
    <div className="bg-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-extrabold text-purple-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-800 text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReadMore} // Trigger navigation when button is clicked
            className="bg-purple-300 flex items-center justify-center text-purple-800 font-bold py-2 px-6 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Read More
          </motion.button>
        </div>
      </div>
    </div>
  )
}

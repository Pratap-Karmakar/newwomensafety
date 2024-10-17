"use client"

import { motion } from "framer-motion"
import { MapPin, Shield, Users, Building, ChartBar, FileText } from "lucide-react"

const services = [
  {
    icon: <MapPin className="w-12 h-12 text-purple-600" />,
    title: "Safety Audits",
    description: "Comprehensive audits of public spaces, aimed at identifying and enhancing safety measures.",
    details: "Our safety audits focus on identifying potential hazards and evaluating safety measures using multiple parameters such as lighting, accessibility, security, and crowd control. We generate in-depth reports with actionable recommendations that prioritize safety improvements."
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-600" />,
    title: "My Nariii",
    description: "A personal safety app to help users navigate cities safely and contribute to urban safety data.",
    details: "My Nariii is a mobile app that empowers users to rate their surroundings for safety, discover secure routes, and share live locations with trusted contacts. The app helps build a collaborative database for city safety insights and keeps users updated on nearby safety incidents."
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Nariii Nite",
    description: "Advanced nighttime city safety data collection through vehicle-mounted camera technology.",
    details: "Nariii Nite leverages cutting-edge camera technology to monitor and collect data on city safety after dark. Mounted on mobile vehicles, these cameras capture real-time footage and data on urban conditions, providing insights for improving nighttime safety."
  },
  {
    icon: <Building className="w-12 h-12 text-purple-600" />,
    title: "Nariii Site",
    description: "Customized safety audits for specific locations such as campuses, offices, and residential complexes.",
    details: "Nariii Site provides targeted safety assessments for buildings and campuses. We evaluate everything from emergency exits, security systems, and access control to visibility and pedestrian safety. Our audit includes a complete security analysis to enhance on-site safety."
  },
  {
    icon: <ChartBar className="w-12 h-12 text-purple-600" />,
    title: "Nariii Analytics",
    description: "An advanced data analysis and visualization platform for urban safety insights.",
    details: "Nariii Analytics turns vast datasets from multiple sources into insightful safety visualizations. Our platform helps policymakers, urban planners, and security experts make informed decisions based on real-time safety trends, crime statistics, and community feedback."
  },
  {
    icon: <FileText className="w-12 h-12 text-purple-600" />,
    title: "Nariii Guide",
    description: "Tailored safety guidelines and strategies for improving urban safety and planning.",
    details: "The Nariii Guide offers customized consultations for urban planners and organizations aiming to improve local safety measures. We deliver detailed safety guidelines informed by extensive data analysis and global safety best practices."
  }
]

export default function NariiServices() {
  return (
    <div className="bg-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-extrabold text-purple-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-purple-800">{service.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-700">{service.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

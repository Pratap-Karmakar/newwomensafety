'use client'

import { motion } from 'framer-motion'
import { Shield, Book, Phone, Video, Mic } from 'lucide-react';
import { RiRemoteControlLine } from "react-icons/ri";

export default function Features() {
    const features = [
        { icon: <Shield className="w-12 h-12 mb-4 text-purple-600" />, title: "24/7 Protection", description: "Round-the-clock monitoring and alert system" },
        { icon: <Book className="w-12 h-12 mb-4 text-purple-600" />, title: "Safety Education", description: "Comprehensive resources and training materials" },
        { icon: <Phone className="w-12 h-12 mb-4 text-purple-600" />, title: "Emergency Contacts", description: "Quick access to your trusted contacts" },
        { icon: <Video className="w-12 h-12 mb-4 text-purple-600" />, title: "Video Recording", description: "Capture high-quality video during incidents" },
        { icon: <Mic className="w-12 h-12 mb-4 text-purple-600" />, title: "Audio Recording", description: "Record clear audio for evidence and analysis" },
        { icon: <RiRemoteControlLine className="w-12 h-12 mb-4 text-purple-600" />, title: "Remote Access", description: "Monitor and control your systems from anywhere" }
      ];
      

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-purple-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
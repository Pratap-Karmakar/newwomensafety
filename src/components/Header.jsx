'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-purple-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          SafeHer
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#features" className="hover:text-purple-200">Features</a>
          <a href="#resources" className="hover:text-purple-200">Resources</a>
          <a href="#contact" className="hover:text-purple-200">Contact</a>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-purple-700 py-2"
        >
          <a href="#features" className="block px-4 py-2 hover:bg-purple-600">Features</a>
          <a href="#resources" className="block px-4 py-2 hover:bg-purple-600">Resources</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-purple-600">Contact</a>
        </motion.div>
      )}
    </header>
  )
}
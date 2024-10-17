'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link' // Import Link from Next.js

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
          Nariii
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="hover:text-purple-200">Features</Link>
          <Link href="#resources" className="hover:text-purple-200">Resources</Link>
          {/* Use Link to navigate to the contact page */}
          <Link href="/contact" className="hover:text-purple-200">Contact</Link>
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
          <Link href="#features" className="block px-4 py-2 hover:bg-purple-600">Features</Link>
          <Link href="#resources" className="block px-4 py-2 hover:bg-purple-600">Resources</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-purple-600">Contact</Link>
        </motion.div>
      )}
    </header>
  )
}

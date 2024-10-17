import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";


export default function WomenSafetyWebsite() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <Hero />
      <Features />
      <Resources />
      <ContactForm />
      <Footer />
    </div>
  )
}


// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Menu, X, Shield, Book, Phone, ChevronRight } from 'lucide-react'

// export default function WomenSafetyWebsite() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   return (
//     <div className="min-h-screen bg-purple-50">
//       {/* Header */}
//       <header className="bg-purple-800 text-white">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold"
//           >
//             SafeHer
//           </motion.h1>
//           <nav className="hidden md:flex space-x-4">
//             <a href="#features" className="hover:text-purple-200">Features</a>
//             <a href="#resources" className="hover:text-purple-200">Resources</a>
//             <a href="#contact" className="hover:text-purple-200">Contact</a>
//           </nav>
//           <button onClick={toggleMenu} className="md:hidden">
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-purple-700 py-2"
//           >
//             <a href="#features" className="block px-4 py-2 hover:bg-purple-600">Features</a>
//             <a href="#resources" className="block px-4 py-2 hover:bg-purple-600">Resources</a>
//             <a href="#contact" className="block px-4 py-2 hover:bg-purple-600">Contact</a>
//           </motion.div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-b from-purple-800 to-purple-600 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-center"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Women's Safety</h2>
//             <p className="text-xl mb-8">Your personal guardian for a safer world</p>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
//             >
//               Get Started
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Features</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: <Shield className="w-12 h-12 mb-4 text-purple-600" />, title: "24/7 Protection", description: "Round-the-clock monitoring and alert system" },
//               { icon: <Book className="w-12 h-12 mb-4 text-purple-600" />, title: "Safety Education", description: "Comprehensive resources and training materials" },
//               { icon: <Phone className="w-12 h-12 mb-4 text-purple-600" />, title: "Emergency Contacts", description: "Quick access to your trusted contacts" },
//             ].map((feature, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-lg shadow-lg text-center"
//               >
//                 {feature.icon}
//                 <h3 className="text-xl font-semibold mb-2 text-purple-800">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section id="resources" className="py-20 bg-purple-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Safety Resources</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               "Self-Defense Techniques",
//               "Emergency Preparedness",
//               "Online Safety Guide",
//               "Community Support Groups",
//               "Legal Rights Information",
//               "Mental Health Resources",
//             ].map((resource, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-4 rounded-lg shadow flex items-center"
//               >
//                 <ChevronRight className="w-6 h-6 text-purple-600 mr-2" />
//                 <span className="text-purple-800 font-medium">{resource}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section id="contact" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Contact Us</h2>
//           <motion.form 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-lg mx-auto"
//           >
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//               <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//               <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//               <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
//             </div>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-purple-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h2 className="text-2xl font-bold">SafeHer</h2>
//               <p className="text-sm">Empowering women's safety worldwide</p>
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-purple-200">Privacy Policy</a>
//               <a href="#" className="hover:text-purple-200">Terms of Service</a>
//               <a href="#" className="hover:text-purple-200">FAQ</a>
//             </div>
//           </div>
//           <div className="mt-8 text-center text-sm">
//             © {new Date().getFullYear()} SafeHer. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




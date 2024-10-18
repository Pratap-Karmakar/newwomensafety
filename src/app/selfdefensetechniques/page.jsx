'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SelfDefenseTechniques = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700 p-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-purple-600">Self-Defense Techniques</h1>
        <p className="text-lg lg:text-xl">
          Empower yourself by learning effective self-defense techniques to protect against potential threats.
        </p>
      </motion.div>

      {/* Blocking Techniques Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-purple-600">Blocking Techniques</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">1. High Block</h3>
            <p className="text-md md:text-lg">
              Raise your arm to shield your face from an incoming attack. Keep your palm facing outward to protect.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">2. Low Block</h3>
            <p className="text-md md:text-lg">
              Lower your arm to protect your lower torso or groin from strikes. Maintain a firm arm to absorb the attack.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">3. Forearm Block</h3>
            <p className="text-md md:text-lg">
              Use your forearm to deflect strikes aimed at your head or body, redirecting the force away.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Striking Techniques Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-purple-600">Striking Techniques</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">1. Palm Strike</h3>
            <p className="text-md md:text-lg">
              Use the base of your palm to strike the attacker's nose or chin. A direct hit can cause disorientation.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">2. Elbow Strike</h3>
            <p className="text-md md:text-lg">
              Elbow strikes are powerful in close range. Aim for the face, neck, or torso to deliver a sharp blow.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">3. Knee Strike</h3>
            <p className="text-md md:text-lg">
              Drive your knee into the attacker's groin or abdomen to incapacitate them quickly.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Escape Moves Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-purple-600">Escape Moves</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">1. Wrist Escape</h3>
            <p className="text-md md:text-lg">
              Pull your hand towards the attacker’s thumb to break free from their grip on your wrist.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">2. Rear Grab Escape</h3>
            <p className="text-md md:text-lg">
              Drop your weight and twist your body to escape from a rear bear hug or grab.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">3. Hair Grab Escape</h3>
            <p className="text-md md:text-lg">
              Push against the attacker’s hand while twisting your body to free yourself from a hair grab.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Awareness Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-purple-600">Awareness Tips</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">1. Stay Alert</h3>
            <p className="text-md md:text-lg">
              Always be aware of your surroundings, especially when in unfamiliar or isolated areas.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">2. Trust Your Instincts</h3>
            <p className="text-md md:text-lg">
              If something feels off, trust your instincts and remove yourself from the situation.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">3. Avoid Distractions</h3>
            <p className="text-md md:text-lg">
              Avoid being engrossed in your phone or headphones while walking in public places.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SelfDefenseTechniques;

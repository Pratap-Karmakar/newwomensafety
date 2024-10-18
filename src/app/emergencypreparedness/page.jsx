'use client'

import React from "react";
import { motion } from "framer-motion";

const EmergencyPreparedness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700  p-8">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Emergency Preparedness</h1>
        <p className="text-lg">
          Learn how to prepare yourself and your family for emergencies with the right plans and supplies.
        </p>
      </motion.div>

      {/* Emergency Kit Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Create an Emergency Kit</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Water & Food</h3>
            <p>
              Store at least a 3-day supply of water (1 gallon per person per day) and non-perishable food.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. First Aid Kit</h3>
            <p>
              Include bandages, antiseptic wipes, pain relievers, and prescription medications.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Flashlight & Batteries</h3>
            <p>
              Ensure you have a flashlight, extra batteries, and other tools for power outages.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">4. Multi-Tool & Whistle</h3>
            <p>
              A multi-tool and whistle can help signal for help and perform basic survival tasks.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Emergency Plan Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Develop an Emergency Plan</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Family Communication</h3>
            <p>
              Create a communication plan with designated contacts in case of separation during an emergency.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Evacuation Routes</h3>
            <p>
              Map out evacuation routes from your home, and make sure everyone in the family knows them.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Meeting Spots</h3>
            <p>
              Identify safe meeting spots for your family in case you cannot return home during an emergency.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">4. Emergency Contacts</h3>
            <p>
              Keep a list of emergency contacts, including local authorities, family members, and friends.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* General Preparedness Tips Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">General Preparedness Tips</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Stay Informed</h3>
            <p>Monitor weather reports and emergency alerts to stay ahead of any potential danger.</p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Practice Drills</h3>
            <p>
              Conduct emergency drills with your family to ensure everyone knows the procedures and what to do.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Stay Calm</h3>
            <p>
              In the event of an emergency, staying calm and composed will help you make better decisions.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default EmergencyPreparedness;

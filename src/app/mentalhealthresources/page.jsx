'use client'

import React from "react";
import { motion } from "framer-motion";

const MentalHealthResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700  p-8">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Mental Health Resources</h1>
        <p className="text-lg">
          Access hotlines, therapy options, and self-care strategies to maintain your mental well-being.
        </p>
      </motion.div>

      {/* Hotlines Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Mental Health Hotlines</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Vandrevala Foundation Helpline</h3>
            <p>Call: 1860 266 2345 / 1800 233 3330</p>
            <p>
              Offers support for individuals in distress and those experiencing mental health issues.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. AASRA</h3>
            <p>Call: +91-9820466726</p>
            <p>
              A confidential helpline that provides emotional support and guidance for mental health.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Snehi</h3>
            <p>Call: +91-9582208181</p>
            <p>
              Offers support for those dealing with depression, anxiety, and suicidal thoughts.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Therapy Options Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Therapy Options</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Online Therapy Platforms</h3>
            <p>
              Platforms like <strong>TalktoAngel</strong> and <strong>TherapyRoute</strong> connect you with licensed therapists online.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. In-Person Therapy</h3>
            <p>
              Seek therapy from local mental health professionals, psychologists, or psychiatrists in your area.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Support Groups</h3>
            <p>
              Join support groups available in your community for shared experiences and coping strategies.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Self-Care Strategies Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Self-Care Strategies</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Practice Mindfulness</h3>
            <p>
              Engage in mindfulness exercises like meditation and yoga to manage stress and enhance emotional well-being.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Stay Physically Active</h3>
            <p>
              Regular exercise can help improve mood and reduce anxiety. Try activities like walking, running, or dancing.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Maintain a Healthy Routine</h3>
            <p>
              Establish a daily routine that includes time for work, relaxation, and hobbies to maintain balance.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Managing Stress and Anxiety Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Managing Stress, Anxiety, and Depression</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Journaling</h3>
            <p>
              Write down your thoughts and feelings to help process emotions and gain perspective.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Limit Screen Time</h3>
            <p>
              Reducing screen time, especially on social media, can help alleviate feelings of anxiety and comparison.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Connect with Others</h3>
            <p>
              Maintain connections with friends and family. Share your feelings and seek support when needed.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MentalHealthResources;

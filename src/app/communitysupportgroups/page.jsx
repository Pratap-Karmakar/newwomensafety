'use client'

import React from "react";
import { motion } from "framer-motion";

const CommunitySupportGroups = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700  p-8">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Community Support Groups</h1>
        <p className="text-lg">
          Discover local and online groups that offer emotional support and foster connections among individuals with similar concerns.
        </p>
      </motion.div>

      {/* Local Support Groups Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Local Support Groups</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Find Local Meetups</h3>
            <p>
              Use platforms like Meetup.com to find local groups that meet regularly for support and sharing.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Community Centers</h3>
            <p>
              Visit community centers or local health organizations for information on support groups available in your area.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Hospitals and Clinics</h3>
            <p>
              Check with hospitals and clinics, as they often host support groups for patients and their families.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Online Support Groups Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Online Support Groups</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Online Platforms</h3>
            <p>
              Join online platforms like Facebook Groups, Reddit, or specialized forums that focus on specific issues.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Virtual Meetings</h3>
            <p>
              Participate in virtual meetings through Zoom or Google Meet hosted by various organizations.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Mobile Apps</h3>
            <p>
              Use mobile apps dedicated to mental health and support that connect you with peers.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Safe Spaces Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Safe Spaces for Sharing</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Confidentiality</h3>
            <p>
              Look for groups that prioritize confidentiality and create a safe space for open discussions.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Supportive Environment</h3>
            <p>
              Ensure the group fosters a supportive environment where all participants feel valued and respected.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Experienced Facilitators</h3>
            <p>
              Choose groups facilitated by trained professionals who can guide discussions effectively.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Fostering Connections Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Fostering Connections</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Building Relationships</h3>
            <p>
              Engage with others to build relationships and share experiences that foster connection.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Group Activities</h3>
            <p>
              Participate in group activities or workshops that enhance bonding and mutual support.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Follow-up Connections</h3>
            <p>
              Stay connected with group members outside meetings for continued support and friendship.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CommunitySupportGroups;

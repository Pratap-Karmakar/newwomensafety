'use client'

import React from "react";
import { motion } from "framer-motion";

const OnlineSafetyGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700  p-8">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Online Safety Guide</h1>
        <p className="text-lg">
          Stay safe online with these essential tips for secure browsing, data protection, and social media safety.
        </p>
      </motion.div>

      {/* Secure Browsing Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Secure Browsing Habits</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Use HTTPS</h3>
            <p>
              Always look for "https://" in the URL for secure connections when browsing.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Avoid Public Wi-Fi</h3>
            <p>
              Refrain from accessing sensitive accounts or information over public Wi-Fi networks.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Regularly Update Software</h3>
            <p>
              Keep your browser and operating system updated to protect against vulnerabilities.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Phishing Scams Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Avoiding Phishing Scams</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Verify Email Addresses</h3>
            <p>
              Always check the sender's email address for legitimacy before clicking any links.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Be Wary of Unsolicited Messages</h3>
            <p>
              Avoid responding to unsolicited emails or messages that ask for personal information.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Use Security Software</h3>
            <p>
              Install reputable antivirus software to help detect and block phishing attempts.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Strong Passwords Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Using Strong Passwords</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Create Unique Passwords</h3>
            <p>
              Use a unique password for every account, combining letters, numbers, and special characters.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Enable Two-Factor Authentication</h3>
            <p>
              Activate two-factor authentication wherever possible for an added layer of security.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Use a Password Manager</h3>
            <p>
              Consider using a password manager to securely store and manage your passwords.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Social Media Safety Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Safeguarding Social Media Profiles</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Review Privacy Settings</h3>
            <p>
              Regularly check and update your privacy settings to control who can see your information.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Be Mindful of Friend Requests</h3>
            <p>
              Only accept friend requests from people you know and trust to avoid scams and unwanted attention.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Limit Personal Information Sharing</h3>
            <p>
              Avoid sharing sensitive personal information such as your phone number or address publicly.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Data Protection Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Protecting Your Data</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Regularly Backup Data</h3>
            <p>
              Backup important data to an external drive or cloud service to prevent loss from hacking.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Use Encryption</h3>
            <p>
              Encrypt sensitive files and communications to protect them from unauthorized access.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Monitor Accounts Regularly</h3>
            <p>
              Keep an eye on your accounts for unusual activity and report any suspicious behavior immediately.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default OnlineSafetyGuide;

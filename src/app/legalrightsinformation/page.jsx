'use client'

import React from "react";
import { motion } from "framer-motion";

const LegalRightsInformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br text-zinc-800 from-purple-300 via-purple-100 to-purple-700  p-8">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Legal Rights Information</h1>
        <p className="text-lg">
          Understand your rights during police encounters, tenant-landlord disputes, and workplace issues in India.
        </p>
      </motion.div>

      {/* Police Encounters Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Rights During Police Encounters</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Right to Remain Silent</h3>
            <p>
              You have the right to remain silent and not answer questions asked by the police.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Right to Legal Representation</h3>
            <p>
              You have the right to consult a lawyer before answering any questions.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Right Against Arbitrary Arrest</h3>
            <p>
              No one can be arrested without a valid warrant or without being informed of the reasons for arrest.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Tenant-Landlord Disputes Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Tenant-Landlord Rights</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Right to a Written Agreement</h3>
            <p>
              Tenants have the right to a written rental agreement that clearly outlines terms and conditions.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Right to Live in Peace</h3>
            <p>
              Tenants have the right to live without disturbance from landlords or other tenants.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Right to Return of Security Deposit</h3>
            <p>
              Landlords must return the security deposit within a stipulated time after the tenant vacates the property.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Workplace Rights Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Workplace Rights</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Right to Fair Treatment</h3>
            <p>
              Employees have the right to be treated fairly without discrimination based on gender, caste, or religion.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Right to Safe Working Conditions</h3>
            <p>
              Employers must provide a safe and healthy working environment for all employees.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Right to Organize</h3>
            <p>
              Employees have the right to form unions and organize collectively for their rights and interests.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Steps to Take if Rights are Violated Section */}
      <motion.div
        className="mb-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Steps to Take if Your Rights are Violated</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Document the Incident</h3>
            <p>
              Keep detailed records of the incident, including dates, times, and witnesses.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Report the Violation</h3>
            <p>
              Report the incident to the relevant authorities, such as the police or labor department.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Seek Legal Assistance</h3>
            <p>
              Consult with a lawyer or legal aid organization for guidance on your rights and options.
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Where to Find Legal Assistance Section */}
      <motion.div
        className="mb-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Where to Find Legal Assistance</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1. Legal Aid Services</h3>
            <p>
              Contact legal aid services that provide free or low-cost legal assistance based on income.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">2. Bar Associations</h3>
            <p>
              Reach out to local bar associations for referrals to qualified lawyers.
            </p>
          </li>
          <li className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">3. Online Legal Platforms</h3>
            <p>
              Utilize online legal platforms like Vakilsearch or Legal India for consultations and legal advice.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default LegalRightsInformation;

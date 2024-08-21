'use client';
import React from 'react';
import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'John Doe',
    title: 'Chief Executive Officer',
    image: '/assets/images/staff1.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Chief Operating Officer',
    image: '/assets/images/staff2.jpg',
  },
  {
    name: 'Michael Williams',
    title: 'Head of Sales',
    image: '/assets/images/staff3.jpg',
  },
  {
    name: 'Emily Brown',
    title: 'Chief Marketing Officer',
    image: '/assets/images/staff4.jpg',
  },
  {
    name: 'David Johnson',
    title: 'Chief Financial Officer',
    image: '/assets/images/staff5.jpg',
  },
  {
    name: 'Chris Lee',
    title: 'Head of Customer Relations',
    image: '/assets/images/staff6.jpg',
  },
];

const StaffSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {staffMembers.map((staff, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
            <p className="text-gray-600 mt-2">{staff.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;

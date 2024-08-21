// import React from 'react';

// const ContactForm = () => {
//   return (
//     <section className="max-w-2xl mx-auto p-8">
//       <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
//       <form className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch with Us
        </motion.h2>
        <motion.p 
          className="text-lg text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're here to assist you with any questions or inquiries. Reach out to us today!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="bg-white text-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Our Address</h3>
              <p className="mt-4">123 Real Estate Lane, Suite 456,<br/>City, Country, 78910</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Call Us</h3>
              <p className="mt-4">Phone: <a href="tel:+1234567890" className="text-green-300">+123 456 7890</a></p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold">WhatsApp Us</h3>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors duration-300">
                Chat on WhatsApp
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Email Us</h3>
              <p className="mt-4">Email: <a href="mailto:info@orangesunhomes.com" className="text-green-300">info@orangesunhomes.com</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


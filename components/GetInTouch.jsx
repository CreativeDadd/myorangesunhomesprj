// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const contactMethods = [
//   { name: 'WhatsApp', link: 'https://wa.me/1234567890', icon: '📱' },
//   { name: 'Phone Call', link: 'tel:+1234567890', icon: '📞' },
//   { name: 'SMS', link: 'sms:+1234567890', icon: '✉️' },
//   { name: 'Contact Form', link: '/contact', icon: '📝' },
// ];

// const GetInTouch = () => {
//   return (
//     <section className="max-w-4xl mx-auto p-8">
//       <h2 className="text-center text-3xl font-bold mb-8">Get In Touch</h2>
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {contactMethods.map((method, index) => (
//           <motion.a
//             key={index}
//             href={method.link}
//             className="p-6 bg-blue-500 text-white rounded-lg flex flex-col items-center justify-center text-center shadow-lg hover:bg-blue-700 transition-all"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <span className="text-4xl mb-4">{method.icon}</span>
//             <span>{method.name}</span>
//           </motion.a>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default GetInTouch;

'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GetInTouch = () => {
  const contactItems = [
    {
      label: 'WhatsApp',
      link: 'https://wa.me/+2347035391488',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.202 1.614 6.023L0 24l6.138-1.59C8.124 23.44 10.059 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.447 17.198l-.836 1.166c-.233.324-.676.39-1.002.161-1.137-.775-2.182-1.707-3.11-2.78-.795-.919-1.463-1.938-2.047-3.025-.326-.606-.064-1.377.599-1.616l1.437-.507c.371-.13.787.032 1.012.365l.858 1.295c.148.223.12.511-.07.7l-.597.599c-.109.109-.145.274-.091.423.23.621.684 1.408 1.418 2.145.734.735 1.519 1.19 2.141 1.42.15.055.314.017.422-.09l.601-.598c.19-.19.477-.217.699-.071l1.294.86c.332.22.495.64.366 1.01z" />
        </svg>
      ),
    },
    {
      label: 'Phone Call',
      link: 'tel:+2347035391488',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h2l3 9 3-6 3 9 3-6h3"
          />
        </svg>
      ),
    },
    {
      label: 'SMS',
      link: 'sms:+2347035391488',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8z"
          />
        </svg>
      ),
    },
    {
      label: 'Email',
      link: 'mailto:example@example.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H8m4 4H8m-4-8h16m-7 4h4"
          />
        </svg>
      ),
    },
    {
      label: 'Contact Form',
      link: '/contact',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l4-4 4 4m-4-4v12"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-white mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Get In Touch
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transform hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item.link.startsWith('http') || item.link.startsWith('mailto') || item.link.startsWith('tel') || item.link.startsWith('sms') ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
                <span className="text-lg font-semibold text-gray-800">{item.label}</span>
              </a>
            ) : (
              <Link href={item.link}>
                {item.icon}
                <span className="text-lg font-semibold text-gray-800">{item.label}</span>
              </Link>
            )}
          </motion.div> 
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;

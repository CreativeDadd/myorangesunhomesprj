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


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const contactMethods = [
  { name: 'WhatsApp', link: 'https://wa.me/1234567890', icon: '📱' },
  { name: 'Phone Call', link: 'tel:+1234567890', icon: '📞' },
  { name: 'SMS', link: 'sms:+1234567890', icon: '✉️' },
  { name: 'Contact Form', link: '/contact', icon: '📝' },
];

const GetInTouch = () => {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-center text-3xl font-bold mb-8">Get In Touch</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {contactMethods.map((method, index) => {
          // Check if the method is an internal link or external
          const isInternalLink = method.link.startsWith('/');

          return (
            <motion.div
              key={index}
              className="p-6 bg-blue-500 text-white rounded-lg flex flex-col items-center justify-center text-center shadow-lg hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isInternalLink ? (
                <Link href={method.link}>
                  <span className="text-4xl mb-4">{method.icon}</span>
                  <span>{method.name}</span>
                </Link>
              ) : (
                <a href={method.link} className="flex flex-col items-center">
                  <span className="text-4xl mb-4">{method.icon}</span>
                  <span>{method.name}</span>
                </a>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default GetInTouch;


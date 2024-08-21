// 'use client';
// import React from 'react';
// import Link from 'next/link';


// const ReadMore = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Full Blog Title Goes Here
//         </h1>
//         <p className="text-gray-700 leading-relaxed">
//           This is where the full blog content would be displayed. You can include text, images, and any other content necessary to make this page informative and engaging for your readers.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReadMore;
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ReadMore = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 p-8 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exploring the Real Estate Market Trends
          </h1>
          <p className="text-gray-600 text-sm">Published on August 19, 2024</p>
        </header>

        <article className="text-gray-700 leading-relaxed space-y-6">
          <p>
            The real estate market is ever-evolving, influenced by various factors like economic conditions, consumer preferences, and technological advancements. As we move through 2024, there are some emerging trends that are shaping the way we view and invest in real estate. From the increasing demand for sustainable housing to the growing interest in suburban and rural properties, staying ahead of these trends can make all the difference for buyers, sellers, and investors.
          </p>
          <p>
            One of the key trends we're seeing is the shift towards environmentally-friendly homes. Buyers today are more conscious of their carbon footprint and are willing to pay a premium for energy-efficient properties. This trend isn't just limited to residential real estate; commercial properties are also adopting green building practices to attract eco-conscious tenants.
          </p>
          <p>
            Another significant trend is the rise of remote work, which has led to an increased demand for properties outside of major cities. With more people working from home, there's a newfound appreciation for larger homes with dedicated office spaces and outdoor areas. Suburban and rural areas are experiencing a surge in property values as city dwellers seek more space and a better quality of life.
          </p>
          <p>
            Technology continues to play a pivotal role in the real estate market. Virtual tours, AI-powered property recommendations, and blockchain-based transactions are making the buying and selling process more efficient. As these technologies become more widespread, we can expect a further transformation in how real estate transactions are conducted.
          </p>
          <p>
            In conclusion, the real estate market is undergoing significant changes, driven by sustainability, remote work, and technological advancements. Staying informed about these trends can help investors and buyers make better decisions and capitalize on emerging opportunities. Whether you're looking to buy, sell, or invest, understanding the latest market trends is essential for success in the ever-changing real estate landscape.
          </p>
        </article>

        <footer className="mt-8">
          <Link href="/blogs">
            <motion.button
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Blog
            </motion.button>
          </Link>
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default ReadMore;

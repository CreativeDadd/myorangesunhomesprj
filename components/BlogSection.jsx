// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const blogPosts = [
//   {
//     title: 'Exploring the Countryside Retreats',
//     image: '/assets/images/blog1.jpg',
//     body: 'Discover peaceful retreats in the countryside, very perfect for a getaway...',
//     link: '/blogs/read-more',
//   },
//   {
//     title: 'Modern Living in the City',
//     image: '/assets/images/blog2.jpg',
//     body: 'Experience the luxury and convenience of modern living in the heart of the city...',
//     link: '/blogs/read-more',
//   },
//   {
//     title: 'Vacation Homes by the Beach',
//     image: '/assets/images/blog3.jpg',
//     body: 'Find your perfect vacation home with stunning ocean views...',
//     link: '/blogs/read-more',
//   },
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-12 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500">
//       <h2 className="text-4xl font-bold text-center text-white mb-8">Latest Blog Posts</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//         {blogPosts.map((post, index) => (
//           <motion.div 
//             key={index}
//             className="bg-white rounded-lg shadow-lg p-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
//             <p className="text-gray-600 mt-2">{post.body}</p>
//             <Link href={post.link}>
//               <motion.a
//                 className="text-orange-500 font-semibold mt-4 inline-block hover:underline"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Read More...
//               </motion.a>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;



'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Real Estate Market Trends',
    image: '/assets/images/blog1.jpg',
    body: 'Stay ahead with the latest real estate market trends in 2024...',
  },
  {
    id: 2,
    title: 'How to Choose Your Perfect Home',
    image: '/assets/images/blog2.jpg',
    body: 'Tips and tricks for finding your dream home in today’s market...',
  },
  {
    id: 3,
    title: 'The Future of Vacation Getaways',
    image: '/assets/images/blog3.jpg',
    body: 'Explore the future of vacation accommodations and getaways...',
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Blogs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              {blog.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {blog.body}
            </p>
            <Link href="/blogs/read-more" className="inline-block mt-4 text-orange-500 font-semibold">
              Read More...
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

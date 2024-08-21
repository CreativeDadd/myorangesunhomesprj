'use client'
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    comment: 'We had an amazing experience with Orange-Sun Homes! They found the perfect vacation home for our family.',
    image: '/assets/images/testifier.webp',
  },
  {
    name: 'Michael Roberts',
    comment: 'The service was exceptional, and the property exceeded our expectations. Highly recommended!',
    image: '/assets/images/testimonial2.jpg',
  },
  {
    name: 'Emily Davis',
    comment: 'Thanks to Orange-Sun Homes, we relocated smoothly and found the ideal rental property!',
    image: '/assets/images/testimonial6.jpg',
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 mt-3">"{testimonial.comment}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

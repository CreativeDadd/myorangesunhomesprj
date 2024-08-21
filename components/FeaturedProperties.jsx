'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const featuredProperties = [
  {
    image: '/assets/images/featured1.jpg',
    title: 'Luxury Penthouse in Downtown',
    price: '$4,500/month',
    description: 'Experience the height of luxury in this stunning downtown penthouse.',
  },
  {
    image: '/assets/images/featured2.jpg',
    title: 'Cozy Cottage Retreat',
    price: '$1,000/week',
    description: 'Escape to this cozy cottage surrounded by nature.',
  },
  {
    image: '/assets/images/featured3.jpg',
    title: 'Spacious Family Home',
    price: '$2,800/month',
    description: 'Perfect for families, this spacious home is located in a quiet suburb.',
  },
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Featured Properties</h2>
      <div className="max-w-6xl mx-auto relative overflow-hidden">
        <div className="slider-container">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={index}
              className={`slide ${index === currentIndex ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center text-white mt-4">
                <h3 className="text-3xl font-semibold">{property.title}</h3>
                <p className="text-lg">{property.price}</p>
                <p className="mt-2">{property.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertiesListingSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Luxurious Beachfront Villa',
      location: 'Banana Island, Lagos',
      price: '₦4,500,000',
      discountedPrice: '₦1,625,000',
      imageUrl: '/assets/images/property1.jpg',
      description: 'A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Great COMFORT Villa',
      location: 'Adewale Street, Vivet LAGOS',
      price: '₦2,500,000',
      discountedPrice: '₦1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 3,
      title: 'Beckley Estate',
      location: 'Abge Road, Abule Tailor',
      price: '₦3,500,000',
      discountedPrice: '₦2,625,000',
      imageUrl: '/assets/images/deal11.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 4,
      title: 'Jakande Housing Estate',
      location: 'Pecko Street, Iyana-Ipaja, Lagos',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/deal9.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/deal2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    // Add more properties here
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600
">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Listings</h2>

        <div className="mb-8 text-center">
          <input 
            type="text" 
            placeholder="Search properties..."
            className="w-full max-w-md px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map(property => (
            <motion.div 
              key={property.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-red-500 line-through">{property.price}</p>
                <p className="text-green-500">{property.discountedPrice}</p>
                <p className="text-sm mt-2">{property.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href={`/properties/${property.id}`} className="text-orange-600 hover:text-orange-700 font-semibold">
                    View Details
                  </Link>
                  <Link href={`/deal/${property.id}`}  className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
                    Deal
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/properties/1" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

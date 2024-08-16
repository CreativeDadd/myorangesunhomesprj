import { motion } from 'framer-motion';
import Image from 'next/image';

const listings = [
    {
        id: 1,
        title: 'Luxurious Villa in Beverly Hills',
        price: '$3,200,000',
        imgSrc: '/assets/images/villa.jpg',
        description: 'A stunning villa offering breathtaking views of the city and the ocean.',
    },
    {
        id: 2,
        title: 'Modern Apartment in New York',
        price: '$1,850,000',
        imgSrc: '/assets/images/apartment.jpg',
        description: 'A stylish apartment located in the heart of the city, close to all amenities.',
    },
    // Add more listings as needed
];

const  ViewListings = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                Featured Listings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {listings.map(listing => (
                    <motion.div
                        key={listing.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <Image
                            src={listing.imgSrc}
                            alt={listing.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {listing.title}
                            </h3>
                            <p className="text-xl text-gray-600">{listing.price}</p>
                            <p className="mt-3 text-gray-600">{listing.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default  ViewListings
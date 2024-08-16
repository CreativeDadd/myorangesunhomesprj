'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <motion.div 
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Find Your Dream Home</h1>
                <p className={styles.subtitle}>With Orange Sun Homes, your perfect home is just a click away.</p>
                <div className={styles.ctaContainer}>
                    <motion.a href="/contact" className={styles.cta} whileHover={{ scale: 1.05 }}>
                        View Listings
                    </motion.a>
                    <motion.a href="/testlink" className={styles.cta} whileHover={{ scale: 1.05 }}>
                        Get in Touch
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

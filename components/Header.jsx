'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Orange Sun Homes
                </Link>
                <motion.div 
                    className={styles.hamburger} 
                    onClick={toggleMenu}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                >
                    <div className={styles.line1} />
                    <div className={styles.line2} />
                </motion.div>
                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <Link href="/">Home</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <Link href="/about">About</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <Link href="/services">Services</Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}>
                            <Link href="/contact">Contact</Link>
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

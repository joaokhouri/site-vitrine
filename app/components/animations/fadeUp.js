'use client';
import { motion } from 'motion/react';

export default function FadeIn({ children, isScrolled, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isScrolled ? -50 : 0,
        opacity: isScrolled ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

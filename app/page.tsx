'use client';
import { motion } from 'framer-motion';
import './globals.css';

export default function Home() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen text-center px-4 pb-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-3xl font-semibold">
        Welcome to my personal portfolio! <br/>Feel free to check out the other sections.
      </h1>
    </motion.div>
  );
}
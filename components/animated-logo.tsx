'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <>
      {/* Mobile Logo */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
        >
          <Image
            src="/disco-mocktail.svg"
            alt="PINKYS UP"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </motion.div>
      </motion.div>

      {/* Desktop Logo */}
      <motion.div
        className="hidden md:flex items-center gap-4 text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="shrink-0"
        >
          <Image
            src="/disco-mocktail.svg"
            alt="PINKYS UP"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </motion.div>
        
        <div className="flex items-center">
          <motion.span
            className="inline-block"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            PINKYS
          </motion.span>
          <motion.span
            className="inline-block pl-2"
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            UP
          </motion.span>
          <motion.span
            className="inline-block pl-2"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            DC
          </motion.span>
        </div>
      </motion.div>
    </>
  );
}

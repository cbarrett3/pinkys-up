'use client';

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import React from 'react';

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20" />
        <Image
          src="/polaroid.jpg"
          alt="People enjoying drinks at a social gathering"
          fill
          priority
          className="object-cover brightness-75"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl backdrop-blur-md bg-black/40 p-8 rounded-3xl shadow-xl border border-white/20 hover:bg-black/50 hover:border-white/30 transition-all duration-300"
          whileHover={{ scale: 1.01 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 text-center"
          >
            Elevate your next event with PINKYS UP ✨
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl font-medium text-center space-y-4 text-gray-100 drop-shadow-lg"
          >
            <span className="block mb-4">
              PINKYS UP DC is a fresh mocktail experience crafted by Brenda Pereira Vargas 
              to revitalize the District&apos;s social scene.
            </span>
            <span className="block">
              Each creation is infused with creativity and passion, bringing a healthy, 
              vibrant buzz to the city. Mobile and ready to serve, we&apos;re here to make your 
              next gathering unforgettable. ✨
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

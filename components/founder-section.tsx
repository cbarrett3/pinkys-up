'use client';

import React from 'react';
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export function FounderSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-400/30 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500" />
            <div className="relative backdrop-blur-md bg-white/30 p-8 rounded-[32px] border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <Link 
                  href="https://www.instagram.com/stories/brendaaa_pereira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                        <Image
                          src="/brenda-capital.jpeg"
                          alt="Brenda Pereira Vargas - Founder of PINKYS UP DC"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold mb-4">Elevating Moments by Brenda✨</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Hi, I'm Brenda Pereira Vargas, founder of PINKYS UP DC. My passion for crafting 
                      exceptional non-alcoholic beverages stems from a deep appreciation for inclusive 
                      celebration. Every mocktail we create is an expression of creativity and care, 
                      designed to make everyone feel special and celebrated.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PINKYS UP, I'm bringing a fresh perspective to DC's beverage scene, 
                      proving that sophisticated, delicious drinks don't need alcohol to create 
                      unforgettable moments.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

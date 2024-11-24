'use client';

import React from 'react';
import Image from "next/image"
import { motion } from 'framer-motion';

export function ServiceBars() {
  return (
    <section className="py-20" id="bars">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-relaxed">Our Mobile Mocktail Experience</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 blur-xl rounded-[32px] group-hover:blur-2xl transition-all duration-300" />
          <div className="relative backdrop-blur-md bg-white/30 p-8 rounded-[32px] border border-white/20 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/cart.jpg"
                    alt="PINKYS UP DC Mobile Mocktail Cart"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">The Mobile Mocktail Cart</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our signature vintage-inspired mobile bar cart brings elegance and charm to any event. 
                  Perfect for intimate gatherings and sophisticated soirées, our cart delivers a unique 
                  blend of style and refreshment. Each event is carefully curated to create an unforgettable 
                  experience, combining artisanal mocktails with impeccable service.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Handcrafted Non-Alcoholic Cocktails
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Professional Service Staff
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✦</span>
                    Custom Menu Creation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

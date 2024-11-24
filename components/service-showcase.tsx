'use client';

import React from 'react';
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ServiceShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mobile Bar</h2>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/30 p-8 rounded-3xl shadow-xl border border-white/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cart.jpg"
                    alt="PINKYS UP DC Mobile Mocktail Cart"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">The Mobile Mocktail Cart</h3>
                <p className="text-gray-700 text-lg">
                  Our signature vintage-inspired mobile bar cart brings elegance and charm to any event. 
                  Perfect for intimate gatherings and sophisticated soirées, our cart delivers a unique 
                  blend of style and refreshment to your special occasion.
                </p>
                <Button variant="secondary" className="mt-4">Learn More</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

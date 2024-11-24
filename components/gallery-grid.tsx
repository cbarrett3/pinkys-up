'use client';

import React from 'react';
import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  {
    src: "/drinks.jpg",
    alt: "Rooftop bar with DC skyline",
    width: 600,
    height: 800,
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    alt: "Corporate wellness event",
    width: 800,
    height: 600,
    className: "col-span-2 row-span-1",
  },
  {
    src: "/2.jpg",
    alt: "Handcrafted mocktails",
    width: 600,
    height: 600,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/3.jpg",
    alt: "Capitol celebration drinks",
    width: 600,
    height: 600,
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    alt: "Team building event",
    width: 600,
    height: 800,
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80",
    alt: "Garden party setup",
    width: 600,
    height: 600,
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80",
    alt: "Social networking event",
    width: 800,
    height: 600,
    className: "col-span-2 row-span-1",
  },
];

export default function GalleryGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md shadow-xl border border-white/20"
    >
      {galleryImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`relative overflow-hidden rounded-2xl group ${image.className}`}
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 left-4 text-white font-medium">{image.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

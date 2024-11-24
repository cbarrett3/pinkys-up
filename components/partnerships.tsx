'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export function Partnerships() {
  const partners = [
    {
      name: "DC LEAD",
      description: "DC Education Non-Profit",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      color: "from-blue-400/20 to-cyan-400/20"
    },
    {
      name: "PRANA",
      description: "Biodiversity Start-up",
      logo: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&q=80",
      color: "from-green-400/20 to-emerald-400/20"
    },
    {
      name: "DNV",
      description: "Norwegian Sustainability Company",
      logo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80",
      color: "from-purple-400/20 to-pink-400/20"
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Partners in the DMV ❤️
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} blur-xl rounded-[32px] group-hover:blur-2xl transition-all duration-300`} />
              <motion.div
                className="relative backdrop-blur-md bg-white/30 rounded-[32px] p-8 border border-white/20 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative aspect-[4/3] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <SiteHeader />
      <div className="container max-w-6xl py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-[32px] blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative backdrop-blur-md bg-white/30 p-8 rounded-[32px] border border-white/20">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold mb-6 bg-gradient-to-br from-pink-600 to-purple-700 bg-clip-text text-transparent"
              >
                Raise Your Glass, Not Your Proof! ✨
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl mb-4 text-gray-800"
              >
                Welcome to DC's chicest mobile mocktail experience! Our stunning bar cart brings sophistication and style to alcohol-free celebrations, one perfectly crafted drink at a time.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600"
              >
                Ready to make your event sparkle? Let's get this party started! ✨
              </motion.p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
            <div className="relative aspect-[4/5] rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/pexel.jpg"
                alt="Mobile bar setup with white umbrella"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-24 max-w-3xl mx-auto">
          {[
            {
              step: "Step One.",
              title: "Drop Us a Line! ✨",
              description: "Tell us about your dream event! Fill out our quick form below and we'll get back to you faster than you can say 'make mine a mocktail'!",
              hasButton: true
            },
            {
              step: "Step Two.",
              title: "Let's Get Creative! 🎨",
              description: "We'll work our magic to create a custom mocktail menu that perfectly matches your vibe. From sophisticated sips to playful pours, we'll design a drink experience that'll have your guests talking for weeks!",
            },
            {
              step: "Step Three.",
              title: "Time to Shine! 🌟",
              description: "Our gorgeous mobile bar will roll up ready to serve joy in every glass. You focus on having fun - we'll handle everything else with style and sparkle!",
            }
          ].map((section, index) => (
            <motion.section
              key={section.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-[32px] blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
              <div className="relative backdrop-blur-md bg-white/30 p-12 rounded-[32px] border border-white/20 text-center">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-pink-600 to-purple-700 bg-clip-text text-transparent">
                  {section.step}
                </h2>
                <h3 className="text-2xl mb-4 text-gray-800">{section.title}</h3>
                <p className="text-gray-600 mb-8">
                  {section.description}
                </p>
                {section.hasButton && (
                  <Link href="/get-quote">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold px-8 py-6 text-lg"
                    >
                      GET A QUOTE ✨
                    </Button>
                  </Link>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}

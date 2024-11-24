'use client'

import { QuoteForm } from "@/components/quote-form"
import { motion } from "framer-motion"

export default function QuotePage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Elevate Your Event?
            </h1>
            <p className="text-xl text-gray-800 font-medium">
              Let&apos;s create an unforgettable experience together.
            </p>
          </div>

          <div className="rounded-lg p-8 bg-white/50 backdrop-blur-sm border border-white/20">
            <QuoteForm />
          </div>
        </motion.div>
      </div>
    </main>
  )
}

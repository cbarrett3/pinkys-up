'use client'

import * as React from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { QuoteForm } from "@/components/quote-form"
import { motion as m } from "framer-motion"

export default function QuotePage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="container max-w-4xl mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Ready to Elevate Your Event?</h1>
            <p className="text-xl text-gray-800 font-medium">
              Let's create an unforgettable experience together. Get in touch with us today.
            </p>
          </div>

          <div className="rounded-lg p-8 bg-white/50 backdrop-blur-sm border border-white/20">
            <QuoteForm />
          </div>
        </m.div>
      </div>
    </main>
  )
}

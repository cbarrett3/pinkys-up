'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    content: "Watching Brenda create these drinks, you see her vision for what DC's been missing – a space where wellness meets celebration. She's bringing something real and needed to the city, and it's amazing to watch it unfold.",
    author: "Connor Barrett",
    role: "Software Engineer",
    image: "/me.jpeg"
  },
  {
    content: "PINKYS UP is exactly what the DMV needs right now. Their mocktails are incredible, and the way they're reimagining social gatherings is truly inspiring. Can't wait to see this vision spread across the city.",
    author: "Rosa Fernandez",
    role: "Supply Chain Manager",
    image: "/rose.jpeg"
  },
  {
    content: "The attention to detail in both presentation and taste was exceptional. PINKYS UP brought such elegance to our event, making everyone feel included in the celebration. A refreshing addition to DC's scene.",
    author: "Cody",
    role: "Civil Engineer",
    image: "/cody.jpeg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating memorable experiences through exceptional service and innovative mocktails
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full"
            >
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-100 hover:border-pink-200 transition-colors flex flex-col">
                <div className="flex-grow">
                  <div className="mb-8">
                    <svg className="h-8 w-8 text-pink-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

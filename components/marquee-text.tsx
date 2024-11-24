'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Mocktail {
  name: string;
  ingredients: string[];
  image: string;
  titleClass: string;
}

export function MarqueeText() {
  const mocktails: Mocktail[] = [
    {
      name: "The Filibuster Fizz",
      ingredients: ["Cranberry", "Ginger", "Lime", "Mint"],
      image: "/mocktails/filibuster-fizz.svg",
      titleClass: "from-red-600 to-blue-700"
    },
    {
      name: "Winter Wonderland",
      ingredients: ["Coconut", "Blue Curaçao", "Silver Dust", "Vanilla"],
      image: "/mocktails/winter-wonderland.svg",
      titleClass: "from-cyan-600 to-blue-700"
    },
    {
      name: "The Electoral Punch",
      ingredients: ["Cranberry", "Coconut", "Blue Raspberry", "Lemon"],
      image: "/mocktails/electoral-punch.svg",
      titleClass: "from-red-600 to-blue-800"
    },
    {
      name: "Frost & Fire",
      ingredients: ["Spiced Apple", "Mint", "Cinnamon", "Star Anise"],
      image: "/mocktails/frost-and-fire.svg",
      titleClass: "from-orange-600 to-cyan-700"
    }
  ]

  // Duplicate the mocktails to create a seamless loop
  const duplicatedMocktails = [...mocktails, ...mocktails, ...mocktails]

  return (
    <div className="overflow-hidden whitespace-nowrap flex-1 mr-8">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block whitespace-nowrap"
      >
        {duplicatedMocktails.map((mocktail, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-12 group"
          >
            <div className="relative w-6 h-6 mr-3">
              <Image
                src={mocktail.image}
                alt={mocktail.name}
                fill
                className="object-contain"
              />
            </div>
            <span className={cn(
              "text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent",
              mocktail.titleClass
            )}>
              {mocktail.name}: {mocktail.ingredients.join(" + ")} ✨
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedLogo } from './animated-logo';

const navItems = [
  { name: "Mocktails", showOnMobile: true },
  { name: "About", showOnMobile: true },
  { name: "Gallery", showOnMobile: true },
  { name: "Quote", showOnMobile: true }
];

export function SiteHeader() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <AnimatedLogo />
        </Link>
        <nav className="space-x-6 text-sm uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`/${item.name.toLowerCase().replace(" ", "-")}`}
              className="animated-underline hover:text-primary-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

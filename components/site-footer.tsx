'use client';

import Link from "next/link"
import { Instagram } from "lucide-react"
import { MarqueeText } from "./marquee-text"
import { MusicPlayer } from "./music-player"
import { TikTokIcon } from "./icons/tiktok"
import { WhatsAppIcon } from "./icons/whatsapp"

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MarqueeText />
        <div className="flex items-center space-x-6 ml-auto">
          <MusicPlayer />
          <Link 
            href="https://instagram.com/pinkysup-dc" 
            target="_blank"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="https://tiktok.com/@pinkysup-dc" 
            target="_blank"
            className="hover:text-pink-500 transition-colors"
          >
            <TikTokIcon className="h-5 w-5" />
            <span className="sr-only">TikTok</span>
          </Link>
          <Link 
            href="http://Wa.me/+15715014766" 
            target="_blank"
            className="hover:text-pink-500 transition-colors"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

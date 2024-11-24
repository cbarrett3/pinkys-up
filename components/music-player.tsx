'use client';

import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/fire-for-you-cannons.mp3"
        loop
      />
      <button
        onClick={togglePlay}
        className="hover:text-pink-500 transition-colors"
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </button>
    </>
  );
}

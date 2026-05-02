"use client";

import { useEffect, useMemo, useState } from "react";

interface Particle {
  id: number;
  left: number;
  bottom: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  spreadX: string;
  endY: string;
  endScale: number;
}

export default function PerfumeMist({ count = 50 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const isLeft = i % 2 === 0;
      const left = isLeft ? -2 + Math.random() * 4 : 98 + Math.random() * 4;
      const bottom = 35 + Math.random() * 30; // 35% to 65% up the screen
      const direction = isLeft ? 1 : -1;
      const spreadX = (20 + Math.random() * 60) * direction; // 20vw to 80vw inwards
      const spreadY = -20 - Math.random() * 60; // Move upwards (-vh)

      return {
        id: i,
        left,
        bottom,
        size: 1.5 + Math.random() * 4, // slightly larger droplets to be visible
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 6, // faster spray
        opacity: 0.6 + Math.random() * 0.4, // Much higher opacity to be clearly visible
        spreadX: `${spreadX}vw`,
        endY: `${spreadY}vh`,
        endScale: 3 + Math.random() * 7, // Cloud expansion
      };
    });
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="mist-particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0, // Handled by keyframes, but starts at 0
            animation: `perfume-spray-cloud ${p.duration}s ease-out ${p.delay}s infinite`,
            background:
              p.id % 5 === 0
                ? "#ffffff" // pure white for high visibility
                : p.id % 3 === 0
                  ? "#38bdf8"
                  : "#0ea5e9",
            boxShadow: `0 0 ${p.size * 3}px rgba(56, 189, 248, 0.8)`, // strong cyan glow
            "--max-opacity": p.opacity,
            "--spread-x": p.spreadX,
            "--end-y": p.endY,
            "--end-scale": p.endScale,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  animVariant: number;
  opacity: number;
}

export default function Confetti({ count = 35 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 12,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 14,
      animVariant: (i % 3) + 1,
      opacity: 0.4 + Math.random() * 0.6,
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `sparkle-fall-${p.animVariant} ${p.duration}s linear ${p.delay}s infinite`,
            borderRadius: p.id % 4 === 0 ? "50%" : "2px",
            background:
              p.id % 5 === 0
                ? "#e8b930"
                : p.id % 3 === 0
                  ? "#d4a017"
                  : "#b08512",
          }}
        />
      ))}
    </div>
  );
}

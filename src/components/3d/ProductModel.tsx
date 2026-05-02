"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import gsap from "gsap";

interface ProductModelProps {
  productSlug: string;
}

// Placeholder 3D model — replace with actual .glb models
// Uses a stylized cylinder to represent a perfume container
export default function ProductModel({ productSlug }: ProductModelProps) {
  const meshRef = useRef<Mesh>(null);

  const colors: Record<string, string> = {
    bold: "#d1d5db",
    dusk: "#9ca3af",
    noir: "#4b5563",
    ruby: "#9f1239",
    sapphire: "#1e3a8a",
    emerald: "#064e3b",
  };

  const color = colors[productSlug] || "#d1d5db";
  const groupRef = useRef<Group>(null);

  // Trigger a fast 3D spin when the product changes
  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: groupRef.current.rotation.y + Math.PI * 2,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [productSlug]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 1.8, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 1.15, 0]} ref={meshRef}>
        <cylinderGeometry args={[0.5, 0.6, 0.5, 32]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Base ring */}
      <mesh position={[0, -0.95, 0]}>
        <torusGeometry args={[0.78, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ProductModel from "./ProductModel";

interface SceneProps {
  activeProduct?: string;
}

export default function Scene({ activeProduct = "bold" }: SceneProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 0,
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ display: "block" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.3} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#d4a017" />
            <ProductModel productSlug={activeProduct} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

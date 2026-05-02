"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/slices/Hero";
import Carousel from "@/components/slices/Carousel";
import TestimonialSlider from "@/components/slices/TestimonialSlider";
import AffiliateForm from "@/components/slices/AffiliateForm";
import PerfumeMist from "@/components/effects/PerfumeMist";
import FloatingButtons from "@/components/layout/FloatingButtons";

const Scene = dynamic(() => import("@/components/3d/Scene"), {
  ssr: false,
});

export default function Home() {
  const [activeProduct, setActiveProduct] = useState("bold");

  return (
    <>
      {/* Perfume Mist overlay */}
      <PerfumeMist count={150} />

      {/* Floating WhatsApp + Cart */}
      <FloatingButtons />

      {/* 3D Canvas Layer */}
      <Suspense fallback={null}>
        <Scene activeProduct={activeProduct} />
      </Suspense>

      {/* Page sections */}
      <Hero />

      <div id="carousel">
        <Carousel onProductChange={setActiveProduct} />
      </div>

      <TestimonialSlider />

      <div id="affiliate">
        <AffiliateForm />
      </div>
    </>
  );
}

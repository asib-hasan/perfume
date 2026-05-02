"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    slug: "bold",
    name: "Bold",
    price: 590,
    originalPrice: 750,
    discount: 21,
    color: "#d1d5db",
  },
  {
    slug: "dusk",
    name: "Dusk",
    price: 590,
    originalPrice: 750,
    discount: 21,
    color: "#9ca3af",
  },
  {
    slug: "noir",
    name: "Noir",
    price: 990,
    originalPrice: 1200,
    discount: 18,
    color: "#4b5563",
  },
  {
    slug: "ruby",
    name: "Ruby",
    price: 890,
    originalPrice: 1100,
    discount: 19,
    color: "#9f1239",
  },
  {
    slug: "sapphire",
    name: "Sapphire",
    price: 950,
    originalPrice: 1150,
    discount: 17,
    color: "#1e3a8a",
  },
  {
    slug: "emerald",
    name: "Emerald",
    price: 850,
    originalPrice: 1050,
    discount: 19,
    color: "#064e3b",
  },
];

interface CarouselProps {
  onProductChange?: (slug: string) => void;
}

export default function Carousel({ onProductChange }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isChanging) return;
      setIsChanging(true);
      
      const newIndex = ((index % products.length) + products.length) % products.length;
      
      if (cardRef.current) {
        // Spin the card out
        gsap.to(cardRef.current, {
          rotateY: 90,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setActiveIndex(newIndex);
            onProductChange?.(products[newIndex].slug);
            
            // Spin the card in with new content
            gsap.fromTo(
              cardRef.current,
              { rotateY: -90, scale: 0.8 },
              { rotateY: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" }
            );
            setIsChanging(false);
          }
        });
      } else {
        setActiveIndex(newIndex);
        onProductChange?.(products[newIndex].slug);
        setIsChanging(false);
      }
    },
    [onProductChange, isChanging]
  );

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const product = products[activeIndex];

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".carousel-heading",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".carousel-heading", start: "top 85%" } }
      );
      
      gsap.fromTo(
        ".carousel-product-display",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.5)", scrollTrigger: { trigger: ".carousel-product-display", start: "top 80%" } }
      );

      gsap.fromTo(
        ".carousel-info",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".carousel-info", start: "top 90%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="carousel"
      data-slice-type="carousel"
      className="carousel relative grid h-screen max-h-screen grid-rows-[auto,1fr,auto] md:grid-rows-[auto,2fr,auto] justify-center overflow-hidden bg-seez-black py-3 md:py-5 text-white"
    >
      {/* Background overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${product.color}25 0%, transparent 70%)`,
          opacity: isChanging ? 0.3 : 1
        }}
      />

      {/* Wavy circles background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1165 1166"
        className="absolute left-1/2 top-1/2 h-[100vmin] sm:h-[110vmin] md:h-[120vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <path
          fill="currentColor"
          d="M1133.5 619c-5 76.2-84.8 126.7-113.5 183.3-28.7 56.6-20.8 149-74 195.6-53 46.6-143.6 26.9-203.4 48-59.9 21.2-120.2 93.8-196.5 88.9-76.2-5-126.6-86.2-183.2-113.5-56.6-28.7-149-20.8-195.6-74-46.7-53-26.9-143.6-46.7-203.4-19.8-59.7-93.7-121.5-88.8-196.4 4.8-74.8 84.8-128 113.6-184.6 28.7-56.6 19.4-149 72.5-195.7 53.1-46.7 143.7-26.9 203.4-46.7C481 100.8 543 26.8 619.1 31.8c76.2 5 126.7 84.7 183.3 113.5 56.6 28.7 149 19.4 195.7 72.5 46.6 53.1 26.8 143.7 48 203.5 19.8 59.7 92.3 121.5 87.4 197.7z"
          opacity="0.04"
        />
        <path
          fill="currentColor"
          d="M827.9 672.6c-12.4 34-55.3 46.3-75.9 68.2-20.5 22-29.2 64.9-59.5 79-30.3 14.2-68.8-6.8-98.7-5.1-30 1.6-67 26.6-101 14.2-33.9-12.3-46-55.9-68-75.8-22-20.5-65-29.2-79-59.5-14.1-30.3 6.9-68.8 5.8-98.6-1-29.7-26.4-67.6-14.2-101 12.1-33.3 55.5-46.9 76-68.8 20.6-21.8 28.6-65 59-79.2 30.2-14.1 68.7 6.9 98.4 5.8 29.8-1 67.7-26.4 101.6-14 34 12.3 46.2 55.2 68.1 75.8 21.9 20.5 65 28.6 79.2 58.9 14.1 30.3-6.9 68.8-5.2 98.8 1 29.7 25.7 67.4 13.4 101.3z"
          opacity="0.04"
        />
      </svg>

      {/* Heading */}
      <h2 className="carousel-heading relative text-center text-3xl sm:text-4xl lg:text-5xl font-bold pt-4 sm:pt-6 tracking-tight text-white/90">
        Choose your Perfume
      </h2>

      {/* Product viewer area */}
      <div className="carousel-product-display relative flex items-center justify-center mt-4 sm:mt-6 md:mt-0 w-full max-w-3xl mx-auto px-4">
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 sm:left-6 z-20 size-10 sm:size-12 rounded-full border-2 border-white/80 bg-white/5 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-14 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52" className="w-full h-full">
            <path
              fill="currentColor"
              d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
            />
          </svg>
          <span className="sr-only">Previous Perfume</span>
        </button>

        {/* Product display area */}
        <div
          className="group aspect-square h-[65vmin] sm:h-[60vmin] md:h-[50vmin] lg:h-[55vmin] min-h-40 max-h-[55vh] cursor-pointer flex items-center justify-center"
          title={`Click to view ${product.name} details`}
        >
          <div className="w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
            <div
              ref={cardRef}
              className="w-32 h-48 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-[2rem] shadow-2xl transition-shadow duration-700 ease-in-out"
              style={{
                background: `linear-gradient(135deg, ${product.color}dd, ${product.color}44)`,
                boxShadow: `0 20px 40px -10px ${product.color}40`,
                border: `1px solid ${product.color}66`
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white/50 text-6xl font-display font-light">
                {product.name[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 sm:right-6 z-20 size-10 sm:size-12 rounded-full border-2 border-white/80 bg-white/5 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-14 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 52 52"
            className="-scale-x-100 w-full h-full"
          >
            <path
              fill="currentColor"
              d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
            />
          </svg>
          <span className="sr-only">Next Perfume</span>
        </button>
      </div>

      {/* Product info */}
      <div className="carousel-info text-area relative mx-auto text-center pb-1 sm:pb-2 md:pb-5 overflow-visible">
        <div className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          <h2>{product.name}</h2>
        </div>

        {/* Price */}
        <div className="mt-1 sm:mt-2 md:mt-2">
          <div className="flex items-center justify-center gap-2 transition-opacity duration-300" style={{ opacity: isChanging ? 0 : 1 }}>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              ৳ {product.price.toLocaleString()}
            </span>
            <span className="text-sm sm:text-base md:text-lg text-white/50 line-through">
              ৳ {product.originalPrice.toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm bg-seez-amber/90 text-seez-black px-2 py-0.5 rounded-full font-semibold">
              {product.discount}% OFF
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-3 sm:mt-4 md:mt-5 flex flex-row gap-2 sm:gap-3 justify-center items-center">
          <a
            href={`/product/${product.slug}`}
            className="rounded-full bg-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            View Details
          </a>
          <button className="rounded-full bg-transparent border-2 border-white px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50">
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
}

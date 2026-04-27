"use client";

import { useState, useCallback } from "react";

const products = [
  {
    slug: "bold",
    name: "Bold",
    price: 590,
    originalPrice: 750,
    discount: 21,
    color: "#d4a017",
  },
  {
    slug: "dusk",
    name: "Dusk",
    price: 590,
    originalPrice: 750,
    discount: 21,
    color: "#b08512",
  },
  {
    slug: "noir",
    name: "Noir",
    price: 990,
    originalPrice: 1200,
    discount: 18,
    color: "#1e1c1a",
  },
];

interface CarouselProps {
  onProductChange?: (slug: string) => void;
}

export default function Carousel({ onProductChange }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      const newIndex = ((index % products.length) + products.length) % products.length;
      setActiveIndex(newIndex);
      onProductChange?.(products[newIndex].slug);
    },
    [onProductChange]
  );

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const product = products[activeIndex];

  return (
    <section
      id="carousel"
      data-slice-type="carousel"
      className="carousel relative grid h-screen max-h-screen grid-rows-[auto,1fr,auto] md:grid-rows-[auto,2fr,auto] justify-center overflow-hidden bg-seez-black py-3 md:py-5 text-white"
    >
      {/* Background overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ backgroundColor: product.color }}
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
          opacity="0.5"
        />
        <path
          fill="currentColor"
          d="M827.9 672.6c-12.4 34-55.3 46.3-75.9 68.2-20.5 22-29.2 64.9-59.5 79-30.3 14.2-68.8-6.8-98.7-5.1-30 1.6-67 26.6-101 14.2-33.9-12.3-46-55.9-68-75.8-22-20.5-65-29.2-79-59.5-14.1-30.3 6.9-68.8 5.8-98.6-1-29.7-26.4-67.6-14.2-101 12.1-33.3 55.5-46.9 76-68.8 20.6-21.8 28.6-65 59-79.2 30.2-14.1 68.7 6.9 98.4 5.8 29.8-1 67.7-26.4 101.6-14 34 12.3 46.2 55.2 68.1 75.8 21.9 20.5 65 28.6 79.2 58.9 14.1 30.3-6.9 68.8-5.2 98.8 1 29.7 25.7 67.4 13.4 101.3z"
          opacity="0.5"
        />
      </svg>

      {/* Heading */}
      <h2 className="relative text-center text-4xl sm:text-5xl lg:text-6xl font-bold pt-2 sm:pt-0">
        Choose your Perfume
      </h2>

      {/* Product viewer area */}
      <div className="flex items-center justify-center md:justify-center mt-4 sm:mt-6 md:mt-0 px-5 overflow-hidden">
        <div className="grid grid-cols-[auto,auto,auto] items-center gap-0 sm:gap-4 md:gap-6">
          {/* Prev button */}
          <button
            onClick={prev}
            className="size-8 sm:size-10 rounded-full border-2 border-white bg-white/10 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-12 lg:size-14"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52">
              <path
                fill="currentColor"
                d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
              />
            </svg>
            <span className="sr-only">Previous Perfume</span>
          </button>

          {/* Product display area */}
          <div
            className="aspect-square h-[80vmin] sm:h-[68vmin] md:h-[55vmin] lg:h-[58vmin] min-h-40 max-h-[65vh] cursor-pointer flex items-center justify-center"
            title={`Click to view ${product.name} details`}
          >
            {/* 3D model placeholder — the fixed canvas handles this on desktop */}
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-32 h-48 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-2xl shadow-2xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${product.color}, #080808)`,
                  boxShadow: `0 0 60px ${product.color}40`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white/30 text-6xl font-display">
                  {product.name[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="size-8 sm:size-10 rounded-full border-2 border-white bg-white/10 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-12 lg:size-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 52 52"
              className="-scale-x-100"
            >
              <path
                fill="currentColor"
                d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
              />
            </svg>
            <span className="sr-only">Next Perfume</span>
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-area relative mx-auto text-center pb-1 sm:pb-2 md:pb-5 overflow-visible">
        <div className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
          <h2>{product.name}</h2>
        </div>

        {/* Price */}
        <div className="mt-1 sm:mt-2 md:mt-2">
          <div className="flex items-center justify-center gap-2">
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

"use client";

import { useState, useEffect, useCallback } from "react";
import { Sparkles, Quote, BadgeCheck, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sazzad Ahsan",
    title: "Entrepreneur | Marketing expert",
    company: "CEO, Brandmark Consultancy Ltd.",
    quote: "No complain about perfumes also it will sustain longer.",
    image: "/images/sazzad-ahsan.jpg",
  },
  {
    name: "Rafayet Rakib",
    title: "Entrepreneur | Content creator",
    company: "Founder, Digital Dropouts",
    quote: "Smells are good & it last longer also will rate avg 8/10.",
    image: "/images/rafayet-rakib.jpg",
  },
  {
    name: "Ayman Sadiq",
    title: "Educator | Entrepreneur | Public speaker",
    company: "Founder, 10 Minute School",
    quote: "This is not a regular perfume, this is a new thing.",
    image: "/images/ayman-sadiq.jpg",
  },
  {
    name: "Khalid Farhan",
    title: "Entrepreneur | Digital marketer | Content creator",
    company: "Founder, Passive Journal",
    quote: "I will give it average 7.5/10 & perfumes are good.",
    image: "/images/khalid-farhan.jpg",
  },
  {
    name: "Nafees Salim",
    title: "Entrepreneur | Marketing strategist | Content creator",
    company: "Founder, Impact Academy",
    quote: "With avg 8/10, I literally love every variety specially the sweet ones.",
    image: "/images/nafees-salim.jpg",
  },
  {
    name: "Amin Hannan Chowdhury",
    title: "Entrepreneur | Stand-up comedian",
    company: "Founder, Mad Koffee",
    quote: "Love the durability. Made my ex comeback. Not sure if it's a good thing.",
    image: "/images/amin-hannan.jpg",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const newIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length;
    setActiveIndex(newIndex);
  }, []);

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, goTo]);

  return (
    <section
      data-slice-type="testimonial_slider"
      className="w-full min-h-screen bg-seez-black flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-seez-amber/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-seez-gold/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-seez-amber/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative w-full max-w-6xl z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-seez-amber animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              What Our Customers Say
            </h2>
            <Sparkles className="w-8 h-8 text-seez-amber animate-pulse" />
          </div>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-seez-amber to-transparent mx-auto mb-4 sm:mb-6" />
        </div>

        {/* Card carousel */}
        <div className="relative h-[380px] sm:h-[480px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isNext = index === (activeIndex + 1) % testimonials.length;

            let transform = "translateX(100%) scale(0.8)";
            let zIndex = 1;
            let opacity = 0;
            let filter = "blur(1px)";

            if (isActive) {
              transform = "translateX(0) scale(1)";
              zIndex = 5;
              opacity = 1;
              filter = "blur(0px)";
            } else if (isPrev) {
              transform = "translateX(-110%) scale(0.85)";
              zIndex = 3;
              opacity = 0.5;
              filter = "blur(1px)";
            } else if (isNext) {
              transform = "translateX(110%) scale(0.85)";
              zIndex = 3;
              opacity = 0.5;
              filter = "blur(1px)";
            }

            return (
              <div
                key={testimonial.name}
                className="absolute w-80 sm:w-96 h-[340px] sm:h-[420px] cursor-pointer transition-all duration-1000 ease-out border border-seez-amber/30 shadow-2xl overflow-hidden rounded-2xl"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  filter,
                  background:
                    "linear-gradient(135deg, rgba(232,160,0,0.08) 0%, rgba(194,133,0,0.15) 50%, rgba(42,42,42,0.35) 100%)",
                }}
                onClick={() => goTo(index)}
              >
                <div className="p-0 h-full relative">
                  {/* Card overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 via-[#b08512]/8 to-[#080808]/90" />

                  {/* Quote icon */}
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 opacity-30">
                    <Quote className="w-10 sm:w-16 h-10 sm:h-16 text-seez-amber" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-3 sm:p-6 flex flex-col">
                    {/* Avatar + Info */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-seez-amber/30 to-seez-gold/30 rounded-full blur-sm scale-110" />
                        <div className="relative w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden border-3 border-seez-amber/50 shadow-xl">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-seez-amber rounded-full p-1 shadow-lg">
                          <BadgeCheck className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white mb-1 tracking-wide">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-300 mb-1.5 sm:mb-2 font-medium line-clamp-2">
                          {testimonial.title}
                        </p>
                        <p className="text-xs font-semibold text-gray-200 bg-seez-gray/60 px-2 py-1 rounded-md inline-block">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2 sm:mb-3">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          className={`w-4 sm:w-5 h-4 sm:h-5 fill-seez-amber text-seez-amber ${isActive ? "animate-pulse" : ""}`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="flex-1 mb-2 sm:mb-3 min-h-0">
                      <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-medium bg-seez-gray/30 p-2 sm:p-3 rounded-lg border-l-4 border-seez-amber/50">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Verified badge */}
                    <div className="flex items-center justify-end pt-1 sm:pt-2 border-t-2 border-seez-amber/20 flex-shrink-0">
                      <div
                        className={`px-2 py-1 rounded-full bg-seez-amber text-seez-black text-xs font-bold shadow-lg border-2 border-seez-amber-light/40 ${isActive ? "animate-pulse" : ""}`}
                      >
                        ✓ Verified Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Nav buttons */}
          <div className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prev}
              className="size-8 sm:size-10 rounded-full border-2 border-white bg-white/10 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-12 lg:size-14"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52">
                <path
                  fill="currentColor"
                  d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={next}
              className="size-8 sm:size-10 rounded-full border-2 border-white bg-white/10 p-2 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-12 lg:size-14"
              aria-label="Next testimonial"
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
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-8 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`relative transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 sm:w-12 h-3 sm:h-4 bg-seez-amber rounded-full shadow-lg"
                  : "w-3 sm:w-4 h-3 sm:h-4 bg-seez-amber/30 hover:bg-seez-amber/70 rounded-full hover:scale-125 border-2 border-seez-amber/40 hover:border-seez-amber"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              {index === activeIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-seez-amber/80 via-seez-amber to-seez-amber/80 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="w-full text-center mt-20 sm:mt-28 md:mt-32">
          <div className="bg-gradient-to-r from-seez-amber to-seez-amber-dark rounded-2xl p-8 sm:p-10 shadow-2xl max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Join Our Fragrance Journey
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Discover authentic solid perfumes that enhance your style and
              confidence. Experience the difference of premium quality and
              exceptional service.
            </p>
            <div className="flex justify-center">
              <a
                className="bg-seez-black text-seez-amber font-semibold px-8 py-3 rounded-full hover:bg-seez-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sans flex items-center gap-2"
                href="/shop"
              >
                View All Collections
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

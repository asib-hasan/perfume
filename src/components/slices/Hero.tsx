"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Perfume bottle silhouette (matches logo "E" style) ── */
function PerfumeBottle({
  className = "",
  style = {},
  id,
  size = "md",
}: {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = { sm: { w: 50, h: 75 }, md: { w: 80, h: 120 }, lg: { w: 110, h: 165 } };
  const d = dims[size];
  return (
    <div id={id} className={`product-box-image ${className}`} style={style}>
      <svg width={d.w} height={d.h} viewBox="0 0 90 135" fill="none">
        <rect x="34" y="0" width="22" height="8" rx="2" fill="#0ea5e9" opacity="0.7" />
        <circle cx="45" cy="4" r="3" fill="#0a0a0a" stroke="#0ea5e9" strokeWidth="0.8" />
        <rect x="38" y="8" width="14" height="10" fill="#0ea5e9" opacity="0.6" />
        <rect x="15" y="18" width="60" height="105" rx="6" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" strokeWidth="1" opacity-stroke="0.3" />
        <rect x="22" y="28" width="46" height="85" rx="3" fill="#0ea5e9" opacity="0.08" />
        <text x="45" y="82" textAnchor="middle" fill="#0ea5e9" fontSize="36" fontWeight="bold" fontFamily="serif" opacity="0.4">E</text>
      </svg>
    </div>
  );
}

/* ── Soft glow orb ── */
function GlowOrb({ id, className = "", style = {} }: { id?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div id={id} className={`absolute rounded-full ${className}`} style={{
      background: "radial-gradient(circle at 40% 40%, rgba(14,165,233,0.15) 0%, rgba(14,165,233,0.05) 50%, transparent 70%)",
      ...style,
    }} />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      requestAnimationFrame(() => {
        section.classList.remove("opacity-0");
        section.classList.add("opacity-100", "transition-opacity", "duration-1000");
      });
    }

    // ── Logo entrance & continuous smart animation ──
    const logo = document.querySelector(".hero-logo") as HTMLElement;
    if (logo) {
      gsap.fromTo(
        logo,
        { opacity: 0, scale: 0.85, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          onComplete: () => {
            // Elegant continuous breathing/floating effect
            gsap.to(logo, {
              y: -15,
              scale: 1.06,
              filter: "drop-shadow(0 0 50px rgba(14,165,233,0.6)) brightness(1.1)",
              duration: 2.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          }
        }
      );
    }

    // ── Staggered fade-ins ──
    document.querySelectorAll(".hero-fade-in").forEach((el, i) => {
      const h = el as HTMLElement;
      h.style.opacity = "0";
      h.style.transform = "translateY(15px)";
      h.style.transition = `all 0.8s ease ${1.0 + i * 0.2}s`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          h.style.opacity = "1";
          h.style.transform = "translateY(0)";
        }, 50);
      });
    });

    // ── Decorative line draw-in ──
    const line = document.querySelector(".hero-line") as HTMLElement;
    if (line) {
      line.style.width = "0";
      line.style.transition = "width 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.8s";
      requestAnimationFrame(() => {
        setTimeout(() => { line.style.width = "100%"; }, 50);
      });
    }

    // ── GSAP scroll animations ──
    const ctx = gsap.context(() => {
      // Panel 1 — bottles drift outward on scroll
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-panel-1",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl1.to("#bottle-left-1", { x: -180, y: 120, rotation: -20, opacity: 0, ease: "none" }, 0);
      tl1.to("#bottle-left-2", { x: -80, y: 160, rotation: 12, opacity: 0, ease: "none" }, 0);
      tl1.to("#bottle-right-1", { x: 180, y: 140, rotation: 18, opacity: 0, ease: "none" }, 0);
      tl1.to("#bottle-right-2", { x: 120, y: 100, rotation: -15, opacity: 0, ease: "none" }, 0);
      tl1.to(".hero-orb", { scale: 1.8, opacity: 0, ease: "none" }, 0);

      // Transition — bottles appear floating
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-transition",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
      tl2.fromTo("#mid-bottle-1", { y: 60, rotation: 8, opacity: 0 }, { y: -30, rotation: -6, opacity: 0.7, ease: "none" }, 0);
      tl2.fromTo("#mid-bottle-2", { y: 100, rotation: -12, opacity: 0 }, { y: -50, rotation: 10, opacity: 0.7, ease: "none" }, 0);
      tl2.fromTo("#mid-bottle-3", { y: 80, rotation: 15, opacity: 0 }, { y: -20, rotation: -4, opacity: 0.6, ease: "none" }, 0);

      // Panel 2 — scattered bottles cascade in
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-panel-2",
          start: "top 60%",
          end: "center center",
          scrub: 1,
        },
      });
      tl3.fromTo("#p2-bottle-1", { y: 80, rotation: -12, opacity: 0, scale: 0.6 }, { y: 0, rotation: -6, opacity: 0.8, scale: 1, ease: "none" }, 0);
      tl3.fromTo("#p2-bottle-2", { y: 120, rotation: 15, opacity: 0, scale: 0.5 }, { y: 0, rotation: 8, opacity: 0.7, scale: 1, ease: "none" }, 0.05);
      tl3.fromTo("#p2-bottle-3", { y: 100, rotation: -20, opacity: 0, scale: 0.7 }, { y: 0, rotation: -10, opacity: 0.6, scale: 0.9, ease: "none" }, 0.1);

    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="opacity-0 relative"
      style={{ background: "linear-gradient(165deg, #0a0a0a 0%, #0f0d09 35%, #12100a 60%, #0a0a0a 100%)" }}
      data-slice-type="hero"
    >
      <div ref={scrollRef} className="mx-auto flex w-full max-w-[120rem] flex-col items-center">

        {/* ════ PANEL 1 — Main hero ════ */}
        <div id="hero-panel-1" className="relative flex items-center justify-center min-h-screen h-screen w-full overflow-hidden">

          {/* Ambient glow — subtle warm tones */}
          <GlowOrb className="hero-orb w-[30rem] h-[30rem] opacity-60" style={{ top: "5%", left: "-5%" }} />
          <GlowOrb className="hero-orb w-[40rem] h-[40rem] opacity-40" style={{ bottom: "0%", right: "-10%" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full opacity-[0.03]"
            style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }} />

          {/* Fine grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }} />

          {/* Floating bottles — left (desktop) */}
          <PerfumeBottle id="bottle-left-1" className="hidden md:block absolute z-[20]" size="lg" style={{ left: "6%", top: "28%", transform: "rotate(-10deg)", opacity: 0.5 }} />
          <PerfumeBottle id="bottle-left-2" className="hidden lg:block absolute z-[15]" size="sm" style={{ left: "14%", top: "60%", transform: "rotate(6deg)", opacity: 0.35 }} />

          {/* Floating bottles — right (desktop) */}
          <PerfumeBottle id="bottle-right-1" className="hidden md:block absolute z-[20]" size="lg" style={{ right: "6%", top: "22%", transform: "rotate(8deg)", opacity: 0.5 }} />
          <PerfumeBottle id="bottle-right-2" className="hidden lg:block absolute z-[15]" size="sm" style={{ right: "16%", top: "62%", transform: "rotate(-12deg)", opacity: 0.35 }} />

          {/* ── Center content ── */}
          <div className="relative z-[60] flex flex-col items-center gap-6 sm:gap-8 text-center px-4 sm:px-6">

            {/* Logo — the hero centerpiece */}
            <div className="hero-logo will-change-transform">
              <Image
                src="/images/logo-transparent.png"
                alt="SEEZ — Little is Enough"
                width={500}
                height={280}
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                priority
              />
            </div>

            {/* Decorative line */}
            <div className="relative w-40 sm:w-56 md:w-72 h-px overflow-hidden">
              <div className="hero-line absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-seez-gold/60 to-transparent" />
            </div>

            {/* Subtitle — just one line, no redundancy */}
            <p className="hero-fade-in text-seez-white/80 text-base sm:text-lg md:text-xl max-w-md leading-relaxed tracking-wide font-light">
              Premium solid perfumes — portable, powerful, personal.
            </p>

            {/* CTA */}
            <div className="hero-fade-in mt-4 sm:mt-6">
              <a
                href="#carousel"
                className="group relative inline-flex items-center gap-3 rounded-full bg-seez-white text-seez-black px-8 sm:px-10 py-3 sm:py-4 font-semibold hover:bg-seez-amber hover:text-seez-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-seez-gold/50 shadow-xl shadow-white/5 hover:shadow-seez-amber/20 hover:-translate-y-1"
              >
                <span className="tracking-wider text-sm uppercase">Explore Collection</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-8 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-seez-gold/50 to-transparent animate-bounce" />
            </div>
          </div>
        </div>

        {/* ════ TRANSITION — floating bottles mid-scroll ════ */}
        <div id="hero-transition" className="relative h-[50vh] w-full hidden md:block overflow-visible">
          <PerfumeBottle id="mid-bottle-1" className="absolute" size="lg" style={{ left: "22%", top: "15%", transform: "rotate(8deg)" }} />
          <PerfumeBottle id="mid-bottle-2" className="absolute" size="md" style={{ right: "18%", top: "25%", transform: "rotate(-12deg)" }} />
          <PerfumeBottle id="mid-bottle-3" className="absolute" size="sm" style={{ left: "55%", top: "50%", transform: "rotate(18deg)" }} />
        </div>

        {/* ════ PANEL 2 — Brand story ════ */}
        <div id="hero-panel-2" className="relative z-[60] grid h-screen items-center gap-4 sm:gap-8 md:gap-14 px-6 sm:px-10 md:grid-cols-2 w-full">
          {/* Left text */}
          <div className="flex flex-col gap-5 sm:gap-7">
            <div>
              <h2 className="seez-gradient-text text-balance pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display leading-[0.9] tracking-tight">
                Little
              </h2>
              <h2 className="text-balance pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display leading-[0.9] tracking-tight text-seez-white/20">
                is
              </h2>
              <h2 className="seez-gradient-text text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display leading-[0.9] tracking-tight">
                Enough
              </h2>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-seez-gold/50 to-transparent" />
            <p className="max-w-lg text-sm sm:text-base md:text-lg text-seez-white/50 leading-relaxed">
              SEEZ was created to keep your scent alive wherever life takes
              you — from the desk or date to every adventure. Compact, bold, unforgettable.
            </p>
          </div>

          {/* Right — scattered bottles (desktop) */}
          <div className="hidden md:block relative h-full min-h-[500px]">
            <PerfumeBottle id="p2-bottle-1" className="absolute" size="lg" style={{ top: "15%", left: "25%", transform: "rotate(-6deg)" }} />
            <PerfumeBottle id="p2-bottle-2" className="absolute" size="md" style={{ top: "25%", right: "10%", transform: "rotate(8deg)" }} />
            <PerfumeBottle id="p2-bottle-3" className="absolute" size="lg" style={{ top: "55%", left: "10%", transform: "rotate(-10deg)" }} />
            <GlowOrb className="w-32 h-32 blur-3xl opacity-40" style={{ top: "40%", left: "45%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

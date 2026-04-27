"use client";

import Link from "next/link";
import { Globe, Share2, CirclePlay, MessageCircle } from "lucide-react";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "Bold", href: "/products/bold" },
      { label: "Dusk", href: "/products/dusk" },
      { label: "Noir", href: "/products/noir" },
      { label: "All Products", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Affiliate Program", href: "#affiliate" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Track Order", href: "/track" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { icon: Globe, href: "https://facebook.com/seez", label: "Facebook" },
  {
    icon: Share2,
    href: "https://instagram.com/seez",
    label: "Instagram",
  },
  { icon: CirclePlay, href: "https://youtube.com/seez", label: "YouTube" },
  {
    icon: MessageCircle,
    href: "https://wa.me/message/YSZGM2XVULL6K1?text=Need%20support",
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="relative footer bg-seez-dark text-seez-cream border-t border-seez-amber/15 pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-seez-amber/5 rounded-full filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-seez-gold/4 rounded-full filter blur-3xl opacity-30 animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-seez-amber-dark/3 rounded-full filter blur-3xl opacity-25 animate-pulse [animation-delay:4s]" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg md:text-xl text-seez-amber font-semibold mb-4 md:mb-6 font-gambarino relative group cursor-default">
                {section.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-seez-amber/60 via-seez-amber/30 to-transparent transform origin-left transition-all duration-500 group-hover:scale-x-[200%]" />
              </h3>
              <ul className="space-y-0">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group block py-2 md:py-2.5 text-sm md:text-base text-seez-gray-warm/70 hover:text-seez-cream transition-all duration-300 ease-out hover:translate-x-2 relative overflow-hidden"
                    >
                      <span className="relative z-10 transition-all duration-300">
                        {link.label}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-seez-amber/10 via-seez-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 rounded-sm" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative h-px w-full mb-8 md:mb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-seez-amber/20 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="text-sm md:text-base text-seez-gray-mid">
            © {new Date().getFullYear()} SEEZ. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative p-3 text-seez-gray-mid hover:text-seez-amber transition-all duration-500 ease-out hover:scale-110 transform"
              >
                <span className="absolute inset-0 bg-seez-amber/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-90 group-hover:scale-100 border border-seez-amber/20" />
                <span className="absolute inset-0 bg-seez-amber rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out" />
                <span className="relative z-10 transform group-hover:rotate-6 transition-all duration-500 ease-out">
                  <social.icon className="w-5 h-5" />
                </span>
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-sm md:text-base text-seez-gray-mid hover:text-seez-cream transition-all duration-300 hover:underline underline-offset-4 decoration-seez-amber/40"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm md:text-base text-seez-gray-mid hover:text-seez-cream transition-all duration-300 hover:underline underline-offset-4 decoration-seez-amber/40"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

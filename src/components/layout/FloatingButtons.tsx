"use client";

import { MessageCircle, ShoppingCart } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-[90] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/message/YSZGM2XVULL6K1?text=Need%20support"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-btn w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>

      {/* Cart */}
      <a
        href="/cart"
        aria-label="View cart"
        className="floating-btn w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-seez-amber/90 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        style={{ animationDelay: "1.5s" }}
      >
        <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
}

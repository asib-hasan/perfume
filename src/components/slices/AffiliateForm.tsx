"use client";

import { useState, FormEvent } from "react";
import {
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Send,
  Globe,
  Share2,
  CirclePlay,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Commissions",
    desc: "Up to 20% commission on every sale you refer.",
  },
  {
    icon: Users,
    title: "Grow Together",
    desc: "Join a community of passionate brand ambassadors.",
  },
  {
    icon: TrendingUp,
    title: "Track Performance",
    desc: "Real-time dashboard to monitor your earnings.",
  },
  {
    icon: Award,
    title: "Exclusive Perks",
    desc: "Get free products, early access & special discounts.",
  },
];

export default function AffiliateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      data-slice-type="affiliate_form"
      className="w-full min-h-screen bg-seez-black flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-seez-amber/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-seez-gold/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative w-full max-w-6xl z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Become an Affiliate
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-seez-amber to-transparent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with SEEZ and earn commissions by sharing the fragrances
            you love. Join our affiliate program today.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gradient-to-br from-seez-amber to-seez-amber-dark rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 mb-4">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-seez-amber/5 via-seez-amber-dark/10 to-seez-gold/15 border border-seez-amber/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-400">
                We&apos;ll review your application and get back to you within 48
                hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="audience"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Audience Size
                  </label>
                  <input
                    id="audience"
                    name="audience"
                    type="text"
                    className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                    placeholder="e.g. 10k followers"
                  />
                </div>
              </div>

              {/* Social media */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Social Media Profiles
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <input
                      name="facebook"
                      type="url"
                      className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                      placeholder="Facebook profile URL"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <input
                      name="instagram"
                      type="url"
                      className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                      placeholder="Instagram profile URL"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <CirclePlay className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <input
                      name="youtube"
                      type="url"
                      className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none"
                      placeholder="YouTube channel URL"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Why do you want to join? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-seez-gray/50 border border-seez-amber/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-seez-amber focus:ring-2 focus:ring-seez-amber/30 transition-all duration-200 outline-none resize-none"
                  placeholder="Tell us about yourself and why you'd be a great affiliate partner..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-seez-amber to-seez-amber-dark hover:from-seez-amber-light hover:to-seez-amber text-seez-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-seez-amber/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

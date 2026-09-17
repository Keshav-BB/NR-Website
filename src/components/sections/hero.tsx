'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';

export function Hero() {
  const handleConsultationClick = () => {
    trackEvent('consultation_cta_click', { location: 'hero_primary' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-background">
      {/* Background Neural / Wave Geometric Abstract Art */}
      <div
        className="absolute right-[-10%] sm:right-[-5%] lg:right-[0%] top-1/2 -translate-y-1/2 pointer-events-none opacity-40 sm:opacity-60 lg:opacity-85 select-none"
        aria-hidden="true"
      >
        <svg
          width="640"
          height="640"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[380px] sm:w-[500px] lg:w-[620px] h-auto text-primary"
        >
          <defs>
            <linearGradient id="heroNeuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B32A1" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7849AD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C99940" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7849AD" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Atmospheric Glow Circle */}
          <circle cx="300" cy="300" r="260" fill="url(#heroGlow)" />

          {/* Harmonic Pattern Rings */}
          <circle cx="300" cy="300" r="240" stroke="#6B32A1" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.25" />
          <circle cx="300" cy="300" r="180" stroke="#C99940" strokeWidth="1.5" opacity="0.35" />
          <circle cx="300" cy="300" r="120" stroke="#6B32A1" strokeWidth="1" strokeDasharray="3 6" opacity="0.3" />

          {/* Dynamic Flow Arcs (Recoding Path) */}
          <path
            d="M120 380 C180 200, 320 160, 480 220"
            stroke="url(#heroNeuralGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M140 240 C240 360, 360 400, 480 340"
            stroke="#C99940"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            opacity="0.6"
          />
          <path
            d="M200 140 C300 240, 320 380, 420 460"
            stroke="#6B32A1"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Focal Interactive Synapse Nodes */}
          <g className="transition-transform duration-700 hover:scale-105">
            <circle cx="120" cy="380" r="8" fill="#6B32A1" />
            <circle cx="120" cy="380" r="14" stroke="#6B32A1" strokeWidth="1" opacity="0.4" />
            
            <circle cx="300" cy="180" r="7" fill="#C99940" />
            <circle cx="300" cy="180" r="12" stroke="#C99940" strokeWidth="1" opacity="0.5" />

            <circle cx="480" cy="220" r="10" fill="#6B32A1" />
            <circle cx="480" cy="220" r="18" stroke="#6B32A1" strokeWidth="1.5" opacity="0.3" />

            <circle cx="360" cy="400" r="6" fill="#C99940" />
            <circle cx="480" cy="340" r="8" fill="#6B32A1" />
            <circle cx="200" cy="140" r="6" fill="#7849AD" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow / Brand Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              Neuro Recode · Experiential Repatterning
            </span>
          </div>

          {/* Headline - Exact copy from brief */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-dark leading-[1.12] mb-6">
            Change the pattern.{' '}
            <span className="text-primary italic font-serif">Change how you experience life.</span>
          </h1>

          {/* Supporting Copy - Exact copy from brief */}
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-8 max-w-2xl font-normal">
            Neuro Recode helps you explore recurring emotional and behavioural patterns and work toward a different internal response through a structured, experiential approach.
          </p>

          {/* Standardized CTA Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Link
              href={siteConfig.navigation.primaryCtaUrl}
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-hover shadow-card hover:shadow-elevated transition-all active:scale-[0.98]"
            >
              <span>{siteConfig.navigation.primaryCtaLabel}</span>
              <ArrowRight className="w-5 h-5 text-accent" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/25 bg-white/60 backdrop-blur-xs text-primary font-medium text-base hover:bg-primary/5 hover:border-primary/40 transition-colors"
            >
              <span>{siteConfig.navigation.secondaryCtaLabel}</span>
              <ArrowDown className="w-4 h-4 text-primary" />
            </a>
          </div>

          {/* Trust Row - Non-clinical, Grounded, Reassuring */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-content-secondary font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              <span>Root-Pattern Focused</span>
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span>1-on-1 Guided Sessions</span>
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              <span>Calm &amp; Experiential</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

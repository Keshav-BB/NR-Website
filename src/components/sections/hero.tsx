'use client';

import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';
import { appendAttributionToUrl } from '@/lib/analytics/attribution';

export function Hero() {
  const handleCtaClick = () => {
    trackEvent('free_training_click', { location: 'hero_primary' });
  };

  const freeTrainingUrl = appendAttributionToUrl(siteConfig.navigation.primaryCtaUrl);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-background">
      {/* Background Neural Geometric Pattern */}
      <div
        className="absolute right-[-60px] sm:right-[-20px] top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.09] lg:opacity-[0.16] select-none"
        aria-hidden="true"
      >
        <svg
          width="620"
          height="620"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="208" stroke="#6B32A1" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="140" stroke="#C99940" strokeWidth="1.5" />
          <circle cx="250" cy="44" r="14" fill="#6B32A1" />
          <circle cx="456" cy="310" r="14" fill="#6B32A1" />
          <circle cx="370" cy="464" r="14" fill="#6B32A1" />
          <circle cx="90" cy="408" r="14" fill="#6B32A1" />
          <circle cx="66" cy="170" r="12" fill="#6B32A1" />
          <path d="M250 44 C338 102 428 188 456 310" stroke="#6B32A1" strokeWidth="2" />
          <path d="M456 310 C434 398 400 438 370 464" stroke="#6B32A1" strokeWidth="2" />
          <path d="M370 464 C274 504 166 476 90 408" stroke="#6B32A1" strokeWidth="2" />
          <path d="M90 408 C42 344 46 254 66 170" stroke="#6B32A1" strokeWidth="2" />
          <path d="M66 170 C108 80 178 46 250 44" stroke="#6B32A1" strokeWidth="2" />
          <line x1="250" y1="44" x2="90" y2="408" stroke="#6B32A1" strokeWidth="1" opacity="0.6" />
          <line x1="456" y1="310" x2="66" y2="170" stroke="#6B32A1" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/35 mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent-muted tracking-wider uppercase">
              For working professionals · Delivered in Tanglish
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-dark leading-[1.12] mb-6">
            Eliminate anxiety at the root —{' '}
            <span className="text-primary italic font-serif">and get your life back.</span>
          </h1>

          {/* Supporting Body */}
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed mb-8 max-w-2xl font-normal">
            A science-based 3-step nervous system protocol built on neuroplasticity, NLP, and
            clinical hypnotherapy. Designed to resolve the underlying neural trigger — not manage it
            forever.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href={freeTrainingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-hover shadow-card hover:shadow-elevated transition-all active:scale-[0.98]"
            >
              <span>{siteConfig.navigation.primaryCtaLabel}</span>
              <ArrowRight className="w-5 h-5 text-accent" />
            </a>

            <a
              href="#method"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/20 text-primary font-medium text-base hover:bg-primary/5 hover:border-primary/40 transition-colors"
            >
              <span>How the Method Works</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Row */}
          <div className="pt-2 border-t border-border flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-content-secondary font-medium">
            <span className="flex items-center gap-1.5">
              <strong className="text-primary font-bold">{siteConfig.metrics.professionalsHelped}</strong>{' '}
              professionals helped
            </span>
            <span className="text-border">•</span>
            <span>Root-cause elimination</span>
            <span className="text-border">•</span>
            <span>Delivered in your language</span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Sparkles, Shield, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';

export function FinalCta() {
  const handleConsultationClick = () => {
    trackEvent('consultation_cta_click', { location: 'final_cta_primary' });
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-primary-dark via-[#1E0E2E] to-primary-dark text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-accent text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Begin Your Shift</span>
        </div>

        {/* Heading - Exact copy from brief */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
          Ready to understand your pattern differently?
        </h2>

        {/* Supporting Copy - Exact copy from brief */}
        <p className="text-base sm:text-lg lg:text-xl text-silver max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Take the first step toward understanding what may be shaping your responses.
        </p>

        {/* Standardized CTA Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href={siteConfig.navigation.primaryCtaUrl}
            onClick={handleConsultationClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-primary-dark font-bold text-base hover:bg-accent-hover shadow-elevated transition-all active:scale-[0.98]"
          >
            <span>{siteConfig.navigation.primaryCtaLabel}</span>
            <ArrowRight className="w-5 h-5 text-primary-dark" />
          </Link>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xs text-white font-medium text-base hover:bg-white/10 transition-colors"
          >
            <span>{siteConfig.navigation.secondaryCtaLabel}</span>
            <ArrowDown className="w-4 h-4 text-accent" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-silver/80">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-accent" />
            <span>100% Confidential 1-on-1 Consultation</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent" />
            <span>45–60 Minute Pattern Mapping</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span>Zero Obligation</span>
        </div>
      </div>
    </section>
  );
}

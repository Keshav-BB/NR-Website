'use client';

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';
import { appendAttributionToUrl } from '@/lib/analytics/attribution';

interface FreeTrainingBannerProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export function FreeTrainingBanner({
  title = 'The free training is where everyone begins.',
  subtitle = 'Sixty minutes. Delivered in Tanglish. You will understand how anxiety actually functions in your autonomic nervous system, and the precise three-step path to eliminate it at the root.',
  eyebrow = 'Start Here · Zero Risk',
}: FreeTrainingBannerProps) {
  const handleCtaClick = () => {
    trackEvent('free_training_click', { location: 'free_training_banner' });
  };

  const freeTrainingUrl = appendAttributionToUrl(siteConfig.navigation.primaryCtaUrl);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-dark via-[#3B1758] to-primary-dark text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-25 select-none"
        style={{
          background: 'radial-gradient(circle, #C99940 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={freeTrainingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-primary-dark font-bold text-base hover:bg-accent-hover shadow-elevated transition-all active:scale-[0.98]"
          >
            <span>{siteConfig.navigation.primaryCtaLabel}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-accent" /> No sales pressure inside the training
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-accent" /> Delivered in your language (Tanglish)
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-accent" /> Non-clinical wellness education
          </span>
        </div>
      </div>
    </section>
  );
}

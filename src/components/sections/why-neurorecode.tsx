'use client';

import React from 'react';
import { Target, Sparkles, Compass, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/cms/site-config';

interface Differentiator {
  tag: string;
  title: string;
  shortSummary: string;
  description: string;
  contrastVsOthers: string;
  icon: React.ComponentType<{ className?: string }>;
}

const differentiators: Differentiator[] = [
  {
    tag: 'DIFFERENTIATOR 01',
    title: 'Root-Pattern Focused',
    shortSummary: 'Addressing the subconscious origin, not just daily symptoms',
    description:
      'Most coping strategies focus on soothing anxiety after it erupts. We explore how your nervous system learned to fire that alarm in the first place, resolving the underlying blueprint.',
    contrastVsOthers: 'Unlike temporary relaxation techniques that you must repeat indefinitely.',
    icon: Target,
  },
  {
    tag: 'DIFFERENTIATOR 02',
    title: 'Experiential',
    shortSummary: 'Active internal shifts rather than intellectual analysis',
    description:
      'Logic alone rarely stops an emotional trigger. Neuro Recode engages the subconscious and somatic pathways directly, creating an experiential shift that you feel immediately in your body.',
    contrastVsOthers: 'Unlike conventional talk-only approaches where insight doesn’t change physical feelings.',
    icon: Sparkles,
  },
  {
    tag: 'DIFFERENTIATOR 03',
    title: 'Structured',
    shortSummary: 'A defined 5-step roadmap with clear progression',
    description:
      'You are never left wondering what comes next. Each session follows an intentional, progressive framework designed to move you from pattern discovery to real-world integration.',
    contrastVsOthers: 'Unlike open-ended, indefinite sessions without a clear finish line or milestones.',
    icon: Compass,
  },
  {
    tag: 'DIFFERENTIATOR 04',
    title: 'Personalised',
    shortSummary: 'Tailored to your specific neurological triggers and goals',
    description:
      'No scripted advice or generic one-size-fits-all affirmations. Every protocol is customized to your exact professional context, personal history, and physiological reactions.',
    contrastVsOthers: 'Unlike generic mindfulness apps or broad self-help advice.',
    icon: UserCheck,
  },
];

export function WhyNeuroRecode() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border/80 relative overflow-hidden" id="why-neurorecode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-4">
            The Neuro Recode Difference
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Why Neuro Recode?
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Designed for thoughtful professionals who want meaningful, sustainable shifts in how they navigate high-stakes moments.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.tag}
                className="bg-background rounded-3xl p-8 sm:p-10 border border-border/80 hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-widest text-accent uppercase">
                      {diff.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-border/80 flex items-center justify-center text-primary shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary-dark tracking-tight mb-2">
                    {diff.title}
                  </h3>
                  <div className="text-xs font-semibold text-primary mb-4">
                    {diff.shortSummary}
                  </div>

                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80 text-xs text-primary-dark/80 font-medium italic bg-white/60 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-4 sm:p-5 rounded-b-3xl">
                  {diff.contrastVsOthers}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-purple-tint/40 border border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="font-display font-bold text-primary-dark text-base sm:text-lg">
                Grounded in Science, Delivered with Care
              </div>
              <div className="text-xs sm:text-sm text-content-secondary">
                Confidential, non-judgmental, and structured for lasting internal freedom.
              </div>
            </div>
          </div>

          <Link
            href={siteConfig.navigation.primaryCtaUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors shrink-0 shadow-xs"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}

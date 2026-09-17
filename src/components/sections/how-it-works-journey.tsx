'use client';

import React from 'react';
import { Search, Compass, Sparkles, Sliders, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/cms/site-config';

interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  practicalOutcome: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: JourneyStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Map the recurring pattern',
    description:
      'In a confidential 1-on-1 dialogue, we map the exact situations, physical sensations, and internal reactions that make up your recurring pattern.',
    practicalOutcome: 'Complete clarity on what your nervous system is actually reacting to.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Explore',
    subtitle: 'Trace the underlying roots',
    description:
      'We gently trace how and when your mind learned to link this situation with threat, without needing you to re-live traumatic memories.',
    practicalOutcome: 'Discover the subconscious belief or association driving the alarm.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Recode',
    subtitle: 'Experiential repatterning',
    description:
      'Through structured experiential techniques combining applied neuroscience, NLP timeline work, and guided focus, we release the visceral charge.',
    practicalOutcome: 'The automated alarm response is decoupled from the trigger.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Integrate',
    subtitle: 'Real-world application',
    description:
      'We test and anchor your new internal response across simulated future scenarios, ensuring your mind feels grounded in real situations.',
    practicalOutcome: 'A renewed, calm baseline when facing formerly stressful environments.',
    icon: Sliders,
  },
  {
    number: '05',
    title: 'Move Forward',
    subtitle: 'Sustained flexibility',
    description:
      'You carry forward greater self-awareness, somatic self-regulation tools, and the lasting confidence of responding by choice rather than conditioned habit.',
    practicalOutcome: 'Quiet internal authority, improved focus, and emotional resilience.',
    icon: ArrowUpRight,
  },
];

export function HowItWorksJourney() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border/80 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-4">
            Structured 5-Step Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Your Neuro Recode Journey
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            A clear, predictable roadmap from initial pattern awareness to lasting internal flexibility.
          </p>
        </div>

        {/* Desktop / Large Screen Horizontal Roadmap */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative mb-16">
          {/* Subtle Connecting Line */}
          <div className="absolute top-14 left-10 right-10 h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-background rounded-2xl p-5 border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-primary text-white font-display font-bold text-xs flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-primary-dark mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-primary mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-content-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/80 text-[11px] text-primary-dark font-medium flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <span>{step.practicalOutcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Progression */}
        <div className="lg:hidden space-y-6 relative mb-12">
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary/20 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 pl-14 bg-background rounded-2xl p-6 border border-border shadow-xs"
              >
                <div className="absolute left-3 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {step.number}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-primary-dark">
                    {step.title}
                  </h3>
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <div className="text-xs font-semibold text-primary mb-2">
                  {step.subtitle}
                </div>

                <p className="text-sm text-content-secondary leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="p-3 rounded-xl bg-white border border-border text-xs text-primary-dark font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{step.practicalOutcome}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-journey Conversion Anchor */}
        <div className="text-center">
          <Link
            href={siteConfig.navigation.primaryCtaUrl}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-hover shadow-card transition-all"
          >
            <span>Begin with an Exploratory Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}

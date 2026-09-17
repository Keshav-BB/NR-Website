'use client';

import React from 'react';
import { Sparkles, Brain, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface Pillar {
  number: string;
  question: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const pillars: Pillar[] = [
  {
    number: '01',
    question: 'What is it?',
    headline: 'An experiential approach to internal patterns',
    description:
      'Neuro Recode is a structured personal-development and mental-wellness framework. Rather than giving you more conscious advice or coping exercises to practice endlessly, it works experientially to update recurring emotional responses at the subconscious level.',
    icon: Brain,
    highlights: ['Experiential, not just talk-based', 'Subconscious pattern focus', 'Non-clinical wellness model'],
  },
  {
    number: '02',
    question: 'What does it focus on?',
    headline: 'The subconscious roots behind automatic reactions',
    description:
      'We focus on the underlying emotional scripts and autonomic threat associations that trigger anxiety, self-doubt, overthinking, and avoidance before conscious thought can take over.',
    icon: Layers,
    highlights: ['Autonomic nervous system responses', 'Subconscious imprint decoding', 'Visceral emotional triggers'],
  },
  {
    number: '03',
    question: 'How is it structured?',
    headline: '1-on-1 private, guided experiential sessions',
    description:
      'Sessions are conducted remotely via private video calls in a safe, judgment-free environment. Guided by a certified practitioner, each session follows a defined roadmap tailored to your specific personal goals.',
    icon: Compass,
    highlights: ['Private 60–75 minute sessions', 'Clear step-by-step roadmap', 'Secure remote video delivery'],
  },
  {
    number: '04',
    question: 'What can you expect?',
    headline: 'Clarity, grounded composure, and internal freedom',
    description:
      'You can expect to understand why your nervous system responded the way it did, experience a noticeable release of internal tension, and develop a calm, reliable baseline in everyday high-stakes situations.',
    icon: Sparkles,
    highlights: ['Noticeable internal shift', 'Sustainable emotional ease', 'Greater behavioural flexibility'],
  },
];

export function WhatIsNeuroRecode() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden" id="what-is-neurorecode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Clarity &amp; Foundation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            What is Neuro Recode?
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            A plain-language guide to how we work, what we explore, and what makes our experiential approach distinctive.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-border/80 shadow-xs hover:shadow-card hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold tracking-widest text-accent uppercase">
                      {pillar.number} // {pillar.question}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-tint flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary-dark tracking-tight mb-4">
                    {pillar.headline}
                  </h3>

                  <p className="text-content-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-border/60">
                  <ul className="space-y-2.5">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-primary-dark font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

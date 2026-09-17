'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Zap, ShieldCheck } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Decode',
    icon: Search,
    headline: 'Find the silent root cause that started the pattern.',
    mechanism: 'Subconscious mapping using NLP timeline work and clinical hypnotherapy.',
    details:
      'We locate the initial formative imprint where your nervous system first learned that high stakes equaled existential danger. Surface triggers are just echoes; Decode targets the origin memory.',
    tag: 'Stage 1: Identification',
  },
  {
    step: '02',
    title: 'Rewire',
    icon: Zap,
    headline: 'Replace the anxious neural circuit with a calm one.',
    mechanism: 'Direct re-imprinting of the subconscious mind.',
    details:
      'Using neuroplastic reconsolidation, we discharge the emotional urgency stored in the old neural pathway. The outdated alarm loop is dissolved; a calm, grounded default is installed.',
    tag: 'Stage 2: Resolution',
  },
  {
    step: '03',
    title: 'Reinforce',
    icon: ShieldCheck,
    headline: 'Lock the new pattern in as the default — for life.',
    mechanism: 'Anchoring, integration, and a structured 90-day reinforcement window.',
    details:
      'Through contextual behavioral exercises and somatic integration, the calm state stops being an effortful tool you have to remember and becomes who you naturally are under pressure.',
    tag: 'Stage 3: Integration',
  },
];

export function MethodProtocol() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="method" className="py-20 sm:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase font-semibold tracking-widest text-accent mb-3">
            The 3-Step Anxiety Re-Code Protocol™
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-5">
            How we eliminate anxiety at the root.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            A structured protocol — not vague affirmations, not temporary coping. Each step operates
            on a clear neurobiological mechanism and builds on the one before it.
          </p>
        </div>

        {/* Desktop Interactive Tabs / Stage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isCurrent = activeStage === index;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(index)}
                className={`cursor-pointer rounded-2xl p-7 lg:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-primary text-white shadow-card scale-[1.02] ring-2 ring-accent'
                    : 'bg-white text-content-primary hover:shadow-md border border-border'
                }`}
              >
                {/* Decorative background glow */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none transition-opacity ${
                    isCurrent ? 'bg-accent/15' : 'bg-primary/5'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display text-4xl lg:text-5xl font-bold ${
                        isCurrent ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isCurrent ? 'bg-white/10 text-accent' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isCurrent ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className={`font-serif italic text-sm mb-4 leading-snug ${
                      isCurrent ? 'text-white/80' : 'text-content-secondary'
                    }`}
                  >
                    {stage.headline}
                  </p>

                  <div
                    className={`text-xs font-mono uppercase tracking-wider py-1 px-2.5 rounded-md inline-block mb-4 ${
                      isCurrent ? 'bg-white/10 text-accent' : 'bg-surface-muted text-primary'
                    }`}
                  >
                    {stage.tag}
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isCurrent ? 'text-white/85' : 'text-content-secondary'
                    }`}
                  >
                    {stage.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                  <span className={isCurrent ? 'text-accent' : 'text-primary'}>
                    {stage.mechanism}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Signature Quote & Link */}
        <div className="text-center max-w-xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-primary-dark mb-4">
            &ldquo;Decode the cause. Rewire the wiring. Reinforce the new default. That is the entire
            map.&rdquo;
          </p>
          <Link
            href="/method"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover underline underline-offset-4"
          >
            <span>Explore the Full Method in Detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

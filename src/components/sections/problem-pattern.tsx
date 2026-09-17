'use client';

import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Compass, Flame, RefreshCcw, Sparkles } from 'lucide-react';

interface Stage {
  step: string;
  label: string;
  subtitle: string;
  description: string;
  example: string;
  icon: React.ComponentType<{ className?: string }>;
}

const patternStages: Stage[] = [
  {
    step: '01',
    label: 'Trigger',
    subtitle: 'An external event occurs',
    description: 'An upcoming presentation, an ambiguous email from leadership, or an awkward pause in conversation.',
    example: '“Calendar invite: Urgent Q3 review with VP.”',
    icon: AlertCircle,
  },
  {
    step: '02',
    label: 'Internal Pattern',
    subtitle: 'Conditioned interpretation fires',
    description: 'Before conscious thought begins, subconscious memory routes the cue as a potential threat to status or safety.',
    example: 'Autonomic nervous system triggers threat conditioning.',
    icon: Compass,
  },
  {
    step: '03',
    label: 'Emotional Response',
    subtitle: 'Automatic visceral feeling',
    description: 'Physical tightening in the chest, shallow breathing, sudden gut tension, or an internal surge of alarm.',
    example: 'Heart rate spikes, muscles tense, sudden internal dread.',
    icon: Flame,
  },
  {
    step: '04',
    label: 'Behaviour',
    subtitle: 'Protective reaction',
    description: 'Endless second-guessing, defensive micromanagement, 2 AM rumination, or quiet avoidance of visibility.',
    example: 'Rewriting slides 14 times, insomnia, withdrawal.',
    icon: RefreshCcw,
  },
];

export function ProblemPattern() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border/60 relative overflow-hidden" id="pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-4">
            The Subconscious Mechanism
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            You don’t always need more information.{' '}
            <span className="text-primary block sm:inline">Sometimes, you need a different pattern.</span>
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Most professionals know their triggers logically. You understand that the meeting isn’t life-threatening.
            Yet, your autonomic nervous system responds before your conscious logic can intervene.
          </p>
        </div>

        {/* Interactive Pattern Flow Timeline */}
        <div className="relative mb-14">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {patternStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-6 sm:p-7 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-purple-tint/50 border-primary shadow-elevated scale-[1.02]'
                      : 'bg-white hover:bg-surface border-border/80 hover:border-primary/30 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        STAGE {stage.step}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-accent' : 'text-content-secondary'}`} />
                    </div>

                    <h3 className="font-display text-xl font-bold text-primary-dark mb-1">
                      {stage.label}
                    </h3>
                    <p className="text-xs font-medium text-accent-muted mb-3">
                      {stage.subtitle}
                    </p>
                    <p className="text-sm text-content-secondary leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-xs italic ${
                    isSelected ? 'border-primary/20 text-primary-dark font-medium' : 'border-border text-content-secondary/80'
                  }`}>
                    {stage.example}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Neuro Recode Shift Callout */}
        <div className="bg-gradient-to-br from-primary-dark via-[#2E1442] to-primary-dark rounded-3xl p-8 sm:p-12 text-white shadow-card relative overflow-hidden">
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                The Recode Shift
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Where the intervention actually happens
              </h3>
              <p className="text-silver text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Conventional approaches try to manage the <strong className="text-white font-medium">Behaviour</strong> (forcing calm) or intellectualize the <strong className="text-white font-medium">Emotional Response</strong>. 
                Neuro Recode intervenes between the <strong className="text-accent font-medium">Trigger</strong> and the <strong className="text-accent font-medium">Internal Pattern</strong>, updating how your subconscious interprets cues so a calmer internal state becomes your natural baseline.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                <span className="text-xs text-silver uppercase tracking-wider block mb-1">Old Way</span>
                <span className="text-sm font-medium text-white/90">Trigger → Threat Alarm → Struggle to Cope</span>
              </div>
              <div className="p-4 rounded-xl bg-accent/15 border border-accent/30 backdrop-blur-xs">
                <span className="text-xs text-accent uppercase tracking-wider font-semibold block mb-1">Neuro Recode</span>
                <span className="text-sm font-medium text-white">Trigger → Updated Pattern → Grounded Presence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

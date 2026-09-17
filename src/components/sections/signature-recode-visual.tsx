'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, RefreshCw, Activity, ShieldAlert, HeartHandshake } from 'lucide-react';

type ViewMode = 'comparison' | 'old' | 'recode' | 'new';

export function SignatureRecodeVisual() {
  const [activeMode, setActiveMode] = useState<ViewMode>('comparison');

  return (
    <section className="py-20 sm:py-28 bg-primary-dark text-white relative overflow-hidden" id="signature-visual">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-accent text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            The Signature Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            From Automatic Reaction to Grounded Choice
          </h2>
          <p className="text-silver text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            See how Neuro Recode decouples conditioned emotional threat alarms from everyday workplace and personal triggers.
          </p>
        </div>

        {/* Mode Selector Tabs (Mobile & Desktop) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveMode('comparison')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'comparison'
                  ? 'bg-accent text-primary-dark shadow-sm font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Full Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('old')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'old'
                  ? 'bg-white/20 text-white shadow-sm font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              01 Old Pattern
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('recode')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'recode'
                  ? 'bg-primary text-white shadow-sm font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              02 The Recode
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('new')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'new'
                  ? 'bg-emerald-500 text-white shadow-sm font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              03 New Baseline
            </button>
          </div>
        </div>

        {/* Dynamic Visual Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Old Pattern */}
          {(activeMode === 'comparison' || activeMode === 'old') && (
            <div className={`rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between ${
              activeMode === 'old'
                ? 'col-span-1 lg:col-span-3 max-w-3xl mx-auto bg-white/10 border-red-400/40 shadow-card'
                : 'bg-white/[0.05] border-white/10 hover:border-white/20'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider font-mono text-red-300 bg-red-950/60 px-3 py-1 rounded-full border border-red-800/40 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" /> Conditioned Circuit
                  </span>
                  <span className="text-white/40 font-mono text-xs">STATE A</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  The Old Pattern
                </h3>
                <p className="text-silver text-sm mb-6">
                  Autonomic survival loop governed by past conditioning.
                </p>

                {/* Micro Step Pipeline */}
                <div className="space-y-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-xs">1</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Trigger</div>
                      <div className="text-sm font-medium text-white">Critical feedback / Public visibility</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-xs">2</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Automatic Thought</div>
                      <div className="text-sm font-medium text-white">“I am exposed; I must protect myself”</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center font-bold text-xs">3</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Visceral Feeling</div>
                      <div className="text-sm font-medium text-white">Throat tightness, shallow breath, panic</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-900/20 border border-red-500/30 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/30 text-red-300 flex items-center justify-center font-bold text-xs">4</span>
                    <div>
                      <div className="text-xs text-red-300 uppercase tracking-wider font-semibold">Habitual Reaction</div>
                      <div className="text-sm font-medium text-white">Exhausting overcompensation or avoidance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-silver/80">
                Result: High daily energy cost and chronic nervous exhaustion.
              </div>
            </div>
          )}

          {/* Card 2: The Recode (Centerpiece) */}
          {(activeMode === 'comparison' || activeMode === 'recode') && (
            <div className={`rounded-3xl p-8 border transition-all duration-500 relative flex flex-col justify-between ${
              activeMode === 'recode'
                ? 'col-span-1 lg:col-span-3 max-w-3xl mx-auto bg-primary/25 border-accent shadow-elevated'
                : 'bg-gradient-to-b from-primary/30 to-purple-tint/10 border-primary/40 shadow-card'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider font-mono text-accent bg-accent/15 px-3 py-1 rounded-full border border-accent/30 flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" /> Experiential Transition
                  </span>
                  <span className="text-accent font-mono text-xs">INTERVENTION</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  The Recode
                </h3>
                <p className="text-silver text-sm mb-6">
                  Direct experiential exploration of the subconscious root imprint.
                </p>

                {/* Recode Process Flow */}
                <div className="space-y-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">A</span>
                    <div>
                      <div className="text-xs text-accent uppercase tracking-wider font-medium">Internal Pause</div>
                      <div className="text-sm font-medium text-white">Somatic awareness without judgment</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">B</span>
                    <div>
                      <div className="text-xs text-accent uppercase tracking-wider font-medium">Root Decoupling</div>
                      <div className="text-sm font-medium text-white">Releasing the historical threat charge</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-accent/15 border border-accent/30 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-primary-dark flex items-center justify-center font-bold text-xs">C</span>
                    <div>
                      <div className="text-xs text-accent uppercase tracking-wider font-bold">Neural Reinforcement</div>
                      <div className="text-sm font-medium text-white">Anchoring calm physiological baseline</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-accent/20 text-xs text-accent font-medium">
                Structured 1-on-1 guided process · Safe, private, and non-invasive.
              </div>
            </div>
          )}

          {/* Card 3: New Baseline */}
          {(activeMode === 'comparison' || activeMode === 'new') && (
            <div className={`rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between ${
              activeMode === 'new'
                ? 'col-span-1 lg:col-span-3 max-w-3xl mx-auto bg-emerald-950/40 border-emerald-400/50 shadow-card'
                : 'bg-white/[0.05] border-white/10 hover:border-emerald-500/30'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5" /> Updated Default
                  </span>
                  <span className="text-white/40 font-mono text-xs">STATE B</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  New Baseline Response
                </h3>
                <p className="text-silver text-sm mb-6">
                  Natural, grounded composure without conscious willpower.
                </p>

                {/* Micro Step Pipeline */}
                <div className="space-y-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">1</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Trigger</div>
                      <div className="text-sm font-medium text-white">Critical feedback / Public visibility</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">2</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Internal Awareness</div>
                      <div className="text-sm font-medium text-white">“This is just information, not danger”</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">3</span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Body State</div>
                      <div className="text-sm font-medium text-white">Steady breathing, relaxed shoulders, presence</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-900/20 border border-emerald-500/30 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold text-xs">4</span>
                    <div>
                      <div className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">Intentional Action</div>
                      <div className="text-sm font-medium text-white">Clear, composed communication and focus</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-emerald-300 font-medium">
                Result: Conserved cognitive energy, sound sleep, and calm authority.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

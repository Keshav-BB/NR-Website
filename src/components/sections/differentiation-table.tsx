import React from 'react';
import { Check, Minus } from 'lucide-react';

const COMPARISONS = [
  {
    area: 'Primary Focus',
    conventional: 'Symptom & coping orientation (calming acute distress)',
    neurorecode: 'Root-pattern orientation (locating & resolving initial imprint)',
  },
  {
    area: 'Cognitive Level',
    conventional: 'Conscious prefrontal reasoning (talk therapy & reframing)',
    neurorecode: 'Subconscious autonomic neural networks (NLP & clinical hypnotherapy)',
  },
  {
    area: 'Timeline Duration',
    conventional: 'Often open-ended, indefinite maintenance protocols',
    neurorecode: 'Structured 3-step protocol with a 90-day integration window',
  },
  {
    area: 'Daily Experience',
    conventional: 'Managing flare-ups with continuous conscious breathing exercises',
    neurorecode: 'Subconscious default runs calm naturally without ongoing effort',
  },
];

export function DifferentiationTable() {
  return (
    <section className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase font-semibold tracking-widest text-accent mb-3">
            What Makes Us Different
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            The reason management felt endless was not your fault.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Managing anxiety symptoms is helpful for temporary calm. But true freedom occurs only
            when the underlying neural alarm loop is resolved at the root.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Conventional Symptom Management */}
          <div className="rounded-2xl p-7 sm:p-8 bg-surface-muted/70 border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-black/5 text-xs font-semibold uppercase tracking-wider text-content-secondary mb-6">
                Conventional Symptom Management
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-content-muted/20 text-content-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Minus className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-content-primary text-base mb-1">
                      Meditation &amp; Breathwork
                    </h4>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      Soothes acute physical activation momentarily, but leaves the underlying
                      neural trigger untouched.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-content-muted/20 text-content-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Minus className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-content-primary text-base mb-1">
                      Conscious Talk Therapy
                    </h4>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      Helps you understand why you feel anxious, but logic alone cannot rewire an
                      autonomic fight-or-flight loop.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-content-muted/20 text-content-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Minus className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-content-primary text-base mb-1">
                      Symptom Suppression
                    </h4>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      Temporarily dulls the anxiety sensation while the subconscious belief loop
                      remains intact beneath.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 text-xs text-content-secondary italic">
              Note: We do not disparage medical or psychiatric care. If prescribed medication, always
              follow your physician&apos;s guidance.
            </div>
          </div>

          {/* Column 2: The Neuro Recode Protocol */}
          <div className="rounded-2xl p-7 sm:p-8 bg-primary-dark text-white shadow-elevated flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
                The Neuro Recode Approach
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1">
                      Pinpoint the Subconscious Imprint
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Decode locates the exact formative experience where the nervous system first
                      coupled responsibility with survival threat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1">
                      Subconscious Neuroplastic Rewiring
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Re-imprints the neural pathway using clinical hypnotherapy and timeline NLP so
                      the old trigger ceases to fire the emergency alarm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent text-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base mb-1">
                      Permanent Autonomic Default
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Reinforce locks the calm response into muscle memory and daily habits over 90
                      days so you don&apos;t need to &ldquo;manage&rdquo; anymore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-serif italic text-accent text-base">
                &ldquo;Management keeps you stuck. Elimination sets you free.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Activity, RefreshCw } from 'lucide-react';
import { HpaAxisDiagram } from '../science/hpa-axis-diagram';

export function SciencePreview() {
  return (
    <section id="science" className="py-20 sm:py-28 bg-surface-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: HPA Axis SVG Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <HpaAxisDiagram />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              The Mechanism in Plain Language
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight">
              Anxiety is not a personality trait. <br />
              <span className="text-primary italic font-serif">It is an automated circuit.</span>
            </h2>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              When your nervous system encounters a trigger, your amygdala alerts the HPA axis in
              under 15 milliseconds. Cortisol floods your bloodstream, executive rationality in the
              prefrontal cortex dims, and evolutionary survival software takes over.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/80 border border-white/60">
                <div className="flex items-center gap-2 text-primary font-bold mb-1">
                  <Brain className="w-4 h-4 text-accent-muted" />
                  <span>Subcortical Speed</span>
                </div>
                <p className="text-xs text-content-secondary leading-relaxed">
                  The alarm sounds before your conscious mind even finishes reading the meeting agenda.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-white/60">
                <div className="flex items-center gap-2 text-primary font-bold mb-1">
                  <RefreshCw className="w-4 h-4 text-accent-muted" />
                  <span>Adult Neuroplasticity</span>
                </div>
                <p className="text-xs text-content-secondary leading-relaxed">
                  Neural circuits that fire together can be systematically decoupled and rewired.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              Until the circuit itself is resolved at the subconscious level, coping techniques only
              temporarily soothe an alarm that is destined to ring again. That is exactly what the
              3-step protocol addresses.
            </p>

            <div className="pt-2">
              <Link
                href="/science"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-accent font-semibold text-sm hover:bg-primary-hover transition-colors shadow-subtle"
              >
                <span>Read the Full Science &amp; Research Citations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { scienceConcepts, researchReferences } from '@/content/science-data';
import { HpaAxisDiagram } from '@/components/science/hpa-axis-diagram';
import { ResearchReference } from '@/components/science/research-reference';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';
import { Brain, Sparkles, BookOpen, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Science: HPA Axis, Neuroplasticity & Subconscious Wiring',
  description:
    'Explore the biological foundations of anxiety: the autonomic threat cascade, amygdala hijack, synaptic plasticity, and peer-reviewed research citations.',
  alternates: {
    canonical: '/science',
  },
};

export default function SciencePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Brain className="w-3.5 h-3.5" />
            <span>Biological Foundation</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            The neuroscience of anxiety.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Anxiety is an autonomic physiological response engineered for survival. When you understand
            the circuit, you can systematically unlearn it.
          </p>
        </div>
      </section>

      {/* Interactive HPA Diagram Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <HpaAxisDiagram />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-widest text-accent block">
                The Autonomic Threat Cascade
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark">
                How the Body Sounds the Alarm Before You Think
              </h2>
              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                When you face a trigger—whether a sudden corporate re-org, an executive meeting, or an
                urgent notification—the thalamus routes sensory data directly to the amygdala via the
                subcortical pathway in 12–15 milliseconds.
              </p>
              <p className="text-base text-content-secondary leading-relaxed">
                The amygdala signals the hypothalamus, which activates the pituitary gland via
                corticotropin-releasing hormone (CRH). The pituitary gland releases adrenocorticotropic
                hormone (ACTH) into the bloodstream, triggering the adrenal cortex to flood cortisol
                and epinephrine.
              </p>
              <div className="p-5 rounded-xl bg-surface-muted border border-primary/10 space-y-2">
                <p className="font-bold text-primary text-sm">The Consequence: Hypofrontality</p>
                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  During acute autonomic activation, metabolic blood flow to the prefrontal cortex
                  decreases. The brain prioritizes survival over creative reasoning, resulting in mental
                  fog, vocal tightness, and catastrophic anticipation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20 sm:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Core Neuroscience Concepts
            </h2>
            <p className="text-base text-content-secondary">
              The biological mechanisms underlying our 3-Step Protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scienceConcepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-accent-muted mb-2 block">
                    {concept.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {concept.explanation}
                  </p>
                  <ul className="space-y-2 text-xs text-content-secondary">
                    {concept.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Research References */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Verified Bibliography</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Peer-Reviewed Scientific Citations
            </h2>
            <p className="text-base text-content-secondary leading-relaxed">
              We do not invent research claims or extrapolate false medical promises. Below are
              seminal publications in neurobiology, memory reconsolidation, and stress physiology that
              inform our protocol architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchReferences.map((ref) => (
              <ResearchReference key={ref.id} reference={ref} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-surface-muted text-xs text-content-secondary leading-relaxed max-w-3xl mx-auto text-center border border-border">
            <strong>Evidence Boundary Notice:</strong> The citations above reference independent
            academic literature on neuroplasticity and endocrinology. They demonstrate underlying
            biological principles and do not constitute direct endorsements of Neuro Recode by the
            authors or institutions.
          </div>
        </div>
      </section>

      <FreeTrainingBanner />
    </div>
  );
}

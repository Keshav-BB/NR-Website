import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Search, Clock, HelpCircle } from 'lucide-react';
import { faqsData } from '@/content/faqs-data';
import { AccordionItem } from '@/components/ui/accordion';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';
import { siteConfig } from '@/lib/cms/site-config';

export const metadata: Metadata = {
  title: 'The 3-Step Protocol: Decode, Rewire, Reinforce',
  description:
    'A comprehensive exploration of the Neuro Recode 3-Step Protocol: how we locate the subconscious root cause of anxiety, rewire autonomic neural circuits, and cement calm defaults.',
  alternates: {
    canonical: '/method',
  },
};

export default function MethodPage() {
  const methodFaqs = faqsData.filter(
    (f) => f.category === 'Understanding Neuro Recode' || f.category === 'Sessions & Process'
  );

  return (
    <div className="bg-background">
      {/* Page Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Methodology &amp; Architecture
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            How we eliminate anxiety at the root.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            A structured protocol built on adult neuroplasticity, NLP, and clinical hypnotherapy.
            Designed to permanently rewire autonomic threat triggers instead of managing them forever.
          </p>
        </div>
      </section>

      {/* Why Patterns Persist */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs uppercase font-semibold tracking-widest text-accent block mb-2">
              The Root Dilemma
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark">
              Why anxiety persists despite all your conscious effort.
            </h2>
          </div>

          <div className="prose prose-lg text-content-secondary space-y-6 leading-relaxed">
            <p>
              Most working professionals spend years attempting to solve anxiety intellectually.
              They read books on cognitive reframing, practice 4-7-8 breathing, use meditation apps,
              and speak with counsellors. Yet when an important executive review, client crisis, or
              presentation arrives, their chest constricts and their palms sweat on cue.
            </p>
            <p>
              This disconnect occurs because <strong>conscious understanding does not alter subconscious wiring</strong>.
              Your autonomic nervous system operates subcortically through the amygdala and brainstem,
              processing threat in roughly 15 milliseconds. By the time your conscious mind begins
              talking yourself down, your adrenal glands have already released cortisol into your
              bloodstream.
            </p>
            <p>
              To change how your nervous system behaves, you must speak its native language:
              experiential, subconscious memory re-imprinting.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Detailed Stages */}
      <section className="py-20 sm:py-28 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-semibold tracking-widest text-accent block mb-2">
              The Protocol
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark">
              The Three Connected Stages
            </h2>
          </div>

          {/* Stage 01: Decode */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center flex-shrink-0 font-display font-bold text-2xl shadow-sm">
              01
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent-muted bg-accent/10 px-2.5 py-1 rounded">
                  Stage 1: Identification
                </span>
                <span className="text-xs text-content-muted font-mono">Subconscious Mapping</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark">
                Decode: Finding the Original Neural Imprint
              </h3>
              <p className="text-base text-content-secondary leading-relaxed">
                We use NLP timeline techniques and guided intake mapping to trace your anxiety past
                surface triggers (e.g. your boss, deadlines, emails) to the foundational imprint
                where your nervous system first paired vulnerability with existential threat.
              </p>
              <div className="bg-background p-5 rounded-xl border border-border space-y-2 text-sm text-content-secondary">
                <p className="font-semibold text-primary-dark">What this delivers:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Uncovers the exact root event (often 10–25 years old) driving the reaction</li>
                  <li>Clarifies why rational coping tools failed to reach this subconscious loop</li>
                  <li>Maps your unique trigger chain so the rewire session is laser-targeted</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 02: Rewire */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center flex-shrink-0 font-display font-bold text-2xl shadow-sm">
              02
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent-muted bg-accent/10 px-2.5 py-1 rounded">
                  Stage 2: Transformation
                </span>
                <span className="text-xs text-content-muted font-mono">Memory Reconsolidation</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark">
                Rewire: Replacing the Anxious Circuit with a Calm Default
              </h3>
              <p className="text-base text-content-secondary leading-relaxed">
                Direct subconscious re-imprinting. Utilizing clinical hypnotherapy states and
                neuroplastic memory reconsolidation, we discharge the emotional charge from the
                original imprint. The neural circuit is decoupled: the trigger stops signaling an
                emergency.
              </p>
              <div className="bg-background p-5 rounded-xl border border-border space-y-2 text-sm text-content-secondary">
                <p className="font-semibold text-primary-dark">What this delivers:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Neutralizes the visceral chest tightness and knot in the stomach</li>
                  <li>Installs a calm, grounded emotional baseline in place of anticipatory dread</li>
                  <li>Clients often notice the absence of anxiety before they even realize it</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 03: Reinforce */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center flex-shrink-0 font-display font-bold text-2xl shadow-sm">
              03
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent-muted bg-accent/10 px-2.5 py-1 rounded">
                  Stage 3: Integration
                </span>
                <span className="text-xs text-content-muted font-mono">90-Day Window</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark">
                Reinforce: Locking in the Calm Default for Life
              </h3>
              <p className="text-base text-content-secondary leading-relaxed">
                New neural pathways require myelination and structural strengthening. Through somatic
                anchoring, behavioral integration, and structured reinforcement windows, the new calm
                state shifts from a temporary feeling to your involuntary, natural identity under
                pressure.
              </p>
              <div className="bg-background p-5 rounded-xl border border-border space-y-2 text-sm text-content-secondary">
                <p className="font-semibold text-primary-dark">What this delivers:</p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Anchored behavioral reflexes in board meetings and high-stress reviews</li>
                  <li>Consistent sleep cycles without nocturnal adrenaline wake-ups</li>
                  <li>Freedom from ongoing therapy sessions—you live your life unencumbered</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sessions Look Like */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              What Sessions Look Like
            </h2>
            <p className="text-base text-content-secondary">
              Conducted in private, confidential 1-on-1 virtual settings with experienced
              practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <Clock className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-bold text-primary-dark text-base mb-2">Duration &amp; Format</h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                60 to 90 minutes per session over secure Zoom video. Completely private, quiet, and
                undisturbed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <Zap className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-bold text-primary-dark text-base mb-2">Language &amp; Delivery</h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Conducted in natural Tanglish (Tamil + English) or pure English, matching your
                comfort level.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <ShieldCheck className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-bold text-primary-dark text-base mb-2">Safe &amp; Respectful</h4>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                You remain fully in control, aware, and conscious throughout. No forced disclosure or
                reliving trauma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What The Method Is / Isn't */}
      <section className="py-20 sm:py-24 bg-surface-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-3">
              Clear Boundaries: What This Is and Isn&apos;t
            </h2>
            <p className="text-base text-content-secondary">
              Ethical clarity and medical honesty are core pillars of Neuro Recode.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-green-200">
              <h3 className="font-bold text-green-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>What The Method Is</span>
              </h3>
              <ul className="space-y-3 text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>A structured, non-clinical personal wellness and mindset protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Grounded in neuroplastic memory reconsolidation &amp; subconscious NLP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Focused on performance anxiety, burnout, and emotional composure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tailored specifically for working professionals in high-stakes roles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-red-200">
              <h3 className="font-bold text-red-950 text-lg mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">✕</span>
                <span>What The Method Is Not</span>
              </h3>
              <ul className="space-y-3 text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Not medical diagnosis, clinical psychiatry, or psychotherapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Not a substitute for emergency suicide or psychiatric intervention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>We never prescribe, manage, or alter psychiatric medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Not an open-ended subscription—it is a finite 3-step intervention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-content-secondary">
              Everything you need to know about the 3-step protocol and consultations.
            </p>
          </div>

          <div className="space-y-2">
            {methodFaqs.map((faq, idx) => (
              <AccordionItem key={idx} title={faq.question} category={faq.category}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* Free Training Banner */}
      <FreeTrainingBanner
        title="Experience the protocol in action."
        subtitle="Watch the complimentary 60-minute masterclass to see how the 3-Step Protocol decodes and resolves anxiety loops."
      />
    </div>
  );
}

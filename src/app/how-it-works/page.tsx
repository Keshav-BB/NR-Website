import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Search,
  Compass,
  Sliders,
  ArrowUpRight,
  CheckCircle2,
  Laptop,
  Wifi,
  VolumeX,
  Coffee,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { faqsData } from '@/content/faqs-data';
import { AccordionItem } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'How It Works — The Neuro Recode Experiential Journey',
  description:
    'Explore the 5-step experiential Neuro Recode journey from pattern understanding to lasting internal composure.',
  alternates: {
    canonical: '/how-it-works',
  },
};

const preparationTips = [
  {
    icon: VolumeX,
    title: 'A Quiet, Private Space',
    description: 'Ensure you are in a comfortable, confidential room where you will not be interrupted.',
  },
  {
    icon: Laptop,
    title: 'Laptop or Tablet',
    description: 'A larger screen allows you to focus comfortably without holding a device.',
  },
  {
    icon: Wifi,
    title: 'Stable Internet Connection',
    description: 'A reliable connection ensures smooth video guidance without technical friction.',
  },
  {
    icon: Coffee,
    title: 'Zero Prior Preparation',
    description: 'You do not need to prepare speeches or analyze your childhood. Just arrive as you are.',
  },
];

const journeySteps = [
  {
    step: '01',
    title: 'Understand',
    phase: 'Mapping The Pattern',
    headline: 'Observe the subconscious reaction with precision',
    description:
      'We begin by mapping the exact situations, physical sensations, and automatic thoughts that ignite your stress response. Rather than viewing anxiety as a mystery, we deconstruct it into a predictable internal sequence.',
    takeaway: 'Total clarity on what your nervous system is actually reacting to.',
  },
  {
    step: '02',
    title: 'Explore',
    phase: 'Root Discovery',
    headline: 'Locate the underlying emotional blueprint',
    description:
      'Using applied neuroscience and neuro-linguistic timeline inquiry, we gently trace how your mind originally learned to associate this situation with danger. We do this without requiring you to relive painful memories in exhaustive detail.',
    takeaway: 'Uncovering the subconscious protective mechanism keeping the alarm active.',
  },
  {
    step: '03',
    title: 'Recode',
    phase: 'Experiential Shift',
    headline: 'Decouple the threat charge from the trigger',
    description:
      'Through structured experiential protocols, we guide your subconscious to release the stored physiological alarm. The trigger remains part of your external environment, but its ability to hijack your nervous system is neutralized.',
    takeaway: 'Immediate physical sensation of ease, unburdening, and mental quiet.',
  },
  {
    step: '04',
    title: 'Integrate',
    phase: 'Real-World Anchoring',
    headline: 'Test and cement the new internal response',
    description:
      'We simulate future high-pressure scenarios to ensure your new calm baseline remains steady. We anchor simple, discreet somatic cues you can access instantly during everyday work meetings and social situations.',
    takeaway: 'Confidence that your new composed response will hold up in real life.',
  },
  {
    step: '05',
    title: 'Move Forward',
    phase: 'Sustained Flexibility',
    headline: 'Live from choice rather than conditioned habit',
    description:
      'With the recurring pattern cleared, you operate with greater executive presence, emotional self-regulation, and quiet authority. You conserve cognitive energy and sleep without nocturnal alarm spikes.',
    takeaway: 'Lasting behavioral flexibility and authentic peace of mind.',
  },
];

export default function HowItWorksPage() {
  const methodFaqs = faqsData.filter((f) => f.category === 'Understanding Neuro Recode' || f.category === 'Sessions & Process');

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-background via-purple-tint/20 to-background border-b border-border/70 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Structured Experiential Methodology</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-[1.15] mb-6">
            How Neuro Recode Works:{' '}
            <span className="text-primary italic font-serif block sm:inline">A Structured, Experiential Path</span>
          </h1>

          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Moving beyond intellectual talk therapy and temporary coping exercises into direct subconscious and nervous system repatterning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteConfig.navigation.primaryCtaUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-hover shadow-card transition-all"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
            <a
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/25 bg-white/70 text-primary font-medium text-base hover:bg-primary/5 transition-colors"
            >
              <span>Explore the 5 Steps</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Before a Session */}
      <section className="py-16 sm:py-20 bg-white border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
              Simple Preparation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
              Before Your First Session
            </h2>
            <p className="text-sm sm:text-base text-content-secondary mt-2">
              All 1-on-1 consultations and sessions are conducted remotely via private video call. Here is all you need to prepare:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-background border border-border/80 shadow-xs hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-tint text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-dark mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The 5-Step Journey (Detailed Visual Timeline) */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden" id="journey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
              Step-by-Step Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight">
              The 5-Step Experiential Process
            </h2>
            <p className="text-base sm:text-lg text-content-secondary mt-3">
              Each session follows a calm, predictable structure designed to produce measurable internal relief.
            </p>
          </div>

          <div className="space-y-8 relative">
            {/* Vertical Connector Line */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {journeySteps.map((s) => (
              <div
                key={s.step}
                className="relative bg-white rounded-3xl p-8 sm:p-10 border border-border/80 shadow-card flex flex-col md:flex-row gap-6 sm:gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-white font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md">
                  {s.step}
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-accent uppercase">
                      {s.phase}
                    </span>
                    <span className="text-xs text-content-secondary">• Step {s.step}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary-dark">
                    {s.title}: <span className="text-primary font-normal">{s.headline}</span>
                  </h3>

                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                    {s.description}
                  </p>

                  <div className="pt-3 border-t border-border/60 text-xs sm:text-sm text-primary-dark font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span><strong>Key Outcome:</strong> {s.takeaway}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What to Expect */}
      <section className="py-20 sm:py-24 bg-white border-y border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
              Safety &amp; Transparency
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark">
              What You Can Expect During Sessions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="font-bold text-primary-dark text-base mb-2">Complete Psychological Safety</h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                You are always in full control of your conscious awareness. Sessions are collaborative, respectful, and guided at your pace.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="font-bold text-primary-dark text-base mb-2">Noticeable Physical Relief</h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Because we address the subconscious somatic imprint, clients consistently experience palpable unclenching in their chest, throat, and shoulders.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="font-bold text-primary-dark text-base mb-2">Zero Forced Trauma Re-living</h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                We focus on the structure of your internal response today, rather than endlessly analyzing historical stories.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="font-bold text-primary-dark text-base mb-2">Practical Integration Exercises</h3>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                You receive simple 2-minute daily somatic grounding tools to reinforce your new calm baseline between sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 sm:py-24 bg-background border-b border-border/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-2">
              Methodology Questions
            </h2>
            <p className="text-sm text-content-secondary">
              Common questions regarding our sessions and approach.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border divide-y divide-border/60">
            {methodFaqs.map((faq, idx) => (
              <AccordionItem key={faq.id} title={faq.question} category={faq.category} defaultOpen={idx === 0}>
                <p className="text-content-secondary leading-relaxed">{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing Consultation CTA */}
      <section className="py-20 sm:py-24 bg-primary-dark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to experience the shift?
          </h2>
          <p className="text-silver text-base sm:text-lg mb-8 font-light">
            Take the first step with a private, 1-on-1 Root Cause Analysis consultation.
          </p>
          <Link
            href={siteConfig.navigation.primaryCtaUrl}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-primary-dark font-bold text-base hover:bg-accent-hover transition-colors shadow-elevated"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

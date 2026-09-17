import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { ProblemPattern } from '@/components/sections/problem-pattern';
import { WhatIsNeuroRecode } from '@/components/sections/what-is-neurorecode';
import { SignatureRecodeVisual } from '@/components/sections/signature-recode-visual';
import { HowItWorksJourney } from '@/components/sections/how-it-works-journey';
import { AreasWeHelp } from '@/components/sections/areas-we-help';
import { WhyNeuroRecode } from '@/components/sections/why-neurorecode';
import { TestimonialsEditorial } from '@/components/sections/testimonials-editorial';
import { TeamTrust } from '@/components/sections/team-trust';
import { SafetyExpectations } from '@/components/sections/safety-expectations';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = {
  title: 'Neuro Recode — Change the pattern. Change how you experience life.',
  description:
    'Neuro Recode helps you explore recurring emotional and behavioural patterns and work toward a different internal response through a structured, experiential approach.',
  openGraph: {
    title: 'Neuro Recode — Change the pattern. Change how you experience life.',
    description:
      'Explore recurring emotional and behavioural patterns and work toward a calmer internal response through a structured, experiential approach.',
    url: 'https://www.neurorecode.in',
    siteName: 'Neuro Recode',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Hero */}
      <Hero />

      {/* 02. The Problem / Pattern */}
      <ProblemPattern />

      {/* 03. What is Neuro Recode? */}
      <WhatIsNeuroRecode />

      {/* 04. Signature Recode Visual */}
      <SignatureRecodeVisual />

      {/* 05. How It Works Journey */}
      <HowItWorksJourney />

      {/* 06. Areas We Help With */}
      <AreasWeHelp />

      {/* 07. Why Neuro Recode? */}
      <WhyNeuroRecode />

      {/* 08. Testimonials / Real Experiences */}
      <TestimonialsEditorial />

      {/* 09. Team & Trust */}
      <TeamTrust />

      {/* 10. Safety & Expectation Setting */}
      <SafetyExpectations />

      {/* 11. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 12. Final CTA */}
      <FinalCta />
    </div>
  );
}

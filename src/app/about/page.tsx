import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Compass, Building2, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

export const metadata: Metadata = {
  title: 'About Neuro Recode: Our Origin, Philosophy & Standards',
  description:
    'Learn why Neuro Recode was established in Chennai, Tamil Nadu, our mission to eliminate performance anxiety at the root, and our rigorous ethical standards.',
  alternates: {
    canonical: '/about',
  },
};

const VALUES = [
  {
    icon: Compass,
    title: 'Root-Cause Commitment',
    description:
      'We refuse to settle for symptom coping or perpetual management. If a protocol does not address the autonomic origin imprint, we do not deploy it.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Medical Boundaries',
    description:
      'We are honest about what we are: an educational, non-clinical wellness protocol. We do not invent clinical claims, diagnose medical conditions, or interfere with prescribed treatments.',
  },
  {
    icon: HeartHandshake,
    title: 'Dignity & Absolute Privacy',
    description:
      'Every executive and professional’s history is held under strict confidentiality. Client stories are published only with explicit, written, affirmative consent.',
  },
  {
    icon: Award,
    title: 'Cultural Alignment (Tanglish Delivery)',
    description:
      'Emotional neural networks are formed in one’s mother tongue and cultural environment. Delivering the protocol in natural Tanglish bridges high-level neuroscience with raw authentic emotion.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            The Company &amp; Origin
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Heal your mind. <br />
            <span className="text-primary italic font-serif">To heal your life.</span>
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Born from the realization that high-functioning professionals were suffering in silence
            under conventional symptom management that never touched the root cause.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 sm:py-24 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs uppercase font-semibold tracking-widest text-accent block mb-2">
              Why We Exist
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark">
              The Genesis of Neuro Recode
            </h2>
          </div>

          <div className="prose prose-lg text-content-secondary space-y-6 leading-relaxed">
            <p>
              In high-stakes corporate environments across Chennai, Bangalore, and Hyderabad, a silent
              epidemic exists: highly capable managers, engineers, founders, and doctors who deliver
              exceptional results by day while battling relentless visceral dread by night.
            </p>
            <p>
              They sought help. They tried talk therapy, spending months analyzing their childhood.
              They downloaded meditation apps, focusing on their breath while their chest tightened.
              Some were prescribed medications that dulled their symptoms while leaving the underlying
              threat pattern alive.
            </p>
            <p>
              Neuro Recode was founded with a singular, unapologetic mission: <strong>to eliminate the
              anxiety pattern at the root rather than teaching people how to endure it forever</strong>.
            </p>
            <p>
              By combining empirical principles of adult neuroplasticity with the subconscious access
              tools of Neuro-Linguistic Programming (NLP) and clinical hypnotherapy, we created a
              reproducible 3-Step Protocol that addresses the autonomic threat cascade where it
              actually originates.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-center mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Our Non-Negotiable Standards
            </h2>
            <p className="text-base text-content-secondary">
              How we work with clients, protect privacy, and maintain ethical boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-border shadow-sm space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-dark">{val.title}</h3>
                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Registration & Tamil Nadu Roots */}
      <section className="py-16 sm:py-20 bg-surface-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-primary/15 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-bold text-primary-dark">
                Corporate &amp; Registration Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-content-secondary pt-2">
              <div>
                <strong className="text-primary-dark block mb-1">Entity Name:</strong>
                <p>{siteConfig.company.legalName}</p>
              </div>
              <div>
                <strong className="text-primary-dark block mb-1">Corporate Identity (CIN):</strong>
                <p className="font-mono">{siteConfig.company.cin}</p>
              </div>
              <div>
                <strong className="text-primary-dark block mb-1">MSME Registration:</strong>
                <p className="font-mono">{siteConfig.company.udyam}</p>
              </div>
              <div>
                <strong className="text-primary-dark block mb-1">Operational Base:</strong>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {siteConfig.company.operationalBase} (Serving clients globally)
                </p>
              </div>
              <div className="sm:col-span-2">
                <strong className="text-primary-dark block mb-1">Registered Address:</strong>
                <p className="text-xs text-content-muted leading-relaxed font-mono">
                  {siteConfig.company.registeredOffice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Training Banner */}
      <FreeTrainingBanner />
    </div>
  );
}

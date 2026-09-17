import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/cms/site-config';
import { ShieldAlert, AlertTriangle, PhoneCall, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wellness & Medical Disclaimer',
  description:
    'Important non-clinical disclosures, crisis guidance, and scope of services for Neuro Recode Private Limited.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 block">
            Health &amp; Medical Boundaries
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Wellness &amp; Medical Disclaimer
          </h1>
          <p className="text-xs text-content-muted">
            Important Information Regarding the Scope of Our Services
          </p>
        </div>

        {/* Crisis Hotline Callout */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-2xl mb-12 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-red-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>Crisis &amp; Emergency Mental Health Notice</span>
          </h2>
          <p className="text-sm text-red-800 leading-relaxed">
            Neuro Recode does <strong>NOT</strong> provide emergency mental health crisis services,
            suicide prevention intervention, or acute psychiatric emergency care. If you are
            experiencing a mental health crisis, suicidal thoughts, or severe acute distress, please
            immediately contact:
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-red-950">
            <div className="p-3 bg-white rounded-xl border border-red-200">
              Tele-MANAS (Govt of India): <span className="font-mono text-red-600">{siteConfig.hotlines.teleManas}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-red-200">
              National Emergency: <span className="font-mono text-red-600">{siteConfig.hotlines.emergency}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-8 text-sm sm:text-base text-content-secondary leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              1. Non-Clinical Wellness &amp; Coaching Services
            </h2>
            <p>
              The services provided by {siteConfig.company.legalName} (&ldquo;Neuro Recode&rdquo;),
              including the 3-Step Anxiety Re-Code Protocol™, 1-on-1 consultations, workshops,
              webinars, and digital materials, are non-clinical wellness, behavioral coaching, and
              educational services.
            </p>
            <p>
              Our protocol is rooted in neuroplasticity, Neuro-Linguistic Programming (NLP), and
              clinical hypnotherapy principles applied to performance mindset, stress regulation, and
              workplace anxiety.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              2. Not a Substitute for Medical or Psychiatric Treatment
            </h2>
            <p>
              Our services <strong>do not constitute medical advice, medical diagnosis, psychotherapy,
              or psychiatric treatment</strong>.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Our facilitators do not diagnose clinical psychiatric conditions or illnesses.</li>
              <li>We do not prescribe, adjust, manage, or recommend stopping any medications.</li>
              <li>
                If you are currently under psychiatric supervision, taking psychiatric medication, or
                undergoing licensed clinical therapy, you must continue that care. Do not change or
                discontinue any medical treatment without your physician&apos;s explicit guidance.
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              3. No Guaranteed Clinical Outcomes
            </h2>
            <p>
              While our protocol has helped hundreds of working professionals experience deep and
              lasting relief, results vary depending on individual biology, consistency, personal
              effort, and circumstances. We do not guarantee 100% cure rates or make absolute clinical
              outcome promises.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              4. Educational Nature of Website Content
            </h2>
            <p>
              All articles, videos, guides, and neuroscience diagrams published on this website are
              intended solely for general educational purposes. They are not tailored clinical advice
              for any specific individual.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

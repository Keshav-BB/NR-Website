import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldX, Briefcase, Building, Stethoscope, Scale, Coins, Laptop, Users } from 'lucide-react';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

export const metadata: Metadata = {
  title: 'Who We Serve: Tailored for Working Professionals',
  description:
    'Dedicated anxiety resolution for founders, senior leaders, tech engineers, lawyers, doctors, finance executives, and working parents carrying heavy invisible loads.',
  alternates: {
    canonical: '/who-we-serve',
  },
};

const PERSONAS = [
  {
    icon: Building,
    title: 'Founders & Business Owners',
    challenge:
      'Solitary decision fatigue, persistent existential threat regarding runway or payroll, and an inability to disconnect on weekends.',
    pattern:
      'The nervous system treats ordinary business hiccups as life-or-death crises, leading to insomnia, chest tightness, and rapid burnout.',
    fit: 'The protocol decouples identity from business volatility, allowing leaders to steer with calm perspective and executive stamina.',
  },
  {
    icon: Briefcase,
    title: 'Senior Managers & Directors',
    challenge:
      'Managing high-friction organizational politics, upward board reporting, and team delivery under compressed deadlines.',
    pattern:
      'Anticipatory dread before recurring leadership scrums and a constant fear of being exposed as an impostor despite years of competence.',
    fit: 'Decodes early evaluation imprints so high-visibility reviews feel like routine operational discussions rather than threats.',
  },
  {
    icon: Laptop,
    title: 'IT Engineers & Technical Leads',
    challenge:
      'High-velocity sprint deadlines, critical production outages, architectural reviews, and constant cognitive switching.',
    pattern:
      'Brain looping on code bugs and architecture flaws late at night, triggering elevated heart rates during standups or code walkthroughs.',
    fit: 'Restores the ability to mentally switch off work servers at 6 p.m. and sleep deeply without adrenaline spikes.',
  },
  {
    icon: Scale,
    title: 'Corporate Lawyers & Legal Counsel',
    challenge:
      'High-liability contract negotiations, courtroom hearings, adversarial counter-parties, and perfectionist demands.',
    pattern:
      'Chronic physical bracing, jaw clenching, and gastrointestinal distress before major hearings or high-stakes closings.',
    fit: 'Releases the hyper-vigilance loop so you retain sharp analytical acuity without physical exhaustion.',
  },
  {
    icon: Stethoscope,
    title: 'Doctors & Healthcare Specialists',
    challenge:
      'Demanding clinical responsibilities, long shifts, high-stakes medical decisions, and vicarious emotional stress.',
    pattern:
      'Inability to shed patient anxiety when arriving home, resulting in chronic fatigue and emotional numbing.',
    fit: 'Re-establishes clean emotional boundaries in the autonomic nervous system to protect long-term physician health.',
  },
  {
    icon: Coins,
    title: 'Finance & Investment Executives',
    challenge:
      'Managing multimillion-dollar P&L balances, market fluctuations, compliance scrutiny, and tight quarterly audits.',
    pattern:
      'Waking up with sudden adrenaline surges at 3 a.m. recalculating spreadsheets and risk margins.',
    fit: 'Dissolves the catastrophic projection loop so strategic decisions are driven by mathematical precision rather than dread.',
  },
  {
    icon: Users,
    title: 'Working Parents & High-Functioners',
    challenge:
      'Balancing demanding corporate deliverables with intensive family needs, leading to constant guilt and zero recovery time.',
    pattern:
      'Feeling like a frayed wire: snapping at loved ones, feeling permanently overwhelmed, yet performing flawlessly at work.',
    fit: 'Recodes nervous system bandwidth so patience, present engagement, and calm joy return to everyday life.',
  },
];

export default function WhoWeServePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Audience &amp; Eligibility
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Working professionals carrying a load most people cannot see.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            You don&apos;t have a motivation issue. You are carrying an autonomic nervous system
            braced in fight-or-flight while succeeding in high-stakes environments.
          </p>
        </div>
      </section>

      {/* Persona Cards */}
      <section className="py-20 sm:py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Tailored Across Demanding Careers
            </h2>
            <p className="text-base text-content-secondary">
              Different industries, identical underlying neurobiological patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAS.map((p, index) => {
              const Icon = p.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-7 border border-border shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary-dark mb-3">
                      {p.title}
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-content-secondary">
                      <div>
                        <strong className="text-primary-dark block mb-0.5">The Pressure:</strong>
                        <p>{p.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-primary-dark block mb-0.5">The Pattern:</strong>
                        <p>{p.pattern}</p>
                      </div>
                      <div>
                        <strong className="text-primary block mb-0.5">How Re-Code Fits:</strong>
                        <p className="text-content-primary font-medium">{p.fit}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/80">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Inquire about your situation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility & Suitability Checklist */}
      <section className="py-20 sm:py-24 bg-surface-muted border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-3">
              Clear Eligibility Framework
            </h2>
            <p className="text-base text-content-secondary">
              We screen clients strictly to ensure the program is right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm">
              <h3 className="font-bold text-green-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>You are an ideal fit if:</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-content-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>You are a working professional or business founder aged 18+</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>You experience performance anxiety, dread, sleep disruption, or burnout</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>You have tried coping tools and want a root-cause neuroplastic solution</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>You can commit to a focused 3-step sequence and 90-day reinforcement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-red-200 shadow-sm">
              <h3 className="font-bold text-red-950 text-lg mb-4 flex items-center gap-2">
                <ShieldX className="w-5 h-5 text-red-600" />
                <span>This program is NOT for you if:</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-content-secondary">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>You are a college student (services are reserved for working adults)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>You need clinical psychiatric diagnosis, prescriptions, or medical detox</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>You are currently experiencing suicidal crisis (call Tele-MANAS 14416 or 112)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>You are looking for passive advice without engaging in subconscious rewiring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Training Banner */}
      <FreeTrainingBanner
        title="Find out if your anxiety pattern can be rewired."
        subtitle="Watch the 60-minute Free Training to evaluate whether your pattern fits the Neuro Recode protocol."
      />
    </div>
  );
}

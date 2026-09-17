import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { teamData } from '@/content/team-data';

export const metadata: Metadata = {
  title: 'About Neuro Recode: Purpose, Team & Philosophy',
  description:
    'Learn why Neuro Recode was established in Chennai, our philosophy on subconscious patterns, and meet our practitioner team.',
  alternates: {
    canonical: '/about',
  },
};

const VALUES = [
  {
    icon: Compass,
    title: 'Pattern-Level Exploration',
    description:
      'We look beneath surface anxiety symptoms to understand the subconscious blueprint and emotional associations holding those reactions in place.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Non-Clinical Boundaries',
    description:
      'We are completely transparent: an experiential personal-development and wellness approach. We never diagnose medical conditions, prescribe drugs, or substitute for emergency care.',
  },
  {
    icon: HeartHandshake,
    title: 'Dignity & Absolute Privacy',
    description:
      'Every client’s story and background is held with profound respect and confidential safeguards. Authentic experiences are shared strictly with affirmative consent.',
  },
  {
    icon: Award,
    title: 'Relatable Cultural Delivery',
    description:
      'Conditioned emotional patterns are formed in native languages and cultural settings. Delivering guidance in conversational Tanglish and English removes clinical distance.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-background via-purple-tint/15 to-background border-b border-border/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Company, Origin &amp; Philosophy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Understanding the mind to{' '}
            <span className="text-primary italic font-serif block sm:inline">change how you live.</span>
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Born from the realization that capable professionals were suffering in silence under intellectual advice that never changed how their nervous system responded.
          </p>
        </div>
      </section>

      {/* 2. Who We Are & Why We Exist */}
      <section className="py-20 sm:py-24 bg-white border-b border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-accent block mb-2">
              Our Genesis
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
              Why Neuro Recode Exists
            </h2>
            <div className="prose prose-lg text-content-secondary space-y-6 leading-relaxed font-normal">
              <p>
                In high-performing workplaces across South India and globally, countless managers, founders, engineers, doctors, and creative leaders experience a silent struggle: they produce outstanding work by day, yet experience persistent chest tightness, anticipatory dread, or nocturnal overthinking loops.
              </p>
              <p>
                Most had already tried rationalizing their fear. They understood logically that a team review or presentation was not life-threatening. Yet, their autonomic nervous system responded before conscious logic could intervene. Talking about the problem for months gave them intellectual insight, but left their physical threat alarm unchanged.
              </p>
              <p>
                <strong>Neuro Recode was created to bridge this gap.</strong> Rather than asking you to manage symptoms indefinitely, we guide you through an experiential process to explore and shift the subconscious emotional blueprint behind your automatic responses.
              </p>
            </div>
          </div>

          {/* Core Beliefs */}
          <div className="p-8 sm:p-10 rounded-3xl bg-purple-tint/30 border border-primary/20 space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary-dark">
              What We Believe
            </h3>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
              Your anxiety, self-doubt, and overthinking are not personal failures or permanent traits. They are learned internal protective scripts your nervous system acquired to keep you safe. When guided with clarity and respect, the nervous system has the natural neuroplastic capacity to adopt a calmer, grounded baseline.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 sm:py-28 bg-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-accent block mb-2">
              Foundational Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark">
              Our Guiding Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white rounded-3xl p-8 border border-border/80 shadow-xs hover:shadow-card hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-tint text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Team & Practitioners */}
      <section className="py-20 sm:py-28 bg-white border-b border-border/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-accent block mb-2">
              Experienced Facilitators
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark">
              Meet the People Behind Neuro Recode
            </h2>
            <p className="text-base sm:text-lg text-content-secondary mt-3">
              Grounded, certified practitioners dedicated to creating a safe and transformative space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-8 rounded-3xl bg-background border border-border/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-white font-display font-bold text-2xl flex items-center justify-center border-2 border-accent/40 shadow-sm">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-primary-dark">{member.name}</h3>
                      <div className="text-xs font-semibold text-primary">{member.role}</div>
                    </div>
                  </div>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6 font-normal">
                    {member.bio}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-border text-xs italic text-primary-dark mb-6 font-serif">
                    “{member.philosophy}”
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2">
                    Verified Credentials:
                  </div>
                  <ul className="space-y-1.5 text-xs text-content-secondary">
                    {member.credentials.map((c, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="py-20 sm:py-24 bg-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to explore your patterns?
          </h2>
          <p className="text-silver text-base sm:text-lg mb-8 font-light">
            Schedule a private, 1-on-1 Root Cause Analysis consultation to begin.
          </p>
          <Link
            href="/contact?type=consultation"
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

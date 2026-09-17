'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { careersData } from '@/content/careers-data';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Layers,
} from 'lucide-react';

const cultureBenefits = [
  {
    icon: Sparkles,
    title: 'Purpose-Driven Work',
    description: 'Every interaction and campaign directly helps working professionals escape chronic anxiety and reclaim their lives.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Skill Growth',
    description: 'Work with proven psychological frameworks, adult neuroplasticity principles, and modern digital acquisition tools.',
  },
  {
    icon: Compass,
    title: 'Autonomous Ownership',
    description: 'We hire thoughtful individuals and trust them with genuine responsibility. Zero micromanagement.',
  },
  {
    icon: Users,
    title: 'High-Trust Collaboration',
    description: 'A transparent, respectful environment where every voice contributes to shaping our protocol and brand.',
  },
  {
    icon: Award,
    title: 'Coaching & Mentorship',
    description: 'Direct 1-on-1 training from founder and executive leadership in consultative sales, copywriting, and growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Compensation',
    description: 'Predictable fixed base salaries, transparent performance incentives, and ethical workplace practices.',
  },
];

const careerLadder = [
  { step: '01', role: 'Sales Executive', subtitle: 'Master consultative discovery & 1-on-1 advisory' },
  { step: '02', role: 'Team Lead', subtitle: 'Coach new enrollment specialists & lead daily huddles' },
  { step: '03', role: 'Sales Manager', subtitle: 'Own admissions strategy, pipeline health & quality' },
  { step: '04', role: 'Program Consultant', subtitle: 'Design high-level corporate & executive wellness offerings' },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const openPositions = careersData.filter((job) => job.status === 'open');

  const departments = ['All', 'Sales & Admissions', 'Marketing & Brand', 'Growth & Performance'];

  const filteredPositions = selectedDept === 'All'
    ? openPositions
    : openPositions.filter((job) => job.department.toLowerCase().includes(selectedDept.toLowerCase()) || selectedDept.toLowerCase().includes(job.department.toLowerCase()));

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Careers Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-background via-purple-tint/20 to-background border-b border-border/70 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Careers at Neuro Recode</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-[1.15] mb-6">
            Build meaningful work.{' '}
            <span className="text-primary block sm:inline italic font-serif">Grow with purpose.</span>
          </h1>

          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Join a growing team working to make mental wellness more accessible through an experiential, structured approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-hover shadow-card transition-all active:scale-[0.98]"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </a>
            <a
              href="#why-work-with-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/25 bg-white/70 text-primary font-medium text-base hover:bg-primary/5 transition-colors"
            >
              <span>Why Work With Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Intro Section: Do Work That Matters */}
      <section className="py-20 sm:py-24 bg-white border-b border-border/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                Our Mission &amp; Impact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
                Do Work That Matters.
              </h2>
              <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-6 font-normal">
                At Neuro Recode, every role directly shapes how working professionals experience emotional ease and clarity. 
                Whether you are advising a corporate manager through their first pattern consultation, scripting educational video content, or managing precision marketing funnels, your daily work creates measurable, real-world relief.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/70">
                <div>
                  <div className="font-display text-2xl font-bold text-primary">Non-Clinical</div>
                  <div className="text-xs text-content-secondary">Experiential &amp; dignity-first framework</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-accent-muted">South India &amp; Beyond</div>
                  <div className="text-xs text-content-secondary">Delivered in relatable Tanglish &amp; English</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-background rounded-3xl p-8 border border-border/80 shadow-xs">
              <h3 className="font-display text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                <span>Areas You Can Contribute</span>
              </h3>
              <ul className="space-y-3 text-sm text-content-secondary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Admissions &amp; Consultative Sales:</strong> Guide clients through empathetic discovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Content &amp; Brand Storytelling:</strong> Craft compelling psychology-based video scripts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Performance Growth:</strong> Build scalable Meta &amp; digital acquisition funnels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Client Experience:</strong> Coordinate session logistics and ongoing care.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Culture & Benefits: Why Work With Us */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden" id="why-work-with-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-4">
              Culture &amp; Workplace
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
              Why Work With Us?
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
              We provide an environment where ambitious, empathetic professionals can do the best work of their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cultureBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-border/80 shadow-xs hover:shadow-card hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-tint text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 4. Career Progression Visual (WOW Feature from Section 24) */}
          <div className="bg-gradient-to-br from-primary-dark via-[#261238] to-primary-dark rounded-3xl p-8 sm:p-12 text-white shadow-card relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-2">
                Clear Progression Architecture
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Structured Career Pathways
              </h3>
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed">
                We believe in promoting from within based on transparent performance metrics, mentorship readiness, and commitment to client outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {careerLadder.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-accent block mb-2">
                      STAGE {step.step}
                    </span>
                    <div className="font-display text-lg font-bold text-white mb-2">
                      {step.role}
                    </div>
                  </div>
                  <p className="text-xs text-silver/80 pt-3 border-t border-white/10">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Positions Section */}
      <section className="py-20 sm:py-28 bg-white border-t border-border/80" id="open-positions">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <span>Immediate Openings ({openPositions.length})</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight">
                Current Opportunities
              </h2>
              <p className="text-sm sm:text-base text-content-secondary mt-1">
                Explore our active openings based on our latest verified job specifications.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedDept === dept
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-background hover:bg-surface text-content-secondary border border-border'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Postings Cards List */}
          <div className="space-y-6">
            {filteredPositions.map((job) => (
              <div
                key={job.id}
                className="bg-background rounded-3xl p-7 sm:p-9 border border-border/80 shadow-xs hover:shadow-card hover:border-primary/40 transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 group"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium text-content-secondary bg-white px-2.5 py-0.5 rounded-md border border-border">
                      {job.workMode}
                    </span>
                    <span className="text-xs font-medium text-content-secondary bg-white px-2.5 py-0.5 rounded-md border border-border">
                      {job.employmentType}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors">
                    <Link href={`/careers/${job.slug}`}>
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-2">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-content-secondary pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-accent" />
                      {job.experience}
                    </span>
                    <span className="font-bold text-primary-dark bg-purple-tint/50 px-2 py-0.5 rounded border border-primary/20">
                      {job.salaryRange}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-subtle hover:shadow-card transition-all active:scale-[0.98]"
                  >
                    <span>View Role &amp; Apply</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

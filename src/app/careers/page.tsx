import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { careersData } from '@/content/careers-data';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

export const metadata: Metadata = {
  title: 'Careers at Neuro Recode: Join Our Mission',
  description:
    'Explore open positions at Neuro Recode Private Limited. We are hiring empathetic facilitators, client success coordinators, and science communicators.',
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  const openPositions = careersData.filter((job) => job.status === 'open');

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Help professionals get their lives back.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            We are building the benchmark mental wellness protocol for South India and beyond.
            Join a culture of deep empathy, scientific rigor, and purposeful work.
          </p>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-background">
              <h3 className="font-bold text-primary-dark text-base mb-1">Dignity First</h3>
              <p className="text-xs sm:text-sm text-content-secondary">
                We treat every team member and client with profound respect and psychological safety.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background">
              <h3 className="font-bold text-primary-dark text-base mb-1">Tanglish Fluency</h3>
              <p className="text-xs sm:text-sm text-content-secondary">
                We bridge high science with natural conversational connection without stuffy jargon.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background">
              <h3 className="font-bold text-primary-dark text-base mb-1">Remote &amp; Flexible</h3>
              <p className="text-xs sm:text-sm text-content-secondary">
                Output and empathy matter infinitely more than physical desk attendance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-primary-dark mb-2">
              Open Opportunities ({openPositions.length})
            </h2>
            <p className="text-sm text-content-secondary">
              Review our current open roles. All positions support remote working from India.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-border shadow-sm hover:shadow-card transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                      {job.department}
                    </span>
                    <span className="text-xs text-content-muted">• {job.employmentType}</span>
                    <span className="text-xs text-content-muted">• {job.workMode}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
                    <Link href={`/careers/${job.slug}`} className="hover:text-primary transition-colors">
                      {job.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary line-clamp-2 max-w-2xl leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-content-muted pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.experience}
                    </span>
                    {job.salaryRange && (
                      <span className="font-semibold text-primary">
                        {job.salaryRange}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-accent text-sm font-semibold hover:bg-primary-hover shadow-subtle transition-colors"
                  >
                    <span>View Role &amp; Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeTrainingBanner />
    </div>
  );
}

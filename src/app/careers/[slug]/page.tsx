import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { careersData } from '@/content/careers-data';
import { JobApplicationForm } from '@/components/forms/job-application-form';
import { JobPostingJsonLd } from '@/components/seo/json-ld';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  CheckCircle2,
  Laptop,
  Award,
  TrendingUp,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return careersData.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = careersData.find((j) => j.slug === slug);
  if (!job) return { title: 'Position Not Found' };

  return {
    title: `${job.title} — Careers at Neuro Recode`,
    description: job.summary,
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} · Careers at Neuro Recode`,
      description: job.summary,
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = careersData.find((j) => j.slug === slug);

  if (!job || job.status !== 'open') {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <JobPostingJsonLd
        title={job.title}
        description={job.summary}
        datePosted="2026-01-01"
        employmentType={job.employmentType}
        hiringOrganization={siteConfig.company.legalName}
        jobLocation={job.location}
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-background via-purple-tint/15 to-background border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all open positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full bg-primary/10 text-primary">
              {job.department}
            </span>
            <span className="text-xs font-semibold text-content-secondary bg-white px-3 py-1 rounded-full border border-border">
              {job.workMode}
            </span>
            <span className="text-xs font-semibold text-content-secondary bg-white px-3 py-1 rounded-full border border-border">
              {job.employmentType}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            {job.title}
          </h1>

          <p className="text-base sm:text-lg text-content-secondary max-w-3xl leading-relaxed mb-6 font-normal">
            {job.summary}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-content-secondary pt-2 border-t border-border/60">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-accent" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Briefcase className="w-4 h-4 text-accent" />
              {job.experience}
            </span>
            <span className="font-bold text-primary-dark bg-purple-tint/60 px-2.5 py-1 rounded border border-primary/20">
              {job.salaryRange}
            </span>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout: Job Details & Application Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Job Description Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Quick Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-background border border-border/80 text-xs">
                <div>
                  <span className="text-content-secondary block mb-0.5">Schedule:</span>
                  <span className="font-semibold text-primary-dark">{job.workingHours}</span>
                </div>
                <div>
                  <span className="text-content-secondary block mb-0.5">Weekly Off:</span>
                  <span className="font-semibold text-primary-dark">{job.weeklyOff}</span>
                </div>
                <div>
                  <span className="text-content-secondary block mb-0.5">Language:</span>
                  <span className="font-semibold text-primary-dark">{job.languageRequirement}</span>
                </div>
                <div>
                  <span className="text-content-secondary block mb-0.5">Equipment:</span>
                  <span className="font-semibold text-primary-dark">{job.equipmentRequirement}</span>
                </div>
              </div>

              {/* KPIs (if present) */}
              {job.kpis && job.kpis.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span>Target Performance Indicators</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {job.kpis.map((kpi, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-content-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span className="font-medium text-primary-dark">{kpi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Responsibilities */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-content-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Skills */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                  What We Are Looking For
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-content-secondary leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred Qualifications (if present) */}
              {job.preferredQualifications && job.preferredQualifications.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-dark mb-3">
                    Bonus / Preferred Attributes
                  </h3>
                  <ul className="space-y-2.5">
                    {job.preferredQualifications.map((pref, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-content-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                        <span>{pref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Career Growth Path (if present) */}
              {job.careerPath && job.careerPath.length > 0 && (
                <div className="p-6 rounded-2xl bg-purple-tint/30 border border-primary/20">
                  <h3 className="font-display text-lg font-bold text-primary-dark mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span>Career Advancement Progression</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    {job.careerPath.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3 py-1.5 rounded-lg bg-white border border-border text-primary-dark">
                          {step}
                        </span>
                        {idx < job.careerPath!.length - 1 && (
                          <span className="text-primary font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits & Perks */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                  Benefits &amp; What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-background border border-border/80 text-xs sm:text-sm text-content-secondary">
                      <span className="font-medium text-primary-dark">✓ {b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Process */}
              <div>
                <h3 className="font-display text-xl font-bold text-primary-dark mb-4">
                  Selection &amp; Evaluation Process
                </h3>
                <div className="space-y-2.5">
                  {job.selectionProcess.map((step, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-surface border border-border text-xs sm:text-sm text-primary-dark font-medium flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Application Form Sticky Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <JobApplicationForm
                jobId={job.id}
                jobTitle={job.title}
                roleType={job.roleType}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

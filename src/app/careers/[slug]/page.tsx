import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { careersData } from '@/content/careers-data';
import { JobApplicationForm } from '@/components/forms/job-application-form';
import { JobPostingJsonLd } from '@/components/seo/json-ld';
import { ArrowLeft, MapPin, Briefcase, Clock, Calendar, CheckCircle2, Laptop } from 'lucide-react';
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
    title: `${job.title} — Careers`,
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
    <div className="bg-background">
      <JobPostingJsonLd
        title={job.title}
        description={job.summary}
        datePosted="2026-01-01"
        employmentType={job.employmentType}
        hiringOrganization={siteConfig.company.legalName}
        jobLocation={job.location}
      />

      {/* Header */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-semibold text-content-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all open positions</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
              {job.department}
            </span>
            <span className="text-xs text-content-muted font-medium">• {job.employmentType}</span>
            <span className="text-xs text-content-muted font-medium">• {job.workMode}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-content-secondary pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-primary" />
              {job.experience}
            </span>
            {job.salaryRange && (
              <span className="font-semibold text-primary">
                Compensation: {job.salaryRange}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Two Column Layout: Details on Left, Application Form on Right */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Job Specifications */}
            <div className="lg:col-span-7 space-y-10">
              {/* Summary */}
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-3">
                  About the Role
                </h2>
                <p className="text-base text-content-secondary leading-relaxed">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="font-display text-xl font-bold text-primary-dark mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3 text-sm text-content-secondary">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="font-display text-xl font-bold text-primary-dark mb-4">
                  Candidate Requirements
                </h3>
                <ul className="space-y-3 text-sm text-content-secondary">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-muted flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Schedule & Hardware */}
              <div className="p-6 rounded-2xl bg-background border border-border space-y-3 text-xs sm:text-sm text-content-secondary">
                <h4 className="font-bold text-primary-dark text-base mb-1">
                  Logistics &amp; Hardware Requirements
                </h4>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span><strong>Working Hours:</strong> {job.workingHours} (Weekly off: {job.weeklyOff})</span>
                </p>
                <p className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-primary" />
                  <span><strong>Equipment:</strong> {job.equipmentRequirement}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span><strong>Application Deadline:</strong> {job.applicationDeadline}</span>
                </p>
              </div>
            </div>

            {/* Right: Application Form (Sticky on desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

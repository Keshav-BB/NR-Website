'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JobApplicationSchema, type JobApplication } from '@/lib/validation/schemas';
import { trackEvent } from '@/lib/analytics/events';
import { Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobApplication>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      jobId,
      jobTitle,
      consent: true,
      honeypot: '',
    },
  });

  const onSubmit = async (data: JobApplication) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      trackEvent('job_apply_click', { job_id: jobId, job_title: jobTitle });

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      if (!res.ok || !responseData.success) {
        throw new Error(responseData.message || 'Failed to submit application.');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error submitting application';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-white border border-green-200 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-primary-dark">Application Received</h3>
        <p className="text-sm text-content-secondary max-w-md mx-auto">
          Thank you for your interest in joining Neuro Recode. Our recruitment team will review your
          credentials and reach out within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm"
      noValidate
    >
      <input type="hidden" {...register('jobId')} />
      <input type="hidden" {...register('jobTitle')} />

      {/* Spam trap */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      <div>
        <h3 className="font-bold text-primary-dark text-lg mb-1">Apply for this Role</h3>
        <p className="text-xs text-content-secondary">
          Submitting for: <strong className="text-primary">{jobTitle}</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Your name"
            {...register('fullName')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="10-digit phone number"
            {...register('mobile')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Current City <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Chennai, Remote"
            {...register('city')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="currentRole" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Current / Latest Title <span className="text-red-500">*</span>
          </label>
          <input
            id="currentRole"
            type="text"
            placeholder="e.g. Wellness Trainer, Coach"
            {...register('currentRole')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.currentRole && <p className="text-xs text-red-600 mt-1">{errors.currentRole.message}</p>}
        </div>

        <div>
          <label htmlFor="experienceYears" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Total Experience <span className="text-red-500">*</span>
          </label>
          <select
            id="experienceYears"
            {...register('experienceYears')}
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select experience...</option>
            <option value="1 - 2 years">1 - 2 years</option>
            <option value="3 - 5 years">3 - 5 years</option>
            <option value="6 - 10 years">6 - 10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
          {errors.experienceYears && <p className="text-xs text-red-600 mt-1">{errors.experienceYears.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="linkedinUrl" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
          LinkedIn Profile URL (Optional)
        </label>
        <input
          id="linkedinUrl"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          {...register('linkedinUrl')}
          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.linkedinUrl && <p className="text-xs text-red-600 mt-1">{errors.linkedinUrl.message}</p>}
      </div>

      <div>
        <label htmlFor="resumeLink" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
          Resume Link (Google Drive / Dropbox link)
        </label>
        <input
          id="resumeLink"
          type="url"
          placeholder="https://drive.google.com/..."
          {...register('resumeLink')}
          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.resumeLink && <p className="text-xs text-red-600 mt-1">{errors.resumeLink.message}</p>}
      </div>

      <div>
        <label htmlFor="coverNote" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
          Why are you interested in joining Neuro Recode? (Optional)
        </label>
        <textarea
          id="coverNote"
          rows={3}
          placeholder="Tell us about your background with coaching, Tanglish fluency, or client care..."
          {...register('coverNote')}
          className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            {...register('consent')}
            className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-xs text-content-secondary">
            I consent to Neuro Recode processing my profile for recruitment purposes.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary text-accent font-semibold text-sm hover:bg-primary-hover shadow-subtle transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Application</span>
          </>
        )}
      </button>
    </form>
  );
}

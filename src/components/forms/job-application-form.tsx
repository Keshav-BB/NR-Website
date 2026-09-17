'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JobApplicationSchema, type JobApplication } from '@/lib/validation/schemas';
import { trackEvent } from '@/lib/analytics/events';
import { Send, Loader2, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  roleType?: 'sales' | 'content' | 'performance-marketing' | 'general';
}

export function JobApplicationForm({ jobId, jobTitle, roleType = 'general' }: JobApplicationFormProps) {
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
      hasLaptop: 'yes',
      hasStableInternet: 'yes',
      isFluentTamil: 'yes',
      hasMetaAdsExperience: 'yes',
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
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200 text-center space-y-4 shadow-elevated">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-display text-primary-dark">Application Received</h3>
        <p className="text-sm sm:text-base text-content-secondary max-w-md mx-auto leading-relaxed">
          Application received. Thank you for your interest in Neuro Recode. Our team will review your profile and contact shortlisted candidates.
        </p>
        <div className="pt-2 text-xs text-content-secondary/80">
          Submissions are strictly confidential and handled in accordance with privacy safeguards.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 sm:p-9 rounded-3xl border border-border/90 shadow-card"
      noValidate
    >
      <input type="hidden" {...register('jobId')} />
      <input type="hidden" {...register('jobTitle')} />

      {/* Honeypot spam trap */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
          Apply Online
        </span>
        <h3 className="font-display text-2xl font-bold text-primary-dark">
          Join Neuro Recode
        </h3>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Role: <strong className="text-primary font-semibold">{jobTitle}</strong>
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      {/* 1. Basic Details */}
      <div className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/70 pb-1">
          01. Candidate Details
        </div>

        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Priyadarshini Sundaram"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@domain.com"
              {...register('email')}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-border'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              id="mobile"
              type="tel"
              placeholder="10-digit number"
              {...register('mobile')}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.mobile ? 'border-red-400 bg-red-50/20' : 'border-border'
              }`}
            />
            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Current Location (City) <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="e.g. Chennai, Bangalore"
              {...register('city')}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.city ? 'border-red-400 bg-red-50/20' : 'border-border'
              }`}
            />
            {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>}
          </div>

          <div>
            <label htmlFor="preferredWorkMode" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Preferred Work Mode
            </label>
            <select
              id="preferredWorkMode"
              {...register('preferredWorkMode')}
              className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Hybrid (Chennai)">Hybrid (Chennai On-site + Remote)</option>
              <option value="Remote">Remote</option>
              <option value="Open to relocate to Chennai">Open to relocate to Chennai</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Professional Background */}
      <div className="space-y-4 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/70 pb-1">
          02. Professional Experience
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="currentRole" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Current / Most Recent Role <span className="text-red-500">*</span>
            </label>
            <input
              id="currentRole"
              type="text"
              placeholder="e.g. Inside Sales Specialist / Fresher"
              {...register('currentRole')}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.currentRole ? 'border-red-400 bg-red-50/20' : 'border-border'
              }`}
            />
            {errors.currentRole && <p className="text-xs text-red-600 mt-1">{errors.currentRole.message}</p>}
          </div>

          <div>
            <label htmlFor="experienceYears" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Total Years of Experience <span className="text-red-500">*</span>
            </label>
            <select
              id="experienceYears"
              {...register('experienceYears')}
              className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="0-1 years (Fresher / Trainee)">0-1 years (Fresher / Trainee)</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-7 years">5-7 years</option>
              <option value="7+ years">7+ years</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="noticePeriod" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Notice Period / Earliest Joining Date
            </label>
            <input
              id="noticePeriod"
              type="text"
              placeholder="e.g. Immediate, 15 Days, 1 Month"
              {...register('noticePeriod')}
              className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="expectedSalary" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
              Expected Compensation / CTC
            </label>
            <input
              id="expectedSalary"
              type="text"
              placeholder="e.g. ₹3.5 LPA / Fixed + Incentive"
              {...register('expectedSalary')}
              className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* 3. Role-Specific Questions */}
      <div className="space-y-4 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/70 pb-1">
          03. Role-Specific Readiness
        </div>

        {/* Sales Specific */}
        {roleType === 'sales' && (
          <div className="p-4 rounded-2xl bg-purple-tint/30 border border-primary/20 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-primary-dark mb-1">
                  Laptop Available? <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('hasLaptop')}
                  className="w-full px-3 py-2 rounded-lg border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
                >
                  <option value="yes">Yes, personal laptop ready</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-dark mb-1">
                  Stable Internet (50Mbps+)? <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('hasStableInternet')}
                  className="w-full px-3 py-2 rounded-lg border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
                >
                  <option value="yes">Yes, high-speed fiber</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-dark mb-1">
                  Fluent in Tamil? <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('isFluentTamil')}
                  className="w-full px-3 py-2 rounded-lg border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
                >
                  <option value="yes">Yes, fluent spoken Tamil</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="preferredInterviewSlot" className="block text-xs font-bold text-primary-dark mb-1">
                Preferred Google Meet Interview Slot (Date &amp; Time)
              </label>
              <input
                id="preferredInterviewSlot"
                type="text"
                placeholder="e.g. Tomorrow between 2 PM and 5 PM"
                {...register('preferredInterviewSlot')}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        )}

        {/* Content Specific */}
        {roleType === 'content' && (
          <div className="p-4 rounded-2xl bg-purple-tint/30 border border-primary/20 space-y-4">
            <div>
              <label htmlFor="portfolioUrl" className="block text-xs font-bold text-primary-dark mb-1">
                Portfolio / Video Script Samples URL <span className="text-red-500">*</span>
              </label>
              <input
                id="portfolioUrl"
                type="url"
                placeholder="https://drive.google.com/... or portfolio link"
                {...register('portfolioUrl')}
                className="w-full px-4 py-2.5 rounded-xl border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
              />
              <p className="text-[11px] text-content-secondary mt-1">
                Please include links to short-form video scripts (Reels/YouTube) or copywriting samples.
              </p>
            </div>
          </div>
        )}

        {/* Performance Marketing Specific */}
        {roleType === 'performance-marketing' && (
          <div className="p-4 rounded-2xl bg-purple-tint/30 border border-primary/20 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-primary-dark mb-1">
                  Meta Ads Training Completed? <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('hasMetaAdsExperience')}
                  className="w-full px-3 py-2 rounded-lg border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
                >
                  <option value="yes">Yes, trained / certified</option>
                  <option value="no">Self-taught / in progress</option>
                </select>
              </div>

              <div>
                <label htmlFor="certifications" className="block text-xs font-bold text-primary-dark mb-1">
                  Institute / Certification Details
                </label>
                <input
                  id="certifications"
                  type="text"
                  placeholder="e.g. Digital Marketing Course / Meta Certified"
                  {...register('certifications')}
                  className="w-full px-3 py-2 rounded-lg border border-border text-xs bg-white focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Resume & Links */}
      <div className="space-y-4 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/70 pb-1">
          04. Resume &amp; Profile Links
        </div>

        <div>
          <label htmlFor="resumeLink" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Resume Link (Google Drive / Dropbox) <span className="text-red-500">*</span>
          </label>
          <input
            id="resumeLink"
            type="url"
            placeholder="https://drive.google.com/file/d/..."
            {...register('resumeLink')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.resumeLink ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          <p className="text-[11px] text-content-secondary mt-1">
            Please ensure link sharing permissions are set to “Anyone with the link can view”.
          </p>
          {errors.resumeLink && <p className="text-xs text-red-600 mt-1">{errors.resumeLink.message}</p>}
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
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="whyJoin" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Why do you want to join Neuro Recode? (Optional)
          </label>
          <textarea
            id="whyJoin"
            rows={3}
            placeholder="Tell us briefly what resonates with you about our mission..."
            {...register('whyJoin')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-y"
          />
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-xs text-content-secondary leading-relaxed">
            I confirm that all supplied information is accurate and consent to Neuro Recode processing my application for recruitment purposes in strict confidence. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-hover transition-all duration-200 shadow-card flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-accent" />
            <span>Submitting Application...</span>
          </>
        ) : (
          <>
            <span>Submit Application</span>
            <Send className="w-4 h-4 text-accent" />
          </>
        )}
      </button>
    </form>
  );
}

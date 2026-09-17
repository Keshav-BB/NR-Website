'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { LeadSubmissionSchema, type LeadSubmission } from '@/lib/validation/schemas';
import { getStoredAttribution } from '@/lib/analytics/attribution';
import { trackEvent } from '@/lib/analytics/events';
import { Send, Loader2, AlertCircle, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';

export function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadSubmission>({
    resolver: zodResolver(LeadSubmissionSchema),
    defaultValues: {
      preferredLanguage: 'Tanglish (Tamil + English)',
      enquiryType: 'Consultation (RCA Booking)',
      patternArea: 'Anxiety & Nervous Tension',
      sessionMode: 'Private Online Video Call',
      preferredSlot: 'Evening (6:00 PM – 8:00 PM)',
      consent: true,
      honeypot: '',
    },
  });

  const onSubmit = async (data: LeadSubmission) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const attribution = getStoredAttribution();
      const payload: LeadSubmission = {
        ...data,
        ...attribution,
        landingPage: typeof window !== 'undefined' ? window.location.pathname : '/',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
      };

      trackEvent('contact_submitted', {
        enquiry_type: data.enquiryType,
        language: data.preferredLanguage,
        pattern_area: data.patternArea,
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();

      if (!res.ok || !responseData.success) {
        throw new Error(responseData.message || 'Submission failed. Please try again.');
      }

      setSubmitted(true);
      setTimeout(() => {
        router.push('/thank-you');
      }, 1200);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred. Please contact us directly via email or WhatsApp.';
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
        <h3 className="text-2xl font-bold font-display text-primary-dark">Consultation Request Received</h3>
        <p className="text-sm sm:text-base text-content-secondary max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Our client care desk will review your pattern details and contact you via WhatsApp / phone to confirm your private 1-on-1 slot.
        </p>
        <div className="pt-2 text-xs text-content-secondary/80">
          Redirecting to confirmation details...
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-border/90 shadow-card"
      noValidate
    >
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent-muted text-xs font-bold uppercase tracking-wider mb-2">
          <span>Confidential Discovery</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark">
          Book Your 1-on-1 Consultation
        </h2>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Explore the subconscious roots of your patterns in a private, 45–60 minute guided session.
        </p>
      </div>

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

      {/* 1. Candidate Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. S. Ramakrishnan"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            City / Location <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Chennai, Bangalore, Hyderabad"
            {...register('city')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.city ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>}
        </div>
      </div>

      {/* 2. Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Mobile Number (WhatsApp) <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            {...register('mobile')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.mobile ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@company.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* 3. Reason for Reaching Out / Primary Pattern */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="patternArea" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Primary Pattern to Explore <span className="text-red-500">*</span>
          </label>
          <select
            id="patternArea"
            {...register('patternArea')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Anxiety & Nervous Tension">Anxiety &amp; Nervous Tension</option>
            <option value="Fear & Phobias">Fear &amp; Phobias (Stage/Public)</option>
            <option value="Nocturnal Overthinking & Sleep">Nocturnal Overthinking &amp; Sleep</option>
            <option value="Self-Doubt & Imposter Syndrome">Self-Doubt &amp; Imposter Syndrome</option>
            <option value="Visceral Emotional Triggers">Visceral Emotional Triggers</option>
            <option value="Recurring Life / Work Patterns">Recurring Life / Work Patterns</option>
            <option value="General Program Inquiry">General Program Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredLanguage" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Preferred Language <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredLanguage"
            {...register('preferredLanguage')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Tanglish (Tamil + English)">Tanglish (Tamil + English)</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
          </select>
        </div>
      </div>

      {/* 4. Slot Preference & Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredSlot" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Preferred Time Window
          </label>
          <select
            id="preferredSlot"
            {...register('preferredSlot')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Evening (6:00 PM – 8:00 PM)">Evening (6:00 PM – 8:00 PM)</option>
            <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
            <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
            <option value="Weekend Slot Preference">Weekend Slot Preference</option>
          </select>
        </div>

        <div>
          <label htmlFor="sessionMode" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
            Session Format
          </label>
          <select
            id="sessionMode"
            {...register('sessionMode')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Private Online Video Call">Private Online Video Call (Google Meet)</option>
            <option value="Chennai In-Person Hybrid">Chennai In-Person / Hybrid</option>
          </select>
        </div>
      </div>

      {/* 5. Message or Context */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1">
          Brief Context / Notes (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Briefly describe what you would like to shift or any questions you have..."
          {...register('message')}
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-y"
        />
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-xs text-content-secondary leading-relaxed">
            I understand that Neuro Recode is an experiential personal-development and mental-wellness framework and does not constitute psychiatric diagnosis, medical treatment, or crisis intervention. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>}
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-hover transition-all duration-200 shadow-card flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-accent" />
            <span>Reserving Consultation Slot...</span>
          </>
        ) : (
          <>
            <span>Confirm Consultation Request</span>
            <Send className="w-4 h-4 text-accent" />
          </>
        )}
      </button>

      {/* Trust Badges Row */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-content-secondary">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-accent" />
          <span>100% Confidential &amp; Non-Judgmental</span>
        </span>
        <span>•</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-accent" />
          <span>Nominal ₹{siteConfig.feesAndPolicies.consultationBookingFee} reservation fee applies upon slot confirmation</span>
        </span>
      </div>
    </form>
  );
}

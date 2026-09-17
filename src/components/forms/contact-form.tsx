'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { LeadSubmissionSchema, type LeadSubmission } from '@/lib/validation/schemas';
import { getStoredAttribution } from '@/lib/analytics/attribution';
import { trackEvent } from '@/lib/analytics/events';
import { Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
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
      <div className="p-8 rounded-2xl bg-white border border-green-200 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-primary-dark">Inquiry Submitted Successfully</h3>
        <p className="text-sm text-content-secondary max-w-md mx-auto">
          Thank you for reaching out to Neuro Recode. Our team has received your details and will
          connect with you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm"
      noValidate
    >
      {/* Spam Honeypot Field (Hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_contact">Leave blank</label>
        <input id="hp_contact" type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      {/* Full Name & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Anand Sundaram"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
            City / Location <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Chennai, Bangalore, Hyderabad"
            {...register('city')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.city ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.city && (
            <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Mobile Number & WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            {...register('mobile')}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.mobile ? 'border-red-400 bg-red-50/20' : 'border-border'
            }`}
          />
          {errors.mobile && (
            <p className="text-xs text-red-600 mt-1">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
            WhatsApp Number (if different)
          </label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="WhatsApp number"
            {...register('whatsapp')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="your.name@company.com"
          {...register('email')}
          className={`w-full px-4 py-3 rounded-xl border text-sm text-content-primary bg-background transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-400 bg-red-50/20' : 'border-border'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Language & Enquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredLanguage" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
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

        <div>
          <label htmlFor="enquiryType" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
            Enquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiryType"
            {...register('enquiryType')}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Program Enquiry">Program Enquiry</option>
            <option value="Consultation (RCA Booking)">Consultation (RCA Booking)</option>
            <option value="General Support">General Support</option>
            <option value="Billing / Refund Question">Billing / Refund Question</option>
            <option value="Careers / Recruitment">Careers / Recruitment</option>
          </select>
        </div>
      </div>

      {/* Message / Context */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-content-secondary mb-1.5">
          How can our team help you? (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly share what you are experiencing or any specific questions..."
          {...register('message')}
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-content-primary bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
        />
      </div>

      {/* Consent Checkbox with Disclaimer Notice */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            {...register('consent')}
            className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-xs text-content-secondary leading-relaxed">
            I understand that Neuro Recode provides non-clinical educational and wellness mindset
            services, not medical or psychiatric diagnosis/treatment. If in active crisis, I will
            call Tele-MANAS (14416) or 112. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 mt-1 pl-7">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-primary text-accent font-semibold text-base hover:bg-primary-hover shadow-subtle hover:shadow-card transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Inquiry securely...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-content-muted">
        Your information is securely encrypted and routed directly to our confidential intake desk.
      </p>
    </form>
  );
}

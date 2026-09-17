import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/cms/site-config';
import { ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions governing access to Neuro Recode websites, consultations, workshops, and coaching programs.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 block">
            Legal Terms of Service
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-content-muted">
            Last Updated: 16 September 2026 · Effective Immediately
          </p>
        </div>

        {/* Crisis Hotline Notice */}
        <div className="bg-white border-l-4 border-accent p-6 rounded-r-2xl mb-12 shadow-sm space-y-2">
          <p className="text-sm font-semibold text-primary-dark flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>Important Medical &amp; Emergency Notice</span>
          </p>
          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
            Please read these Terms carefully. Neuro Recode&apos;s standard services are non-clinical
            wellness, coaching, and educational services, and are <strong>not medical or psychiatric
            treatment</strong>. If you are experiencing a mental health emergency, please contact{' '}
            <strong>Emergency 112</strong> or <strong>Tele-MANAS {siteConfig.hotlines.teleManas}</strong>.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-10 text-sm sm:text-base text-content-secondary leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              1. About These Terms and Acceptance
            </h2>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of all
              websites, domains, and services operated by {siteConfig.company.legalName}, including
              neurorecode.in, learn.neurorecode.in, and all associated registration funnels.
            </p>
            <p>
              By browsing our websites or booking any service, you acknowledge and agree to these Terms,
              our <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>,
              our <Link href="/refund-policy" className="text-primary underline">Refund &amp; Cancellation Policy</Link>,
              and our <Link href="/disclaimer" className="text-primary underline">Non-Medical Disclaimer</Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              2. About Us
            </h2>
            <p>
              {siteConfig.company.legalName} is a private limited company incorporated in India under
              the Companies Act, 2013.
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm font-mono">
              <li>CIN: {siteConfig.company.cin}</li>
              <li>MSME: {siteConfig.company.udyam}</li>
              <li>Registered Office: {siteConfig.company.registeredOffice}</li>
              <li>Operational Base: {siteConfig.company.operationalBase}</li>
              <li>Email: {siteConfig.company.supportEmail}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              3. Nature of Our Services (Non-Clinical)
            </h2>
            <p>
              Neuro Recode&apos;s standard services are educational, personal development, and mindset
              coaching services utilizing neuroplasticity, NLP, and clinical hypnotherapy methods.
            </p>
            <p>
              Our services <strong>are not</strong> medical diagnosis, psychiatric therapy, clinical
              counselling, or pharmacological prescription services. Our facilitators act in an
              educational coaching role. If you are under psychiatric care or taking prescribed
              medication, you must continue that care and consult your doctor before making health
              decisions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              4. Eligibility
            </h2>
            <p>
              Our services are offered exclusively to individuals aged <strong>18 years and above</strong> who
              are working professionals or business owners. Services are not offered to college
              students or minors.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              5. Consultation Bookings &amp; Fees
            </h2>
            <p>
              Root Cause Analysis (RCA) consultation bookings are charged at a nominal fee of{' '}
              <strong>{siteConfig.feesAndPolicies.consultationBookingFee}</strong>. As detailed in our
              Refund Policy, this booking fee is non-refundable once confirmed, as it locks practitioner
              time. Rescheduling is permitted once with at least {siteConfig.feesAndPolicies.rescheduleWindowHours} hours
              advance notice.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              6. Intellectual Property &amp; Non-Redistribution
            </h2>
            <p>
              The <strong>3-Step Anxiety Re-Code Protocol™</strong>, along with all logos, worksheets,
              diagrams, video presentations, audio recordings, and written materials, are the exclusive
              intellectual property of {siteConfig.company.legalName}.
            </p>
            <p>
              You may not record, screenshot, download, share, redistribute, or teach our materials
              without our express prior written permission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              7. Limitation of Liability &amp; No Outcome Guarantees
            </h2>
            <p>
              Neuro Recode provides structured educational frameworks. Because mental wellbeing and
              neuroplastic change involve personal consistency, participation, and individual
              circumstances, we do not guarantee specific outcomes.
            </p>
            <p>
              To the maximum extent permitted by Indian law, our aggregate liability for any claim
              arising out of or relating to our services is limited to the amount paid by you for the
              specific service giving rise to the claim.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-dark">
              8. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be construed and governed by the laws of India. Any legal dispute
              arising hereunder shall be subject to the exclusive jurisdiction of the competent courts
              at {siteConfig.feesAndPolicies.governingCourt}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

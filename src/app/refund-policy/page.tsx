import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/cms/site-config';
import { ShieldCheck, Clock, Calendar, Mail, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description:
    'Clear, transparent refund and rescheduling terms for Neuro Recode consultations, workshops, and programs.',
  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
  const { consultationBookingFee, rescheduleWindowHours, paymentErrorWindowDays, governingCourt } =
    siteConfig.feesAndPolicies;

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 block">
            Legal &amp; Transparency
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-content-muted">
            Last Updated: 16 September 2026 · Effective Immediately
          </p>
        </div>

        {/* Highlight Fee Notice Box (Fixing the defect of missing values in old site) */}
        <div className="bg-[#FAF3E4] border-l-4 border-accent p-6 sm:p-8 rounded-r-2xl mb-12 shadow-sm space-y-2">
          <span className="inline-block text-[11px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded bg-primary text-accent">
            Consultation / Workshop Fee Notice
          </span>
          <h2 className="font-display text-xl font-bold text-primary-dark">
            The {consultationBookingFee} Consultation Booking Fee
          </h2>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            The nominal fee of <strong>{consultationBookingFee}</strong> is <strong>non-refundable</strong> once
            your booking is confirmed. This fee directly locks public calendar availability and commits
            a certified practitioner&apos;s dedicated 1-on-1 time to your session.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-10 text-sm sm:text-base text-content-secondary leading-relaxed">
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              1. Policy Overview
            </h2>
            <p>
              {siteConfig.company.legalName} (&ldquo;Neuro Recode&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) provides non-clinical wellness, coaching, educational, and mindset
              services, including private consultations, Root Cause Analysis (RCA) sessions,
              workshops, and multi-week structured programs.
            </p>
            <p>
              Because our services involve reserved practitioner time and proprietary intellectual
              property, the following terms govern all purchases made across neurorecode.in,
              learn.neurorecode.in, and associated registration funnels.
            </p>
          </section>

          {/* Section 2: Rescheduling */}
          <section className="space-y-4 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              2. Rescheduling Policy
            </h2>
            <p>
              We recognize that emergencies and schedule conflicts occur. To balance flexibility
              with practitioner calendar commitments:
            </p>
            <ul className="space-y-2.5 list-disc list-inside">
              <li>
                You may reschedule your consultation <strong>once</strong> without penalty if you
                submit your request at least <strong>{rescheduleWindowHours} hours</strong> before
                your scheduled appointment time.
              </li>
              <li>
                Rescheduling requests submitted less than {rescheduleWindowHours} hours before the
                session are <strong>not eligible</strong> for rescheduling or fee return, as the slot
                cannot be re-allocated.
              </li>
              <li>
                Missed appointments (no-shows) without prior notice are non-refundable and will be
                forfeited.
              </li>
            </ul>
          </section>

          {/* Section 3: Programs & Enrolment */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              3. Multi-Session Programs
            </h2>
            <p>
              Enrolment terms and specific refund windows for structured, higher-value coaching
              programs are shared in writing prior to payment and form an integral part of your
              enrolment agreement.
            </p>
            <p>
              Where instalment plans are offered, all instalments must be paid on or before their
              due date. Failure to complete an agreed instalment may pause your program access until
              the account is brought current.
            </p>
          </section>

          {/* Section 4: Payment Errors */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              4. Payment Errors and Duplicate Charges
            </h2>
            <p>
              If an error occurred during checkout resulting in a duplicate debit or incorrect charge,
              please notify our support team within <strong>{paymentErrorWindowDays} business days</strong> with
              your payment transaction ID.
            </p>
            <p>
              Verified duplicate charges will be refunded in full to the original payment method
              within 5–7 banking days via our payment gateway.
            </p>
          </section>

          {/* Section 5: Cancellation by Neuro Recode */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              5. Cancellations Initiated by Neuro Recode
            </h2>
            <p>
              If Neuro Recode must cancel a session due to unexpected practitioner illness,
              technical failure, or unforeseen circumstance, and cannot provide an alternative
              mutually agreed slot, you will receive a <strong>100% full refund</strong> of the fee paid
              for that session.
            </p>
          </section>

          {/* Section 6: Eligibility */}
          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              6. Eligibility Restrictions
            </h2>
            <p>
              Our services are specifically built for working adults aged 18 and above. Our services
              are not intended for or offered to college students. Bookings found to violate our
              stated eligibility criteria may be cancelled at our discretion.
            </p>
          </section>

          {/* Section 7: Jurisdiction & Contact */}
          <section className="space-y-4 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              7. Governing Law &amp; Support Contact
            </h2>
            <p>
              This policy is governed by the laws of India. Any legal dispute arising under this policy
              is subject to the exclusive jurisdiction of the competent courts in {governingCourt}.
            </p>
            <div className="p-5 rounded-2xl bg-background border border-border">
              <p className="font-bold text-primary-dark mb-1">Have a question or refund request?</p>
              <p className="text-xs sm:text-sm text-content-secondary mb-2">
                Contact our support desk with your booking reference or transaction receipt:
              </p>
              <a
                href={`mailto:${siteConfig.company.supportEmail}`}
                className="text-primary font-semibold underline text-sm"
              >
                {siteConfig.company.supportEmail}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/cms/site-config';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Neuro Recode collects, protects, processes, and safeguards personal and intake information under Indian data protection standards.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2 block">
            Data Protection &amp; Confidentiality
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-content-muted">
            Last Updated: 16 September 2026 · Digital Personal Data Protection (DPDP) Aligned
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-8 text-sm sm:text-base text-content-secondary leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              1. Our Privacy Commitment
            </h2>
            <p>
              {siteConfig.company.legalName} (&ldquo;Neuro Recode&rdquo;, &ldquo;we&rdquo;,
              &ldquo;our&rdquo;) treats your personal and wellness information with the highest degree
              of confidentiality. Because our services involve personal reflections, emotional
              history, and executive wellness, we maintain strict privacy protocols.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              2. Information We Collect
            </h2>
            <p>We collect only information necessary to deliver our services and process your enquiries:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Contact Information:</strong> Full name, phone/WhatsApp number, email address,
                and city.
              </li>
              <li>
                <strong>Inquiry &amp; Intake Details:</strong> Preferred language (Tanglish, English,
                Tamil), enquiry category, and optional notes shared during consultation booking.
              </li>
              <li>
                <strong>Technical &amp; Attribution Data:</strong> IP address, browser type, referral
                source, and UTM campaign parameters used to evaluate marketing channel efficacy.
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              3. How We Use Your Data
            </h2>
            <p>We use your information exclusively for legitimate service delivery purposes:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Scheduling, confirming, and conducting 1-on-1 consultations and workshops</li>
              <li>Communicating session reminders, zoom links, and program logistics via WhatsApp or email</li>
              <li>Securely logging intake notes in our restricted backend CRM system (Frappe CRM)</li>
              <li>Processing consultation payments securely through certified payment gateways (e.g. Razorpay)</li>
            </ul>
            <p>
              <strong>We never sell, rent, or trade your personal information to third parties or marketing brokers.</strong>
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              4. Session Recording &amp; Consent
            </h2>
            <p>
              Neuro Recode protocol sessions may be recorded for clinical supervision and quality
              assurance strictly with your explicit, affirmative consent prior to the call. Recordings
              are encrypted and stored in private access-controlled storage. They are never published
              or shared publicly without separate written consent.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              5. Your Rights &amp; Data Contact
            </h2>
            <p>
              You have the right to request access to your stored personal information, request
              corrections, or request permanent deletion of your intake records.
            </p>
            <p>
              To exercise your privacy rights, email our Data Grievance Officer at{' '}
              <a
                href={`mailto:${siteConfig.company.supportEmail}?subject=Privacy%20Request`}
                className="text-primary font-semibold underline"
              >
                {siteConfig.company.supportEmail}
              </a>{' '}
              with the subject line &ldquo;Privacy Request&rdquo;.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

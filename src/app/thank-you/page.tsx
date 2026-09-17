import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Video, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';

export const metadata: Metadata = {
  title: 'Thank You · Inquiry Received',
  description: 'Thank you for connecting with Neuro Recode. We have received your inquiry.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-background py-20 sm:py-28 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs uppercase font-semibold tracking-widest text-accent mb-2 block">
            Submission Confirmed
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-4">
            Thank you for reaching out.
          </h1>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-lg mx-auto">
            Your details have been securely recorded. Our confidential intake team will review your
            inquiry and contact you via WhatsApp or phone within one business day.
          </p>
        </div>

        {/* Recommended Next Step: Free Training */}
        <div className="p-8 rounded-3xl bg-white border border-border shadow-card text-left space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-primary-dark text-base sm:text-lg">
                While you wait: Watch the Free Training
              </h3>
              <p className="text-xs text-content-muted">60-minute masterclass in Tanglish</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
            Learn exactly how your autonomic nervous system operates under stress and why conventional
            coping tools fail to stop anxiety at the root.
          </p>

          <a
            href={siteConfig.navigation.primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-accent text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            <span>Access the Free Training Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-secondary hover:text-primary transition-colors"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

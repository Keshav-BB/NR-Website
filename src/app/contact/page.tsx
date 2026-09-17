import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { siteConfig } from '@/lib/cms/site-config';
import { Mail, MessageCircle, Phone, MapPin, ShieldAlert, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Consultation — Neuro Recode',
  description:
    'Schedule a confidential 1-on-1 Root Cause Analysis (RCA) consultation with our practitioner team to map your subconscious emotional and behavioural patterns.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-background via-purple-tint/15 to-background border-b border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            1-on-1 Pattern Mapping
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Take the first step toward understanding your patterns.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Schedule a private, 1-on-1 Root Cause Analysis (RCA) consultation to deconstruct your emotional and behavioral patterns with an experienced practitioner.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Channels & Support Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-2">
                  Direct Communication Channels
                </h2>
                <p className="text-sm text-content-secondary">
                  Choose the channel most convenient for you.
                </p>
              </div>

              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border hover:border-green-400 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-base group-hover:text-primary transition-colors">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-content-secondary mb-1">
                    Direct confidential messaging with our admissions desk.
                  </p>
                  <span className="text-xs font-semibold text-green-700 underline">
                    Start WhatsApp Chat →
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.company.supportEmail}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-base group-hover:text-primary transition-colors">
                    Email Support
                  </h3>
                  <p className="text-xs text-content-secondary mb-1">
                    For detailed enquiries, rescheduling, or billing questions.
                  </p>
                  <span className="text-xs font-semibold text-primary font-mono">
                    {siteConfig.company.supportEmail}
                  </span>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="p-5 rounded-2xl bg-surface-muted border border-primary/10 space-y-2 text-xs text-content-secondary">
                <div className="flex items-center gap-2 font-bold text-primary text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Intake Desk Operating Hours</span>
                </div>
                <p>Monday to Saturday: 10:00 AM – 7:00 PM IST</p>
                <p>Inquiries received outside business hours will be addressed the next morning.</p>
              </div>

              {/* Crisis Hotline Notice */}
              <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200 text-xs text-red-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-red-700 text-sm">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Immediate Mental Health Crisis Support</span>
                </div>
                <p className="leading-relaxed">
                  Neuro Recode does not provide clinical emergency or crisis services. If you or
                  someone you know is in active crisis or having thoughts of self-harm, please contact:
                </p>
                <ul className="list-disc list-inside space-y-1 font-semibold text-red-950">
                  <li>Tele-MANAS (Govt of India): {siteConfig.hotlines.teleManas}</li>
                  <li>National Emergency Helpline: {siteConfig.hotlines.emergency}</li>
                </ul>
              </div>
            </div>

            {/* Right: Dynamic Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

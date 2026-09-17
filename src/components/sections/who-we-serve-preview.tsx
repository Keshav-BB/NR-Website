import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const AUDIENCES = [
  'Founders & Business Owners',
  'Senior Managers & Directors',
  'Doctors & Healthcare Specialists',
  'Corporate Lawyers & Partners',
  'Finance & Investment Executives',
  'IT Engineers in High-Stakes Roles',
  'Working Parents Balancing Career',
  'Anyone who appears "fine" on the outside — but isn\'t',
];

export function WhoWeServePreview() {
  return (
    <section id="who" className="py-20 sm:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase font-semibold tracking-widest text-accent mb-3">
            Who This Is For
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            Working professionals carrying a load most people cannot see.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            You don&apos;t have a motivation problem. You have a nervous system that has been working
            overtime to keep you safe.
          </p>
        </div>

        {/* Audience Pill/Tag Grid */}
        <div className="flex flex-wrap gap-3 mb-10">
          {AUDIENCES.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-content-primary shadow-xs hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <div className="w-4 h-4 rounded-full bg-accent/20 text-accent-muted flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Suitability Guidance Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-border shadow-sm max-w-3xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-primary text-base mb-2">This may be suitable if:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You are a working professional aged 18+ experiencing anxiety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You seek a structured, root-cause protocol rather than endless coping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>You value Tanglish or English delivery for authentic emotional clarity</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-red-700 text-base mb-2">This is not suitable if:</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>You are a college student (services are reserved for working adults)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>You are seeking medical prescriptions or psychiatric diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>You are currently in an active acute psychiatric crisis (use 14416 / 112)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover underline underline-offset-4"
          >
            <span>See Detailed Professional Profiles &amp; Full Criteria</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

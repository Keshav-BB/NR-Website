'use client';

import React from 'react';
import { ShieldAlert, PhoneCall, CheckCircle, XCircle, Info } from 'lucide-react';

export function SafetyExpectations() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden" id="safety">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border/80 shadow-xs">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-tint text-primary flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                Ethical Practice &amp; Professional Boundaries
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark">
                Safety, Boundaries &amp; Expectations
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-8">
            At Neuro Recode, we believe trust begins with complete transparency about the scope and nature of our work. Please review these boundaries so you know exactly what to expect.
          </p>

          {/* Boundaries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* What Neuro Recode Is */}
            <div className="p-6 rounded-2xl bg-purple-tint/30 border border-primary/20">
              <div className="font-bold text-sm text-primary-dark mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>What We Provide</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Experiential repatterning for situational anxiety, self-doubt, and stress triggers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Autonomic nervous system self-regulation coaching and somatic awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personal development frameworks to cultivate internal emotional flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Strictly confidential 1-on-1 private consultations</span>
                </li>
              </ul>
            </div>

            {/* What Neuro Recode Is Not */}
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200">
              <div className="font-bold text-sm text-red-950 mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>What We Do Not Provide</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>We do not provide clinical psychiatry, medical care, or diagnosis of mental illness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>We do not prescribe, adjust, or advise on psychiatric or medical medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>We do not treat active psychosis, severe clinical depression, or acute addiction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>We do not provide immediate emergency suicide or psychiatric crisis intervention</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Emergency Crisis Helpline Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-primary-dark">
                  Need Immediate Crisis or Medical Support?
                </div>
                <div className="text-xs text-content-secondary mt-0.5">
                  If you are experiencing acute distress or suicidal thoughts, please contact dedicated 24/7 helplines:
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs shrink-0">
              <a
                href="tel:14416"
                className="px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors"
              >
                Tele-MANAS: 14416
              </a>
              <a
                href="tel:112"
                className="px-3.5 py-1.5 rounded-lg bg-red-100 text-red-700 font-bold hover:bg-red-200 transition-colors"
              >
                National Emergency: 112
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

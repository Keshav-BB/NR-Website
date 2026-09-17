'use client';

import React from 'react';
import { Award, Shield, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import { teamData } from '@/content/team-data';

export function TeamTrust() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border/80 relative overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-4">
            Practitioners &amp; Philosophy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Meet the People Behind Neuro Recode
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Experienced practitioners dedicated to creating a grounded, confidential, and transformative experiential space.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-14">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-background rounded-3xl p-8 sm:p-10 border border-border/80 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border-2 border-accent/40">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary-dark">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-primary mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-xs text-content-secondary mt-1">
                      {member.specialization}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-content-secondary leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>

                {/* Philosophy Quote */}
                <div className="p-4 rounded-2xl bg-white border border-border/80 mb-6 italic text-xs sm:text-sm text-primary-dark/90 leading-relaxed font-serif">
                  “{member.philosophy}”
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="pt-4 border-t border-border/70">
                <div className="text-[11px] font-bold text-accent uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </div>
                <ul className="space-y-1.5">
                  {member.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Standards Badge */}
        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-surface border border-border text-xs text-content-secondary">
          <div className="flex items-center justify-center gap-2 font-semibold text-primary-dark mb-1 text-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span>Our Commitment to Client Dignity &amp; Confidentiality</span>
          </div>
          <p>
            All consultations and sessions adhere to strict non-disclosure, empathetic listening, and psychological safety standards. We respect your autonomy at every step.
          </p>
        </div>
      </div>
    </section>
  );
}

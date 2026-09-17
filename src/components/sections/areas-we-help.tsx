'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { areasData } from '@/content/areas-data';
import { siteConfig } from '@/lib/cms/site-config';

export function AreasWeHelp() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden" id="areas-we-help">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Patterns &amp; Themes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Patterns That Can Affect Everyday Life
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            These are not permanent personality flaws or clinical labels. They are learned internal survival patterns that your nervous system can be guided to update.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {areasData.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-border/80 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-tint text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Pattern
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary-dark mb-1 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <div className="text-xs font-medium text-accent-muted mb-3">
                    {area.subtitle}
                  </div>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6 font-normal">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-1">
                    How it commonly presents:
                  </div>
                  <p className="text-xs text-primary-dark/80 italic">
                    {area.manifestation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance Callout */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-xs">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm mb-2">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span>Not sure which pattern is primary for you?</span>
          </div>
          <p className="text-xs sm:text-sm text-content-secondary mb-5">
            During your initial consultation, we help you map how your unique emotional responses connect across different areas of life.
          </p>
          <Link
            href={siteConfig.navigation.primaryCtaUrl}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark group"
          >
            <span>Discuss your pattern in a consultation</span>
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

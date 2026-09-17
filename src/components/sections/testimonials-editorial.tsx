'use client';

import React, { useState } from 'react';
import { Quote, CheckCircle2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { storiesData } from '@/content/stories-data';
import { siteConfig } from '@/lib/cms/site-config';

export function TestimonialsEditorial() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const featuredStories = storiesData.slice(0, 4);
  const currentStory = featuredStories[selectedStoryIndex] || featuredStories[0];

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Client Experiences
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Real People. Real Experiences.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Working professionals sharing how experiential repatterning shifted their daily work, sleep, and relationships.
          </p>
        </div>

        {/* Featured Editorial Quote Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-border/80 shadow-card mb-12 relative overflow-hidden">
          <Quote className="absolute right-8 top-8 w-24 h-24 text-purple-tint/80 -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent-muted text-xs font-semibold uppercase tracking-wider mb-6">
                <span>{currentStory.category}</span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary-dark font-medium italic leading-snug mb-8">
                “{currentStory.quote}”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/70 mb-6">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                    The Recurring Pattern
                  </div>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {currentStory.pattern}
                  </p>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    The Shift &amp; New Baseline
                  </div>
                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {currentStory.newDefault}
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center font-display">
                  {currentStory.avatarInitial}
                </div>
                <div>
                  <div className="font-bold text-primary-dark">
                    {currentStory.name}
                  </div>
                  <div className="text-xs text-content-secondary flex items-center gap-2">
                    <span>{currentStory.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent" />
                      {currentStory.location}
                    </span>
                  </div>
                </div>

                <div className="ml-auto inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Shared with client consent</span>
                </div>
              </div>
            </div>

            {/* Story Picker Buttons (Desktop & Tablet) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1">
                Select An Experience
              </span>
              {featuredStories.map((story, idx) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setSelectedStoryIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    selectedStoryIndex === idx
                      ? 'bg-purple-tint/60 border-primary shadow-xs'
                      : 'bg-background hover:bg-surface border-border/70'
                  }`}
                >
                  <div className="font-bold text-sm text-primary-dark">
                    {story.name} — {story.role}
                  </div>
                  <div className="text-xs text-content-secondary line-clamp-1 mt-0.5">
                    {story.category} · {story.location}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Link to Full Stories Collection */}
        <div className="text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <span>Read all client transformation stories</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}

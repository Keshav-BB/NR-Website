'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { storiesData } from '@/content/stories-data';
import { CheckCircle2, Filter, Play, Quote, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';

const CATEGORIES = [
  'All',
  'Workplace Anxiety',
  'Presentations',
  'Leadership',
  'Sleep',
  'Founder Stress',
  'Social Anxiety',
] as const;

const videoPreviews = [
  {
    title: 'From Sunday Evening Dread to Composed Executive Leadership',
    speaker: 'Ravi — IT Engineering Manager, Chennai',
    duration: '3:45',
    thumbnailClass: 'from-primary-dark via-[#2D1445] to-primary-dark',
    quote: 'I stopped bracing for Monday morning reviews. The chest tightness simply stopped triggering.',
  },
  {
    title: 'Overcoming Stage Dread Before Board Meetings',
    speaker: 'Meena — Senior Product Director, Bangalore',
    duration: '4:15',
    thumbnailClass: 'from-[#1B0B2E] via-primary to-[#241033]',
    quote: 'I used to spend 48 hours recovering after presentations. Now I just present and move to lunch.',
  },
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredStories =
    selectedCategory === 'All'
      ? storiesData
      : storiesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-background via-purple-tint/15 to-background border-b border-border/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Authentic Transformations</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Stories of Change
          </h1>

          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Real experiences from working professionals across South India who explored their subconscious patterns and discovered lasting internal composure.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Documented with explicit affirmative client consent · No fabricated outcomes</span>
          </div>
        </div>
      </section>

      {/* 2. Video Experience Showcase */}
      <section className="py-16 sm:py-20 bg-white border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              Video Testimonials
            </span>
            <h2 className="font-display text-3xl font-bold text-primary-dark tracking-tight">
              In Their Own Words
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              Watch clients reflect on how shifting their internal nervous system response changed their daily work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoPreviews.map((video, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-10 bg-gradient-to-br ${video.thumbnailClass} text-white shadow-card relative overflow-hidden flex flex-col justify-between min-h-[280px] border border-white/10`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                      Client Story #{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-silver">{video.duration}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-accent-muted font-medium mb-4">
                    {video.speaker}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="italic text-xs sm:text-sm text-silver mb-4 font-serif">
                    “{video.quote}”
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-accent">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-xs">
                      <Play className="w-3.5 h-3.5 fill-primary-dark ml-0.5" />
                    </div>
                    <span>Video Case Study (Recorded with consent)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filter Bar */}
      <section className="py-6 bg-background border-b border-border/80 sticky top-16 z-30 shadow-xs backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-accent shrink-0 mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white text-content-secondary hover:text-primary hover:bg-surface border border-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stories Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-border/80 shadow-xs hover:shadow-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-border/60 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-primary text-white font-display font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                        {story.avatarInitial}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-dark text-base">{story.name}</h3>
                        <p className="text-xs text-content-secondary">
                          {story.role} · {story.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-tint text-primary border border-primary/20">
                      {story.category}
                    </span>
                  </div>

                  {/* Pull Quote */}
                  <div className="mb-5 italic text-sm text-primary-dark font-serif font-medium bg-purple-tint/30 p-3.5 rounded-xl border border-primary/10">
                    “{story.quote}”
                  </div>

                  {/* Narrative Steps */}
                  <div className="space-y-3.5 text-xs sm:text-sm text-content-secondary">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-red-600 mb-0.5">
                        The Conditioned Pattern
                      </p>
                      <p className="leading-relaxed">{story.pattern}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-accent-muted mb-0.5">
                        What Had Been Tried
                      </p>
                      <p className="leading-relaxed">{story.tried}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 mb-0.5">
                        The Recode &amp; New Baseline
                      </p>
                      <p className="leading-relaxed font-medium text-primary-dark">{story.newDefault}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 mt-6 text-[11px] text-emerald-700 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Client Transformation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Banner */}
      <section className="py-16 bg-white border-t border-border/80 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-primary-dark mb-3">
            Want to understand what is shaping your own responses?
          </h2>
          <p className="text-content-secondary text-sm sm:text-base mb-8">
            Book a confidential 1-on-1 Root Cause Analysis consultation with our practitioner team.
          </p>
          <Link
            href="/contact?type=consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-hover transition-colors shadow-card"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>
      </section>
    </div>
  );
}

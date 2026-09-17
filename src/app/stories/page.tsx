'use client';

import React, { useState } from 'react';
import { storiesData, type TransformationStory } from '@/content/stories-data';
import { CheckCircle2, Filter } from 'lucide-react';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

const CATEGORIES = [
  'All',
  'Workplace Anxiety',
  'Presentations',
  'Leadership',
  'Sleep',
  'Founder Stress',
  'Social Anxiety',
] as const;

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredStories =
    selectedCategory === 'All'
      ? storiesData
      : storiesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Transformation Library
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            What changes when the pattern resolves.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Real stories from working professionals across Chennai, Bangalore, and Hyderabad,
            documented with explicit affirmative consent.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-content-muted flex-shrink-0 mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-accent shadow-sm'
                    : 'bg-background text-content-secondary hover:text-primary hover:bg-surface-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-border shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-5 border-b border-border/70 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary text-accent font-display font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        {story.avatarInitial}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-dark text-base">{story.name}</h3>
                        <p className="text-xs text-content-secondary">
                          {story.role} · {story.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-surface-muted text-primary">
                      {story.category}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-content-secondary">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-accent mb-1">
                        1. The Pattern
                      </p>
                      <p className="leading-relaxed">{story.pattern}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-accent mb-1">
                        2. What They Tried
                      </p>
                      <p className="leading-relaxed">{story.tried}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-accent mb-1">
                        3. What Shifted
                      </p>
                      <p className="leading-relaxed">{story.shift}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-accent mb-1">
                        4. The New Default
                      </p>
                      <p className="leading-relaxed text-content-primary font-medium">
                        {story.newDefault}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/70">
                  <blockquote className="font-serif italic text-sm text-primary-dark border-l-2 border-accent pl-3 mb-3">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-1.5 text-[11px] text-content-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span>Consent verified &amp; approved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-2xl bg-white border border-border text-center max-w-2xl mx-auto">
            <p className="text-xs text-content-secondary leading-relaxed italic">
              <strong>Consent &amp; Transparency Notice:</strong> All client stories reflect real
              experiences shared voluntarily by clients of Neuro Recode Private Limited. Individual
              results vary based on individual consistency and circumstances. We do not manufacture
              testimonials or promise guaranteed clinical cure outcomes.
            </p>
          </div>
        </div>
      </section>

      <FreeTrainingBanner />
    </div>
  );
}

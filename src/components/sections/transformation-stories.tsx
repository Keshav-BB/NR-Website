import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { storiesData } from '@/content/stories-data';

interface TransformationStoriesProps {
  limit?: number;
  showAllLink?: boolean;
}

export function TransformationStories({
  limit = 3,
  showAllLink = true,
}: TransformationStoriesProps) {
  const displayedStories = storiesData.filter((s) => s.featured).slice(0, limit);

  return (
    <section id="stories" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase font-semibold tracking-widest text-accent mb-3">
            Real Transformations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            What changes when the pattern resolves.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            Real experiences from working professionals, shared with explicit consent. No fabricated
            quotes or clinical exaggeration.
          </p>
        </div>

        {/* 3 Featured Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Role */}
                <div className="flex items-center gap-3.5 pb-5 border-b border-border/70 mb-5">
                  <div className="w-11 h-11 rounded-full bg-primary text-accent font-display font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    {story.avatarInitial}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark text-base">{story.name}</h3>
                    <p className="text-xs text-content-secondary">
                      {story.role} · {story.location}
                    </p>
                  </div>
                </div>

                {/* Narrative Steps */}
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

              {/* Quote Block & Consent Tag */}
              <div className="mt-6 pt-5 border-t border-border/70">
                <blockquote className="font-serif italic text-sm text-primary-dark border-l-2 border-accent pl-3 mb-3">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-1.5 text-[11px] text-content-muted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Documented with verified client consent</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Stories CTA */}
        {showAllLink && (
          <div className="text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/25 text-primary font-semibold text-sm hover:bg-primary hover:text-accent transition-all"
            >
              <span>Read More Transformation Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

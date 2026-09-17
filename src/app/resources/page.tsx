import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { resourcesData } from '@/content/resources-data';
import { BookOpen, Clock, ArrowRight, FileText } from 'lucide-react';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';

export const metadata: Metadata = {
  title: 'Resource Center: Science, Guides & Anxiety Education',
  description:
    'Comprehensive guides, neuroscience breakdowns, and practical protocols for working professionals managing stress, burnout, and performance anxiety.',
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Educational Hub
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            Knowledge for a regulated mind.
          </h1>
          <p className="text-lg sm:text-xl text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Practical articles, scientific breakdowns, and guides to help you understand your
            nervous system and perform with effortless clarity.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesData.map((article) => (
              <article
                key={article.slug}
                className="bg-background rounded-2xl p-7 border border-border shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                    <span className="font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-primary/10 text-primary">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-content-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-content-muted">{article.publishedDate}</span>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FreeTrainingBanner />
    </div>
  );
}

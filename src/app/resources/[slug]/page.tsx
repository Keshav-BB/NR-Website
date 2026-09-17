import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resourcesData } from '@/content/resources-data';
import { ArrowLeft, Clock, Calendar, UserCheck, Download, BookOpen } from 'lucide-react';
import { FreeTrainingBanner } from '@/components/sections/free-training-banner';
import { siteConfig } from '@/lib/cms/site-config';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = resourcesData.find((a) => a.slug === slug);
  if (!article) return { title: 'Resource Not Found' };

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = resourcesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* Article Header */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-semibold text-content-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all resources</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <span className="font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-content-secondary">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-content-secondary">
              <Calendar className="w-3.5 h-3.5" />
              Published: {article.publishedDate}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-content-secondary leading-relaxed mb-6">
            {article.description}
          </p>

          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-6 text-xs text-content-muted">
            <div className="flex items-center gap-2">
              <span className="font-medium text-content-primary">Author:</span>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary font-medium">
              <UserCheck className="w-4 h-4 text-green-600" />
              <span>Clinically &amp; ethically reviewed by: {article.reviewer}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Key Takeaways Callout */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-muted border border-primary/15 space-y-3">
              <h3 className="font-bold text-primary text-base">Key Executive Takeaways:</h3>
              <ul className="space-y-2 text-sm text-content-secondary">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Downloadable Asset */}
          {article.downloadableAsset && (
            <div className="p-6 rounded-2xl bg-background border border-border flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-bold text-primary-dark text-sm sm:text-base">
                  {article.downloadableAsset.title}
                </h4>
                <p className="text-xs text-content-muted">
                  Size: {article.downloadableAsset.fileSize} · Free PDF Download
                </p>
              </div>
              <a
                href={siteConfig.navigation.primaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-accent text-xs font-semibold hover:bg-primary-hover transition-colors flex-shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          )}

          {/* Citations Block */}
          {article.citations && article.citations.length > 0 && (
            <div className="pt-8 border-t border-border space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-content-primary flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>References &amp; Scientific Citations</span>
              </h4>
              <ul className="space-y-2 text-xs text-content-muted font-mono leading-relaxed">
                {article.citations.map((citation, idx) => (
                  <li key={idx}>[{idx + 1}] {citation}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <FreeTrainingBanner />
    </div>
  );
}

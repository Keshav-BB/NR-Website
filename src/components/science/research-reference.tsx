import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import type { ResearchReference as ResearchReferenceType } from '@/content/science-data';

interface ResearchReferenceProps {
  reference: ResearchReferenceType;
}

export function ResearchReference({ reference }: ResearchReferenceProps) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-primary/10 text-primary">
            {reference.topic}
          </span>
          <span className="text-xs text-content-muted font-mono">{reference.year}</span>
        </div>

        <h4 className="font-bold text-primary-dark text-base mb-1.5 leading-snug">
          {reference.title}
        </h4>

        <p className="text-xs font-medium text-content-secondary mb-3 italic">
          {reference.authors} · {reference.publication}
        </p>

        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
          {reference.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
        <a
          href={reference.doiOrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover hover:underline"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>View Study / DOI</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
        </a>
      </div>
    </div>
  );
}

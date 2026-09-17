'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { faqsData } from '@/content/faqs-data';
import { AccordionItem } from '@/components/ui/accordion';

export function FaqAccordion() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Understanding Neuro Recode', 'Sessions & Process', 'Boundaries & Safety'];

  const filteredFaqs = selectedFilter === 'All'
    ? faqsData
    : faqsData.filter((item) => item.category === selectedFilter);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border/80 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-accent" />
            Answers &amp; Clarity
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our approach, session logistics, expectations, and safety boundaries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-background hover:bg-surface text-content-secondary border border-border/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-background rounded-3xl p-6 sm:p-10 border border-border/80 divide-y divide-border/60 shadow-xs mb-12">
          {filteredFaqs.map((faq, idx) => (
            <AccordionItem
              key={faq.id}
              title={faq.question}
              category={faq.category}
              defaultOpen={idx === 0 && selectedFilter === 'All'}
            >
              <p className="text-content-secondary leading-relaxed">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </div>

        {/* Direct Contact Support Prompt */}
        <div className="text-center p-6 rounded-2xl bg-purple-tint/30 border border-primary/20">
          <div className="flex items-center justify-center gap-2 text-primary-dark font-semibold text-sm mb-1">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>Have a specific question not covered here?</span>
          </div>
          <p className="text-xs text-content-secondary mb-4">
            We are glad to answer questions about suitability and session details in private.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-dark underline underline-offset-4"
          >
            Reach out directly to our client care team
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface AccordionItemProps {
  title: string;
  category?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, category, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-border/80 last:border-none py-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4 py-2 text-content-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1">
          {category && (
            <span className="text-[11px] uppercase tracking-wider font-semibold text-accent-muted">
              {category}
            </span>
          )}
          <span className="text-base sm:text-lg font-semibold text-content-primary">
            {title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-5 h-5 flex-shrink-0 text-content-secondary transition-transform duration-200',
            isOpen && 'transform rotate-180 text-primary'
          )}
        />
      </button>
      {isOpen && (
        <div className="pt-3 pb-2 text-sm sm:text-base text-content-secondary leading-relaxed animate-in fade-in-50 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

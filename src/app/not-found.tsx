import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Home, BookOpen, Video } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';

export default function NotFound() {
  return (
    <div className="bg-background py-24 sm:py-32 min-h-[75vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="font-display text-6xl sm:text-7xl font-bold text-primary block mb-2">
            404
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark mb-3">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            The page you are looking for might have moved, been renamed, or does not exist.
            Let&apos;s guide you back to where you need to be.
          </p>
        </div>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <Link
            href="/"
            className="p-4 rounded-xl bg-white border border-border hover:border-primary/40 transition-all text-center space-y-1 group"
          >
            <Home className="w-5 h-5 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-primary-dark block">Homepage</span>
            <span className="text-[11px] text-content-muted block">Start from beginning</span>
          </Link>

          <Link
            href="/method"
            className="p-4 rounded-xl bg-white border border-border hover:border-primary/40 transition-all text-center space-y-1 group"
          >
            <BookOpen className="w-5 h-5 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-primary-dark block">The Method</span>
            <span className="text-[11px] text-content-muted block">3-Step Protocol</span>
          </Link>

          <a
            href={siteConfig.navigation.primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-primary text-accent hover:bg-primary-hover transition-all text-center space-y-1 group"
          >
            <Video className="w-5 h-5 text-accent mx-auto mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold block">Free Training</span>
            <span className="text-[11px] text-white/70 block">60-min masterclass</span>
          </a>
        </div>
      </div>
    </div>
  );
}

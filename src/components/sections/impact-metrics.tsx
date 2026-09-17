import React from 'react';
import { siteConfig } from '@/lib/cms/site-config';

export function ImpactMetrics() {
  const metrics = [
    {
      value: siteConfig.metrics.professionalsHelped,
      label: 'Working Professionals Helped',
      description: 'Founders, directors, engineers, and executives rewired',
    },
    {
      value: siteConfig.metrics.communityMembers,
      label: 'Learning Community Members',
      description: 'Professionals actively mastering nervous system principles',
    },
    {
      value: siteConfig.metrics.yearsOperating,
      label: 'Dedicated Protocol Focus',
      description: 'Single-minded concentration on performance anxiety',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-primary-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((item, index) => (
            <div key={index} className="pt-6 md:pt-0 md:px-8 first:pl-0 text-center">
              <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-accent tracking-tight mb-2">
                {item.value}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white/95 mb-1">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Principle Footnote */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50 italic max-w-2xl mx-auto">
            {siteConfig.metrics.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

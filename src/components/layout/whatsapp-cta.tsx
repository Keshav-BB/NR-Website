'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';

export function WhatsAppCta() {
  const pathname = usePathname();

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source_page: pathname });
  };

  const message = encodeURIComponent(
    `${siteConfig.whatsapp.defaultMessage} (Referral Page: ${pathname})`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-card hover:bg-[#20bd5a] hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Chat with Neuro Recode on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline-block pr-1">Chat on WhatsApp</span>
        {/* Subtle ping animation */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
        </span>
      </a>
    </div>
  );
}

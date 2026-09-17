'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';
import { Logo } from './logo';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileDrawer({ isOpen, onClose, navLinks }: MobileDrawerProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConsultationClick = () => {
    trackEvent('consultation_cta_click', { location: 'mobile_drawer' });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#241033] text-white animate-in fade-in duration-200"
    >
      {/* Drawer Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Logo variant="light" size="sm" />
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between py-3.5 px-3 rounded-xl text-lg font-medium transition-all ${
                isActive
                  ? 'bg-white/10 text-accent font-semibold pl-4'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-40" />
            </Link>
          );
        })}

        <div className="pt-6 border-t border-white/10 my-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 py-3 px-3 rounded-xl text-white/80 hover:text-white text-base font-medium"
          >
            <PhoneCall className="w-4 h-4 text-accent" />
            <span>Talk to Our Team</span>
          </Link>
          <a
            href={`mailto:${siteConfig.company.supportEmail}`}
            className="flex items-center gap-3 py-3 px-3 rounded-xl text-white/80 hover:text-white text-base font-medium"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>{siteConfig.company.supportEmail}</span>
          </a>
        </div>
      </div>

      {/* Persistent Drawer Action Footer */}
      <div className="p-6 border-t border-white/10 bg-[#1A0B26] flex flex-col gap-3">
        <Link
          href={siteConfig.navigation.primaryCtaUrl}
          onClick={handleConsultationClick}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-accent text-[#241033] font-bold text-base hover:bg-accent-hover shadow-elevated transition-all"
        >
          <span>{siteConfig.navigation.primaryCtaLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-xs text-white/50">
          Confidential 1-on-1 · Non-clinical experiential approach
        </p>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { MobileDrawer } from './mobile-drawer';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';
import { initializeAttribution } from '@/lib/analytics/attribution';

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/#what-is-neurorecode', label: 'Neuro Recode' },
  { href: '/#areas-we-help', label: 'Areas We Help' },
  { href: '/stories', label: 'Stories' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    initializeAttribution();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    trackEvent('consultation_cta_click', { location: 'header' });
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/80 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-primary font-semibold bg-primary/5'
                      : 'text-content-secondary hover:text-primary hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={siteConfig.navigation.primaryCtaUrl}
              onClick={handleConsultationClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs lg:text-sm font-semibold hover:bg-primary-hover shadow-subtle hover:shadow-card transition-all active:scale-[0.98]"
            >
              <span>{siteConfig.navigation.primaryCtaLabel}</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={siteConfig.navigation.primaryCtaUrl}
              onClick={handleConsultationClick}
              className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-xs"
            >
              <span>Book</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-content-primary hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}

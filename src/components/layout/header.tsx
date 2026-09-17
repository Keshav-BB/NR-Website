'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { MobileDrawer } from './mobile-drawer';
import { siteConfig } from '@/lib/cms/site-config';
import { trackEvent } from '@/lib/analytics/events';
import { appendAttributionToUrl, initializeAttribution } from '@/lib/analytics/attribution';

const NAV_LINKS = [
  { href: '/method', label: 'The Method' },
  { href: '/who-we-serve', label: 'Who We Serve' },
  { href: '/about', label: 'About' },
  { href: '/stories', label: 'Stories' },
  { href: '/science', label: 'Science' },
  { href: '/resources', label: 'Resources' },
  { href: '/careers', label: 'Careers' },
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

  const handleCtaClick = () => {
    trackEvent('free_training_click', { location: 'desktop_header' });
  };

  const freeTrainingUrl = appendAttributionToUrl(siteConfig.navigation.primaryCtaUrl);

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

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-3.5 py-2 text-xs font-semibold text-content-secondary hover:text-primary transition-colors"
            >
              Talk to Team
            </Link>

            <a
              href={freeTrainingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-accent text-xs lg:text-sm font-semibold hover:bg-primary-hover shadow-subtle hover:shadow-card transition-all active:scale-[0.98]"
            >
              <span>{siteConfig.navigation.primaryCtaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={freeTrainingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg bg-primary text-accent text-xs font-semibold"
            >
              Free Training
            </a>
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

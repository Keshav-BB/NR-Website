import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/cms/site-config';
import { ArrowRight, Phone, Mail, ShieldAlert } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="font-display italic text-accent/90 text-lg mt-3">
              Change the pattern. Change how you experience life.
            </p>
            <p className="text-silver text-sm leading-relaxed max-w-sm">
              An experiential personal-development and mental-wellness approach exploring recurring subconscious emotional patterns through structured, private guidance.
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1 font-mono">
              <p>{siteConfig.company.legalName}</p>
              <p>CIN: {siteConfig.company.cin}</p>
              <p>{siteConfig.company.operationalBase}</p>
            </div>
          </div>

          {/* Nav Col 1: Explore */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#what-is-neurorecode" className="hover:text-accent transition-colors">
                  Neuro Recode
                </Link>
              </li>
              <li>
                <Link href="/#areas-we-help" className="hover:text-accent transition-colors">
                  Areas We Help
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-accent transition-colors">
                  Stories of Change
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>Careers</span>
                  <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Connect & Book */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm text-white/80">
              <a
                href={`mailto:${siteConfig.company.supportEmail}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{siteConfig.company.supportEmail}</span>
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 88073 04713</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?type=consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-primary-dark font-bold text-xs hover:bg-accent-hover transition-colors shadow-xs"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1 mt-3">
              <p className="font-semibold text-accent flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                Emergency Crisis Helplines
              </p>
              <p>Tele-MANAS: 14416 (24/7)</p>
              <p>National Emergency: 112</p>
            </div>
          </div>

          {/* Nav Col 3: Legal & Boundaries */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
              Trust &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-accent transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-accent transition-colors">
                  Non-Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Strip */}
        <div className="py-6 border-b border-white/10 text-xs text-white/50 leading-relaxed">
          <p>
            <strong className="text-white/70">Disclaimer:</strong> Neuro Recode is an experiential mental-wellness and personal-development approach. It is not intended to replace diagnosis, medical treatment, psychotherapy, or emergency mental-health care where those services are required. If you are experiencing acute psychological crisis, please contact designated medical helplines immediately.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} {siteConfig.company.legalName}. All Rights Reserved.</p>
          <p className="italic text-accent/80 font-serif">Heal Your Mind To Heal Your Life</p>
        </div>
      </div>
    </footer>
  );
}

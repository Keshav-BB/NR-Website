import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/cms/site-config';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#241033] text-white pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="font-display italic text-accent/90 text-lg max-w-sm mt-3">
              {siteConfig.company.tagline}
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              A science-grounded 3-step nervous system protocol (Decode, Rewire, Reinforce) built on
              neuroplasticity, NLP, and clinical hypnotherapy. Designed to resolve the root imprint
              of performance anxiety.
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1 font-mono">
              <p>{siteConfig.company.legalName}</p>
              <p>CIN: {siteConfig.company.cin}</p>
              <p>{siteConfig.company.udyam} · {siteConfig.company.operationalBase}</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/method" className="hover:text-accent transition-colors">
                  The Method
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve" className="hover:text-accent transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About the Company
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-accent transition-colors">
                  Transformation Stories
                </Link>
              </li>
              <li>
                <Link href="/science" className="hover:text-accent transition-colors">
                  The Science &amp; HPA Axis
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors">
                  Careers <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded ml-1 font-bold">Hiring</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Begin & Support */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
              Begin Here
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href={siteConfig.navigation.primaryCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
                >
                  <span>Free Training Masterclass</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Talk to Our Team
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.company.supportEmail}`}
                  className="hover:text-accent transition-colors"
                >
                  {siteConfig.company.supportEmail}
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 space-y-1">
                <p className="font-semibold text-accent/90 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Crisis Support
                </p>
                <p>Tele-MANAS: {siteConfig.hotlines.teleManas}</p>
                <p>Emergency Services: {siteConfig.hotlines.emergency}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Trust & Legal */}
          <div className="space-y-3">
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
                  Refund &amp; Cancellation Policy
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
            <strong className="text-white/70">Medical Disclaimer:</strong> Neuro Recode Private Limited provides educational wellness and mindset coaching services utilizing neuroplasticity, NLP, and clinical hypnotherapy. Our services are non-clinical and do not constitute medical, psychiatric, or psychological diagnosis, advice, or treatment. We do not guarantee clinical outcomes. Always consult a licensed healthcare professional for medical conditions.
          </p>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {siteConfig.company.legalName}. All Rights Reserved.
          </p>
          <p className="italic text-accent/80 font-serif">
            &ldquo;{siteConfig.company.tagline}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}

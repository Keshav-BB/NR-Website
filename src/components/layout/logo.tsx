import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  emblemOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  variant = 'dark',
  className = '',
  emblemOnly = false,
  size = 'md',
}: LogoProps) {
  const isLight = variant === 'light';

  // Sizing configurations
  const dimensions = {
    sm: { width: 160, height: 35, emblemSize: 32 },
    md: { width: 210, height: 46, emblemSize: 42 },
    lg: { width: 260, height: 57, emblemSize: 52 },
  }[size];

  if (emblemOnly) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl ${className}`}
        aria-label="Neuro Recode Home"
      >
        <div className="relative group-hover:scale-105 transition-transform duration-200">
          <Image
            src="/neuro-recode-emblem.png"
            alt="Neuro Recode Emblem"
            width={dimensions.emblemSize}
            height={dimensions.emblemSize}
            priority
            className="object-contain drop-shadow-xs"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-transform duration-200 ${className}`}
      aria-label="Neuro Recode — Heal Your Mind To Heal Your Life"
    >
      <div
        className={`relative flex items-center transition-all ${
          isLight
            ? 'bg-white/95 px-3 py-1.5 rounded-xl shadow-subtle border border-white/20 group-hover:bg-white'
            : 'group-hover:opacity-95'
        }`}
      >
        <Image
          src="/neuro-recode-logo.png"
          alt="Neuro Recode — Heal Your Mind To Heal Your Life"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain max-h-[48px] w-auto"
        />
      </div>
    </Link>
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'gold' | 'outline' | 'subtle';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase',
        {
          'bg-primary/10 text-primary border border-primary/20': variant === 'default',
          'bg-accent/20 text-[#8F6516] border border-accent/40': variant === 'gold',
          'border border-border text-content-secondary': variant === 'outline',
          'bg-surface-muted text-content-secondary': variant === 'subtle',
        },
        className
      )}
      {...props}
    />
  );
}

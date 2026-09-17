import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]',
          {
            'bg-primary text-accent hover:bg-primary-hover shadow-subtle hover:shadow-card':
              variant === 'primary',
            'bg-surface-muted text-primary hover:bg-white/80 border border-primary/10':
              variant === 'secondary',
            'border-2 border-primary/25 text-primary hover:border-primary hover:bg-primary/5':
              variant === 'outline',
            'text-content-secondary hover:text-content-primary hover:bg-black/5':
              variant === 'ghost',
            'bg-accent text-primary-dark font-bold hover:bg-accent-hover shadow-subtle hover:shadow-card':
              variant === 'gold',
            'px-3.5 py-2 text-xs': size === 'sm',
            'px-5 py-2.5 text-sm': size === 'md',
            'px-7 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

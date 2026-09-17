import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
          light: 'var(--accent-light)',
        },
        logo: {
          violet: 'var(--logo-violet)',
          gold: 'var(--logo-gold)',
          silver: 'var(--logo-silver)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(107, 50, 161, 0.06)',
        card: '0 18px 48px -24px rgba(36, 16, 51, 0.12)',
        elevated: '0 24px 60px -12px rgba(107, 50, 161, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;

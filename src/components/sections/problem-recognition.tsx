import React from 'react';
import { Briefcase, Clock, BatteryWarning, HeartPulse } from 'lucide-react';

const SITUATIONS = [
  {
    icon: Clock,
    title: 'The 3 a.m. Alarm',
    description:
      'Waking up abruptly with a tight chest, shallow breathing, and looping scenarios about tomorrow’s deliverables or quarter-end reviews.',
  },
  {
    icon: Briefcase,
    title: 'Pre-Meeting Anticipation',
    description:
      'Days of invisible tension before board presentations or client scrums. You always perform well, but the internal physical cost is exhausting.',
  },
  {
    icon: BatteryWarning,
    title: 'Executive Burnout',
    description:
      'You are closing deals and leading your team, but your nervous system is permanently redlined in defensive survival mode.',
  },
  {
    icon: HeartPulse,
    title: 'The Management Plateau',
    description:
      'Meditation slowed it down. Counselling helped you discuss it. Medication quieted symptoms. But nothing dissolved the root trigger.',
  },
];

export function ProblemRecognition() {
  return (
    <section className="py-20 sm:py-28 bg-surface-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase font-semibold tracking-widest text-accent mb-3">
            The Pattern You Know Too Well
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight leading-tight mb-6">
            You&apos;re high-functioning on the outside. <br />
            <span className="text-primary italic font-serif">Exhausted on the inside.</span>
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            You close deals, hit targets, build companies, and support everyone around you — and yet
            your chest remains perpetually guarded.
          </p>
        </div>

        {/* 4 Situation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {SITUATIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-card transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Central Thesis Quote Callout */}
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="font-serif italic text-xl sm:text-2xl text-primary-dark border-l-4 border-accent pl-6 py-2 text-left mb-6 bg-white/40 rounded-r-xl">
            &ldquo;It is not in your head. It is a pattern in your autonomic nervous system. And a
            nervous system can be rewired.&rdquo;
          </blockquote>
          <p className="text-sm sm:text-base text-content-secondary">
            That is what Neuro Recode does. Not endless coping. Not white-knuckle management.{' '}
            <strong className="text-primary-dark font-semibold">Root-cause resolution.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

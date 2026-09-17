import { Shield, Compass, Brain, Sparkles, HeartPulse, RefreshCw } from 'lucide-react';
import type { ComponentType } from 'react';

export interface PatternArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  manifestation: string;
}

export const areasData: PatternArea[] = [
  {
    id: 'anxiety',
    title: 'Anxiety',
    subtitle: 'Nervous system hyper-vigilance',
    description:
      'A persistent state of bodily alert where routine responsibilities trigger physical tightening, shallow breathing, and internal apprehension.',
    icon: HeartPulse,
    manifestation: 'Chest tightness, racing pulse before meetings, feeling perpetually on edge.',
  },
  {
    id: 'fear-and-phobias',
    title: 'Fear & Phobias',
    subtitle: 'Automated threat conditioning',
    description:
      'Intense, visceral alarm responses attached to specific situations, environments, or evaluations that logic alone cannot talk you out of.',
    icon: Shield,
    manifestation: 'Avoidance of specific high-visibility tasks, stage dread, physical freezing.',
  },
  {
    id: 'overthinking',
    title: 'Overthinking',
    subtitle: 'Cognitive defense loops',
    description:
      'Endlessly analyzing past conversations or simulating worst-case future scenarios late at night in an effort to maintain perceived safety.',
    icon: Brain,
    manifestation: 'Nocturnal rumination, decision paralysis, constant mental exhaustion.',
  },
  {
    id: 'self-doubt',
    title: 'Self-Doubt',
    subtitle: 'Imposter defense mechanism',
    description:
      'A recurring internal narrative that questions your competence or belonging, regardless of proven track records and objective achievements.',
    icon: Compass,
    manifestation: 'Over-preparing out of fear, discounting genuine praise, fear of exposure.',
  },
  {
    id: 'emotional-triggers',
    title: 'Emotional Triggers',
    subtitle: 'Sudden visceral reactivity',
    description:
      'Disproportionate internal surges of frustration, withdrawal, or defensive panic ignited by brief comments, tone changes, or perceived criticism.',
    icon: Sparkles,
    manifestation: 'Abrupt emotional flooding, regret over sudden reactivity, defensive shut down.',
  },
  {
    id: 'recurring-patterns',
    title: 'Recurring Emotional Patterns',
    subtitle: 'Familiar relational scripts',
    description:
      'Finding yourself in the exact same emotional dilemma or communication deadlock across different roles, relationships, or work environments.',
    icon: RefreshCw,
    manifestation: 'Repeating self-sabotage cycles, burnout plateaus, predictable roadblocks.',
  },
];

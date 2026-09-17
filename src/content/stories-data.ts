export interface TransformationStory {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarInitial: string;
  category: 'Workplace Anxiety' | 'Presentations' | 'Leadership' | 'Sleep' | 'Founder Stress' | 'Social Anxiety';
  pattern: string;
  tried: string;
  shift: string;
  newDefault: string;
  quote: string;
  consentGiven: boolean;
  featured: boolean;
}

export const storiesData: TransformationStory[] = [
  {
    id: 'story-ravi',
    name: 'Ravi',
    role: 'IT Engineering Manager',
    location: 'Chennai',
    avatarInitial: 'R',
    category: 'Workplace Anxiety',
    pattern:
      'Sleep had become erratic and fragile. Sunday evenings were the worst — heavy anticipatory dread before Monday morning leadership reviews.',
    tried:
      'Meditation apps for 14 months, talking to a counsellor for six months, and a low-dose SSRI. All gave slight short-term relief, but nothing stopped the recurring cycle.',
    shift:
      'The Decode session uncovered a subconscious imprint from age 11 during a school assembly freeze. The nervous system had been running defensive hyper-vigilance on that memory for 26 years.',
    newDefault:
      'Sunday evenings feel calm and ordinary. The engineering reviews are just as demanding, but the physiological alarm loop is completely gone.',
    quote: "I didn't realise how loud my own head was until it finally went quiet.",
    consentGiven: true,
    featured: true,
  },
  {
    id: 'story-meena',
    name: 'Meena',
    role: 'Senior Product Director',
    location: 'Bangalore',
    avatarInitial: 'M',
    category: 'Presentations',
    pattern:
      'Every major executive presentation triggered a week of anticipatory spiral, heart palpitations, and two full days of post-event cognitive exhaustion.',
    tried:
      'Executive public speaking coaching, two courses of therapy, and daily mindfulness meditation. The physical anxiety showed up every single time on schedule.',
    shift:
      'Rewiring the subconscious threat attribution using timeline re-imprinting. By session three, the pre-presentation panic cascade simply did not initiate.',
    newDefault:
      'Presentations feel like regular professional discussions now. She prepares the strategy rather than bracing for panic.',
    quote: 'I stopped preparing for the anxiety. I just prepared for the presentation.',
    consentGiven: true,
    featured: true,
  },
  {
    id: 'story-arun',
    name: 'Arun',
    role: 'Tech Startup Founder',
    location: 'Hyderabad',
    avatarInitial: 'A',
    category: 'Founder Stress',
    pattern:
      'As headcount grew from 10 to 60, chest tightness intensified. Every unexpected email or investor update felt like an imminent existential catastrophe.',
    tried:
      'An executive performance coach, structured journaling, and a two-week digital detox retreat in Himachal. The alarm was waiting right at the airport gate on return.',
    shift:
      'Decode pinpointed a deep scarcity pattern formed at age 14 during a sudden family business collapse. His nervous system had remained braced in survival mode ever since.',
    newDefault:
      'He leads from mental clarity and grounded composure. The company is still high-stakes — but the catastrophic internal alarm has dissolved.',
    quote: "I thought the anxiety was just the price of being a founder. Turns out it was just a 14-year-old imprint.",
    consentGiven: true,
    featured: true,
  },
  {
    id: 'story-karthik',
    name: 'Karthik S.',
    role: 'VP of Finance',
    location: 'Chennai',
    avatarInitial: 'K',
    category: 'Sleep',
    pattern:
      'Waking up regularly at 3:15 a.m. with racing heart rate, looping thoughts on compliance and quarter-end numbers, unable to fall back asleep.',
    tried:
      'Melatonin, strict sleep hygiene protocols, cutting caffeine, and cognitive reframing exercises. The 3 a.m. wake-up adrenaline spike remained unchanged.',
    shift:
      'Subconscious pattern work identified an over-responsibility anchoring mechanism. Rewiring dissociated the threat trigger from nocturnal nervous system rhythms.',
    newDefault:
      'Consistent 7 hours of restorative sleep. Awakening rested with natural morning cortisol rhythms instead of midnight panic.',
    quote: 'Sleeping through the night without that cold chest shock has changed my entire life and health.',
    consentGiven: true,
    featured: false,
  },
  {
    id: 'story-divya',
    name: 'Divya M.',
    role: 'Corporate Legal Counsel',
    location: 'Mumbai',
    avatarInitial: 'D',
    category: 'Leadership',
    pattern:
      'Persistent impostor syndrome and dread before board meetings, manifesting as vocal tension and nausea despite 12 years of top-tier legal experience.',
    tried:
      'CBT counselling, positive affirmations, and assertiveness workshops. Logically knew she was competent, but the nervous system responded like it was in danger.',
    shift:
      'The 3-stage protocol decoupled the physiological fight-or-flight trigger from authority figures and critical peer evaluations.',
    newDefault:
      'Composed, assertive presence in every hearing and board room. Clear vocal projection without trembling or throat constriction.',
    quote: 'You cannot think your way out of a nervous system reaction. Neuro Recode resolved what logic never could.',
    consentGiven: true,
    featured: false,
  },
  {
    id: 'story-anand',
    name: 'Anand K.',
    role: 'Principal Software Architect',
    location: 'Coimbatore',
    avatarInitial: 'A',
    category: 'Social Anxiety',
    pattern:
      'Extreme discomfort during team scrums, informal networking lunches, and cross-functional design reviews, causing chronic avoidance behavior.',
    tried:
      'Books on social skills, forced exposure therapy, and beta-blockers. Exhausting mental gymnastics to survive normal workplace social interactions.',
    shift:
      'Located the initial peer-rejection imprint and neutralized the emotional charge through timeline rewiring.',
    newDefault:
      'Effortless social participation at work. Communicates ideas with ease and actually enjoys casual team engagements.',
    quote: 'The mental friction is gone. I do not have to psych myself up just to talk to my own colleagues anymore.',
    consentGiven: true,
    featured: false,
  },
];

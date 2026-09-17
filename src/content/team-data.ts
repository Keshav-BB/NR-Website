export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  philosophy: string;
  specialization: string;
  avatarUrl: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'founder-principal',
    name: 'R. Keshavan',
    role: 'Founder & Principal Practitioner',
    credentials: [
      'Certified NLP Master Practitioner',
      'Clinical Hypnotherapy Diploma (IMDHA/EKAA)',
      'Applied Neuroscience & Somatic Pattern Specialist',
    ],
    bio: 'With over a decade of dedicated research into subconscious behavioral dynamics and somatic stress loops, Keshavan developed the Neuro Recode framework to provide high-performing professionals with a structured, experiential alternative to perpetual coping strategies.',
    philosophy:
      'We do not need to fight our patterns or intellectualize why they exist. When we understand how the nervous system learned them, we can guide it to choose a calmer, grounded response.',
    specialization: 'High-stakes anxiety, executive performance dread, autonomic self-regulation',
    avatarUrl: '/images/team/keshavan.webp',
  },
  {
    id: 'client-care-lead',
    name: 'Dr. Ananya Sundaram',
    role: 'Lead Wellness Facilitator & Onboarding Guide',
    credentials: [
      'Mindfulness-Based Stress Reduction (MBSR)',
      'Advanced Behavioral Coaching Certification',
      'Integrative Somatic Practices Practitioner',
    ],
    bio: 'Ananya ensures that every client enters the Neuro Recode journey with total clarity, safety, and comfort. She bridges initial pattern mapping with guided integration practices for sustainable day-to-day behavioral shifts.',
    philosophy:
      'Sustainable change happens when the body feels safe enough to drop its historical defenses. Real inner ease is never forced; it is allowed.',
    specialization: 'Imposter syndrome, emotional flooding, relational boundary conditioning',
    avatarUrl: '/images/team/ananya.webp',
  },
];

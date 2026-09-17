export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract';
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  location: string;
  experience: string;
  salaryRange?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications?: string[];
  workingHours: string;
  weeklyOff: string;
  languageRequirement: string;
  equipmentRequirement: string;
  applicationDeadline: string;
  status: 'open' | 'closed' | 'draft';
}

export const careersData: JobPosting[] = [
  {
    id: 'job-wellness-coach-01',
    slug: 'wellness-facilitator-tanglish',
    title: 'Wellness & Mindset Facilitator (Tanglish / English)',
    department: 'Client Delivery & Coaching',
    employmentType: 'Full-time',
    workMode: 'Remote',
    location: 'Chennai / Remote (India)',
    experience: '2 - 5 years in personal development, coaching, or behavioural training',
    salaryRange: '₹4,50,000 - ₹7,20,000 / year + Performance Incentives',
    summary:
      'We are looking for an empathetic, articulate communicator fluent in Tanglish (Tamil + English) to facilitate structured 1-on-1 and group Neuro Recode protocol sessions with working professionals.',
    responsibilities: [
      'Deliver the 3-Step Re-Code Protocol™ (Decode, Rewire, Reinforce) under senior practitioner supervision',
      'Conduct Root Cause Analysis (RCA) intake conversations with empathy, professional composure, and strict confidentiality',
      'Maintain detailed session tracking records and progress notes in our CRM system',
      'Guide clients through post-session integration exercises and habit reinforcement protocols',
      'Uphold our strict non-clinical wellness boundaries and ethical protocols at all times',
    ],
    requirements: [
      'Proven background in adult facilitation, NLP, clinical hypnotherapy, life coaching, or related behavioral disciplines',
      'Outstanding bilingual conversational fluency in Tamil and English (Tanglish delivery is core to our audience)',
      'High emotional intelligence, active listening, and calm executive presence',
      'Deep respect for confidentiality and participant psychological safety',
    ],
    preferredQualifications: [
      'Certified Practitioner in NLP, Timeline Therapy, or Clinical Hypnotherapy (ICF, NGH, or equivalent recognition)',
      'Experience working with corporate professionals, founders, or senior managers',
    ],
    workingHours: '10:00 AM – 7:00 PM IST (Mon – Sat)',
    weeklyOff: 'Sundays',
    languageRequirement: 'Fluent Tamil & English (Tanglish natural conversational ability required)',
    equipmentRequirement:
      'Dedicated personal laptop/PC (Intel i5/Ryzen 5 minimum, 8GB+ RAM), high-speed fiber internet (50Mbps+), noise-canceling headset, and private quiet room',
    applicationDeadline: 'Open until filled',
    status: 'open',
  },
  {
    id: 'job-client-success-02',
    slug: 'client-onboarding-coordinator',
    title: 'Client Experience & Intake Coordinator',
    department: 'Client Operations',
    employmentType: 'Full-time',
    workMode: 'Remote',
    location: 'Chennai / Remote (India)',
    experience: '1 - 3 years in customer operations, coaching coordination, or client onboarding',
    salaryRange: '₹3,00,000 - ₹4,80,000 / year',
    summary:
      'Coordinate all client touchpoints from free training graduation through consultation scheduling, session logistics, and post-program care.',
    responsibilities: [
      'Reach out to qualified training attendees to confirm their Root Cause Analysis (RCA) consultation slots',
      'Manage practitioner calendars, rescheduling requests, and attendance confirmation on WhatsApp and phone',
      'Track client inquiries in Frappe CRM with precision and zero attribution leakage',
      'Coordinate support queries regarding payment, slot availability, and program onboarding',
    ],
    requirements: [
      'Flawless telephone etiquette and friendly, professional communication in English and Tamil',
      'Experience with modern CRM systems (Frappe, HubSpot, or Zoho)',
      'Highly organized, detail-oriented, and dependable under fast turnaround times',
      'Empathy and emotional maturity when handling sensitive client communications',
    ],
    workingHours: '9:30 AM – 6:30 PM IST (Mon – Sat)',
    weeklyOff: 'Sundays',
    languageRequirement: 'English & Tamil (spoken and written)',
    equipmentRequirement: 'Personal laptop with stable internet connection and quiet workspace',
    applicationDeadline: 'Open until filled',
    status: 'open',
  },
  {
    id: 'job-content-educator-03',
    slug: 'science-wellness-content-specialist',
    title: 'Science & Wellness Content Specialist',
    department: 'Brand & Education',
    employmentType: 'Full-time',
    workMode: 'Remote',
    location: 'Remote (India)',
    experience: '2 - 4 years writing science-grounded mental wellness or healthcare copy',
    salaryRange: '₹4,00,000 - ₹6,50,000 / year',
    summary:
      'Translate complex neuroscience, HPA axis research, and neuroplasticity studies into crystal-clear, relatable editorial articles, video scripts, and client workbooks.',
    responsibilities: [
      'Write in-depth educational resources on stress biology, burnout, sleep, and subconscious patterning',
      'Ensure all marketing and educational assets strictly follow our non-clinical wellness disclaimer safeguards',
      'Develop script concepts for educational video series and webinar modules in collaboration with leadership',
      'Conduct literature audits of peer-reviewed journals to maintain robust scientific citations',
    ],
    requirements: [
      'Strong portfolio of long-form articles explaining cognitive science, psychology, or wellness in engaging prose',
      'Impeccable research standards—zero tolerance for fabricated statistics or sensationalist clickbait',
      'Understanding of SEO fundamentals and editorial craft',
    ],
    workingHours: 'Flexible full-time (40 hours/week)',
    weeklyOff: 'Saturdays & Sundays',
    languageRequirement: 'English (Fluent written); Tamil understanding is a plus',
    equipmentRequirement: 'Personal laptop with stable high-speed internet',
    applicationDeadline: 'Open until filled',
    status: 'open',
  },
];

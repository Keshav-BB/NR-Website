export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'Understanding Neuro Recode' | 'Sessions & Process' | 'Boundaries & Safety';
}

export const faqsData: FAQItem[] = [
  {
    id: 'what-is-neurorecode',
    category: 'Understanding Neuro Recode',
    question: 'What is Neuro Recode?',
    answer:
      'Neuro Recode is an experiential personal-development and mental-wellness approach focused on identifying and shifting recurring subconscious emotional and behavioural patterns. Rather than simply managing surface symptoms or providing generic relaxation techniques, it helps individuals explore how internal responses are formed and guides them toward new, calmer ways of responding.',
  },
  {
    id: 'how-session-works',
    category: 'Sessions & Process',
    question: 'How does a Neuro Recode session work?',
    answer:
      'Sessions are private, 1-on-1 guided experiences conducted in a calm, supportive setting. Your practitioner helps you observe your current responses to specific triggers, gently access the subconscious emotional patterns holding those responses in place, and apply experiential techniques to release the visceral charge and establish a renewed baseline.',
  },
  {
    id: 'session-duration',
    category: 'Sessions & Process',
    question: 'How long does a session take?',
    answer:
      'A standard 1-on-1 Neuro Recode session typically lasts between 60 and 75 minutes. The initial exploratory consultation lasts approximately 45 to 60 minutes, focusing on mapping your specific patterns, clarifying your goals, and answering any personal questions.',
  },
  {
    id: 'is-it-therapy',
    category: 'Understanding Neuro Recode',
    question: 'Is Neuro Recode the same as therapy?',
    answer:
      'No. Neuro Recode is a structured, non-clinical wellness and personal-development methodology. It does not provide psychiatric diagnoses, medical treatments, or psychotherapeutic pathology assessments. While conventional therapy often focuses on ongoing cognitive dialogue and intellectual coping strategies, Neuro Recode is experiential and focused on repatterning internal automatic responses.',
  },
  {
    id: 'help-with-anxiety',
    category: 'Understanding Neuro Recode',
    question: 'Can Neuro Recode help with anxiety?',
    answer:
      'Neuro Recode is designed to help you explore how your mind and body produce anxious responses to specific triggers—such as high-pressure meetings, public speaking, or perceived evaluation. By working directly with these internal patterns, many clients experience meaningful shifts in how their nervous system responds under pressure. However, it is not a substitute for clinical psychiatric treatment for severe clinical anxiety disorders.',
  },
  {
    id: 'talking-about-past',
    category: 'Sessions & Process',
    question: 'Do I need to talk about my past experiences?',
    answer:
      'You are never required to recount painful memories in exhaustive detail. Neuro Recode focuses on the structure of your internal patterns—how your nervous system currently reacts in the present moment—rather than re-living or analyzing past trauma. You share only what you feel completely comfortable sharing.',
  },
  {
    id: 'online-sessions',
    category: 'Sessions & Process',
    question: 'Are sessions available online?',
    answer:
      'Yes. All consultations and 1-on-1 sessions are conducted securely via private video calls (Google Meet / Zoom). Because the work is guided and experiential, clients experience the exact same focus, comfort, and results from their own private, familiar spaces anywhere in India and globally.',
  },
  {
    id: 'number-of-sessions',
    category: 'Sessions & Process',
    question: 'How many sessions will I need?',
    answer:
      'Because every individual’s patterns and goals are unique, the number of sessions varies. Many clients notice shifts in perspective and internal reactivity within 1 to 3 structured sessions, while complex or multifaceted patterns may benefit from a 4-to-6 session structured journey. Your practitioner will discuss a recommended roadmap during your initial consultation.',
  },
  {
    id: 'who-is-it-for',
    category: 'Understanding Neuro Recode',
    question: 'Who is Neuro Recode for?',
    answer:
      'Neuro Recode is created for working professionals, entrepreneurs, managers, creatives, and individuals aged 18 and above who experience recurring patterns of anxiety, overthinking, self-doubt, or emotional reactivity, and who want a practical, structured, and experiential way to build lasting emotional flexibility.',
  },
  {
    id: 'medical-support',
    category: 'Boundaries & Safety',
    question: 'When should I seek professional or medical support?',
    answer:
      'If you are experiencing severe depression, suicidal ideation, active psychosis, self-harm impulses, severe substance dependency, or psychiatric emergencies, you should immediately reach out to a licensed medical or mental health professional. In India, you can call the national Tele-MANAS helpline at 14416 or emergency services at 112.',
  },
];

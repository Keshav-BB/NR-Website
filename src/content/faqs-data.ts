export interface FAQItem {
  question: string;
  answer: string;
  category: 'Method' | 'Eligibility' | 'Logistics' | 'Free Training';
}

export const faqsData: FAQItem[] = [
  {
    category: 'Method',
    question: 'How does the 3-Step Re-Code Protocol™ differ from conventional therapy or CBT?',
    answer:
      'Conventional talk therapy and CBT largely work in the conscious prefrontal cortex—helping you understand, cope with, or rationalize your anxious thoughts. The 3-Step Protocol addresses the subconscious root cause. We use NLP timeline techniques and clinical hypnotherapy to locate the original imprint in the nervous system, discharge its threat charge, and reinforce a calm default circuit so there is nothing left to constantly "manage."',
  },
  {
    category: 'Method',
    question: 'Is Neuro Recode a medical or clinical psychiatric treatment?',
    answer:
      'No. Neuro Recode provides non-clinical wellness, coaching, educational, and behavioral mindset services. We do not diagnose psychiatric disorders, prescribe medication, or provide emergency mental health crisis services. If you are currently under psychiatric supervision or taking prescribed medication, you should continue your care and consult your doctor before making any healthcare decisions.',
  },
  {
    category: 'Logistics',
    question: 'Why is the training and program delivered in Tanglish (Tamil + English)?',
    answer:
      'Emotional imprints and nervous system patterns are deeply linked to the native language and cultural context in which they were first encoded. For working professionals in Tamil Nadu and South India, communicating in authentic, relatable Tanglish removes the artificial formality of clinical English, allowing clients to connect directly and effortlessly with their authentic emotional experiences.',
  },
  {
    category: 'Eligibility',
    question: 'Who is eligible to participate in the program?',
    answer:
      'Our programs are designed specifically for working professionals aged 18 and above—including founders, senior managers, IT engineers, finance experts, doctors, lawyers, and working parents experiencing performance-related anxiety or chronic burnout. Our services are not suitable for college students, individuals seeking emergency crisis care, or those experiencing active severe psychiatric emergencies.',
  },
  {
    category: 'Free Training',
    question: 'What happens during the 60-Minute Free Training?',
    answer:
      'The Free Training is a structured 60-minute masterclass where you will learn exactly how anxiety operates in your autonomic nervous system (the HPA axis cascade), why conventional coping tools fail to stop it permanently, and how the 3-Step Protocol works. There is zero sales pressure or aggressive pitching inside the training—it is designed to give you clarity on your patterns.',
  },
  {
    category: 'Logistics',
    question: 'What is the consultation fee and rescheduling policy?',
    answer:
      'A 1-on-1 Root Cause Analysis (RCA) consultation is available for a nominal fee of ₹149 to reserve practitioner time and lock public calendar slots. You may reschedule your consultation once with at least 24 hours advance notice. Because practitioner time is exclusively reserved, missed sessions (no-shows) or cancellations made within 24 hours are non-refundable.',
  },
];

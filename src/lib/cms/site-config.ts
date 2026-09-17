export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    cin: string;
    udyam: string;
    registeredOffice: string;
    operationalBase: string;
    website: string;
    supportEmail: string;
    careersEmail: string;
    tagline: string;
  };
  navigation: {
    primaryCtaLabel: string;
    primaryCtaUrl: string;
    talkToTeamUrl: string;
  };
  metrics: {
    professionalsHelped: string;
    communityMembers: string;
    yearsOperating: string;
    disclaimer: string;
  };
  feesAndPolicies: {
    consultationBookingFee: string;
    rescheduleWindowHours: number;
    paymentErrorWindowDays: number;
    governingCourt: string;
  };
  hotlines: {
    teleManas: string;
    emergency: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  disclaimer: {
    badge: string;
    short: string;
    full: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: 'Neuro Recode',
    legalName: 'Neuro Recode Private Limited',
    cin: 'U86909TN2026PTC195212',
    udyam: 'UDYAM-TN-29-0062261',
    registeredOffice:
      '375/1, Main Road, Radhapuram, Tandarampattu, Chengam, Tiruvannamalai – 606707, Tamil Nadu, India',
    operationalBase: 'Chennai, Tamil Nadu',
    website: 'https://www.neurorecode.in',
    supportEmail: 'support@neurorecode.in',
    careersEmail: 'careers@neurorecode.in',
    tagline: 'Heal Your Mind To Heal Your Life',
  },
  navigation: {
    primaryCtaLabel: 'Start with the Free Training',
    primaryCtaUrl:
      process.env.NEXT_PUBLIC_FREE_TRAINING_URL || 'https://learn.neurorecode.in/welcome-page',
    talkToTeamUrl: '/contact',
  },
  metrics: {
    professionalsHelped: '815+',
    communityMembers: '2,500+',
    yearsOperating: '3 yrs',
    disclaimer:
      'All figures from our internal records. We do not quote arbitrary percentages — read our transformation stories instead.',
  },
  feesAndPolicies: {
    consultationBookingFee: '₹149',
    rescheduleWindowHours: 24,
    paymentErrorWindowDays: 7,
    governingCourt: 'Tiruvannamalai, Tamil Nadu',
  },
  hotlines: {
    teleManas: '14416 (or 1-800-891-4416)',
    emergency: '112',
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    defaultMessage:
      'Hi Neuro Recode, I came through the website and would like to know more about the program.',
  },
  disclaimer: {
    badge: 'Non-Clinical Wellness Protocol',
    short:
      "Neuro Recode provides non-clinical wellness, coaching and educational services. We do not provide medical diagnosis, psychiatry, or prescriptions. For urgent support, call Tele-MANAS at 14416 or Emergency 112.",
    full:
      "Neuro Recode Private Limited provides structured educational, mental wellness, and behavioural coaching services utilizing neuroplasticity, NLP, and clinical hypnotherapy principles. Our offerings are not intended to diagnose, treat, or cure any clinical psychiatric disorders. If you are currently under psychiatric supervision or taking prescribed medication, do not alter or stop your treatment without your physician's explicit direction.",
  },
};

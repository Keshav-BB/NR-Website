export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract';
  workMode: 'Remote' | 'Hybrid (Remote + On-site)' | 'Remote / Hybrid' | 'On-site';
  location: string;
  experience: string;
  salaryRange: string;
  summary: string;
  roleType: 'sales' | 'content' | 'performance-marketing' | 'general';
  responsibilities: string[];
  requirements: string[];
  preferredQualifications?: string[];
  benefits: string[];
  careerPath?: string[];
  selectionProcess: string[];
  kpis?: string[];
  workingHours: string;
  weeklyOff: string;
  languageRequirement: string;
  equipmentRequirement: string;
  applicationDeadline: string;
  status: 'open' | 'closed' | 'draft';
}

export const careersData: JobPosting[] = [
  {
    id: 'job-sales-advisor-01',
    slug: 'sales-executive-enrollment-advisor',
    title: 'Sales Executive / Enrollment Advisor',
    department: 'Sales & Admissions',
    employmentType: 'Full-time',
    workMode: 'Hybrid (Remote + On-site)',
    location: 'Chennai, Tamil Nadu',
    experience: '3–7 Years in consultative sales, education advisory, or high-touch wellness enrollment',
    salaryRange: '₹3.0 LPA – ₹3.6 LPA Fixed CTC + Performance Incentives',
    summary:
      'Guide qualified working professionals through structured 1-on-1 consultations to understand their anxiety and stress patterns, and enroll them into the appropriate Neuro Recode transformation programs.',
    roleType: 'sales',
    responsibilities: [
      'Conduct 6–8 pre-booked, qualified consultation appointments daily with senior professionals, founders, and managers',
      'Follow our structured, consultative discovery framework to understand client patterns with deep empathy',
      'Explain the Neuro Recode experiential approach clearly without using clinical or medical jargon',
      'Manage end-to-end CRM lead status, follow-up notes, and call logs in Frappe CRM with meticulous detail',
      'Achieve weekly and monthly enrollment milestones while maintaining the highest standard of ethical advisory',
    ],
    requirements: [
      '3–7 years of proven experience in high-ticket inside sales, executive advisory, or wellness/edtech admissions',
      'Mandatory bilingual fluency in Tamil and English (consultations are conducted in natural conversational Tanglish)',
      'High emotional intelligence, consultative questioning skills, and active listening capabilities',
      'Own personal laptop (Intel i5 / Ryzen 5 minimum, 8GB+ RAM) with stable high-speed internet (50 Mbps+) for remote consultations',
      'Available to work from our Chennai location for hybrid collaborative sessions',
    ],
    preferredQualifications: [
      'Prior experience handling senior corporate professionals, doctors, founders, and IT leadership clients',
      'Familiarity with CRM pipelines (Frappe, HubSpot, Zoho) and telephony systems',
    ],
    benefits: [
      'Warm, pre-qualified inbound appointments — zero cold calling',
      'Competitive fixed CTC (₹3.0–₹3.6 LPA) plus transparent, uncapped performance incentives',
      'Hybrid work flexibility balancing focused home deep-work with collaborative team days',
      'Direct coaching, mentorship, and personal development training from leadership',
      'Clear structured career progression in an impactful, fast-growing organization',
      'Purpose-driven mission helping professionals transform their daily lives',
    ],
    careerPath: [
      'Sales Executive / Enrollment Advisor',
      'Senior Enrollment Specialist',
      'Team Lead — Admissions',
      'Sales Manager',
      'Director of Client Programs',
    ],
    selectionProcess: [
      'Step 1: Updated Resume & Technical Readiness Screening',
      'Step 2: Short Phone Screening on Conversational Tanglish Fluency',
      'Step 3: Consultative Discovery Simulation on Google Meet',
      'Step 4: Final Management Discussion & Offer Alignment',
    ],
    workingHours: '09:30 AM – 7:00 PM IST (Mon – Sat)',
    weeklyOff: 'Fixed Sunday weekly off',
    languageRequirement: 'Mandatory fluent Tamil & English (Tanglish natural conversational ability)',
    equipmentRequirement: 'Personal laptop (i5/8GB+) with stable broadband and quiet consultation environment',
    applicationDeadline: 'Immediate openings — ongoing evaluation',
    status: 'open',
  },
  {
    id: 'job-content-creator-02',
    slug: 'content-writer-social-media-manager',
    title: 'Content Writer & Social Media Manager',
    department: 'Marketing & Brand',
    employmentType: 'Full-time',
    workMode: 'Remote',
    location: 'Remote (India)',
    experience: '2–5 Years in digital content creation, scriptwriting, and social channel management',
    salaryRange: 'Commensurate with portfolio depth & demonstrated performance',
    summary:
      'Take end-to-end ownership of Neuro Recode’s organic brand voice across short-form video scripts, long-form educational essays, social carousels, and narrative campaigns.',
    roleType: 'content',
    responsibilities: [
      'Write compelling, psychology-grounded video scripts for Instagram Reels, YouTube, and masterclasses',
      'Craft captivating hooks, emotional storytelling arcs, and clear non-clinical calls-to-action',
      'Manage the brand content calendar from conceptual research through publishing and community engagement',
      'Provide creative direction and visual storyboards to editors and motion designers',
      'Analyze audience retention, reach, and conversion analytics to iteratively optimize content strategy',
      'Write insightful, science-grounded website blog essays and email newsletter dispatches',
    ],
    requirements: [
      '2–5 years of demonstrable experience writing high-performing video scripts and social copy for modern consumer brands',
      'Exceptional storytelling skills capable of simplifying complex emotional patterns into punchy, relatable insights',
      'Proven portfolio showcasing short-form video hooks, carousel copywriting, and organic engagement results',
      'Deep understanding of Instagram, YouTube, and LinkedIn algorithm dynamics and audience psychology',
      'Ability to take complete end-to-end ownership from idea to final published asset',
    ],
    preferredQualifications: [
      'Interest or background in behavioral neuroscience, mindfulness, or personal development',
      'Familiarity with Tanglish cultural nuances and South Indian professional workplace themes',
    ],
    benefits: [
      '100% remote work flexibility from anywhere in India',
      'Full creative freedom and end-to-end ownership of a distinctive mental wellness brand',
      'Collaborative, high-trust environment with direct access to founding leadership',
      'Opportunity to build a high-visibility portfolio touching hundreds of thousands of professionals',
      'Access to internal masterclasses on psychology, neuroscience, and subconscious conditioning',
    ],
    careerPath: [
      'Content Writer & Social Media Manager',
      'Lead Brand Storyteller',
      'Head of Creative & Content',
      'Brand Marketing Director',
    ],
    selectionProcess: [
      'Step 1: CV & Portfolio Review (video script samples required)',
      'Step 2: Practical Scriptwriting Assessment (prompt provided)',
      'Step 3: In-depth Creative Interview with Marketing Leadership',
      'Step 4: Final Management Discussion',
    ],
    workingHours: '10:00 AM – 7:00 PM IST (Mon – Sat)',
    weeklyOff: 'Fixed Sunday weekly off',
    languageRequirement: 'Fluent written & spoken English; good comprehension of Tamil/Tanglish cultural contexts',
    equipmentRequirement: 'Personal laptop with fast internet and access to creative tools (Notion, Figma, Canva)',
    applicationDeadline: 'Open until filled',
    status: 'open',
  },
  {
    id: 'job-performance-mkt-03',
    slug: 'performance-marketing-executive',
    title: 'Performance Marketing Executive — Trained Fresher',
    department: 'Growth & Performance',
    employmentType: 'Full-time',
    workMode: 'Remote / Hybrid',
    location: 'WFH (Months 1–5); Chennai, Tamil Nadu preferred for transition after Month 5',
    experience: '0–1 Year (Certified / Trained Fresher in Performance Marketing)',
    salaryRange: '₹12,000 – ₹18,000 / month (based on evaluation during probation)',
    summary:
      'Drive paid acquisition campaigns across Meta Ads, test ad creatives and landing pages, and maintain strict lead quality standards to fuel our consultation and masterclass funnels.',
    roleType: 'performance-marketing',
    responsibilities: [
      'Execute daily campaign operations on Meta Ads Manager (Facebook & Instagram Ads)',
      'Build, monitor, and optimize ad sets across custom audiences, lookalikes, and broad targeting',
      'Collaborate with the content team to test new video hooks, static creatives, and copy variations weekly',
      'Track lead flow into Frappe CRM, Google Sheets, and FlexiFunnels with zero attribution leakage',
      'Deliver daily performance reports analyzing Spend, CTR, CPM, CPL, and lead-to-consultation conversion rate',
      'Assist in scaling future acquisition channels into Google Ads, YouTube Ads, and SEO funnels',
    ],
    requirements: [
      'Completed professional certification/training in Performance Marketing, Meta Ads, or Digital Marketing',
      'Strong grasp of core advertising metrics: CPC, CPM, CTR, CPL, ROAS, and CAC',
      'Hands-on comfort with Meta Ads Manager, Google Sheets, UTM parameters, and lead forms',
      'Analytical mindset with disciplined attention to daily numbers and data hygiene',
      'Ready to commit to a 3-month probation period with immediate joining preference',
      'Willingness to transition to Chennai hybrid work after month 5',
    ],
    preferredQualifications: [
      'Experience running live budget campaigns during coursework or freelance projects',
      'Familiarity with Zapier/Make automations and WhatsApp Business API integrations',
    ],
    benefits: [
      'Work from home for the first 5 months with dedicated mentorship from senior growth leaders',
      'Hands-on experience managing substantial live ad budgets in the high-demand health & wellness sector',
      'Fast-track career growth based on performance milestones',
      'Daily hands-on coaching in full-funnel digital marketing, analytics, and CRM automation',
      'Supportive culture with an emphasis on continuous learning and experimentation',
    ],
    careerPath: [
      'Performance Marketing Executive (Trained Fresher)',
      'Growth Specialist — Paid Acquisition',
      'Performance Marketing Manager',
      'Head of Growth',
    ],
    selectionProcess: [
      'Step 1: Resume & Certification Screening',
      'Step 2: Technical Knowledge Test on Meta Ads & Metrics (CPC, CTR, CPL)',
      'Step 3: Funnel Analysis & Problem-Solving Discussion on Google Meet',
      'Step 4: Final Offer Discussion',
    ],
    kpis: [
      'Minimum 13 qualified leads/day',
      'Minimum 340 qualified leads/month',
      'Target Cost Per Lead (CPL) ≤ ₹100 while protecting lead qualification quality',
    ],
    workingHours: '10:00 AM – 7:00 PM IST (including 1-hour rest/meal interval)',
    weeklyOff: 'Fixed Sunday weekly off',
    languageRequirement: 'Fluent English; conversational Tamil preferred for lead quality audits',
    equipmentRequirement: 'Personal laptop with stable internet connection',
    applicationDeadline: 'Immediate openings — joiners within 7–15 days preferred',
    status: 'open',
  },
];

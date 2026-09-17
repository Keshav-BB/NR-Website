import { z } from 'zod';

export const LeadSubmissionSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name must be less than 80 characters'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Mobile number is too long')
    .regex(/^[0-9+\s()-]+$/, 'Mobile number contains invalid characters'),
  whatsapp: z.string().max(15, 'WhatsApp number is too long').optional(),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'City is required').max(60, 'City name is too long'),
  preferredLanguage: z.enum(['Tanglish (Tamil + English)', 'English', 'Tamil'], {
    errorMap: () => ({ message: 'Please select your preferred language' }),
  }),
  enquiryType: z.enum(
    [
      'Program Enquiry',
      'Consultation (RCA Booking)',
      'General Support',
      'Billing / Refund Question',
      'Careers / Recruitment',
    ],
    {
      errorMap: () => ({ message: 'Please select an enquiry category' }),
    }
  ),
  message: z.string().max(1000, 'Message cannot exceed 1000 characters').optional(),
  preferredSlot: z.string().max(100).optional(),
  patternArea: z.string().max(100).optional(),
  sessionMode: z.string().max(50).optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must acknowledge the non-clinical wellness disclaimer to proceed',
    }),
  }),
  honeypot: z.string().max(0, 'Spam detected').optional().default(''),
  landingPage: z.string().optional(),
  referrer: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  firstTouchSource: z.string().optional(),
  firstTouchCampaign: z.string().optional(),
});

export type LeadSubmission = z.infer<typeof LeadSubmissionSchema>;

export const JobApplicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  jobTitle: z.string().min(1, 'Job Title is required'),
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  mobile: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15)
    .regex(/^[0-9+\s()-]+$/, 'Mobile number contains invalid characters'),
  city: z.string().min(2, 'Please specify your current location').max(60),
  currentRole: z.string().min(2, 'Current role or latest experience is required'),
  experienceYears: z.string().min(1, 'Please select your experience range'),
  preferredWorkMode: z.string().optional(),
  noticePeriod: z.string().optional(),
  expectedSalary: z.string().optional(),
  linkedinUrl: z
    .string()
    .url('Please provide a valid LinkedIn URL')
    .or(z.literal(''))
    .optional(),
  portfolioUrl: z
    .string()
    .url('Please provide a valid portfolio or work samples link')
    .or(z.literal(''))
    .optional(),
  resumeLink: z
    .string()
    .url('Please provide a valid URL to your resume (Google Drive, Dropbox, or OneDrive)')
    .or(z.literal(''))
    .optional(),
  coverNote: z.string().max(1500, 'Cover note cannot exceed 1500 characters').optional(),
  whyJoin: z.string().max(1000, 'Response cannot exceed 1000 characters').optional(),
  // Role specific fields
  hasLaptop: z.enum(['yes', 'no']).optional(),
  hasStableInternet: z.enum(['yes', 'no']).optional(),
  isFluentTamil: z.enum(['yes', 'no']).optional(),
  preferredInterviewSlot: z.string().max(100).optional(),
  hasMetaAdsExperience: z.enum(['yes', 'no']).optional(),
  certifications: z.string().max(300).optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must consent to data processing for recruitment purposes',
    }),
  }),
  honeypot: z.string().max(0, 'Spam detected').optional().default(''),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;

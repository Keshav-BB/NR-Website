import { enqueueLead } from './queue';
import type { LeadSubmission, JobApplication } from '../validation/schemas';

interface FrappeResponse {
  data?: Record<string, unknown>;
  message?: string;
  exc?: string;
}

export async function submitLeadToFrappe(
  lead: LeadSubmission
): Promise<{ success: boolean; leadId?: string; queued?: boolean; error?: string }> {
  const baseUrl = process.env.FRAPPE_BASE_URL;
  const apiKey = process.env.FRAPPE_API_KEY;
  const apiSecret = process.env.FRAPPE_API_SECRET;

  const frappePayload = {
    doctype: 'Lead',
    lead_name: lead.fullName,
    email_id: lead.email,
    mobile_no: lead.mobile,
    whatsapp_no: lead.whatsapp || lead.mobile,
    city: lead.city,
    custom_preferred_language: lead.preferredLanguage,
    lead_type: lead.enquiryType,
    source: lead.utmSource || 'Website',
    campaign_name: lead.utmCampaign || 'Direct',
    utm_source: lead.utmSource || '',
    utm_medium: lead.utmMedium || '',
    utm_campaign: lead.utmCampaign || '',
    utm_term: lead.utmTerm || '',
    utm_content: lead.utmContent || '',
    first_touch_source: lead.firstTouchSource || '',
    first_touch_campaign: lead.firstTouchCampaign || '',
    landing_page: lead.landingPage || '/',
    notes: lead.message || '',
    qualification_status: 'Unqualified',
  };

  // If credentials are not configured in environment, safely store to queue
  if (!baseUrl || !apiKey || !apiSecret) {
    console.warn('[Frappe] Frappe CRM credentials not configured. Storing lead to local resilient queue.');
    const queuedId = await enqueueLead(frappePayload, 'CRM credentials not configured in environment');
    return { success: true, leadId: queuedId, queued: true };
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/resource/Lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${apiKey}:${apiSecret}`,
      },
      body: JSON.stringify(frappePayload),
      signal: AbortSignal.timeout(8000), // 8 second timeout
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Frappe] API error (${response.status}):`, errorText);
      const queuedId = await enqueueLead(frappePayload, `API HTTP ${response.status}: ${errorText}`);
      return { success: true, leadId: queuedId, queued: true };
    }

    const result = (await response.json()) as FrappeResponse;
    const name = result.data?.name as string | undefined;

    return {
      success: true,
      leadId: name || 'frappe_created',
      queued: false,
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown network error';
    console.error('[Frappe] Network or timeout error during lead submission:', errorMsg);
    const queuedId = await enqueueLead(frappePayload, errorMsg);
    return { success: true, leadId: queuedId, queued: true };
  }
}

export async function submitJobApplicationToFrappe(
  jobApp: JobApplication
): Promise<{ success: boolean; applicantId?: string; queued?: boolean; error?: string }> {
  const baseUrl = process.env.FRAPPE_BASE_URL;
  const apiKey = process.env.FRAPPE_API_KEY;
  const apiSecret = process.env.FRAPPE_API_SECRET;

  const payload = {
    doctype: 'Job Applicant',
    applicant_name: jobApp.fullName,
    email_id: jobApp.email,
    phone_number: jobApp.mobile,
    job_title: jobApp.jobTitle,
    custom_job_id: jobApp.jobId,
    location: jobApp.city,
    total_experience: jobApp.experienceYears,
    notes_and_cover_letter: `${jobApp.currentRole} | ${jobApp.coverNote || ''} | LinkedIn: ${jobApp.linkedinUrl || 'N/A'} | Resume: ${jobApp.resumeLink || 'N/A'}`,
    status: 'Open',
  };

  if (!baseUrl || !apiKey || !apiSecret) {
    console.warn('[Frappe] Frappe CRM credentials not configured for careers. Storing to local queue.');
    const queuedId = await enqueueLead(payload, 'CRM credentials not configured');
    return { success: true, applicantId: queuedId, queued: true };
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/api/resource/Job Applicant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${apiKey}:${apiSecret}`,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Frappe] Careers API error (${response.status}):`, errorText);
      const queuedId = await enqueueLead(payload, `HTTP ${response.status}: ${errorText}`);
      return { success: true, applicantId: queuedId, queued: true };
    }

    const result = (await response.json()) as FrappeResponse;
    const name = result.data?.name as string | undefined;

    return { success: true, applicantId: name || 'job_app_created', queued: false };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Frappe] Careers network error:', msg);
    const queuedId = await enqueueLead(payload, msg);
    return { success: true, applicantId: queuedId, queued: true };
  }
}

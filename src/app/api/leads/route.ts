import { NextRequest, NextResponse } from 'next/server';
import { LeadSubmissionSchema } from '@/lib/validation/schemas';
import { submitLeadToFrappe } from '@/lib/frappe/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot spam trap check
    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      console.warn('[Spam Detection] Honeypot triggered in lead submission');
      // Silently discard spam without alarming bot
      return NextResponse.json({ success: true, message: 'Lead received successfully' });
    }

    const validationResult = LeadSubmissionSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const result = await submitLeadToFrappe(validationResult.data);

    return NextResponse.json({
      success: true,
      leadId: result.leadId,
      queued: result.queued,
      message: 'Your inquiry has been submitted. Our team will contact you shortly.',
    });
  } catch (error) {
    console.error('[API Leads] Unhandled error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error while processing lead.',
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { LeadSubmissionSchema } from '@/lib/validation/schemas';
import { submitLeadToFrappe } from '@/lib/frappe/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Message received' });
    }

    const validation = LeadSubmissionSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const result = await submitLeadToFrappe(validation.data);

    return NextResponse.json({
      success: true,
      leadId: result.leadId,
      queued: result.queued,
      message: 'Thank you for reaching out. We have received your inquiry.',
    });
  } catch (error) {
    console.error('[API Contact] Unhandled error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}

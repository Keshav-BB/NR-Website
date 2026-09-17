import { NextRequest, NextResponse } from 'next/server';
import { JobApplicationSchema } from '@/lib/validation/schemas';
import { submitJobApplicationToFrappe } from '@/lib/frappe/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.honeypot && String(body.honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Application received' });
    }

    const validation = JobApplicationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const result = await submitJobApplicationToFrappe(validation.data);

    return NextResponse.json({
      success: true,
      applicantId: result.applicantId,
      queued: result.queued,
      message: 'Your application has been received. Our recruitment team will review your profile.',
    });
  } catch (error) {
    console.error('[API Careers Apply] Unhandled error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process application' },
      { status: 500 }
    );
  }
}

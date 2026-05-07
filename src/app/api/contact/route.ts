import { NextRequest, NextResponse } from 'next/server';

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple validation function
function validateContactForm(data: unknown): data is ContactRequest {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const form = data as Record<string, unknown>;
  return (
    typeof form.name === 'string' &&
    form.name.trim().length > 0 &&
    typeof form.email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    typeof form.subject === 'string' &&
    form.subject.trim().length > 0 &&
    typeof form.message === 'string' &&
    form.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const body = await request.json();

    // Validate the request
    if (!validateContactForm(body)) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data' },
        { status: 400 }
      );
    }

    // TODO: Send email using your email service (Resend, SendGrid, etc.)
    // For now, just log the message
    console.log('Contact form submission:', body);

    // In production, you would integrate with an email service like:
    // const result = await resend.emails.send({
    //   from: process.env.EMAIL_FROM!,
    //   to: process.env.EMAIL_TO!,
    //   subject: `New message from ${body.name}: ${body.subject}`,
    //   html: `
    //     <p><strong>From:</strong> ${body.name} (${body.email})</p>
    //     <p><strong>Subject:</strong> ${body.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

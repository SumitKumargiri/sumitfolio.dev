import emailjs from '@emailjs/browser';
import type { ContactFormData } from '@/types';

export interface ContactResponse {
  success: boolean;
  message: string;
}

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return {
      success: false,
      message: 'EmailJS is not configured',
    };
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Message sent successfully',
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: 'Failed to send message',
    };
  }
}
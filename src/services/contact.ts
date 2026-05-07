import emailjs from '@emailjs/browser';
import type { ContactFormData } from '@/types';

export interface ContactResponse {
  success: boolean;
  message: string;
}

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return {
      success: false,
      message: 'Contact form is not configured (missing EmailJS env vars).',
    };
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    return { success: true, message: 'Message sent.' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Failed to send message.' };
  }
}

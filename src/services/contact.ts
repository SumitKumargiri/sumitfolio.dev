import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const response = await apiClient.post<ContactResponse>('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Failed to submit contact form',
    };
  }
}

export async function subscribeNewsletter(email: string): Promise<ContactResponse> {
  try {
    const response = await apiClient.post<ContactResponse>('/newsletter/subscribe', { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      message: 'Failed to subscribe to newsletter',
    };
  }
}

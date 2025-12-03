export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'palette' | 'wifi' | 'handshake';
  imageUrls: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const InquiryType = {
  PROJECT: 'PROJECT',
  PARTNERSHIP: 'PARTNERSHIP',
  SUPPORT: 'SUPPORT'
} as const;

export type InquiryTypeValue = typeof InquiryType[keyof typeof InquiryType];

export interface ContactFormState {
  name: string;
  email: string;
  type: InquiryTypeValue;
  message: string;
}
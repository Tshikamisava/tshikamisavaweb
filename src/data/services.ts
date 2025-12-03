import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to streamline your business operations. We build scalable, secure, and user-centric digital solutions.',
    icon: 'code',
    imageUrls: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Diverse team
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', // Black woman professional
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'  // Tech collaboration
    ]
  },
  {
    id: 'design',
    title: 'Graphic Design',
    description: 'Visual storytelling that elevates your brand. From logo creation to full marketing materials, our designs ensure you stand out in the market.',
    icon: 'palette',
    imageUrls: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Creative team
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80', // Black designer
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'  // Collaborative design
    ]
  },
  {
    id: 'ict',
    title: 'Remote ICT Support',
    description: 'Reliable remote technical assistance ensuring your business uptime. We troubleshoot, maintain, and secure your infrastructure from anywhere.',
    icon: 'wifi',
    imageUrls: [
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80', // IT professional
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', // Tech support
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'  // Remote support
    ]
  }
];

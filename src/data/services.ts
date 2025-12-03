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
      'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&w=800&q=80', // Tech workspace
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80', // Professional analyzing data
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'  // Support meeting
    ]
  }
];

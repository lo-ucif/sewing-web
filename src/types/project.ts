export interface Project {
  id: string;
  title: string;
  category: 'Women' | 'Men' | 'Kids' | 'Traditional' | 'Custom';
  description: string;
  longDescription?: string;
  coverImage: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  clientName: string;
  date: string;
  specs: {
    fabric?: string;
    duration?: string;
    serviceType?: string; // e.g., 'Bespoke Tailoring', 'Alteration', 'Restyling'
  };
}

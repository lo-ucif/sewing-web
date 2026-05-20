export interface Project {
  id: string;
  title: string;
  category: "Women" | "Men" | "Kids" | "Traditional" | "Custom";
  type?: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  clientName: string;
  date: string;
  sewingDate?: string;
  specs: {
    fabric?: string;
    duration?: string;
    serviceType?: string; // e.g., 'Bespoke Tailoring', 'Alteration', 'Restyling'
  };
  fabricInfo?: {
    type?: string;
    quantity?: string;
    meterPrice?: string;
    totalPrice?: string;
  };
  supplies?: {
    item: string;
    quantity: number;
    price: string;
  }[];
  suppliesTotal?: string;
  summary?: {
    fabricCost?: string;
    sewingCost?: string;
    totalCost?: string;
  };
  notes?: string;
}

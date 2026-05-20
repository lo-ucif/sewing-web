export interface Project {
  id: string;
  title: string;
  category:
    | "دسيكـ"
    | "فساتين أعراس"
    | "ستايل منزلي"
    | "ستايل قسنطيني"
    | "ستايل قبائلي";
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

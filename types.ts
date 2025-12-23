
export interface Coffee {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Hot' | 'Cold' | 'Brew';
  rating: number;
  origin: string;
  originStory: string;
  sustainabilityScore: number;
  latLng: { lat: number; lng: number };
  flavorProfile: 'Floral' | 'Fruity' | 'Bold' | 'Nutty';
  // Detailed Storytelling Fields
  washingStation?: string;
  farmerStory?: string;
  regionDetail?: string;
  founder?: string;
  mission?: string;
  foundingYear?: number;
  // New Filter Fields
  altitude: number; // in meters
  isRoasted: boolean;
  isVolcanic: boolean;
  publishedAt: string; // ISO date string
}

export interface CartItem extends Coffee {
  quantity: number;
}

export interface TransitStep {
  label: string;
  location: string;
  status: 'Completed' | 'Current' | 'Pending';
  timestamp?: string;
}

export interface Order {
  id: string;
  buyerName: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Shipped' | 'Delivered';
  paymentStatus: 'Pending' | 'Partial' | 'Approved' | 'Refused';
  paymentMethod: 'Standard' | 'Escrow';
  date: string;
  transitHistory: TransitStep[];
  feedback?: {
    rating: number;
    comment: string;
  };
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  favorites: string[];
  role: 'buyer' | 'seller';
}

export interface BuyerPreferences {
  flavor: string[];
  maxPrice: number;
  minRating: number;
  batchSize: 'Retail' | 'Wholesale';
}

export interface SalesData {
  revenue: number;
  orders: number;
  growth: number;
  avgOrderValue: number;
  regionalDemand: { region: string; percentage: number }[];
  inventoryVelocity: { name: string; stockLeft: number; daysUntilEmpty: number }[];
  marketHunger: { profile: string; demandIndex: number; trend: 'up' | 'down' }[];
  activeMatchingBuyers: number;
}

export type Page = 'shop' | 'cart' | 'favorites' | 'ai-chat' | 'seller-dashboard' | 'ai-voice-concierge' | 'orders';

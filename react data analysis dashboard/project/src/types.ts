export interface SalesData {
  month: string;
  revenue: number;
  profit: number;
  customers: number;
}

export interface RegionalData {
  region: string;
  sales: number;
  marketShare: number;
}

export interface ProductData {
  category: string;
  sales: number;
  growth: number;
}
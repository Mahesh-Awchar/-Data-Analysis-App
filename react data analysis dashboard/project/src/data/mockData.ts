import { SalesData, RegionalData, ProductData } from '../types';

export const salesData: SalesData[] = [
  { month: 'Jan', revenue: 45000, profit: 15000, customers: 120 },
  { month: 'Feb', revenue: 52000, profit: 18000, customers: 145 },
  { month: 'Mar', revenue: 49000, profit: 16500, customers: 130 },
  { month: 'Apr', revenue: 58000, profit: 21000, customers: 160 },
  { month: 'May', revenue: 55000, profit: 19500, customers: 150 },
  { month: 'Jun', revenue: 62000, profit: 23000, customers: 175 },
];

export const regionalData: RegionalData[] = [
  { region: 'North', sales: 28000, marketShare: 25 },
  { region: 'South', sales: 32000, marketShare: 30 },
  { region: 'East', sales: 24000, marketShare: 22 },
  { region: 'West', sales: 26000, marketShare: 23 },
];

export const productData: ProductData[] = [
  { category: 'Electronics', sales: 85000, growth: 12.5 },
  { category: 'Clothing', sales: 65000, growth: 8.3 },
  { category: 'Food', sales: 45000, growth: 15.2 },
  { category: 'Home', sales: 55000, growth: 10.1 },
];
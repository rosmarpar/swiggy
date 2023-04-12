export interface Restaurant {
  uid: string;
  cover: string;
  name: string;
  short_name: string;
  cuisines: string[];
  rating: number;
  delivery_time: number;
  distance?: number;
  price: number;
  address?: string;
}

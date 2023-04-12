export interface Item {
  id: string;
  category_id: string;
  uid: string;
  cover: string;
  name: string;
  desc: string;
  price: number;
  rating: number;
  status: boolean;
  variation?: boolean;
  veg?: boolean;
  quantity?: number;
}

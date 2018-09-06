export interface Order {
  id: number;
  dishIds: number[];
  address: string;
  description: string;
  state: string;
  price: string;
}

import {Dish} from './dish';

export interface Order {
  id: number;
  dishIds: Dish[];
  address: string;
  description: string;
  state: string;
  price: string;
}

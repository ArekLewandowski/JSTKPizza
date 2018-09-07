import {Dish} from './dish';

export interface Order {
  id: number;
  dishIds: Dish[];
}

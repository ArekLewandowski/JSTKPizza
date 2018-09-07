import {Injectable} from '@angular/core';
import {Dish} from './dish';
import {Order} from './order';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  order: Order;
  dishesAdded = (JSON.parse(localStorage.getItem('dishesAdded') ? localStorage.getItem('dishesAdded') : '[]') as Dish[]);
  private dishIndex: number;
  sum$: Subject<number> = new Subject();

  constructor() {
  }

  addDishToCart(dish: Dish) {
    this.sum$.next(dish.price);
    this.dishesAdded.push(dish);
    localStorage.setItem('dishesAdded', JSON.stringify(this.dishesAdded));
  }

  getDishesFromCart(): Dish[] {
    return this.dishesAdded;
  }

  removeFromCart(dish: Dish) {
    this.sum$.next(-dish.price);
    this.dishIndex = this.dishesAdded.indexOf(dish);
    this.dishesAdded.splice(this.dishIndex, 1);
    localStorage.setItem('dishesAdded', JSON.stringify(this.dishesAdded));
  }
}

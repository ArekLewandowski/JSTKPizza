import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './dish';
import {Order} from './order';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  dishes$ = new Subject<Dish[]>();
  dishesAdded: Dish[];

  constructor(private httpClient: HttpClient) { }

  addDishToCart(dish: Dish) {
    this.dishesAdded.push(dish);
    // this.httpClient.post('http://localhost:3000/dishes', dish).subscribe(
    //   re => this.getDishesFromCart()
    // );
  }
  // getDishesFromCart(): {
  //   this.dishesAdded;
  //   // this.httpClient.get<Dish[]>('http://localhost:3000/dishes').subscribe(dishes => this.dishes$.next(dishes));
  // }
}

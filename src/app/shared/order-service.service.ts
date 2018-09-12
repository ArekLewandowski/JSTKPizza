import {Injectable} from '@angular/core';
import {Dish} from './dish';
import {Order} from './order';
import {Observable, Subject} from 'rxjs';
import {AddressFormData} from './address-form-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orders$ = new Subject<Order[]>();
  id: 1;
  order: Order;
  address: AddressFormData;
  dishesAdded = (JSON.parse(localStorage.getItem('dishesAdded') ? localStorage.getItem('dishesAdded') : '[]') as Dish[]);
  private dishIndex: number;
  sum$: Subject<number> = new Subject();

  constructor(private httpClient: HttpClient) {
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

  addAddress(address: AddressFormData) {
    this.address = address;
  }

  confirmOrder() {
    this.order = {
      id: this.id,
      dishIds: this.dishesAdded,
      address: this.address,
      status: 'Confirmed',
    };
    this.id++;
    this.httpClient.post('http://localhost:3000/orders', this.order).subscribe();
  }

  getOrders(): void {
    this.httpClient.get<Order[]>('http://localhost:3000/orders').subscribe(orders => this.orders$.next(orders));
  }
  getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`http://localhost:3000/orders/${id}`);
  }
  changeStatus(order: Order) {
    this.httpClient.put(`http://localhost:3000/orders/` + order.id, order).subscribe();
  }
}

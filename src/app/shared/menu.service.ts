import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  dishes$ = new Subject<Dish[]>();

  constructor(private httpClient: HttpClient) {}

  getDishes():  void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes').subscribe(dishes => this.dishes$.next(dishes));
}
  getPizza(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes?type=pizza');
  }
  getPasta(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes?type=pasta');
  }
  getDrinks(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes?type=drinks');
  }
  getDish(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/dishes/${id}`);
  }
  setAvailable(dish: Dish) {
    this.httpClient.put(`http://localhost:3000/dishes/` + dish.id, dish).subscribe();
  }
  addDish(dish: Dish) {
    this.httpClient.post(`http://localhost:3000/dishes`, dish).subscribe();
    this.getDishes();
  }
  removeDish(dish: Dish) {
    this.httpClient.delete(`http://localhost:3000/dishes/` + dish.id).subscribe(() => {this.getDishes(); } );
  }
}

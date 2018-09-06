import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from './dish';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes');
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
}

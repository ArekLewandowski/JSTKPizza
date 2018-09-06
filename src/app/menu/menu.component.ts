import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject} from 'rxjs';
import {OrderServiceService} from '../shared/order-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , OnDestroy {
  @Output() getPizzas = new EventEmitter<Dish[]>();
  private destroy$: Subject<void> = new Subject<void>();
  dish: Dish = {
    'name': 'Pizza Testowa',
    'isAvailable': true,
    'description': 'Nic',
    'type': 'pizza',
    'price': '100',
  };
  dishes: Dish[] = [{
    'id': 1,
    'name': 'Pizza Margherita',
    'isAvailable': true,
    'description': 'Sos, ser',
    'type': 'pizza',
    'price': '22',
  }];
  constructor(private menuService: MenuService,
              private orderSrtvice: OrderServiceService) { }

  ngOnInit() {
    this.menuService.dishes$.subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishesFromCart();
  }
  getPizza(event: Event) {
    this.menuService.getPizza().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  getPasta(event: Event) {
    this.menuService.getPasta().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  getDrinks(event: Event) {
    this.menuService.getDrinks().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  addDish() {
    this.menuService.addDishToCart(this.dish);
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  addDishToCart(){
    this.orderSrtvice.addDishToCart(this.dish);
  }
}

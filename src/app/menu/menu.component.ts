import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject} from 'rxjs';
import {OrderServiceService} from '../shared/order-service.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , OnDestroy {
  @Output() getPizzas = new EventEmitter<Dish[]>();
  private destroy$: Subject<void> = new Subject<void>();
  order: Dish[];
  dish: Dish = {
    'name': 'Pizza Testowa',
    'isAvailable': true,
    'description': 'Nic',
    'type': 'pizza',
    'price': 100,
  };
  dishes: Dish[] = [{
    'id': 1,
    'name': 'Pizza Margherita',
    'isAvailable': true,
    'description': 'Sos, ser',
    'type': 'pizza',
    'price': 22,
  }];
  constructor(private menuService: MenuService,
              private orderService: OrderServiceService) { }

  ngOnInit() {
    this.menuService.dishes$
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishesFromCart();
  }
  getPizza(event: Event) {
    this.menuService.getPizza()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  getPasta(event: Event) {
    this.menuService.getPasta()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  getDrinks(event: Event) {
    this.menuService.getDrinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  addDish() {
    this.menuService.addDishToCart(this.dish);
  }
  addDishToCart(dish: Dish) {
    this.orderService.addDishToCart(dish);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

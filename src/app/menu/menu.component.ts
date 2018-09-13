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
    'description': 'Nic',
    'type': 'pizza',
    'price': 100,
    'available': true
  };
  dishes: Dish[] = [{
    'id': 1,
    'name': 'Pizza Margherita',
    'description': 'Sos, ser',
    'type': 'pizza',
    'price': 22,
    'available': true,
  }];
  constructor(private menuService: MenuService,
              private orderService: OrderServiceService) { }

  ngOnInit() {
    this.menuService.dishes$
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishes();
  }
  getPizza() {
    this.menuService.getPizza()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  getPasta() {
    this.menuService.getPasta()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  getDrinks() {
    this.menuService.getDrinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(dishes => this.dishes = dishes);
  }
  addDishToCart(dish: Dish) {
    this.orderService.addDishToCart(dish);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getDishes() {
    this.menuService.getDishes();
  }

}

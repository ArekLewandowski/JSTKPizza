import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {Subject} from 'rxjs';
import {MenuService} from '../shared/menu.service';
import {OrderServiceService} from '../shared/order-service.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit, OnDestroy{
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
  constructor(private menuService: MenuService) { }

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
  setAvailable(dish) {
    this.dish = dish;
    this.dish.available = true;
    this.menuService.setAvailable(this.dish);
  }
  setNotAvailable(dish) {
    this.dish = dish;
    this.dish.available = false;
    this.menuService.setAvailable(this.dish);
  }
  getDishes() {
    this.menuService.getDishes();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


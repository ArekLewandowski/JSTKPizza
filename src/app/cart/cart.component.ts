import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {Order} from '../shared/order';
import {OrderServiceService} from '../shared/order-service.service';
import {Subject} from 'rxjs';
import {Dish} from '../shared/dish';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  @Output() getPizzas = new EventEmitter<Order>();
  private destroy$: Subject<void> = new Subject<void>();
  private dishes: Dish[] = [];
  sum: number;

  constructor(private menuService: MenuService,
              private orderService: OrderServiceService) {
  }

  ngOnInit() {
      this.dishes = this.orderService.getDishesFromCart();
      this.orderService.sum$
        .pipe(takeUntil(this.destroy$))
        .subscribe(price => this.sum + price );
  }
  removeFromCart(dish: Dish) {
    this.orderService.removeFromCart(dish);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

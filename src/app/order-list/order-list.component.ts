import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {Subject} from 'rxjs';
import {Order} from '../shared/order';
import {takeUntil} from 'rxjs/operators';
import {OrderServiceService} from '../shared/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {
  @Output() getPizzas = new EventEmitter<Dish[]>();
  private destroy$: Subject<void> = new Subject<void>();
  order: Order;
  orders: Order[] = [];
  constructor(private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orderService.orders$
      .pipe(takeUntil(this.destroy$))
      .subscribe(orders => this.orders = orders);
    this.orderService.getOrders();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

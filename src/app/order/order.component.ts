import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderServiceService} from '../shared/order-service.service';
import {Subject, Subscription} from 'rxjs';
import {Order} from '../shared/order';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  id: number;
  order: Order;
  constructor(private readonly route: ActivatedRoute,
              private orderService: OrderServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.orderService.getOrder(+id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(order => this.order = order);
  }
  changeStatus(Status: string) {
    this.order.status = Status;
    this.orderService.changeStatus(this.order);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

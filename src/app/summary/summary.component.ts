import {Component, OnInit} from '@angular/core';
import {OrderServiceService} from '../shared/order-service.service';
import {Dish} from '../shared/dish';
import {AddressFormData} from '../shared/address-form-data';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  dishesOrdered: Dish[] = [];
  address: AddressFormData;
  sum: number;

  constructor(private orderService: OrderServiceService) {
  }

  ngOnInit() {
    this.dishesOrdered = this.orderService.tempDishes;
    this.address = this.orderService.address;
    this.orderService.sum$.subscribe(res => this.sum = res);
  }

}

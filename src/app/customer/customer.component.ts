import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {HttpClient} from '@angular/common/http';
import {MenuService} from '../shared/menu.service';
import {OrderServiceService} from '../shared/order-service.service';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

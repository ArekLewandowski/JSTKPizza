import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {HttpClient} from '@angular/common/http';
import {MenuService} from '../shared/menu.service';

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

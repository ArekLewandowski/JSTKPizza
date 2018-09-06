import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {Order} from '../shared/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() getPizzas = new EventEmitter<Order>();
  order: Order = {
    id: 1,
    dishIds: [
      {
      'id': 1,
      'name': 'Pizza Margherita',
      'isAvailable': true,
      'description': 'Sos, ser',
      'type': 'pizza',
      'price': '22'
    },
      {
        'id': 2,
        'name': 'Pizza Funghi',
        'isAvailable': true,
        'description': 'Sos, ser, pieczarki',
        'type': 'pizza',
        'price': '23.50'
      },
      {
        'id': 3,
        'name': 'Pizza Espana',
        'isAvailable': true,
        'description': 'Chorizo, chili, tomatoes',
        'type': 'pizza',
        'price': '23.90'
      },
    ],
    address: 'Poznań',
    description: 'None',
    state: 'ORDERED',
    price: '22',
};

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

}

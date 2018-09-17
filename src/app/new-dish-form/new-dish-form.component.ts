import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.scss']
})
export class NewDishFormComponent implements OnInit {
  dish: Dish = {
    'name': 'Pizza Testowa',
    'description': 'Nic',
    'type': 'pizza',
    'price': 100,
    'available': true
  };
  submitted = false;
  onSubmit(dish: Dish) {
    this.submitted = true;
    this.menuService.addDish(dish);
    this.router.navigate(['adminmenu']);
  }
  constructor(private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
  }
}

import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , OnDestroy {
  @Output() getPizzas = new EventEmitter<Dish[]>();
  sub: Subscription;
  dishes: Dish[] = [{
    'id': 1,
    'name': 'Pizza Margherita',
    'isAvailable': true,
    'description': 'Sos, ser',
    'type': 'pizza',
    'price': '22',
  }];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.sub = this.menuService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  getPizza(event: Event) {
    this.sub = this.menuService.getPizza().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  getPasta(event: Event) {
    this.sub = this.menuService.getPasta().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  getDrinks(event: Event) {
    this.sub = this.menuService.getDrinks().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  getMenu(event: Event) {
    this.sub = this.menuService.getDishes().subscribe(dishes => this.dishes = dishes);
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}

import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {Subscription} from 'rxjs';
import {MenuService} from '../shared/menu.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit, OnDestroy {
  @Output() getDetails = new EventEmitter<Dish>();
  sub: Subscription;
  id: number;
  dish: Dish = {
    'id': 1,
    'name': 'Pizza Margherita',
    'description': 'Sos, ser',
    'type': 'pizza',
    'price': 22,
    'available': true
  };
  constructor(
    private readonly route: ActivatedRoute,
    private menuService: MenuService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.sub = this.menuService.getDish(+id)
      .subscribe(dish => this.dish = dish);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

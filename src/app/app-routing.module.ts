import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'details/:id', component: DishDetailsComponent},
  {path: 'cart', component: CartComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

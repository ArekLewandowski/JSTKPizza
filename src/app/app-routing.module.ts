import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';
import {CartComponent} from './cart/cart.component';
import {AuthService} from './shared/auth.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent, canActivate: [AuthService]},
  {path: 'details/:id', component: DishDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

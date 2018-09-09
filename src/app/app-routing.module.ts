import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';
import {CartComponent} from './cart/cart.component';
import {AuthService} from './shared/auth.service';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {AdministrationComponent} from './administration/administration.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent,},
  {path: 'details/:id', component: DishDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', component: AdministrationComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'form', component: FormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

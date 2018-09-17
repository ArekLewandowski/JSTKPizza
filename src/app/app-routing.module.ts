import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishDetailsComponent} from './dish-details/dish-details.component';
import {AuthService} from './shared/auth.service';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {AdministrationComponent} from './administration/administration.component';
import {CustomerComponent} from './customer/customer.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderComponent} from './order/order.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {SummaryComponent} from './summary/summary.component';
import {NewDishFormComponent} from './new-dish-form/new-dish-form.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '', component: MenuComponent},
  {path: 'details/:id', component: DishDetailsComponent},
  {path: 'orders/:id', component: OrderComponent, canActivate: [AuthService]},
  {path: 'cart', component: CustomerComponent},
  {path: 'admin', component: AdministrationComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'form', component: FormComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'orders', component: OrderListComponent,  canActivate: [AuthService]},
  {path: 'adminmenu', component: AdminMenuComponent,  canActivate: [AuthService]},
  {path: 'newdish', component: NewDishFormComponent,  canActivate: [AuthService]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

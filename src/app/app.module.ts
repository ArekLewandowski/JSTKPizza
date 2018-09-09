import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomerComponent } from './customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AdministrationComponent } from './administration/administration.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import {AuthService} from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuComponent,
    OrderComponent,
    DishDetailsComponent,
    OrderListComponent,
    AdministrationComponent,
    CartComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

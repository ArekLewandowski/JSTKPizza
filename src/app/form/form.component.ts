import { Component, OnInit } from '@angular/core';
import { AddressFormData} from '../shared/address-form-data';
import {OrderServiceService} from '../shared/order-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model = new AddressFormData(1, '', '', '', null , '', null );
  submitted = false;
  onSubmit(address: AddressFormData) { this.submitted = true;
    this.orderService.addAddress(address);
  }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor(private orderService: OrderServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }
  newAddressData() {
    this.model = new AddressFormData(1, ' ', ' ', ' ', 0, '', 0);
  }
  confirmOrder() {
    this.orderService.confirmOrder();
    this.router.navigate(['menu']);
  }

}

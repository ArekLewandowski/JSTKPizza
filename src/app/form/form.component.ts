import { Component, OnInit } from '@angular/core';
import { AddressFormData} from '../shared/address-form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model = new AddressFormData(1, 'Arek', 'Lewandowski', 'Batorego', 7, 'Poznań', 60687);
  submitted = false;
  onSubmit() { this.submitted = true}
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() {
  }

  ngOnInit() {
  }
  newAddressData() {
    this.model = new AddressFormData(1, ' ', ' ', ' ', 0, '', 0);
  }

}

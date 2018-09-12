import {Dish} from './dish';
import {AddressFormData} from './address-form-data';

export interface Order {
  id: number;
  dishIds: Dish[];
  address: AddressFormData;
  status: String;
}

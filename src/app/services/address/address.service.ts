import { Address } from './../../models/address.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private _addresses = new BehaviorSubject<Address[]>([]);

  get addresses() {
    return this._addresses.asObservable();
  }

  constructor(private api: ApiService) {}

  getAddresses() {
    try {
      //user id
      let allAddress: Address[] = this.api.addresses;
      console.log(allAddress);
      this._addresses.next(allAddress);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  addAddress(param: any) {
    param.id = 'address1';
    param.user_id = 'user1';
    const currentAddressses = this._addresses.value;
    currentAddressses.push(param);
    this._addresses.next(currentAddressses);
  }

  updateAddress(id: any, param: any) {
    param.id = id;
    let currentAddressses = this._addresses.value;
    const index = currentAddressses.findIndex((x: any) => x.id == id);
    currentAddressses[index] = param;
    this._addresses.next(currentAddressses);
  }

  deleteAddress(param: any) {
    let currentAddressses = this._addresses.value;
    currentAddressses = currentAddressses.filter((x: any) => x.id == param.id);
    this._addresses.next(param);
  }
}

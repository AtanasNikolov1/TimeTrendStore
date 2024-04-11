import { Address } from 'src/app/modules/account/interfaces/address.interface';

export interface User {
  id: string;
  addresses: Address[];
  cart: any[];
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

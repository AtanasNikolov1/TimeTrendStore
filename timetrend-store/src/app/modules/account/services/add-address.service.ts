import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, of, throwError } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { Address } from '../interfaces/address.interface';

@Injectable({
  providedIn: 'root',
})
export class AddAddressService {
  constructor(private firestore: AngularFirestore) {}

  addAddress(address: Address): Observable<void> {
    const token = localStorage.getItem('token');
    const userDoc = this.firestore.doc<User>(`users/${token}`);

    return userDoc.valueChanges().pipe(
      map((user: User | undefined) => {
        if (!user) {
          throw new Error('User data not found');
        }
        const updatedAddresses = [...user.addresses, address];
        return userDoc.update({ addresses: updatedAddresses });
      }),
      catchError((error) => {
        console.error('Error adding address:', error);
        alert('Failed to add address. Please try again later.');
        return throwError('Failed to add address');
      }),
      map(() => {})
    );
  }
}

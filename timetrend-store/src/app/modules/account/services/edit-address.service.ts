import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class EditAddressService {
  constructor(private firestore: AngularFirestore) {}

  getAddressById(addressId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const userDocRef = this.firestore.doc<User>(`users/${token}`).ref;

    return from(userDocRef.get()).pipe(
      catchError((error) => {
        console.error('Error fetching address:', error);
        alert('Failed to fetch address. Please try again later.');
        return throwError('Failed to fetch address');
      }),
      map((userDoc) => {
        if (userDoc.exists) {
          const userData = userDoc.data();
          if (userData) {
            const address = userData.addresses.find(
              (a: any) => a.id === addressId
            );
            return address || null;
          }
        }
        return null;
      })
    );
  }

  updateAddress(addressId: string, newData: any): Observable<void> {
    const token = localStorage.getItem('token');
    const userDocRef = this.firestore.doc<User>(`users/${token}`).ref;

    return from(userDocRef.get()).pipe(
      catchError((error) => {
        console.error('Error fetching user document:', error);
        return throwError('Failed to update address');
      }),
      map((userDoc) => {
        if (userDoc.exists) {
          const userData = userDoc.data();
          if (userData) {
            const updatedAddresses = userData.addresses.map((address: any) => {
              if (address.id === addressId) {
                // Update the existing address with new data
                return { ...address, ...newData };
              }
              return address;
            });

            // Update the addresses array in Firestore
            userDocRef
              .update({ addresses: updatedAddresses })
              .then(() => {
                console.log('Address updated successfully.');
              })
              .catch((error) => {
                console.error('Error updating address:', error);
                throw error;
              });
          }
        }
      })
    );
  }
}

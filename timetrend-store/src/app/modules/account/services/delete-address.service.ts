import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DeleteAddressService {
  constructor(private firestore: AngularFirestore) {}

  deleteAddress(addressId: string): Observable<void> {
    const token = localStorage.getItem('token');
    return new Observable<void>((observer) => {
      this.firestore
        .doc<User>(`users/${token}`)
        .ref.get()
        .then((userDoc) => {
          if (userDoc.exists) {
            const userData = userDoc.data();
            if (userData) {
              const updatedAddresses = userData.addresses.filter(
                (address: any) => address.id !== addressId
              );
              this.firestore
                .doc<User>(`users/${token}`)
                .update({ addresses: updatedAddresses })
                .then(() => {
                  observer.next();
                  observer.complete();
                  console.log(
                    `Address with ID ${addressId} deleted successfully.`
                  );
                })
                .catch((error) => {
                  observer.error(error);
                  console.error('Error deleting address:', error);
                });
            }
          }
        })
        .catch((error) => {
          observer.error(error);
          console.error('Error fetching user data:', error);
        });
    }).pipe(
      catchError((error) => {
        alert('Failed to delete address. Please try again later.');
        return throwError(error);
      })
    );
  }
}

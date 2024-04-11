import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private firestore: AngularFirestore) {}

  getUserId(): Observable<User | undefined> {
    const token = localStorage.getItem('token');
    return this.firestore
      .doc<User>(`users/${token}`)
      .valueChanges({ idField: 'id' });
  }
}

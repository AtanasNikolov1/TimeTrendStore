import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private firestore: AngularFirestore) {}

  getAllReviews(): Observable<Review[]> {
    return this.firestore
      .collection<Review>('reviews')
      .valueChanges({ idField: 'id' });
  }
}

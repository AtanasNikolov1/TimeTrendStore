import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class LatestProductsService {
  constructor(private firestore: AngularFirestore) {}

  getNewestProducts(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products', (ref) =>
        ref.orderBy('createdAt', 'desc').limit(5)
      )
      .valueChanges({ idField: 'id' });
  }
}

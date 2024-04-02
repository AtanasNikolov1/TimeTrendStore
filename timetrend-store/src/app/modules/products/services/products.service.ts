import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}

  getAllProducts(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products')
      .valueChanges({ idField: 'id' });
  }
}

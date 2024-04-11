import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.firestore
      .collection<Product>('products')
      .valueChanges({ idField: 'id' });
  }

  getProductById(productId: string): Observable<Product | undefined> {
    return this.firestore
      .doc<Product>(`products/${productId}`)
      .valueChanges({ idField: 'id' });
  }
}

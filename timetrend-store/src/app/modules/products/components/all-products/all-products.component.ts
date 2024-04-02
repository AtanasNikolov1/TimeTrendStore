import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  errorMessage!: string | undefined;
  loading: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts().pipe(
      tap(() => {
        this.loading = false;
      }),
      catchError((error) => {
        console.log('Error fetching products:', error);
        this.errorMessage = 'Failed to fetch products';
        return throwError('Failed to fetch products');
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}

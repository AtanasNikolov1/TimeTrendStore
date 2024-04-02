import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { LatestProductsService } from '../../services/newest-products.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css'],
})
export class LatestProductsComponent implements OnInit {
  latestProducts$!: Observable<Product[]>;
  errorMessage!: string | undefined;
  loading: boolean = true;

  constructor(private latestProductsService: LatestProductsService) {}

  ngOnInit(): void {
    this.latestProducts$ = this.latestProductsService.getNewestProducts().pipe(
      tap(() => {
        this.loading = false;
      }),
      catchError((error) => {
        console.log('Error fetching latest products:', error);
        this.errorMessage = 'Failed to fetch latest products';
        return throwError(this.errorMessage);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}

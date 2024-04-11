import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  Subscription,
  catchError,
  finalize,
  tap,
  throwError,
} from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service'; // Import the CartService

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  private addToCartSubscription: Subscription | undefined;
  productId: string = '';
  product$!: Observable<Product | undefined>;
  errorMessage!: string | undefined;
  loading: boolean = true;
  cartForm!: FormGroup;

  constructor(
    private productService: ProductsService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productId = this.activateRoute.snapshot.paramMap.get('id')!;
    this.product$ = this.productService.getProductById(this.productId).pipe(
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

    // this.cartForm = this.fb.group({
    //   size: ['', Validators.required],
    //   quantity: [1, [Validators.required, Validators.min(1)]],
    // });
  }
}

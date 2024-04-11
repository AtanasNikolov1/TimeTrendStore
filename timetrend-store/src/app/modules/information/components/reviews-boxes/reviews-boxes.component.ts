import { Component } from '@angular/core';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-reviews-boxes',
  templateUrl: './reviews-boxes.component.html',
  styleUrls: ['./reviews-boxes.component.css'],
})
export class ReviewsBoxesComponent {
  reviews$!: Observable<Review[]>;
  errorMessage!: string | undefined;
  loading: boolean = true;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviews$ = this.reviewsService.getAllReviews().pipe(
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

  getStars(rating: number): number[] {
    return Array(rating)
      .fill(0)
      .map((x, i) => i);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating)
      .fill(0)
      .map((x, i) => i);
  }
}

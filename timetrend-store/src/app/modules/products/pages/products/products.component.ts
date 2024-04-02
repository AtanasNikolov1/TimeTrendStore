import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  latestProducts: number[] = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5,
  ];
}

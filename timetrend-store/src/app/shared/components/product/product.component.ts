import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input('product') product = {} as Product;
}

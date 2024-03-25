import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [CommonModule, CoreModule],
  exports: [ProductsComponent, ProductDetailsComponent],
})
export class ProductsModule {}

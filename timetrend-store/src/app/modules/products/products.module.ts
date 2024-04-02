import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesListComponent } from './components/pages-list/pages-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    PagesListComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  exports: [ProductsComponent, ProductDetailsComponent],
})
export class ProductsModule {}

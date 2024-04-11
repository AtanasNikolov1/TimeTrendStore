import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopLinkBtnComponent } from './components/shop-link-btn/shop-link-btn.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    ShopLinkBtnComponent,
    ProductComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ShopLinkBtnComponent,
    ProductComponent,
    LoadingComponent,
    ErrorComponent,
  ],
})
export class SharedModule {}

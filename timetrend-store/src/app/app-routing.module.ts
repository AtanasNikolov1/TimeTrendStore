import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ProductsComponent } from './modules/products/pages/products/products.component';
import { ProductDetailsComponent } from './modules/products/pages/product-details/product-details.component';
import { AboutComponent } from './modules/information/pages/about/about.component';
import { ReviewsComponent } from './modules/information/pages/reviews/reviews.component';
import { OrderComponent } from './modules/order/pages/order/order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

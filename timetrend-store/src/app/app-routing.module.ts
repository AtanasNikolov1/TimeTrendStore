import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { ProductsComponent } from './modules/products/pages/products/products.component';
import { ProductDetailsComponent } from './modules/products/pages/product-details/product-details.component';
import { AboutComponent } from './modules/information/pages/about/about.component';
import { ReviewsComponent } from './modules/information/pages/reviews/reviews.component';
// import { OrderComponent } from './modules/order/pages/order/order.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { AccountComponent } from './modules/account/pages/account/account.component';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { AccountGuard } from './core/guards/account-guard.guard';
import { AccountInfoComponent } from './modules/account/components/account-info/account-info.component';
import { AccountAddressesComponent } from './modules/account/components/account-addresses/account-addresses.component';
import { AddAddressComponent } from './modules/account/components/add-address/add-address.component';
import { EditAddressComponent } from './modules/account/components/edit-address/edit-address.component';
import { ErrorPageComponent } from './core/pages/404/404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  // { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AccountGuard],
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: AccountInfoComponent },
      { path: 'addresses', component: AccountAddressesComponent },
      { path: 'addresses/add', component: AddAddressComponent },
      { path: 'addresses/edit/:id', component: EditAddressComponent },
    ],
  },
  { path: '**', component: ErrorPageComponent },
  // {
  //   path: 'account/addresses',
  //   component: AccountComponent,
  //   canActivate: [AccountGuard],
  // },
  // {
  //   path: 'account/addresses/add',
  //   component: AccountComponent,
  //   canActivate: [AccountGuard],
  // },
  // {
  //   path: 'account/addresses/edit/:id',
  //   component: AccountComponent,
  //   canActivate: [AccountGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, HomeModule, ProductsModule],
  exports: [AuthModule, HomeModule, ProductsModule],
})
export class ModulesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { InformationModule } from './information/information.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    HomeModule,
    ProductsModule,
    InformationModule,
  ],
  exports: [AuthModule, HomeModule, ProductsModule, InformationModule],
})
export class ModulesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { LatestProductsService } from './services/newest-products.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    LatestProductsComponent,
    PromotionsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, CoreModule],
  providers: [LatestProductsService],
  exports: [HomeComponent],
})
export class HomeModule {}

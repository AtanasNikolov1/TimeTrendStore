import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [AboutComponent, ReviewsComponent],
  imports: [CommonModule, CoreModule],
  exports: [AboutComponent, ReviewsComponent],
})
export class InformationModule {}

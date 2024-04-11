import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReviewsHeadingComponent } from './components/reviews-heading/reviews-heading.component';
import { ReviewsBoxesComponent } from './components/reviews-boxes/reviews-boxes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    ReviewsComponent,
    ReviewsHeadingComponent,
    ReviewsBoxesComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule],
  exports: [AboutComponent, ReviewsComponent],
})
export class InformationModule {}

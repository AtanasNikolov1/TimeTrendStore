import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  exports: [HomeComponent],
})
export class HomeModule {}

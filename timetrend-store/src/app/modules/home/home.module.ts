import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';



@NgModule({
  declarations: [
    HeroSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroSectionComponent
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, HomeModule],
  exports: [AuthModule, HomeModule],
})
export class ModulesModule {}

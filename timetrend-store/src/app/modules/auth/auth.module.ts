import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { RegisterWrapperComponent } from './components/register-wrapper/register-wrapper.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ContainerComponent,
    LoginWrapperComponent,
    RegisterWrapperComponent,
  ],
  imports: [CommonModule],
})
export class AuthModule {}

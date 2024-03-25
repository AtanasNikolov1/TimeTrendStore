import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}

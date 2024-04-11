import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/404/404.component';
import { AccountGuard } from './guards/account-guard.guard';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule],
  providers: [AccountGuard, AuthGuard, AuthService],
  exports: [NavigationComponent, FooterComponent, ErrorPageComponent],
})
export class CoreModule {}

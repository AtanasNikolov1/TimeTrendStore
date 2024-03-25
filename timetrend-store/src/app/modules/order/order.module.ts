import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './pages/order/order.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, CoreModule],
  exports: [OrderComponent],
})
export class OrderModule {}

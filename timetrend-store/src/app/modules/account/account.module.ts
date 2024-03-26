import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { AccountAddressesComponent } from './pages/account-addresses/account-addresses.component';

@NgModule({
  declarations: [AccountInfoComponent, AccountAddressesComponent],
  imports: [CommonModule],
})
export class AccountModule {}

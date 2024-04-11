import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './pages/account/account.component';
import { CoreModule } from 'src/app/core/core.module';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountAddressesComponent } from './components/account-addresses/account-addresses.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressBoxComponent } from './components/address-box/address-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
    AccountInfoComponent,
    AccountAddressesComponent,
    EditAddressComponent,
    AddAddressComponent,
    AddressBoxComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AccountComponent, AccountInfoComponent, AccountAddressesComponent],
})
export class AccountModule {}

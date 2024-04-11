import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteAddressService } from '../../services/delete-address.service';

@Component({
  selector: 'app-address-box',
  templateUrl: './address-box.component.html',
  styleUrls: ['./address-box.component.css'],
})
export class AddressBoxComponent {
  @Input() address!: any;
  constructor(
    private deleteAddressService: DeleteAddressService,
    private router: Router
  ) {}

  deleteAddress(addressId: string): void {
    this.deleteAddressService.deleteAddress(addressId).subscribe({
      next: () => {
        console.log(`Address with ID ${addressId} deleted successfully.`);
        this.router.navigate(['/account/addresses']);
      },
      error: (error) => {
        console.error('Error deleting address:', error);
      },
    });
  }
}

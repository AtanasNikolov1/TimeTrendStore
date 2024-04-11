import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditAddressService } from '../../services/edit-address.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  addressInfo: any;
  addressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private editService: EditAddressService,
    private activateRoute: ActivatedRoute, // Add ActivatedRoute
    private router: Router // Add Router
  ) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      addressNickname: ['', [Validators.required, Validators.minLength(4)]],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z -]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z -]+$'),
        ],
      ],
      phoneNumber: ['', [Validators.required]],
      country: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });

    const addressId = this.activateRoute.snapshot.paramMap.get('id')!;
    this.editService.getAddressById(addressId).subscribe(
      (address: any) => {
        this.addressInfo = address;
        this.setFormValues();
      },
      (error) => {
        console.error('Error fetching address:', error);
        alert('Failed to fetch address. Please try again later.');
      }
    );
  }

  setFormValues(): void {
    if (this.addressInfo) {
      this.addressForm.patchValue({
        addressNickname: this.addressInfo.addressNickname,
        firstName: this.addressInfo.firstName,
        lastName: this.addressInfo.lastName,
        phoneNumber: this.addressInfo.phoneNumber,
        country: this.addressInfo.country,
        city: this.addressInfo.city,
        address: this.addressInfo.address,
      });
    }
  }

  save(): void {
    if (this.addressForm.invalid) {
      return;
    }

    const data = this.addressForm.value;
    const addressId = this.activateRoute.snapshot.paramMap.get('id')!;
    const updatedAddress = {
      id: addressId,
      addressNickname: data.addressNickname,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      city: data.city,
      address: data.address,
    };

    this.editService.updateAddress(addressId, updatedAddress).subscribe(
      () => {
        this.router.navigate(['/account/addresses']);
      },
      (error) => {
        console.error('Error updating address:', error);
        alert('Failed to update address. Please try again later.');
      }
    );
  }
}

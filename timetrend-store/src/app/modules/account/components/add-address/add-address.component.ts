import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddAddressService } from '../../services/add-address.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { phoneNumberValidator } from '../../validators/phoneNumberValidator';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  private addAddressSubscription: Subscription | undefined;
  addressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addAddressService: AddAddressService,
    private firestore: AngularFirestore,
    private router: Router
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
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]],
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
  }

  ngOnDestroy(): void {
    if (this.addAddressSubscription) {
      this.addAddressSubscription.unsubscribe();
    }
  }

  addAddress(): void {
    if (this.addressForm.invalid) {
      return;
    }

    const data = this.addressForm.value;
    const addressId = this.firestore.createId();
    const address = {
      id: addressId,
      addressNickname: data.addressNickname,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      country: data.country,
      city: data.city,
      address: data.address,
    };

    this.addAddressSubscription = this.addAddressService
      .addAddress(address)
      .subscribe({
        next: () => {
          console.log('Address added successfully');
          this.addressForm.reset();
          this.router.navigate(['/account/addresses']);
        },
        error: (error) => {
          console.error('Error adding address:', error);
        },
      });
  }
}

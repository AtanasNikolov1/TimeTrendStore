import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { phoneNumberValidator } from '../../validators/phoneNumberValidator';
import { emailValidator } from '../../validators/emailValidator';
import { passwordsValidator } from '../../validators/passwordsValidator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Z][a-zA-Z]*$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Z][a-zA-Z]*$/),
        ],
      ],
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      passGroup: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          rePassword: ['', [Validators.required]],
        },
        { validator: passwordsValidator() }
      ),
    });
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      passGroup: { password },
    } = this.form.value;
    this.authService.register(
      firstName,
      lastName,
      phoneNumber,
      email,
      password
    );

    this.form.reset();
  }
}

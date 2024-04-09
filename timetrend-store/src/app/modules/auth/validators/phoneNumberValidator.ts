import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value as string;
    const bulgarianPhonePattern = /^(0|359)(\d{9})$/;
    if (!bulgarianPhonePattern.test(phoneNumber)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  };
}

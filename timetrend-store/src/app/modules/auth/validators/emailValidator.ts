import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value as string;
    const pattern = /^[a-zA-Z]{6,}@(?:gmail\.com|abv\.bg)$/;
    if (!pattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  };
}

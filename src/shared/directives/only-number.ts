import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export function onlyNumber(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value ? control.value.toString() : null;
    if (value && !/^\d+$/.test(value)) {
      if (value.length === 1) {
        control.setValue('');
      } else {
        control.setValue(value.substring(0, value.length - 1));
      }
    }
    return null;
  };
}

@Directive({
  selector: '[appOnlyNumber],[onlyNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: OnlyNumberValidatorDirective, multi: true}],
})
export class OnlyNumberValidatorDirective implements Validator {
  constructor() {  }

  validate(control: AbstractControl): ValidationErrors | null {
    return onlyNumber()(control);
  }
}

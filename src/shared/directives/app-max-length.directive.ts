import { Directive, Input, OnInit, Optional } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Directive({
  selector: '[appMaxLength]',
})
export class AppMaxLengthDirective implements OnInit {
  @Input()
  appMaxLength: number;
  constructor(
    @Optional() private ngModel: NgModel,
    @Optional() private formControlName: FormControlName
  ) {}
  ngOnInit(): void {
    let valueOld = '';
    const maxLength = this.appMaxLength;

    const controlModel = this.ngModel ? this.ngModel : this.formControlName;

    if (controlModel) {
      controlModel.control.valueChanges.subscribe((value) => {
        value = (value === null || value === undefined)? '' : value;
        controlModel.control.patchValue(value.toString(), {
          emitEvent: false,
        });
        if (value && value.length > maxLength) {
          value = valueOld;
          controlModel.control.patchValue(value ? value.toString().trim() : '', {
            emitEvent: false,
          });
        }
        valueOld = value;
      });
    }
  }
}

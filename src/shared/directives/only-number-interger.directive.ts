import { Directive, OnInit, Optional } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Directive({
  selector: '[onlyNumberInterger]',
})
export class OnlyNumberIntergerDirective implements OnInit {
  constructor(
    @Optional() private formControl: FormControlName,
    @Optional() private ngModel: NgModel
  ) {}
  ngOnInit(): void {
    if (this.formControl) {
      this.formControl.valueChanges.subscribe((value: string) => {
        value = value ? value : '';
        if (value && !/^[\-]?\d*$/.test(value)) {
          value = String(value).substring(0, value.length - 1);
          this.formControl.control.setValue(value);
        }
      });
    }

    if (this.ngModel) {
      this.ngModel.valueChanges.subscribe((value: string) => {
        value = value ? value : '';
        if (value && !/^[\-]?\d*$/.test(value)) {
          value = String(value).substring(0, value.length - 1);
          this.ngModel.control.setValue(value);
        }
      });
    }
  }
}

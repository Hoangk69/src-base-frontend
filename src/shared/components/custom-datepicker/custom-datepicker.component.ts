import { cloneDeep } from 'lodash';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import * as moment from 'moment';
import { Constants } from 'src/shared/models/constants';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
})
export class CustomDatepickerComponent implements OnInit, OnDestroy {
  @Input()
  formControl: FormControlName | NgModel;

  @Input()
  minDate: Date;

  @Input()
  maxDate: Date;

  @Input() isValidate: boolean;

  @Input() placement;

  @Input() showNoti: boolean;

  @Input() notiContent;

  @Input() mode?: string;

  config = cloneDeep(Constants.BG_DATE_PICKER_CONFIG);
  modelDatepicker: Date;
  modelInput: string | Date;
  invalid = false;

  constructor() {
    this.modelDatepicker = new Date(moment().format(Constants.FORMAT_DATE));
    this.modelInput = '';

  }

  ngOnDestroy(): void {
    this.formControl.control.valueChanges.subscribe().unsubscribe();
  }

  ngOnInit(): void {
    if (this.mode === 'month') {
      this.config['minMode'] = 'month';
    }
    this.formControl.control.valueChanges.subscribe((value) => {
      if (value === null || value === '' || value === undefined) {
        this.modelDatepicker = null;
        this.modelInput = '';
      } else {
        if (new Date(this.formControl.value) <= this.minDate) {
          this.modelDatepicker = this.minDate;
          this.modelInput = this.formatInput(this.modelDatepicker);
        } else {
          this.modelDatepicker = new Date(this.formControl.value);
          this.modelInput = this.mode === 'month' ? this.formatInput(this.modelDatepicker,Constants.FORMAT_MONTH) : this.formatInput(this.modelDatepicker);
        }
      }
    });
  }

  private formatInput(date: Date, format: string = Constants.FORMAT_DATE) {
    return moment(date).format(format);
  }

  onChangeDatepicker() {
    if (this.modelDatepicker === null || this.modelDatepicker === undefined) {
      this.modelInput = '';
    } else {
      if (this.mode !== 'month') {
        this.modelInput = this.formatInput(
          moment(this.modelDatepicker, Constants.FORMAT_DATE)
            .startOf('day')
            .toDate(),
        );
        this.invalid = false;
        this.modelDatepicker = new Date(
          moment(this.modelDatepicker).format(Constants.FORMAT_DATE),
        );
      } else {
        this.modelInput = this.formatInput(
          moment(this.modelDatepicker, Constants.FORMAT_DATE)
            .startOf('day')
            .toDate(),
          Constants.FORMAT_MONTH,
        );
        this.invalid = false;
        this.modelDatepicker = new Date(
          moment(this.modelDatepicker).format(Constants.FORMAT_MONTH),
        );
      }
    }
    this.formControl.control.patchValue(this.modelDatepicker, {
      emitEvent: false,
    });
  }

  clearDate() {
    this.modelInput = '';
    this.handleBlur();
  }

  handleBlur() {
    if (this.modelInput) {
      const date = moment(this.modelInput, Constants.FORMAT_DATE, true);
      this.formControl.control.patchValue(date.toDate(), { emitEvent: false });
      const checkDate = date.isValid();
      let errors = this.formControl.errors;
      if (checkDate) {
        this.invalid = false;
        if (this.minDate && this.maxDate) {
          if (
            date.toDate().getTime() <= this.maxDate?.getTime() &&
            date.toDate().getTime() >= this.minDate?.getTime()
          ) {
            this.modelDatepicker = date.toDate();
            if (errors) {
              delete errors.formatDate;
              this.formControl.control.setErrors(errors);
            }
            this.invalid = false;
          } else {
            this.invalid = true;
          }
        } else if (this.maxDate && !this.minDate) {
          if (date.toDate().getTime() <= this.maxDate?.getTime()) {
            this.modelDatepicker = date.toDate();
            if (errors) {
              delete errors.formatDate;
              this.formControl.control.setErrors(errors);
            }
            this.invalid = false;
          } else {
            this.invalid = true;
          }
        } else if (!this.maxDate && this.minDate) {
          if (date.toDate().getTime() >= this.minDate?.getTime()) {
            this.modelDatepicker = date.toDate();
            if (errors) {
              delete errors.formatDate;
              this.formControl.control.setErrors(errors);
            }
            this.invalid = false;
          } else {
            this.invalid = true;
          }
        } else {
          this.modelDatepicker = date.toDate();
          if (errors) {
            delete errors.formatDate;
            this.formControl.control.setErrors(errors);
          }
          this.invalid = false;
        }
      } else {
        if (!errors) {
          errors = {};
        }
        Object.assign(errors, { formatDate: true });
        this.formControl.control.setErrors(errors);
        this.invalid = true;
      }
    } else {
      this.invalid = false;
      this.formControl.control.patchValue(null, { emitEvent: false });
      this.modelDatepicker = null;
    }
  }
}

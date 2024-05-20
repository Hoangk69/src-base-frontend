import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  ViewContainerRef,
  SimpleChanges,
} from '@angular/core';
import { CustomDatepickerComponent } from '../components/custom-datepicker/custom-datepicker.component';
import { FormControlName, NgModel } from '@angular/forms';

@Directive({
  selector: '[appCustomDatepicker]',
})
export class CustomDatepickerDirective implements OnInit, OnChanges {
  component: any;

  @Input() minDate: Date;

  @Input() maxDate: Date;

  @Input() isValidate: boolean;

  @Input() placement;

  @Input() showNoti: boolean;

  @Input() notiContent;

  @Input() mode?: string;

  constructor(
    ref: ElementRef,
    private vcr: ViewContainerRef,
    private componentFactory: ComponentFactoryResolver,
    @Optional() private ngModel: NgModel,
    @Optional() private formControlName: FormControlName,
  ) {
    ref.nativeElement.hidden = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.component) {
      if (changes['minDate']) {
        this.component.instance.minDate = this.minDate;
      }

      if (changes['maxDate']) {
        this.component.instance.maxDate = this.maxDate;
      }

      if (changes['isValidate']) {
        this.component.instance.isValidate = this.isValidate;
      }
    }
  }

  ngOnInit(): void {
    const formControl = this.ngModel ?? this.formControlName;
    this.component = this.vcr.createComponent(
      this.componentFactory.resolveComponentFactory(CustomDatepickerComponent),
    );
    this.component.instance.formControl = formControl;
    this.component.instance.minDate = this.minDate;
    this.component.instance.maxDate = this.maxDate;
    this.component.instance.isValidate = this.isValidate;
    this.component.instance.placement = this.placement;
    this.component.instance.showNoti = this.showNoti;
    this.component.instance.notiContent = this.notiContent;
    this.component.instance.mode = this.mode;
  }
}

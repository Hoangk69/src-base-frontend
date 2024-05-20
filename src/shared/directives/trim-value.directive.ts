import { NgControl } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[trim],textarea[trim]',
})
export class TrimValueDirective {
  constructor(private control: NgControl) {}

  @HostListener('blur', ['$event.target'])
  _onKeyUp(element: HTMLInputElement) {
    const inputType = element.type;
    if (inputType && inputType === 'text') {
      this.control.control.setValue(
        element && element.value && element.value.trim()
      );
    }
  }
}

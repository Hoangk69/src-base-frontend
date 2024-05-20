import { AbstractControl, ValidationErrors } from '@angular/forms';

export function RequiredIfOnlyWhiteSpaces(): ValidationErrors | null {
    return (control: AbstractControl) => {
        const isWhitespace = ((control.value || '') + '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'required': true };
    };
}

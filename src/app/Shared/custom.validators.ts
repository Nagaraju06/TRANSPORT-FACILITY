import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static numbersOnly(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) return null;
        return /^[0-9]+$/.test(value) ? null : { numbersOnly: true };
    }

    static alphabetsOnly(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) return null;
        return /^[A-Za-z\s]+$/.test(value) ? null : { alphabetsOnly: true };
    }

    static vehicleNo(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) return null;
        return /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(value) ? null : { invalidVehicleNo: true };
    }

}
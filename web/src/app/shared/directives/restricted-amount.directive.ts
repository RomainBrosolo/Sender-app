import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AmountValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        if(control.value < 1000){
            return {'AmountTooHigh': true}
        }
        return {'AmountTooHigh': false};
    }
}
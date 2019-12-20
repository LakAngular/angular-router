import {AbstractControl, ValidationErrors, ControlContainer} from '@angular/forms';

export class Customvalidation {

  static isAdminRequired(control: AbstractControl): ValidationErrors | null {
     if (control.value === 'admin') {
       return null;
    } else {
      return {
      isadminrequired: true };
    }
  }


  static greaterThan(val: number) {
    return(control: AbstractControl): ValidationErrors | null => {
      if (control.value > val) {
        return null;
      } else {
        return {
          greaterthan: true
        };
      }
    };

  }
}

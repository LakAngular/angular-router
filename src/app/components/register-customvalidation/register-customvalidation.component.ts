import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors} from '@angular/forms';
import {Customvalidation} from '../../_validation/customvalidation';

@Component({
  selector: 'app-register-customvalidation',
  templateUrl: './register-customvalidation.component.html',
  styleUrls: ['./register-customvalidation.component.scss']
})
export class RegisterCustomvalidationComponent implements OnInit {
registerForm: FormGroup;
user: string [] = ['admin', 'guest', 'others'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: ['', Customvalidation.isAdminRequired],
      qty: ['', Customvalidation.greaterThan(10)],
      personalmobile: '',
      workmobile: ''
    }, {
      Validators(group: FormGroup): ValidationErrors | null  {
        let personalno: string = group.get('personalmobile').value;
        let workno: string = group.get('workmobile').value;
        if (personalno === workno) {
         // console.log(personalno, workno);
          return null;
        } else {
          // console.log('else');
          return {nomatch: true};
        }
      }
    });
  }

hasError(controlName: string, validationName: string): boolean {
    return this.registerForm.get(controlName).hasError(validationName) &&
            (this.registerForm.get(controlName).touched);

  }


}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  username = '';
  phone = '';
  email = '';
  errmessage = '';
  constructor() { }

  ngOnInit() {

  }

  submit(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log(registerForm.value);
      alert('Form Submitted');
    }
  }

  submitform(registerForm1: NgForm) {
    if (registerForm1.invalid && registerForm1.submitted) {
      console.log(registerForm1.value);
      this.errmessage = 'From invalid';
      alert('Form invalid');
    }
  }

  clearform(registerForm: NgForm) {
    registerForm.resetForm();
  }

  clearform(registerForm1: NgForm) {
    registerForm1.resetForm();
  }
}

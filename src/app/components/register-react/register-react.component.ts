import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-react',
  templateUrl: './register-react.component.html',
  styleUrls: ['./register-react.component.scss']
})
export class RegisterReactComponent implements OnInit {
  registerreactForm: FormGroup;
  submitted = false;
  imageURL = '../assets/images/male.jpg';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerreactForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
      telephone: ['', [Validators.required, Validators.pattern('[5-6]{1}[0-9]{9}')]],
      city: '',
      country: '',
      gender: '',
      tc: ['', Validators.requiredTrue]

    });

    this.registerreactForm.get('gender').valueChanges.subscribe( value => {
      console.log(value);
      if (value === 'male') {
        this.imageURL = '../assets/images/male.jpg';
      } else {
        this.imageURL = '../assets/images/female.jpg';
      }
    }
    );
  }


hasError(controlName: string, validationName: string): boolean {
  return this.registerreactForm.get(controlName).hasError(validationName) &&
          (this.registerreactForm.get(controlName).touched || this.submitted);

}

submitform() {
  this.submitted = true;
  // console.log(this.registerreactForm.get('tc').value);
  console.log('values');
  console.log('value' + this.registerreactForm.get('tc').hasError('requiredTrue') &&
  (this.registerreactForm.get('tc').touched));

}
}

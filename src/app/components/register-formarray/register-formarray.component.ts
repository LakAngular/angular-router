import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-formarray',
  templateUrl: './register-formarray.component.html',
  styleUrls: ['./register-formarray.component.scss']
})
export class RegisterFormarrayComponent implements OnInit {

  registerreactForm: FormGroup;
  submitted = false;
  imageURL = '../assets/images/male.jpg';
  country: string[] = ['India', 'USA', 'UK', 'China'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerreactForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
      telephone: ['', [Validators.required, Validators.pattern('[5-6]{1}[0-9]{9}')]],

      addresses: this.fb.array([this.getAddress()]),
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

getAddress() {
  return this.fb.group(
   {
    country: '',
    city: ['', Validators.required],
    address: ['', Validators.required]
   }
  );
}
addAddress() {
  let addresses = this.registerreactForm.get('addresses') as FormArray;
  addresses.push(this.getAddress());
}
deleteAddress(i) {
  let addresses = this.registerreactForm.get('addresses') as FormArray;
  addresses.removeAt(i);
}
hasError(controlName: string, validationName: string): boolean {
  return this.registerreactForm.get(controlName).hasError(validationName) &&
          (this.registerreactForm.get(controlName).touched || this.submitted);

}

submitform() {
  this.submitted = true;
  // console.log(this.registerreactForm.get('tc').value);
}

}

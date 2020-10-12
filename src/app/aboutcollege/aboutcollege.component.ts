import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import {ReactiveFormModule} from '@angular/core';

@Component({
  selector: 'app-aboutcollege',
  templateUrl: './aboutcollege.component.html',
  styleUrls: ['./aboutcollege.component.css'],
})
export class AboutcollegeComponent implements OnInit {
  type: any;
  signupForm
  // data=['fname', 'lname', 'email', 'password']
  // console.log(data[1]);

  // this.formGroup.getRawValue().attribute

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  setComputer(type) {
    this.type = type;
  }

  PostData(){
    console.log(this.signupForm.getRawValue());
    this.signupForm.reset();
  }
}

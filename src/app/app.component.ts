import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstarp';
  signupForm:FormGroup;
  FirstName:string="";
  LastName:string="";
  Email:string="";
  password:string="";

  constructor(private formbuilder:FormBuilder){

  }
  ngOnInit(){

  }
}

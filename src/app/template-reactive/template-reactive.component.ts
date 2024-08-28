import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-reactive',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './template-reactive.component.html',
  styleUrl: './template-reactive.component.css'
})
export class TemplateReactiveComponent {
  companyContact = new FormGroup({
    componyName : new FormControl('',[Validators.required,Validators.minLength(17)]),
    componyEmail : new FormControl({
      value:'compony@yopmail.com',
      disabled:true,
    }),
    name : new FormControl('mutharasu'),
    email : new FormControl('mutharasu@yopmail.com'),
    dob : new FormControl('21-09-2009'),
    genter : new FormControl('male'),
    country : new FormControl('1'),
    address : new FormGroup({
      city:new FormControl('vilupuram'),
      street:new FormControl('7/09-street'),
      zipcode:new FormControl('345-098')
    })
  })

  date = new Date;
  countryList: Country[] = [
    new Country('1', 'UK'),
    new Country('2', 'US'),
    new Country('3', 'AUS'),
    new Country('4', 'CANADA'),
    new Country('5', 'GEEMENI'),
    new Country('6', 'INDIA'),
  ];

  get componyname(){
    return this.companyContact.get('componyName')
  }
  OnSubmit(){
    console.log(this.companyContact.value);

  }
}
class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgControl, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css'
})
export class TemplatedrivenComponent implements OnInit {
  countryList: Country[] = [
    new Country('1', 'UK'),
    new Country('2', 'US'),
    new Country('3', 'AUS'),
    new Country('4', 'CANADA'),
    new Country('5', 'GEEMENI'),
    new Country('6', 'INDIA'),
  ];
  date = new Date;
  contact: Contact;
  ngOnInit(): void {
    this.contact = {
      name: '',
      email: '',
      dob: '',
      genter: '',
      country: '',
      address: ''
    }
  }
OnSubmit(form: NgForm) {
  console.log(form.value);
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

class Contact {
  name: string;
  email: string;
  dob: string;
  genter: string;
  country: string;
  address: string;
}


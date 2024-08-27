import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  carName:string = '';

  //output decrator for thr angular core package
  /**
   * we pass the value by using the EventEmitter interface and
   * we also so pass the datatype like string or array
   */
  @Output() carAdded = new EventEmitter<string>();
  onSubmit(){
    if(this.carName == ''){
      alert('pleace enter the car name...!');
    }else{
    console.log("the value is ",this.carName);
    //send the value outside
    this.carAdded.emit(this.carName);
    this.carName='';
    }

  }
}

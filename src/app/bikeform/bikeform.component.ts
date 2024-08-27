import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bikeform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bikeform.component.html',
  styleUrl: './bikeform.component.css'
})
export class BikeformComponent {

bikeName :string =''

constructor(private bikeService:BikeService){

}
  onSubmit(){
  console.log(this.bikeName);


  //send the value for service class
  this.bikeService.addBikeName(this.bikeName);
  this.bikeName = '';
  }

}

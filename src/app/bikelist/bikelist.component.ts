import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bikelist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './bikelist.component.html',
  styleUrl: './bikelist.component.css'
})
export class BikelistComponent implements OnInit{

  bikeNames:string[] = [];

  constructor(private bikeService:BikeService){

  }

  ngOnInit(): void {
    this.bikeService.bikeName$.subscribe((names)=>{
      this.bikeNames = names;
      console.log("the value is", this.bikeNames = names);

    });
  }
}

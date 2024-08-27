import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  //this is the behaviour subject
  private bikeNameSubject = new BehaviorSubject<string[]>(["KTM","DUKE","BuLlET"]);

 //observable property bikeName$
 bikeName$ = this.bikeNameSubject.asObservable();

  constructor() { }
  addBikeName(name:string){
    //will send the data from list component
   const currentName =  this.bikeNameSubject.getValue();
   const updateName = [...currentName,name];
   this.bikeNameSubject.next(updateName);

  }
}

import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { BikelistComponent } from './bikelist/bikelist.component';
import { BikeformComponent } from './bikeform/bikeform.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, PipeComponentComponent, FormComponent, ListComponent, BikelistComponent, BikeformComponent, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, DoCheck {
  /**
   * we can call also api call because the message is declear fro the onInit hook cycle
   */
  message = '';
  titleSec = 'hello';
  previousTite = 'hello';
  ngOnInit(): void {
    this.message = "Welcome to the angular learning Bro Just do It it Very Intersting ."
  }

  ngDoCheck(): void {
    if (this.titleSec !== this.previousTite) {
      console.log('title property value is changed', this.titleSec);
      this.titleSec = this.previousTite;
    }

  }
  title = 'counter-app';
  carNames: string[] = [];
  onCarAdded(carName: string) {
    console.log(carName, "from the Form App");
    this.carNames.push(carName);
  }

  titleFirst = 'Hello';

  itemList = [
    { id: 1, name: 'moorthy' },
    { id: 2, name: 'ram' },
    { id: 3, name: 'sam' },
    { id: 4, name: 'kumar' },
    { id: 5, name: 'raj' },

  ];
}

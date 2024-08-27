import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {

  @Input() items:any[] = [];
  @Input() titleFirst = '';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['items']){
      console.log("the item property is change ",changes['items'])
    }

    if(changes['titleFirst']){
      console.log("the title property is change ",changes['titleFirst'])
    }
  }

}

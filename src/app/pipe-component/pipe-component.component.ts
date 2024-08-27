import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})
export class PipeComponentComponent {
title = 'Pipe concept';

newDate = new Date()

value:string = '';
change(value:string){
  this.value = value || '';
}

datas= [
  "moorthy","daison","ram","faizal","sudhan","ajay","abu"
];
amount = 1745.90;
currencies: string[] = ['USD', 'INR', 'AFA', 'ATS', 'BRL', 'CAD'];
}

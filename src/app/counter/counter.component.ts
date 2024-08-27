import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count = 0;
increament(){
  this.count++;
}
decreament(){
  if(this.count>0){
    this.count--
  }
}
movies = [
  {title:"don",cretificate:"U",year:2017},
  {title:"KGF",cretificate:"U/A",year:2019},
  {title:"I",cretificate:"U/A",year:2014},
  {title:"Manter",cretificate:"U/A",year:2020},
  {title:"Guna",cretificate:"U/A",year:2008},
  {title:"Ram",cretificate:"U",year:2002,}
];

newMovie: { title: string; cretificate: string; year: number | null } = {
  title: '',
  cretificate: '',
  year: null
};

addMovie(){
  console.log(this.newMovie);
  if(this.newMovie.title && this.newMovie.cretificate && this.newMovie.year !== null){
    this.movies.push({ ...this.newMovie,year: this.newMovie.year ?? 0 });
    console.log("the movie :",this.movies);
  this.newMovie ={title:'',cretificate:'',year:null};
  }
else{
  alert("please enter the value");
}
}
removeMovie(index:number){
  this.movies.splice(index,1);
}

show =false;

change = false;


}



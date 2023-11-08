import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  tutorial: string = `This tutorial is based on pipes`;
  count: number = 285645;
  decValue: number = 3.85674;
  price: number = 99.99;
  today: Date = new Date();

  myObject: object = {
    id: 1,
    newTitle: "First Post"
  }

  simpleArray: string[] = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5',
    'post 6'
  ]

}

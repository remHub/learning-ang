import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {

  simpleArray: {id: number, data: string}[] = [
    {
      id: 1,
      data: "marbles"
    },
    {
      id: 2,
      data: "paper airplanes"
    },
    {
      id: 3,
      data: "toy soldiers"
    },
    {
      id: 4,
      data: "bouncy balls"
    }
  ]

  addToy( toyData: any ) {
    this.simpleArray.push(toyData)
  }

  killArrayElement(ind: number) {
    this.simpleArray.splice(ind, 1)
  }

}

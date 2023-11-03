import { Component } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent {

  btnStylesAdd: string = `bg-blue-600 text-white font-thin p-1 outline outline-1 outline-black ml-2 rounded-md m-2 hover:bg-blue-300 hover:text-black hover:font-semibold`;

  btnStylesDlt: string = `bg-red-600 text-white font-thin p-1 outline outline-1 outline-black ml-2 rounded-md hover:bg-red-300 hover:text-black hover:font-semibold`;

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

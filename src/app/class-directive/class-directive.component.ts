import { Component } from '@angular/core';

@Component({
  selector: 'app-class-directive',
  templateUrl: './class-directive.component.html',
  styleUrls: ['./class-directive.component.css']
})
export class ClassDirectiveComponent {

  ngClassStyles: string[] = [
    `m-2 px-2 py-1 font-thin bg-blue-700 text-white rounded-md outline outline-1 outline-blue-950`,
    `m-2 px-2 py-1 font-thin bg-red-700 text-white rounded-md outline outline-1 outline-red-950`,
    `m-2 px-2 py-1 font-thin bg-green-700 text-white rounded-md outline outline-1 outline-green-950`
  ]

}

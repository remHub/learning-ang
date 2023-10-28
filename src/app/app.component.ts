import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Projects and Tutorials';

  firstName: string = "";
  lastName: string = "";
  state: string  = "";
  addBackground: boolean = false;

  addSomeColor: string = "px-1 py-2 bg-blue-300 outline outline-1 rounded-md shadow-xl";

}

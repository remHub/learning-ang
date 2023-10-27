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

}

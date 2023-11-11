import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Projects and Tutorials';

  keyPressed: any;

  myKeyup(uservalue: any) {
    this.keyPressed = uservalue;
  }

}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // button styles and methods
  clickStyles: any = {
    up: "text-white bg-gradient-to-b from-blue-600 to-blue-800 shadow-lg shadow-blue-900",
    down: "text-black bg-blue-300 outline outline-1 shadow-none"
  };

  btnStyles: string = `${this.clickStyles.up}`;

  myMouseDown() {
    this.btnStyles = `${this.clickStyles.down}`;
  }

  myMouseUp() {
    this.btnStyles = `${this.clickStyles.up}`;
  }

  // eventEmitter and @Output()
  @Output() sendEvent = new EventEmitter<string>();

  messageToParentFromChild: string =
    `This is a message being sent to the parent from the child via EventEmitter and @Ouput() decorator. It sends when button is clicked.`

  sendMessage() {
    this.sendEvent.emit(this.messageToParentFromChild);
  }

}

import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // create new eventEmitter and @Output()
  @Output() sendEventFromChildClass = new EventEmitter<string>();

  // message to send
  messageToParentFromChild: string =
    `This is a message being sent to the parent from the child via EventEmitter and @Ouput() decorator.`

  /**
   * The ngOnInit lifecycle hook in Angular v16 is a crucial method for performing any initialization
   * tasks after a component has been fully created and its data-bound properties are set.
   * It's often referred to as the "component is ready" hook, highlighting its key role
   * in the component's lifecycle.
   * 
   * ngOnInit is called after component is created but before the DOM is rendered.
   */
  ngOnInit() {
    this.sendEventFromChildClass.emit(this.messageToParentFromChild);
  }

}

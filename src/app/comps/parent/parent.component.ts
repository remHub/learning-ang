import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  messageToChildFromParent: string = `This is a message being sent the the child component from the parent conponent.`

}

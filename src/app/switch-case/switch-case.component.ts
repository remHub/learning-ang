import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {

  stepForm: string = "";

  /**
   * Styles
   */
  btnStyles: string = `m-2 bg-blue-600 text-white py-1 px-2 font-thin rounded-md outline outline-1 outline-blue-950`

  onClick(status: string) {
    this.stepForm = status;
  }

}

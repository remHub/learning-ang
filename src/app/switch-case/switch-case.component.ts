import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {

  stepForm: string = "";
  comps: string = "";

  /**
   * Styles
   */
  btnStyles: string = `m-2 bg-gradient-to-b from-blue-400 to-blue-800 text-white py-1 px-2 font-thin rounded-md outline outline-1 outline-blue-950 shadow-lg shadow-slate-500 hover:shadow-none hover:translate-y-1 duration-200 focus:bg-gradient-to-t focus:from-blue-700 focus:to-blue-900 focus:shadow-none focus:translate-y-1`

  onClick(status: string) {
    this.stepForm = status;
  }

  changeComp(newComp: string) {
    this.comps = newComp;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelStylesService {

  constructor() { }

  isMouseEntered: boolean = false;
  isElementFocus: boolean = false;
  isElementContent: boolean = false;

  // base styles
  compStyles: string = `m-5 rounded-md bg-slate-500 shadow-xl shadow-slate-600 outline outline-1`;
  formPanel: string = `w-72 rounded-md outline outline-1 bg-slate-300 p-5 m-5`;
  inputBaseStyles: string = `mb-1 px-2 py-1 w-full rounded-md border-b-4 border-slate-800 focus:outline-none`;
  fieldWrapper: string = `relative mb-5`

  // returned label styles called from the getter
  labelTransStyles: string = "";

  // dynamic label styles depending od mouse in/out and/or blur/focus state
  /**
   * dynamic label styles depending od mouse in/out and/or blur/focus state
   * getters are called without the suffux parens.  In this case they are
   * applied automatically like a variable that automatically assigns
   * itself when changes occur
   */
  get labelStyles(): string {
    const baseStyles = `absolute top-0 left-2 text-xl transition duration-300 text-slate-400`;
    const changeStateStyles = `-translate-y-6 -translate-x-5 scale-75 text-slate-950`;

    if (this.isElementFocus || this.isMouseEntered || this.isElementContent) {
      this.labelTransStyles = `${baseStyles} ${changeStateStyles}`;
    } else if (!this.isElementFocus && !this.isMouseEntered && !this.isElementContent) {
      this.labelTransStyles = `${baseStyles}`
    }

    return this.labelTransStyles;
  }
  userEnter() {
    this.isMouseEntered = true;
  }
  userLeave() {
    this.isMouseEntered = false;
  }
  elementFocus() {
    this.isElementFocus = true;
  }
  elementBlur() {
    this.isElementFocus = false;
  }
  userInput(userData: string) {
    if ( userData !== "" ) {
      this.isElementContent = true;
    } else {
      this.isElementContent = false;
    }
  }

}

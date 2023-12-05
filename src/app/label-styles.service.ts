import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelStylesService {

  constructor() { }

  labelValue: number = 0;
  animateLabel: boolean = false;
  isElementContent: boolean = false;

  // returned label styles called from the getter
  labelTransStyles: string = "";

  /**
   * dynamic label styles depending on mouse in/out and/or blur/focus state
   * getters are called without the suffix parens.  In this case they are
   * applied automatically like a variable that automatically assigns
   * itself when changes occur
   */
  get labelStyles(): string {

    if ( this.animateLabel ) {
      this.labelTransStyles = `labelAsPlaceholder revertToLabel`;
    } else if ( !this.animateLabel ) {
      this.labelTransStyles = `labelAsPlaceholder`;
    }

    return this.labelTransStyles;
  }
  
  moveLabel( swtch: number ) {

    this.labelValue = this.labelValue + swtch;

    console.log( this.labelValue );
    if ( this.labelValue > 0 ) {
      this.animateLabel = true;
    } else if ( this.labelValue <= 0 ) {
      this.animateLabel = false;
    }

  }

  userInput(userData: string) {
    if ( userData !== "" ) {
      this.isElementContent = true;
    } else {
      this.isElementContent = false;
    }
  }

}

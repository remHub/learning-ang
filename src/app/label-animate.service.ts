import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelAnimateService {

  constructor() { }

  labelAnimateCounter: number = 0;
  animateLabel: boolean = false;
  isElementContent: boolean = false;
  inputCharCounter: number = 0;
  // returned label styles called from the getter
  labelTransStyles: string = "";

  /**
   * 
   * 1 or -1 argument sent from template.
   * this.animateLabel boolean value update auto trigers getter
   */
  moveLabel(swtch: number) {

    this.labelAnimateCounter = this.labelAnimateCounter + swtch;

    console.log(this.labelAnimateCounter);
    

    if (this.labelAnimateCounter > 0) {
      // move label from field placeholder text to top of field as label
      this.animateLabel = true;
    } else if (this.labelAnimateCounter <= 0) {
      // move label back into field as placeholder text
      this.animateLabel = false;
    }
  }

  /**
   * dynamic label styles depending on mouse in/out and/or blur/focus state
   * getters are called without the suffix parens.  In this case they are
   * applied automatically like a variable that automatically assigns
   * itself when changes occur
   * 
   * service is imported into component class then 
   * enabled in component class as a constructer argument
   * 
   * constructor(public lblAnimate: LabelAnimateService) {}
   * 
   * then class as well as template have access to service methods and properties
   * 
   */
  get labelAnimateCSS(): string {

    if (this.animateLabel) {
      this.labelTransStyles = `labelAsPlaceholder revertToLabel`;
    } else if (!this.animateLabel) {
      this.labelTransStyles = `labelAsPlaceholder`;
    }

    return this.labelTransStyles;
  }

/**
 * this method handles the input value
 */
  userInput(userData: string) {

    /**
     * The moveLabel() method can only be called once or else the 
     * accumulated value in the moveLabel() method will not allow for the label
     * to return to it's original location as a placeholder
     */
    if (userData !== "" && this.inputCharCounter === 0) {

      ++this.inputCharCounter;

      this.moveLabel(1);

    /**
     * inputCharCounter property is reset to zero when the input element 
     * is empty therefore allowing the moveLabel() method to be 
     * called when user types in the element again
     */
    } else if (userData === "" && this.inputCharCounter !== 0) {

      this.inputCharCounter = 0;

      this.moveLabel(-1)

    }
  }

}

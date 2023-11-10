import { Component } from '@angular/core';
import { LabelStylesService } from 'src/app/label-styles.service';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css'],
  providers: [LabelStylesService]
})
export class FirstNameComponent {

  constructor(public lblStyles: LabelStylesService) {}

  userEnter() {
    this.lblStyles.userEnter();
  }

  userLeave() {
    this.lblStyles.userLeave();
  }

  elementFocus() {
    this.lblStyles.elementFocus();
  }

  elementBlur() {
    this.lblStyles.elementBlur();
  }

  checkForContent(fieldContent: string) {
    this.lblStyles.userInput(fieldContent);
  }
}

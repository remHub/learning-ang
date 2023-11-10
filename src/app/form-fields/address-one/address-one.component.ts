import { Component } from '@angular/core';
import { LabelStylesService } from 'src/app/label-styles.service';

@Component({
  selector: 'app-address-one',
  templateUrl: './address-one.component.html',
  styleUrls: ['./address-one.component.css'],
  providers: [LabelStylesService]
})
export class AddressOneComponent {

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

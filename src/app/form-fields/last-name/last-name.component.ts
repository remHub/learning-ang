import { Component } from '@angular/core';
import { LabelStylesService } from 'src/app/label-styles.service';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css'],
  providers: [LabelStylesService]
})
export class LastNameComponent {

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

}

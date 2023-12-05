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

  moveText( vlue: number ) {
    this.lblStyles.moveLabel(vlue);
  }

  checkForContent(fieldContent: string) {
    this.lblStyles.userInput(fieldContent);
  }
}

import { Component } from '@angular/core';
import { LabelStylesService } from 'src/app/label-styles.service';

@Component({
  selector: 'app-address-two',
  templateUrl: './address-two.component.html',
  styleUrls: ['./address-two.component.css'],
  providers: [LabelStylesService]
})
export class AddressTwoComponent {

  constructor(public lblStyles: LabelStylesService) {}

  moveText( vlue: number ) {
    this.lblStyles.moveLabel(vlue);
  }

  checkForContent(fieldContent: string) {
    this.lblStyles.userInput(fieldContent);
  }
}

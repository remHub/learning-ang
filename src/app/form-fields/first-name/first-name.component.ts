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


  moveText( vlue: number ) {
    this.lblStyles.moveLabel(vlue);
  }


  checkForContent(fieldContent: string) {
    this.lblStyles.userInput(fieldContent);
  }
}

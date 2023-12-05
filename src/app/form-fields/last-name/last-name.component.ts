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

  moveText( vlue: number ) {
    this.lblStyles.moveLabel(vlue);
  }
  
  checkForContent(fieldContent: string) {
    this.lblStyles.userInput(fieldContent);
  }

}

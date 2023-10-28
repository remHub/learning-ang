import { Component } from '@angular/core';
import { LabelStylesService } from 'src/app/label-styles.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent {

  constructor(public lblStyles: LabelStylesService) { }

}

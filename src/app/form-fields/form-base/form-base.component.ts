import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent {

  constructor(public lblAnimate: LabelAnimateService) { }

}

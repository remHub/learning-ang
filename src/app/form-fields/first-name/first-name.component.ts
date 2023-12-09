import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css'],
  providers: [LabelAnimateService]
})
export class FirstNameComponent {

  constructor(public lblAnimate: LabelAnimateService) {}

}

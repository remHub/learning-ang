import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css'],
  providers: [LabelAnimateService]
})
export class LastNameComponent {

  constructor(public lblAnimate: LabelAnimateService) {}

}

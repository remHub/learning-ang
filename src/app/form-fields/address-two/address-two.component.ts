import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-address-two',
  templateUrl: './address-two.component.html',
  styleUrls: ['./address-two.component.css'],
  providers: [LabelAnimateService]
})
export class AddressTwoComponent {

  constructor(public lblAnimate: LabelAnimateService) {}

}
